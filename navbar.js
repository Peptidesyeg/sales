const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const navLinks = [
  ['index.html', 'Home'],
  ['about.html', 'About'],
  ['intended-use.html', 'Intended Use'],
  ['shipping.html', 'Shipping'],
  ['contact.html', 'Contact']
];

class SiteNav extends HTMLElement {
  connectedCallback() {
    const hasCustomAnnouncement = Boolean(document.querySelector('body > .announcement'));
    this.innerHTML = `
      ${hasCustomAnnouncement ? '' : `<div class="announcement" role="status">
        <span>Canada-wide shipping</span><span class="announcement-dot"></span><span>Local Edmonton delivery</span>
      </div>`}
      <header class="site-header">
        <a class="brand" href="index.html" aria-label="Peptides YEG home">
          <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <span>PEPTIDES <strong>YEG</strong></span>
        </a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">
          <span></span><span></span>
        </button>
        <nav id="primary-nav" class="primary-nav" aria-label="Primary navigation">
          ${navLinks.map(([href, label]) => `<a href="${href}" ${currentPage === href ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
          <a class="button button-small" href="order.html">Order inquiry <span aria-hidden="true">&#8599;</span></a>
        </nav>
      </header>`;

    const toggle = this.querySelector('.nav-toggle');
    const nav = this.querySelector('.primary-nav');
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open');
      document.body.classList.toggle('menu-open', !isOpen);
    });
  }
}

customElements.define('site-nav', SiteNav);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="footer-grid">
          <div>
            <a class="brand brand-light" href="index.html"><span class="brand-mark"><i></i><i></i><i></i></span><span>PEPTIDES <strong>YEG</strong></span></a>
            <p>Research materials supplied for lawful laboratory research purposes only.</p>
          </div>
          <div><h2>Navigate</h2><a href="about.html">About</a><a href="shipping.html">Shipping</a><a href="order.html">Order inquiry</a></div>
          <div><h2>Compliance</h2><a href="intended-use.html">Intended use</a><a href="disclaimer.html">Legal disclaimer</a><a href="disclaimer.html#terms">Terms of sale</a></div>
          <div><h2>Contact</h2><a href="tel:+15878557808">587-855-7808</a><a href="mailto:peptidesyeg@gmail.com">peptidesyeg@gmail.com</a><span>Edmonton, Alberta</span></div>
        </div>
        <div class="footer-bottom"><span>&copy; <span data-year></span> Peptides YEG</span><span>Research use only &middot; Not for human or veterinary use</span></div>
      </footer>`;
    this.querySelector('[data-year]').textContent = new Date().getFullYear();
  }
}

customElements.define('site-footer', SiteFooter);
