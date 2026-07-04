(function () {
  var LINKS = [
    { href: 'index.html', label: '🏠 Home' },
    { href: 'french.html', label: '🇫🇷 French' },
    { href: 'spanish.html', label: '🇪🇸 Spanish' },
    { href: 'portuguese.html', label: '🇵🇹 Portuguese' },
    { href: 'german.html', label: '🇩🇪 German' },
    { href: 'mandarin.html', label: '🇨🇳 Mandarin' },
    { href: 'japanese.html', label: '🇯🇵 Japanese' },
    { divider: true },
    { href: 'about.html', label: '💜 About Us' },
    { href: 'contact.html', label: '✉️ Contact Us' },
    { href: 'privacy-policy.html', label: '🔒 Privacy Policy' },
    { href: 'terms.html', label: '📜 Terms & Conditions' }
  ];

  var currentPage = location.pathname.split('/').pop() || 'index.html';

  var style = document.createElement('style');
  style.textContent =
    '.sidebar-toggle{position:fixed;top:16px;left:16px;width:44px;height:44px;border-radius:14px;border:none;background:var(--purple);color:#fff;font-size:1.2rem;cursor:pointer;box-shadow:0 6px 20px rgba(124,58,237,0.35);z-index:101;display:flex;align-items:center;justify-content:center;}' +
    '.sidebar-overlay{position:fixed;inset:0;background:rgba(30,27,75,0.35);z-index:98;opacity:0;pointer-events:none;transition:opacity .2s ease;}' +
    '.sidebar-overlay.open{opacity:1;pointer-events:auto;}' +
    '.sidebar{position:fixed;top:0;left:0;height:100vh;width:230px;background:var(--white);box-shadow:0 8px 32px rgba(124,58,237,0.18);transform:translateX(-100%);transition:transform .25s ease;z-index:99;display:flex;flex-direction:column;padding:22px 16px;overflow-y:auto;}' +
    '.sidebar.open{transform:translateX(0);}' +
    '.sidebar-brand{font-size:1.3rem;font-weight:900;color:var(--purple);margin:4px 8px 22px;}' +
    '.sidebar-brand em{font-style:italic;color:var(--yellow);}' +
    '.sidebar-link{display:flex;align-items:center;gap:8px;padding:11px 12px;border-radius:12px;color:var(--text-mid);text-decoration:none;font-weight:800;font-size:.92rem;margin-bottom:4px;}' +
    '.sidebar-link:hover{background:var(--purple-faint);color:var(--purple);}' +
    '.sidebar-link.active{background:var(--purple);color:#fff;}' +
    '.sidebar-divider{height:1px;background:var(--purple-faint);margin:10px 4px;}' +
    '@media (min-width:900px){.sidebar{transform:none;box-shadow:none;border-right:3px solid var(--purple-faint);}.sidebar-toggle,.sidebar-overlay{display:none;}body{padding-left:230px;}}';
  document.head.appendChild(style);

  var linksHtml = LINKS.map(function (item) {
    if (item.divider) return '<div class="sidebar-divider"></div>';
    var active = item.href === currentPage ? ' active' : '';
    return '<a class="sidebar-link' + active + '" href="' + item.href + '">' + item.label + '</a>';
  }).join('');

  var aside = document.createElement('aside');
  aside.className = 'sidebar';
  aside.innerHTML = '<div class="sidebar-brand">Flash<em>lingo</em></div>' + linksHtml;

  var overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';

  var toggle = document.createElement('button');
  toggle.className = 'sidebar-toggle';
  toggle.setAttribute('aria-label', 'Toggle menu');
  toggle.innerHTML = '☰';

  document.body.appendChild(aside);
  document.body.appendChild(overlay);
  document.body.appendChild(toggle);

  function open() { aside.classList.add('open'); overlay.classList.add('open'); }
  function close() { aside.classList.remove('open'); overlay.classList.remove('open'); }

  toggle.addEventListener('click', function () {
    aside.classList.contains('open') ? close() : open();
  });
  overlay.addEventListener('click', close);
})();
