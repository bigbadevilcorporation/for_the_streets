// Emoji reaction counters per page, stored in localStorage
(function(){
  const state = window.STATE || { abbr: 'XX', name: 'Unknown', person: { first: 'Alex' } };
  const keyPrefix = `fts:reactions:${state.abbr}`; // namespace by state
  const emojis = ['👍','❤️','😂','😮','😡'];

  // Avatar initial
  const initialEl = document.getElementById('avatar-initial');
  if (initialEl) {
    initialEl.textContent = (state.person.first || 'A').slice(0,1).toUpperCase();
  }

  // Render chips
  const chipsEl = document.getElementById('zodiac-chips');
  if (chipsEl && state.person.zodiac) {
    chipsEl.innerHTML = '';
    const entries = [
      ['Sun', state.person.zodiac.sun],
      ['Moon', state.person.zodiac.moon],
      ['Rising', state.person.zodiac.rising],
    ];
    for (const [label, sign] of entries) {
      const span = document.createElement('span');
      span.className = 'chip';
      span.textContent = `${label}: ${sign}`;
      chipsEl.appendChild(span);
    }
  }

  // Reaction counts
  const counts = Object.create(null);
  for (const e of emojis) {
    const raw = localStorage.getItem(`${keyPrefix}:${e}`);
    counts[e] = raw ? parseInt(raw, 10) || 0 : 0;
  }

  const bar = document.getElementById('reactions');
  if (bar) {
    for (const e of emojis) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'emoji';
      btn.setAttribute('data-emoji', e);
      btn.innerHTML = `<span class="glyph">${e}</span><span class="count" id="count-${e}">${counts[e]}</span>`;
      btn.addEventListener('click', () => {
        counts[e]++;
        localStorage.setItem(`${keyPrefix}:${e}`, String(counts[e]));
        const c = document.getElementById(`count-${e}`);
        if (c) c.textContent = String(counts[e]);
      });
      bar.appendChild(btn);
    }
  }
})();

