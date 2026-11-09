# Mōno™ — Website Clone

Complete, fully functional, pixel-perfect clone of [https://monod.framer.website/](https://monod.framer.website/).

## 🚀 Quick Start

Run the site locally with zero external npm dependencies (pure Node.js):

```bash
npm start
# or
node server.js
```

Then open your browser at **[http://localhost:3000](http://localhost:3000)**.

---

## 📁 Included Pages & Routes

Every single route from the original site is fully cloned with its complete SSR DOM structure, styles, typography, SVG graphics, and Framer Motion interactions:

| Route | Description | File Location |
|---|---|---|
| `/` | Main Homepage / Hero / Showreel / Featured Works | `index.html` |
| `/studio` | Studio & About Mōno™ | `studio/index.html` & `studio.html` |
| `/work` | Work / Portfolio (Layout 1) | `work/index.html` & `work.html` |
| `/work-2` | Work / Portfolio (Layout 2) | `work-2/index.html` & `work-2.html` |
| `/work-3` | Work / Portfolio (Layout 3) | `work-3/index.html` & `work-3.html` |
| `/work/forma-digital` | Project: Forma Digital | `work/forma-digital/index.html` |
| `/work/nero-vision` | Project: Nero Vision | `work/nero-vision/index.html` |
| `/work/one-step` | Project: One Step | `work/one-step/index.html` |
| `/work/bold-moves` | Project: Bold Moves | `work/bold-moves/index.html` |
| `/blog` | News / Articles (Layout 1) | `blog/index.html` & `blog.html` |
| `/blog-2` | News / Articles (Layout 2) | `blog-2/index.html` & `blog-2.html` |
| `/blog-3` | News / Articles (Layout 3) | `blog-3/index.html` & `blog-3.html` |
| `/blog/from-idea-to-execution-building-products-that-last` | Blog Article 1 | `blog/.../index.html` |
| `/blog/designing-digital-systems-that-scale-your-business` | Blog Article 2 | `blog/.../index.html` |
| `/blog/the-power-of-simplicity-in-modern-real-brand-design` | Blog Article 3 | `blog/.../index.html` |
| `/blog/why-great-brands-are-built-on-clarity-not-complexity` | Blog Article 4 | `blog/.../index.html` |
| `/contact-1` | Contact Form (Layout 1) | `contact-1/index.html` |
| `/contact-2` | Contact Form (Layout 2) | `contact-2/index.html` |
| `/contact-3` | Contact Form (Layout 3) | `contact-3/index.html` |
| `/404` | Custom 404 Page Not Found | `404.html` & `404/index.html` |
| `/sitemap.xml` | SEO Sitemap | `sitemap.xml` |
| `/robots.txt` | Robots config | `robots.txt` |

---

## 🎨 Assets & Architecture

- **High-Resolution Images**: All 98 original images downloaded into `framerusercontent.com/images/`.
- **Custom Fonts**: All Inter variable fonts & unicode-range woff2 assets downloaded into `framerusercontent.com/assets/` and `fonts.gstatic.com/`.
- **JavaScript & Animation Bundles**: All 64 component modules, Framer Motion, and Lenis smooth scrolling code downloaded into `framerusercontent.com/sites/GWplTqFY2RrJfvz2f3h16/`.
- **Media & Videos**: Showreel and logo videos downloaded into `cdn.prod.website-files.com/`.
- **Dual Format Routing**: Every page is stored both as `path/index.html` and `path.html` for instant compatibility with any static web host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, Apache, Nginx, S3).
