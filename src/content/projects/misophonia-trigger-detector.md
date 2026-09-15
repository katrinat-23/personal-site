---
title: Misophonia Trigger Detector
description: A live, in-browser demo that listens for misophonia trigger sounds like chewing, sniffing, and typing.
date: 2026-09-15
order: 1
link: https://personal-site-one-xi-28.vercel.app/misophonia-demo.html
---

## Overview

The sound detection behind the misophonia earbuds I'm building. It listens through your mic
in real time and flags trigger sounds — eating, sniffing/breathing, and repetitive sounds like
typing — as they happen. An optional masking mode plays soft, sound-matched noise over triggers
to cover them.

Everything runs client-side: audio never leaves the browser tab.

## What I used

- [YAMNet](https://tfhub.dev/google/tfjs-model/yamnet/tfjs/1) sound classifier running in TensorFlow.js
- Web Audio API (AudioWorklet) for capture, resampling, and generated masking noise
- Vanilla JavaScript, no framework

## What I learned
