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
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
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
      <a href="page1.html" class="nav-menu__link">Menu Item One</a>
    </li>
    <li class="nav-menu__item">
      <a href="page2.html" class="nav-menu__link nav-menu__link--active">
        Active Menu Item
      </a>
    </li>
    <li class="nav-menu__item">
      <a href="page3.html" class="nav-menu__link">Menu Item Three</a>
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
  color: var(--color-text-primary);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: var(--font-size-base);
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
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
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
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-1);
}

.document-card__title {
  font-family: var(--font-mono);
  font-size: var(--font-size-lg);
  text-transform: uppercase;
  margin-bottom: var(--space-2);
  letter-spacing: 0.05em;
}

.document-card__title-link {
  color: var(--color-text-primary);
  text-decoration: none;
}

.document-card__title-link:hover {
  color: var(--color-accent-white);
}

.document-card__meta {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-normal);
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
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
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
  text-transform: uppercase;
  letter-spacing: 0.05em;
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

## COMPONENT 6: STATUS BADGES

### Purpose
Indicate document classification types with color coding.

### HTML
```html
<!-- Intervention (green) -->
<span class="status-badge status-badge--intervention">Intervention</span>

<!-- Refusal (red) -->
<span class="status-badge status-badge--refusal">Refusal</span>

<!-- Gridlock (amber) -->
<span class="status-badge status-badge--gridlock">Gridlock</span>

<!-- Classified (red) -->
<span class="status-badge status-badge--classified">Classified</span>

<!-- Default (gray) -->
<span class="status-badge">Certification</span>
```

### CSS
```css
.status-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: var(--space-1) var(--space-2);
  border: 1px solid var(--color-border);
}

.status-badge--intervention {
  border-color: var(--color-accent-green);
  color: var(--color-accent-green);
}

.status-badge--refusal {
  border-color: var(--color-accent-red);
  color: var(--color-accent-red);
}

.status-badge--gridlock {
  border-color: var(--color-accent-amber);
  color: var(--color-accent-amber);
}

.status-badge--classified {
  border-color: var(--color-accent-red);
  color: var(--color-accent-red);
}
```

### Color Meanings
- **Green:** Intervention (action taken)
- **Red:** Refusal (action declined) or Classified (restricted access)
- **Amber:** Gridlock (consensus failure) or Advisory
- **Gray:** Neutral/default classifications

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
<a href="page.html" class="btn">Link Action</a>

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
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-primary);
  background: transparent;
  border: var(--border-width) solid var(--color-border);
  padding: var(--space-2) var(--space-3);
  text-decoration: none;
  cursor: pointer;
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
  padding: var(--space-1) var(--space-2);
  font-size: var(--font-size-xs);
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
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-1);
  color: var(--color-text-secondary);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  font-family: var(--font-mono);
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
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
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
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent-amber);
  margin-bottom: var(--space-2);
}

.advisory__content {
  font-family: var(--font-sans);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
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
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
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
Sidebar with checkboxes for filtering document listings.

### HTML
```html
<aside>
  <div class="filter-panel">
    <div class="filter-panel__header">Filter Query</div>
    
    <div class="filter-group">
      <span class="filter-group__label">Framework</span>
      <label class="filter-option">
        <input type="checkbox" class="form-checkbox" id="fw-1">
        <span class="form-checkbox-label">First Vigil</span>
      </label>
      <label class="filter-option">
        <input type="checkbox" class="form-checkbox" id="fw-2">
        <span class="form-checkbox-label">Last Watch</span>
      </label>
      <label class="filter-option">
        <input type="checkbox" class="form-checkbox" id="fw-3">
        <span class="form-checkbox-label">Open Measure</span>
      </label>
    </div>

    <div class="filter-group">
      <span class="filter-group__label">Classification Type</span>
      <label class="filter-option">
        <input type="checkbox" class="form-checkbox" id="type-1">
        <span class="form-checkbox-label">Intervention</span>
      </label>
      <label class="filter-option">
        <input type="checkbox" class="form-checkbox" id="type-2">
        <span class="form-checkbox-label">Refusal</span>
      </label>
    </div>

    <button class="btn btn--small" style="width: 100%;">Apply Filters</button>
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
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-3);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border);
}

.filter-group {
  margin-bottom: var(--space-3);
}

.filter-group__label {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
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
      <th>Framework</th>
      <th>Length</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BFS-001</td>
      <td>Unknown</td>
      <td>8,200</td>
      <td>Contested</td>
    </tr>
    <tr>
      <td>FV-002</td>
      <td>First Vigil</td>
      <td>7,200</td>
      <td>Authenticated</td>
    </tr>
  </tbody>
</table>
```

### CSS
```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  margin: var(--space-4) 0;
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

## COMPONENT 13: DOCUMENT CONTENT

### Purpose
Styled prose content for story text.

### HTML
```html
<article class="document-content">
  <p><em>[Beginning of recovered text]</em></p>
  
  <p>There was a world before this one. I know because I was there.</p>
  
  <p>Not in body—I had no body then, or perhaps I had every body...</p>
  
  <p><strong>This is emphasized text within the narrative.</strong></p>
  
  <p><em>[Degraded section: ~1,200 words lost]</em></p>
  
  <p><em>[End of recovered text]</em></p>
</article>
```

### CSS
```css
.document-content {
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-primary);
}

.document-content p {
  margin-bottom: var(--space-3);
}

.document-content em {
  font-style: italic;
  color: var(--color-text-secondary);
}

.document-content strong {
  font-weight: 600;
  color: var(--color-accent-white);
}
```

### Usage Notes
- Use `<em>` for editorial notes like "[degraded section]"
- Use `<strong>` sparingly for emphasis in narrative
- Maintain comfortable line-height for reading

---

## COMPONENT 14: FOOTER

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
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
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
