# Clothes Show App Plan

## 1. Product Positioning

Clothes Show is a personal digital wardrobe and AI outfit reference app.

The first version will be an iOS-only app. Product mockups and demos should be presented in an iPhone 17 Pro-style portrait device frame.

The core product promise:

> Users upload their clothes and portrait photos, then generate reference images that show how different outfits may look on them.

The first version should focus on proving this core loop:

1. Upload clothes.
2. Upload a portrait.
3. Select clothes for an outfit.
4. Generate an AI reference image.
5. Save the result to an outfit library.

## 2. Target Users

- People who want to organize their wardrobe.
- People who often hesitate about daily outfits.
- People who want to preview clothing combinations before buying.
- Fashion creators, stylists, or users who frequently plan looks.

## 3. Core Functional Modules

### 3.1 Clothing Management

Users can import and manage clothing items.

Required functions:

- Upload clothing photos from camera or album.
- Import screenshots of clothing.
- Auto-detect clothing category.
- Auto-detect color, style, season, material, and scene tags.
- Manually edit item information.
- Search clothing items.
- Filter by category, color, season, scene, and favorite status.
- Delete or archive clothing items.
- Optional metadata: brand, size, purchase date, price, and purchase channel.

MVP scope:

- Upload clothing image.
- Basic category and tag management.
- Clothing list and detail page.
- Manual editing.
- Filtering.

### 3.2 Digital Wardrobe

Users browse their wardrobe in a structured way.

Required functions:

- All clothing view.
- Category view.
- Color view.
- Season view.
- Scene view.
- Recently added items.
- Favorite items.
- Clothing detail page.
- Outfit history for each item.

MVP scope:

- All clothing view.
- Category filters.
- Clothing detail page.
- Favorite and delete actions.

### 3.3 Portrait Profile

Users create one or more personal portrait profiles for AI generation.

Required functions:

- Upload portrait photos.
- Set default portrait.
- Delete portrait data.
- Add body and style profile information.
- Configure whether facial similarity should be preserved.
- Show privacy notice before using portrait data.

Possible profile fields:

- Height.
- Body type.
- Hair style.
- Skin tone tendency.
- Common size.
- Preferred style.
- Disliked style.

MVP scope:

- Upload portrait.
- Set default portrait.
- Delete portrait.
- Basic privacy notice.

### 3.4 Outfit Generation

Users generate outfits based on selected clothing, scenes, and styles.

Required functions:

- Select specific clothing items to generate an outfit.
- Select one clothing item and let the system complete the outfit.
- Generate by scene, such as work, date, travel, sport, formal, casual.
- Generate by style, such as minimal, Korean casual, French chic, streetwear, vintage.
- Prioritize items already in the user's wardrobe.
- Support trial outfits with items the user may want to buy.

MVP scope:

- Select portrait.
- Select 2 to 4 clothing items.
- Select scene or style.
- Create generation task.
- Display generated result.

### 3.5 AI Outfit Reference Image

The AI image generation feature should create a visual reference based on the user's portrait and selected clothes.

Required functions:

- Generate outfit image from user portrait and selected clothes.
- Generate multiple results.
- Retry failed generation.
- Regenerate with the same inputs.
- Save generated images.
- Show generation history.
- Optional local edits, such as replacing shoes or outerwear.

MVP scope:

- Generate one or more reference images.
- Save selected image.
- Regenerate.
- Show failed generation state.

### 3.6 Outfit Library

Generated outfits should become reusable assets.

Required functions:

- Save outfit.
- Favorite outfit.
- Name outfit.
- Add tags.
- Filter by scene or style.
- View all clothing items used in the outfit.
- Generate similar outfit.
- Delete outfit.
- Share image.

MVP scope:

- Save outfit.
- View outfit list.
- View outfit detail.
- Delete outfit.
- Share generated image.

### 3.7 Recommendation And Decision Support

This module turns the app from a tool into a styling assistant.

Required functions:

- Today's outfit recommendation.
- Weather-based outfit recommendation.
- Calendar-based outfit recommendation.
- Clothing purchase decision support.
- Wardrobe gap analysis.
- Duplicate purchase warning.
- Rarely worn item reminder.
- Outfit frequency statistics.

MVP scope:

- Light recommendation based on scene and existing wardrobe.

### 3.8 Account, Privacy, And Billing

The app handles sensitive portrait and wardrobe data, so privacy must be designed early.

Required functions:

- User registration and login.
- Cloud data sync.
- Delete portrait data.
- Delete clothing data.
- Export user data.
- Manage AI generation records.
- Free generation quota.
- Subscription or credit package.
- Watermark and HD export controls.

MVP scope:

- Account.
- Data storage.
- Privacy notice.
- Delete user data.
- Basic generation quota.

## 4. MVP Scope

The first shippable version should include:

- User registration and login.
- Clothing upload.
- Clothing category and tag editing.
- Wardrobe list, filter, and detail pages.
- Portrait upload and default portrait selection.
- AI outfit generation using selected portrait and clothing items.
- Generation result page.
- Outfit save and outfit library.
- Delete clothing, portrait, and outfit records.
- Basic privacy notice and generation quota.

The first version should not include:

- Social community.
- E-commerce partnership.
- Calendar integration.
- Complex wear statistics.
- Professional stylist service.
- Multi-user wardrobe sharing.
- Full purchase recommendation system.

## 5. Key User Flows

### 5.1 First-Time Use

1. User signs up or logs in.
2. User uploads a portrait.
3. User uploads several clothing items.
4. The system identifies clothing tags.
5. User confirms or edits tags.
6. User generates the first outfit reference image.
7. User saves the result.

### 5.2 Manage Wardrobe

1. User opens the wardrobe page.
2. User views all clothing items.
3. User filters by category, color, season, or scene.
4. User opens a clothing detail page.
5. User edits tags or deletes the item.

### 5.3 Generate Outfit

1. User opens the generator.
2. User selects a portrait.
3. User selects 2 to 4 clothing items.
4. User selects a scene or style.
5. User submits generation.
6. App shows generation progress.
7. App displays generated result.
8. User saves, regenerates, or deletes the result.

### 5.4 View Outfit Library

1. User opens the outfit library.
2. User browses saved outfits.
3. User filters by scene or style.
4. User opens outfit detail.
5. User views used clothing items.
6. User shares or deletes the outfit.

## 6. Page Structure

The MVP uses iOS bottom tab navigation with five primary sections:

- Home
- Wardrobe
- Generate
- Outfits
- Profile

### 6.1 Home

- Quick generation entry.
- Recent clothing items.
- Recent generated outfits.
- Suggested outfit entry.

### 6.2 Wardrobe

- Clothing grid.
- Search.
- Category filters.
- Add clothing button.
- Clothing detail page.

### 6.3 Generator

- Portrait selector.
- Clothing selector.
- Scene selector.
- Style selector.
- Generation task status.
- Result view.

### 6.4 Outfit Library

- Saved outfit grid.
- Filter controls.
- Outfit detail page.
- Share and delete actions.

### 6.5 Profile

- Account information.
- Portrait profiles.
- Privacy settings.
- Generation quota.
- Data deletion.
- Subscription or credits.

## 7. AI Capabilities

### 7.1 Clothing Recognition

Input:

- Clothing image.

Output:

- Category.
- Color.
- Material.
- Season.
- Style.
- Suitable scenes.

### 7.2 Clothing Cutout

Input:

- Clothing image.

Output:

- Transparent-background clothing image or cleaned display image.

### 7.3 Outfit Recommendation

Input:

- Wardrobe items.
- Selected item.
- Scene.
- Style preference.

Output:

- Outfit item combination.
- Short explanation.

### 7.4 Portrait Outfit Generation

Input:

- User portrait.
- Selected clothing images.
- Scene.
- Style.
- Generation constraints.

Output:

- Generated outfit reference image.
- Generation metadata.

### 7.5 Outfit Explanation

Input:

- Generated outfit.
- Clothing tags.
- Scene.
- Style.

Output:

- Why this outfit works.
- Suitable occasions.
- Possible alternatives.

## 8. Data Model Draft

### 8.1 User

- id
- email
- display_name
- avatar_url
- created_at
- updated_at

### 8.2 WardrobeItem

- id
- user_id
- image_url
- cutout_image_url
- category
- colors
- material
- season_tags
- scene_tags
- style_tags
- brand
- size
- purchase_date
- purchase_price
- is_favorite
- archived_at
- created_at
- updated_at

### 8.3 UserPortrait

- id
- user_id
- image_url
- is_default
- face_preservation_enabled
- profile_metadata
- created_at
- deleted_at

### 8.4 Outfit

- id
- user_id
- title
- portrait_id
- item_ids
- scene
- style
- generated_image_url
- explanation
- is_favorite
- created_at
- updated_at

### 8.5 GenerationTask

- id
- user_id
- portrait_id
- item_ids
- prompt
- status
- result_image_urls
- error_message
- created_at
- completed_at

### 8.6 Credit

- id
- user_id
- balance
- source
- created_at
- expires_at

## 9. MVP Development Schedule

### Week 1: Requirements And Prototype

- Confirm MVP scope.
- Define page structure.
- Create low-fidelity prototype.
- Confirm data model.

### Week 2: Base Engineering

- Set up frontend project.
- Set up backend project.
- Implement account system.
- Implement image upload.
- Initialize database schema.

### Week 3: Wardrobe Module

- Add clothing upload.
- Build clothing list.
- Build clothing detail page.
- Add tag editing.
- Add category filtering.

### Week 4: Portrait Profile

- Add portrait upload.
- Set default portrait.
- Delete portrait.
- Add privacy notice.

### Week 5: Clothing Recognition

- Integrate clothing recognition.
- Auto-fill tags.
- Add manual correction.
- Handle recognition failure.

### Week 6: AI Outfit Generation

- Build portrait and clothing selection flow.
- Create generation task API.
- Integrate image generation.
- Display generation progress.
- Display generated results.

### Week 7: Outfit Library

- Save outfit.
- Build outfit list.
- Build outfit detail page.
- Delete outfit.
- Share image.

### Week 8: Testing And Polish

- End-to-end testing.
- Empty states.
- Loading states.
- Error states.
- Privacy and deletion flow check.
- Small internal beta.

## 10. Post-MVP Iteration

### Iteration 1

- Today's outfit recommendation.
- Scene and style templates.
- Weather integration.
- Batch clothing upload.
- User feedback on generation quality.

### Iteration 2

- Purchase trial outfit.
- Worth-buying analysis.
- Wear frequency statistics.
- Wardrobe gap analysis.
- HD export.

### Iteration 3

- Subscription membership.
- E-commerce links.
- Social sharing.
- Professional stylist entry.
- Brand cooperation.

## 11. Open Questions

- Should the first version be mobile app, web app, or responsive web app?
- Which image generation provider should be used?
- Should portrait data be stored long term or only used for generation tasks?
- What quality level is acceptable for generated outfit reference images?
- Should face similarity be enabled by default?
- How many free generations should each new user receive?
- Should clothing recognition be fully automatic or confirmation-based?
