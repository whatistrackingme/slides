#!/usr/bin/env tsx
/**
 * Generate images for slides using Gemini API
 */

import fs from 'fs';
import path from 'path';
import 'dotenv/config';

interface GenerateResult {
  success?: boolean;
  filename?: string;
  relative_path?: string;
  prompt?: string;
  aspect_ratio?: string;
  error?: string;
  details?: unknown;
  response?: unknown;
}

interface GeminiImageResponse {
  candidates?: Array<{
    content: {
      parts: Array<{
        inlineData?: {
          data: string;
          mimeType: string;
        };
        text?: string;
      }>;
    };
  }>;
  error?: {
    code: number;
    message: string;
    status: string;
  };
}

function sanitizeFilename(prompt: string, maxLength: number = 50): string {
  return prompt
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[-\s]+/g, '_')
    .substring(0, maxLength);
}

async function generateImage(prompt: string): Promise<GenerateResult> {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return { error: 'GEMINI_API_KEY not found in .env file' };
    }

    console.error(`Generating image with prompt: ${prompt}`);
    console.error(`API Key loaded: ${apiKey.substring(0, 10)}...`);

    // Use Nano Banana Pro (Gemini 3 Pro Image Preview)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/nano-banana-pro-preview:generateContent?key=${apiKey}`;

    console.error(`Requesting: ${url.replace(apiKey, 'REDACTED')}`);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          responseModalities: ['image']
        }
      })
    });

    console.error(`Response status: ${response.status}`);

    const responseText = await response.text();
    console.error(`Response body: ${responseText.substring(0, 500)}`);

    if (!response.ok) {
      return {
        error: `API returned status ${response.status}`,
        details: responseText
      };
    }

    const result: GeminiImageResponse = JSON.parse(responseText);

    // Check for error in response
    if (result.error) {
      return {
        error: `Gemini API error: ${result.error.message}`,
        details: result.error
      };
    }

    // Check if we got candidates back
    if (!result.candidates || result.candidates.length === 0) {
      return {
        error: 'No candidates in API response',
        response: result
      };
    }

    // Find the inline data part with the image
    const imagePart = result.candidates[0].content.parts.find(p => p.inlineData);
    if (!imagePart || !imagePart.inlineData) {
      return {
        error: 'No image data in response',
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
    const imageData = imagePart.inlineData.data;
    const buffer = Buffer.from(imageData, 'base64');
    fs.writeFileSync(filepath, buffer);

    console.error(`Image saved to: ${filepath}`);

    return {
      success: true,
      filename: filepath,
      relative_path: `images/${filename}`,
      prompt: prompt,
      aspect_ratio: '16:9'
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error
    };
  }
}

// Main execution
const prompt = process.argv.slice(2).join(' ');
if (!prompt) {
  console.log(JSON.stringify({ error: 'No prompt provided. Usage: generate.ts "your prompt here"' }));
  process.exit(1);
}

generateImage(prompt)
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.success ? 0 : 1);
  })
  .catch(error => {
    console.log(JSON.stringify({
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error
    }, null, 2));
    process.exit(1);
  });
