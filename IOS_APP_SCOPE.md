# iOS App Scope

## 1. Platform Decision

The first version will be an iOS-only app.

The product should be designed and prototyped as a native-feeling iPhone app, not as a generic responsive web app.

Primary target:

- iPhone Pro portrait experience.
- Mockup presentation uses an iPhone 17 Pro-style device frame.
- The app should still respect iOS safe areas and adapt to nearby iPhone Pro dimensions.

## 2. Design Preview Device

All product mockups and demos should be shown inside an iPhone 17 Pro-style frame.

Preview assumptions:

- Portrait-first layout.
- Dynamic Island / top safe area reserved.
- Bottom home indicator safe area reserved.
- Full-screen app canvas.
- Main navigation at the bottom.

If exact iPhone 17 Pro design specs are needed later, update this document with the final confirmed dimensions and safe-area values.

## 3. Native iOS Experience Principles

The app should feel playful, but still familiar on iOS.

Use:

- Bottom tab navigation for primary sections.
- Sheet-style flows for upload, edit, and confirmation.
- Large touch targets.
- Native-feeling scrolling.
- Clear back navigation.
- iOS-safe modal and alert behavior.
- Haptic feedback for successful generation, save, and destructive confirmation.

Avoid:

- Desktop-style sidebars.
- Web dashboard layouts.
- Tiny filter controls.
- Hover-dependent interactions as core behavior.
- Dense multi-column forms.

## 4. Main Navigation

The MVP should use five bottom tabs:

- Home
- Wardrobe
- Generate
- Outfits
- Profile

The Generate tab should be visually emphasized because it is the core product action.

Recommended treatment:

- Larger center tab.
- Bold Memphis-style icon container.
- High-contrast accent color.
- Clear selected state.

## 5. Screen Structure

### 5.1 Home

Purpose:

- Give the user a playful starting point.
- Surface the fastest path to generation.

Key elements:

- Greeting or product title.
- Quick generate card.
- Upload portrait shortcut.
- Upload clothing shortcut.
- Recent generated outfit.
- Recent wardrobe items.

### 5.2 Wardrobe

Purpose:

- Let users browse, filter, and manage clothing.

Key elements:

- Search.
- Category filter chips.
- Clothing grid.
- Floating add button or header add button.
- Clothing detail screen.

Mobile rule:

- Keep the grid scannable.
- Use 2 columns by default.
- Do not overload item cards with metadata.

### 5.3 Generate

Purpose:

- Let users create an AI outfit reference image.

Key elements:

- Portrait selector.
- Clothing selector.
- Scene selector.
- Style selector.
- Generate button.
- Generation progress.

Mobile rule:

- Use a guided vertical flow.
- Show one major decision area at a time.
- Keep the primary action sticky near the bottom when ready.

### 5.4 Outfits

Purpose:

- Store generated results and saved looks.

Key elements:

- Saved outfit grid.
- Scene and style filters.
- Outfit detail screen.
- Save, regenerate, share, and delete actions.

Mobile rule:

- Generated images should be large enough to inspect.
- Detail screens should prioritize the generated image first.

### 5.5 Profile

Purpose:

- Manage account, portraits, privacy, and quota.

Key elements:

- Account information.
- Portrait profiles.
- Privacy controls.
- Generation quota.
- Data deletion.

Mobile rule:

- Privacy and deletion flows should be calm, explicit, and easy to understand.

## 6. iOS Interaction Rules

### 6.1 Touch

- Minimum touch target: 44px.
- Primary actions should be reachable with thumb-friendly placement.
- Avoid placing destructive actions near primary actions.

### 6.2 Motion

Memphis-style motion should be adapted for touch:

- Tap feedback: slight scale down.
- Successful save: small bounce or sticker-pop.
- Generation loading: rotating geometric shapes or bouncing dots.
- Regenerate: quick playful shuffle motion.

Respect reduced-motion settings.

### 6.3 Upload Flows

Clothing upload:

- Camera.
- Photo library.
- Screenshot import.

Portrait upload:

- Photo library.
- Camera.
- Privacy notice before first portrait upload.

Use iOS-style sheets for source selection.

## 7. Visual Application On iPhone

The Memphis 80s geometric direction should be strongest on:

- Home screen.
- Generate screen.
- Result screen.
- Empty states.
- Loading states.

It should be more restrained on:

- Wardrobe grid.
- Clothing detail.
- Profile.
- Privacy.

Reason:

- The app should feel fun at first glance.
- Users still need to browse real clothing photos clearly.

## 8. Prototype Deliverables

The next visual deliverables should be:

- iPhone 17 Pro-style app frame.
- Home screen mockup.
- Wardrobe screen mockup.
- Generate screen mockup.
- Result screen mockup.
- Outfit library screen mockup.
- Profile screen mockup.

All screens should be designed in portrait orientation first.

## 9. Open Decisions

- Exact iPhone 17 Pro canvas size for design files.
- Whether the app should use SwiftUI, React Native, or another iOS-compatible stack.
- Whether the MVP needs offline wardrobe browsing.
- Whether AI generation should run as a fully asynchronous background task with push notification support.

