export function isTranslatableParagraph(paragraph) {
  if (!paragraph) return false;
  if (paragraph.kind === 'image') return false;
  return !String(paragraph.en).startsWith('<figure');
}

export function translatableParagraphIndexes(paragraphs = []) {
  return paragraphs
    .map((paragraph, index) => (isTranslatableParagraph(paragraph) ? index : null))
    .filter((index) => index !== null);
}
