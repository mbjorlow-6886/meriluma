// Simple include loader: <div data-include="/partials/header.html"></div>
(async function(){
  const targets = document.querySelectorAll('[data-include]');
  for (const el of targets) {
    const src = el.getAttribute('data-include');
    try {
      const res = await fetch(src, { cache: 'no-cache' });
      if (!res.ok) {
        console.error('Include failed:', src, res.status);
        continue;
      }
      const html = await res.text();
      el.outerHTML = html + '\n';
    } catch(e){
      console.error('Include error:', src, e);
    }
  }
})();
