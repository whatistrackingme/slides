#!/usr/bin/env tsx
/**
 * Batch generate variant images for slide quadrant dev mode.
 * Runs with controlled concurrency to avoid API rate limits.
 */

import fs from 'fs';
import path from 'path';
import 'dotenv/config';

const CONCURRENCY = 3;

interface SlideVariants {
  slideLabel: string;
  prompts: string[];
}

const slideVariants: SlideVariants[] = [
  {
    slideLabel: "slide1_19_cityscape",
    prompts: [
      "aerial view of a sprawling city at night with neon QR codes projected onto building facades and wet streets",
      "rain-soaked urban alley at night with QR codes glowing on walls and reflections in puddles",
      "futuristic city skyline at dusk with holographic QR codes floating above skyscrapers"
    ]
  },
  {
    slideLabel: "slide3_smartphone_scan",
    prompts: [
      "person's hand holding a phone with QR scanner app open pointed at a surface with shallow depth of field",
      "over-the-shoulder view of someone scanning a QR code on their phone in a dimly lit room",
      "close up of a smartphone screen showing a QR code scan in progress with dramatic lighting"
    ]
  },
  {
    slideLabel: "slide4_digital_trace",
    prompts: [
      "glowing digital data trail flowing from a smartphone into a dark void with particle effects",
      "abstract network of connected data points forming a human silhouette on dark background",
      "ethereal digital footprints glowing on a dark floor fading into the distance"
    ]
  },
  {
    slideLabel: "slide5_lock_doors",
    prompts: [
      "a heavy wooden door with a large padlock beside a translucent digital screen showing flowing data streams",
      "silhouette of a person holding physical keys while digital data streams flow freely around them in darkness",
      "person closing a heavy vault door while behind them unprotected data streams flow into the dark"
    ]
  },
  {
    slideLabel: "slide6_wear_tracker",
    prompts: [
      "person walking through a busy urban street at night wearing a glowing QR code badge on their jacket lapel",
      "lone figure on a modern pedestrian bridge at night wearing a luminous QR code armband",
      "rear view of a person in a hoodie walking through an underpass with a QR code displayed on their backpack"
    ]
  },
  {
    slideLabel: "slide7_scan_track_notify",
    prompts: [
      "smartphone on a dark surface with a bright notification bubble glowing above the screen",
      "person's hand holding a phone receiving a push notification with an alert icon in a dark environment",
      "close up of a smartwatch and phone both showing synchronized tracking notifications on a dark desk"
    ]
  },
  {
    slideLabel: "slide8_why_matters",
    prompts: [
      "bird's eye view of a crowded event space at night with subtle tracking beams visible in the lighting",
      "wide angle view of a packed auditorium from the back with stage lights illuminating the crowd",
      "overhead shot of people walking through a convention center floor with scanning beams visible above"
    ]
  },
  {
    slideLabel: "slide11_rust_backend",
    prompts: [
      "abstract representation of encrypted data flowing through interconnected server nodes glowing on dark background",
      "glowing pipeline of encrypted data packets moving between stylized server components in darkness",
      "visualization of an API request flowing through middleware layers with cryptographic lock symbols"
    ]
  },
  {
    slideLabel: "slide12_your_device",
    prompts: [
      "a laptop and phone on a dark desk both showing encrypted data visualizations with a glowing lock icon",
      "close up of a smartphone displaying a real-time privacy monitoring dashboard with graphs in a dark room",
      "person's hands holding a tablet showing a minimal privacy dashboard with scan notifications"
    ]
  },
  {
    slideLabel: "slide13_3d_printer",
    prompts: [
      "close up of a 3D printer extruder head printing a detailed QR code badge with filament visible",
      "collection of freshly 3D-printed QR code badges and wristbands on a dark workbench",
      "3D printer in action creating a small geometric wearable device with QR pattern in moody workshop lighting"
    ]
  },
  {
    slideLabel: "slide14_materials",
    prompts: [
      "colorful 3D printing filament spools arranged on a dark shelf with dramatic side lighting",
      "close up of different 3D printed material samples showing varying textures and flexibility on dark surface",
      "arrangement of 3D printed test pieces in different materials with one being bent to show flexibility"
    ]
  },
  {
    slideLabel: "slide15_more_tracking",
    prompts: [
      "dramatic glowing bar chart with surprisingly tall bars against a dark background showing alarming data",
      "abstract heatmap visualization showing dense clusters of tracking activity across a city layout",
      "holographic-style data dashboard floating in dark space showing dense tracking frequency data"
    ]
  },
  {
    slideLabel: "slide16_consent",
    prompts: [
      "person standing under a surveillance camera spotlight in a public plaza at night looking up",
      "lone figure in a public space surrounded by subtle scanning beams from hidden devices at night",
      "person walking through a public corridor with camera lens reflections visible in the dark shadows"
    ]
  },
  {
    slideLabel: "slide17_future",
    prompts: [
      "futuristic wearable devices including smart glasses and wristbands with privacy shields on dark background",
      "next-generation privacy technology concept with holographic interfaces floating on dark background",
      "array of futuristic privacy devices including NFC tags e-ink displays and smart badges on dark surface"
    ]
  },
  {
    slideLabel: "slide18_community",
    prompts: [
      "diverse group of people gathered around a glowing open source project display in a dark collaborative space",
      "multiple hands holding different devices all showing the same privacy awareness app in a dark room",
      "collaborative workspace with multiple screens showing open source code contributions and privacy dashboards"
    ]
  }
];

const stylePrefix = 'Single continuous scene, one unified viewpoint, no text or labels or words anywhere in the image, no split screens or grids or multiple panels. Dark moody cinematic lighting, photorealistic, 16:9 aspect ratio. ';

function sanitizeFilename(prompt: string, maxLength: number = 50): string {
  return prompt
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[-\s]+/g, '_')
    .substring(0, maxLength);
}

async function generateOne(prompt: string, slideLabel: string, variantIndex: number): Promise<string | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY not found');

  const fullPrompt = stylePrefix + prompt;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/nano-banana-pro-preview:generateContent?key=${apiKey}`;

  console.log(`[${slideLabel}:v${variantIndex + 1}] Generating...`);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: fullPrompt }] }],
      generationConfig: { responseModalities: ['image'] }
    })
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`[${slideLabel}:v${variantIndex + 1}] API error ${response.status}: ${text.substring(0, 200)}`);
    return null;
  }

  const result = await response.json();

  if (result.error) {
    console.error(`[${slideLabel}:v${variantIndex + 1}] Gemini error: ${result.error.message}`);
    return null;
  }

  if (!result.candidates?.[0]?.content?.parts) {
    console.error(`[${slideLabel}:v${variantIndex + 1}] No candidates in response`);
    return null;
  }

  const imagePart = result.candidates[0].content.parts.find((p: any) => p.inlineData);
  if (!imagePart?.inlineData) {
    console.error(`[${slideLabel}:v${variantIndex + 1}] No image data in response`);
    return null;
  }

  const outputDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const desc = sanitizeFilename(prompt);
  const filename = `generated_${timestamp}_${desc}.png`;
  const filepath = path.join(outputDir, filename);

  const buffer = Buffer.from(imagePart.inlineData.data, 'base64');
  fs.writeFileSync(filepath, buffer);

  console.log(`[${slideLabel}:v${variantIndex + 1}] Saved: ${filename}`);
  return filename;
}

async function runBatch<T>(tasks: (() => Promise<T>)[], concurrency: number): Promise<T[]> {
  const results: T[] = [];
  const queue = [...tasks];

  async function worker() {
    while (queue.length > 0) {
      const task = queue.shift()!;
      results.push(await task());
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, tasks.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

async function main() {
  console.log(`Starting batch generation: ${slideVariants.length} slides × 3 variants = ${slideVariants.length * 3} images`);
  console.log(`Concurrency: ${CONCURRENCY}\n`);

  const allTasks: (() => Promise<{ slideLabel: string; variant: number; filename: string | null }>)[] = [];

  for (const slide of slideVariants) {
    for (let i = 0; i < slide.prompts.length; i++) {
      const prompt = slide.prompts[i];
      const label = slide.slideLabel;
      const idx = i;
      allTasks.push(async () => ({
        slideLabel: label,
        variant: idx,
        filename: await generateOne(prompt, label, idx)
      }));
    }
  }

  const results = await runBatch(allTasks, CONCURRENCY);

  // Output summary as JSON
  const summary: Record<string, string[]> = {};
  for (const r of results) {
    if (!summary[r.slideLabel]) summary[r.slideLabel] = [];
    summary[r.slideLabel].push(r.filename || 'FAILED');
  }

  console.log('\n=== GENERATION SUMMARY ===');
  console.log(JSON.stringify(summary, null, 2));

  const total = results.length;
  const succeeded = results.filter(r => r.filename !== null).length;
  console.log(`\nCompleted: ${succeeded}/${total} images generated successfully`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
