# Библиотека

- Реализованы Требования к функциональности, описанные в прикрепленном документе.
  - ⚠️ Вместо **history** реализовал добавление отзыва у книги (можно добавить комментарий и обязательно указать количество звезд). 💫

## **1 уровень (необходимый минимум)**

## React

- Пишем функциональные компоненты c хуками в приоритете над классовыми.
  Все компоненты функциональные, кроме ErrorBoundary.

- Есть четкое разделение на умные и глупые компоненты:

  - [Пример глупых](https://github.com/Skyranor/library/tree/main/src/components/UI) 🐣
  - [Пример умного](https://github.com/Skyranor/library/blob/main/src/pages/Main/index.tsx) 🧠

- Есть рендеринг списков:

  - [BookList](https://github.com/Skyranor/library/blob/main/src/components/Books/BookList/index.tsx#L34) 📚
  - [Categories](https://github.com/Skyranor/library/blob/main/src/components/Categories/index.tsx#L21) 📂
  - [Feedbacks](https://github.com/Skyranor/library/blob/main/src/components/Feedbacks/index.tsx#L23) 📝

- Реализована хотя бы одна форма:

  - [AuthPage](https://github.com/Skyranor/library/blob/main/src/pages/Auth/index.tsx#L51) 🔒
  - [RegistrationPage](https://github.com/Skyranor/library/blob/main/src/pages/Registration/index.tsx#L60) 📝

- Есть применение Контекст API:

  - [Создание контекста](https://github.com/Skyranor/library/blob/main/src/Context/ScreenWidthContext.ts) 🌐
  - [Применение контекста](https://github.com/Skyranor/library/blob/main/src/components/Header/index.tsx#L21) 🧩

- Есть применение предохранителя:

  - [Применение](https://github.com/Skyranor/library/blob/main/src/main.tsx#L19) 🚧
  - [предохранителя](https://github.com/Skyranor/library/blob/main/src/ErrorBoundary/index.tsx) 🚫

- Есть хотя бы один кастомный хук:

  - [Все хуки проекта](https://github.com/Skyranor/library/blob/main/src/hooks/index.ts#L9) 🎣

- Хотя бы несколько компонентов используют PropTypes:

  - [Rating](https://github.com/Skyranor/library/blob/main/src/components/Rating/index.tsx#L32) ⭐️
  - [IconButton](https://github.com/Skyranor/library/blob/main/src/components/UI/buttons/IconButton/index.tsx#L25) 🔘

- Поиск не должен триггерить много запросов к серверу:

  - [Реализован на стороне клиента](https://github.com/Skyranor/library/blob/main/src/components/Search/index.tsx#L19) 🔎

- Есть применение lazy + Suspense:
  - [lazy](https://github.com/Skyranor/library/blob/main/src/router/index.ts#L6) + [Suspense](https://github.com/Skyranor/library/blob/main/src/main.tsx#L21) 🚀

## Redux

- Используем Modern Redux with Redux Toolkit:

  - [Redux Toolkit](https://github.com/Skyranor/library/blob/main/src/redux/store.ts) 🛠️

- Используем слайсы:

  - [Слайсы](https://github.com/Skyranor/library/blob/main/src/redux/books/booksSlice.ts) 🍰

- Есть хотя бы одна кастомная мидлвара:

  - [authenticationMiddleware](https://github.com/Skyranor/library/blob/main/src/redux/middlewares/authenticationMiddleware.ts) 🗝️

- Используется RTK Query:

  - [RTK Query](https://github.com/Skyranor/library/blob/main/src/redux/api/apiSlice.ts) 🚀

- Используется Transforming Responses:
  - [transformResponse](https://github.com/Skyranor/library/blob/main/src/redux/api/apiSlice.ts#L66) 🔄

## **2 уровень (необязательный)**

- Использование TypeScript:

- Используются мемоизированные селекторы (createSelector):

  - [Селектор](https://github.com/Skyranor/library/blob/main/src/redux/books/selectors.ts#L15) 🎯

- Подключен Storybook и созданы несколько сторис:
  - [Button](https://github.com/Skyranor/library/blob/main/src/components/UI/buttons/Button/Button.stories.tsx) 📕
  - [Rating](https://github.com/Skyranor/library/blob/main/src/components/Rating/Rating.stories.tsx) ⭐️
