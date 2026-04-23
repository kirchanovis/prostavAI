# prostavAI

Новостной портал города **Ставрополя**.

Проект на **React + TypeScript** (Vite) с интерфейсом на **Ant Design**.

На первом этапе используем моковые данные и эмулируем вызовы API через `fetch`-подобный слой (без настоящего бэкенда). Позже заменим моки на реальные эндпоинты.

## Git flow (ветки и PR)

- Основная ветка разработки: **`develop`** (в неё мержим все изменения)
- Ветки:
  - `feature/<scope>-<short-desc>` — новая функциональность
  - `fix/<scope>-<short-desc>` — багфиксы
  - `docs/<short-desc>` — документация
  - `refactor/<scope>-<short-desc>` — рефакторинг
  - `admin/<scope>-<short-desc>` — автоматические/сервисные PR от Admin
- PR:
  - Base: **`develop`**
  - Названия PR (и коммитов) в стиле:
    - `feat(header): ...`
    - `fix(home): ...`
    - `docs: ...`

## Запуск

```bash
npm install
npm run dev
```
