#!/usr/bin/env node
/**
 * Generate images for slides using Gemini API (REST endpoint)
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config();

function sanitizeFilename(prompt, maxLength = 50) {
  return prompt
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[-\s]+/g, '_')
    .substring(0, maxLength);
}

async function generateImage(prompt) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return { error: 'GEMINI_API_KEY not found in .env file' };
    }

    console.error(`Generating image with prompt: ${prompt}`);

    // Use the Gemini REST API for Imagen 3
    const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:generate?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
        config: {
          numberOfImages: 1,
          aspectRatio: '16:9'
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        error: `API returned status ${response.status}`,
        details: errorText
      };
    }

    const result = await response.json();

    // Check if we got images back
    if (!result.images || result.images.length === 0) {
      return {
        error: 'No images in API response',
        response: result
      };
    }

    // Create output directory
    const outputDir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Generate filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const desc = sanitizeFilename(prompt);
    const filename = `generated_${timestamp}_${desc}.png`;
    const filepath = path.join(outputDir, filename);

    // Save the image (base64 encoded)
    const imageData = result.images[0].image;
    const buffer = Buffer.from(imageData, 'base64');
    fs.writeFileSync(filepath, buffer);

    return {
      success: true,
      filename: filepath,
      relative_path: `images/${filename}`,
      prompt: prompt,
      aspect_ratio: '16:9'
    };
  } catch (error) {
    return {
      error: error.message,
      details: error.toString()
    };
  }
}

// Main execution
const prompt = process.argv.slice(2).join(' ');
if (!prompt) {
  console.log(JSON.stringify({ error: 'No prompt provided' }));
  process.exit(1);
}

generateImage(prompt)
  .then(result => console.log(JSON.stringify(result, null, 2)))
  .catch(error => console.log(JSON.stringify({ error: error.message }, null, 2)));
