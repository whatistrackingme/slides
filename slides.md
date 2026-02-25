---
theme: default
highlighter: shiki
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

<SlideBullets title="Agenda" :items="[
  'A 20-minute talk about invisible surveillance',
  'You will participate — phones ready',
  'By the end, you will see tracking differently',
]" />

<!--
- Frame the talk: short, interactive, perspective-shifting
- Three parts: What? How? Why?
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

<SlideImage overlay="The Problem" subtitle="A Global Dragnet" :images="[
  '/images/generated_2026-02-25T04-42-01_a_dark_omniscient_surveillance_concept_a_massive_t.png',
]" />

<!--
- Every QR scan shares your location, device, and identity
- Most people never see the data trail they leave behind
- No regulation requires disclosure of scan data collection
- Your offline behavior is being digitized without consent
- 2.5 billion QR scans expected worldwide in 2026
- Menus, payments, check-ins — all silently logged
- Physical spaces are becoming digital surveillance zones
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

<SlideImage overlay="How It Works" :images="[
  { src: '/images/generated_2026-02-10T08-41-42_close_up_of_a_persons_hand_holding_a_smartphone_sc.png', label: 'Scan' },
  { src: '/images/generated_2026-02-18T00-46-15_smartphone_on_a_dark_surface_with_a_bright_notific.png', label: 'Notify' },
  { src: '/images/generated_2026-02-10T08-41-55_laptop_and_smartphone_showing_a_privacy_dashboard_.png', label: 'Dashboard' },
]" />

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

<SlideImage :images="['/images/generated_2026-02-18_stylized_idea_diagram.png']" />

<!--
- Ed25519 key pair generated on your device at setup
- Server stores only ciphertext — never plaintext
- Decryption happens exclusively on the client
- Zero-knowledge design: we cannot read your data, even if compelled
-->

---

<SlideImage overlay="Server Side" :images="[
  '/images/generated_2026-02-10T08-57-00_a_sequence_diagram_showing_the_flow_between_four_e.png',
  '/images/generated_2026-02-18T00-46-51_glowing_pipeline_of_encrypted_data_packets_moving_.png',
  '/images/generated_2026-02-18T00-46-53_abstract_representation_of_encrypted_data_flowing_.png',
  '/images/generated_2026-02-18T00-46-55_visualization_of_an_api_request_flowing_through_mi.png',
]" />

<!--
- Rust + Axum for type-safe, high-performance API
- PostgreSQL with encrypted payloads — no plaintext columns
- Push notifications via Web Push protocol
- Stateless API — no sessions, no cookies, no tracking irony
-->

---

<SlideImage overlay="Client Side" :images="[
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

<SlideImage overlay="Solution: E-Ink Display" :images="[
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

<SlideImage overlay="New Problem: Rain" :images="[
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

<!--
- 3D model preview of our open-source tracker design
- Printable on any consumer FDM printer
- All hardware files available on GitHub
-->

---

<SlideImage overlay="Print Your Own Tracker" :images="[
  '/images/generated_2026-02-10T08-41-58_3d_printer_creating_a_small_wearable_badge_with_a_.png',
  '/images/generated_2026-02-18T00-47-29_collection_of_freshly_3d_printed_qr_code_badges_an.png',
  '/images/generated_2026-02-18T00-47-30_close_up_of_a_3d_printer_extruder_head_printing_a_.png',
  '/images/generated_2026-02-18T00-47-33_3d_printer_in_action_creating_a_small_geometric_we.png',
]" />

<!--
- Open hardware designs — 3D-printable badge and lanyard clips
- E-ink displays (Inkplate) for dynamic QR codes
- Works with any standard QR code printed on any material
- Print one tonight with a home 3D printer
-->

---

<SlideMaterials />

<!--
- Quick comparison: PLA is easy but brittle; PETG balances strength and printability; ASA handles UV; TPU flexes
-->

---

<SlideSection title="Why?" />

<!--
- Section 3: Why does this matter?
-->

---

<SlideImage overlay="Mapping the Tracking" :images="[
  '/images/generated_2026-02-18T00-48-05_abstract_heatmap_visualization_showing_dense_clust.png',
]" />

<!--
- Worn at conferences, cafes, and public transit
- Scans detected from systems we did not expect
- QR codes readable from surprising distances
- Automated scanners outnumbered human scanners
-->

---

<SlideImage overlay="Freedom to Choose" :images="[
  '/images/generated_2026-02-25T05-22-14_person_standing_at_a_fork_in_the_road_between_two_convenienc.png',
]" />

<!--
- Privacy is about choice, not secrecy
- One path: open, transparent, user-controlled
- Other path: surveillance, control, no consent
- WhatIsTracking.Me gives you the power to choose
-->

---

<SlideParagraph
  title="Our Approach"
  text="WhatIsTracking.Me flips the script on digital tracking. Instead of hiding from surveillance, we make it visible. Wear a QR code, and when someone scans it, you get notified — turning passive tracking into an active, transparent experience."
/>

<!--
- Self-surveillance as a privacy awareness tool
- Open source — hardware, software, and data
- Privacy-preserving by design, not by policy
-->

---

<SlideImage overlay="We Lock Doors, Not Data" :images="[
  '/images/generated_2026-02-10T08-53-36_a_person_standing_in_a_doorway_looking_out_at_a_ci.png',
]" />

<!--
- "Privacy is not about having something to hide. It is about having the right to choose what you share." — Edward Snowden
- You lock your front door every day
- You shred documents with your address on them
- But you scan unknown QR codes without a second thought
- Digital privacy habits lag decades behind physical ones
-->

---

<SlideImage overlay="Should Scanning Require Consent?" :images="[
  '/images/generated_2026-02-10T08-42-04_person_standing_in_a_public_space_with_visible_lig.png',
  '/images/generated_2026-02-18T00-48-20_person_standing_under_a_surveillance_camera_spotli.png',
  '/images/generated_2026-02-18T00-48-24_lone_figure_in_a_public_space_surrounded_by_subtle.png',
  '/images/generated_2026-02-18T00-48-29_person_walking_through_a_public_corridor_with_came.png',
]" />

<!--
- Photography requires visible intent — scanning does not
- No legal framework treats passive QR scanning as surveillance
- Consent models exist for cookies but not for physical spaces
- Should scanning someone require the same consent as photographing them?
-->

---

<SlideImage overlay="Make Tracking Visible" :images="[
  '/images/generated_2026-02-10T08-42-04_open_source_community_concept_diverse_hands_reachi.png',
  '/images/generated_2026-02-18T00-48-57_multiple_hands_holding_different_devices_all_showi.png',
  '/images/generated_2026-02-18T00-48-58_diverse_group_of_people_gathered_around_a_glowing_.png',
  '/images/generated_2026-02-18T00-49-08_collaborative_workspace_with_multiple_screens_show.png',
]" />

<!--
- Everything is open source — code, hardware designs, and data schemas
- MIT licensed — use it, fork it, improve it
- Contributions welcome: Rust, TypeScript, 3D printing, research
- github.com/whatistrackingme
-->

---

<SlideBullets title="Call to Action" :items="[
  'Print a badge and wear it for a week',
  'Check the dashboard — you will be surprised',
  'Star the repo, open an issue, submit a PR',
  'Start a conversation about physical-space privacy',
]" />

<!--
- Concrete next steps for the audience
-->

---

<SlideImage overlay="What Comes Next" :images="[
  '/images/generated_2026-02-17T12-46-14_futuristic_privacy_technology_concept_on_dark_back.png',
  '/images/generated_2026-02-18T00-48-39_futuristic_wearable_devices_including_smart_glasse.png',
  '/images/generated_2026-02-18T00-48-42_next_generation_privacy_technology_concept_with_ho.png',
  '/images/generated_2026-02-18T00-48-48_array_of_futuristic_privacy_devices_including_nfc_.png',
]" />

<!--
- Native mobile apps with background scan detection
- NFC and Bluetooth beacon support
- AI-powered scan pattern analysis
- Smart glasses integration for real-time awareness
-->

---

<div class="absolute inset-0 flex flex-col items-center justify-center px-16" style="background: var(--witm-base)">
  <div class="grid grid-cols-4 gap-x-20 gap-y-14">
    <div class="flex flex-col items-center gap-4">
      <simple-icons-claude class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">Claude Code</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-googlegemini class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">Gemini Imagen</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <simple-icons-threedotjs class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">Three.js</span>
    </div>
    <div class="flex flex-col items-center gap-4">
      <carbon-chemistry class="text-5xl" style="color: var(--witm-text)" />
      <span class="text-sm" style="color: var(--witm-subtext0)">SMILES Drawer</span>
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
  </div>
  <p class="absolute bottom-12 text-lg" style="color: var(--witm-text)">This presentation was vibe coded end-to-end</p>
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
