#!/usr/bin/env python3
"""Generate images for slides using Gemini API (Imagen 3)."""

import os
import sys
import json
import requests
from pathlib import Path
from datetime import datetime
import re

def load_env():
    """Load environment variables from .env file."""
    # Find .env file by walking up the directory tree
    current = Path(__file__).resolve().parent
    while current != current.parent:
        env_path = current / ".env"
        if env_path.exists():
            with open(env_path) as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith('#') and '=' in line:
                        key, value = line.split('=', 1)
                        os.environ[key] = value
            return
        current = current.parent
    # Also check slides directory specifically
    slides_env = Path.cwd() / ".env"
    if slides_env.exists():
        with open(slides_env) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    key, value = line.split('=', 1)
                    os.environ[key] = value

def sanitize_filename(prompt: str, max_length: int = 50) -> str:
    """Create a safe filename from the prompt."""
    # Remove special characters and replace spaces with underscores
    safe = re.sub(r'[^\w\s-]', '', prompt)
    safe = re.sub(r'[-\s]+', '_', safe)
    return safe[:max_length].lower()

def generate_image(prompt: str) -> dict:
    """Generate an image using Gemini Imagen 3 API."""
    try:
        load_env()

        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            return {"error": "GEMINI_API_KEY not found in .env file"}

        # Gemini Imagen API endpoint
        url = f"https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:generate?key={api_key}"

        # Request payload with 16:9 aspect ratio
        payload = {
            "prompt": prompt,
            "config": {
                "numberOfImages": 1,
                "aspectRatio": "16:9",
                "personGeneration": "allow_adult",
                "safetyFilterLevel": "block_some"
            }
        }

        headers = {
            "Content-Type": "application/json"
        }

        print(f"Generating image with prompt: {prompt}", file=sys.stderr)
        response = requests.post(url, json=payload, headers=headers, timeout=60)

        if response.status_code != 200:
            return {
                "error": f"API returned status {response.status_code}: {response.text}"
            }

        result = response.json()

        # Extract the generated image data
        if "images" in result and len(result["images"]) > 0:
            # Imagen 3 returns base64 encoded images
            image = result["images"][0]

            # Create output directory (find project root or use cwd)
            project_root = Path.cwd()
            output_dir = project_root / "public" / "images"
            output_dir.mkdir(parents=True, exist_ok=True)

            # Generate filename
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            desc = sanitize_filename(prompt)
            filename = f"generated_{timestamp}_{desc}.png"
            filepath = output_dir / filename

            # Save the image
            if "image" in image:
                import base64
                # Remove data URL prefix if present
                image_data = image["image"]
                if image_data.startswith("data:"):
                    image_data = image_data.split(",", 1)[1]
                decoded = base64.b64decode(image_data)
                with open(filepath, "wb") as f:
                    f.write(decoded)
            else:
                return {"error": "Unexpected API response format", "response": result}

            return {
                "success": True,
                "filename": str(filepath),
                "relative_path": f"images/{filename}",
                "prompt": prompt,
                "aspect_ratio": "16:9"
            }
        else:
            return {"error": "No images in API response", "response": result}

    except requests.Timeout:
        return {"error": "Request timed out after 60 seconds"}
    except Exception as e:
        return {"error": f"Exception: {str(e)}"}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No prompt provided. Usage: generate.py \"your prompt here\""}))
        sys.exit(1)

    prompt = " ".join(sys.argv[1:])
    result = generate_image(prompt)
    print(json.dumps(result, indent=2))
