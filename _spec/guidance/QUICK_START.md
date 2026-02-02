# QUICK START GUIDE
## For Agentic Website Generators

Get started building the Terminal Gradient Institutional Archive immediately.

---

## STEP 1: READ THESE FILES IN ORDER

1. **IMPLEMENTATION_GUIDE.md** (this folder)
   - Complete design philosophy
   - All design system tokens
   - Component specifications
   - Page templates
   - Success criteria

2. **COMPONENT_REFERENCE.md** (this folder)
   - HTML structure for every component
   - CSS specifications
   - Usage examples
   - When to use each component

3. **DOS_AND_DONTS.md** (this folder)
   - Visual guidelines
   - What to avoid
   - Common mistakes
   - Testing checklist

4. **archive.css** (../css/)
   - Complete stylesheet
   - All design tokens defined
   - Every component styled
   - Responsive behavior

5. **Example pages** (../pages/)
   - index.html - Homepage
   - archive-index.html - Document listing
   - document-view.html - Full story page
   - search.html - Search interface
   - about.html - Archive information

---

## STEP 2: UNDERSTAND THE CORE CONCEPT

**This is NOT a website about an archive.**
**This IS the archive itself.**

- You're building an in-universe institutional system
- Users are accessing archived documents through a terminal interface
- Stories are framed as recovered case studies
- All copy maintains institutional neutrality
- The aesthetic is brutalist functional design

---

## STEP 3: SET UP YOUR PROJECT

### File Structure
```
project/
├── index.html
├── archive-index.html
├── document-view.html
├── search.html
├── about.html
├── css/
│   └── archive.css (copy from ../css/archive.css)
└── documents/
    └── [individual story pages]
```

### HTML Template
Every page starts with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] :: Terminal Gradient Institutional Archive</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/archive.css">
</head>
<body>
  <div class="container">
    <!-- Page content here -->
  </div>
</body>
</html>
```

---

## STEP 4: BUILD THE CORE PAGES

### 4.1 Homepage (index.html)

**Components needed:**
- Terminal box with site header + metadata
- Terminal box with navigation menu (6-8 items)
- Terminal box with statistics
- Terminal box with recent documents
- Footer

**Reference:** See `../pages/index.html`

### 4.2 Archive Index (archive-index.html)

**Components needed:**
- Breadcrumb navigation
- Terminal box header with query info
- Two-column layout: Filter panel (sidebar) + Document cards (main)
- Pagination controls
- Footer

**Reference:** See `../pages/archive-index.html`

### 4.3 Document View (document-view.html)

**Components needed:**
- Breadcrumb navigation
- Terminal box with full metadata grid
- Advisory box (reader warnings)
- Progress bar (completeness)
- Terminal box with story content
- Terminal box with archival commentary
- Related documents section
- Action buttons
- Footer

**Reference:** See `../pages/document-view.html`

### 4.4 Search Page (search.html)

**Components needed:**
- Breadcrumb navigation
- Terminal box with page intro
- Terminal box with search form
- Terminal box with results
- Advisory box (search help)
- Footer

**Reference:** See `../pages/search.html`

### 4.5 About Page (about.html)

**Components needed:**
- Breadcrumb navigation
- Multiple terminal boxes for different sections
- Newsletter signup form
- Footer

**Reference:** See `../pages/about.html`

---

## STEP 5: UNDERSTAND THE DESIGN SYSTEM

### Colors (memorize these)
```
Backgrounds: #0a0a0a (primary), #121212 (secondary)
Text: #e8e8e8 (primary), #a0a0a0 (secondary)
Borders: #333333 (default), #4a4a4a (active)
Accents: #00ff00 (green), #ff0000 (red), #ffaa00 (amber), #ffffff (white)
```

### Typography
```
Monospace: IBM Plex Mono (headers, metadata, labels, UI)
Sans-serif: IBM Plex Sans (body text, readable content)
```

### Spacing (8px grid)
```
8px, 16px, 24px, 32px, 48px, 64px
Use: var(--space-1) through var(--space-8)
```

### Borders
```
Always: 2px solid
Never: rounded corners, gradients, shadows
```

---

## STEP 6: USE THE COMPONENTS

### Every component follows this pattern:

1. **Container:** `.terminal-box`
2. **Header (optional):** `.terminal-box__header`
3. **Content:** Component-specific classes

### Example: Document Card
```html
<article class="document-card">
  <div class="document-card__id">[DOC-001]</div>
  <h2 class="document-card__title">
    <a href="#" class="document-card__title-link">Title</a>
  </h2>
  <div class="document-card__meta">
    <span class="document-card__meta-item">Framework: First Vigil</span>
    <span class="document-card__meta-item">Length: 8,200 words</span>
  </div>
  <div class="document-card__actions">
    <a href="#" class="btn btn--small">Access Document</a>
  </div>
</article>
```

**All components are documented in COMPONENT_REFERENCE.md**

---

## STEP 7: MAINTAIN CONSISTENCY

### Visual Consistency Checklist
- [ ] Only IBM Plex Mono and IBM Plex Sans fonts
- [ ] Only colors from design system
- [ ] All spacing is multiples of 8px
- [ ] All borders are 2px solid, no rounded corners
- [ ] No shadows, gradients, or animations

### Content Consistency Checklist
- [ ] Institutional voice (formal, neutral)
- [ ] Document IDs follow format: [ABC-001]
- [ ] Metadata uses standard field names
- [ ] Classifications use standard types
- [ ] No casual language or personality

### Technical Consistency Checklist
- [ ] Semantic HTML elements
- [ ] CSS custom properties for all values
- [ ] Component-based CSS organization
- [ ] ARIA labels for navigation
- [ ] Mobile responsive (single column stacking)

---

## STEP 8: ADD NEW CONTENT

### Creating a New Document Page

1. **Copy document-view.html template**
2. **Update metadata:**
   - Document ID (e.g., [BFS-001])
   - Title
   - Framework (First Vigil, Last Watch, Open Measure, Unknown)
   - Classification (Intervention, Refusal, Gridlock, etc.)
   - Length (word count)
   - Completeness (percentage)
   - Recovery date

3. **Add story content:**
   - Wrap in `<div class="document-content">`
   - Use `<em>` for editorial notes like "[degraded section]"
   - Use `<strong>` sparingly for emphasis

4. **Optional sections:**
   - Reader advisory (if contested interpretation)
   - Progress bar (if incomplete)
   - Archival commentary
   - Related documents

### Creating a New Index/Listing Page

1. **Copy archive-index.html template**
2. **Update page header:**
   - Title
   - Query description
   - Result count

3. **Update filters:**
   - Pre-check relevant filters
   - Update filter labels if needed

4. **Show relevant documents:**
   - Filter document cards to match criteria
   - Update pagination

---

## STEP 9: TEST YOUR IMPLEMENTATION

### Visual Testing
1. View all pages in browser
2. Check that everything looks identical to examples
3. Verify no rounded corners, shadows, or gradients
4. Test hover states (should be instant)
5. Check mobile view (should stack correctly)

### Functional Testing
1. Click all navigation links
2. Test all buttons
3. Fill out forms
4. Apply filters
5. Test keyboard navigation (Tab key)
6. Test with screen reader

### Consistency Testing
1. Compare your pages to example pages
2. Verify colors match exactly
3. Check spacing is consistent
4. Ensure typography is correct
5. Confirm institutional voice maintained

---

## STEP 10: EXTRAPOLATE NEW COMPONENTS

When you need to create something not in the examples:

### Process:
1. **Identify purpose:** What information needs to be displayed?
2. **Choose base:** Start with `.terminal-box`
3. **Apply design system:** Use only defined colors, fonts, spacing
4. **Check prohibitions:** No decorations, animations, or effects
5. **Test consistency:** Does it look like it belongs?

### Example: Creating a Timeline Component

**Process:**
1. Purpose: Show chronological document sequence
2. Base: Terminal box container
3. Design: Monospace font, 2px borders, standard spacing
4. Prohibitions: No fancy lines or circles
5. Result:

```html
<div class="terminal-box">
  <div class="terminal-box__header">Document Timeline</div>
  <div class="timeline">
    <div class="timeline__item">
      <span class="timeline__date">2024.01.15</span>
      <span class="timeline__title">Document Recovered: BFS-001</span>
    </div>
    <div class="timeline__item">
      <span class="timeline__date">2024.02.03</span>
      <span class="timeline__title">Authentication Completed</span>
    </div>
  </div>
</div>
```

**CSS:**
```css
.timeline__item {
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-border);
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: var(--space-2);
}

.timeline__date {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.timeline__title {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
}
```

**Result:** Timeline that matches the site aesthetic perfectly.

---

## COMMON MISTAKES TO AVOID

### ❌ Mistake 1: Adding Personality
```html
<!-- WRONG -->
<h1>Welcome to our amazing archive! 🚀</h1>

<!-- RIGHT -->
<h1>TERMINAL GRADIENT INSTITUTIONAL ARCHIVE</h1>
```

### ❌ Mistake 2: Softening the Aesthetic
```css
/* WRONG */
.terminal-box {
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* RIGHT */
.terminal-box {
  border: 2px solid var(--color-border);
}
```

### ❌ Mistake 3: Adding Animations
```css
/* WRONG */
.nav-menu__link:hover {
  transition: color 0.3s ease;
}

/* RIGHT */
.nav-menu__link:hover {
  color: var(--color-accent-white);
  transition: none;
}
```

### ❌ Mistake 4: Using Wrong Fonts
```css
/* WRONG */
h1 {
  font-family: 'Georgia', serif;
}

/* RIGHT */
h1 {
  font-family: var(--font-mono);
}
```

---

## GETTING HELP

If unsure about any implementation detail:

1. **Check the example pages** - They demonstrate correct usage
2. **Read COMPONENT_REFERENCE.md** - Every component is documented
3. **Review DOS_AND_DONTS.md** - Common issues are covered
4. **Apply the final test:** "Could this exist in-universe?"

---

## SUCCESS CRITERIA

Your implementation is complete when:

1. ✓ All pages match example visual quality
2. ✓ Navigation works throughout site
3. ✓ Mobile responsive (stacks correctly)
4. ✓ No prohibited elements (shadows, gradients, etc.)
5. ✓ Institutional voice maintained in all copy
6. ✓ Keyboard navigation functional
7. ✓ WCAG 2.1 AA compliant
8. ✓ New components maintain identical aesthetic

**The ultimate test:** Could someone mistake your site for the example pages? If yes, you've succeeded.

---

## BUILD ORDER RECOMMENDATION

Build in this sequence for fastest progress:

1. **Day 1:** Foundation
   - Set up file structure
   - Copy CSS
   - Create base HTML template
   - Build homepage

2. **Day 2:** Core Pages
   - Archive index with filters
   - Document view template
   - Search page
   - About page

3. **Day 3:** Content Integration
   - Add actual story documents
   - Create document pages
   - Link everything together
   - Test navigation

4. **Day 4:** Polish
   - Mobile responsive testing
   - Accessibility audit
   - Cross-browser check
   - Performance optimization

---

## FINAL REMINDER

**You are building infrastructure, not a website.**

The Terminal Gradient Institutional Archive is not:
- A blog
- A portfolio
- A marketing site
- A modern web app

It IS:
- An in-universe institutional system
- A brutalist functional interface
- A document retrieval platform
- Authoritative archive infrastructure

Keep this framing in mind for every decision.

---

END OF QUICK START GUIDE

**Ready to build? Start with the example pages and work from there. You have everything you need.**
