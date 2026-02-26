---
theme: default
highlighter: shiki
shiki:
  theme: catppuccin-mocha
lineNumbers: false
fonts:
  provider: none
  sans: "'Space Grotesk Variable', sans-serif"
  mono: Fira Code
info: |
  ## WhatIsTracking.Me
  A privacy awareness project
drawings:
  persist: false
transition: fade
title: WhatIsTracking.Me
---

<SlideHero title="WhatIsTracking.Me" subtitle="February 28, 2026" github="https://github.com/whatistrackingme" />

<!--
- We've built an invisible infrastructure for tracking — and most of us don't notice it
-->

---

<SlideQuote quote="The most dangerous thing about surveillance is that we stop noticing it." author="Cory Doctorow" />

<!--
- Let the quote sink in — pause here
- Cory Doctorow also coined the term "enshittification"
- Privacy is a right, not a privilege
-->

---

<SlideBullets title="Agenda" :items="[
  { bold: 'What', text: '— The invisible data trail we leave behind' },
  { bold: 'How', text: '— WITM architecture and hardware' },
  { bold: 'Why', text: '— Information symmetry and the right to choose' },
]" />

<!--
- Three parts: What is happening, How we built a solution, Why it matters
- 20 minutes, interactive — phones ready
-->

---

<SlideSection title="What?" />

<!--
- Section 1: What is happening when you get scanned?
-->

---

<iframe src="https://app.staging.whatistracking.me/qr" class="absolute inset-0 w-full h-full border-none" allow="camera" />

<!--
- Open your phone camera or QR scanner
- Scan this QR code — keep your phones handy
- Watch what happens — I will see your scan in real time
-->

---

<SlideImage overlay="What Just Happened?" :images="[
  '/images/generated_2026-02-24T10-27-45_smartphone_scanning_qr_on_device_data_flow.png',
]" />

<!--
- You just shared your IP address, device type, and browser
- Your approximate location was captured via geocoding
- A timestamp was recorded to the millisecond
- All from a single, casual scan
- That simple scan just created data you can't see, control, or get back
-->

---

<SlideImage overlay="Digital Breadcrumbs" :images="[
  '/images/generated_2026-02-24T10-32-38_digital_breadcrumbs_glowing_trail.png',
]" />

<!--
- Device fingerprint: OS, screen size, language, timezone
- Network fingerprint: IP, carrier, connection type
- Behavioral fingerprint: scan time, frequency, location patterns
- Combined: a unique profile from passive interactions
-->

---

<a href="https://app.staging.whatistracking.me/scans" target="_blank" class="absolute top-4 right-4 z-10 text-white !no-underline !border-none" style="pointer-events: auto; text-decoration: none !important;">
  <carbon-launch class="text-lg" />
</a>

<iframe src="https://app.staging.whatistracking.me/scans" class="absolute inset-0 w-full h-full border-none" />

<!--
- The QR code you scanned earlier? I can see every scan.
- Real-time dashboard showing scan timestamps and locations
- All data encrypted end-to-end — the server cannot read it
-->

---

<SlideImage overlay="Your Face is a QR Code" :images="[
  '/images/generated_2026-02-25T07-16-11_trippy_close_up_portrait_of_a_person_whose_face_mo.png',
]" />

<!--
- Every scan turns your presence into data
- Your face, your location, your habits — encoded and tracked
- In the digital world, you are already a QR code
- More on this later
-->

---

<SlideImage overlay="Our Solution" subtitle="Track the Trackers" :images="[
  '/images/generated_2026-02-18T00-27-59_person_with_backpack_tablet_qr_code_walking_city_bridge.png',
]" />

<!--
- What if you could flip the script on tracking?
- Wear a QR code badge in public
- Every scan triggers a notification to your phone
- You become the observer of your own surveillance
-->

---

<SlideSection title="How?" />

<!--
- Section 2: How does WhatIsTracking.Me work under the hood?
-->

---

<SlideHowItWorks />

<!--
- Wear a QR code linked to your encrypted identity
- When someone scans it, you get a real-time notification
- Review who scanned you, when, and where — on your device
- QR code encodes an encrypted public key — not a URL
- Scanner hits the API, triggering a push notification
- Scan metadata is encrypted — only your device can read it
- No accounts, no sign-ups, no third-party tracking
-->

---

<SlideMermaidChart :quadrants="[
  { title: 'QR Generated', label: 'Client Device', description: 'Encodes an encrypted timestamp and unique identifier' },
  { title: 'Bait Taken', label: 'Real World', description: 'CCTV cameras, bots, scanners, and browsers all trigger the trap' },
  { title: 'Logged & Purged', label: 'Tracking Server', description: 'DNS and HTTP requests stored pseudoanonymously, deleted once read' },
  { title: 'Location Matching', label: 'Client Dashboard', description: 'Client aligns the decrypted timestamp with local position history' },
]" />

<!--
- Four-phase zero-knowledge pipeline
- Server never sees plaintext — only ciphertext passes through
- Push notification carries encrypted payload, not raw data
- Decryption is exclusively client-side
-->

---

<SlideDockerCompose />

<!--
- Five services: interactsh-server, interactsh-client, PostgreSQL, Rust backend, frontend
- Interactsh handles out-of-band interaction capture via DNS, HTTP, SMTP
- Rust + Axum backend with encrypted PostgreSQL payloads
- Stateless API — no sessions, no cookies, no tracking irony
- CORS disabled in production, no dev-only flags
-->

---

<div class="absolute inset-0 flex items-center justify-center p-8" style="background: var(--witm-base)">
  <img src="/images/interactsh-extension.png" class="max-w-full max-h-full object-contain" />
</div>

<!--
- Interactsh: open-source OOB interaction gathering tool by ProjectDiscovery
- Captures DNS, HTTP, and SMTP callbacks from QR code scans
- We use it as the core of our "collector" pipeline
- Our fork adds encrypted payload forwarding to the backend
- All interaction data is pseudoanonymous — purged after client retrieval
-->

---

<SlideImage overlay="Client Side" subtitle="Your Keys, Your Data" :images="[
  '/images/generated_2026-02-10T08-41-55_laptop_and_smartphone_showing_a_privacy_dashboard_.png',
]" />

<!--
- Tauri desktop app — your private key never leaves your machine
- Progressive web app for mobile — works offline
- Client-side decryption of all scan events
- Export your data anytime — full ownership, no lock-in
-->

---

<SlideImage :images="[
  { src: '/images/generated_2026-02-10T08-53-46_a_crowded_conference_hall_from_above_at_night_atte.png', label: 'London' },
  { src: '/images/generated_2026-02-18T00-46-34_birds_eye_view_of_a_crowded_event_space_at_night_w.png', label: 'Bangkok' },
  { src: '/images/generated_2026-02-18T00-46-35_overhead_shot_of_people_walking_through_a_conventi.png', label: 'Hong Kong' },
  { src: '/images/generated_2026-02-18T00-46-37_wide_angle_view_of_a_packed_auditorium_from_the_ba.png', label: 'Osaka' },
]" />

<!--
- Walked around the city with a phone displaying a QR code
- Practical concern: a phone screen is small and hard to scan
- Tested at conferences, cafes, and on public transit
- Show our travels, walking around with a phone and real examples
- Explain practical concerns of using a phone (it's small)
- Transition into the e-ink solution
-->

---

<SlideImage overlay="E-Ink Display" :images="[
  '/images/generated_2026-02-25T05-42-46_person_from_behind_wearing_a_backpack_with_a_large_prominent.png',
]" />

<!--
- Low battery — runs for weeks on a single charge
- Set it and forget it — always-on display
- Bigger and more readable than a phone screen
- E-ink solves the phone screen problem
- Inkplate hardware: affordable, open source, Arduino-compatible
- Always visible, no need to keep a phone out
-->

---

<SlideImage overlay="Inkplate 10" subtitle="by Crowd Supply" :images="[
  '/images/inkplate-10-crowdsupply.jpg',
]" />

<!--
- Inkplate 10: 9.7-inch e-paper display with ESP32
- Open-source hardware, Arduino-compatible
- Available on Crowd Supply
-->

---

<SlideImage :images="[
  '/images/generated_2026-02-25T05-47-59_person_from_behind_wearing_a_backpack_with_a_large_e_ink_qr.png',
]" />

<!--
- E-ink displays are not waterproof
- Solution: a 3D-printed weatherproof case
- Protects the display while keeping the QR code scannable
- Outdoor use means weather exposure
- 3D-printed case design is open source
- Transition into the full hardware ecosystem
-->

---

<SlideSTLViewer
  model="/models/teapot.stl"
  :wireframe="true"
/>

<div class="absolute top-8 left-0 right-0 text-center z-10">
  <h2 class="text-2xl font-bold" style="color: var(--witm-text); font-family: var(--witm-font-display)">Bespoke ASA & TPU Hopefully Waterproof Megacase</h2>
</div>

<!--
- 3D model preview of our open-source tracker design
- Printable on any consumer FDM printer
- All hardware files available on GitHub
-->

---

<SlideMaterials />

<!--
- Quick comparison: PLA is easy but brittle; PETG balances strength and printability; ASA handles UV; TPU flexes
-->

---

<div class="absolute inset-0 flex items-center justify-center" style="background: var(--witm-base)">
  <p class="text-3xl opacity-30" style="font-family: var(--witm-font-display)">[ insert photo of case here ]</p>
</div>

---

<SlideColumns title="TODOs" :items="[
  { text: 'Tauri Native apps with background location', highlight: true },
  'More efficient QR encoding',
  'NFC & Bluetooth beacon support',
  'Fingerprinting',
  'Timescale filtering on dashboard',
  'Reverse geocoding for location history',
  'Internationalization (i18n)',
  'GeoIP country-code on interactions',
  'Location heatmaps over time',
  'Add onboarding to the app itself',
  'MagSafe mount, case improvements',
  'More self-hosting options',
]" />

---

<SlideSection title="Why?" />

<!--
- Section 3: Why does this matter?
-->

---

<SlideImage overlay="Our Panopticon" subtitle="Big Brother is Watching You" :images="[
  '/images/generated_2026-02-26T14-32-30_digital_panopticon.png',
]" />

<div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 bg-black/70 backdrop-blur-sm px-5 py-2 rounded-full" style="pointer-events: auto">
  <span class="text-lg text-white/80">Learn more @ </span><a href="https://en.wikipedia.org/wiki/Panopticon" target="_blank" class="text-lg text-white/80 !no-underline !border-none" style="text-decoration: none !important">wikipedia.org/wiki/Panopticon</a>
</div>

<!--
- Designed by Jeremy Bentham in 1791 — a circular prison where a single guard can observe all inmates without them knowing if they're being watched
- The power comes not from constant surveillance, but from the possibility of it — inmates self-regulate their behaviour
- Michel Foucault used it as a metaphor for modern disciplinary societies
- The internet is the ultimate panopticon — we are always potentially observed, and we change our behaviour accordingly
- WhatIsTracking.Me flips this: instead of being the watched, you become the watcher
-->

---

<div class="absolute inset-0 flex items-center justify-center p-6" style="background: #ffffff">
  <img src="/images/panoptacon.png" class="max-w-full max-h-full object-contain" />
  <a href="https://www.irishlegal.com/articles/uk-home-secretary-dreams-of-ai-powered-panopticon" target="_blank" class="absolute bottom-4 right-4 text-sm text-black/60 !no-underline !border-none" style="text-decoration: none !important; pointer-events: auto">irishlegal.com/articles/uk-home-secretary-dreams-of-ai-powered-panopticon</a>
</div>

<!--
- UK Home Secretary openly described her vision of an AI-powered panopticon — constant state surveillance using technology
- This isn't science fiction — governments are actively pursuing total surveillance
- Source: irishlegal.com/articles/uk-home-secretary-dreams-of-ai-powered-panopticon
-->

---

<SlideImage overlay="Mapping the Tracking" subtitle="What we found wearing QR codes in public" :images="[
  '/images/generated_2026-02-18T00-48-05_abstract_heatmap_visualization_showing_dense_clust.png',
]" />

<!--
- Worn at conferences, cafes, and public transit
- Scans detected from systems we did not expect
- QR codes readable from surprising distances
- Automated scanners outnumbered human scanners
-->

---

<div class="absolute inset-0 flex items-center justify-center" style="background: var(--witm-base)">
  <p class="text-3xl opacity-30" style="font-family: var(--witm-font-display)">[ insert real captures here ]</p>
</div>

---

<SlideImage overlay="Information Symmetry" subtitle="The freedom to make an informed choice" :images="[
  '/images/generated_2026-02-25T05-22-14_person_standing_at_a_fork_in_the_road_between_two_convenienc.png',
]" />

<!--
- Privacy is about choice, not secrecy
- One path: open, transparent, user-controlled
- Other path: surveillance, control, no consent
- WhatIsTracking.Me gives you the power to choose
- Nothing to hide, nothing to fear — sign off
-->

---

<div class="absolute inset-0 flex flex-col items-center justify-center px-16" style="background: var(--witm-base)">
  <p class="absolute top-12 text-lg text-primary">This presentation was made possible by...</p>
  <div class="grid grid-cols-4 gap-x-20 gap-y-14">
    <div class="flex flex-col items-center gap-4">
      <carbon-presentation-file class="text-5xl" />
      <span class="text-sm">Slidev</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <carbon-chemistry class="text-5xl" />
      <span class="text-sm">SMILES Drawer</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-threedotjs class="text-5xl" />
      <span class="text-sm">Three.js</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-vuedotjs class="text-5xl" />
      <span class="text-sm">Vue 3</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-vite class="text-5xl" />
      <span class="text-sm">Vite</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-typescript class="text-5xl" />
      <span class="text-sm">TypeScript</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-claude class="text-5xl" />
      <span class="text-sm">Claude Code</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-googlegemini class="text-5xl" />
      <span class="text-sm">Gemini Imagen</span>
    </div>
  </div>
  <p class="absolute bottom-12 text-lg text-primary italic">...and vibe-coded end-to-end!</p>
</div>

<!--
- Meta moment: even this talk was vibe coded — Claude Code, Slidev, Gemini, and GitHub Actions
-->

---

<SlideImage overlay="Let's Discuss" :images="[
  '/images/generated_2026-02-10T08-41-41_dark_moody_cityscape_at_night_with_glowing_qr_code.png',
]" />

<!--
- Let's discuss
-->

---

<SlideColumns title="Discussion Questions" :items="[
  'Should passive scanning require consent?',
  'Why do we lock doors but not data?',
  'Can self-surveillance change how we think about privacy?',
  'Is privacy about secrecy — or about choice?',
  'What would you learn from wearing a QR code for a week?',
  'Should physical spaces have the same consent models as cookies?',
  'How do we make tracking visible without normalizing it?',
  'What role should open source play in privacy tools?',
]" />

<!--
- "Privacy is not about having something to hide. It is about having the right to choose what you share." — Edward Snowden
-->

---

<SlideThankYou />

<!--
- Thank you for listening
- The QR code links to our GitHub — open source, no tracking
- Star the repo, open issues, contribute
-->
