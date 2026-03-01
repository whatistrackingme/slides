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

<SlideBullets :items="[
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

<div class="absolute inset-0 iframe-witm">
  <iframe src="https://app.staging.whatistracking.me/qr" class="w-full h-full border-none" allow="camera" />
  <div class="iframe-witm-placeholder">[ redacted screenshot ]</div>
</div>

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
- You shared IP address, device type, browser, and approximate location
- A timestamp was recorded to the millisecond
- Data you can't see, control, or get back
-->

---

<SlideImage overlay="Digital Breadcrumbs" :images="[
  '/images/generated_2026-02-24T10-32-38_digital_breadcrumbs_glowing_trail.png',
]" />

<!--
- Device fingerprint: OS, screen size, language, timezone
- Network fingerprint: IP, carrier, connection type
- Behavioral fingerprint: scan time, frequency, location patterns
-->

---

<SlideImage overlay="Your Face is a QR Code" :images="[
  '/images/generated_2026-02-25T07-16-11_trippy_close_up_portrait_of_a_person_whose_face_mo.png',
]" />

<!--
- Every scan turns your presence into data
- Your face, your location, your habits — encoded and tracked
- In the digital world, you are already a QR code
-->

---

<div class="absolute inset-0 iframe-witm">
  <a href="https://app.staging.whatistracking.me/scans" target="_blank" class="absolute top-4 right-4 z-10 text-white !no-underline !border-none" style="pointer-events: auto; text-decoration: none !important;">
    <carbon-launch class="text-lg" />
  </a>
  <iframe src="https://app.staging.whatistracking.me/scans" class="w-full h-full border-none" />
  <div class="iframe-witm-placeholder">[ redacted screenshot ]</div>
</div>

<!--
- The QR code you scanned earlier? I can see every scan.
- Real-time dashboard showing scan timestamps and locations
- All data encrypted end-to-end — the server cannot read it
-->

---

<SlideSection title="How?" />

<!--
- Section 2: How does WhatIsTracking.Me work under the hood?
-->

---

<SlideImage overlay="Our Experiment" subtitle="Tracking the Trackers" :images="[
  '/images/generated_2026-02-18T00-27-59_person_with_backpack_tablet_qr_code_walking_city_bridge.png',
]" />

<!--
- Flip the script: wear a QR code badge in public
- Every scan triggers a notification to your phone
- You become the observer of your own surveillance
-->

---

<SlideHowItWorks />

<!--
- QR encodes encrypted public key, not a URL
- Scan metadata encrypted — only your device can read it
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
- Server never sees plaintext — only ciphertext
- Decryption is exclusively client-side
-->

---

<div class="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-4" style="background: var(--witm-base)">
  <div class="relative rounded-3xl overflow-hidden">
    <iframe src="https://app.staging.whatistracking.me/map?loc=22.307%2C114.166%2C22.315%2C114.174&fullscreen=1" class="w-full h-full border-none" />
    <span class="absolute bottom-2 right-2 bg-black/70 text-lg font-bold px-3 py-1.5 rounded" style="color: #a6e3a1">Hong Kong</span>
  </div>
  <div class="relative rounded-3xl overflow-hidden">
    <iframe src="https://app.staging.whatistracking.me/map?loc=34.667%2C135.492%2C34.697%2C135.508&fullscreen=1" class="w-full h-full border-none" />
    <span class="absolute bottom-2 right-2 bg-black/70 text-lg font-bold px-3 py-1.5 rounded" style="color: #a6e3a1">Osaka</span>
  </div>
  <div class="relative rounded-3xl overflow-hidden">
    <iframe src="https://app.staging.whatistracking.me/map?loc=18.781%2C98.967%2C18.803%2C98.995&fullscreen=1" class="w-full h-full border-none" />
    <span class="absolute bottom-2 right-2 bg-black/70 text-lg font-bold px-3 py-1.5 rounded" style="color: #a6e3a1">Chiang Mai</span>
  </div>
  <div class="relative rounded-3xl overflow-hidden">
    <iframe src="https://app.staging.whatistracking.me/map?loc=51.5295%2C-0.148%2C51.5405%2C-0.134&fullscreen=1" class="w-full h-full border-none" />
    <span class="absolute bottom-2 right-2 bg-black/70 text-lg font-bold px-3 py-1.5 rounded" style="color: #a6e3a1">London</span>
  </div>
</div>

<!--
- Live maps showing real scan data from four cities
- Walked around with a phone displaying a QR code
- Problem: phone screens are small and hard to scan
-->

---

<SlideImage overlay="E-Ink Display" :images="[
  '/images/generated_2026-02-25T05-42-46_person_from_behind_wearing_a_backpack_with_a_large_prominent.png',
]" />

<!--
- Runs for weeks on a single charge
- Always-on, bigger, more readable than a phone
- Inkplate: affordable, open source, Arduino-compatible
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
- 3D-printed weatherproof case, open source design
- Protects display while keeping QR scannable
-->

---

<SlideSTLViewer
  model="/models/witm_case.stl"
/>

<div class="absolute top-8 left-0 right-0 text-center z-10">
  <h2 class="text-2xl font-bold" style="color: var(--witm-text); font-family: var(--witm-font-display)">Bespoke <span style="color: #a6e3a1">ASA</span> & <span style="color: #fab387">TPU</span> Hopefully Waterproof Megacase</h2>
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

<div class="absolute inset-0 flex items-center justify-center p-6" style="background: #54545a">
  <img src="/images/slicer_screenshot.png" class="max-h-full max-w-full object-contain" />
</div>

<!--
- BambuStudio slicer view showing all 4 print plates
- Top-left: TPU gaskets, top-right: small ASA parts, bottom: main case halves
-->

---

<div class="absolute inset-0" style="background: var(--witm-base)">
  <img src="/images/printing.jpg" class="w-full h-full object-cover" />
</div>

<!--
- 3D printing in progress
-->

---

<div class="absolute inset-0">
  <img src="/images/qr_walking.jpg" class="w-full h-full object-cover" />
</div>

---

<SlideColumns title="Technical TODOs" :items="[
  { text: 'Tauri Native apps with background location', highlight: true },
  'More efficient QR encoding',
  'NFC & Bluetooth beacon support',
  { text: 'Fingerprinting', highlight: true },
  'Timescale filtering on dashboard',
  'Internationalization (i18n)',
  'GeoIP country-code on interactions',
  'Location heatmaps over time',
  'Add onboarding to the app itself',
  'MagSafe mount, case improvements',
  'More self-hosting options',
  'RWIR - ReWrite in Rust',
  'Collector obfuscation (legit-looking random domains)',
  'E2E encryption for interactions',
  'Energy saver mode',
  'Backlight e-ink display for night mode',
  'Research QR reading optics',
]" />

---

<SlideSection title="Why?" />

<!--
- Section 3: Why does this matter?
-->

---

<iframe src="https://en.wikipedia.org/wiki/Panopticon" class="absolute inset-0 w-full h-full border-none" />

<!--
- Designed by Jeremy Bentham (British philosopher) in 1791 — a prison where inmates self-regulate because they might be watched
- The internet and surveillance capitalism are its modern culmination
- Of course, this is a conspiracy theory that only the paranoid believe...
-->

---

<div class="absolute inset-0 flex items-center justify-center p-28" style="background: #ffffff">
  <div class="grid grid-cols-2 gap-16 w-full h-full">
    <img src="/images/pan0.png" class="w-full h-full object-contain" />
    <img src="/images/pan1.png" class="w-full h-full object-contain" />
  </div>
  <a href="https://www.irishlegal.com/articles/uk-home-secretary-dreams-of-ai-powered-panopticon" target="_blank" class="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-black/60 whitespace-nowrap !no-underline !border-none" style="text-decoration: none !important; pointer-events: auto">irishlegal.com/articles/uk-home-secretary-dreams-of-ai-powered-panopticon</a>
</div>

<!--
- UK Home Secretary openly described her vision of an AI-powered panopticon
- This isn't science fiction — governments are actively pursuing it
- TODO: replace with better newspaper clipping
-->

---

<SlideImage overlay="Mapping the Tracking" :images="[
  '/images/generated_2026-02-18T00-48-05_abstract_heatmap_visualization_showing_dense_clust.png',
]" />

<!--
- Scans detected from systems we did not expect
- QR codes readable from surprising distances
- Automated scanners outnumbered human scanners
-->

---

<div class="absolute inset-0">
  <iframe src="https://app.staging.whatistracking.me/map?loc=34.6988%2C135.4934%2C34.7063%2C135.4974&fullscreen=1" class="w-full h-full border-none" />
</div>

---

<SlideImage overlay="Information Symmetry" subtitle="The freedom to make an informed choice" :images="[
  '/images/generated_2026-02-25T05-22-14_person_standing_at_a_fork_in_the_road_between_two_convenienc.png',
]" />

<!--
- Privacy is about choice, not secrecy
- Information asymmetry: they know everything, you know nothing
- WITM flips the script — you become the observer
-->

---

<div class="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-4" style="background: var(--witm-base)">
  <a href="https://www.bbc.com/news/articles/c62rexy9y3no" target="_blank" class="relative rounded-3xl overflow-hidden !no-underline !border-none">
    <img src="/images/generated_2026-02-28T04-35-52_dark_moody_hotel_room_interior_with_a_small_hidden_camera_le.png" class="w-full h-full object-cover" />
    <span class="absolute top-2 left-1/2 -translate-x-1/2 bg-black/70 text-lg font-bold px-3 py-1.5 rounded" style="color: #a6e3a1">Detect Spy Cameras</span>
  </a>
  <div class="relative rounded-3xl overflow-hidden">
    <img src="/images/generated_2026-02-28T04-36-32_social_media_viral_spread_visualization_glowing_network_of.png" class="w-full h-full object-cover" />
    <span class="absolute top-2 left-1/2 -translate-x-1/2 bg-black/70 text-lg font-bold px-3 py-1.5 rounded" style="color: #a6e3a1">Track Viral Spread</span>
  </div>
  <div class="relative rounded-3xl overflow-hidden">
    <img src="/images/generated_2026-02-28T04-37-00_corporate_building_facade_with_visible_security_cameras_and.png" class="w-full h-full object-cover" />
    <span class="absolute top-2 left-1/2 -translate-x-1/2 bg-black/70 text-lg font-bold px-3 py-1.5 rounded" style="color: #a6e3a1">Audit Businesses</span>
  </div>
  <div class="relative rounded-3xl overflow-hidden">
    <img src="/images/generated_2026-02-28T04-37-23_research_laboratory_with_holographic_data_visualizations_sho.png" class="w-full h-full object-cover" />
    <span class="absolute top-2 left-1/2 -translate-x-1/2 bg-black/70 text-lg font-bold px-3 py-1.5 rounded" style="color: #a6e3a1">Research & Policy</span>
  </div>
</div>

<!--
- Four concrete use cases — each solves a real problem
- Spy cameras: BBC exposed 180+ hotel cameras in China
- Personal safety to academic research
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
  'If you have nothing to hide, why do you close the bathroom door?',
  'Would you accept a stranger following you and taking notes?',
  'Why do we lock doors but leave our data wide open?',
  'Who profits from the data you generate just by existing?',
  'Should someone own a photo of you walking in public?',
  'Is privacy about secrecy — or about choice?',
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
