# Austria Move & Study

Веб-приложение для компании, помогающей с иммиграцией в Австрию.

## Технологии

- **React 18** + **TypeScript**
- **Vite** - сборщик и dev-сервер
- **Wouter** - роутинг
- **Tailwind CSS** + **shadcn/ui** - стилизация
- **Framer Motion** - анимации
- **React Hook Form** + **Zod** - формы и валидация
- **TanStack Query** - управление состоянием

## Установка

```bash
npm install
```

## Разработка

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

## Сборка

```bash
npm run build
```

Собранные файлы будут в папке `dist/`

## Предпросмотр сборки

```bash
npm run preview
```

## Структура проекта

```
src/
├── components/      # React компоненты
│   ├── layout/     # Navbar, Footer
│   ├── shared/     # ContactForm
│   └── ui/         # UI компоненты (shadcn/ui)
├── pages/          # Страницы приложения
├── hooks/          # React хуки
├── lib/            # Утилиты и конфигурация
└── index.css       # Глобальные стили
```

## Страницы

- `/` - Главная
- `/migration` - Иммиграция
- `/students` - Образование
- `/support` - Сопровождение
- `/prices` - Цены
- `/about` - О компании
- `/contact` - Контакты
