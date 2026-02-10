/**
 * INSTITUTE FOR PRECEDENT STUDIES ARCHIVE
 * Web Components Library (Vanilla Custom Elements)
 * 
 * Centralizes UI logic and enforces institutional design standards.
 */

// UTILITY: Flavor Metric Generator
window.generateFlavorMetrics = () => {
  const metrics = [
    { acronym: 'ACI', unit: 'Δ', range: [-128.000, 128.000], precision: 3 },
    { acronym: 'CR', unit: 'rΣ', range: [0.000, 16.384], precision: 4 },
    { acronym: 'EL', unit: 'Eℓ', range: [64.0, 4096.0], precision: 1 },
    { acronym: 'IF', unit: 'φ', range: [-1.000, 1.000], precision: 3 },
    { acronym: 'ADR', unit: '', range: [0.000, 0.999], precision: 3 },
    { acronym: 'QE', unit: 'qX', range: [0.00, 32.00], precision: 2 },
    { acronym: 'CCD', unit: 'CCD', range: [-256.0, 256.0], precision: 1 }
  ];

  const selectedMetrics = [];
  const availableMetrics = [...metrics];

  let randomIndex = Math.floor(Math.random() * availableMetrics.length);
  selectedMetrics.push(availableMetrics.splice(randomIndex, 1)[0]);

  randomIndex = Math.floor(Math.random() * availableMetrics.length);
  selectedMetrics.push(availableMetrics.splice(randomIndex, 1)[0]);

  const generateMetricString = (metric) => {
    const value = (Math.random() * (metric.range[1] - metric.range[0]) + metric.range[0]).toFixed(metric.precision);
    return `${metric.unit ? metric.unit + ' ' : ''}${value}${metric.acronym === 'ADR' ? ' ADR' : ''}`;
  };

  return `<span class="flavor-metric">${generateMetricString(selectedMetrics[0])}</span><span class="flavor-metric">${generateMetricString(selectedMetrics[1])}</span>`;
};

const interpretMarkdown = (text) => {
  if (window.marked && typeof window.marked.parse === 'function') {
    return window.marked.parse(text);
  }
  return text.split('\n\n').map(p => `<p>${p}</p>`).join('');
};

class TGMetadataModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="metadata-modal" class="modal-overlay">
        <div class="modal-content-container">
          <div class="modal-animation-frame"></div>
          <div class="terminal-box modal-body">
            <div class="terminal-box__header" style="display: flex; justify-content: space-between;">
              <span>STRATIGRAPHIC METADATA REGISTER</span>
              <button class="modal-close-btn info-icon">x</button>
            </div>
            <div id="modal-table-container"></div>
          </div>
        </div>
      </div>
    `;

    this.querySelector('.modal-close-btn').addEventListener('click', () => this.hide());
    this.querySelector('.modal-overlay').addEventListener('click', (e) => {
      if (e.target.id === 'metadata-modal') this.hide();
    });
  }

  show(data) {
    const modal = this.querySelector('#metadata-modal');
    const tableContainer = this.querySelector('#modal-table-container');
    
    const whitelist = {
      'fragment_id': 'Record ID',
      'title': 'Designation',
      'collection_attribution': 'Archive Source',
      'time_reference_basis': 'Temporal Basis',
      'strata_depth': 'Strata Depth (m)',
      'isotope_variance': 'Isotope Variance',
      'epistemic_confidence': 'Confidence',
      'is_corrupted': 'Integrity Status'
    };

    let tableHtml = '<table class="metadata-table"><tbody>';
    for (const [key, label] of Object.entries(whitelist)) {
      const value = data[key];
      let displayValue = value === null ? 'NULL' : value;
      
      if (key === 'is_corrupted') {
        displayValue = value ? '!!! CORRUPTED !!!' : 'STABLE';
      }

      tableHtml += `
        <tr>
          <td>${label}</td>
          <td style="font-family: var(--font-mono); font-size: 13px;">${displayValue}</td>
        </tr>
      `;
    }
    tableHtml += '</tbody></table>';
    tableContainer.innerHTML = tableHtml;

    modal.classList.add('modal-active');
  }

  hide() {
    const modal = this.querySelector('#metadata-modal');
    modal.classList.remove('modal-active');
  }
}

class TGBox extends HTMLElement {
  connectedCallback() {
    const header = this.getAttribute('header');
    const variant = this.getAttribute('variant') || '';
    const isCompact = this.hasAttribute('compact');

    let classes = ['terminal-box'];
    if (variant === 'secondary') classes.push('terminal-box--secondary');
    if (isCompact) classes.push('terminal-box--compact');

    const content = this.innerHTML;
    this.innerHTML = `
      <div class="${classes.join(' ')}">
        ${header ? `<div class="terminal-box__header">${header}</div>` : ''}
        <div class="tg-box-content">
          ${content}
        </div>
      </div>
    `;
  }
}

class TGFooter extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute('mode') || 'Institutional Archive';
    this.innerHTML = `
      <footer class="site-footer">
        <p>${type} :: Institute for Precedent Studies Archive</p>
        <p class="mt-2 meta">For inquiries regarding record authenticity or stratigraphic access, contact archival services.</p>
        <div class="site-footer__logo-container" style="margin-top: var(--space-6); display: flex; justify-content: center;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="crispEdges" style="width: 64px; height: 64px; opacity: 0.7;">
            <defs>
              <mask id="logo-mask">
                <rect width="64" height="64" fill="white"/>
                <rect x="8" y="8" width="48" height="48" fill="black"/>
                <rect x="8" y="12" width="8" height="16" fill="white"/>
                <rect x="28" y="28" width="8" height="8" fill="white"/>
              </mask>
            </defs>
            <rect width="64" height="64" fill="var(--color-text-primary)" mask="url(#logo-mask)"/>
          </svg>
        </div>
      </footer>
    `;
  }
}

class TGNav extends HTMLElement {
  connectedCallback() {
    const listItems = Array.from(this.querySelectorAll('a')).map(link => {
      const active = link.hasAttribute('active') ? 'nav-menu__link--active' : '';
      return `
        <li class="nav-menu__item">
          <a href="${link.getAttribute('href')}" class="nav-menu__link nav-link ${active}">${link.textContent}</a>
        </li>
      `;
    }).join('');

    this.innerHTML = `
      <nav>
        <ul class="nav-menu">
          ${listItems}
        </ul>
      </nav>
    `;
  }
}

class TGBreadcrumb extends HTMLElement {
  connectedCallback() {
    const items = Array.from(this.querySelectorAll('a, span'));
    const breadcrumbHtml = items.map((item, index) => {
      const isLast = index === items.length - 1;
      const separator = !isLast ? '<span class="breadcrumb__separator">/</span>' : '';
      const idStr = item.id ? `id="${item.id}"` : '';

      if (item.tagName === 'A') {
        return `<a href="${item.getAttribute('href')}" ${idStr} class="breadcrumb__link">${item.textContent}</a>${separator}`;
      } else {
        return `<span ${idStr}>${item.textContent}</span>${separator}`;
      }
    }).join('');

    this.innerHTML = `
      <nav class="breadcrumb" aria-label="Breadcrumb">
        ${breadcrumbHtml}
      </nav>
    `;
  }
}

class TGStatus extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute('type') || '';
    const label = this.textContent;
    let classes = ['status-badge'];
    if (type === 'alpha' || type === 'pattern-a') classes.push('status-badge--pattern-a');
    if (type === 'beta' || type === 'pattern-b') classes.push('status-badge--pattern-b');
    if (type === 'gamma' || type === 'pattern-c') classes.push('status-badge--pattern-c');

    this.innerHTML = `<span class="${classes.join(' ')}">${label}</span>`;
  }
}

class TGCaseList extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = '<div class="meta">Initializing stratigraphic retrieval...</div>';

    try {
      let retries = 0;
      while (!window.IPS_DB && retries < 100) {
        await new Promise(r => setTimeout(r, 60));
        retries++;
      }

      if (!window.IPS_DB) {
        throw new Error('Database service not located in system environment.');
      }

      const cases = await window.IPS_DB.query('SELECT * FROM cases ORDER BY case_id ASC');
      this.render(cases);
    } catch (err) {
      this.innerHTML = `<div class="advisory advisory--red"><div class="advisory__header">CRITICAL ERROR</div><div class="advisory__content">${err.message}</div></div>`;
    }
  }

  render(cases) {
    if (cases.length === 0) {
      this.innerHTML = '<div class="meta">No case files located in current strata.</div>';
      return;
    }

    const html = cases.map(c => `
      <article class="document-card">
        <div class="document-card__id meta">${c.case_id} :: EPOCH ${c.epoch_estimate}</div>
        <h3 class="document-card__title">
          <a href="case-view.html?id=${c.case_id}" class="document-card__title-link">${c.title}</a>
        </h3>
        <div class="document-card__meta meta">
          <span class="document-card__meta-item">Pattern: ${c.observed_pattern}</span>
          <span class="document-card__meta-item">Status: ${c.epistemic_status}</span>
        </div>
      </article>
    `).join('');

    this.innerHTML = html;
  }
}

class TGArchiveList extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = '<div class="meta">Initializing stratigraphic retrieval...</div>';
    
    this._onFilterUpdate = (e) => this.fetchAndRender(e.detail);
    document.addEventListener('ips-filter-update', this._onFilterUpdate);

    try {
      let retries = 0;
      while (!window.IPS_DB && retries < 100) {
        await new Promise(r => setTimeout(r, 60));
        retries++;
      }

      if (!window.IPS_DB) {
        throw new Error('Database service not located in system environment.');
      }

      await this.fetchAndRender();
    } catch (err) {
      this.innerHTML = `<div class="advisory advisory--red"><div class="advisory__header">CRITICAL ERROR</div><div class="advisory__content">${err.message}</div></div>`;
    }
  }

  disconnectedCallback() {
    document.removeEventListener('ips-filter-update', this._onFilterUpdate);
  }

  async fetchAndRender(filters = {}) {
    try {
      let sql = 'SELECT * FROM fragments WHERE 1=1';
      const params = {};

      if (filters.epochs && filters.epochs.length > 0) {
        sql += ` AND time_reference_basis IN (${filters.epochs.map((_, i) => `$e${i}`).join(',')})`;
        filters.epochs.forEach((e, i) => params[`$e${i}`] = e);
      }

      if (filters.confidence && filters.confidence.length > 0) {
        sql += ` AND epistemic_confidence IN (${filters.confidence.map((_, i) => `$c${i}`).join(',')})`;
        filters.confidence.forEach((c, i) => params[`$c${i}`] = c);
      }

      if (filters.collections && filters.collections.length > 0) {
        sql += ` AND (collection_attribution IN (${filters.collections.map((_, i) => `$col${i}`).join(',')})`;
        if (filters.collections.includes('NULL')) {
          sql += ' OR collection_attribution IS NULL';
        }
        sql += ')';
        filters.collections.filter(c => c !== 'NULL').forEach((c, i) => params[`$col${i}`] = c);
      }

      sql += ' ORDER BY pi_estimation DESC';
      
      const fragments = await window.IPS_DB.query(sql, params);
      this.render(fragments);
    } catch (err) {
      this.innerHTML = `<div class="advisory advisory--red"><div class="advisory__header">QUERY ERROR</div><div class="advisory__content">${err.message}</div></div>`;
    }
  }

  render(fragments) {
    if (fragments.length === 0) {
      this.innerHTML = '<div class="meta">No records located matching current filter parameters.</div>';
      return;
    }

    const html = fragments.map(f => `
      <div class="document-card">
        <div class="document-card__id">${f.fragment_id} :: DEPTH ${(f.strata_depth || 0.0).toFixed(1)}m</div>
        <h2 class="document-card__title">
          <a href="fragment-view.html?id=${f.fragment_id}" class="document-card__title-link">${f.title}</a>
        </h2>
        <div class="document-card__meta meta">
          <span class="document-card__meta-item">Confidence: ${f.epistemic_confidence}</span>
          <span class="document-card__meta-item">Attribution: ${f.collection_attribution || 'UNKNOWN'}</span>
        </div>
      </div>
    `).join('');

    this.innerHTML = html;
  }
}

class TGFilterPanel extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.innerHTML = `
      <div class="filter-panel">
        <div class="filter-panel__header">Query Parameters</div>

        <div class="filter-group">
          <span class="filter-group__label">Temporal Basis</span>
          <label class="filter-option">
            <input type="checkbox" class="ips-filter" data-group="epochs" value="AI" checked>
            <span class="form-checkbox-label">Ante-Institutional (AI)</span>
          </label>
          <label class="filter-option">
            <input type="checkbox" class="ips-filter" data-group="epochs" value="PI" checked>
            <span class="form-checkbox-label">Post-Institutional (PI)</span>
          </label>
        </div>

        <div class="filter-group">
          <span class="filter-group__label">Epistemic Confidence</span>
          <label class="filter-option">
            <input type="checkbox" class="ips-filter" data-group="confidence" value="high" checked>
            <span class="form-checkbox-label">High Confidence</span>
          </label>
          <label class="filter-option">
            <input type="checkbox" class="ips-filter" data-group="medium" value="medium" checked>
            <span class="form-checkbox-label">Medium Confidence</span>
          </label>
          <label class="filter-option">
            <input type="checkbox" class="ips-filter" data-group="low" value="low" checked>
            <span class="form-checkbox-label">Low Confidence / Speculative</span>
          </label>
        </div>

        <div class="filter-group">
          <span class="filter-group__label">Core Collections</span>
          <label class="filter-option">
            <input type="checkbox" class="ips-filter" data-group="collections" value="REMNANTS" checked>
            <span class="form-checkbox-label">REMNANTS</span>
          </label>
          <label class="filter-option">
            <input type="checkbox" class="ips-filter" data-group="collections" value="Testimonies of Unraveling" checked>
            <span class="form-checkbox-label">Testimonies of Unraveling</span>
          </label>
          <label class="filter-option">
            <input type="checkbox" class="ips-filter" data-group="collections" value="NULL" checked>
            <span class="form-checkbox-label">Unattributed Fragments</span>
          </label>
        </div>

        <button class="btn btn--small mt-3 ips-filter-reset" style="width: 100%;">Reset Parameters</button>
      </div>
    `;
  }

  setupEventListeners() {
    this.addEventListener('change', (e) => {
      if (e.target.classList.contains('ips-filter')) {
        this.emitFilterUpdate();
      }
    });

    this.querySelector('.ips-filter-reset').addEventListener('click', () => {
      this.querySelectorAll('.ips-filter').forEach(cb => cb.checked = true);
      this.emitFilterUpdate();
    });
  }

  emitFilterUpdate() {
    const filters = {
      epochs: [],
      confidence: [],
      collections: []
    };

    this.querySelectorAll('.ips-filter:checked').forEach(cb => {
      const group = cb.getAttribute('data-group');
      if (filters[group]) {
        filters[group].push(cb.value);
      } else if (group === 'medium' || group === 'low') {
        filters.confidence.push(cb.value);
      }
    });

    filters.confidence = [];
    this.querySelectorAll('.ips-filter[data-group="confidence"]:checked, .ips-filter[data-group="medium"]:checked, .ips-filter[data-group="low"]:checked').forEach(cb => {
        filters.confidence.push(cb.value);
    });

    document.dispatchEvent(new CustomEvent('ips-filter-update', {
      detail: filters
    }));
  }
}

class TGRecentlyCatalogued extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = '<div class="meta">Initializing stratigraphic retrieval...</div>';

    try {
      let retries = 0;
      while (!window.IPS_DB && retries < 100) {
        await new Promise(r => setTimeout(r, 60));
        retries++;
      }

      if (!window.IPS_DB) {
        throw new Error('Database service not located in system environment.');
      }

      const cases = await window.IPS_DB.query('SELECT * FROM cases ORDER BY case_id ASC LIMIT 2');
      this.render(cases);
    } catch (err) {
      this.innerHTML = `<div class="advisory advisory--red"><div class="advisory__header">CRITICAL ERROR</div><div class="advisory__content">${err.message}</div></div>`;
    }
  }

  render(cases) {
    if (cases.length === 0) {
      this.innerHTML = '<div class="meta">No recently catalogued cases located.</div>';
      return;
    }

    const html = cases.map(c => `
      <article class="document-card">
        <div class="document-card__id meta">${c.case_id}</div>
        <h3 class="document-card__title">
          <a href="case-view.html?id=${c.case_id}" class="document-card__title-link">${c.title}</a>
        </h3>
        <div class="document-card__meta meta">
          <span class="document-card__meta-item">Pattern: ${c.observed_pattern}</span>
          <span class="document-card__meta-item">Type: Case Study</span>
          <span class="document-card__meta-item">Dating: ${c.epoch_estimate}</span>
        </div>
      </article>
    `).join('');

    this.innerHTML = html;
  }
}

class TGFragmentList extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = '<div class="meta">Initializing stratigraphic retrieval...</div>';
    try {
      let retries = 0;
      while (!window.IPS_DB && retries < 100) {
        await new Promise(r => setTimeout(r, 60));
        retries++;
      }
      if (!window.IPS_DB) throw new Error('Database service not located.');

      const fragments = await window.IPS_DB.getFragments();
      this.render(fragments);
    } catch (err) {
      this.innerHTML = `<div class="advisory advisory--red"><div class="advisory__header">CRITICAL ERROR</div><div class="advisory__content">${err.message}</div></div>`;
    }
  }

  render(fragments) {
    if (fragments.length === 0) {
      this.innerHTML = '<div class="meta">No data fragments located in current strata.</div>';
      return;
    }
    this.innerHTML = fragments.map(f => `
      <div class="document-card">
        <div class="document-card__id">${f.fragment_id} :: DEPTH ${f.strata_depth}m</div>
        <h2 class="document-card__title">
          <a href="case-view.html?id=${f.fragment_id}" class="document-card__title-link">${f.title}</a>
        </h2>
        <div class="document-card__meta meta">
          <span class="document-card__meta-item">Confidence: ${f.epistemic_confidence}%</span>
          <span class="document-card__meta-item">Attribution: ${f.collection_attribution}</span>
        </div>
      </div>
    `).join('');
  }
}

class TGBrowsePhenomenology extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = '<div class="terminal-box"><div class="meta">Initializing stratigraphic retrieval...</div></div>';

    try {
      let retries = 0;
      while (!window.IPS_DB && retries < 100) {
        await new Promise(r => setTimeout(r, 60));
        retries++;
      }

      if (!window.IPS_DB) {
        throw new Error('Database service not located in system environment.');
      }

      const patterns = await window.IPS_DB.query('SELECT * FROM phenomenological_patterns ORDER BY pattern_id ASC');
      const cases = await window.IPS_DB.query('SELECT * FROM cases');
      
      this.render(patterns, cases);
    } catch (err) {
      this.innerHTML = `<div class="advisory advisory--red"><div class="advisory__header">CRITICAL ERROR</div><div class="advisory__content">${err.message}</div></div>`;
    }
  }

  render(patterns, cases) {
    if (!patterns || patterns.length === 0) {
        this.innerHTML = '<div class="terminal-box"><div class="meta">No phenomenological markers identified in current strata.</div></div>';
        return;
    }

    let html = `
      <div class="terminal-box terminal-box--secondary mb-4">
        <div class="terminal-box__header">Filter by Pattern</div>
        <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
          <button class="btn btn--small active-pattern-toggle" data-pattern="ALL">SHOW ALL</button>
          ${patterns.map(p => `<button class="btn btn--small active-pattern-toggle" data-pattern="${p.pattern_id}">${p.name}</button>`).join('')}
        </div>
      </div>
      <div id="pattern-results-container">
    `;

    patterns.forEach(p => {
      const patternCases = cases.filter(c => c.observed_pattern === p.pattern_id);
      
      html += `
        <div class="pattern-section" data-pattern-id="${p.pattern_id}">
          <div class="terminal-box">
            <div class="terminal-box__header">Pattern ${p.name}</div>
            <p class="meta mb-3">${p.description}</p>
            ${patternCases.length > 0 ? patternCases.map(c => `
              <article class="document-card">
                <div class="document-card__id meta">${c.case_id}</div>
                <h3 class="document-card__title">
                  <a href="case-view.html?id=${c.case_id}" class="document-card__title-link">${c.title}</a>
                </h3>
                <div class="document-card__meta meta">
                  <span class="document-card__meta-item">Epoch: ${c.epoch_estimate}</span>
                  <span class="document-card__meta-item">Status: ${c.epistemic_status}</span>
                </div>
              </article>
            `).join('') : '<div class="meta">No cases catalogued under this pattern.</div>'}
          </div>
        </div>
      `;
    });

    html += '</div>';
    this.innerHTML = html;

    this.querySelectorAll('.active-pattern-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pattern = e.target.getAttribute('data-pattern');
        this.querySelectorAll('.pattern-section').forEach(sec => {
          if (pattern === 'ALL' || sec.getAttribute('data-pattern-id') === pattern) {
            sec.style.display = 'block';
          } else {
            sec.style.display = 'none';
          }
        });
      });
    });
  }
}

class TGBrowseChronological extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = '<div class="terminal-box"><div class="meta">Initializing stratigraphic retrieval...</div></div>';

    try {
      let retries = 0;
      while (!window.IPS_DB && retries < 100) {
        await new Promise(r => setTimeout(r, 60));
        retries++;
      }

      if (!window.IPS_DB) {
        throw new Error('Database service not located in system environment.');
      }

      const fragments = await window.IPS_DB.query('SELECT * FROM fragments ORDER BY time_reference_basis ASC, pi_estimation DESC');
      this.render(fragments);
    } catch (err) {
      this.innerHTML = `<div class="advisory advisory--red"><div class="advisory__header">CRITICAL ERROR</div><div class="advisory__content">${err.message}</div></div>`;
    }
  }

  render(fragments) {
    if (!fragments || fragments.length === 0) {
        this.innerHTML = '<div class="terminal-box"><div class="meta">No chronological strata identified.</div></div>';
        return;
    }

    const aiFragments = fragments.filter(f => f.time_reference_basis === 'AI');
    const piFragments = fragments.filter(f => f.time_reference_basis === 'PI');

    let html = `
      <div class="terminal-box terminal-box--secondary mb-4">
        <div class="terminal-box__header">Filter by Epoch</div>
        <div style="display: flex; gap: var(--space-2);">
          <button class="btn btn--small epoch-toggle" data-epoch="ALL">SHOW ALL</button>
          <button class="btn btn--small epoch-toggle" data-epoch="PI">POST-INSTITUTIONAL (PI)</button>
          <button class="btn btn--small epoch-toggle" data-epoch="AI">ANTE-INSTITUTIONAL (AI)</button>
        </div>
      </div>

      <div class="epoch-section" data-epoch-id="PI">
        <div class="terminal-box">
          <div class="terminal-box__header">Post-Institutional Epoch (PI)</div>
          <p class="meta mb-3">Records originating after the formation of the Institute and the establishment of the Standard Temporal Basis.</p>
          ${piFragments.length > 0 ? piFragments.map(f => `
            <article class="document-card">
              <div class="document-card__id meta">${f.fragment_id} :: ${f.pi_estimation} PI</div>
              <h3 class="document-card__title">
                <a href="fragment-view.html?id=${f.fragment_id}" class="document-card__title-link">${f.title}</a>
              </h3>
              <div class="document-card__meta meta">
                <span class="document-card__meta-item">Strata: ${f.strata_depth}m</span>
                <span class="document-card__meta-item">Confidence: ${f.epistemic_confidence}%</span>
              </div>
            </article>
          `).join('') : '<div class="meta">No records located in this epoch.</div>'}
        </div>
      </div>

      <div class="epoch-section" data-epoch-id="AI">
        <div class="terminal-box">
          <div class="terminal-box__header">Ante-Institutional Epoch (AI)</div>
          <p class="meta mb-3">Deep-time records originating prior to the Great Convergence and the formalization of historical metrics.</p>
          ${aiFragments.length > 0 ? aiFragments.map(f => `
            <article class="document-card">
              <div class="document-card__id meta">${f.fragment_id} :: EPOCH ${f.time_reference_basis}</div>
              <h3 class="document-card__title">
                <a href="fragment-view.html?id=${f.fragment_id}" class="document-card__title-link">${f.title}</a>
              </h3>
              <div class="document-card__meta meta">
                <span class="document-card__meta-item">Strata: ${f.strata_depth}m</span>
                <span class="document-card__meta-item">Confidence: ${f.epistemic_confidence}%</span>
              </div>
            </article>
          `).join('') : '<div class="meta">No records located in this epoch.</div>'}
        </div>
      </div>
    `;

    this.innerHTML = html;

    this.querySelectorAll('.epoch-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const epoch = e.target.getAttribute('data-epoch');
        this.querySelectorAll('.epoch-section').forEach(sec => {
          if (epoch === 'ALL' || sec.getAttribute('data-epoch-id') === epoch) {
            sec.style.display = 'block';
          } else {
            sec.style.display = 'none';
          }
        });
      });
    });
  }
}

// REGISTER COMPONENTS
customElements.define('tg-metadata-modal', TGMetadataModal);
customElements.define('tg-case-list', TGCaseList);
customElements.define('tg-fragment-list', TGFragmentList);
customElements.define('tg-box', TGBox);
customElements.define('tg-footer', TGFooter);
customElements.define('tg-nav', TGNav);
customElements.define('tg-breadcrumb', TGBreadcrumb);
customElements.define('tg-status', TGStatus);
customElements.define('tg-archive-list', TGArchiveList);
customElements.define('tg-recently-catalogued-cases', TGRecentlyCatalogued);
customElements.define('tg-browse-phenomenology', TGBrowsePhenomenology);
customElements.define('tg-browse-chronological', TGBrowseChronological);

// Global modal instance for easy access
window.showMetadataModal = (data) => {
  let modal = document.querySelector('tg-metadata-modal');
  if (!modal) {
    modal = document.createElement('tg-metadata-modal');
    document.body.appendChild(modal);
  }
  modal.show(data);
};

// CRT TERMINAL INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('.crt-overlay')) {
    const overlay = document.createElement('div');
    overlay.classList.add('crt-overlay');
    document.body.appendChild(overlay);
  }

  const container = document.querySelector('.container');
  if (container) {
    container.classList.add('crt-animate');
  }
});