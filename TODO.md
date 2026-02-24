# Slides TODO

## Presentation Structure

Target flow: Architecture → Device → Technical Deep-dive → Why It Matters → Social Impact → Discussion

## Slide Ideas

- Test QR scanning distance/range
- "Who is this for?" — target audience slide
- Interactive audience questions slide (put responses on screen)
- Merge "should scanning require consent" into a broader social impact slide
- "What do you think?" — audience engagement moment
- "What insights can we gather?" — ranking stores, countries, cities, etc.
- Visual architecture diagram (how the system works end-to-end)
- Fingerprinting / what data a scan reveals
- Little Snitch-style UI concept for tracking visibility
- Donation onboarding with disclaimer

## App / Frontend

- Update UI to show fingerprinting data
- Update app wording
- Add i18n support
- Interaction detail view
- New interaction polling and notifications
- Timescale filtering on dashboard
- Onboarding flow with donation button
- Show new notification indicators

## Platform (whatistracking.me)

- Update website
- QR codes should work offline (no remote fetch needed)
- More efficient QR code encoding
- Geocoding scan data
- Tauri app: background location collection at configurable intervals with timestamp

## Rendering / Data

- Render collected tracking data visually
- Location heatmaps over time
