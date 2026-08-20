-# Design System Inspired by Rifqi Muhammad Aliya Portfolio

## 1. Visual Theme & Atmosphere

This design system embodies a sophisticated dark-mode portfolio aesthetic built for creative professionals and developers. The visual language combines minimalist elegance with subtle technological undertones, using deep blacks as a canvas to highlight content through carefully orchestrated white typography and vibrant purple accents. The interface communicates professionalism through generous whitespace, geometric precision, and restrained use of color—creating an immersive experience that prioritizes clarity and visual hierarchy. The monospaced typography complements the modern tech aesthetic, while the soft border treatments and rounded corners prevent the dark palette from feeling harsh or unwelcoming.

**Key Characteristics**
- Deep dark backgrounds (`#000000`, `#1A1A1A`, `#2A2A2A`) with white text dominance
- Strategic purple accents (`#A855F7`, `#D8B4FE`) for interactive and highlight elements
- Minimalist component design with high contrast for readability
- Generous whitespace and breathing room between sections
- Blend of geometric precision (monospaced fonts) with human warmth (rounded corners, soft interactions)
- Transparency and layering for visual depth without shadows
- Optimized for code-focused, design-forward audiences

## 2. Color Palette & Roles

### Primary
- **Purple Brand** (`#A855F7`): Primary interactive elements, accent highlights, and brand identity markers; used extensively for buttons, links, and decorative accents
- **Purple Light** (`#D8B4FE`): Secondary accent and hover states; creates visual hierarchy within purple-focused interactions

### Accent Colors
- **Blue Accent** (`#3B82F6`): Alternative interactive accent for specific CTAs or secondary highlights
- **Black Deep** (`#000000`): Primary background and text color; core of the dark mode palette

### Interactive
- **White Primary** (`#FFFFFF`): Primary text, high-contrast interactive elements, and foreground content
- **White Ghost** (`#FFF0`): Transparent white overlay for layered interactions
- **White Hover** (`#FFF6`): Semi-transparent white for hover states and transitions

### Neutral Scale
- **Gray Light** (`#F0F0F0`): Subtle surface differentiation and secondary text
- **Gray Neutral** (`#E5E7EB`): Border definitions and subtle dividers
- **Gray Mid** (`#888888`): Secondary text, disabled states, and reduced emphasis
- **Gray Dark** (`#555555`): Tertiary text and low-contrast supporting content
- **Gray Darker** (`#2A2A2A`): Subtle background layering
- **Gray Darkest** (`#1A1A1A`): Deep background surfaces

### Surface & Borders
- **Border Light** (`#E5E7EB`): Subtle 1px borders on light-background components
- **Border Transparent** (`rgba(255, 255, 255, 0.15)`): Semi-transparent borders for dark-mode inputs and containers
- **Surface Dark** (`rgba(0, 0, 0, 0.2)`): Input and form field backgrounds with transparency
- **Surface Overlay** (`rgba(255, 255, 255, 0.1)`): Hoverable surface layers and interactive states

### Semantic / Status
- **Disabled** (`rgba(255, 255, 255, 0.5)`): Reduced opacity for disabled button text
- **Dark Overlay Transparent** (`rgba(0, 0, 0, 0)`): Transparent backgrounds for ghost buttons and overlays

## 3. Typography Rules

### Font Family
**Primary: Syne**
Font stack: `Syne, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Geometric sans-serif with bold, modern personality; ideal for headings and display text

**Secondary: DM Mono**
Font stack: `DM Mono, 'Courier New', monospace`
- Monospaced typeface for code snippets, metadata, and technical references; adds precision and developer credibility

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| **Display/H1** | Syne | 62px | 800 | 65.1px | Normal | Hero headlines; maximum visual impact |
| **H2** | Syne | 30px | 700 | 36px | Normal | Section headings; prominent subsections |
| **H3** | Syne | 17px | 600 | 21.25px | Normal | Tertiary headings; card titles |
| **Body** | Syne | 14px | 400 | 26.6px | Normal | Main content; descriptions and paragraph text |
| **Button** | Syne | 13px | 600 | 19.5px | Normal | Interactive button labels; medium emphasis |
| **Label** | Syne | 16px | 400 | 24px | Normal | Form labels and helper text |
| **Code/Meta** | DM Mono | 13px | 400 | 19.5px | Normal | Inline code, navigation links, metadata |

### Principles
- **Contrast-driven hierarchy**: Reliance on weight and size rather than color variation; all text prioritizes readability on dark backgrounds
- **Geometric precision**: Syne's modern letterspacing and monospaced DM Mono reinforce the tech-forward aesthetic
- **Functional typography**: Each size and weight serves a specific informational priority
- **Generous line height**: All line heights exceed typographic standards to improve legibility and visual comfort in dark mode
- **Monospace for credibility**: Technical content and navigation use DM Mono to communicate developer-focused, code-literate design

## 4. Component Stylings

### Buttons

**Primary Button (Solid White)**
- Background: `#FFFFFF`
- Text Color: `#000000`
- Padding: `10px 18px`
- Height: `41.5px`
- Font Size: `13px`
- Font Weight: `600`
- Font Family: `Syne`
- Border: `1px solid #FFFFFF`
- Border Radius: `8px`
- Line Height: `19.5px`
- Box Shadow: `none`
- Hover State: Opacity `0.9` on background
- Active State: Opacity `0.85` on background

**Secondary Button (Ghost White)**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text Color: `#FFFFFF`
- Padding: `10px 18px`
- Height: `41.5px`
- Font Size: `13px`
- Font Weight: `600`
- Font Family: `Syne`
- Border: `1px solid #FFFFFF`
- Border Radius: `8px`
- Line Height: `19.5px`
- Box Shadow: `none`
- Hover State: Background `rgba(255, 255, 255, 0.1)`, Text Color remains `#FFFFFF`
- Active State: Background `rgba(255, 255, 255, 0.2)`

**Navigation Button (Rounded Transparent)**
- Background: `rgba(255, 255, 255, 0.1)`
- Text Color: `#FFFFFF`
- Padding: `12px 0px`
- Height: `44px`
- Font Size: `14px`
- Font Weight: `400`
- Font Family: `Syne`
- Border: `0px solid transparent`
- Border Radius: `9999px`
- Line Height: `20px`
- Box Shadow: `none`
- Hover State: Background `rgba(255, 255, 255, 0.15)`, Text Color `#FFFFFF`
- Active State: Background `rgba(255, 255, 255, 0.2)`

**Navigation Button (Inactive)**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Text Color: `rgba(255, 255, 255, 0.5)`
- Padding: `12px 0px`
- Height: `44px`
- Font Size: `14px`
- Font Weight: `400`
- Font Family: `Syne`
- Border: `0px solid transparent`
- Border Radius: `9999px`
- Line Height: `20px`
- Box Shadow: `none`
- Hover State: Background `rgba(255, 255, 255, 0.08)`, Text Color `rgba(255, 255, 255, 0.7)`
- Active State: Background `rgba(255, 255, 255, 0.1)`, Text Color `#FFFFFF`

### Cards & Containers

**Stat Card**
- Background: `rgba(0, 0, 0, 0.2)`
- Border: `1px solid rgba(255, 255, 255, 0.15)`
- Border Radius: `16px`
- Padding: `24px`
- Heading Font Size: `20px`
- Heading Font Weight: `700`
- Body Font Size: `14px`
- Body Color: `#888888`
- Hover State: Background `rgba(0, 0, 0, 0.3)`, Border Color `rgba(255, 255, 255, 0.2)`

**Quote/Testimonial Card**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Border Radius: `12px`
- Padding: `16px 20px`
- Text Color: `#FFFFFF`
- Font Style: `italic`
- Font Size: `14px`
- Line Height: `26.6px`

### Inputs & Forms

**Text Area Input (Large)**
- Background: `rgba(0, 0, 0, 0.2)`
- Border: `1px solid rgba(255, 255, 255, 0.15)`
- Border Radius: `16px`
- Padding: `16px`
- Height: `130px`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `Syne`
- Text Color: `#FFFFFF`
- Placeholder Color: `rgba(255, 255, 255, 0.5)`
- Focus State: Border Color `rgba(255, 255, 255, 0.3)`, Background `rgba(0, 0, 0, 0.3)`
- Line Height: `24px`

**Text Input (Small with Icon)**
- Background: `rgba(0, 0, 0, 0.2)`
- Border: `1px solid rgba(255, 255, 255, 0.15)`
- Border Radius: `16px`
- Padding: `16px 16px 16px 48px`
- Height: `154px`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `Syne`
- Text Color: `#FFFFFF`
- Placeholder Color: `rgba(255, 255, 255, 0.5)`
- Focus State: Border Color `rgba(255, 255, 255, 0.3)`, Background `rgba(0, 0, 0, 0.3)`
- Line Height: `24px`

### Navigation

**Top Navigation Bar**
- Background: `rgba(0, 0, 0, 0)` (transparent)
- Height: `45.5px`
- Padding: `0px`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `Syne`
- Text Color: `#F0F0F0`
- Border: `0px solid transparent`
- Border Radius: `0px`
- Flex Layout: `justify-content: space-between`, `align-items: center`
- Link Spacing: `40px` horizontal gap between items

**Navigation Links**
- Font Family: `DM Mono`
- Font Size: `13px`
- Font Weight: `400`
- Text Color (Inactive): `#888888`
- Text Color (Active): `#F0F0F0`
- Padding: `0px 0px 4px 0px`
- Line Height: `19.5px`
- Hover State: Text Color `#FFFFFF`, Opacity `0.9`
- Active State: Text Color `#F0F0F0`, Border Bottom `2px solid rgba(255, 255, 255, 0.3)`

## 5. Layout Principles

### Spacing System

The design system uses an `8px` base unit multiplied to create a coherent spacing scale:

- **XS**: `4px` — micro padding within tightly packed components
- **S**: `8px` — gap between adjacent elements, tight groupings
- **M**: `12px` — padding within buttons and small containers
- **ML**: `16px` — standard margin, form field padding
- **L**: `20px` — section margins, moderate spacing
- **XL**: `24px` — card padding, major spacing
- **XXL**: `28px` — section dividers
- **XXXL**: `32px` — large padding in containers
- **4XL**: `36px` — major section spacing
- **5XL**: `40px` — gap between columns
- **6XL**: `48px` — large feature gaps
- **7XL**: `60px` — hero padding, full-width sections

### Grid & Container

- **Max Width**: `1320px` (standard container max-width for navigation and page content)
- **Column Strategy**: Responsive multi-column grid with 12-column base; adapts to 6-column on tablet, 1-column on mobile
- **Gutter**: `40px` horizontal spacing between grid columns
- **Section Pattern**: Full-width sections with `60px` vertical padding; content constrained to `1320px` max-width center

### Whitespace Philosophy

Whitespace is treated as an active design element, not empty space. The system prioritizes breathing room between all UI components, allowing typography and interactive elements to dominate without visual clutter. Sections are separated by substantial vertical spacing (`60px` minimum) to create distinct zones of focus. Horizontal gaps maintain consistent `40px` between columns and `8px` between inline elements. This approach reduces cognitive load and creates a premium, gallery-like presentation of portfolio content.

### Border Radius Scale

- **Subtle**: `8px` — buttons and compact interactive elements
- **Moderate**: `12px` — images and small containers
- **Large**: `16px` — input fields, stat cards, form containers
- **Pill**: `9999px` — fully rounded buttons, badges, and full-height rounded elements
- **Circle**: `50%` — avatar images and profile pictures

### Border Widths

- **Thin**: `1px` — used for button outlines, card borders, and subtle dividers; primary structural border weight

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| **Base (L0)** | No shadow, `background: #000000` or `#1A1A1A` | Page backgrounds, flat typography |
| **Raised (L1)** | `background: rgba(0, 0, 0, 0.2)`, `border: 1px solid rgba(255, 255, 255, 0.15)` | Input fields, stat cards, secondary containers |
| **Floating (L2)** | `background: rgba(255, 255, 255, 0.1)`, `border: 1px solid rgba(255, 255, 255, 0.2)` | Hover states, interactive surfaces |
| **Modal (L3)** | `background: rgba(0, 0, 0, 0.9)`, `backdrop-filter: blur(8px)` | Overlays and modal backgrounds |

**Elevation Philosophy**

The design system eschews traditional drop shadows in favor of transparent layering and border treatments. Depth is created through background opacity variations, semi-transparent borders, and subtle color shifts rather than shadow effects. This approach maintains the clean, modern aesthetic while providing clear visual hierarchy. The transparency-based elevation system creates a cohesive, glassmorphic quality that feels contemporary and intentional. All elevation changes are accompanied by border color or opacity shifts to ensure visual clarity at every stacking level.

## 7. Do's and Don'ts

### Do

- **Use white text on dark backgrounds** for all primary content; ensures WCAG AAA contrast compliance and maintains visual hierarchy
- **Leverage purple accents strategically** for interactive elements, CTAs, and brand moments; draws user attention without overwhelming
- **Maintain generous whitespace** around all components; creates premium feel and improves scanability
- **Apply consistent 8px base spacing** across all margins, padding, and gaps; ensures visual rhythm and coherence
- **Use monospaced typography (DM Mono)** for navigation, code, and metadata; reinforces technical credibility
- **Round button corners at 8px or 16px** depending on context; soften the interface and improve approachability
- **Implement transparency layers** for depth instead of shadows; maintains the clean, modern aesthetic
- **Test all interactive states** (hover, active, disabled, focus) with full opacity and color variations
- **Use `rgba()` colors for overlays and surfaces** to create visual depth through layering
- **Align all components to the 8px grid** for consistent spacing and scalability

### Don't

- **Avoid solid drop shadows** or `box-shadow` effects; contradicts the transparency-based elevation system
- **Don't use pure black text on black backgrounds** or pure white on white; maintain minimum `0.85` contrast ratios
- **Avoid mixing serif and sans-serif fonts** for the same content hierarchy level; stick to Syne for body and headings, DM Mono for code
- **Don't exceed 2-3 accent colors in any single section**; restraint maintains sophistication
- **Avoid margin collapse or inconsistent spacing**; always use consistent `8px` multiples
- **Don't disable hover or focus states**; interactive feedback is essential for usability
- **Avoid light-mode color usage** in this dark-mode-primary system; maintain the cohesive nocturnal aesthetic
- **Don't create buttons smaller than 41.5px in height** or 44px for navigation; ensure adequate touch targets
- **Avoid excessive border widths** greater than `1px` for most borders; keep visual noise minimal
- **Don't reduce opacity below `0.5`** for disabled or secondary text; maintain legibility at all interactive states

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| **Mobile** | < 640px | Single column layout, full-width containers, button width `100%`, font sizes reduce by 10-15%, padding reduces to `16px` sections |
| **Tablet** | 640px – 1024px | Two-column grid, max-width `90vw`, button width `auto`, moderate spacing adjustments (`36px` sections) |
| **Desktop** | 1024px – 1440px | Full 12-column grid, max-width `1320px`, standard spacing (`60px` sections), all typography at full size |
| **Wide** | > 1440px | Same as desktop with centered container and horizontal padding for viewport centering |

### Touch Targets

- **Minimum button height**: `44px` (navigation and mobile CTAs)
- **Minimum button width**: `80px` (exception: icon-only buttons at `44px × 44px`)
- **Minimum link padding**: `8px` vertical, `12px` horizontal
- **Form input height**: Minimum `40px`, preferably `44px` or larger
- **Navigation spacing**: Minimum `16px` gap between clickable links
- **Icon size**: Minimum `24px × 24px` for interactive icons, `18px × 18px` for decorative

### Collapsing Strategy

- **Mobile-first approach**: Design starts at 320px, progressively enhances to larger viewports
- **Typography scaling**: Body text remains `14px` on mobile to maintain readability; headings scale from `40px` (h1 on mobile) to `62px` (h1 on desktop)
- **Grid collapsing**: Multi-column layouts collapse to single column; `40px` horizontal gaps reduce to `16px` on mobile
- **Navigation transformation**: Horizontal navigation bar converts to hamburger menu or stacked layout on screens below `768px`
- **Image aspect ratios**: Maintain `4:3` or `16:9` ratios; scale responsively without distortion using CSS `aspect-ratio` property
- **Container padding**: Full-width sections use `16px` side padding on mobile, `32px` on tablet, `60px` on desktop (constrained by max-width on larger screens)

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Purple Brand (`#A855F7`)
- **Background**: Black Deep (`#000000`) or Gray Darkest (`#1A1A1A`)
- **Heading text**: White Primary (`#FFFFFF`)
- **Body text**: White Primary (`#FFFFFF`) at full opacity, Gray Light (`#F0F0F0`) for secondary
- **Disabled/Secondary**: Gray Mid (`#888888`) or White with `0.5` opacity
- **Borders**: `rgba(255, 255, 255, 0.15)` (semi-transparent white)
- **Input backgrounds**: `rgba(0, 0, 0, 0.2)` (semi-transparent black)
- **Interactive hover**: Purple Light (`#D8B4FE`) or `rgba(255, 255, 255, 0.1)`

### Iteration Guide

1. **All backgrounds default to `#000000` or `#1A1A1A`** unless specified; prioritize dark mode and high contrast
2. **Typography hierarchy is achieved through font weight and size alone**, not color variation; all text colors are white, gray, or transparent white
3. **Spacing follows strict 8px multiples** (`4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 36px, 40px, 48px, 60px`); no arbitrary pixel values
4. **Buttons have four primary variants**: solid white, ghost white, rounded active navigation, and inactive navigation; choose based on hierarchy and context
5. **Border radius is context-dependent**: `8px` for buttons, `12px` for images, `16px` for containers/inputs, `9999px` for pill buttons
6. **Depth is created through transparency and borders, never shadows**; use `rgba(0, 0, 0, 0.2)` for slightly raised surfaces, `rgba(255, 255, 255, 0.1)` for interactive layers
7. **Form fields and inputs use consistent styling**: `rgba(0, 0, 0, 0.2)` background, `1px solid rgba(255, 255, 255, 0.15)` border, `16px` padding, `16px` border-radius
8. **Monospaced font (DM Mono) is reserved for navigation links, code snippets, and metadata**; all body content and headers use Syne
9. **Opacity scale for interactive states**: `1.0` (active), `0.7` (hover), `0.5` (disabled), `0.0` (transparent ghost)
10. **Navigation layout uses flexbox with `40px` gaps**; title/logo on left, menu items centered or right-aligned, responsive collapse below `768px` viewport width