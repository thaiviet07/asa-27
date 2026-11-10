# ASA Studio™ - Lamp & Decoration Production Studio

Handcrafted lamp and interior decoration production studio based in **District 1, Ho Chi Minh City (HCMC), Vietnam**.

---

## 🏗️ Kiến Trúc Module Hoá (Modular Architecture)

Dự án đã được module hoá toàn diện vào thư mục [`src/`](file:///Users/heymac/Desktop/ASA1/src/):

```
src/
├── components/                  # Các component dùng chung giữa các trang
│   ├── navbar-top.html          # Thanh điều hướng trên cùng (Desktop & Mobile Nav + Menu)
│   ├── navbar-floating.html     # Thanh điều hướng dock nổi ở góc dưới
│   ├── footer.html              # Footer 3 breakpoints (Desktop, Tablet, Phone)
│   ├── preloader.html           # Animation khởi động (Start Preloader)
│   ├── cta-contact.html         # Khối kêu gọi liên hệ / form liên hệ dùng chung
│   ├── custom-styles.html       # Toàn bộ CSS tuỳ chỉnh (ASA Logo, Custom Cursor, Lenis, Badge)
│   └── svg-templates.html       # Các định nghĩa SVG templates
├── sections/                    # Các section riêng biệt theo từng trang
│   ├── home/                    # 10 sections của trang chủ:
│   │   ├── hero.html            # - Hero banner
│   │   ├── work.html            # - Work showcase
│   │   ├── who-we-are.html      # - Giới thiệu ASA Studio
│   │   ├── vision.html          # - Tầm nhìn & triết lý
│   │   ├── services.html        # - Dịch vụ & sản phẩm
│   │   ├── showreel.html        # - Video showreel
│   │   ├── pricing.html         # - Bảng giá / gói dịch vụ
│   │   ├── testimonials.html    # - Đánh giá từ khách hàng
│   │   ├── stats.html           # - Thống kê & thành tựu
│   │   └── blog.html            # - Bài viết mới nhất
│   ├── studio/                  # Sections của trang Studio & Story
│   │   ├── hero.html
│   │   ├── timeline.html
│   │   ├── intro.html
│   │   ├── team.html
│   │   ├── awards.html
│   │   └── contact.html
│   ├── work/                    # Sections của trang Portfolio
│   │   ├── hero.html
│   │   ├── works-list.html
│   │   └── contact.html
│   ├── blog/                    # Sections của trang Blog
│   │   ├── hero.html
│   │   └── blog-list.html
│   ├── contact/                 # Sections của trang Liên hệ
│   │   ├── hero.html
│   │   └── contact-content.html
│   └── 404/                     # Section trang 404
│       └── content.html
└── pages/                       # File template của từng trang (lắp ráp components & sections)
    ├── index.html               # Trang chủ
    ├── studio.html              # Trang Studio
    ├── work.html                # Trang Work
    ├── blog.html                # Trang Blog
    ├── contact.html             # Trang Contact
    └── 404.html                 # Trang 404
```

---

## 🚀 Hướng Dẫn Phát Triển & Build

### 1. Chế độ Development (Tự động biên dịch khi sửa file)
```bash
npm run dev
# Tự động watch thư mục src/, compile ngay khi có thay đổi và khởi động server tại http://localhost:3000/
```

### 2. Biên dịch thủ công (Build)
```bash
npm run build
# Tự động biên dịch từ src/ ra các file HTML phân phối ở root và các thư mục tương ứng
```

### 3. Chạy server Production / Local
```bash
npm start
# Khởi động Node server tại http://localhost:3000/
```

---

## 🌟 Selected Active Layouts

- **Home**: [`/`](file:///Users/heymac/Desktop/ASA1/index.html)
- **Studio**: [`/studio`](file:///Users/heymac/Desktop/ASA1/studio/index.html)
- **Work**: [`/work`](file:///Users/heymac/Desktop/ASA1/work/index.html)
- **Blog**: [`/blog`](file:///Users/heymac/Desktop/ASA1/blog/index.html)
- **Contact**: [`/contact`](file:///Users/heymac/Desktop/ASA1/contact/index.html)
- **Case Studies**:
  - [`/work/forma-digital`](file:///Users/heymac/Desktop/ASA1/work/forma-digital/index.html)
  - [`/work/nero-vision`](file:///Users/heymac/Desktop/ASA1/work/nero-vision/index.html)
  - [`/work/one-step`](file:///Users/heymac/Desktop/ASA1/work/one-step/index.html)
  - [`/work/bold-moves`](file:///Users/heymac/Desktop/ASA1/work/bold-moves/index.html)
- **Journal Articles**:
  - [`/blog/from-idea-to-execution-building-products-that-last`](file:///Users/heymac/Desktop/ASA1/blog/from-idea-to-execution-building-products-that-last/index.html)
  - [`/blog/designing-digital-systems-that-scale-your-business`](file:///Users/heymac/Desktop/ASA1/blog/designing-digital-systems-that-scale-your-business/index.html)
  - [`/blog/the-power-of-simplicity-in-modern-real-brand-design`](file:///Users/heymac/Desktop/ASA1/blog/the-power-of-simplicity-in-modern-real-brand-design/index.html)
  - [`/blog/why-great-brands-are-built-on-clarity-not-complexity`](file:///Users/heymac/Desktop/ASA1/blog/why-great-brands-are-built-on-clarity-not-complexity/index.html)

---

## 📁 Archived Layout Variants (`archive/`)

Tất cả các layout biến thể trước đây được lưu trữ trong [`archive/`](file:///Users/heymac/Desktop/ASA1/archive/):
- `archive/work-1/`: Work 1 layout
- `archive/work-2/`: Work 2 layout archive backup
- `archive/work-3/`: Work 3 layout
- `archive/blog-2/`: Blog 2 layout
- `archive/blog-3/`: Blog 3 layout
- `archive/contact-2/`: Contact 2 layout
- `archive/contact-3/`: Contact 3 layout
