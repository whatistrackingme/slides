---
theme: default
highlighter: shiki
lineNumbers: false
fonts:
  provider: none
  sans: "'Space Grotesk Variable', sans-serif"
  mono: Fira Code
info: |
  ## What is Tracking ME?
  A privacy awareness project
drawings:
  persist: false
transition: slide-left
title: What is Tracking ME?
layout: cover
background: /images/generated_2026-02-10T08-41-41_dark_moody_cityscape_at_night_with_glowing_qr_code.png
---

<div class="slide-label">
  <p class="text-5xl">What is Tracking ME?</p>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/whatistrackingme" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
Today I want to show you something that changed how I think about privacy.

Look at this city. QR codes on every billboard, every storefront, every phone. We've built an entire infrastructure for tracking — and most of us don't even notice it.
-->

---

<div class="slide-label z-10">
  <p>Scan this</p>
</div>

<iframe src="https://app.staging.whatistracking.me/qr" class="absolute inset-0 w-full h-full border-none" allow="camera" />

<!--
Before we get started — I want you all to pull out your phones and scan this QR code. Go ahead, I'll wait.

Don't worry about what it does yet. Just scan it. Everyone good? Great. Keep your phones handy.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-41-42_close_up_of_a_persons_hand_holding_a_smartphone_sc.png
---

<div class="slide-label">
  <p>What just happened?</p>
</div>

<!--
So — what just happened? You scanned a QR code. Simple, right?

But think about it. What data was just created? Your device type, your IP address, the time, your rough location. Where did that data go? Who has it now? Can you get it back?

You have absolutely no idea. And that's the problem.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-41-43_abstract_visualization_showing_digital_fingerprint.png
---

<div class="slide-label">
  <p>Every scan leaves a trace</p>
</div>

<!--
This isn't hypothetical. In 2025, every physical interaction is potentially digital data.

You scan a menu at a restaurant — tracked. You badge into a conference — tracked. You walk past a smart camera — tracked. AI-powered surveillance has made this frictionless and invisible.

Your movements, your habits, your preferences — captured and monetized without your awareness. That's the world we live in right now.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-53-36_a_person_standing_in_a_doorway_looking_out_at_a_ci.png
---

<div class="slide-label">
  <p>We lock doors, not data</p>
</div>

<!--
Here's what's strange. We understand physical privacy instinctively. We close curtains. We lock our front doors. We whisper secrets.

But digitally? We freely scan QR codes, tap NFC readers, walk past cameras — without a second thought. There's a massive gap between how we protect our physical space and how casually we give away our digital presence.

That gap is where the risk lives.
-->

---
layout: cover
background: /images/generated_2026-02-10T07-47-57_a_person_wearing_a_qr_code_badge_on_their_clothing.png
---

<div class="slide-label">
  <p>Wear the tracker</p>
</div>

<!--
So we built something. It's called WhatIsTrackingMe, and the idea is simple: make invisible tracking visible through self-surveillance.

You wear a QR code — on a badge, a wristband, a 3D-printed accessory. When someone or something scans it, you find out. You see who scanned you, when, and from where.

Simple concept. But the revelations are powerful.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-53-42_a_smartphone_receiving_a_glowing_notification_aler.png
---

<div class="slide-label">
  <p>Scan · Track · Notify</p>
</div>

<!--
Here's how it works at a high level. Three steps.

First, you wear a unique QR code. Could be a 3D-printed badge, an e-ink display on your jacket, whatever you want.

Second, someone scans it — a person, a camera system, a venue's tracking infrastructure. The scan gets recorded with metadata.

Third, you get notified. In real time. On your phone. You see who, when, where, and how often.

That's the overview. We'll drill into the tech behind this in a few slides.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-53-46_a_crowded_conference_hall_from_above_at_night_atte.png
---

<div class="slide-label">
  <p>Why it matters</p>
</div>

<!--
This isn't just a proof of concept. There are real applications here.

Imagine ranking businesses by how aggressively they track visitors. Or studying how QR codes spread virally through social networks. Organizations could use this for privacy compliance auditing.

Researchers get a tool for studying real-world tracking patterns. You personally get a dashboard showing your digital footprint — who's watching you and how often.

Event organizers could offer tracking transparency to attendees. The use cases keep growing.
-->

---

<div class="slide-label z-10">
  <p>See it live</p>
</div>

<iframe src="https://app.staging.whatistracking.me" class="absolute inset-0 w-full h-full border-none" />

<!--
Let me show you the real thing. This is our staging environment — the same app you'd use.

Remember that QR code you scanned earlier? Let's see what happened. I can see every scan — the timestamp, the device info, the interaction trail.

This is the moment that changes people's perspective. You did something completely ordinary — scanned a QR code — and now I can see exactly when you did it.
-->

---
layout: cover
background: /images/generated_2026-02-17T12-45-26_clean_minimal_system_architecture_diagram_on_dark_.png
---

<div class="slide-label">
  <p>How the pieces connect</p>
</div>

<!--
Before we dive into the details, let me show you the big picture.

On the left — the e-ink badge. It broadcasts your encrypted QR code. In the center — the Rust Axum server. It receives scan events, stores encrypted blobs in PostgreSQL, and routes notifications. On the right — the Tauri app on your device. It polls for new scans and decrypts everything locally.

The key insight: data flows left to right, but decryption only happens on the far right — on your device. The server in the middle is deliberately blind. It stores data it cannot read.

This is privacy by architecture. Not by policy, not by promise — by math.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-57-00_a_sequence_diagram_showing_the_flow_between_four_e.png
---

<div class="slide-label">
  <p>Rust powers the backend</p>
</div>

<!--
Let's look under the hood. The backend is written in Rust using Axum — we chose it for performance and memory safety.

Here's the flow: Your phone generates a key pair locally. Only the public key gets sent to our server during registration. The server generates random prefixes — think of them as anonymous mailboxes — and associates them with your public key.

Your broadcaster device — the QR badge — encrypts timestamps with AES-128. When someone scans your QR code, that interaction hits our collector, gets filtered by prefix, and waits for you to poll.

The critical part: the server never sees your plaintext data. Only your device can decrypt it. Privacy by architecture, not by promise.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-41-55_laptop_and_smartphone_showing_a_privacy_dashboard_.png
---

<div class="slide-label">
  <p>Your device, your data</p>
</div>

<!--
The frontend is a Tauri app — cross-platform, built with web technologies, but running natively on your machine.

Why Tauri? Because decryption happens entirely on your device. Your private key never leaves your phone or laptop. The server sends you encrypted blobs, and only your app can unlock them.

You get real-time notifications when someone scans your QR code, plus a dashboard that shows tracking patterns over time. All the data lives on your device. We literally cannot read it even if we wanted to.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-41-58_3d_printer_creating_a_small_wearable_badge_with_a_.png
---

<div class="slide-label">
  <p>Print your own tracker</p>
</div>

<!--
The hardware side is where it gets fun. We use 3D-printed wearables — badges, clips, accessories — anything you can attach a QR code to.

For dynamic tracking, we use Inkplate e-ink displays. They refresh the QR code periodically with new encrypted timestamps. Low power, always-on, and the QR code changes so you can correlate exact times with interactions.

Everything is open hardware. The STL files are on GitHub. You can literally print your own tracker tonight.
-->

---
layout: cover
background: /images/generated_2026-02-17T12-56-51_four_3d_printing_filament_samples_side_by_side_on_.png
---

<div class="slide-label">
  <p>Choosing the right material</p>
</div>

<!--
Not all 3D printing filaments are equal — and for wearables, material choice matters.

PLA — polylactic acid — is the easiest to print. It's plant-based, biodegradable, and great for prototyping. But it's brittle and softens at just 60°C, so it won't survive a hot car or direct sun.

PETG — polyethylene terephthalate glycol — is the workhorse. It's the same family as water bottles. Better heat resistance, some flex, and it handles UV exposure reasonably well. Most of our badges use PETG.

ASA — acrylonitrile styrene acrylate — is the outdoor champion. UV-stable, heat-resistant to 100°C, and tough. If your tracker lives outside on a backpack or bike, ASA is the answer. Harder to print though — needs an enclosure and good ventilation because of fumes.

TPU — thermoplastic polyurethane — is the flexible one. Rubber-like, perfect for wristbands and clips that need to bend without snapping. Trickiest to print because it's elastic, but essential for body-worn form factors.

Each material is a tradeoff: ease of printing versus durability, rigidity versus flex, indoor versus outdoor. We publish recommended settings for all four.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-42-02_data_visualization_showing_unexpectedly_high_numbe.png
---

<div class="slide-label">
  <p>More tracking than you think</p>
</div>

<!--
When we started testing this in the real world, the results surprised us.

People are tracked far more than they think. We saw scans from systems we didn't even know were scanning — automated venue trackers, digital signage networks, security infrastructure.

Even interactions you think are anonymous leave traces. The volume of tracking happening in ordinary public spaces is staggering. Most people have no idea it's happening right next to them, every day.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-42-04_person_standing_in_a_public_space_with_visible_lig.png
---

<div class="slide-label">
  <p>Should scanning require consent?</p>
</div>

<!--
This raises a bigger question. When someone takes your photo, you can see the camera. You can object. There are social norms, even laws.

But when someone scans a QR code near you, or a system logs your presence — it's completely invisible. No flash, no shutter sound, no consent dialog.

Physical spaces are becoming digital fishbowls. Should scanning require the same visibility as photography? Should you have the right to know when you're being digitally observed?

Privacy awareness is the first step toward privacy rights. And you can't be aware of what you can't see.
-->

---
layout: cover
background: /images/generated_2026-02-17T12-46-14_futuristic_privacy_technology_concept_on_dark_back.png
---

<div class="slide-label">
  <p>What comes next</p>
</div>

<!--
So where is this headed?

We're working on mobile apps — native iOS and Android — so you don't need a desktop to monitor your tracking. AI-powered scan detection that can identify when cameras and automated systems read your QR code, not just phones.

We're exploring NFC and Bluetooth beacons alongside QR codes. Smart glasses integration. Cross-platform tracking correlation — connecting the dots between different tracking systems that observe you.

The vision is a full privacy awareness layer for your physical life. Open source, user-owned, always transparent.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-42-04_open_source_community_concept_diverse_hands_reachi.png
---

<div class="slide-label">
  <p>Make tracking visible</p>
</div>

<!--
So here's what you can do.

Try it. Print a QR code, wear it for a week, and see what happens. The results will change how you think about public spaces.

Contribute. We need hardware designers, Rust developers, privacy researchers. The entire project is open source.

Spread awareness. Talk about what you learn. Share the data. The goal is simple: everyone should know when they're being tracked.

The project is on GitHub — github.com/whatistrackingme. Come say hello.
-->

---
layout: cover
background: /images/generated_2026-02-10T08-41-41_dark_moody_cityscape_at_night_with_glowing_qr_code.png
---

<div class="flex items-center justify-center h-full">
  <div class="bg-black/60 backdrop-blur-sm px-12 py-10 rounded-3xl text-center">
    <p class="text-5xl font-extrabold text-white mb-6 uppercase tracking-wide">Questions?</p>
    <p class="text-2xl text-gray-300">github.com/whatistrackingme</p>
  </div>
</div>

<!--
Thank you. I'd love to hear your questions — about the technology, the privacy implications, or how you might use this in your own work.

The repo is at github.com/whatistrackingme. Issues and PRs welcome.
-->
