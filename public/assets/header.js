// ========== Global Header Logic (MeriLuma) ==========
(function(){
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('primary-nav');
  const toggle = document.querySelector('.nav-toggle');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Active link based on pathname (supports /page and /page.html)
  const path = location.pathname.replace(/index\.html$/, '').toLowerCase();
  document.querySelectorAll('#primary-nav a[data-match]').forEach(a => {
    const match = a.getAttribute('data-match').toLowerCase();
    if (path === '/' && match === '/') a.classList.add('active');
    else if (path.startsWith(match) && match !== '/') a.classList.add('active');
  });

  // Shadow on scroll
  const onScroll = () => {
    if (window.scrollY > 4) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();