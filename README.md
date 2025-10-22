# 🚀 Next.js SEO Crash Course — Learn How to Rank Super High

**Learn how to make your Next.js website rank higher on Google, get indexed faster, and optimize for Core Web Vitals — all with modern Next.js 15+ features.**

🎥 Watch the full video on YouTube → [Next.js SEO Crash Course — Learn How to Rank Super High](https://youtu.be/cgq_HsDduSQ)  
📺 Subscribe for more tutorials → [PedroTechnologies](https://www.youtube.com/@pedrotechnologies)  
💻 Continue your learning → [Next-Level Next.js — Full Course](https://www.webdevultra.com/courses/next-level-nextjs/purchase)

---

## 🧠 Why SEO Matters in Next.js

Search Engine Optimization (SEO) is all about helping search engines **understand your website**. When your pages are properly structured, fast, and discoverable, you increase the chances of appearing at the top of search results.

The best part? **Next.js was built for SEO**.

Because it renders HTML on the **server** (via Server Components and Server-Side Rendering), search engines can read your content immediately — even before hydration happens in the browser. That means better crawlability, faster indexing, and improved rankings.

---

## 🏷️ Metadata in Next.js

Metadata tells search engines and social platforms what your page is about.  
Next.js 15 makes this super simple using the `metadata` export:

```tsx
// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "WebDevUltra — Modern Web Dev",
    template: "%s | WebDevUltra",
  },
  description: "Hands-on tutorials for Next.js, React, and Supabase.",
  keywords: ["Next.js", "SEO", "React", "Web performance"],
  openGraph: {
    title: "WebDevUltra",
    description: "Modern Web Dev tutorials",
    url: "https://webdevultra.com",
    images: [
      {
        url: "https://webdevultra.com/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@pedrotech",
    images: ["https://webdevultra.com/og.png"],
  },
};
```

This generates `<title>`, `<meta>`, and `<link>` tags automatically — no manual `<Head>` imports needed.

---

## ⚙️ Dynamic Metadata with `generateMetadata()`

Dynamic pages (like blogs or product details) need metadata that updates automatically.
Next.js lets you generate it at build time or on-demand using `generateMetadata()`:

```tsx
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://webdevultra.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      images: [post.image],
    },
  };
}
```

This ensures your SEO titles, descriptions, and OG images always match the page content — even if they’re fetched from an API.

---

## 🤖 Robots.txt and Meta Robots

Control what search engines can crawl using **robots.txt** and **meta robots**:

### 🗂️ robots.txt

```txt
User-Agent: *
Allow: /
Disallow: /admin/
Sitemap: https://webdevultra.com/sitemap.xml
```

### 🧭 Meta Robots (per page)

```tsx
export const metadata = {
  robots: { index: false, follow: false },
};
```

Use this to block sensitive or duplicate content from being indexed.

---

## 🗺️ Sitemaps

Sitemaps tell search engines which URLs to crawl and when they were last updated.
Next.js lets you generate sitemaps dynamically:

```tsx
// app/sitemap.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetch("https://api.example.com/posts").then((res) =>
    res.json()
  );
  const base = "https://webdevultra.com";

  return [
    { url: base, lastModified: new Date() },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.updatedAt,
    })),
  ];
}
```

This ensures your sitemap is always up to date with your latest content.

---

## 🔗 Canonical URLs

When multiple URLs have the same content, use a **canonical URL** to tell Google which one is the “official” version:

```tsx
alternates: {
  canonical: "https://webdevultra.com/blog/nextjs-seo-crash-course",
},
```

This avoids duplicate content issues and helps your preferred page rank higher.

---

## 🌐 Internationalization (hreflang)

If your site supports multiple languages, you can define language-specific URLs:

```tsx
alternates: {
  canonical: "https://webdevultra.com/blog/post",
  languages: {
    "en-US": "https://webdevultra.com/en/blog/post",
    "pt-BR": "https://webdevultra.com/pt-br/blog/post",
  },
};
```

This tells search engines which version of your page to show based on user location and language.

---

## 📸 Open Graph & Twitter Cards

Social media platforms like Twitter and LinkedIn use **Open Graph (OG)** and **Twitter Card** tags to display link previews.

### Static OG Image

Just drop an `opengraph-image.png` or `twitter-image.png` into your route folder — Next.js automatically wires it up.

### Dynamic OG Image

You can also generate OG images programmatically:

```tsx
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };

export default async function Image({ params }) {
  const post = await getPost(params.slug);
  return new ImageResponse(
    (
      <div style={{ fontSize: 64, padding: 80 }}>
        <b>{post.title}</b>
      </div>
    ),
    { ...size }
  );
}
```

---

## 📊 JSON-LD Structured Data

Structured data helps search engines understand the _meaning_ of your page, which can unlock rich results like ratings, authors, or publication dates.

```tsx
import Script from "next/script";

export default function Article({ post }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: [{ "@type": "Person", name: "PedroTech" }],
  };

  return (
    <>
      <h1>{post.title}</h1>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
```

---

## 🧭 404s, Redirects, and Crawl Health

A real 404 response tells crawlers when a page doesn’t exist — this helps maintain your site’s **crawl health**.
Next.js automatically supports custom 404 pages via `app/not-found.tsx`.

For moved pages, use **permanent redirects** to preserve SEO equity:

```js
// next.config.js
export default {
  async redirects() {
    return [
      {
        source: "/old-blog/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};
```

---

## ⚙️ Rendering Strategies & Caching

Fast pages rank better.
Next.js gives you several ways to balance **performance** and **freshness**:

- **Static Generation (SSG)** – Pre-renders pages at build time.
- **Incremental Static Regeneration (ISR)** – Rebuilds pages automatically after `revalidate` seconds.
- **Server Rendering (SSR)** – Renders on every request for real-time data.

Example with cache tags:

```ts
await fetch("https://api.example.com/posts", {
  next: { tags: ["posts"], revalidate: 300 },
});
```

---

## ⚡ Core Web Vitals & Performance

Google’s ranking algorithm heavily favors sites that load fast and feel smooth.
Next.js helps you pass Core Web Vitals by default:

- Use `next/image` for optimized, responsive images.
- Use `next/font` to self-host and reduce layout shift.
- Prefetch links with `<Link>` for instant navigation.
- Lazy-load scripts with `next/script`.

These small details can make or break your SEO performance.

---

## ✅ SEO Checklist (Next.js App Router)

1. ✅ Proper metadata (`title`, `description`, `OG`, `Twitter`).
2. ✅ Dynamic metadata for blog/product pages.
3. ✅ robots.txt configured.
4. ✅ Sitemap with all URLs.
5. ✅ Canonical URLs to prevent duplicates.
6. ✅ Structured data (JSON-LD).
7. ✅ 404 and redirects set up.
8. ✅ Core Web Vitals optimized.

---

## 📺 Watch the Full Tutorial

🎥 [Next.js SEO Crash Course — Learn How to Rank Super High](https://youtu.be/cgq_HsDduSQ)
📺 Subscribe for more tutorials → [PedroTechnologies](https://www.youtube.com/@pedrotechnologies)
💻 Continue your learning → [Next-Level Next.js — Full Course](https://www.webdevultra.com/courses/next-level-nextjs/purchase)

---

### 🧩 About This Repo

This repository contains all code snippets and examples shown in the **Next.js SEO Crash Course** video by [PedroTechnologies](https://www.youtube.com/@pedrotechnologies).

---

### 🫶 Support the Channel

If this helped you, please ⭐ this repo and share the video — it really helps me keep making free tutorials.
