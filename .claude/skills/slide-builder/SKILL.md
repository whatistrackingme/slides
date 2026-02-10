---
name: slide-builder
description: Interactive workflow for creating and refining presentation slides based on research-backed principles. Use when planning presentation structure, adding new slides, or improving existing content. Ensures every slide has one meaningful image.
allowed-tools: Read, Edit, Bash
---

# Slide Builder

Interactive skill for creating the WhatIsTrackingMe presentation using research-backed design principles. This skill ensures every slide follows proven effectiveness patterns: one meaningful image, minimal text, assertion-evidence format, and progressive storytelling.

## Research-Backed Principles

This skill implements findings from TED talks, cognitive science, and technical presentation research:

### Core Design Rules
1. **One Meaningful Image Per Slide** - Full-screen, high-resolution, directly relevant (no decorative images)
2. **Maximum 6 Words Text** - Speaking provides context, slides reinforce visually
3. **Assertion-Evidence Format** - Each slide makes one clear claim supported by one visual
4. **10-12 Slides Total** - For 20-minute delivery (10-20-30 rule)
5. **Progressive Complexity** - Build understanding piece by piece
6. **Story Arc** - Problem → Struggle → Solution with emotional touchpoints

### Why These Work
- **Pictures increase understanding in 98% of experiments**
- **Stories are 22x more memorable than facts alone**
- **Visual + verbal dual-coding creates stronger memory**
- **Well-designed visuals reduce learning time by 40%**
- **Audience attention maxes out at 20 minutes**

## Presentation Structure (14-16 slides, 20 minutes)

### Slide 1: The Hook (1.5 min)
**Image:** Person scanning QR code at coffee shop/event
**Purpose:** Set up invisible-to-visible transformation
**Question:** "What just happened?"

### Slide 2: Current State of Affairs (1.5 min)
**Image:** Collage showing AI surveillance, tracking tech, QR codes everywhere
**Context:** AI-powered tracking, ubiquitous QR codes, surveillance capitalism
**Reality:** "In 2024, every physical interaction is potentially digital data"

### Slide 3: The Privacy Gap (1.5 min)
**Image:** Physical space overlaid with invisible digital signals
**Assertion:** We understand physical privacy but ignore digital tracking
**Emotional hook:** This gap puts us at risk

### Slide 4: Meet WhatIsTrackingMe (1 min)
**Image:** Tool concept - physical wearable QR code + digital interface
**Core idea:** Making invisible tracking visible through self-surveillance
**Resolution begins:** "Wear the tracker, see who tracks you"

### Slide 5: Hardware + Software (1.5 min)
**Image:** 3D printed badge/wearable with QR code + phone showing app
**Physical component:** 3D-printed wearables with unique QR codes
**Digital component:** Tauri-based frontend app for real-time tracking visibility
**Integration:** Hardware you wear, software you control

### Slide 6: How It Works - The Flow (1.5 min)
**Image:** Flow diagram: You wear QR → Someone scans → You get notified
**Simple overview:** End-to-end user experience
**Key point:** You see every interaction in real-time

### Slides 7-9: Technical Architecture (4.5 min total)
**Each slide = one system component:**

**Slide 7: Backend Architecture (1.5 min)**
- Image: Rust backend + PostgreSQL + file watcher architecture diagram
- Key: Privacy-preserving design, encrypted data, user-owned keys
- Tech: Axum, Ed25519 auth, proof-of-work challenges

**Slide 8: Frontend - Tauri App (1.5 min)**
- Image: Tauri app interface showing interaction tracking
- Cross-platform: Desktop app with web technologies
- Privacy: Data decryption happens client-side only

**Slide 9: Hardware - 3D Printing (1.5 min)**
- Image: E-ink display (Inkplate) showing rotating QR codes
- Customizable: 3D print your own wearable
- Dynamic: QR codes refresh with encrypted timestamps

### Slide 10: Use Cases (2 min)
**Image:** Grid showing different applications
**Applications:**
- **Business ranking** - Which venues track most aggressively
- **Virality tracking** - How QR codes spread through social networks
- **Privacy auditing** - Compliance verification for organizations
- **Research tool** - Academic studies on real-world tracking
- **Event security** - Conference/venue tracking transparency
- **Personal dashboard** - Your digital footprint visualization
- **Supply chain visibility** - Track product QR code interactions

### Slide 11: Live Demo (2 min)
**Image:** Real example or live demonstration screenshot
**Interactive:** Walk through actual tracking revelation
**"Aha" moment:** Show what the tool reveals in real-time

### Slide 12: What We Discovered (1.5 min)
**Image:** Data visualization of tracking patterns
**Insights:** Specific findings from real-world usage
**Surprising:** Tracking happens more than people think

### Slide 13: The Bigger Picture (1.5 min)
**Image:** Metaphor for privacy awareness (light illuminating hidden connections)
**Implications:** Rethinking consent in physical spaces
**Provocation:** "Should scanning be visible like photography?"

### Slide 14: Call to Action (1.5 min)
**Image:** Open source contribution graphic / project roadmap
**Actionable:**
- Try the tool: Wear a QR, see what happens
- Contribute: Hardware designs, code, privacy research
- Spread awareness: Make tracking visible

### Slide 15: Questions (Buffer)
**Image:** Project info with QR code to repo
**Contact:** GitHub, contribution guide, discussion forum

## Interactive Workflow

### Phase 1: Review & Plan
```
1. Read current slides.md
2. Show structure overview:
   - Current slide count vs target (10-12)
   - Which sections exist, which are missing
   - Image coverage (every slide must have one)
   - Estimated timing per slide
3. Identify gaps and next priorities
```

### Phase 2: Create/Refine Slides
```
For each slide:
1. Define the assertion (what's the one key point?)
2. Determine what image would best support it
3. Generate image if needed (call /generate-slide-image)
4. Draft slide content (max 6 words + speaker notes)
5. Add image reference
6. Review in browser (HMR updates instantly)
```

### Phase 3: Image Generation Strategy
```
When creating images:
1. Ask: Does this image directly support the slide's assertion?
2. Avoid decorative images - every visual must serve learning
3. Prefer: diagrams, screenshots, metaphors over stock photos
4. Use full-screen, high-resolution images
5. Ensure 16:9 aspect ratio

Example prompts:
- "Person in modern office scanning QR code on conference badge, looking unaware of digital tracking, photorealistic"
- "Abstract visualization of physical space with invisible wifi signals and tracking beacons becoming visible"
- "Simple architecture diagram showing QR code scanner connecting to data collector and user notification system"
- "Before and after comparison: left shows person oblivious to tracking, right shows same person with awareness overlay"
```

### Phase 4: Content Guidelines

**Text Rules:**
- **Maximum 6 words per slide** (TED standard)
- **No bullet points** (use visuals or separate slides)
- **No "headline and bullets"** (fatiguing to read)
- **Assertion-based:** Each slide makes one claim

**Technical Content:**
- Break complex architecture into 3 separate slides (one component each)
- Use diagrams, not text descriptions
- Show data flow visually
- Progressive disclosure: simple → complex

**Story Integration:**
- Connect technical facts to narrative
- Use real scenarios: "Imagine you're at a conference..."
- Emotional touchpoints: privacy violations feel personal
- Resolution arc: problem → struggle → solution works

## Required Topics Coverage

The presentation must include:

### Current State of Affairs
- AI-powered surveillance and tracking
- Ubiquity of QR codes in daily life
- Surveillance capitalism context
- Privacy awareness gap

### Technical Components

**Hardware:**
- 3D-printed wearables (badges, accessories)
- E-ink displays (Inkplate) for dynamic QR codes
- Physical design considerations

**Software:**
- **Backend:** Rust (Axum), PostgreSQL, file watcher
- **Frontend:** Tauri app (cross-platform desktop)
- **Auth:** Ed25519 + proof-of-work
- **Privacy:** Client-side decryption, user-owned keys

### Use Cases
**Personal:**
- Privacy dashboard and awareness
- Personal tracking audit
- Digital footprint visualization

**Research:**
- Academic studies on real-world tracking
- Privacy behavior research
- Tracking pattern analysis

**Business/Organizations:**
- Business ranking by tracking aggressiveness
- Venue privacy transparency scores
- Event security auditing
- Compliance verification

**Social:**
- Virality tracking (how QR codes spread)
- Social network tracking patterns
- Community awareness campaigns

**Advanced:**
- Supply chain transparency
- Product interaction tracking
- Competitive intelligence (ethical)
- Cross-platform tracking detection

## Example Session Flow

**User:** `/slide-builder`

**Skill:**
```
Current Structure Analysis:
- 5 slides exist (need 9-11 more)
- Missing: Current state, hardware/software, architecture, use cases
- Image coverage: 2/5 slides have images (need 13 more)
- Timing: ~8 minutes of content (need ~12 more)
- Required topics not covered: 3D printing, Tauri app, backend architecture, use cases

Priority: Add "Current State of Affairs" slide (provides context for problem)
```

**User:** Let's create the architecture slides

**Skill:**
```
Slide 5: QR Code Analysis Component

Assertion: "WhatIsTrackingMe intercepts QR scans before tracking begins"

Suggested image prompt:
"Technical diagram showing QR code scanner with interception layer highlighting data extraction, clean architecture style, blue and white"

Generating image...
[calls /generate-slide-image]
Image saved: public/images/generated_[timestamp]_qr_interception.png

Draft slide content:
---
# Intercepting the Scan

<img src="/images/generated_[timestamp]_qr_interception.png" class="w-full h-full object-cover" />

<div class="absolute bottom-10 left-10 text-4xl font-bold text-white bg-black bg-opacity-50 px-4 py-2">
  Scan → Analyze → Notify
</div>
---

Preview this in your browser. Ready to continue to slide 6?
```

**User:** Yes, next slide

**Skill:** [Continues with slide 6...]

## Cognitive Load Management

**Keep It Simple:**
- Maximum 3 visual elements per slide
- One idea = one slide
- Build complexity over multiple slides, not all at once
- Let speaking fill in details, slides reinforce key points

**Visual Hierarchy:**
- Most important: largest, centered, highest contrast
- Supporting: smaller, peripheral
- Eliminate everything else

## Image Requirements Checklist

Every slide must have:
- ✅ One high-resolution image (full-screen preferred)
- ✅ Image directly supports slide's assertion
- ✅ 16:9 aspect ratio
- ✅ Not decorative - serves learning objective

Image types that work:
- **Architecture diagrams** (technical slides)
- **Screenshots/mockups** (demo slides)
- **Visual metaphors** (concept slides)
- **Real scenarios** (story slides)
- **Data visualizations** (insight slides)

Avoid:
- ❌ Stock photos that don't add meaning
- ❌ Multiple small images (use one full-screen)
- ❌ Text-heavy diagrams (break into multiple slides)
- ❌ Low-resolution or stretched images

## Timing Guidelines

**Per Slide:**
- Simple concept: 1.5 minutes
- Technical detail: 2 minutes
- Demo/interactive: 3 minutes
- Total target: 17-18 minutes (leaves buffer for Q&A)

**Pacing:**
- Speaking rate: 100-120 words/minute for key points
- 140-150 wpm for transitions
- Slow down for complex technical concepts
- Speed up for narrative bridges

## Technical Storytelling Strategy

**Problem-Struggle-Solution Arc:**
1. **Problem (Slides 1-2):** Invisible tracking, privacy gap
2. **Struggle (Slide 3):** Journey from physical to digital without awareness
3. **Solution (Slides 4-11):** WhatIsTrackingMe makes it visible

**Emotional Connection:**
- Use first person: "When you scan..."
- Real scenarios: conference badges, restaurant menus, payment codes
- Personal stakes: "Your data, your awareness, your choice"

**Technical Depth:**
- Dedicate 4 minutes (3 slides) to architecture
- Each architectural component gets own slide with diagram
- Progressive: show user flow first, then dive into components
- Visual, not text: data flow diagrams over bullet points

## Success Criteria

A successful presentation created with this skill:
- ✅ 10-12 slides (optimal for 20 minutes)
- ✅ Every slide has one meaningful image
- ✅ Maximum 6 words text per slide
- ✅ Clear story arc from problem to solution
- ✅ Technical depth through visuals, not text
- ✅ Interactive moments (poll, demo, questions)
- ✅ Memorable takeaways (combining story + visuals)
- ✅ Actionable call to action

## Commands During Session

- **"Review structure"** - Show current state and gaps
- **"Create slide [number]"** - Work on specific slide
- **"Generate image for [slide]"** - Create visual for existing slide
- **"Refine [slide number]"** - Improve existing slide
- **"Check timing"** - Estimate duration
- **"Preview mode"** - Tips for viewing in browser

## Tips for Effective Use

1. **Start with structure** - Plan all 10-12 slides before creating
2. **Images first** - Generate visuals early, write around them
3. **One session per section** - Complete logical units
4. **Test out loud** - Present slides to check pacing
5. **Use HMR** - Save and see changes instantly
6. **Iterate freely** - Research shows revision improves retention
7. **Think visually** - Every point should have visual representation

## Research Sources

This skill is based on:
- TED talk design guidelines
- Cognitive science (dual-coding theory, visual learning)
- Technical presentation research (assertion-evidence format)
- Audience engagement studies
- Privacy/security communication best practices

Key stat: Properly designed presentations with one image per slide and minimal text can **reduce learning time by 40%** and create memories **22x stronger** than text alone.
