---
name: generate-slide-image
description: Generate images for presentation slides using Gemini API. Use when creating visual content for slides, diagrams, or illustrations for the presentation.
argument-hint: [prompt description]
allowed-tools: Bash, Write, Read
---

# Generate Slide Image

Generate high-quality images optimized for 16:9 presentation slides using Google's **Nano Banana Pro** (Gemini 3 Pro Image Preview) model.

## Prerequisites

- Node.js installed
- The GEMINI_API_KEY is stored in `.env` file in the project root
- Dependencies installed via `npm install`

## Usage

Invoke with a descriptive prompt:

```
/generate-slide-image "A person wearing a QR code on their clothing walking through a city"
```

## Parameters

- **Prompt** (required): Detailed description of the image you want to generate

## How it works

This skill will:
1. Load the API key from the `.env` file
2. Call the Nano Banana Pro model via REST API
3. Generate an image (~1408x768, 16:9 aspect ratio)
4. Save it to the `public/images/` directory as a JPEG with a timestamped filename
5. Return the image path for use in your slides

The script uses TypeScript with proper error handling and verbose logging.

## Style Constraints (automatically enforced)

Every generated image automatically includes these style rules:
- **No text, labels, or words** anywhere in the image
- Single continuous scene, one unified viewpoint
- No split screens, grids, or multiple panels
- Dark moody cinematic lighting, photorealistic
- 16:9 aspect ratio

**Important:** Do not include text, typography, or lettering in your prompts. The model is instructed to produce purely visual content with no written elements.

## Example prompts

- "A person wearing a QR code badge being photographed by a smartphone"
- "Digital twin concept showing real world and virtual world connection"
- "Privacy awareness illustration with tracking symbols"
- "QR code on clothing with digital data streams in background"

## Output

Images are saved to: `public/images/generated_[timestamp]_[description].png` (JPEG format, ~800KB, 1408x768)

## Notes

- Generated images are in 16:9 aspect ratio for presentation slides
- Uses Imagen 3 via Gemini API for high-quality results
- Prompts should be descriptive for best results
