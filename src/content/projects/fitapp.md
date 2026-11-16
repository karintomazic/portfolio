---
title: Fitapp
summary: Calorie and macro tracker
description: A personal calorie and macro tracker for my phone, with burned calories synced from my Apple Watch.
badge: Web app
role: Solo, design and development
tags: [Next.js, React, TypeScript, Drizzle, Postgres, Tailwind CSS, PWA]
cover: ../../assets/projects/fitapp.png
coverAlt: Fitapp home screen showing calories eaten against the daily goal, a week strip, and carbs, protein and fat rings
panel: bg-surface
links:
  live: https://fitapp-sepia-pi.vercel.app/
  github: https://github.com/karintomazic/Fitapp
order: 2
---

## Overview

A calorie and macro tracker I built for myself. At a glance on my phone, it shows how many calories I've burned today, how many I've eaten, and the difference. I log food by meal, track carbs, protein and fat against daily goals, log my weight, and look back at past days and months in a calendar and history view.

## Stack

Next.js (App Router), React, TypeScript, Drizzle ORM with Postgres on Neon, Tailwind CSS, deployed on Vercel. It's a PWA, installed on my iPhone from Safari with Add to Home Screen.

## Key decisions

- **A PWA plus an Apple Shortcut instead of a native app.** Apple Health data only lives on the phone, so something on the phone has to send it out. A daily Shortcut posts the Apple Watch data to an API route. A React Native app could read it live, but it would need the Apple Developer Program (about €100 a year) for an app with one user. The trade-off: the numbers are as fresh as the last sync, not live.
- **A personal food library.** Each food is saved once with its macros per 100 g, then logged by grams. The macros are copied into each log entry, so editing a food later doesn't change past days.
- **Local dates, not UTC timestamps.** Days are stored as the Slovenian date, so a late-night snack doesn't land on the wrong day.
- **Simple, secure access.** It's a single-user app, so instead of a full auth system it uses one password and a long-lived cookie. The Apple Watch sync has its own token. Both are checked with constant-time comparison.

[//]: # 'TODO: ## How I used AI'
[//]: # 'TODO: ## Testing and accessibility'
[//]: # 'TODO: ## What I learned / next steps'
