# DOS AND DON'TS GUIDE
## Terminal Gradient Institutional Archive

Visual and functional guidelines for maintaining design integrity.

---

## VISUAL DESIGN

### ✓ DO: Use Extreme Contrast

**CORRECT:**
- Near-black background (#0a0a0a)
- Off-white text (#e8e8e8)
- Dark gray borders (#333333)
- High readability through stark contrast

**REASON:** Terminal systems used maximum contrast for readability in industrial/military environments. Maintain this aesthetic for authority and clarity.

### ✗ DON'T: Soften the Contrast

**WRONG:**
- Mid-gray backgrounds
- Light gray text on gray background
- Subtle, low-contrast color schemes
- Pastels or muted tones

**WHY:** Softening contrast undermines the institutional authority. The site should look serious and functional, not friendly or approachable.

---

### ✓ DO: Use Monospace for UI Elements

**CORRECT:**
- All headers: IBM Plex Mono
- All metadata: IBM Plex Mono
- All labels: IBM Plex Mono
- Navigation: IBM Plex Mono
- Buttons: IBM Plex Mono

**REASON:** Monospace typography is inherent to terminal interfaces and creates visual consistency with technical/institutional systems.

### ✗ DON'T: Use Decorative Fonts

**WRONG:**
- Serif fonts for headers
- Script fonts anywhere
- Display fonts
- More than 2 font families

**WHY:** Every additional font family dilutes the terminal aesthetic. The site must look like infrastructure, not a designed website.

---

### ✓ DO: Keep Borders Sharp and Structural

**CORRECT:**
- 2px solid borders
- 90-degree corners only
- Borders define structure
- Consistent border width throughout

**REASON:** Brutalist architecture uses structural elements as decoration. Borders are functional dividers, not decorative frames.

### ✗ DON'T: Add Border Decoration

**WRONG:**
- Rounded corners (border-radius)
- Double borders
- Dashed or dotted borders
- Border gradients
- Varying border widths for style

**WHY:** Any softening or decoration of borders breaks the brutalist geometric precision.

---

### ✓ DO: Use Color for Meaning Only

**CORRECT:**
- Green = Intervention/Success
- Red = Refusal/Warning/Classified
- Amber = Advisory/Gridlock
- White = Active/Emphasis
- Gray = Default/Secondary

**REASON:** Terminal systems used color coding for functional status indication, not decoration.

### ✗ DON'T: Use Color for Decoration

**WRONG:**
- Colorful backgrounds
- Gradient color transitions
- Color for visual interest
- Multiple colors in same context
- Brand colors unrelated to meaning

**WHY:** Every color must have semantic meaning. Decorative color use breaks the functional aesthetic.

---

### ✓ DO: Maintain Geometric Grid

**CORRECT:**
- All spacing: multiples of 8px
- Aligned elements
- Consistent padding
- Grid-based layouts
- Vertical rhythm

**REASON:** Industrial design systems use precise mathematical spacing for visual coherence.

### ✗ DON'T: Use Arbitrary Spacing

**WRONG:**
- Pixel-pushing for visual balance
- Inconsistent margins
- Random padding values
- Breaking grid alignment
- "Optical" spacing adjustments

**WHY:** Mathematical precision creates institutional authority. Visual "tweaking" looks amateurish.

---

## TYPOGRAPHY

### ✓ DO: Use Uppercase for Headers

**CORRECT:**
```
TERMINAL GRADIENT INSTITUTIONAL ARCHIVE
DOCUMENT ID: BFS-001
CLASSIFICATION: PUBLIC ACCESS
```

**REASON:** Military/government/institutional systems use uppercase for headers and labels. Creates authoritative tone.

### ✗ DON'T: Mix Case Randomly

**WRONG:**
```
Terminal Gradient Institutional Archive
Document Id: bfs-001
Classification: Public Access
```

**WHY:** Inconsistent case treatment looks unprofessional and breaks the systematic aesthetic.

---

### ✓ DO: Add Letter-Spacing to Headers

**CORRECT:**
- Headers: `letter-spacing: 0.05em`
- Labels: `letter-spacing: 0.1em`
- Creates technical/institutional feel

**REASON:** Widely-spaced monospace type is characteristic of technical documentation and terminal systems.

### ✗ DON'T: Use Tight Letter-Spacing

**WRONG:**
- `letter-spacing: -0.05em` (negative spacing)
- No letter-spacing on monospace
- Compressed headers

**WHY:** Tight spacing makes monospace fonts harder to read and loses the technical aesthetic.

---

## INTERACTION DESIGN

### ✓ DO: Provide Instant Feedback

**CORRECT:**
- Hover: immediate color change
- Click: instant state change
- Focus: immediate outline/highlight
- No delays or loading states (unless real)

**REASON:** Terminal interfaces respond instantly. Any perceived "lag" breaks immersion.

### ✗ DON'T: Add Smooth Animations

**WRONG:**
- Fade-in effects
- Slide transitions
- Easing functions
- Loading spinners (unless actually loading)
- Hover transitions

**WHY:** Animations make the interface feel like a modern web app, not a terminal system.

---

### ✓ DO: Use Prefix Indicators

**CORRECT:**
- Navigation: `> Menu Item` (appears on hover)
- Buttons: `> Action` (always visible)
- Active states: `> Active Item` (always visible)

**REASON:** `>` prefix is universal terminal indicator for active/selectable items.

### ✗ DON'T: Add Icons or Graphics

**WRONG:**
- Icon fonts (FontAwesome, etc.)
- SVG icons
- Emoji
- Arrow graphics
- Decorative symbols

**WHY:** The `>` character is the ONLY graphic element needed. Everything else is text.

---

### ✓ DO: Make Actions Obvious

**CORRECT:**
- Clear button labels
- Descriptive link text
- Expected navigation patterns
- Standard form behaviors

**REASON:** Institutional systems prioritize clarity over cleverness. Users should never be confused.

### ✗ DON'T: Add Clever Interactions

**WRONG:**
- Hidden navigation
- Gesture-based controls
- Parallax scrolling
- Infinite scroll
- Modal overlays (unless necessary)
- Tooltips everywhere

**WHY:** Every clever interaction breaks the utilitarian aesthetic. The site is a tool, not an experience.

---

## CONTENT PRESENTATION

### ✓ DO: Use Institutional Voice

**CORRECT:**
- "Access Case Files"
- "Document Recovery Status"
- "Classification: Public Access"
- "Query Results: 10 documents"
- "Archival Year 14,847 Post-Institutional"

**REASON:** The site is an in-universe institutional archive. All copy should maintain this framing.

### ✗ DON'T: Use Casual Language

**WRONG:**
- "Check out our stories!"
- "Hey there!"
- "Awesome archive"
- "Thanks for visiting"
- Emoji or emoticons

**WHY:** Casual language breaks the institutional framing. The site has no personality—it's infrastructure.

---

### ✓ DO: Present Metadata Systematically

**CORRECT:**
- Consistent field labels
- Key-value pairs
- Structured information
- Classification systems
- Document IDs

**REASON:** Archival systems use systematic metadata for organization and retrieval.

### ✗ DON'T: Hide Metadata

**WRONG:**
- Minimalist "clean" design that removes metadata
- Hiding technical details
- Oversimplifying classification
- Removing document IDs

**WHY:** The metadata IS the interface. It's not clutter—it's the core functionality.

---

### ✓ DO: Frame Stories as Documents

**CORRECT:**
- Stories have document IDs
- Recovery dates and authentication status
- Completeness indicators
- Classification types
- Archival commentary

**REASON:** Maintaining the framing device is essential. Stories aren't "posts"—they're archived documents.

### ✗ DON'T: Present Stories as Blog Posts

**WRONG:**
- "Posted on [date]"
- Author names
- Social sharing buttons
- Comments section
- "Related posts"

**WHY:** This is not a blog. It's an institutional archive containing recovered historical documents.

---

## LAYOUT AND STRUCTURE

### ✓ DO: Use Framed Sections

**CORRECT:**
- Every section in terminal-box
- Clear visual hierarchy
- Borders define structure
- Nested boxes for subsections

**REASON:** Terminal interfaces use frames/panels to organize information. The boxes are functional, not decorative.

### ✗ DON'T: Use Card-Based Layouts

**WRONG:**
- Floating cards with shadows
- Grid of thumbnails
- Pinterest-style masonry
- Photo-heavy layouts

**WHY:** Cards imply modern web design. Terminal systems use fixed frames and borders.

---

### ✓ DO: Maximize Information Density

**CORRECT:**
- Show all relevant metadata
- Full document listings
- Complete classification systems
- Detailed status information

**REASON:** Institutional systems prioritize information access over visual simplicity.

### ✗ DON'T: Hide Information for "Cleanliness"

**WRONG:**
- Collapsing sections by default
- Truncating text unnecessarily
- Minimalist to the point of obscuring function
- Hiding filters/options

**WHY:** The site exists to provide access to information. Hiding information for aesthetic reasons defeats the purpose.

---

## RESPONSIVE DESIGN

### ✓ DO: Stack Layouts on Mobile

**CORRECT:**
- Two-column → single column
- Maintain all content
- Reduce padding
- Keep all borders and structure

**REASON:** Mobile users need same information as desktop users. Structure adapts, content doesn't.

### ✗ DON'T: Create Separate Mobile Experience

**WRONG:**
- Different navigation pattern
- Hidden content
- Simplified interface
- Removing "advanced" features

**WHY:** The institutional aesthetic must be consistent across devices. Mobile isn't a lesser experience.

---

### ✓ DO: Reduce Spacing on Small Screens

**CORRECT:**
- Padding: 2rem → 1rem
- Font sizes: slightly smaller
- Margins: proportionally reduced
- Grid gaps: 2rem → 1rem

**REASON:** Preserving proportion while adapting to smaller screens maintains visual consistency.

### ✗ DON'T: Fundamentally Redesign

**WRONG:**
- Changing color scheme
- Different typography
- Removing borders
- Simplified components

**WHY:** Mobile and desktop should be visually identical apart from layout stacking and size adjustments.

---

## TECHNICAL IMPLEMENTATION

### ✓ DO: Write Semantic HTML

**CORRECT:**
```html
<article class="document-card">
  <h2 class="document-card__title">Document Title</h2>
  <nav class="breadcrumb" aria-label="Breadcrumb">
</article>
```

**REASON:** Semantic HTML improves accessibility and maintains clear document structure.

### ✗ DON'T: Use Divs for Everything

**WRONG:**
```html
<div class="document-card">
  <div class="document-card__title">Document Title</div>
  <div class="breadcrumb">
</div>
```

**WHY:** Proper semantic elements improve SEO, accessibility, and code maintainability.

---

### ✓ DO: Use CSS Custom Properties

**CORRECT:**
```css
.terminal-box {
  background: var(--color-bg-primary);
  border: var(--border-width) solid var(--color-border);
  padding: var(--space-4);
}
```

**REASON:** Design tokens ensure consistency and make global changes easy.

### ✗ DON'T: Hardcode Values

**WRONG:**
```css
.terminal-box {
  background: #0a0a0a;
  border: 2px solid #333333;
  padding: 32px;
}
```

**WHY:** Hardcoded values create inconsistency when changes are needed.

---

### ✓ DO: Keep CSS Organized by Component

**CORRECT:**
```css
/* ============================================
   TERMINAL BOX COMPONENT
   ============================================ */

.terminal-box { }
.terminal-box--secondary { }
.terminal-box__header { }
```

**REASON:** Component-based organization matches HTML structure and improves maintainability.

### ✗ DON'T: Mix All Styles Together

**WRONG:**
```css
.terminal-box { }
.nav-menu { }
.terminal-box__header { }
.btn { }
.terminal-box--secondary { }
```

**WHY:** Random organization makes finding and modifying styles difficult.

---

## ACCESSIBILITY

### ✓ DO: Provide ARIA Labels

**CORRECT:**
```html
<nav aria-label="Breadcrumb">
<nav aria-label="Main navigation">
<button aria-label="Close dialog">
```

**REASON:** Screen readers need context for navigation and interactive elements.

### ✗ DON'T: Rely on Visual-Only Cues

**WRONG:**
- Color-only status indicators
- Icon-only buttons (no text)
- Unlabeled form fields
- No alt text on images

**WHY:** Visual-only cues exclude users with visual impairments.

---

### ✓ DO: Maintain Keyboard Navigation

**CORRECT:**
- All interactive elements focusable
- Visible focus states
- Logical tab order
- No keyboard traps

**REASON:** Many users navigate without a mouse. Keyboard accessibility is essential.

### ✗ DON'T: Break Tab Order

**WRONG:**
- `tabindex="1"` to control order
- Hidden but focusable elements
- Focus on non-interactive elements
- Invisible focus indicators

**WHY:** Breaking tab order creates confusion and accessibility barriers.

---

## PERFORMANCE

### ✓ DO: Keep It Lightweight

**CORRECT:**
- Single CSS file
- No external frameworks
- Minimal JavaScript
- Web-safe fonts from Google Fonts

**REASON:** Fast loading maintains the instant, responsive feel of terminal systems.

### ✗ DON'T: Add Heavy Dependencies

**WRONG:**
- React/Vue frameworks
- jQuery
- Animation libraries
- Icon fonts (500KB+)
- Multiple CSS frameworks

**WHY:** The site should load in under 2 seconds. Heavy dependencies break this.

---

## TESTING CHECKLIST

Before considering any component complete, verify:

### Visual
- [ ] Uses only IBM Plex Mono or IBM Plex Sans
- [ ] Colors match design tokens exactly
- [ ] All spacing is multiples of 8px
- [ ] Borders are 2px solid, no rounded corners
- [ ] No shadows, gradients, or effects
- [ ] Uppercase used appropriately
- [ ] Letter-spacing applied to headers

### Interaction
- [ ] Hover states instant (no animation)
- [ ] Focus states visible
- [ ] Keyboard navigation works
- [ ] No smooth scrolling or transitions
- [ ] Actions provide immediate feedback

### Content
- [ ] Institutional voice maintained
- [ ] Metadata structured correctly
- [ ] Document framing preserved
- [ ] No casual language

### Technical
- [ ] Semantic HTML used
- [ ] ARIA labels present
- [ ] CSS custom properties used
- [ ] Component-based organization
- [ ] Mobile responsive

### Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Screen reader tested
- [ ] Keyboard-only navigation works
- [ ] Sufficient contrast ratios

---

## FINAL RULE

**When in doubt, ask:**

"Could this exist in-universe as the actual Terminal Gradient institutional archive system?"

If the answer is no, identify what breaks the immersion and remove it.

The site is not a representation of an archive.
The site IS the archive.

---

END OF DOS AND DON'TS GUIDE
