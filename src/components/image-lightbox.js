'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const MIN_SCALE = 1;
const MAX_SCALE = 4;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function distance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

export function ImageLightbox({ image, onClose }) {
  const viewportRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const gestureRef = useRef({
    mode: null,
    startScale: 1,
    startDistance: 0,
    startOffset: { x: 0, y: 0 },
    startPoint: { x: 0, y: 0 },
    lastTap: 0,
  });

  const resetView = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (!image) return undefined;
    resetView();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [image, onClose, resetView]);

  if (!image) return null;

  function handleDoubleTap() {
    if (scale > 1.01) {
      resetView();
      return;
    }
    setScale(2);
    setOffset({ x: 0, y: 0 });
  }

  function handleTouchStart(event) {
    const gesture = gestureRef.current;
    if (event.touches.length === 2) {
      gesture.mode = 'pinch';
      gesture.startScale = scale;
      gesture.startDistance = distance(event.touches);
      gesture.startOffset = { ...offset };
      return;
    }

    if (event.touches.length === 1) {
      const now = Date.now();
      if (now - gesture.lastTap < 300) {
        event.preventDefault();
        handleDoubleTap();
        gesture.lastTap = 0;
        return;
      }
      gesture.lastTap = now;

      if (scale > 1) {
        gesture.mode = 'pan';
        gesture.startPoint = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        gesture.startOffset = { ...offset };
      }
    }
  }

  function handleTouchMove(event) {
    const gesture = gestureRef.current;
    if (gesture.mode === 'pinch' && event.touches.length === 2) {
      event.preventDefault();
      const nextScale = clamp(gesture.startScale * (distance(event.touches) / gesture.startDistance), MIN_SCALE, MAX_SCALE);
      setScale(nextScale);
      if (nextScale <= 1.01) {
        setOffset({ x: 0, y: 0 });
      }
      return;
    }

    if (gesture.mode === 'pan' && event.touches.length === 1 && scale > 1) {
      event.preventDefault();
      const dx = event.touches[0].clientX - gesture.startPoint.x;
      const dy = event.touches[0].clientY - gesture.startPoint.y;
      setOffset({
        x: gesture.startOffset.x + dx,
        y: gesture.startOffset.y + dy,
      });
    }
  }

  function handleTouchEnd() {
    gestureRef.current.mode = null;
    if (scale < 1.01) resetView();
  }

  function handleWheel(event) {
    event.preventDefault();
    const nextScale = clamp(scale + (event.deltaY < 0 ? 0.15 : -0.15), MIN_SCALE, MAX_SCALE);
    setScale(nextScale);
    if (nextScale <= 1.01) setOffset({ x: 0, y: 0 });
  }

  return (
    <div className="image-lightbox" onClick={onClose} role="presentation">
      <div className="image-lightbox-toolbar">
        <button className="image-lightbox-btn" type="button" onClick={(event) => { event.stopPropagation(); resetView(); }}>
          重置
        </button>
        <button className="image-lightbox-btn" type="button" onClick={(event) => { event.stopPropagation(); onClose(); }}>
          关闭
        </button>
      </div>
      <div
        className="image-lightbox-viewport"
        onClick={(event) => event.stopPropagation()}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onWheel={handleWheel}
        ref={viewportRef}
      >
        <img
          alt={image.alt}
          className="image-lightbox-image"
          draggable={false}
          src={image.src}
          style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})` }}
        />
      </div>
      <p className="image-lightbox-hint">双指缩放 · 双击放大 · 拖动查看</p>
    </div>
  );
}
