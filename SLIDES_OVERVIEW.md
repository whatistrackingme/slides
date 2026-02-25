# Slides Overview

## Landing

Hero title slide with logo watermark, grid background, and GitHub link.

slide 1

## Introduction

Frame the talk: short, interactive, perspective-shifting. What, How, and Why.

slide 2

---

# Section 1: What?

slide 3

## Live Scan

Audience participates by scanning a live QR code, then learns what data was just collected.

slides 4, 5

## Data Trail

Detail the specific fingerprints a single scan reveals — device, network, and behavioral.

slide 6

## Live Demo

Set up and show the real-time dashboard with data from the audience's earlier scans.

slide 7

## The Problem

Core problems: invisible data collection, no consent model, physical spaces becoming surveillance zones.

slide 8

## The Concept

Introduce the core idea — wear a QR code and become the observer of your own surveillance.

slide 9

---

# Section 2: How?

slide 10

## How It Works

Three-step flow (scan, notify, dashboard) plus technical mechanics (encrypted keys, stateless API).

slide 11

## Architecture

Zero-knowledge design: Ed25519 keys, server-side ciphertext only, client-side decryption.

slide 12

## Server Side

Rust + Axum stack, encrypted PostgreSQL payloads, Web Push notifications.

slide 13

## Client Side

Tauri desktop app and PWA — private key never leaves the device, full data export.

slide 14

## Field Testing

TODO: Add 3 screenshot images of field testing with phone. Show our travels, practical concerns of using a phone (it's small).

slide 15

## Solution: E-Ink Display

TODO: Add e-ink display image. Low battery, set it and forget it, big, readable.

slide 16

## New Problem: Rain

TODO: Add rain/weatherproof case image. Solution: a 3D-printed weatherproof case.

slide 17

## Hardware

Open hardware: 3D-printable badges, e-ink displays, material comparison (PLA/PETG/ASA/TPU).

slides 18, 19

## Analyzing Results

Results from wearing badges at conferences, cafes, and transit — automated scanners everywhere.

slide 20

---

# Section 3: Why?

slide 21

## Applications

Real-world use cases: business ranking, conference tracking, compliance auditing, personal dashboards.

slide 22

## Our Approach

WhatIsTracking.Me philosophy: make tracking visible instead of hiding from it.

slide 23

## Privacy & Ethics

Snowden quote in speaker notes, physical vs digital privacy contrast, and the consent question for passive scanning.

slides 24, 25

## Open Source

MIT licensed, contributions welcome, GitHub community pitch.

slide 26

## Call to Action

Concrete next steps: print a badge, check the dashboard, star the repo, start conversations.

slide 27

## Future Roadmap

Native apps, NFC/Bluetooth, AI pattern analysis, smart glasses integration.

slide 28

## Closing

Meta "vibe coded" tools grid and final discussion slide.

slides 29, 30
