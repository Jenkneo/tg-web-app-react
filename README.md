
# Energy-Library Frontend

Developed by Stylua Inc (c) Developers

-   [Jenkneo](https://github.com/Jenkneo)
-   [nuafirytiasewo](https://github.com/nuafirytiasewo)

💻 Languages and Tools : ![Технологии](https://skillicons.dev/icons?i=js,html,css,react)

## Общая структура проекта

```sh
react/
│
├── public/
│   ├── favicon.ico       # Иконка для вкладки браузера
│   ├── index.html        # Основной HTML-файл приложения
│   ├── logo192.png       # Логотип 192x192 для PWA
│   ├── logo512.png       # Логотип 512x512 для PWA
│   ├── manifest.json     # Конфигурация для PWA
│   └── robots.txt        # Указания для поисковых систем
│
├── src/
│   ├── components/       # Каталог компонентов
│      ├── Card/          # Компонент для карточек товара
│      ├── Energy/        
│         ├── EnergyCard/ # Компонент для отображения карточки продукта
│      ├── EnergyList/    # Компонент для списка продуктов
│      ├── Navigation/    # Компоненты для навигации
│      ├── Profile/       # Компоненты профиля пользователя
│         ├── Info/       # Информация о пользователе
│         ├── Stats/      # Статистика профиля
│
│   ├── hooks/                    # Пользовательские хуки
│      ├── UseEnergy.js           # Хук для получения списка энергетиков
│      ├── UseEnergyDetails.js    # Хук для получения деталей энергетика
│      ├── UseTelegram.js         # Хук для работы с API Telegram
│      ├── UseUserVerification.js # Хук для верификации пользователя
│
│   ├── App.css           # Основные стили приложения
│   ├── App.js            # Главный компонент приложения
│   ├── config.js         # Конфигурация приложения (например, API URL)
│   └── index.js          # Точка входа приложения, подключает React
│
├── package.json          # Зависимости и скрипты проекта
```


## Запуск проекта

После скачивания просто установите все зависимости и запустите проект.

    npm install && npm start

Проект должен запустится на порту 3000

## Использование с Telegram

Так как телеграм не хочет работать с http, а нам необходимо как-то тестировать приложение, то существуют следующие варианты:

- Задеплоить проект куда-нибудь, например на https://www.netlify.com/
- Использовать https://ngrok.com/ чтобы пробросить проект в интернет.

Почитать гайд, как пользоваться ngrok можно тут - [telegra.ph](https://telegra.ph/Ngrok-dlya-chajnikov-08-30)