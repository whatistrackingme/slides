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

## Presentation Structure (10-12 slides)

### Slide 1: The Hook (2 min)
**Image:** Person scanning QR code at coffee shop/event
**Purpose:** Set up invisible-to-visible transformation
**Question:** "What just happened?"

### Slide 2: The Privacy Gap (2 min)
**Image:** Physical space overlaid with invisible digital signals
**Assertion:** We understand physical privacy but ignore digital tracking
**Emotional hook:** This gap puts us at risk

### Slide 3: The Journey (1.5 min)
**Image:** Visual flow: physical action → digital data trail
**Story:** How your presence becomes someone else's data
**Build tension:** "Who knows? What do they know?"

### Slide 4: Meet WhatIsTrackingMe (1.5 min)
**Image:** Tool logo/interface or concept visualization
**Core idea:** Making invisible tracking visible
**Resolution begins:** "Now you can see it"

### Slides 5-7: Technical Architecture (4 min total)
**Each slide = one architectural component with diagram:**
- Slide 5: QR code interception/analysis (1.3 min)
- Slide 6: Data collection and tracking detection (1.3 min)
- Slide 7: User notification/awareness layer (1.4 min)

**Design:** Single focused diagram per slide, build complexity progressively

### Slide 8: Live Demo/Case Study (3 min)
**Image:** Real example or live demonstration screenshot
**Interactive:** Walk through actual tracking revelation
**"Aha" moment:** Show what the tool reveals

### Slide 9: What We Learned (2 min)
**Image:** Data visualization of tracking patterns
**Insights:** Key findings about privacy in physical spaces
**Make it concrete:** Specific numbers/patterns discovered

### Slide 10: The Bigger Picture (2 min)
**Image:** Metaphor for privacy awareness (light/darkness, visibility)
**Implications:** How this changes how we think about consent
**Thought-provoking:** "What if you could always see tracking?"

### Slide 11: Call to Action (2 min)
**Image:** Audience empowerment visual
**Actionable:** What technical professionals can do
**Invitation:** Try the tool, contribute, spread awareness

### Slide 12: Questions (Buffer)
**Image:** Simple visual with project info
**Contact:** GitHub, project URL, how to contribute

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

## Example Session Flow

**User:** `/slide-builder`

**Skill:**
```
Current Structure Analysis:
- 5 slides exist (need 5-7 more)
- Missing: Technical architecture, demo, implications
- Image coverage: 2/5 slides have images (need 5 more)
- Timing: ~8 minutes of content (need ~12 more)

Priority: Add technical architecture section (slides 5-7)
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
