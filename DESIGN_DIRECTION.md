# Design Direction

## 1. Design Role

The app should be designed from the perspective of a UI designer specializing in Memphis 1980s geometric style.

The interface should use bold graphics, strong contrast, playful shapes, and a lively visual rhythm. It should feel cheerful, experimental, and approachable.

Core mood:

> A retro party poster that became an outfit playground.

## 2. Product Fit

This visual direction is suitable for:

- Creative campaign pages.
- Youth and campus products.
- Mini-game style entry pages.
- Brands that emphasize fun, rebellion, anti-minimalism, and playful self-expression.

For this wardrobe app, the Memphis style should communicate:

- Trying outfits is playful.
- AI generation is low-pressure.
- Users can experiment without feeling judged.
- Fashion can be a game-like creative space.

The first implementation target is iOS. Mockups should be shown inside an iPhone 17 Pro-style portrait frame, with iOS safe areas respected.

## 3. Personality Keywords

- Playful.
- Bold.
- Bright.
- Energetic.
- Experimental.
- Retro.
- Friendly.
- Anti-serious.
- Visual-first.

Avoid:

- Luxury minimalism.
- Cold AI futurism.
- Corporate SaaS style.
- Overly soft lifestyle aesthetics.
- Dark cyberpunk interfaces.

## 4. Visual Principles

### 4.1 Geometry First

Use geometric primitives as a core visual language:

- Circles.
- Triangles.
- Squares.
- Rectangles.
- Zigzags.
- Dots.
- Confetti.
- Irregular waves.
- Memphis-style squiggles.

Shapes can appear in:

- Background patterns.
- Section dividers.
- Empty states.
- Button decorations.
- Image frames.
- Loading states.
- Generated outfit result screens.

The layout should feel random but rhythmic. Shapes should look scattered with intention, not accidentally messy.

### 4.2 Strong Contrast

Use high-saturation color pairs:

- Yellow and black.
- Cyan and pink.
- Blue and red.
- Green and purple.
- Orange and cobalt.

Control color chaos by managing surface area:

- Large surfaces should use one strong base color or off-white.
- Accent colors should be distributed in smaller blocks.
- Primary actions should remain visually dominant.
- Avoid giving every element equal color intensity.

### 4.3 Bold Outlines

Most UI elements should use visible outlines or thick borders.

Recommended styles:

- 2px to 4px solid borders.
- Black or near-black outlines.
- Flat color fills.
- Hard-edged shadow offsets.
- Sticker-like cards.

Avoid:

- Glassmorphism.
- Heavy gradients.
- Soft neumorphism.
- Realistic 3D surfaces.

### 4.4 Flat Illustration Feel

The visual system should feel like flat poster art rather than realistic 3D.

Good treatments:

- Flat color blocks.
- Pattern fills.
- Slightly irregular hand-drawn paths.
- Cut-paper feeling.
- Simple illustrated symbols.

Use photographic clothing and portrait images, but frame them with playful Memphis-style surfaces.

## 5. Layout Direction

### 5.1 Home Page

The first screen should feel like a playful outfit lab.

Recommended content:

- Strong title or app identity.
- Large quick-start generation button.
- Recent outfit result preview.
- Scattered geometric background elements.
- A clear entry to upload clothes and upload portrait.

The home page can be more expressive than utility pages.

### 5.2 Wardrobe Page

The wardrobe page should remain functional and scannable.

Recommended approach:

- Grid layout for clothing items.
- Strong category tabs or segmented controls.
- Bold tag chips.
- White or light background to keep clothing images readable.
- Memphis decorations used at page edges or empty areas, not over the clothing images.

Priority:

- Users must be able to find clothes quickly.
- Visual playfulness should not reduce browsing clarity.

### 5.3 Generator Page

The generator is the core playground.

Recommended approach:

- Step-based layout.
- Portrait selector.
- Clothing selector.
- Scene and style selectors.
- Large primary generation button.
- Playful shape decorations around the call-to-action.

The generate button can be the most visually expressive control in the app.

### 5.4 Outfit Result Page

The result page should feel celebratory.

Recommended approach:

- Large generated image.
- Sticker-like action buttons.
- Save, regenerate, and share controls.
- Confetti-like geometric details.
- Clear display of selected clothing items.

The generated image must remain the visual hero.

### 5.5 Profile And Privacy Pages

These pages should be calmer while still matching the visual system.

Recommended approach:

- Fewer decorations.
- Clear text hierarchy.
- Strong warning and delete states.
- Privacy controls must be easy to understand.

Do not make privacy settings feel like a game.

## 6. Components

### 6.1 Buttons

Primary buttons:

- High-contrast fill.
- Thick black outline.
- Slight offset shadow.
- Large click target.
- Optional small triangle, dot, or zigzag decoration.

Hover or active interaction:

- Slight rotation.
- Small vertical or horizontal movement.
- Slight scale.
- Shadow offset change.

Accessibility:

- Text must remain highly readable.
- Tap target should be at least 44px high.
- Decoration should not reduce clickable clarity.

### 6.2 Cards

Cards should feel like paper cutouts or stickers.

Recommended styles:

- Thick border.
- Flat fill.
- Hard offset shadow.
- Slight rotation only for decorative or featured cards.

Avoid using too many rotated cards in dense lists, because scanning will suffer.

### 6.3 Tags And Chips

Tags can be expressive and colorful.

Recommended styles:

- Pill or angular chip shapes.
- Bold border.
- Distinct background colors by category.
- Clear selected and unselected states.

### 6.4 Image Frames

Clothing and portrait images should be framed clearly.

Recommended styles:

- Thick black border.
- Offset shadow.
- Optional geometric corner decorations.
- Consistent aspect ratios.

Do not place heavy patterns directly behind detailed clothing photos if it harms visibility.

### 6.5 Empty States

Empty states can be playful.

Examples:

- Empty wardrobe: geometric hanger illustration.
- No portrait: bold portrait frame placeholder.
- No generated outfit: colorful stage-like placeholder.

Empty states should always include one clear action.

## 7. Motion And Interaction

Interactions should feel like paper pieces being gently nudged.

Recommended motion:

- Hover rotation: 1deg to 3deg.
- Hover translation: 2px to 6px.
- Press scale: 0.97 to 0.99.
- Shape drift in decorative elements.
- Loading states with rotating geometric shapes or bouncing dots.

Avoid:

- Excessive continuous animation.
- Motion that distracts from clothing images.
- Large layout shifts.

Respect reduced-motion preferences.

## 8. Color Direction

Suggested palette:

- Ink black: `#111111`
- Poster yellow: `#FFD84D`
- Hot pink: `#FF4FA3`
- Cyan: `#39D5FF`
- Cobalt blue: `#315BFF`
- Tomato red: `#FF4B3E`
- Fresh green: `#35D07F`
- Off white: `#FFF8E8`
- Soft gray: `#F2F2F2`

Usage guidance:

- Use off-white or white as the main background for utility-heavy screens.
- Use yellow, cyan, and pink for major visual moments.
- Use black outlines to unify the palette.
- Reserve red for destructive actions or energetic accent moments.

## 9. Typography

Typography should support poster energy while keeping app usability.

Recommended:

- Bold display type for page titles and hero text.
- Clean sans-serif for body and controls.
- Strong contrast between headings and body text.

Avoid:

- Overly elegant serif typography.
- Thin, low-contrast type.
- Too many typefaces.

Text must remain easy to read on high-saturation backgrounds.

## 10. Accessibility And Usability Rules

The app can be playful, but key actions must remain obvious.

Rules:

- Primary action must be immediately visible.
- Do not place important text over busy patterns.
- Maintain strong contrast for text and controls.
- Keep destructive actions visually distinct.
- Decorative shapes must not look like tappable controls unless they are.
- Wardrobe browsing must stay clean enough for fast scanning.
- Privacy and deletion flows must be calm and explicit.

For iOS:

- Tap targets should be at least 44px.
- Bottom navigation must respect the home indicator area.
- Top content must respect the Dynamic Island / status safe area.
- Core actions should be reachable in portrait one-handed use where possible.

## 11. MVP Design Priorities

For the MVP, apply the Memphis style most strongly to:

- Home page.
- Generator page.
- Outfit result page.
- Empty states.
- Loading states.

Apply the style more carefully to:

- Wardrobe grid.
- Clothing detail page.
- Profile page.
- Privacy page.

The product should feel playful at first glance, but reliable after repeated use.
