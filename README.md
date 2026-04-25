# React + Vite
# Traveller — Веб-сайт туроператора

Современное React-приложение для поиска и бронирования туров, авиабилетов и отелей. Проект построен на `Vite` для максимальной скорости разработки и производительности.


## ✨ Основной функционал

- **Главная страница** с рекомендациями туров
- **Поиск и подбор туров** по направлениям, датам и бюджету
- **Поиск авиабилетов** с удобной фильтрацией
- **Каталог отелей** с фотографиями, отзывами 
- **Корзина** для сбора выбранных услуг перед оплатой
- **Личный кабинет**:
  - История бронирований
  - Сохранённые избранные туры/отели
  - Личные данные и настройки уведомлений



## 🛠 Технологический стек

| Технология | Назначение |
|------------|------------|
| **React 18** | UI-библиотека |
| **Vite** | Сборщик и дев-сервер |
| **React Router v6** | Маршрутизация |
| **React Context / Redux Toolkit** | Управление состоянием *(выберите свой вариант)* |
| **Axios** | HTTP-запросы к API |
| **SCSS / CSS Modules / Tailwind** | Стилизация *(укажите свой вариант)* |
| **ESLint + Prettier** | Качество кода |



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
