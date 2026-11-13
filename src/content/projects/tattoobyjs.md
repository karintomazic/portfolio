---
title: tattoobyjs
summary: Tattoo studio website
description: Website for a tattoo artist in Maribor, with a portfolio, aftercare products and booking info.
badge: Client project
tags: [Next.js, React, PocketBase, Tailwind CSS, Docker]
cover: ../../assets/projects/tattoobyjs.png
coverAlt: tattoobyjs home page with a large tattoo photo and the studio name
panel: bg-surface-alt
links:
  live: https://tattoostudiobyjs.si/
  github: https://github.com/karintomazic/tattoobyjs
order: 1
---

[//]: # 'TODO - CONTENT.md: who is the client? Add role: to the frontmatter - solo? did you design it too?'

## Overview

A website for a tattoo artist in Maribor. Visitors can browse the portfolio, read about aftercare and find booking information.

## Key decisions

- **PocketBase as the backend.** One small self-hosted binary gives a database, file uploads and an admin panel, so the content can be managed without building a custom CMS.
- **Docker.** PocketBase runs in a container, so local development and the server behave the same.

[//]: # 'TODO: one more decision, e.g. how the portfolio gallery or product pages are structured'
[//]: # 'TODO: ## How I used AI'
[//]: # 'TODO: ## Testing and accessibility'
[//]: # 'TODO: ## What I’d do differently'
