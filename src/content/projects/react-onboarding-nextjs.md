---
title: Movie database app
summary: Next.js, Auth.js, Storybook
description: A movie database app with search, authentication and a documented, tested component library.
badge: Web app
role: Solo, internal React/Next.js onboarding at Agiledrop
tags:
  [
    Next.js,
    TypeScript,
    Auth.js,
    Drizzle,
    TanStack Query,
    Storybook,
    Vitest,
    Playwright,
  ]
cover: ../../assets/projects/react-onboarding-nextjs.png
coverAlt: Movie app showing a list of popular movies with posters
panel: bg-surface
links:
  github: https://github.com/karintomazic/react-onboarding-nextjs
order: 2
---

## Overview

A movie database app powered by the TMDB API, with search across movies, TV shows and people, movie detail pages, and user registration and login. It started as a Vite + React Router app, and I then migrated it to the Next.js App Router feature by feature.

## Stack

Next.js (App Router), TypeScript, Auth.js (Credentials provider) with argon2-hashed passwords, Drizzle ORM and SQLite, TanStack Query, CSS Modules with SCSS, Storybook, MSW, Vitest and Playwright.

## Key decisions

- **Migrating feature by feature** from Vite + React Router instead of rewriting everything at once, so the app kept working at every step.
- **Own auth with Auth.js, Drizzle and SQLite** instead of a hosted service, to learn how sessions, password hashing and a user store actually work.
- **Storybook with MSW.** 59 stories with mocked network requests, so every component can be developed and tested in isolation, without the real API.

## Testing and accessibility

Storybook stories run as component tests through Vitest in a real browser, using Playwright.

[//]: # 'TODO: anything on accessibility?'
[//]: # 'TODO: ## How I used AI'
[//]: # 'TODO: ## What I learned - e.g. server vs client components, data fetching on the server, caching'
