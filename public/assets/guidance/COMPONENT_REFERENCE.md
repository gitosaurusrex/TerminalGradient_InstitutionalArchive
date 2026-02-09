# COMPONENT REFERENCE
## Terminal Gradient Institutional Archive

Complete HTML/CSS specifications for all components.

---

## COMPONENT 1: TERMINAL BOX

### Purpose
Base container for all framed sections. Foundation component used throughout site.

### HTML
```html
<!-- Standard terminal box -->
<div class="terminal-box">
  <div class="terminal-box__header">Section Title</div>
  <div>Content goes here</div>
</div>

<!-- Secondary variant (darker background) -->
<div class="terminal-box terminal-box--secondary">
  <div class="terminal-box__header">Section Title</div>
  <div>Content goes here</div>
</div>

<!-- Compact variant (reduced padding) -->
<div class="terminal-box terminal-box--compact">
  <div>Content goes here</div>
</div>

<!-- Header without bottom border -->
<div class="terminal-box">
  <div class="terminal-box__header terminal-box__header--no-border">
    Section Title
  </div>
  <div>Content goes here</div>
</div>
```

### CSS
```css
.terminal-box {
  border: var(--border-width) solid var(--color-border);
  background: var(--color-bg-primary);
  padding: var(--space-4);
  margin-bottom: var(--space-4);
}

.terminal-box--secondary {
  background: var(--color-bg-secondary);
}

.terminal-box--compact {
  padding: var(--space-2);
}

.terminal-box__header {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.75;
  font-variation-settings: "MONO" 1, "CASL" 0.1, "slnt" 0;
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--space-3);
}

.terminal-box__header--no-border {
  border-bottom: none;
  margin-bottom: var(--space-2);
}
```

### When to Use
- Every major content section
- Navigation containers
- Form containers
- Metadata displays
- Advisory notices
- Document cards
- Any framed content area

---

## COMPONENT 2: NAVIGATION MENU

### Purpose
Clickable menu lists with hover states and active indicators.

### HTML
```html
<nav>
  <ul class="nav-menu">
    <li class="nav-menu__item">
      <a href="page1.html" class="nav-menu__link nav-link">Menu Item One</a>
    </li>
    <li class="nav-menu__item">
      <a href="page2.html" class="nav-menu__link nav-link nav-menu__link--active">
        Active Menu Item
      </a>
    </li>
    <li class="nav-menu__item">
      <a href="page3.html" class="nav-menu__link nav-link">Menu Item Three</a>
    </li>
  </ul>
</nav>
```

### CSS
```css
.nav-menu {
  list-style: none;
}

.nav-menu__item {
  margin-bottom: var(--space-2);
}

.nav-menu__link {
  display: block;
  padding: var(--space-1) 0;
  transition: none;
}

.nav-menu__link::before {
  content: '> ';
  opacity: 0;
  transition: opacity 0.1s;
}

.nav-menu__link:hover::before,
.nav-menu__link:focus::before {
  opacity: 1;
}

.nav-menu__link:hover,
.nav-menu__link:focus {
  color: var(--color-accent-white);
  outline: none;
}

.nav-menu__link--active {
  color: var(--color-accent-white);
}

.nav-menu__link--active::before {
  opacity: 1;
}
```

### Behavior
- Default: Gray text, no prefix visible
- Hover: `> ` prefix appears, text turns white
- Active: `> ` prefix visible, text is white
- No background changes, no animations

---

## COMPONENT 3: BREADCRUMB NAVIGATION

### Purpose
Show current location in site hierarchy.

### HTML
```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="index.html" class="breadcrumb__link">Archive Access</a>
  <span class="breadcrumb__separator">/</span>
  <a href="archive-index.html" class="breadcrumb__link">Case Files</a>
  <span class="breadcrumb__separator">/</span>
  <span>Current Page</span>
</nav>
```

### CSS
```css
.breadcrumb {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.breadcrumb__link {
  color: var(--color-text-secondary);
  text-decoration: none;
}

.breadcrumb__link:hover {
  color: var(--color-text-primary);
}

.breadcrumb__separator {
  margin: 0 var(--space-1);
}
```

### When to Use
At top of every page except homepage.

---

## COMPONENT 4: DOCUMENT CARD

### Purpose
Display document listings in archive indexes.

### HTML
```html
<article class="document-card">
  <div class="document-card__id">[BFS-001]</div>
  <h2 class="document-card__title">
    <a href="document-view.html" class="document-card__title-link">
      Before the First Silence
    </a>
  </h2>
  <div class="document-card__meta">
    <span class="document-card__meta-item">Framework: Unknown</span>
    <span class="document-card__meta-item">Length: 8,200 words</span>
    <span class="document-card__meta-item">
      Status: <span class="status-badge status-badge--refusal">Refusal</span>
    </span>
  </div>
  <div class="document-card__actions">
    <a href="document-view.html" class="btn btn--small">Access Document</a>
  </div>
</article>
```

### CSS
```css
.document-card {
  border: var(--border-width) solid var(--color-border);
  padding: var(--space-3);
  margin-bottom: var(--space-3);
  transition: border-color 0.1s;
}

.document-card:hover {
  border-color: var(--color-border-active);
}

.document-card__id {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-1);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.document-card__title {
  font-size: var(--font-size-xl);
  text-transform: lowercase;
  margin-bottom: var(--space-2);
  letter-spacing: 0.18em;
  font-variation-settings: "MONO" 1, "CASL" 0.3, "slnt" -12;
}

.document-card__title-link {
  color: var(--color-text-primary);
  text-decoration: none;
}

.document-card__title-link:hover {
  color: var(--color-accent-white);
}

.document-card__meta {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  line-height: var(--line-height-meta);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.document-card__meta-item {
  display: block;
  margin-bottom: var(--space-1);
}

.document-card__actions {
  margin-top: var(--space-2);
  padding-top: var(--space-2);
  border-top: 1px solid var(--color-border);
}
```

### Variants
Create compact variant for related documents:
```css
.document-card--compact {
  padding: var(--space-2);
  margin-bottom: var(--space-2);
}
```

---

## COMPONENT 5: METADATA GRID

### Purpose
Display key-value pairs for document metadata or system information.

### HTML
```html
<div class="metadata-grid">
  <div class="metadata-grid__row">
    <div class="metadata-grid__label">Classification:</div>
    <div class="metadata-grid__value">PUBLIC ACCESS</div>
  </div>
  <div class="metadata-grid__row">
    <div class="metadata-grid__label">Document ID:</div>
    <div class="metadata-grid__value">BFS-001</div>
  </div>
  <div class="metadata-grid__row">
    <div class="metadata-grid__label">Framework:</div>
    <div class="metadata-grid__value">Unknown (Pre-Institutional)</div>
  </div>
</div>
```

### CSS
```css
.metadata-grid {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-meta);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.metadata-grid__row {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--space-2);
  margin-bottom: var(--space-1);
  padding: var(--space-1) 0;
}

.metadata-grid__label {
  color: var(--color-text-secondary);
  opacity: 0.75;
}

.metadata-grid__value {
  color: var(--color-text-primary);
}

/* Mobile: stack vertically */
@media (max-width: 768px) {
  .metadata-grid__row {
    grid-template-columns: 1fr;
    gap: var(--space-1);
  }
}
```

### When to Use
- Document headers (full metadata)
- System status displays
- Archive statistics
- Any structured key-value data

---

## COMPONENT 6: REGISTER FLAGS

### Purpose
High-contrast status markers indicating phenomenological pattern and active verification.

### HTML
```html
<div class="register-flag register-flag--pattern-b">
  <span class="register-flag__bit">PATTERN-B</span>
  <span class="register-flag__label">0x4F22 :: VERIFIED</span>
</div>
```

### CSS
```css
.register-flag {
  display: inline-flex;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.register-flag__bit {
  background: var(--color-border);
  color: var(--color-bg-primary);
  padding: 2px 6px;
  font-weight: 800;
}

.register-flag__label {
  border: 1px solid var(--color-border);
  padding: 1px 6px;
  color: var(--color-text-primary);
}
```

### Color Meanings
- **Pattern Alpha (amber):** Associated with systemic stillness/terminal stability.
- **Pattern Beta (green):** Associated with sudden structural or atmospheric fractures.
- **Pattern Gamma (red):** Associated with cognitive invalidation/meaning collapse.
- **Default:** Neutral or pre-institutional classifications.

---

## COMPONENT 7: BUTTONS

### Purpose
All clickable actions (links styled as buttons or actual button elements).

### HTML
```html
<!-- Standard button -->
<button class="btn">Standard Action</button>

<!-- Small button -->
<button class="btn btn--small">Small Action</button>

<!-- Link styled as button -->
<a href="page.html" class="btn cta">Link Action</a>

<!-- Multiple buttons in row -->
<div style="display: flex; gap: var(--space-2);">
  <button class="btn">Primary Action</button>
  <button class="btn">Secondary Action</button>
</div>
```

### CSS
```css
.btn {
  display: inline-block;
  transition: background-color 0.1s, color 0.1s;
}

.btn::before {
  content: '> ';
}

.btn:hover,
.btn:focus {
  background: var(--color-text-primary);
  color: var(--color-bg-primary);
  outline: none;
}

.btn--small {
  padding: 4px 8px;
  font-size: 12px;
}
```

### Behavior
- Default: Transparent, bordered
- Hover: Inverted colors (instant)
- Always shows `> ` prefix
- No loading states or spinners

---

## COMPONENT 8: FORM ELEMENTS

### Purpose
All user input: text, select, checkboxes, etc.

### HTML
```html
<form>
  <!-- Text Input -->
  <div class="form-group">
    <label for="text-input" class="form-label">Input Label</label>
    <input 
      type="text" 
      id="text-input" 
      class="form-input" 
      placeholder="Enter text..."
    >
  </div>

  <!-- Select Dropdown -->
  <div class="form-group">
    <label for="select-input" class="form-label">Select Label</label>
    <select id="select-input" class="form-select">
      <option value="">Choose option</option>
      <option value="1">Option One</option>
      <option value="2">Option Two</option>
    </select>
  </div>

  <!-- Textarea -->
  <div class="form-group">
    <label for="textarea-input" class="form-label">Textarea Label</label>
    <textarea 
      id="textarea-input" 
      class="form-textarea" 
      rows="4"
      placeholder="Enter longer text..."
    ></textarea>
  </div>

  <!-- Checkbox -->
  <div class="form-group">
    <label class="filter-option">
      <input type="checkbox" class="form-checkbox" id="check1">
      <span class="form-checkbox-label">Checkbox Label</span>
    </label>
  </div>

  <!-- Submit -->
  <button type="submit" class="btn">Submit Form</button>
</form>
```

### CSS
```css
.form-group {
  margin-bottom: var(--space-3);
}

.form-label {
  display: block;
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--space-1);
  color: var(--color-text-secondary);
  opacity: 0.75;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  font-family: inherit;
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  background: var(--color-bg-secondary);
  border: var(--border-width) solid var(--color-border);
  padding: var(--space-2);
  outline: none;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--color-border-active);
}

.form-input::placeholder {
  color: var(--color-text-secondary);
}

.form-checkbox {
  margin-right: var(--space-1);
}

.form-checkbox-label {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
}
```

---

## COMPONENT 9: ADVISORY BOXES

### Purpose
Warnings, notices, reader advisories with color-coded severity.

### HTML
```html
<!-- Amber advisory (default) -->
<div class="advisory">
  <div class="advisory__header">Reader Advisory</div>
  <div class="advisory__content">
    <p>This document contains unresolved contradictions...</p>
  </div>
</div>

<!-- Red advisory (critical) -->
<div class="advisory advisory--red">
  <div class="advisory__header">Critical Warning</div>
  <div class="advisory__content">
    <p>Access restricted due to classification level...</p>
  </div>
</div>
```

### CSS
```css
.advisory {
  border: var(--border-width) solid var(--color-accent-amber);
  background: var(--color-bg-secondary);
  padding: var(--space-3);
  margin: var(--space-4) 0;
}

.advisory__header {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-accent-amber);
  margin-bottom: var(--space-2);
}

.advisory__content {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
}

.advisory--red {
  border-color: var(--color-accent-red);
}

.advisory--red .advisory__header {
  color: var(--color-accent-red);
}
```

### When to Use
- Reader warnings on contested documents
- Classification restrictions
- System status alerts
- Help/info sections

---

## COMPONENT 10: PROGRESS BAR

### Purpose
Show document completeness or processing status.

### HTML
```html
<div class="progress-bar">
  <div class="progress-bar__fill" style="width: 67%;">
    <span class="progress-bar__text">67%</span>
  </div>
</div>

<!-- Different percentage -->
<div class="progress-bar">
  <div class="progress-bar__fill" style="width: 100%;">
    <span class="progress-bar__text">100%</span>
  </div>
</div>
```

### CSS
```css
.progress-bar {
  height: 16px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-secondary);
  font-size: 12px;
  position: relative;
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  background: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: var(--space-1);
  transition: width 0.3s ease;
}

.progress-bar__text {
  color: var(--color-bg-primary);
  font-weight: bold;
}
```

### Usage Notes
- Width set inline via style attribute
- Text color inverts on fill background
- Use for document completeness indicators
- Can also represent other progress metrics

---

## COMPONENT 11: FILTER PANEL

### Purpose
Sidebar with checkboxes for filtering document listings by phenomenological and epistemic markers.

### HTML
```html
<aside>
  <div class="filter-panel">
    <div class="filter-panel__header">Query Parameters</div>
    
    <div class="filter-group">
      <span class="filter-group__label">Phenomenology</span>
      <label class="filter-option">
        <input type="checkbox" class="form-checkbox" id="ph-1">
        <span class="form-checkbox-label">Systemic Stillness</span>
      </label>
      <label class="filter-option">
        <input type="checkbox" class="form-checkbox" id="ph-2">
        <span class="form-checkbox-label">Structural Fracture</span>
      </label>
      <label class="filter-option">
        <input type="checkbox" class="form-checkbox" id="ph-3">
        <span class="form-checkbox-label">Cognitive Invalidation</span>
      </label>
    </div>

    <div class="filter-group">
      <span class="filter-group__label">Epistemic Status</span>
      <label class="filter-option">
        <input type="checkbox" class="form-checkbox" id="ep-1">
        <span class="form-checkbox-label">Primary Source</span>
      </label>
      <label class="filter-option">
        <input type="checkbox" class="form-checkbox" id="ep-2">
        <span class="form-checkbox-label">Institutional Analysis</span>
      </label>
    </div>

    <button class="btn btn--small" style="width: 100%;">Refine Query</button>
  </div>
</aside>
```

### CSS
```css
.filter-panel {
  border: var(--border-width) solid var(--color-border);
  padding: var(--space-3);
  margin-bottom: var(--space-4);
}

.filter-panel__header {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--space-3);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border);
}

.filter-group {
  margin-bottom: var(--space-3);
}

.filter-group__label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
  display: block;
}

.filter-option {
  display: block;
  margin-bottom: var(--space-1);
}
```

---

## COMPONENT 12: DATA TABLE

### Purpose
Display tabular data (comparison charts, statistics, etc.).

### HTML
```html
<table class="data-table">
  <thead>
    <tr>
      <th>Document ID</th>
      <th>Dating (Estimated)</th>
      <th>Phenomenology</th>
      <th>Epistemic Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RF-0001</td>
      <td>15,000 AI</td>
      <td>Terminal Stillness</td>
      <td>Fragmentary</td>
    </tr>
    <tr>
      <td>RF-0012</td>
      <td>2,041 PI</td>
      <td>Atmospheric Fracture</td>
      <td>Primary Testimony</td>
    </tr>
  </tbody>
</table>
```

### CSS
```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-xs);
  margin: var(--space-4) 0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.data-table th,
.data-table td {
  text-align: left;
  padding: var(--space-2);
  border: 1px solid var(--color-border);
}

.data-table th {
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 400;
}

.data-table tr:hover {
  background: var(--color-bg-secondary);
}
```

---

## COMPONENT 13: CASE CONTENT & FRAGMENT FRAMES

### Purpose
Display raw in-universe data fragments within a case narrative, surfacing esoteric metadata via server-side injection.

### Shortcode Syntax (Diegetic)
Fragments must be invoked within case analysis using the following syntax:
`[[SURFACE_FRAGMENT:RF-####]]`

### Application Logic
The rendering engine must parse this shortcode, retrieve the fragment record from the database, and inject the following HTML structure:

### HTML (Injected)
```html
<div class="fragment-frame">
  <div class="fragment-frame__header meta">
    <span>REF: RF-0001</span>
    <span>STRATA: 12.4m</span>
    <span>ISO-VAR: 0.004%</span>
    <span>CONF: 87.2%</span>
  </div>
  <div class="fragment-frame__content testimony">
    <p>...verbatim fragment text here...</p>
  </div>
</div>
```

### CSS
(See existing .fragment-frame styles in archive.css)

---

## COMPONENT 14: REGISTER FLAGS

### Purpose
High-contrast status markers indicating phenomenological pattern and active verification.

### HTML
```html
<div class="register-flag register-flag--pattern-b">
  <span class="register-flag__bit">PATTERN-B</span>
  <span class="register-flag__label">0x4F22 :: VERIFIED</span>
</div>
```

### CSS
```css
.register-flag {
  display: inline-flex;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.register-flag__bit {
  background: var(--color-border);
  color: var(--color-bg-primary);
  padding: 2px 6px;
  font-weight: 800;
}

.register-flag__label {
  border: 1px solid var(--color-border);
  padding: 1px 6px;
  color: var(--color-text-primary);
}
```

---

## COMPONENT 15: CORRUPTION UTILITIES

### Purpose
Visual representation of missing or unrecoverable data sectors.

### HTML
```html
<!-- Inline character corruption -->
<p>The entity was <span class="corrupted">██████</span> before manifestation.</p>

<!-- Full block corruption -->
<div class="sector-lost">
  [SECTOR 0xAF4: PERMANENT DATA LOSS]
</div>
```

---

## COMPONENT 16: DATA STREAM (HIGH DENSITY)

### Purpose
Information-dense results table replacing card-based layouts.

### HTML
```html
<table class="data-stream meta">
  <tr class="data-stream__row">
    <td class="data-stream__cell data-stream__cell--id">RF-0001</td>
    <td class="data-stream__cell data-stream__cell--title">before the first silence</td>
    <td class="data-stream__cell">15,000 AI</td>
    <td class="data-stream__cell">PATTERN-A</td>
  </tr>
</table>
```

---

## COMPONENT 17: FOOTER

### Purpose
Site footer on every page.

### HTML
```html
<footer class="site-footer">
  <p>Terminal Gradient Institutional Archive :: Institute for Precedent Studies</p>
  <p class="mt-2">
    <a href="index.html" style="color: inherit; text-decoration: none;">
      Return to Archive Access
    </a>
  </p>
</footer>
```

### CSS
```css
.site-footer {
  margin-top: var(--space-8);
  padding: var(--space-4) 0;
  border-top: 1px solid var(--color-border);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text-secondary);
  text-align: center;
}
```

---

## LAYOUT PATTERNS

### Two-Column Layout (Sidebar + Main)

```html
<div style="display: grid; grid-template-columns: 300px 1fr; gap: 2rem; align-items: start;">
  <aside>
    <!-- Sidebar content (filters, etc.) -->
  </aside>
  <main>
    <!-- Main content -->
  </main>
</div>

<!-- Mobile: Stack vertically -->
<style>
@media (max-width: 768px) {
  .two-column-layout {
    grid-template-columns: 1fr;
  }
}
</style>
```

### Centered Content

```html
<div class="content-wrapper">
  <!-- Content max-width: 800px, centered -->
</div>
```

### Action Button Row

```html
<div style="display: flex; gap: var(--space-2); justify-content: center;">
  <button class="btn">Action One</button>
  <button class="btn">Action Two</button>
  <button class="btn">Action Three</button>
</div>
```

---

END OF COMPONENT REFERENCE
