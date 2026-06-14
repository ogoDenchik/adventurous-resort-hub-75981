## Цель
1. Сделать backup всего текущего проекта в один скачиваемый файл.
2. На странице Home оставить только Hero (заглавная) — всё остальное содержание убрать.
3. Удалить разделы Vietnam, About, Contact Us — страницы, ссылки в навигации (desktop + mobile), маршруты и упоминания в Footer.
4. Оставить навигацию: Home, Cyprus, Kite Safari, Brazil, Gallery.

## Шаг 1 — Backup
Создать zip-архив всего репозитория (исключая `node_modules`, `dist`, `.git`) и положить его в `/mnt/documents/ogo-backup-2026-06-14.zip`. Я отдам его через `<presentation-artifact>` — ты сможешь скачать одним кликом и хранить локально как точку отката.

Дополнительно: напомню, что в любой момент можно откатиться через History в чате — это вторая страховка.

## Шаг 2 — Home (`src/pages/Index.tsx`)
Оставить только:
- `Navbar`
- `Hero`
- `Footer`

Удалить из Index.tsx использование и импорты:
- `EnhancedBookingPopup`, `ContactCTA`, `TrustIndicators`, `CalendarLocations`
- `MeetYourCoachIntro`, `WhyImDifferent`, `CoachStatsTrustBar`, `WhyMyMethodWorks`
- Блок testimonials (Misha/Kate/Ilya) и секцию Guest Experiences
- `RevealOnScroll`, `AnimatedLine`, `StaggeredList`, `useState`, `useLanguage` (если больше не нужны)

Файлы компонентов на диске пока **не удаляю** — оставлю в `src/components/` на случай, если захочешь вернуть отдельные секции. Скажи, если нужно вычистить и их.

## Шаг 3 — Удаление страниц
Удалить файлы:
- `src/pages/Vietnam.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`
- `src/components/VietnamBookingPopup.tsx` (используется только на Vietnam)
- Все `src/components/cyprus/...` НЕ трогаю — Cyprus остаётся.

## Шаг 4 — Роутинг (`src/App.tsx`)
Убрать маршруты `/vietnam`, `/about`, `/contact` и их импорты. Оставить: `/`, `/cyprus`, `/kite-safari`, `/brazil`, `/gallery`, `*` (NotFound).

## Шаг 5 — Навигация
- `src/components/Navbar.tsx` — удалить пункты Vietnam, About, Contact (desktop + mobile menu).
- `src/components/Footer.tsx` — удалить ссылки на эти страницы.
- `src/components/ContactFAB.tsx` оставляю (это глобальная кнопка WhatsApp/Telegram, по памяти проекта она нужна на всех страницах).
- Внутренние ссылки `to="/contact"` / `to="/about"` / `to="/vietnam"` в оставшихся страницах (Cyprus, KiteSafari, Brazil, Gallery) заменю на безопасные:
  - ссылки "contact" → на WhatsApp `https://wa.me/48884035225`
  - ссылки на Vietnam / About → удалить или указать на Home.

## Шаг 6 — i18n
Ключи переводов для Vietnam/About/Contact в `src/i18n/translations.ts` оставлю как есть (не сломает сборку). Удалять не буду, чтобы не зацепить случайно что-то ещё. Скажи, если хочешь почистить.

## Технические детали
- Edge-функции (`send-contact-email`, `meta-capi`) **не удаляю** — `meta-capi` используется для трекинга на всех страницах, `send-contact-email` может ещё пригодиться. Если хочешь снести `send-contact-email` — отдельной командой.
- Память проекта (`mem://pages/vietnam-camp/*`, `mem://pages/contact/*`) почищу после удаления страниц, чтобы не вводить в заблуждение будущие правки.
- После правок проверю сборку и открою preview, чтобы убедиться что нет битых ссылок и роуты работают.

## Что НЕ делаю (подтверди если нужно)
- Не удаляю файлы секций Home с диска (MeetYourCoach, WhyImDifferent и т.д.).
- Не чищу i18n ключи Vietnam/About/Contact.
- Не удаляю edge-функции.

Подтверди план — и я выполню всё одним заходом.