'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { articles } from '@/data/articles';
import { apiFetch } from '@/lib/api-client';
import { translatableParagraphIndexes } from '@/lib/paragraph-utils';
import { ArticleTabs } from './article-tabs';
import { AuthModal } from './auth-modal';
import { HomePanel } from './home-panel';
import { HtmlPanel } from './html-panel';
import { ReadingPanel } from './reading-panel';
import { Sidebar } from './sidebar';
import { TopBar } from './top-bar';
import { VocabBar } from './vocab-bar';
import { VocabularyPanel } from './vocabulary-panel';

const emptyDashboard = { progress: {}, notes: {}, favorites: [] };

function parseSavedNotes(content) {
  try {
    const parsed = JSON.parse(content || '[]');
    return Array.isArray(parsed) ? parsed.map((value) => String(value || '')) : [String(content || '')];
  } catch {
    return [String(content || '')];
  }
}

function setWithToggle(current, value) {
  const next = new Set(current);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

export function LearningApp() {
  const [currentArticleId, setCurrentArticleId] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [dashboardState, setDashboardState] = useState(emptyDashboard);
  const [translatedParagraphs, setTranslatedParagraphs] = useState(new Set());
  const [highlightedParagraphs, setHighlightedParagraphs] = useState(new Set());
  const [noteOpenParagraphs, setNoteOpenParagraphs] = useState(new Set());
  const [notes, setNotes] = useState([]);
  const [vocabMode, setVocabMode] = useState(false);
  const noteSaveTimer = useRef(null);

  const article = currentArticleId === null ? null : articles[currentArticleId];
  const articleId = currentArticleId === null ? null : String(currentArticleId);
  const favorite = Boolean(articleId && dashboardState.favorites.includes(articleId));
  const translatableIndexes = useMemo(
    () => translatableParagraphIndexes(article?.paragraphs || []),
    [article?.paragraphs],
  );
  const allTranslationsVisible =
    translatableIndexes.length > 0 && translatableIndexes.every((index) => translatedParagraphs.has(index));

  const title = article ? `📖 ${article.title}` : '📖 Claude + 英语双修课程';

  const persistProgress = useCallback(
    async (nextTranslated = translatedParagraphs, nextHighlighted = highlightedParagraphs, nextNotes = notes) => {
      if (!currentUser || currentArticleId === null) return;

      const payload = {
        translationShown: nextTranslated.size > 0,
        highlighted: nextHighlighted.size > 0,
        noteCount: nextNotes.filter(Boolean).length,
      };
      const res = await apiFetch(`/api/me/progress/${currentArticleId}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const data = await res.json();
        setDashboardState((current) => ({
          ...current,
          progress: { ...current.progress, [String(currentArticleId)]: data.progress },
        }));
      }
    },
    [currentArticleId, currentUser, highlightedParagraphs, notes, translatedParagraphs],
  );

  const persistNotes = useCallback(
    async (nextNotes) => {
      if (!currentUser || currentArticleId === null) return;

      const res = await apiFetch(`/api/me/notes/${currentArticleId}`, {
        method: 'POST',
        body: JSON.stringify({ content: JSON.stringify(nextNotes) }),
      });
      if (res.ok) {
        const data = await res.json();
        setDashboardState((current) => ({
          ...current,
          notes: { ...current.notes, [String(currentArticleId)]: data.note },
        }));
        await persistProgress(translatedParagraphs, highlightedParagraphs, nextNotes);
      }
    },
    [currentArticleId, currentUser, highlightedParagraphs, persistProgress, translatedParagraphs],
  );

  const applyDashboardToArticle = useCallback(
    (nextArticleId, snapshot = dashboardState) => {
      const selected = articles[nextArticleId];
      const key = String(nextArticleId);
      const progress = snapshot.progress[key];
      const noteState = snapshot.notes[key];
      const paragraphCount = selected?.paragraphs?.length || 0;
      const translatable = translatableParagraphIndexes(selected?.paragraphs || []);

      setTranslatedParagraphs(progress?.translationShown ? new Set(translatable) : new Set());
      setHighlightedParagraphs(progress?.highlighted ? new Set([...Array(paragraphCount).keys()]) : new Set());

      if (noteState) {
        const savedNotes = parseSavedNotes(noteState.content);
        setNotes(savedNotes);
        setNoteOpenParagraphs(new Set(savedNotes.map((value, index) => (value ? index : null)).filter((value) => value !== null)));
      } else {
        setNotes([]);
        setNoteOpenParagraphs(new Set());
      }
      setVocabMode(false);
    },
    [dashboardState],
  );

  useEffect(() => {
    async function loadSession() {
      try {
        const meRes = await apiFetch('/api/auth/me', { method: 'GET' });
        if (!meRes.ok) {
          setCurrentUser(null);
          return;
        }
        const meData = await meRes.json();
        setCurrentUser(meData.user);

        const dashboardRes = await apiFetch('/api/me/dashboard', { method: 'GET' });
        if (dashboardRes.ok) {
          const snapshot = await dashboardRes.json();
          setDashboardState(snapshot);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadSession();
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setAuthOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  function selectArticle(nextArticleId) {
    setCurrentArticleId(nextArticleId);
    setActiveTab('structure');
    setSidebarOpen(false);
    applyDashboardToArticle(nextArticleId);
  }

  function goHome() {
    setCurrentArticleId(null);
    setActiveTab('home');
    setSidebarOpen(false);
    setTranslatedParagraphs(new Set());
    setHighlightedParagraphs(new Set());
    setNoteOpenParagraphs(new Set());
    setNotes([]);
    setVocabMode(false);
  }

  function toggleTranslation(index) {
    const next = setWithToggle(translatedParagraphs, index);
    setTranslatedParagraphs(next);
    persistProgress(next).catch(console.error);
  }

  function toggleAllTranslations() {
    if (!article) return;
    const next = allTranslationsVisible ? new Set() : new Set(translatableIndexes);
    setTranslatedParagraphs(next);
    persistProgress(next).catch(console.error);
  }

  function toggleHighlight(index) {
    const next = setWithToggle(highlightedParagraphs, index);
    setHighlightedParagraphs(next);
    persistProgress(translatedParagraphs, next).catch(console.error);
  }

  function toggleNote(index) {
    setNoteOpenParagraphs((current) => setWithToggle(current, index));
    persistProgress().catch(console.error);
  }

  function changeNote(index, value) {
    const next = [...notes];
    next[index] = value.trim();
    setNotes(next);
    setNoteOpenParagraphs((current) => new Set(current).add(index));
    window.clearTimeout(noteSaveTimer.current);
    noteSaveTimer.current = window.setTimeout(() => {
      persistNotes(next).catch(console.error);
    }, 400);
  }

  async function toggleFavorite() {
    if (!article) return;
    if (!currentUser) {
      setAuthOpen(true);
      return;
    }
    const res = await apiFetch(`/api/me/favorites/${currentArticleId}`, {
      method: 'POST',
      body: JSON.stringify({ favorite: !favorite }),
    });
    if (res.ok) {
      setDashboardState((current) => ({
        ...current,
        favorites: favorite
          ? current.favorites.filter((item) => item !== String(currentArticleId))
          : [...current.favorites, String(currentArticleId)],
      }));
    }
  }

  async function submitAuth(mode, credentials) {
    const res = await apiFetch(`/api/auth/${mode}`, {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      window.alert(data.error || '登录失败');
      return;
    }
    setCurrentUser(data.user);
    setAuthOpen(false);

    const dashboardRes = await apiFetch('/api/me/dashboard', { method: 'GET' });
    if (dashboardRes.ok) {
      const snapshot = await dashboardRes.json();
      setDashboardState(snapshot);
      if (currentArticleId !== null) applyDashboardToArticle(currentArticleId, snapshot);
    }
  }

  async function logout() {
    await apiFetch('/api/auth/logout', { method: 'POST' });
    setCurrentUser(null);
    setDashboardState(emptyDashboard);
    if (currentArticleId !== null) applyDashboardToArticle(currentArticleId, emptyDashboard);
  }

  function exportNotes() {
    if (!article) return;
    let content = `# ${article.title} - 学习笔记\n\n导出时间：${new Date().toLocaleString()}\n\n`;
    article.paragraphs.forEach((paragraph, index) => {
      const note = notes[index];
      if (note) {
        const snippet = paragraph.en.replace(/<[^>]*>/g, '').trim().slice(0, 80);
        content += `## 段落 ${index + 1}\n> ${snippet}...\n\n${note}\n\n---\n\n`;
      }
    });
    const blob = new Blob([content], { type: 'text/markdown' });
    const el = document.createElement('a');
    el.href = URL.createObjectURL(blob);
    el.download = `笔记-${article.title.replace(/\s+/g, '-')}.md`;
    el.click();
  }

  const activePanel = useMemo(() => {
    if (!article) return <HomePanel articles={articles} onSelectArticle={selectArticle} />;
    if (activeTab === 'reading') {
      return (
        <ReadingPanel
          article={article}
          highlightedParagraphs={highlightedParagraphs}
          noteOpenParagraphs={noteOpenParagraphs}
          notes={notes}
          onNoteChange={changeNote}
          onToggleHighlight={toggleHighlight}
          onToggleNote={toggleNote}
          onToggleTranslation={toggleTranslation}
          translatedParagraphs={translatedParagraphs}
        />
      );
    }
    if (activeTab === 'vocabulary') return <VocabularyPanel article={article} />;
    if (activeTab === 'structure') return <HtmlPanel html={article.structure} icon="📋" title="准备中" />;
    if (activeTab === 'concepts') return <HtmlPanel html={article.concepts} icon="💡" title="准备中" />;
    if (activeTab === 'tasks') return <HtmlPanel html={article.tasks} icon="✅" title="准备中" />;
    return null;
  }, [activeTab, article, highlightedParagraphs, noteOpenParagraphs, notes, translatedParagraphs]);

  return (
    <>
      <TopBar
        allTranslationsVisible={allTranslationsVisible}
        favorite={favorite}
        isArticleOpen={Boolean(article)}
        onExportNotes={exportNotes}
        onHome={goHome}
        onLogout={logout}
        onOpenAuth={() => setAuthOpen(true)}
        onToggleAllTranslations={toggleAllTranslations}
        onToggleFavorite={toggleFavorite}
        onToggleSidebar={() => setSidebarOpen((open) => !open)}
        onToggleVocab={() => setVocabMode((visible) => !visible)}
        title={title}
        user={currentUser}
      />
      <div className="layout">
        <Sidebar
          articles={articles}
          currentArticleId={currentArticleId}
          onClose={() => setSidebarOpen(false)}
          onSelectArticle={selectArticle}
          open={sidebarOpen}
          visible={Boolean(article)}
        />
        <main className={`main ${article ? '' : 'full'}`} id="mainArea">
          <div className="main-card">
            {article ? <ArticleTabs activeTab={activeTab} onChange={setActiveTab} /> : null}
            {article ? <VocabBar article={article} showChinese={vocabMode} /> : null}
            <div className="tab-content active">{activePanel}</div>
          </div>
        </main>
      </div>
      <AuthModal onClose={() => setAuthOpen(false)} onSubmit={submitAuth} open={authOpen} />
    </>
  );
}
