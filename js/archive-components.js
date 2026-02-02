/**
 * TERMINAL GRADIENT INSTITUTIONAL ARCHIVE
 * Web Components Library
 */

class ArchiveTerminalBox extends HTMLElement {
  connectedCallback() {
    const header = this.getAttribute('header');
    const variant = this.getAttribute('variant'); // e.g., 'secondary', 'compact'
    const subheader = this.getAttribute('subheader');

    let classList = 'terminal-box';
    if (variant) {
      variant.split(' ').forEach(v => {
        classList += ` terminal-box--${v}`;
      });
    }

    const headerHtml = header ? `<div class="terminal-box__header">${header}</div>` : '';
    const subheaderHtml = subheader ? `<div style="border-bottom: 2px solid var(--color-border); padding-bottom: var(--space-2); margin-bottom: var(--space-3);">
        <div style="font-family: var(--font-mono); font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--space-1);">${subheader}</div>
      </div>` : '';

    this.innerHTML = `
      <div class="${classList}">
        ${headerHtml}
        ${subheaderHtml}
        <div class="terminal-box__content">
          ${this.innerHTML}
        </div>
      </div>
    `;
  }
}

class ArchiveMetadataGrid extends HTMLElement {
  connectedCallback() {
    // Expects children to be metadata-row elements or similar
    this.classList.add('metadata-grid');
    if (this.hasAttribute('mt-3')) this.classList.add('mt-3');
    if (this.hasAttribute('mb-4')) this.classList.add('mb-4');
  }
}

class ArchiveMetadataRow extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute('label');
    const value = this.innerHTML;
    this.innerHTML = `
      <div class="metadata-grid__row">
        <div class="metadata-grid__label">${label}</div>
        <div class="metadata-grid__value">${value}</div>
      </div>
    `;
  }
}

class ArchiveStatusBadge extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute('type'); // intervention, refusal, gridlock, classified
    let classList = 'status-badge';
    if (type) classList += ` status-badge--${type}`;

    this.innerHTML = `<span class="${classList}">${this.textContent}</span>`;
  }
}

class ArchiveProgressBar extends HTMLElement {
  static get observedAttributes() { return ['value']; }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const value = this.getAttribute('value') || '0';
    this.innerHTML = `
      <div class="progress-bar">
        <div class="progress-bar__fill" style="width: ${value}%;">
          <span class="progress-bar__text">${value}%</span>
        </div>
      </div>
    `;
  }
}

class ArchiveAdvisoryBox extends HTMLElement {
  connectedCallback() {
    const header = this.getAttribute('header') || 'Reader Advisory';
    const type = this.getAttribute('type'); // red
    let classList = 'advisory';
    if (type === 'red') classList += ' advisory--red';

    this.innerHTML = `
      <div class="${classList}">
        <div class="advisory__header">${header}</div>
        <div class="advisory__content">
          ${this.innerHTML}
        </div>
      </div>
    `;
  }
}

class ArchiveBreadcrumb extends HTMLElement {
  connectedCallback() {
    const items = JSON.parse(this.getAttribute('items') || '[]');
    const current = this.getAttribute('current');

    let html = '<nav class="breadcrumb" aria-label="Breadcrumb">';
    items.forEach((item, index) => {
      html += `<a href="${item.url}" class="breadcrumb__link">${item.label}</a>`;
      html += `<span class="breadcrumb__separator">/</span>`;
    });
    html += `<span>${current}</span></nav>`;

    this.innerHTML = html;
  }
}

class ArchiveNavMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <ul class="nav-menu">
          ${this.innerHTML}
        </ul>
      </nav>
    `;
  }
}

class ArchiveNavItem extends HTMLElement {
  connectedCallback() {
    const href = this.getAttribute('href');
    const active = this.hasAttribute('active');
    const classList = active ? 'nav-menu__link nav-menu__link--active' : 'nav-menu__link';

    this.innerHTML = `
      <li class="nav-menu__item">
        <a href="${href}" class="${classList}">${this.textContent}</a>
      </li>
    `;
  }
}

class ArchiveFooter extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute('text') || 'TERMINAL GRADIENT INSTITUTIONAL ARCHIVE :: ALL RIGHTS RESERVED';
    const subtext = this.getAttribute('subtext');
    const returnLink = this.hasAttribute('return-link');

    const subtextHtml = subtext ? `<div style="margin-top: var(--space-2); color: var(--color-text-secondary); line-height: var(--line-height-normal);">${subtext}</div>` : '';
    const returnLinkHtml = returnLink ? `<div style="margin-top: var(--space-4); margin-bottom: var(--space-4);"><a href="index.html" style="color: inherit; text-decoration: none;">[ Return to Archive Access ]</a></div>` : '';

    this.innerHTML = `
      <footer class="site-footer">
        ${returnLinkHtml}
        <div>${text}</div>
        ${subtextHtml}
        <div style="margin-top: var(--space-4); display: flex; justify-content: center;">
          <img src="img/logo.svg" alt="Institutional Logo" style="width: 48px; height: 48px; opacity: 0.6; filter: grayscale(1);">
        </div>
      </footer>
    `;
  }
}

class ArchiveDocumentCard extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute('doc-id');
    const title = this.getAttribute('doc-title');
    const href = this.getAttribute('href') || 'document-view.html';

    this.innerHTML = `
      <article class="document-card">
        <div class="document-card__id">${id}</div>
        <h3 class="document-card__title">
          <a href="${href}" class="document-card__title-link">${title}</a>
        </h3>
        <div class="document-card__meta">
          ${this.innerHTML}
        </div>
        <div class="document-card__actions">
          <a href="${href}" class="btn btn--small">Access Document</a>
        </div>
      </article>
    `;
  }
}

// Register Components
customElements.define('archive-terminal-box', ArchiveTerminalBox);
customElements.define('archive-metadata-grid', ArchiveMetadataGrid);
customElements.define('archive-metadata-row', ArchiveMetadataRow);
customElements.define('archive-status-badge', ArchiveStatusBadge);
customElements.define('archive-progress-bar', ArchiveProgressBar);
customElements.define('archive-advisory-box', ArchiveAdvisoryBox);
customElements.define('archive-breadcrumb', ArchiveBreadcrumb);
customElements.define('archive-nav-menu', ArchiveNavMenu);
customElements.define('archive-nav-item', ArchiveNavItem);
customElements.define('archive-footer', ArchiveFooter);
customElements.define('archive-document-card', ArchiveDocumentCard);
