# TERMINAL GRADIENT INSTITUTIONAL ARCHIVE
## Complete Implementation Guide for Agentic Website Generators

---

## PURPOSE OF THIS DOCUMENT

This guide provides COMPLETE specifications for building the Terminal Gradient Institutional Archive website. An agentic coder should be able to implement the entire site from these specifications without deviating from the established aesthetic.

**Critical Success Criteria:**
- 100% visual fidelity to brutalist terminal aesthetic
- Zero deviation from design system
- Complete functional implementation of all components
- Ability to extrapolate future components maintaining identical look and feel

---

## DESIGN PHILOSOPHY

### Core Principles (DO NOT VIOLATE)

**1. HAL 9000 / 2001: A Space Odyssey Minimalism**
- Extreme geometric precision
- Zero decoration
- High contrast monochrome base + minimal color accents
- Institutional authority through restraint

**2. Archival Case System (Diegetic)**
- This is NOT a fake command-line interface.
- This IS an in-universe institutional archive system.
- Narratives are catalogued as **Cases** (analytical windows into events).
- Cases reference **Fragments** (raw evidence: logs, ruins, testimonies).
- **In-line Framing:** Raw Fragments must be displayed in-line within Cases using specialized frames that expose esoteric metadata.

**3. Functional Brutalism**
- Every element serves a purpose
- No animations, transitions, shadows, gradients, or decorations
- Navigation is instant and precise
- Borders are structural, not decorative
- **Epistemic Layering:** Use the `CASL` axis to distinguish between raw data and analysis. 
    - Institutional Analysis: `CASL 0.0` (Static, processed).
    - Primary Testimony: `CASL 0.3` (Human, raw).
- **Hardware Flags (Registers):** Use solid-block "Register Flags" for status markers to imply active system verification. Include Validation Hashes (e.g., 0x4F22) next to patterns.

---

## ABSOLUTE PROHIBITIONS

### NEVER ADD:

❌ **Visual Effects**
- No box shadows
- No drop shadows
- No text shadows
- No gradients of any kind
- No blur effects
- No opacity transitions
- No rounded corners (border-radius)
- No background images

❌ **Animations**
- No fade-in/fade-out effects
- No slide animations
- No loading spinners (except progress bars with instant state changes)
- No hover transitions (except instant color changes)
- No keyframe animations
- No CSS transforms for decoration

❌ **Decorative Elements**
- No ASCII art
- No glitch effects
- No scanlines
- No CRT simulation
- No cursor blink effects
- No typewriter text effects
- No particle effects
- No background patterns

❌ **Interaction Gimmicks**
- No fake terminal typing
- No command-line input simulation
- No "hacking" animations
- No sound effects
- No auto-playing media
- No modal overlays (unless critical)

❌ **Typography Violations**
- No font families beyond Recursive Mono
- No decorative fonts
- No italics (use `slnt` axis)
- No animating variation axes
- No text transformations beyond defined presets

---

## DESIGN SYSTEM TOKENS

### Color Palette

```css
/* BACKGROUNDS */
--color-bg-primary: #0a0a0a;      /* Main background - near black */
--color-bg-secondary: #121212;     /* Secondary panels - slightly lighter */

/* TEXT */
--color-text-primary: #e8e8e8;     /* Main text - off-white */
--color-text-secondary: #a0a0a0;   /* Secondary text - gray */

/* STRUCTURE */
--color-border: #333333;           /* Default borders - dark gray */
--color-border-active: #4a4a4a;    /* Active/hover borders - lighter gray */

/* ACCENTS (USE SPARINGLY) */
--color-accent-green: #00ff00;     /* Terminal green - success/intervention */
--color-accent-red: #ff0000;       /* Warning red - danger/refusal/classification */
--color-accent-amber: #ffaa00;     /* Advisory amber - warnings/gridlock */
--color-accent-white: #ffffff;     /* Pure white - emphasis only */
```

**When to Use Accent Colors:**
- Green: Intervention status badges, success states
- Red: Refusal status badges, critical warnings, classification markers
- Amber: Advisory boxes, gridlock status badges, caution states
- White: Active navigation items, focused elements, strong emphasis

### Typography (Locked System)

All presets assume the **Recursive Mono** font file. Only variation axes and spacing change.

```css
/* FONT FAMILIES */
--font-mono: "Recursive Mono", ui-monospace, monospace;

/* SIZES */
--font-size-xs: 13px;    /* Metadata */
--font-size-sm: 14px;    /* Buttons */
--font-size-base: 16px;  /* Body/Prose */
--font-size-lg: 15px;    /* Nav/CTA */
--font-size-xl: 20px;    /* H2 */
--font-size-2xl: 24px;   /* H1 */

/* LINE HEIGHTS */
--line-height-header: 1.2;
--line-height-meta: 1.35;
--line-height-base: 1.45;
```

**Typography Usage Presets:**

1. **Body Text (Institutional):** Uses `--axis-institutional`. Used for Case Analysis.
2. **Body Text (Testimony):** Uses `--axis-testimony`. Used for raw fragments.
3. **Metadata:** `font-size: 13px`, uppercase, `opacity: 0.75`.
4. **Navigation Links:** `font-size: 15px`, lowercase, `--axis-ui`.
5. **Headers (h1, h2, h3):** lowercase, letter-spacing: 0.18em.
6. **Buttons:** uppercase, border 2px solid.

**Typography Rules:**
- ❌ Do not mix fonts.
- ❌ Do not use italics.
- ❌ Do not change `MONO` from `1`.
- ❌ Do not exceed `CASL 0.35`.

### Spacing System (8px Grid)

```css
--space-1: 0.5rem;   /* 8px  - tight spacing */
--space-2: 1rem;     /* 16px - default spacing */
--space-3: 1.5rem;   /* 24px - comfortable spacing */
--space-4: 2rem;     /* 32px - section spacing */
--space-6: 3rem;     /* 48px - major section breaks */
--space-8: 4rem;     /* 64px - page-level spacing */
```

**All spacing must be multiples of 8px.** This creates visual rhythm and consistency.

### Layout Constraints

```css
--container-max-width: 1200px;  /* Outer container */
--content-max-width: 800px;     /* Readable text width */
--border-width: 2px;            /* All borders */
```

---

## COMPONENT LIBRARY

### 1. Terminal Box (Foundation Component)

**Purpose:** All framed content sections. This is the base component for the entire site.

**HTML Structure:**
```html
<div class="terminal-box">
  <div class="terminal-box__header">Section Title</div>
  <div class="content">
    <!-- Content here -->
  </div>
</div>
```

**Variants:**
- `.terminal-box--secondary` - Darker background for nested sections
- `.terminal-box--compact` - Reduced padding for tight layouts

**Visual Specifications:**
- Border: 2px solid #333333
- Padding: 2rem (32px)
- Background: #0a0a0a (or #121212 for secondary)
- Margin-bottom: 2rem

**When to Use:**
- Every major content section
- Navigation panels
- Metadata displays
- Form containers
- Advisory notices

### 2. Navigation Menu

**Purpose:** All clickable navigation lists

**HTML Structure:**
```html
<nav>
  <ul class="nav-menu">
    <li class="nav-menu__item">
      <a href="#" class="nav-menu__link">Menu Item</a>
    </li>
    <li class="nav-menu__item">
      <a href="#" class="nav-menu__link nav-menu__link--active">Active Item</a>
    </li>
  </ul>
</nav>
```

**Interaction Behavior:**
- Default: `> ` prefix is invisible
- Hover/Focus: `> ` prefix appears, text becomes white
- Active: `> ` prefix visible, text is white
- Transition: INSTANT (no fade)

**Visual Specifications:**
- Font: Monospace
- Size: 1rem (16px)
- Spacing between items: 1rem (16px)
- No background change on hover
- Color change only: #e8e8e8 → #ffffff

### 3. Document Card

**Purpose:** Displaying document listings in archive indexes

**HTML Structure:**
```html
<article class="document-card">
  <div class="document-card__id">[DOC-001]</div>
  <h2 class="document-card__title">
    <a href="#" class="document-card__title-link">Document Title</a>
  </h2>
  <div class="document-card__meta">
    <span class="document-card__meta-item">Framework: First Vigil</span>
    <span class="document-card__meta-item">Length: 8,200 words</span>
    <span class="document-card__meta-item">Status: <span class="status-badge status-badge--intervention">Intervention</span></span>
  </div>
  <div class="document-card__actions">
    <a href="#" class="btn btn--small">Access Document</a>
  </div>
</article>
```

**Interaction Behavior:**
- Hover: Border color changes from #333333 to #4a4a4a (instant)
- Title link hover: Text color #e8e8e8 → #ffffff

**Visual Specifications:**
- Border: 2px solid #333333
- Padding: 1.5rem (24px)
- Margin-bottom: 1.5rem (24px)
- ID: Small, gray, monospace
- Title: Large, monospace, uppercase
- Meta: Small, monospace, gray, each item on own line

### 4. Metadata Grid

**Purpose:** Displaying structured key-value pairs (document metadata, system status)

**HTML Structure:**
```html
<div class="metadata-grid">
  <div class="metadata-grid__row">
    <div class="metadata-grid__label">Label:</div>
    <div class="metadata-grid__value">Value</div>
  </div>
  <div class="metadata-grid__row">
    <div class="metadata-grid__label">Another Label:</div>
    <div class="metadata-grid__value">Another Value</div>
  </div>
</div>
```

**Layout:**
- Desktop: Two-column grid (200px label, 1fr value)
- Mobile: Single column, label above value
- Gap: 1rem (16px) between columns
- Row spacing: 0.5rem (8px) padding top/bottom

**Visual Specifications:**
- Font: Monospace
- Size: 0.875rem (14px)
- Label: Uppercase, gray (#a0a0a0)
- Value: Normal case, white (#e8e8e8)

### 5. Status Badges

**Purpose:** Indicating document classification types

**HTML Structure:**
```html
<span class="status-badge status-badge--intervention">Intervention</span>
<span class="status-badge status-badge--refusal">Refusal</span>
<span class="status-badge status-badge--gridlock">Gridlock</span>
<span class="status-badge status-badge--classified">Classified</span>
```

**Color Mapping:**
- Intervention: Green border + text (#00ff00)
- Refusal: Red border + text (#ff0000)
- Gridlock: Amber border + text (#ffaa00)
- Classified: Red border + text (#ff0000)
- Default: Gray border + text (#a0a0a0)

**Visual Specifications:**
- Display: inline-block
- Font: Monospace, 0.75rem (12px)
- Padding: 0.5rem 1rem (8px 16px)
- Border: 1px solid (color matches text)
- Background: Transparent
- Text-transform: uppercase
- Letter-spacing: 0.1em

### 6. Buttons

**Purpose:** All clickable actions

**HTML Structure:**
```html
<button class="btn">Standard Button</button>
<button class="btn btn--small">Small Button</button>
<a href="#" class="btn">Link as Button</a>
```

**Interaction Behavior:**
- Default: Transparent background, bordered
- Hover/Focus: Inverted (white background, black text)
- Transition: INSTANT (no fade)
- Always shows `> ` prefix before text

**Visual Specifications:**
- Font: Monospace, 0.875rem (14px)
- Padding: 1rem 1.5rem (16px 24px)
- Border: 2px solid #333333
- Text-transform: uppercase
- Letter-spacing: 0.1em
- Small variant: 0.5rem 1rem padding, 0.75rem font

### 7. Forms

**Purpose:** Search, filters, newsletter signup

**HTML Structure:**
```html
<form>
  <div class="form-group">
    <label for="input-id" class="form-label">Label Text</label>
    <input type="text" id="input-id" class="form-input" placeholder="Placeholder...">
  </div>
  
  <div class="form-group">
    <label for="select-id" class="form-label">Select Label</label>
    <select id="select-id" class="form-select">
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div>
  
  <div class="form-group">
    <label class="filter-option">
      <input type="checkbox" class="form-checkbox" id="check-id">
      <span class="form-checkbox-label">Checkbox Label</span>
    </label>
  </div>
</form>
```

**Visual Specifications:**
- All form elements: Dark background (#121212), light text (#e8e8e8)
- Border: 2px solid #333333
- Focus border: #4a4a4a
- Padding: 1rem (16px)
- Font: Monospace
- Labels: Uppercase, small (0.875rem), gray

### 8. Advisory Boxes

**Purpose:** Warnings, notices, reader advisories

**HTML Structure:**
```html
<div class="advisory">
  <div class="advisory__header">Advisory Header</div>
  <div class="advisory__content">
    <p>Advisory content here...</p>
  </div>
</div>

<!-- Red variant for critical warnings -->
<div class="advisory advisory--red">
  <div class="advisory__header">Critical Warning</div>
  <div class="advisory__content">
    <p>Warning content...</p>
  </div>
</div>
```

**Visual Specifications:**
- Border: 2px solid #ffaa00 (amber) or #ff0000 (red)
- Background: #121212
- Padding: 1.5rem (24px)
- Header: Monospace, small, colored to match border
- Content: Sans-serif, normal, white text

### 9. Progress Bar

**Purpose:** Document completeness indicators

**HTML Structure:**
```html
<div class="progress-bar">
  <div class="progress-bar__fill" style="width: 67%;">
    <span class="progress-bar__text">67%</span>
  </div>
</div>
```

**Visual Specifications:**
- Container: 16px height, bordered (#333333), dark background
- Fill: White background (#e8e8e8), instant width change (no animation)
- Text: Black text on white fill, monospace, bold

### 10. Breadcrumb Navigation

**Purpose:** Showing current location in archive hierarchy

**HTML Structure:**
```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="#" class="breadcrumb__link">Archive Access</a>
  <span class="breadcrumb__separator">/</span>
  <a href="#" class="breadcrumb__link">Case Files</a>
  <span class="breadcrumb__separator">/</span>
  <span>Current Page</span>
</nav>
```

**Visual Specifications:**
- Font: Monospace, 0.875rem (14px)
- Color: Gray (#a0a0a0)
- Links: Hover turns white (#ffffff)
- Separator: Forward slash with spacing

---

## PAGE TEMPLATES

### Template 1: Homepage (Archive Access Terminal)

**Components Used:**
- Terminal box (header with site title + metadata)
- Terminal box (navigation menu)
- Terminal box (system statistics)
- Terminal box (recent additions with document cards)
- Footer

**Layout:**
- Single column
- Max-width: 1200px
- All boxes full width
- Generous spacing between sections (2-4rem)

**Content Structure:**
1. Site identity + status metadata
2. Main navigation menu (6-8 items)
3. Collection statistics (4-6 key metrics)
4. Recent documents (2-3 document cards)

### Template 2: Archive Index (Document Listing)

**Components Used:**
- Breadcrumb navigation
- Terminal box (page header with query info)
- Two-column layout: Filter panel (sidebar) + Document cards (main)
- Pagination controls
- Footer

**Layout:**
- Two columns: 300px fixed sidebar, 1fr main content
- Sidebar: Filter panel with checkboxes
- Main: Stack of document cards
- Mobile: Single column, filters collapse/expand

**Filtering Behavior:**
- Checkboxes instantly update visible documents (no loading state needed)
- "Apply Filters" button submits query
- "Clear All" resets to default view

### Template 3: Document View (Full Story)

**Components Used:**
- Breadcrumb navigation
- Terminal box (document header with full metadata grid)
- Advisory box (reader warnings if applicable)
- Progress bar (document completeness)
- Terminal box (document content)
- Terminal box (archival commentary/notes)
- Terminal box (related documents)
- Action buttons (return, download, cite)
- Footer

**Layout:**
- Single column
- Max-width: 800px for readable text
- Metadata in wide grid format
- Story content with comfortable line height

**Content Hierarchy:**
1. Breadcrumb
2. Document ID + Title + Complete Metadata
3. Reader Advisory (if needed)
4. Completeness indicator
5. Story text
6. Archival commentary
7. Related documents
8. Actions

### Template 4: Search Page

**Components Used:**
- Breadcrumb navigation
- Terminal box (page intro)
- Terminal box (search form with all filters)
- Terminal box (results with query info)
- Document cards (results)
- Advisory box (advanced search syntax help)
- Footer

**Layout:**
- Single column
- Form fields in logical groups
- Results appear below form
- Search excerpts in result cards

### Template 5: About/Information Page

**Components Used:**
- Breadcrumb navigation
- Terminal box (page header)
- Multiple terminal boxes (mission, collection info, classification system, etc.)
- Form (newsletter signup)
- Footer

**Layout:**
- Single column
- Mix of metadata grids and prose sections
- Comfortable reading width

---

## CORE ASSETS

### Favicon
- **File:** `canonical_brutalist_diskette.svg`
- **Usage:** Must be linked in the `<head>` of every institutional page. It represents the "Legacy Data Node" signature.

---

## RESPONSIVE BEHAVIOR

### Breakpoints

```css
/* Desktop: > 768px (default) */
/* Mobile: ≤ 768px */
```

### Mobile Adaptations

**DO:**
- Reduce font sizes by 10-15%
- Stack two-column layouts to single column
- Reduce padding from 2rem to 1rem
- Maintain all borders and structure
- Keep interaction behavior identical

**DON'T:**
- Remove any content
- Hide navigation behind hamburger menu (show full menu)
- Add touch-specific gestures beyond standard tap/scroll
- Change color scheme
- Simplify component structure

### Specific Mobile Rules

```css
@media (max-width: 768px) {
  /* Reduce container padding */
  .container { padding: 1rem; }
  
  /* Reduce terminal box padding */
  .terminal-box { padding: 1rem; }
  
  /* Stack metadata grid */
  .metadata-grid__row {
    grid-template-columns: 1fr;
  }
  
  /* Stack filter + results layout */
  .two-column-layout {
    grid-template-columns: 1fr;
  }
  
  /* Slightly smaller fonts */
  :root {
    --font-size-base: 0.875rem;
    --font-size-xl: 1.125rem;
  }
}
```

---

## CONTENT GUIDELINES

### Institutional Voice

All interface copy should maintain institutional neutrality:

**✓ GOOD:**
- "Access Case Files"
- "Query the archive database"
- "Document recovery status"
- "Classification: Public Access"

**✗ BAD:**
- "Check out our stories!"
- "Dive into the archive"
- "Amazing documents await"
- "Welcome to our site"

### Metadata Fields

Standard fields for document metadata must avoid authorial "system" knowledge:
- **Classificatory Pattern:** (e.g., Pattern Alpha, Pattern Beta - based on phenomenological similarity)
- **Document ID:** Unique identifier (format: [RF-####])
- **Dating (Estimated):** PI/AI format
- **Document Type:** Testimony, Log, Archive Fragment, Scholarly Analysis
- **Epistemic Status:** Primary, Secondary, Reconstructed, Contested
- **Observational Integrity:** Percentage
- **Phenomenological Tags:** Observed effects (e.g., Stillness, Fracture, Absence)

### Classificatory Groupings (Diegetic)

Standard document groupings should be based on **Phenomenological Signature** rather than "Frameworks":
- **Pattern A (Stable):** Associated with long-term civilizational stillness or saturation.
- **Pattern B (Dynamic):** Associated with sudden atmospheric or structural fractures.
- **Pattern C (Cognitive):** Associated with the collapse of meaning or justification.
- **Pre-Institutional:** Documents predating the formation of formal observation.
- **Unclassifiable:** Documents resisting even phenomenological grouping.

---

## TECHNICAL IMPLEMENTATION

### File Structure

```
/
├── index.html (homepage)
├── archive-index.html (document listing)
├── document-view.html (individual story)
├── search.html
├── about.html
├── css/
│   └── archive.css (single stylesheet)
├── js/
│   └── archive.js (minimal interactivity if needed)
└── documents/
    └── [individual document pages]
```

### HTML Requirements

- Semantic HTML5 elements (nav, article, aside, main, section)
- ARIA labels for navigation and dynamic content
- Proper heading hierarchy (h1 → h2 → h3)
- `lang="en"` attribute on html element
- Descriptive `title` elements per page

### CSS Requirements

- Mobile-first approach with min-width media queries
- CSS Grid for layouts (not floats or flexbox for main structure)
- CSS Custom Properties (variables) for all design tokens
- No CSS frameworks (Bootstrap, Tailwind, etc.)
- Single stylesheet, logically organized by component

### JavaScript Requirements

- Minimal JavaScript (only for filtering, search if needed)
- Progressive enhancement (site works without JS)
- No external JS libraries required
- Vanilla JavaScript only (no jQuery, React, etc.)

### Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- Focus states clearly visible
- Screen reader compatible
- Sufficient color contrast (already met by design system)
- No content that flashes or blinks

---

## CONTENT INTEGRATION

### Adding New Documents

New story pages should follow this pattern:

1. **Filename:** `document-[id].html` (e.g., `document-bfs-001.html`)

2. **Required Metadata:** All fields in metadata grid

3. **Optional Components:**
   - Reader advisory (if content has interpretive disputes)
   - Progress bar (if document incomplete)
   - Archival commentary (if institutional notes needed)
   - Related documents section

4. **Story Text:**
   - Wrapped in `<div class="document-content">`
   - Standard paragraphs with comfortable line-height
   - Use `<em>` for editorial notes like "[degraded section]"
   - Use `<strong>` sparingly for emphasis within text

### Creating New Index Pages

To create filtered views (by framework, by type, etc.):

1. Copy `archive-index.html`
2. Update page title and breadcrumb
3. Update query metadata to reflect filter
4. Show only relevant document cards
5. Pre-check appropriate filters in sidebar

---

## EXTRAPOLATION GUIDE

When creating new components not explicitly defined:

### Process:

1. **Identify Purpose:** What information is being presented?

2. **Choose Base Component:**
   - Framed content → Terminal box
   - List of items → Document cards or navigation menu
   - Key-value data → Metadata grid
   - User input → Form components
   - Warning/notice → Advisory box

3. **Apply Design System:**
   - Use only defined colors
   - Use only defined typography scales
   - Use only defined spacing units
   - Maintain 2px borders
   - Keep backgrounds within defined palette

4. **Test Against Prohibitions:**
   - No decorative elements?
   - No animations?
   - No rounded corners?
   - Instant interactions only?
   - Monochrome + minimal accent color?

5. **Verify Consistency:**
   - Does it look like it belongs with existing components?
   - Could someone mistake it for a different site's component?
   - Is it visually "boring" in the right way (authoritative, not flashy)?

### Example: Creating a Data Table

**Process:**
1. Purpose: Display tabular data (e.g., document comparison)
2. Base: Terminal box container
3. Design application:
   - Monospace font
   - 2px borders between cells
   - Dark background for header row
   - Gray text for headers
   - White text for data
   - Hover: row background slightly lighter
4. Prohibition check: No zebra striping, no shadows, no fancy hover effects
5. Consistency: Looks institutional and minimal

**Result:** The data table defined in CSS (included in stylesheet)

---

## FINAL CHECKLIST

Before considering implementation complete:

### Visual Fidelity
- [ ] All text is IBM Plex Mono or IBM Plex Sans
- [ ] No colors outside defined palette
- [ ] All borders are 2px solid #333333
- [ ] All spacing is multiples of 8px
- [ ] No rounded corners anywhere
- [ ] No shadows, gradients, or effects

### Functional Completeness
- [ ] All navigation links work
- [ ] Forms can be submitted
- [ ] Filters can be applied
- [ ] Search returns results
- [ ] Mobile layout stacks properly
- [ ] Keyboard navigation works

### Content Integrity
- [ ] All metadata fields present
- [ ] Institutional voice maintained
- [ ] Breadcrumbs show correct path
- [ ] Footer on every page
- [ ] Page titles descriptive

### Technical Standards
- [ ] Valid HTML5
- [ ] Semantic elements used
- [ ] ARIA labels present
- [ ] Works without JavaScript
- [ ] Fast loading (< 2 seconds)
- [ ] Screen reader compatible

---

## REFERENCE MATERIALS

### Inspirational References

**Visual:**
- HAL 9000 interface panels (2001: A Space Odyssey)
- NASA mission control displays (1960s-70s)
- Early computer terminals (IBM 3270)
- Military/government classification documents
- Institutional archive systems

**Aesthetic:**
- Brutalist architecture websites
- Government document archives
- Technical specification databases
- Academic research repositories

**NOT Like:**
- Sci-fi "hacker" terminals with glitch effects
- Retro gaming aesthetics
- Vaporwave or outrun styles
- Modern SaaS product websites
- Social media interfaces

### Typography References

IBM Plex font family:
- Designed by IBM for corporate identity
- Monospace variant excellent for terminal aesthetic
- Sans variant highly readable for body text
- Available free from Google Fonts

### Color Theory

The chosen palette creates:
- **Extreme contrast:** Near-black + off-white for readability
- **Institutional authority:** Muted, professional, serious
- **Minimal distraction:** Accent colors used only for meaning
- **Terminal authenticity:** Green/amber/red match actual terminal palettes

---

## COMMON MISTAKES TO AVOID

### Mistake #1: Adding Personality

**Wrong:** "Hey there! Welcome to our awesome archive 🚀"
**Right:** "TERMINAL GRADIENT INSTITUTIONAL ARCHIVE :: ACCESS TERMINAL"

The site has no personality. It's institutional infrastructure.

### Mistake #2: Softening the Aesthetic

**Wrong:** Adding subtle gradients "to make it less harsh"
**Right:** Keeping stark contrast and hard edges

The harshness is intentional. It conveys authority and seriousness.

### Mistake #3: Improving Usability with Decoration

**Wrong:** Adding hover effects, tooltips, highlights to "help users"
**Right:** Clear structure and instant feedback only

Usability comes from clarity, not decoration.

### Mistake #4: Modernizing the Look

**Wrong:** "Let's make it responsive with smooth animations"
**Right:** Instant layout changes, no animation

Terminal systems don't animate. Neither should this.

### Mistake #5: Adding "Just a Little" Flair

**Wrong:** Small drop shadow, slight border radius, tiny gradient...
**Right:** Zero tolerance for any deviation

Once you add one small effect, the entire aesthetic is compromised.

---

## SUCCESS CRITERIA

A successful implementation should:

1. **Look Institutional:** Like an actual government/research archive interface
2. **Feel Functional:** Every element serves a purpose
3. **Maintain Consistency:** New pages/components fit seamlessly
4. **Respect Constraints:** Zero violations of prohibitions
5. **Enable Content:** The design supports the stories, doesn't compete with them

**The ultimate test:** Could this interface exist in-universe as the actual Terminal Gradient institutional archive system?

If yes → success.
If no → identify what breaks immersion and remove it.

---

## IMPLEMENTATION PRIORITY ORDER

For agentic coders, implement in this sequence:

1. **Phase 1: Foundation**
   - CSS design system (complete with all tokens)
   - Base HTML structure (container, terminal box)
   - Typography system
   - Color application

2. **Phase 2: Core Components**
   - Navigation menu
   - Document card
   - Metadata grid
   - Buttons
   - Forms

3. **Phase 3: Page Templates**
   - Homepage
   - Archive index
   - Document view
   - Search page
   - About page

4. **Phase 4: Responsive Behavior**
   - Mobile breakpoints
   - Layout stacking
   - Touch interactions

5. **Phase 5: Polish**
   - Accessibility audit
   - Cross-browser testing
   - Performance optimization
   - Content integration

---

END OF IMPLEMENTATION GUIDE
