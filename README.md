# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Проект "Канбан-доска"

## Тест-план

### Авторизация, регистрация, выход:

-   Регистрация нового пользователя с корректными данными работает.
-   Интерфейс корректно обрабатывает регистрацию с уже существующим логином.
-   Авторизация с корректными данными работает.
-   Интерфейс корректно обрабатывает авторизацию с некорректными данными (несуществующий логин, неправильный пароль).
-   После успешной авторизации/регистрации пользователь попадает на страницу задач.
-   После обновления страницы авторизация сохраняется.
-   Кнопка «Да, выйти» сбрасывает авторизацию, то есть пользователь становится неавторизованным.
-   При нажатии на «Выйти» пользователю раскрывается окно с подтверждением выхода из аккаунта. При нажатии «Да, выйти» происходит выход. При нажатии «Нет, остаться» на экране остается канбан, а окно «Выйти из аккаунта» закрывается.

### Канбан-доска:

-   Если пользователь не авторизован, то при попытке перехода на защищенные страницы («Доска с карточками», «Просмотр карточки», «Выход из аккаунта») приложение должно перенаправить пользователя на страницу логина.
-   Во время загрузки задач отображается лоадер.
-   При переходе на несуществующую страницу пользователь попадает на страницу Not Found.
-   Переходы между страницами работают без перезагрузки приложения.
-   В случае ошибки при загрузке данных из API отображается соответствующее сообщение об ошибке.
-   При нажатии на «Окошко пользователя» пользователю раскрывается окно, где отображаются его имя и почта, а также есть возможность выхода из аккаунта.

### Добавление задачи:

-   При нажатии на кнопку «Создать новую задачу» пользователю раскрывается окно с созданием задачи.
    Задний фон с канбаном при открытии окна затемняется.
-   Авторизованные пользователи могут добавить пост с корректными данными.
-   Отображается ошибка при неполном заполнении полей.
-   Добавление задачи с корректными данными работает.
-   Новые задачи добавляются автоматически в столбец "Без статуса".

### Редактирование, удаление задачи:

-   При нажатии на три точки на карточке задачи открывается окно для редактирования задачи.
-   В окне редактирования задачи можно изменить статус, дату и описание задачи.
-   При введенных изменениях, после нажатия на кнопку "Редактировать задачу" пользователь переходит на главную страницу с обновленной задачей.
-   При нажатии на кнопку "Удалить задачу" пользователь переходит на главную страницу и задача удаляется.

### Интерфейсные «плюшки»:

-   Тестирование адаптивности и кроссбраузерности.

### Безопасность:

-   HTML-теги, введённые в формах приложения, не должны срабатывать в месте вывода. Они должны отображаться как текст.
