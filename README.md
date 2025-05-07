# Fontaine Labs LLC Website

## App Icons

Both the UniChance and Aura Pro app icons have been added to the project with iOS-style rounded corners.

If you need to replace either icon:

1. Simply replace the corresponding file in the `public/app-icons` directory:
   - `public/app-icons/aura-pro-icon.png`
   - `public/app-icons/uni-chance-icon.png`
2. Make sure your new icons are square and at least 256x256 pixels for best quality

## App Store and Google Play Badges

The website includes App Store badges for both apps and a Google Play badge for UniChance. The badges link to:

- Aura Pro App Store: https://apps.apple.com/us/app/aura-pro-elite-aura-analysis/id6743044971
- UniChance App Store: https://apps.apple.com/us/app/unichance-admissions-analysis/id6743754137
- UniChance Google Play: Placeholder link (update when available)

To update the Google Play link when it becomes available:

1. Open `app/page.tsx`
2. Find the `uniChance` object near the top of the file
3. Replace the `googlePlay` value with the actual Google Play URL
