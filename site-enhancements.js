document.addEventListener('DOMContentLoaded', () => {
  const tagText = {
    'project-02': 'Store Main Image · Gameplay Visual · Sort Puzzle',
    'project-03': 'Animated Store Graphic · US Store Visual',
    'project-04': 'UA Creative · Multi-size Ad Set',
    'project-07': 'Store Key Art · Visual Integration'
  };
  Object.entries(tagText).forEach(([id, text]) => {
    const tag = document.querySelector(`#${id} .tag`);
    if (tag) tag.textContent = text;
  });

  document.querySelectorAll('#project-03 .goods-gif-row img').forEach((image) => {
    image.src = `${image.getAttribute('src')}?v=2`;
  });
});
