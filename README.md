# Bảo Tàng Không Gian Văn Hóa Mường

Website giới thiệu về văn hóa Mường, được xây dựng với React và Vite.

## Tính năng

- Trang chủ với hero section và preview các section
- Trang Nguồn gốc: Giới thiệu về lịch sử và nguồn gốc văn hóa Mường
- Trang Đặc trưng: Đặc trưng âm nhạc, kỹ năng tạo lời hát, vai trò của điệu hát Đúm
- Trang Truyện: Embed Gemini storybook
- Trang Nhạc cụ: Chi tiết về Sáo Ôi và Đàn nhị với diagrams
- Trang Lời hát: Embed Canva design
- Trang Trải nghiệm: Placeholder cho Artsteps 3D exhibition
- Tin tức & Sự kiện: Hiển thị các bài báo liên quan
- Responsive design cho mobile, tablet và desktop

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy development server:
```bash
npm run dev
```

3. Build cho production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Cấu trúc dự án

```
src/
├── components/          # Các components tái sử dụng
│   ├── Header/         # Header với navigation
│   ├── Footer/         # Footer với thông tin liên hệ
│   └── NewsCard/       # Component hiển thị tin tức
├── pages/              # Các trang chính
│   ├── Home/           # Trang chủ
│   ├── Origin/         # Trang Nguồn gốc
│   ├── Characteristics/# Trang Đặc trưng
│   ├── Stories/        # Trang Truyện
│   ├── Instruments/    # Trang Nhạc cụ
│   ├── Lyrics/         # Trang Lời hát
│   └── Experience/     # Trang Trải nghiệm
├── data/               # Dữ liệu
│   └── news.js         # Dữ liệu tin tức
└── styles/             # Global styles
    └── global.css      # CSS toàn cục
```

## Công nghệ sử dụng

- React 18
- React Router DOM
- Vite
- CSS Modules

## Ghi chú

- Embedded code cho Artsteps (trang Trải nghiệm) sẽ được thêm vào sau khi nhận được từ người dùng
- Hình ảnh hiện tại sử dụng placeholder từ Unsplash, có thể thay thế bằng hình ảnh thực tế
- Các link embed (Gemini, Canva) có thể cần điều chỉnh tùy theo quyền truy cập

## License

Copyright © 2024 Muong.vn. All right reserved.

