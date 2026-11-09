# ASA™ Framer Website Clone

A 1:1 complete, fully functional clone of the [ASA™ Framer template website](https://asastudio.vn/).

## 🌟 Overview

This repository contains the complete clone of the ASA™ minimalist portfolio website, including:
- **All 19 Pages + Custom 404 Page**:
  - **Home**: [`/`](file:///Users/heymac/Desktop/ASA1/index.html)
  - **Studio**: [`/studio`](file:///Users/heymac/Desktop/ASA1/studio/index.html)
  - **Work Listings**: [`/work`](file:///Users/heymac/Desktop/ASA1/work/index.html), [`/work-2`](file:///Users/heymac/Desktop/ASA1/work-2/index.html), [`/work-3`](file:///Users/heymac/Desktop/ASA1/work-3/index.html)
  - **Project Case Studies**:
    - [`/work/forma-digital`](file:///Users/heymac/Desktop/ASA1/work/forma-digital/index.html)
    - [`/work/nero-vision`](file:///Users/heymac/Desktop/ASA1/work/nero-vision/index.html)
    - [`/work/one-step`](file:///Users/heymac/Desktop/ASA1/work/one-step/index.html)
    - [`/work/bold-moves`](file:///Users/heymac/Desktop/ASA1/work/bold-moves/index.html)
  - **Blog Listings**: [`/blog`](file:///Users/heymac/Desktop/ASA1/blog/index.html), [`/blog-2`](file:///Users/heymac/Desktop/ASA1/blog-2/index.html), [`/blog-3`](file:///Users/heymac/Desktop/ASA1/blog-3/index.html)
  - **Blog Articles**:
    - [`/blog/from-idea-to-execution-building-products-that-last`](file:///Users/heymac/Desktop/ASA1/blog/from-idea-to-execution-building-products-that-last/index.html)
    - [`/blog/designing-digital-systems-that-scale-your-business`](file:///Users/heymac/Desktop/ASA1/blog/designing-digital-systems-that-scale-your-business/index.html)
    - [`/blog/the-power-of-simplicity-in-modern-real-brand-design`](file:///Users/heymac/Desktop/ASA1/blog/the-power-of-simplicity-in-modern-real-brand-design/index.html)
    - [`/blog/why-great-brands-are-built-on-clarity-not-complexity`](file:///Users/heymac/Desktop/ASA1/blog/why-great-brands-are-built-on-clarity-not-complexity/index.html)
  - **Contact Pages**: [`/contact-1`](file:///Users/heymac/Desktop/ASA1/contact-1/index.html), [`/contact-2`](file:///Users/heymac/Desktop/ASA1/contact-2/index.html), [`/contact-3`](file:///Users/heymac/Desktop/ASA1/contact-3/index.html)
  - **404 Page**: [`/404`](file:///Users/heymac/Desktop/ASA1/404.html)
- **All Assets & Media**:
  - 98 master images saved in [`assets/images/`](file:///Users/heymac/Desktop/ASA1/assets/images/) and [`images/`](file:///Users/heymac/Desktop/ASA1/images/)
  - 10 showcase background videos saved in [`assets/videos/`](file:///Users/heymac/Desktop/ASA1/assets/videos/)
  - 50 web fonts saved in [`assets/fonts/`](file:///Users/heymac/Desktop/ASA1/assets/fonts/)
  - 52 JavaScript chunks and runtime modules saved in [`sites/GWplTqFY2RrJfvz2f3h16/`](file:///Users/heymac/Desktop/ASA1/sites/GWplTqFY2RrJfvz2f3h16/)
- **Zero-Dependency Node.js Server**:
  - Implements clean URL routing, MIME detection, byte-range video streaming, and CORS headers in [`server.js`](file:///Users/heymac/Desktop/ASA1/server.js).
- **Deployment Configurations**:
  - [`vercel.json`](file:///Users/heymac/Desktop/ASA1/vercel.json) for Vercel
  - [`_redirects`](file:///Users/heymac/Desktop/ASA1/_redirects) for Netlify and Cloudflare Pages
  - [`sitemap.xml`](file:///Users/heymac/Desktop/ASA1/sitemap.xml) and [`robots.txt`](file:///Users/heymac/Desktop/ASA1/robots.txt) for SEO.

---

## 🚀 Getting Started

### 1. Run with Node.js
```bash
npm start
# or
node server.js
```
Then open `http://localhost:3000` in your browser.

### 2. Custom Port
```bash
PORT=8080 npm start
```

### 3. Alternative Static Servers
You can also run with any standard static server:
```bash
# Python
python3 -m http.server 3000

# npx serve
npx serve .
```

---

## 📁 Project Structure

```
ASA1/
├── assets/
│   ├── fonts/         # 50 web fonts (.woff2)
│   ├── images/        # 98 images (.png, .jpg, .svg)
│   └── videos/        # 10 background showcase videos (.mp4)
├── blog/              # Blog index + 4 detailed articles
├── blog-2/            # Alternative Blog layout 2
├── blog-3/            # Alternative Blog layout 3
├── contact-1/         # Contact variant 1
├── contact-2/         # Contact variant 2
├── contact-3/         # Contact variant 3
├── images/            # Root mirrored image assets
├── sites/             # Hydration modules and search indexes
├── studio/            # Studio / About page
├── work/              # Portfolio index + 4 project case studies
├── work-2/            # Alternative Work layout 2
├── work-3/            # Alternative Work layout 3
├── 404.html           # Custom 404 error page
├── index.html         # Homepage
├── package.json       # NPM scripts
├── robots.txt         # Search engine crawlers config
├── server.js          # Zero-dependency local dev & production server
├── sitemap.xml        # Full XML sitemap
└── vercel.json        # Vercel clean URL config
```
