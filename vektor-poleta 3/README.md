# Вектор Полёта — Landing Page

Next.js 15 · TypeScript · Tailwind CSS · Framer Motion

## Быстрый старт

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Деплой на Vercel

```bash
npm install -g vercel
vercel deploy
```

Или через GitHub: подключите репозиторий в dashboard.vercel.com — деплой автоматический.

## Структура проекта

```
app/
  layout.tsx          — корневой layout, мета-теги
  page.tsx            — главная страница (сборка всех секций)
  globals.css         — глобальные стили, дизайн-токены

components/
  Navigation.tsx      — фиксированный навбар + мобильное меню
  Footer.tsx          — футер с 3 колонками
  ui/
    index.tsx         — переиспользуемые UI компоненты
  sections/
    HeroSection.tsx
    AboutSection.tsx
    AudienceSection.tsx
    SkillsSection.tsx
    PlatformSection.tsx
    ReviewsSection.tsx
    PricingSection.tsx
    EquipmentSection.tsx
    FAQSection.tsx
    CTASection.tsx

constants/
  content.ts          — ВСЕ тексты сайта на русском языке
```

## Замена изображений

Все места под изображения помечены комментариями вида:
```
// IMAGE: Hero background
// Replace with: <Image src="/images/hero-bg.jpg" ... />
```

Добавьте изображения в `/public/images/` и замените плейсхолдеры.

### Рекомендуемые изображения:
- `hero-bg.jpg` — FPV дрон в движении, световые траектории, тёмный фон
- `about.jpg` — команда или оборудование крупным планом
- `kit-0.jpg` … `kit-4.jpg` — фото каждого комплекта оборудования

## Дизайн-система

| Токен | Значение |
|---|---|
| `--bg-deep` | #080809 |
| `--bg-mid` | #0D0F14 |
| `--surface` | #1E2330 |
| `--accent` | #00D4FF |
| Шрифт display | IBM Plex Sans |
| Шрифт mono | IBM Plex Mono |

## Форма

CTASection содержит заглушку обработки формы. Для production подключите:
- **EmailJS** / **Formspree** для e-mail
- **Telegram Bot API** для нотификаций в Telegram

Замените `handleSubmit` в `CTASection.tsx`.
