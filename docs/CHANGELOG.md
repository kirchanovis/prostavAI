# Changelog

Короткая история изменений в проекте (в т.ч. автоматические PR от Admin).

## Unreleased

### UI / News cards

- NewsCard: фиксированный размер, стили карточки/категории/меты, относительное время с правильным склонением, отказ от AntD
- NewsImageCard: вариант карточки с фоном‑фото и белым текстом (локальные ассеты)
- AdImageCard: вариант «Реклама» с бейджем ROX
- NewsImageWideCard: wide‑карточка 620px + кнопка «Хронология событий»
- NewsVideoCard: 620px split‑карточка (слева фото + IconPlay, справа текстовый блок)

### UI kit

- UI Kit: добавлены демо‑блоки для карточек новостей и TopNav

### Misc

- Home: карточки новостей на главной
- Mocks: обновлены тексты демо‑комментариев

## 2026-04

- UI tokens: типографика (Fira Sans) и цветовая палитра (CSS variables)
- UI: страница `/ui` (UI kit) для демонстрации токенов/иконок/компонентов
- Icons: SVG-иконки добавлены как React-компоненты
- Tooling: ESLint (Airbnb-like), Husky (pre-commit lint), Prettier + lint-staged
- Routing: react-router + верхнее горизонтальное меню
- Mocks: данные и mockFetch для news/photos/report
