---
name: slide-builder
description: Interactive workflow for creating and refining presentation slides. Use when planning presentation structure, adding new slides, or improving existing content.
allowed-tools: Read, Edit, Bash
---

# Slide Builder

Interactive skill for creating and refining the WhatIsTrackingMe presentation. This skill guides you through planning, creating, and polishing slides in an iterative process.

## What This Skill Does

This skill helps you:
1. **Review** the current presentation structure
2. **Plan** new slides or sections
3. **Create** slide content with appropriate formatting
4. **Generate** images to illustrate concepts
5. **Refine** existing slides for clarity and flow
6. **Maintain** consistent pacing for 20-minute delivery

## Usage

```bash
/slide-builder
```

The skill will start an interactive session where you can:
- See the current slide structure
- Add new slides to specific sections
- Refine existing slides
- Generate supporting images
- Review overall presentation flow

## Interactive Workflow

### 1. Review Current Structure
The skill reads `slides.md` and shows:
- Current slide count
- Slide titles and topics
- Estimated timing
- Gaps or areas needing work

### 2. Plan Next Steps
You'll be asked:
- Which section to work on
- What type of content to add
- Whether images are needed
- How to refine existing content

### 3. Create/Refine Content
The skill will:
- Draft slide content in Markdown
- Suggest appropriate layouts
- Generate images if needed
- Maintain consistent style

### 4. Review and Iterate
After changes:
- Preview in the browser (HMR updates instantly)
- Provide feedback
- Continue refining or move to next section

## Presentation Structure

The presentation should cover:

### Introduction (2-3 min)
- Hook: Privacy in the digital age
- What is WhatIsTrackingMe?
- Why it matters

### The Problem (3-4 min)
- Real-world tracking without consent
- How images become data
- Digital twin concept

### The Solution (5-6 min)
- Project overview
- How it works (QR codes, tracking)
- User experience

### Technical Architecture (6-7 min)
- System components
- Data flow
- Privacy-preserving design

### Demo/Examples (2-3 min)
- Real tracking examples
- Visualization of data
- Impact demonstration

### Conclusion (2-3 min)
- Key takeaways
- Call to action
- Q&A transition

## Image Generation

When images are needed, the skill will:
1. Suggest appropriate prompts
2. Call `/generate-slide-image` with the prompt
3. Add the image to the slide
4. Adjust layout if needed

## Best Practices

### Content
- **One idea per slide** - Keep slides focused
- **Visual hierarchy** - Use headers, bullets, emphasis
- **Balance text and visuals** - Don't overcrowd
- **Tell a story** - Maintain narrative flow

### Timing
- **Rule of thumb:** 1-2 minutes per slide
- **Complex slides:** Allow more time
- **Image-heavy slides:** Can be quicker
- **Total:** Aim for 15-17 slides (leaves time for Q&A)

### Markdown Tips
```markdown
# Main Title
## Subtitle
**Bold for emphasis**
*Italic for subtle emphasis*

- Bullet points
  - Nested points

![Image alt text](/images/filename.png)

<div class="grid grid-cols-2 gap-4">
  <!-- Two-column layout -->
</div>
```

## Example Session

**You:** /slide-builder

**Skill:**
- Reads current slides
- Shows structure: 5 slides created, need 10-12 more
- Identifies gaps: Missing technical architecture section

**You:** Let's work on the technical architecture section

**Skill:**
- Proposes 3 slides for architecture
- Drafts content for first slide
- Suggests diagram generation

**You:** Yes, generate that diagram

**Skill:**
- Calls image generation skill
- Adds image to slide
- Shows updated slide

**You:** Looks good, move to next slide

**Skill:** (continues iteratively)

## Notes

- The skill maintains context across the session
- You can switch between sections at any time
- Images are generated on-demand
- All changes use HMR - preview instantly
- Skill commits changes only when you request it

## Tips for Effective Use

1. **Start with overview** - Review full structure before diving in
2. **Work section by section** - Complete logical units
3. **Generate images early** - So you can refine text around them
4. **Test pacing** - Present slides out loud to check timing
5. **Iterate freely** - HMR makes experimentation easy
6. **Save often** - Commit when you have working checkpoints
