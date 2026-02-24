import { GoogleGenerativeAI } from "@google/generative-ai";
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "../../..");

async function main() {
  const envContent = readFileSync(resolve(projectRoot, ".env"), "utf-8");
  const apiKey = envContent.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();

  if (!apiKey) {
    console.error("GEMINI_API_KEY not found in .env");
    process.exit(1);
  }

  const userPrompt = process.argv[2];
  if (!userPrompt) {
    console.error("Usage: tsx generate.ts <prompt>");
    process.exit(1);
  }

  const styleConstraints = [
    "No text, labels, words, or lettering anywhere in the image.",
    "Single continuous scene, one unified viewpoint.",
    "No split screens, grids, or multiple panels.",
    "Dark moody cinematic lighting, photorealistic.",
    "16:9 aspect ratio, high resolution.",
  ].join(" ");

  const fullPrompt = `${userPrompt}\n\nStyle constraints: ${styleConstraints}`;

  console.log("Prompt:", fullPrompt);
  console.log("\nGenerating image...");

  const ai = new GoogleGenerativeAI(apiKey);
  const model = ai.getGenerativeModel({ model: "gemini-3-pro-image-preview" });

  const response = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
    generationConfig: {
      // @ts-ignore - responseModalities supported by image generation models
      responseModalities: ["IMAGE", "TEXT"],
    },
  });

  const parts = response.response.candidates?.[0]?.content?.parts;
  if (!parts) {
    console.error("No response parts received");
    process.exit(1);
  }

  for (const part of parts) {
    if (part.inlineData) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
      const slug = userPrompt.slice(0, 60).toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/_+$/, "");
      const filename = `generated_${timestamp}_${slug}.png`;
      const outPath = resolve(projectRoot, "public/images", filename);

      const buffer = Buffer.from(part.inlineData.data!, "base64");
      writeFileSync(outPath, buffer);
      console.log(`\nSaved: ${outPath}`);
      console.log(`Slide path: /images/${filename}`);
    }
    if (part.text) {
      console.log("\nModel text:", part.text);
    }
  }
}

main();
