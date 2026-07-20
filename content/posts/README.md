# Blog posts

Add one `.mdx` file per post in this folder. The filename becomes the URL slug,
so `my-first-app.mdx` publishes at `/blog/my-first-app`.

Required frontmatter:

```yaml
---
title: "Post title"
description: "One-sentence summary used for cards, search and SEO."
date: "2026-07-20"
category: "building-in-public"
tags: ["indie", "product"]
featured: false
draft: false
---

Your post body in Markdown starts here.
```

Valid `category` values are defined in `src/lib/blog-config.ts`:
`ai`, `app-development`, `productivity`, `personal-finance`,
`building-in-public`, `technology`.

Set `draft: true` to keep a post visible in `npm run dev` but hidden in
production builds. Only `.mdx` files are picked up, so this README is ignored.
