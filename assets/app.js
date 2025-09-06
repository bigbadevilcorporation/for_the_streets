// Build tile map on homepage
(function(){
  const grid = window.US_GRID || [];
  function byId(id){ return document.getElementById(id); }
  const container = byId('tile-map');
  if (!container) return;

  for (const s of grid) {
    const a = document.createElement('a');
    a.className = 'tile-state';
    a.href = `states/${s.abbr}.html`;
    a.textContent = s.abbr;
    a.title = s.name;
    a.style.gridColumn = s.col;
    a.style.gridRow = s.row;
    container.appendChild(a);
  }
})();

