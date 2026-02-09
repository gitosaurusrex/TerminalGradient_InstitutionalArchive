# INSTITUTE FOR PRECEDENT STUDIES ARCHIVE
## Complete Specification Package for Agentic Website Generators

**Version:** 1.0  
**Created:** February 2026  
**Purpose:** Enable 100% faithful implementation of brutalist terminal archive aesthetic

---

## PACKAGE CONTENTS

This specification package contains everything needed to build the Terminal Gradient Institutional Archive website with complete visual and functional fidelity.

### 📄 Documentation Files

**guidance/QUICK_START.md**
- Read this first
- Step-by-step implementation guide
- Build order recommendation
- Common mistakes to avoid

**guidance/IMPLEMENTATION_GUIDE.md**
- Complete design philosophy
- Design system tokens (colors, typography, spacing)
- All component specifications
- Page templates
- Responsive behavior
- Success criteria
- 15,000+ words of detailed guidance

**guidance/COMPONENT_REFERENCE.md**
- HTML structure for all components
- CSS specifications
- Usage examples
- When to use each component
- Layout patterns
- Complete code examples

**guidance/DOS_AND_DONTS.md**
- Visual design rules
- Typography guidelines
- Interaction design principles
- Content presentation standards
- Testing checklists
- Common mistakes with corrections

### 🎨 Design Assets

**css/archive.css**
- Complete stylesheet (1,000+ lines)
- All design tokens defined as CSS variables
- Every component fully styled
- Responsive breakpoints
- Accessibility considerations
- Organized by component

### 📱 Example Pages

**pages/index.html** - Homepage
- Site header with metadata
- Navigation menu
- System statistics
- Recent documents
- Demonstrates: Terminal boxes, navigation menu, document cards, metadata grid

**pages/archive-index.html** - Document Listing
- Breadcrumb navigation
- Two-column layout (filters + results)
- Multiple document cards
- Filter panel with checkboxes
- Pagination
- Demonstrates: Filters, document cards, grid layouts

**pages/document-view.html** - Full Story Page
- Complete metadata display
- Reader advisory boxes
- Progress indicators
- Story content formatting
- Related documents
- Action buttons
- Demonstrates: All metadata components, advisory boxes, content styling

**pages/search.html** - Search Interface
- Search form with all input types
- Results display
- Advanced syntax help
- Demonstrates: Forms, search results, advisory boxes

**pages/about.html** - Archive Information
- Multiple content sections
- Newsletter signup form
- Technical specifications
- Demonstrates: Mixed content types, forms, informational layouts

---

## DESIGN PHILOSOPHY

### Core Concept
- This is NOT a website about an archive.  
- This IS the electronic archive itself—an in-universe institutional system.
- Stories in the Terminal Gradient universe are "Case Files"
- Case Files are composed of in-universe analysis and document fragments.
- Document Fragments are in-universe logs, ruins, myths, etc, that describe events from someone's subjective POV

### Aesthetic Principles
1. **HAL 9000 Minimalism** - Extreme geometric precision, zero decoration, high contrast
2. **Brutalist Functionality** - Every element serves a purpose
3. **Terminal Authority** - Institutional framing maintained throughout
4. **Instant Responsiveness** - No animations or loading states
5. **Unified Typography** - Single font with variation axes for hierarchy

### Absolute Prohibitions
- No shadows, gradients, or rounded corners
- No animations or transitions (except instant state changes)
- No decorative elements or icons
- No personality or casual language
- No fonts beyond Recursive Mono
- No italics (use `slnt` axis)

---

## DESIGN SYSTEM AT A GLANCE

### Colors
```
Backgrounds:  #0a0a0a (primary), #121212 (secondary)
Text:         #e8e8e8 (primary), #a0a0a0 (secondary)
Borders:      #333333 (default), #4a4a4a (active)
Accents:      #00ff00 (green), #ff0000 (red), #ffaa00 (amber)
```

### Typography (Locked System)
```
Single Font:  Recursive Mono
Presets:      Prose, Metadata, Nav, CTA, Headers, Buttons
Hierarchy:    Managed via axes (CASL, slnt)
```

### Spacing (8px Grid)
```
8px, 16px, 24px, 32px, 48px, 64px
```

### Structure
```
Borders:      2px solid, 90° corners only
Containers:   Max-width 1200px (site), 800px (content)
Layout:       CSS Grid for structure
```

---

## IMPLEMENTATION WORKFLOW

### Phase 1: Foundation (Day 1)
1. Read QUICK_START.md
2. Review example pages
3. Copy archive.css
4. Set up file structure
5. Build homepage

### Phase 2: Core Pages (Day 2)
1. Archive index with filters
2. Document view template
3. Search interface
4. About page

### Phase 3: Content (Day 3)
1. Create document pages
2. Link navigation
3. Test all interactions
4. Verify consistency

### Phase 4: Polish (Day 4)
1. Mobile responsive testing
2. Accessibility audit
3. Cross-browser check
4. Performance optimization

---

## COMPONENT LIBRARY

### 14 Core Components

1. **Terminal Box** - Base framed container
2. **Navigation Menu** - Clickable menu lists
3. **Breadcrumb Navigation** - Site hierarchy
4. **Document Card** - Document listings
5. **Metadata Grid** - Key-value pairs
6. **Status Badges** - Classification indicators
7. **Buttons** - All actions
8. **Form Elements** - Inputs, selects, checkboxes
9. **Advisory Boxes** - Warnings and notices
10. **Progress Bar** - Completeness indicators
11. **Filter Panel** - Sidebar filters
12. **Data Table** - Tabular data
13. **Document Content** - Story text styling
14. **Footer** - Site footer

All components fully documented in COMPONENT_REFERENCE.md with HTML/CSS examples.

---

## PAGE TEMPLATES

### 5 Core Templates

1. **Homepage** - Archive access terminal
2. **Archive Index** - Document listings with filters
3. **Document View** - Full story with metadata
4. **Search** - Query interface with results
5. **About** - Institutional information

All templates demonstrated in example pages with complete markup.

---

## QUALITY STANDARDS

### Visual Fidelity Checklist
- [ ] Only Recursive Mono font
- [ ] Axis variations match presets
- [ ] No italics (use slnt axis)
- [ ] Colors match design tokens exactly
- [ ] All spacing is multiples of 8px
- [ ] 2px borders, no rounded corners
- [ ] No shadows, gradients, or decorations
- [ ] Instant interactions only

### Content Integrity Checklist
- [ ] Institutional voice maintained
- [ ] Document IDs follow format [ABC-001]
- [ ] Metadata uses standard fields
- [ ] Classifications use standard types
- [ ] No casual language

### Technical Standards Checklist
- [ ] Semantic HTML5
- [ ] CSS custom properties
- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Mobile responsive
- [ ] WCAG 2.1 AA compliant

---

## COMMON MISTAKES TO AVOID

### Visual
❌ Adding rounded corners or shadows  
✓ Keep sharp 90° corners and no effects

❌ Using decorative fonts or multiple font families  
✓ Only Recursive Mono with axes

❌ Softening contrast with mid-tone grays  
✓ Maintain stark contrast (#0a0a0a + #e8e8e8)

### Interaction
❌ Smooth animations and transitions  
✓ Instant state changes only

❌ Adding clever UI patterns  
✓ Simple, predictable interactions

### Content
❌ Casual or friendly language  
✓ Institutional neutral voice

❌ Treating stories as blog posts  
✓ Frame as archived documents

---

## TESTING CRITERIA

### The Ultimate Test
**"Could this exist in-universe as the actual Terminal Gradient institutional archive?"**

If yes → Success  
If no → Identify what breaks immersion and remove it

### Detailed Testing
1. Visual comparison to example pages
2. All navigation functional
3. Forms submittable
4. Mobile layout correct
5. Keyboard navigation works
6. Screen reader compatible
7. Fast loading (< 2 seconds)

---

## EXTRAPOLATION GUIDELINES

When creating new components not in examples:

### Process:
1. Identify purpose (what information?)
2. Choose base (start with terminal-box)
3. Apply design system (only defined tokens)
4. Check prohibitions (no decorations)
5. Test consistency (looks like it belongs?)

### Example:
Need a notification banner? 
→ Terminal box with appropriate border color
→ Recursive Mono typography with axis presets
→ Instant appearance/dismissal
→ No animation or decoration

**Result:** Consistent with existing aesthetic

---

## TECHNICAL SPECIFICATIONS

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

### Performance Targets
- First Paint: < 1 second
- Page Load: < 2 seconds
- No blocking resources
- Minimal JavaScript

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader compatible
- Sufficient contrast (21:1 for most text)

### File Structure
```
/
├── index.html
├── archive-index.html
├── document-view.html
├── search.html
├── about.html
├── css/
│   └── archive.css
└── documents/
    └── [individual document pages]
```

---

## CONTENT INTEGRATION

### Adding New Documents

1. Copy document-view.html
2. Update metadata (ID, title, framework, classification, etc.)
3. Add story content in `<div class="document-content">`
4. Optional: Add reader advisory, progress bar, commentary
5. Link from archive index

### Creating New Index Pages

1. Copy archive-index.html
2. Update page header and query info
3. Pre-check relevant filters
4. Show filtered document cards
5. Update breadcrumb and navigation

---

## MAINTENANCE GUIDELINES

### Making Global Changes
All design tokens are in CSS custom properties.
To change spacing, colors, or typography globally:
1. Edit CSS variables in `:root`
2. Changes propagate throughout site
3. Test all pages
4. Verify consistency maintained

### Adding New Components
1. Follow component creation process in IMPLEMENTATION_GUIDE.md
2. Use only design system tokens
3. Document HTML structure
4. Add CSS to appropriate section
5. Test against prohibitions checklist

---

## SUCCESS METRICS

Your implementation succeeds when:

1. **Visual:** Indistinguishable from example pages
2. **Functional:** All interactions work as specified
3. **Consistent:** New pages/components fit seamlessly
4. **Accessible:** WCAG 2.1 AA compliant
5. **Performant:** Fast loading, responsive
6. **Maintainable:** Clean, organized code
7. **Extensible:** New content easy to add

---

## SUPPORT & RESOURCES

### Documentation Files (Read in Order)
1. QUICK_START.md - Start here
2. IMPLEMENTATION_GUIDE.md - Comprehensive reference
3. COMPONENT_REFERENCE.md - All components
4. DOS_AND_DONTS.md - Guidelines and testing

### Example Pages
- View in browser for visual reference
- Inspect markup for structure
- Study CSS for styling patterns
- Test interactions for behavior

### Stylesheet
- archive.css contains everything
- Heavily commented
- Organized by component
- Uses design tokens

---

## VERSION HISTORY

**Version 1.1** (February 2026)
- Updated to Recursive Mono typography system
- 6 preset treatment system
- 5 example pages
- 14 components
- Complete documentation
- Full design system

---

## LICENSE & USAGE

This specification package is provided for building the Terminal Gradient Institutional Archive project.

**You MAY:**
- Use all code, examples, and documentation
- Modify for project needs
- Create derivative components
- Adapt for different content

**You MUST:**
- Maintain design system fidelity
- Follow prohibitions list
- Keep institutional framing
- Credit original specification

---

## FINAL NOTES

### Remember:
This is infrastructure, not a website.
The aesthetic is intentional.
Every constraint serves a purpose.

### When Uncertain:
1. Consult example pages
2. Read relevant documentation
3. Apply "in-universe" test
4. Choose simplicity over cleverness

### Key Insight:
The power of this design comes from what it DOESN'T include.
Restraint creates authority.
Simplicity creates focus.
Consistency creates trust.

---

## CONTACT

For questions, clarifications, or feedback on this specification package:
[Contact information for project maintainers]

---

**END OF README**

---

## FILE MANIFEST

```
terminal-gradient-archive/
│
├── README.md (this file)
│
├── css/
│   └── archive.css (1000+ lines, complete stylesheet)
│
├── pages/
│   ├── index.html (homepage)
│   ├── archive-index.html (document listing)
│   ├── document-view.html (full story page)
│   ├── search.html (search interface)
│   └── about.html (archive information)
│
└── guidance/
    ├── QUICK_START.md (start here)
    ├── IMPLEMENTATION_GUIDE.md (comprehensive reference)
    ├── COMPONENT_REFERENCE.md (all components)
    └── DOS_AND_DONTS.md (guidelines & testing)
```

**Total Documentation:** ~35,000 words  
**Total Code:** ~2,500 lines (HTML + CSS)  
**Example Pages:** 5 complete templates  
**Components Defined:** 14 with full specifications

**Status:** Complete and ready for implementation
