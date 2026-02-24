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
---

<div class="absolute inset-0" style="background: linear-gradient(to bottom right, #111113, #161618, #111113)">
  <!-- Radial glow -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full pointer-events-none animate-pulse" style="box-shadow: 0 0 500px 300px rgba(166,227,161,0.15)" />
  <!-- Logo watermark -->
  <img src="/images/logo-witm.svg" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none object-contain" style="width: 90%; height: 90%; opacity: 0.12" />
  <!-- Grid pattern -->
  <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(#cdddd2 1px, transparent 1px), linear-gradient(90deg, #cdddd2 1px, transparent 1px); background-size: 4rem 4rem; opacity: 0.06" />
  <!-- Content -->
  <div class="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-8">
    <h1 class="text-7xl font-extrabold uppercase tracking-wider leading-tight hero-fade-in" style="color: #a6e3a1; font-family: 'Space Grotesk Variable', sans-serif">
      What Is Tracking Me?
    </h1>
    <p class="absolute bottom-10 text-xl uppercase tracking-wide hero-fade-in" style="color: #cdddd2; font-family: var(--witm-font-body); animation-delay: 0.15s">
      February 28, 2026
    </p>
    <div class="absolute bottom-6 right-6 flex gap-2 hero-fade-in" style="animation-delay: 0.4s">
      <a href="https://github.com/whatistrackingme" target="_blank" alt="GitHub"
        class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
        <carbon-logo-github />
      </a>
    </div>
  </div>
</div>

<!--
- We've built an invisible infrastructure for tracking — and most of us don't notice it
-->

---

<SlideBullets title="Introduction" :items="[
  'A 20-minute talk about invisible surveillance',
  'You will participate — phones ready',
  'By the end, you will see tracking differently',
]" />

<!--
- Frame the talk: short, interactive, perspective-shifting
-->

---

<SlideBullets title="Live Scan" :items="[
  'Open your phone camera or QR scanner',
  'Scan the code on the next slide',
  'Watch what happens — I will see your scan in real time',
]" />

<!--
- Prep the audience before the interactive QR scan moment
-->

---

<iframe src="https://app.staging.whatistracking.me/qr" class="absolute inset-0 w-full h-full border-none" allow="camera" />

<!--
- Pull out your phones and scan this QR code — keep them handy
-->

---

<SlideBullets title="The Scan Experience" :items="[
  'You just shared your IP address, device type, and browser',
  'Your approximate location was captured via geocoding',
  'A timestamp was recorded to the millisecond',
  'All from a single, casual scan',
]" />

<!--
- Reveal what data was just collected from the audience
-->

---

<SlideImage overlay="What just happened?" :images="[
  '/images/generated_2026-02-24T10-27-45_smartphone_scanning_qr_on_device_data_flow.png',
]" />

<!--
- That simple scan just created data you can't see, control, or get back
-->

---

<SlideBullets title="Data Trail" :items="[
  'Device fingerprint: OS, screen size, language, timezone',
  'Network fingerprint: IP, carrier, connection type',
  'Behavioral fingerprint: scan time, frequency, location patterns',
  'Combined: a unique profile from passive interactions',
]" />

<!--
- Detail the specific data points a scan reveals
-->

---

<SlideImage overlay="Digital breadcrumbs" :images="[
  '/images/generated_2026-02-24T10-32-38_digital_breadcrumbs_glowing_trail.png',
]" />

<!--
- Every physical interaction — menus, badges, cameras — silently becomes digital data
-->

---

<SlideBullets title="The Problem" :items="[
  'Every QR scan shares your location, device, and identity',
  'Most people never see the data trail they leave behind',
  'Physical spaces are becoming digital surveillance zones',
  'There is no consent model for passive scanning',
]" />

<!--
- Four core problems that WhatIsTrackingMe aims to make visible
-->

---

<SlideBullets title="Problem Context" :items="[
  '2.5 billion QR scans expected worldwide in 2026',
  'Menus, payments, check-ins — all silently logged',
  'No regulation requires disclosure of scan data collection',
  'Your offline behavior is being digitized without consent',
]" />

<!--
- Ground the problem in real-world scale before introducing the solution
-->

---

<SlideParagraph
  title="Our Approach"
  text="WhatIsTrackingMe flips the script on digital tracking. Instead of hiding from surveillance, we make it visible. Wear a QR code, and when someone scans it, you get notified — turning passive tracking into an active, transparent experience."
/>

<!--
- A brief summary of the project philosophy
-->

---

<SlideBullets title="Approach Context" :items="[
  'Self-surveillance as a privacy awareness tool',
  'Open source — hardware, software, and data',
  'Privacy-preserving by design, not by policy',
]" />

<!--
- Three pillars: awareness through experience, openness, and architecture
-->

---

<SlideBullets title="The WhatIsTrackingMe Concept" :items="[
  'What if you could flip the script on tracking?',
  'Wear a QR code badge in public',
  'Every scan triggers a notification to your phone',
  'You become the observer of your own surveillance',
]" />

<!--
- Introduce the core idea before the visual of wearing the tracker
-->

---

<SlideImage overlay="Wear the tracker" :images="[
  '/images/generated_2026-02-18T00-27-59_person_with_backpack_tablet_qr_code_walking_city_bridge.png',
]" />

<!--
- WhatIsTrackingMe: wear a QR code and find out who scans you, when, and where
-->

---

<SlideBullets title="How It Works Overview" :items="[
  'Wear a QR code linked to your encrypted identity',
  'When someone scans it, you get a real-time notification',
  'Review who scanned you, when, and where — on your device',
]" />

<!--
- Simple three-step explanation before the visual diagram
-->

---

<SlideImage overlay="How it works" :images="[
  { src: '/images/generated_2026-02-10T08-41-42_close_up_of_a_persons_hand_holding_a_smartphone_sc.png', label: 'Scan' },
  { src: '/images/generated_2026-02-18T00-46-15_smartphone_on_a_dark_surface_with_a_bright_notific.png', label: 'Notify' },
  { src: '/images/generated_2026-02-10T08-41-55_laptop_and_smartphone_showing_a_privacy_dashboard_.png', label: 'Dashboard' },
]" />

<!--
- Three-step overview: scan, notify, review — all on your own device
-->

---

<SlideBullets title="How It Works" :items="[
  'QR code encodes an encrypted public key — not a URL',
  'Scanner hits the API, triggering a push notification',
  'Scan metadata is encrypted — only your device can read it',
  'No accounts, no sign-ups, no third-party tracking',
]" />

<!--
- Technical mechanics before the Scan · Track · Notify visual
-->

---

<SlideImage overlay="Scan · Track · Notify" :images="[
  '/images/generated_2026-02-18T00-46-18_persons_hand_holding_a_phone_receiving_a_push_noti.png',
]" />

<!--
- Three steps: wear a QR code, someone scans it, you get notified in real time
-->

---

<SlideBullets title="Live Demo Setup" :items="[
  'The QR code you scanned earlier? I can see every scan.',
  'Real-time dashboard showing scan timestamps and locations',
  'All data encrypted end-to-end — the server cannot read it',
]" />

<!--
- Set up the live demo reveal
-->

---

<a href="https://app.staging.whatistracking.me" target="_blank" class="absolute top-4 right-4 z-10 text-white !no-underline !border-none" style="pointer-events: auto; text-decoration: none !important;">
  <carbon-launch class="text-lg" />
</a>

<iframe src="https://app.staging.whatistracking.me" class="absolute inset-0 w-full h-full border-none" />

<!--
- Live demo: the QR code you scanned earlier — I can see exactly when you did it
-->

---

<SlideBullets title="Architecture Overview" :items="[
  'Ed25519 key pair generated on your device at setup',
  'Server stores only ciphertext — never plaintext',
  'Decryption happens exclusively on the client',
  'Zero-knowledge design: we cannot read your data, even if compelled',
]" />

<!--
- Transition from demo to the privacy-preserving architecture
-->

---

<SlideImage :images="['/images/generated_2026-02-18_stylized_idea_diagram.png']" />

<!--
- Privacy by architecture: the server stores data it cannot read — decryption only happens on your device
-->

---

<SlideBullets title="Backend Deep-Dive" :items="[
  'Rust + Axum for type-safe, high-performance API',
  'PostgreSQL with encrypted payloads — no plaintext columns',
  'Push notifications via Web Push protocol',
  'Stateless API — no sessions, no cookies, no tracking irony',
]" />

<!--
- Technical stack details before the Rust visual
-->

---

<SlideImage overlay="Rust powers the backend" :images="[
  '/images/generated_2026-02-10T08-57-00_a_sequence_diagram_showing_the_flow_between_four_e.png',
  '/images/generated_2026-02-18T00-46-51_glowing_pipeline_of_encrypted_data_packets_moving_.png',
  '/images/generated_2026-02-18T00-46-53_abstract_representation_of_encrypted_data_flowing_.png',
  '/images/generated_2026-02-18T00-46-55_visualization_of_an_api_request_flowing_through_mi.png',
]" />

<!--
- Rust/Axum backend where the server never sees plaintext — only your device can decrypt
-->

---

<SlideBullets title="Client-Side Privacy" :items="[
  'Tauri desktop app — your private key never leaves your machine',
  'Progressive web app for mobile — works offline',
  'Client-side decryption of all scan events',
  'Export your data anytime — full ownership, no lock-in',
]" />

<!--
- Client architecture before the "Your device, your data" visual
-->

---

<SlideImage overlay="Your device, your data" :images="[
  '/images/generated_2026-02-10T08-41-55_laptop_and_smartphone_showing_a_privacy_dashboard_.png',
]" />

<!--
- Tauri app keeps your private key local — we literally cannot read your data
-->

---

<SlideBullets title="Hardware / Wearables" :items="[
  'Open hardware designs — 3D-printable badge and lanyard clips',
  'E-ink displays (Inkplate) for dynamic QR codes',
  'Works with any standard QR code printed on any material',
  'Print one tonight with a home 3D printer',
]" />

<!--
- Hardware options before the 3D printing visual
-->

---

<SlideImage overlay="Print your own tracker" :images="[
  '/images/generated_2026-02-10T08-41-58_3d_printer_creating_a_small_wearable_badge_with_a_.png',
  '/images/generated_2026-02-18T00-47-29_collection_of_freshly_3d_printed_qr_code_badges_an.png',
  '/images/generated_2026-02-18T00-47-30_close_up_of_a_3d_printer_extruder_head_printing_a_.png',
  '/images/generated_2026-02-18T00-47-33_3d_printer_in_action_creating_a_small_geometric_we.png',
]" />

<!--
- Open hardware: 3D-printed wearables and e-ink displays — print your own tonight
-->

---

<SlideMaterials />

<!--
- Quick comparison: PLA is easy but brittle; PETG balances strength and printability; ASA handles UV; TPU flexes
-->

---

<SlideBullets title="Real-World Applications" :items="[
  'Business ranking: which stores scan your badge most?',
  'Conference tracking: who scanned your lanyard and when?',
  'Compliance auditing: prove scan activity with timestamps',
  'Personal dashboards: understand your own tracking footprint',
]" />

<!--
- Concrete use cases before the "Why it matters" visual
-->

---

<SlideImage overlay="Why it matters" :images="[
  '/images/generated_2026-02-10T08-53-46_a_crowded_conference_hall_from_above_at_night_atte.png',
  '/images/generated_2026-02-18T00-46-34_birds_eye_view_of_a_crowded_event_space_at_night_w.png',
  '/images/generated_2026-02-18T00-46-35_overhead_shot_of_people_walking_through_a_conventi.png',
  '/images/generated_2026-02-18T00-46-37_wide_angle_view_of_a_packed_auditorium_from_the_ba.png',
]" />

<!--
- Real applications: business ranking, compliance auditing, research, and personal dashboards
-->

---

<SlideBullets title="Field Test Results" :items="[
  'Worn at conferences, cafes, and public transit',
  'Scans detected from systems we did not expect',
  'QR codes readable from surprising distances',
  'Automated scanners outnumbered human scanners',
]" />

<!--
- Real-world testing insights before the data visualization
-->

---

<SlideImage overlay="More tracking than you think" :images="[
  '/images/generated_2026-02-10T08-42-02_data_visualization_showing_unexpectedly_high_numbe.png',
  '/images/generated_2026-02-18T00-48-05_abstract_heatmap_visualization_showing_dense_clust.png',
  '/images/generated_2026-02-18T00-48-05_dramatic_glowing_bar_chart_with_surprisingly_tall_.png',
  '/images/generated_2026-02-18T00-48-11_holographic_style_data_dashboard_floating_in_dark_.png',
]" />

<!--
- Real-world testing revealed far more tracking than anyone expected — from systems we didn't even know were scanning
-->

---

<SlideQuote
  quote="Privacy is not about having something to hide. It is about having the right to choose what you share."
  author="Edward Snowden"
/>

<!--
- Framing the ethical foundation of the project
-->

---

<SlideBullets title="Physical vs Digital Privacy" :items="[
  'You lock your front door every day',
  'You shred documents with your address on them',
  'But you scan unknown QR codes without a second thought',
  'Digital privacy habits lag decades behind physical ones',
]" />

<!--
- Build the contrast before the visual metaphor
-->

---

<SlideImage overlay="We lock doors, not data" :images="[
  '/images/generated_2026-02-10T08-53-36_a_person_standing_in_a_doorway_looking_out_at_a_ci.png',
]" />

<!--
- We instinctively protect physical privacy but casually give away our digital presence
-->

---

<SlideBullets title="Ethics & Consent" :items="[
  'Photography requires visible intent — scanning does not',
  'No legal framework treats passive QR scanning as surveillance',
  'Consent models exist for cookies but not for physical spaces',
  'Should scanning someone require the same consent as photographing them?',
]" />

<!--
- Frame the ethical question before the surveillance visual
-->

---

<SlideImage overlay="Should scanning require consent?" :images="[
  '/images/generated_2026-02-10T08-42-04_person_standing_in_a_public_space_with_visible_lig.png',
  '/images/generated_2026-02-18T00-48-20_person_standing_under_a_surveillance_camera_spotli.png',
  '/images/generated_2026-02-18T00-48-24_lone_figure_in_a_public_space_surrounded_by_subtle.png',
  '/images/generated_2026-02-18T00-48-29_person_walking_through_a_public_corridor_with_came.png',
]" />

<!--
- Photography is visible; digital scanning is invisible — should it require the same consent?
-->

---

<SlideBullets title="Future Roadmap" :items="[
  'Native mobile apps with background scan detection',
  'NFC and Bluetooth beacon support',
  'AI-powered scan pattern analysis',
  'Smart glasses integration for real-time awareness',
]" />

<!--
- Roadmap items before the futuristic visual
-->

---

<SlideImage overlay="What comes next" :images="[
  '/images/generated_2026-02-17T12-46-14_futuristic_privacy_technology_concept_on_dark_back.png',
  '/images/generated_2026-02-18T00-48-39_futuristic_wearable_devices_including_smart_glasse.png',
  '/images/generated_2026-02-18T00-48-42_next_generation_privacy_technology_concept_with_ho.png',
  '/images/generated_2026-02-18T00-48-48_array_of_futuristic_privacy_devices_including_nfc_.png',
]" />

<!--
- Coming next: mobile apps, AI scan detection, NFC/Bluetooth, and smart glasses integration
-->

---

<SlideBullets title="Open Source & Community" :items="[
  'Everything is open source — code, hardware designs, and data schemas',
  'MIT licensed — use it, fork it, improve it',
  'Contributions welcome: Rust, TypeScript, 3D printing, research',
  'github.com/whatistrackingme',
]" />

<!--
- Community pitch before the collaboration visual
-->

---

<SlideImage overlay="Make tracking visible" :images="[
  '/images/generated_2026-02-10T08-42-04_open_source_community_concept_diverse_hands_reachi.png',
  '/images/generated_2026-02-18T00-48-57_multiple_hands_holding_different_devices_all_showi.png',
  '/images/generated_2026-02-18T00-48-58_diverse_group_of_people_gathered_around_a_glowing_.png',
  '/images/generated_2026-02-18T00-49-08_collaborative_workspace_with_multiple_screens_show.png',
]" />

<!--
- Try it, contribute, spread awareness — everything is open source on GitHub
-->

---

<SlideBullets title="Closing / Call to Action" :items="[
  'Print a badge and wear it for a week',
  'Check the dashboard — you will be surprised',
  'Star the repo, open an issue, submit a PR',
  'Start a conversation about physical-space privacy',
]" />

<!--
- Concrete next steps before the discussion slide
-->

---

<div class="absolute inset-0 flex flex-col items-center justify-center px-16" style="background: var(--witm-base)">
  <div class="grid grid-cols-4 gap-x-20 gap-y-14">
    <div class="flex flex-col items-center gap-4">
      <simple-icons-claude class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">Claude Code</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <carbon-presentation-file class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">Slidev</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-vuedotjs class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">Vue 3</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-vite class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">Vite</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-typescript class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">TypeScript</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-googlegemini class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">Gemini Imagen</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <carbon-chemistry class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">SMILES Drawer</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-githubpages class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">GitHub Pages</span>
    </div>
  </div>
  <p class="absolute bottom-12 text-lg" style="color: var(--witm-text)">This presentation was vibe coded end-to-end</p>
</div>

<!--
- Meta moment: even this talk was vibe coded — Claude Code, Slidev, Gemini, and GitHub Actions
-->

---

<SlideImage overlay="Let's discuss" :images="[
  '/images/generated_2026-02-10T08-41-41_dark_moody_cityscape_at_night_with_glowing_qr_code.png',
]" />

<!--
- Let's discuss
-->
