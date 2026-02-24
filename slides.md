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

<div class="absolute inset-0 bg-black">
  <img src="/images/logo_stylized_green_techno.png" class="w-full h-full object-cover" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
  <div class="absolute bottom-16 left-12 z-10">
    <p class="text-5xl font-bold text-white drop-shadow-lg">What is Tracking ME?</p>
  </div>
  <div class="absolute bottom-6 right-6 z-10 flex gap-2">
    <a href="https://github.com/whatistrackingme" target="_blank" alt="GitHub"
      class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
      <carbon-logo-github />
    </a>
  </div>
</div>

<!--
- We've built an invisible infrastructure for tracking — and most of us don't notice it
-->

---

<iframe src="https://app.staging.whatistracking.me/qr" class="absolute inset-0 w-full h-full border-none" allow="camera" />

<!--
- Pull out your phones and scan this QR code — keep them handy
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-41-42_close_up_of_a_persons_hand_holding_a_smartphone_sc.png',
  '/images/generated_2026-02-18T00-45-06_over_the_shoulder_view_of_someone_scanning_a_qr_co.png',
  '/images/generated_2026-02-18T00-45-07_persons_hand_holding_a_phone_with_qr_scanner_app_o.png',
  '/images/generated_2026-02-18T00-45-08_close_up_of_a_smartphone_screen_showing_a_qr_code_.png'
]">
  <div class="slide-label">
    <p>What just happened?</p>
  </div>
</ImageQuadrant>

<!--
- That simple scan just created data you can't see, control, or get back
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-41-43_abstract_visualization_showing_digital_fingerprint.png',
  '/images/generated_2026-02-18T00-45-27_abstract_network_of_connected_data_points_forming_.png',
  '/images/generated_2026-02-18T00-45-27_ethereal_digital_footprints_glowing_on_a_dark_floo.png',
  '/images/generated_2026-02-18T00-45-29_glowing_digital_data_trail_flowing_from_a_smartpho.png'
]">
  <div class="slide-label">
    <p>Every scan leaves a trace</p>
  </div>
</ImageQuadrant>

<!--
- Every physical interaction — menus, badges, cameras — silently becomes digital data
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-53-36_a_person_standing_in_a_doorway_looking_out_at_a_ci.png',
  '/images/generated_2026-02-18T00-45-45_silhouette_of_a_person_holding_physical_keys_while.png',
  '/images/generated_2026-02-18T00-45-45_person_closing_a_heavy_vault_door_while_behind_the.png',
  '/images/generated_2026-02-18T00-45-45_a_heavy_wooden_door_with_a_large_padlock_beside_a_.png'
]">
  <div class="slide-label">
    <p>We lock doors, not data</p>
  </div>
</ImageQuadrant>

<!--
- We instinctively protect physical privacy but casually give away our digital presence
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-18T00-27-59_person_with_backpack_tablet_qr_code_walking_city_bridge.png',
  '/images/generated_2026-02-18T00-46-00_rear_view_of_a_person_in_a_hoodie_walking_through_.png',
  '/images/generated_2026-02-18T00-46-02_person_walking_through_a_busy_urban_street_at_nigh.png',
  '/images/generated_2026-02-18T00-46-02_lone_figure_on_a_modern_pedestrian_bridge_at_night.png'
]">
  <div class="slide-label">
    <p>Wear the tracker</p>
  </div>
</ImageQuadrant>

<!--
- WhatIsTrackingMe: wear a QR code and find out who scans you, when, and where
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-53-42_a_smartphone_receiving_a_glowing_notification_aler.png',
  '/images/generated_2026-02-18T00-46-15_smartphone_on_a_dark_surface_with_a_bright_notific.png',
  '/images/generated_2026-02-18T00-46-18_persons_hand_holding_a_phone_receiving_a_push_noti.png',
  '/images/generated_2026-02-18T00-46-18_close_up_of_a_smartwatch_and_phone_both_showing_sy.png'
]">
  <div class="slide-label">
    <p>Scan · Track · Notify</p>
  </div>
</ImageQuadrant>

<!--
- Three steps: wear a QR code, someone scans it, you get notified in real time
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-53-46_a_crowded_conference_hall_from_above_at_night_atte.png',
  '/images/generated_2026-02-18T00-46-34_birds_eye_view_of_a_crowded_event_space_at_night_w.png',
  '/images/generated_2026-02-18T00-46-35_overhead_shot_of_people_walking_through_a_conventi.png',
  '/images/generated_2026-02-18T00-46-37_wide_angle_view_of_a_packed_auditorium_from_the_ba.png'
]">
  <div class="slide-label">
    <p>Why it matters</p>
  </div>
</ImageQuadrant>

<!--
- Real applications: business ranking, compliance auditing, research, and personal dashboards
-->

---

<div class="absolute top-8 left-1/2 -translate-x-1/2 z-10 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-3xl text-center" style="pointer-events: auto;">
  <p class="font-bold text-white text-2xl uppercase tracking-wide" style="font-family: 'Space Grotesk Variable', sans-serif;">What is Tracking ME?</p>
</div>

<a href="https://app.staging.whatistracking.me" target="_blank" class="absolute top-22 left-1/2 -translate-x-1/2 z-10 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm hover:bg-black/80 transition-colors !shadow-none" style="pointer-events: auto; text-decoration: none;">
  Open in new tab ↗
</a>

<div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-3xl text-center" style="pointer-events: auto;">
  <p class="font-bold text-white text-lg uppercase tracking-wide" style="font-family: 'Space Grotesk Variable', sans-serif;">February 2026</p>
</div>

<iframe src="https://app.staging.whatistracking.me" class="absolute inset-0 w-full h-full border-none" />

<!--
- Live demo: the QR code you scanned earlier — I can see exactly when you did it
-->

---
layout: cover
background: /images/generated_2026-02-18_stylized_idea_diagram.png
---

<!--
- Privacy by architecture: the server stores data it cannot read — decryption only happens on your device
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-57-00_a_sequence_diagram_showing_the_flow_between_four_e.png',
  '/images/generated_2026-02-18T00-46-51_glowing_pipeline_of_encrypted_data_packets_moving_.png',
  '/images/generated_2026-02-18T00-46-53_abstract_representation_of_encrypted_data_flowing_.png',
  '/images/generated_2026-02-18T00-46-55_visualization_of_an_api_request_flowing_through_mi.png'
]">
  <div class="slide-label">
    <p>Rust powers the backend</p>
  </div>
</ImageQuadrant>

<!--
- Rust/Axum backend where the server never sees plaintext — only your device can decrypt
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-41-55_laptop_and_smartphone_showing_a_privacy_dashboard_.png',
  '/images/generated_2026-02-18T00-47-08_close_up_of_a_smartphone_displaying_a_real_time_pr.png',
  '/images/generated_2026-02-18T00-47-09_a_laptop_and_phone_on_a_dark_desk_both_showing_enc.png',
  '/images/generated_2026-02-18T00-47-13_persons_hands_holding_a_tablet_showing_a_minimal_p.png'
]">
  <div class="slide-label">
    <p>Your device, your data</p>
  </div>
</ImageQuadrant>

<!--
- Tauri app keeps your private key local — we literally cannot read your data
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-41-58_3d_printer_creating_a_small_wearable_badge_with_a_.png',
  '/images/generated_2026-02-18T00-47-29_collection_of_freshly_3d_printed_qr_code_badges_an.png',
  '/images/generated_2026-02-18T00-47-30_close_up_of_a_3d_printer_extruder_head_printing_a_.png',
  '/images/generated_2026-02-18T00-47-33_3d_printer_in_action_creating_a_small_geometric_we.png'
]">
  <div class="slide-label">
    <p>Print your own tracker</p>
  </div>
</ImageQuadrant>

<!--
- Open hardware: 3D-printed wearables and e-ink displays — print your own tonight
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-17T12-56-51_four_3d_printing_filament_samples_side_by_side_on_.png',
  '/images/generated_2026-02-18T00-47-45_colorful_3d_printing_filament_spools_arranged_on_a.png',
  '/images/generated_2026-02-18T00-47-47_close_up_of_different_3d_printed_material_samples_.png',
  '/images/generated_2026-02-18T00-47-48_arrangement_of_3d_printed_test_pieces_in_different.png'
]">
  <div class="slide-label">
    <p>Choosing the right material</p>
  </div>
</ImageQuadrant>

<!--
- Four materials (PLA, PETG, ASA, TPU) — each trades ease of printing against durability and flexibility
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-42-02_data_visualization_showing_unexpectedly_high_numbe.png',
  '/images/generated_2026-02-18T00-48-05_abstract_heatmap_visualization_showing_dense_clust.png',
  '/images/generated_2026-02-18T00-48-05_dramatic_glowing_bar_chart_with_surprisingly_tall_.png',
  '/images/generated_2026-02-18T00-48-11_holographic_style_data_dashboard_floating_in_dark_.png'
]">
  <div class="slide-label">
    <p>More tracking than you think</p>
  </div>
</ImageQuadrant>

<!--
- Real-world testing revealed far more tracking than anyone expected — from systems we didn't even know were scanning
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-42-04_person_standing_in_a_public_space_with_visible_lig.png',
  '/images/generated_2026-02-18T00-48-20_person_standing_under_a_surveillance_camera_spotli.png',
  '/images/generated_2026-02-18T00-48-24_lone_figure_in_a_public_space_surrounded_by_subtle.png',
  '/images/generated_2026-02-18T00-48-29_person_walking_through_a_public_corridor_with_came.png'
]">
  <div class="slide-label">
    <p>Should scanning require consent?</p>
  </div>
</ImageQuadrant>

<!--
- Photography is visible; digital scanning is invisible — should it require the same consent?
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-17T12-46-14_futuristic_privacy_technology_concept_on_dark_back.png',
  '/images/generated_2026-02-18T00-48-39_futuristic_wearable_devices_including_smart_glasse.png',
  '/images/generated_2026-02-18T00-48-42_next_generation_privacy_technology_concept_with_ho.png',
  '/images/generated_2026-02-18T00-48-48_array_of_futuristic_privacy_devices_including_nfc_.png'
]">
  <div class="slide-label">
    <p>What comes next</p>
  </div>
</ImageQuadrant>

<!--
- Coming next: mobile apps, AI scan detection, NFC/Bluetooth, and smart glasses integration
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-42-04_open_source_community_concept_diverse_hands_reachi.png',
  '/images/generated_2026-02-18T00-48-57_multiple_hands_holding_different_devices_all_showi.png',
  '/images/generated_2026-02-18T00-48-58_diverse_group_of_people_gathered_around_a_glowing_.png',
  '/images/generated_2026-02-18T00-49-08_collaborative_workspace_with_multiple_screens_show.png'
]">
  <div class="slide-label">
    <p>Make tracking visible</p>
  </div>
</ImageQuadrant>

<!--
- Try it, contribute, spread awareness — everything is open source on GitHub
-->

---

<ImageQuadrant :images="[
  '/images/generated_2026-02-10T08-41-41_dark_moody_cityscape_at_night_with_glowing_qr_code.png',
  '/images/generated_2026-02-18T00-44-41_futuristic_city_skyline_at_dusk_with_holographic_q.png',
  '/images/generated_2026-02-18T00-44-44_rain_soaked_urban_alley_at_night_with_qr_codes_glo.png',
  '/images/generated_2026-02-18T00-44-46_aerial_view_of_a_sprawling_city_at_night_with_neon.png'
]">
  <div class="flex items-center justify-center h-full">
    <div class="bg-black/60 backdrop-blur-sm px-12 py-10 rounded-3xl text-center">
      <p class="text-5xl font-extrabold text-white mb-6 uppercase tracking-wide">Discussion</p>
      <p class="text-2xl text-gray-300">github.com/whatistrackingme</p>
    </div>
  </div>
</ImageQuadrant>

<!--
- Let's discuss — repo at github.com/whatistrackingme
-->
