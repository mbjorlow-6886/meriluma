// Simple include loader: <div data-include="/partials/header.html"></div>
(async function(){
  const targets = document.querySelectorAll('[data-include]');
  for (const el of targets) {
    const src = el.getAttribute('data-include');
    try {
      const res = await fetch(src, { cache: 'no-cache' });
      if (!res.ok) continue;
      const html = await res.text();
      el.outerHTML = html + '\n';
    } catch(e){ /* noop */ }
  }
})();