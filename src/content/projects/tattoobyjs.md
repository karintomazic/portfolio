---
title: Tattoo Studio by JS
summary: Tattoo studio website
description: Website for a tattoo studio in Maribor, with a portfolio, aftercare products and booking info. The studio edits all the content itself.
badge: Client project
role: Solo developer, design together with the client
tags: [Next.js, React, TypeScript, PocketBase, Tailwind CSS, Storybook, Vitest]
cover: ../../assets/projects/tattoobyjs.png
coverAlt: Tattoo Studio by JS home page with a large tattoo photo and the studio name
panel: bg-surface-alt
links:
  live: https://tattoostudiobyjs.si/
  github: https://github.com/karintomazic/tattoobyjs
order: 1
---

## Overview

A website for a tattoo studio in Maribor, Slovenia. Visitors can browse the portfolio, read about aftercare, find the aftercare creams and merch, and get booking information. The site has been live since May 2025, and the studio edits all the content in it themselves.

The artist is a friend of a friend, who recommended me. He had opened the studio about a year earlier and had no website yet, so I built it from scratch: I designed it together with him, then developed and deployed it myself.

After the first version went live, I rebuilt the code underneath. It looks the same to visitors, but it's now in strict TypeScript, every component has Storybook stories and tests, and it went through a full accessibility pass.

## Key decisions

- **PocketBase as the backend.** One small self-hosted binary gives a database, file uploads and an admin panel. The studio manages all the content in 12 collections, so I didn't have to build a custom CMS.
- **Self-hosted on my own server.** The Next.js app and PocketBase both run in Coolify on my Hetzner server, so the client only pays for the domain name.
- **Typed data in one place.** Every PocketBase collection has a TypeScript type, so `usePocketBase("faq")` returns typed FAQ records, and a typo in a collection name is a compile error.
- **Tests that don't need a backend.** MSW fakes the PocketBase API, so Storybook and the tests run without a server, including the states that are hard to reproduce on the live site: empty content, missing images and load errors.

## Testing and accessibility

- **16 Storybook story files** cover every component and page, in loaded, empty and missing-image states.
- **Interaction tests** check behaviour such as opening FAQ answers, the mobile menu and the keyboard controls.
- **Every story is an accessibility test.** axe runs on each one, and a violation fails the test.
- **Keyboard and screen readers:** a skip link, a `<main>` landmark, a mobile menu that closes with Escape and returns focus, and FAQ answers that screen readers skip while they're closed.
- **The merch slider** autoplays because the client wants it to, but it pauses on hover and focus, starts paused for people who turned on reduced motion, and has a pause button for keyboard users.

The brand coral doesn't have enough contrast on white for WCAG AA. I suggested a darker shade, and it's waiting for the client's approval.

## How I used AI

I built the first version by hand, without AI. For the upgrade, I used Claude as a helper:

- **Planning.** It helped me plan the upgrade step by step.
- **TypeScript migration.** It helped me convert the code, and I checked that the types were correct.
- **Storybook.** It wrote the boilerplate for the stories, and I added the stories each component needed.
- **Accessibility.** I did all the testing myself. Claude helped me check if I'd missed anything.
- **README.** It helped me write the documentation.

## What I learned

This was my first production React project, after learning React during my onboarding at Agiledrop. I learned a lot:

- **PocketBase.** How to use it, why it's useful, and how to connect a Next.js frontend to it.
- **Working with a client.** How to communicate with a client, understand their needs and find out what they want to gain from the website.
- **Design.** It was the first project I designed from start to finish, while keeping in mind what the client wanted.
