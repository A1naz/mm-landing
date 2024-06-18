$(document).ready(function () {
  var price = {
    wb: {
      launch: {
        basic: {
          month1: {
            btns: [
              {
                name: "demo",
                price: 7500,
                isActive: true,
              },
              {
                name: "start",
                price: 0,
                isActive: false,
              },
              {
                name: "pro",
                price: 0,
                isActive: false,
              },
              {
                name: "vip",
                price: 0,
                isActive: false,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", 25, false, false, false],
                  ["Публикация отзывов, шт.", 5, false, false, false],
                  ["Лайки на бренд, шт.", 25, false, false, false],
                  ["Вопросы бренду / товару, шт.", 10, false, false, false],
                  ["Добавление в корзину, шт.", 25, false, false, false],
                  ["Автоответы на отзывы, SKU", 1, false, false, false],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", 50, false, false, false],
                  ["Выкуп в ближайшее время, шт.", 10, false, false, false],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    15,
                    false,
                    false,
                    false,
                  ],
                  ["Изучение карточки 60 секунд, шт.", 5, false, false, false],
                  ["Выкупить с рекламы, шт.", 15, false, false, false],
                  ["Выкупить с сортировки, шт.", 10, false, false, false],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", true, false, false, false],
                  ["Технический менеджер", true, false, false, false],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 40000,
                isActive: true,
              },
              {
                name: "pro",
                price: 80000,
                isActive: true,
              },
              {
                name: "vip",
                price: 160000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 150, 300, 600],
                  ["Публикация отзывов, шт.", false, 30, 60, 120],
                  ["Лайки на бренд, шт.", false, 150, 300, 600],
                  ["Вопросы бренду / товару, шт.", false, 30, 60, 120],
                  ["Добавление в корзину, шт.", false, 150, 300, 300],
                  ["Автоответы на отзывы, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 300, 600, 1200],
                  ["Выкуп в ближайшее время, шт.", false, 30, 60, 120],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    75,
                    125,
                    200,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 30, 60, 120],
                  ["Выкупить с рекламы, шт.", false, 75, 150, 300],
                  ["Выкупить с сортировки, шт.", false, 30, 60, 120],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 80000,
                isActive: true,
              },
              {
                name: "pro",
                price: 155000,
                isActive: true,
              },
              {
                name: "vip",
                price: 310000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 300, 600, 1200],
                  ["Публикация отзывов, шт.", false, 60, 120, 240],
                  ["Лайки на бренд, шт.", false, 300, 600, 1200],
                  ["Вопросы бренду / товару, шт.", false, 60, 120, 240],
                  ["Добавление в корзину, шт.", false, 300, 600, 1200],
                  ["Автоответы на отзывы, SKU", false, 7, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 600, 1200, 2400],
                  ["Выкуп в ближайшее время, шт.", false, 60, 120, 240],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    150,
                    300,
                    600,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 60, 120, 240],
                  ["Выкупить с рекламы, шт.", false, 150, 300, 600],
                  ["Выкупить с сортировки, шт.", false, 60, 120, 240],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 140000,
                isActive: true,
              },
              {
                name: "pro",
                price: 280000,
                isActive: true,
              },
              {
                name: "vip",
                price: 555000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 600, 1200, 2400],
                  ["Публикация отзывов, шт.", false, 120, 240, 480],
                  ["Лайки на бренд, шт.", false, 600, 1200, 2400],
                  ["Вопросы бренду / товару, шт.", false, 120, 240, 480],
                  ["Добавление в корзину, шт.", false, 600, 1200, 2400],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 1200, 2400, 4800],
                  ["Выкуп в ближайшее время, шт.", false, 120, 240, 480],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    300,
                    600,
                    1200,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 120, 240, 480],
                  ["Выкупить с рекламы, шт.", false, 300, 600, 1200],
                  ["Выкупить с сортировки, шт.", false, 120, 240, 480],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
        full: {
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 55000,
                isActive: true,
              },
              {
                name: "pro",
                price: 105000,
                isActive: true,
              },
              {
                name: "vip",
                price: 210000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 150, 300, 600],
                  ["Публикация отзывов, шт.", false, 30, 60, 120],
                  ["Лайки на бренд, шт.", false, 150, 300, 600],
                  ["Вопросы бренду / товару, шт.", false, 30, 60, 120],
                  ["Добавление в корзину, шт.", false, 150, 300, 300],
                  ["Автоответы на отзывы, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 300, 600, 1200],
                  ["Выкуп в ближайшее время, шт.", false, 30, 60, 120],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    75,
                    125,
                    200,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 30, 60, 120],
                  ["Выкупить с рекламы, шт.", false, 75, 150, 300],
                  ["Выкупить с сортировки, шт.", false, 30, 60, 120],
                  ["Логистика (доп оплата)", false, 150, 300, 600],
                  ["Базовая стратегия, SKU", false, 3, 5, 7],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 100000,
                isActive: true,
              },
              {
                name: "pro",
                price: 200000,
                isActive: true,
              },
              {
                name: "vip",
                price: 400000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 300, 600, 1200],
                  ["Публикация отзывов, шт.", false, 60, 120, 240],
                  ["Лайки на бренд, шт.", false, 300, 600, 1200],
                  ["Вопросы бренду / товару, шт.", false, 60, 120, 240],
                  ["Добавление в корзину, шт.", false, 300, 600, 1200],
                  ["Автоответы на отзывы, SKU", false, 7, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 600, 1200, 2400],
                  ["Выкуп в ближайшее время, шт.", false, 60, 120, 240],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    150,
                    300,
                    600,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 60, 120, 240],
                  ["Выкупить с рекламы, шт.", false, 150, 300, 600],
                  ["Выкупить с сортировки, шт.", false, 60, 120, 240],
                  ["Логистика (доп оплата)", false, 300, 600, 1200],
                  ["Базовая стратегия, SKU", false, 5, 7, 12],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 185000,
                isActive: true,
              },
              {
                name: "pro",
                price: 370000,
                isActive: true,
              },
              {
                name: "vip",
                price: 740000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 600, 1200, 2400],
                  ["Публикация отзывов, шт.", false, 120, 240, 480],
                  ["Лайки на бренд, шт.", false, 600, 1200, 2400],
                  ["Вопросы бренду / товару, шт.", false, 120, 240, 480],
                  ["Добавление в корзину, шт.", false, 600, 1200, 2400],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 1200, 2400, 4800],
                  ["Выкуп в ближайшее время, шт.", false, 120, 240, 480],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    300,
                    600,
                    1200,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 120, 240, 480],
                  ["Выкупить с рекламы, шт.", false, 300, 600, 1200],
                  ["Выкупить с сортировки, шт.", false, 120, 240, 480],
                  ["Логистика (доп оплата)", false, 600, 1200, 2400],
                  ["Базовая стратегия, SKU", false, 7, 12, 25],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
      },
      increase: {
        basic: {
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 135000,
                isActive: true,
              },
              {
                name: "pro",
                price: 405000,
                isActive: true,
              },
              {
                name: "vip",
                price: 805000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 500, 1500, 3000],
                  ["Публикация отзывов, шт.", false, 100, 300, 600],
                  ["Лайки на бренд, шт.", false, 500, 1500, 3000],
                  ["Вопросы бренду / товару, шт.", false, 100, 300, 600],
                  ["Добавление в корзину, шт.", false, 250, 750, 1500],
                  ["Автоответы на отзывы, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 1000, 3000, 6000],
                  ["Выкуп в ближайшее время, шт.", false, 100, 300, 600],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    150,
                    450,
                    900,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 150, 450, 900],
                  ["Выкупить с рекламы, шт.", false, 250, 750, 1500],
                  ["Выкупить с сортировки, шт.", false, 100, 300, 600],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 385000,
                isActive: true,
              },
              {
                name: "pro",
                price: 770000,
                isActive: true,
              },
              {
                name: "vip",
                price: 1550000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 1500, 3000, 6000],
                  ["Публикация отзывов, шт.", false, 300, 600, 1200],
                  ["Лайки на бренд, шт.", false, 1500, 3000, 6000],
                  ["Вопросы бренду / товару, шт.", false, 300, 600, 1200],
                  ["Добавление в корзину, шт.", false, 750, 1500, 3000],
                  ["Автоответы на отзывы, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 3000, 6000, 12000],
                  ["Выкуп в ближайшее время, шт.", false, 300, 600, 1200],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    450,
                    600,
                    1200,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 450, 900, 1800],
                  ["Выкупить с рекламы, шт.", false, 750, 1500, 3000],
                  ["Выкупить с сортировки, шт.", false, 300, 600, 1200],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 690000,
                isActive: true,
              },
              {
                name: "pro",
                price: 1380000,
                isActive: true,
              },
              {
                name: "vip",
                price: 2300000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 3000, 6000, 10000],
                  ["Публикация отзывов, шт.", false, 600, 1200, 2000],
                  ["Лайки на бренд, шт.", false, 3000, 6000, 10000],
                  ["Вопросы бренду / товару, шт.", false, 600, 1200, 2000],
                  ["Добавление в корзину, шт.", false, 1500, 3000, 5000],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 6000, 12000, 20000],
                  ["Выкуп в ближайшее время, шт.", false, 600, 1200, 2000],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    900,
                    1800,
                    3000,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 900, 1800, 3000],
                  ["Выкупить с рекламы, шт.", false, 1500, 3000, 5000],
                  ["Выкупить с сортировки, шт.", false, 600, 1200, 2000],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
        full: {
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 155000,
                isActive: true,
              },
              {
                name: "pro",
                price: 460000,
                isActive: true,
              },
              {
                name: "vip",
                price: 920000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 500, 1500, 3000],
                  ["Публикация отзывов, шт.", false, 100, 300, 600],
                  ["Лайки на бренд, шт.", false, 500, 1500, 3000],
                  ["Вопросы бренду / товару, шт.", false, 100, 300, 600],
                  ["Добавление в корзину, шт.", false, 250, 750, 1500],
                  ["Автоответы на отзывы, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 1000, 3000, 6000],
                  ["Выкуп в ближайшее время, шт.", false, 100, 300, 600],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    150,
                    450,
                    900,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 150, 450, 900],
                  ["Выкупить с рекламы, шт.", false, 250, 750, 1500],
                  ["Выкупить с сортировки, шт.", false, 100, 300, 600],
                  ["Логистика (доп оплата)", false, 500, 1500, 3000],
                  ["Базовая стратегия, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 460000,
                isActive: true,
              },
              {
                name: "pro",
                price: 920000,
                isActive: true,
              },
              {
                name: "vip",
                price: 1840000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 1500, 3000, 6000],
                  ["Публикация отзывов, шт.", false, 300, 600, 1200],
                  ["Лайки на бренд, шт.", false, 1500, 3000, 6000],
                  ["Вопросы бренду / товару, шт.", false, 300, 600, 1200],
                  ["Добавление в корзину, шт.", false, 750, 1500, 3000],
                  ["Автоответы на отзывы, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 3000, 6000, 12000],
                  ["Выкуп в ближайшее время, шт.", false, 300, 600, 1200],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    450,
                    600,
                    2120040,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 450, 900, 1800],
                  ["Выкупить с рекламы, шт.", false, 750, 1500, 3000],
                  ["Выкупить с сортировки, шт.", false, 300, 600, 1200],
                  ["Логистика (доп оплата)", false, 500, 1500, 6000],
                  ["Базовая стратегия, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 920000,
                isActive: true,
              },
              {
                name: "pro",
                price: 1840000,
                isActive: true,
              },
              {
                name: "vip",
                price: 3100000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 3000, 6000, 10000],
                  ["Публикация отзывов, шт.", false, 600, 1200, 2000],
                  ["Лайки на бренд, шт.", false, 3000, 6000, 10000],
                  ["Вопросы бренду / товару, шт.", false, 600, 1200, 2000],
                  ["Добавление в корзину, шт.", false, 1500, 3000, 5000],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 6000, 12000, 20000],
                  ["Выкуп в ближайшее время, шт.", false, 600, 1200, 2000],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    900,
                    1800,
                    3000,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 900, 1800, 3000],
                  ["Выкупить с рекламы, шт.", false, 1500, 3000, 5000],
                  ["Выкупить с сортировки, шт.", false, 600, 1200, 2000],
                  ["Логистика (доп оплата)", false, 3000, 6000, 10000],
                  ["Базовая стратегия, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
      },
      support: {
        basic: {
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 405000,
                isActive: true,
              },
              {
                name: "pro",
                price: 805000,
                isActive: true,
              },
              {
                name: "vip",
                price: 1610000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 1500, 3000, 6000],
                  ["Публикация отзывов, шт.", false, 300, 600, 1200],
                  ["Лайки на бренд, шт.", false, 1500, 3000, 6000],
                  ["Вопросы бренду / товару, шт.", false, 300, 600, 1200],
                  ["Добавление в корзину, шт.", false, 750, 1500, 3000],
                  ["Автоответы на отзывы, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 3000, 6000, 12000],
                  ["Выкуп в ближайшее время, шт.", false, 300, 600, 1200],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    450,
                    900,
                    1800,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 450, 900, 1800],
                  ["Выкупить с рекламы, шт.", false, 750, 1500, 3000],
                  ["Выкупить с сортировки, шт.", false, 300, 600, 1200],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 770000,
                isActive: true,
              },
              {
                name: "pro",
                price: 1540000,
                isActive: true,
              },
              {
                name: "vip",
                price: 2600000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 3000, 6000, 10000],
                  ["Публикация отзывов, шт.", false, 600, 1200, 2400],
                  ["Лайки на бренд, шт.", false, 3000, 6000, 10000],
                  ["Вопросы бренду / товару, шт.", false, 600, 1200, 2400],
                  ["Добавление в корзину, шт.", false, 1350, 2700, 5400],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 100],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 6000, 12000, 20000],
                  ["Выкуп в ближайшее время, шт.", false, 600, 1200, 2400],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    900,
                    1800,
                    3600,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 900, 1800, 3600],
                  ["Выкупить с рекламы, шт.", false, 1500, 3000, 5000],
                  ["Выкупить с сортировки, шт.", false, 600, 1200, 2400],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 1380000,
                isActive: true,
              },
              {
                name: "pro",
                price: 2340000,
                isActive: true,
              },
              {
                name: "vip",
                price: 3525000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 6000, 10000, 15000],
                  ["Публикация отзывов, шт.", false, 1200, 2400, 4800],
                  ["Лайки на бренд, шт.", false, 6000, 10000, 15000],
                  ["Вопросы бренду / товару, шт.", false, 1200, 2000, 2500],
                  ["Добавление в корзину, шт.", false, 3000, 5000, 7500],
                  ["Автоответы на отзывы, SKU", false, 50, 100, 250],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 12000, 20000, 40000],
                  ["Выкуп в ближайшее время, шт.", false, 1200, 2400, 5000],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    2000,
                    3000,
                    5000,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 1800, 3000, 5000],
                  ["Выкупить с рекламы, шт.", false, 2500, 5000, 7500],
                  ["Выкупить с сортировки, шт.", false, 1200, 2400, 4500],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
        full: {
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 520000,
                isActive: true,
              },
              {
                name: "pro",
                price: 1035000,
                isActive: true,
              },
              {
                name: "vip",
                price: 2070000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 1500, 3000, 6000],
                  ["Публикация отзывов, шт.", false, 300, 600, 1200],
                  ["Лайки на бренд, шт.", false, 1500, 3000, 6000],
                  ["Вопросы бренду / товару, шт.", false, 300, 600, 1200],
                  ["Добавление в корзину, шт.", false, 750, 1500, 3000],
                  ["Автоответы на отзывы, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 3000, 6000, 12000],
                  ["Выкуп в ближайшее время, шт.", false, 300, 600, 1200],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    450,
                    900,
                    1800,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 450, 900, 1800],
                  ["Выкупить с рекламы, шт.", false, 750, 1500, 3000],
                  ["Выкупить с сортировки, шт.", false, 300, 600, 1200],
                  ["Логистика (доп оплата)", false, 500, 1500, 3000],
                  ["Базовая стратегия, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 977000,
                isActive: true,
              },
              {
                name: "pro",
                price: 1960000,
                isActive: true,
              },
              {
                name: "vip",
                price: 3280000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 3000, 6000, 10000],
                  ["Публикация отзывов, шт.", false, 600, 1200, 2400],
                  ["Лайки на бренд, шт.", false, 3000, 6000, 10000],
                  ["Вопросы бренду / товару, шт.", false, 600, 1200, 2400],
                  ["Добавление в корзину, шт.", false, 1350, 2700, 5400],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 100],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 6000, 12000, 20000],
                  ["Выкуп в ближайшее время, шт.", false, 600, 1200, 2400],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    900,
                    1800,
                    3600,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 900, 1800, 3600],
                  ["Выкупить с рекламы, шт.", false, 1500, 3000, 5000],
                  ["Выкупить с сортировки, шт.", false, 600, 1200, 2400],
                  ["Логистика (доп оплата)", false, 1500, 3000, 6000],
                  ["Базовая стратегия, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 1840000,
                isActive: true,
              },
              {
                name: "pro",
                price: 3120000,
                isActive: true,
              },
              {
                name: "vip",
                price: 4700000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 6000, 10000, 15000],
                  ["Публикация отзывов, шт.", false, 1200, 2400, 4800],
                  ["Лайки на бренд, шт.", false, 6000, 10000, 15000],
                  ["Вопросы бренду / товару, шт.", false, 1200, 2000, 2500],
                  ["Добавление в корзину, шт.", false, 3000, 5000, 7500],
                  ["Автоответы на отзывы, SKU", false, 50, 100, 250],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 12000, 20000, 40000],
                  ["Выкуп в ближайшее время, шт.", false, 1200, 2400, 5000],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    2000,
                    3000,
                    5000,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 1800, 3000, 5000],
                  ["Выкупить с рекламы, шт.", false, 2500, 5000, 7500],
                  ["Выкупить с сортировки, шт.", false, 1200, 2400, 4500],
                  ["Логистика (доп оплата)", false, 3000, 6000, 10000],
                  ["Базовая стратегия, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
      },
    },
    ozon: {
      launch: {
        basic: {
          month1: {
            btns: [
              {
                name: "demo",
                price: 7500,
                isActive: true,
              },
              {
                name: "start",
                price: 0,
                isActive: false,
              },
              {
                name: "pro",
                price: 0,
                isActive: false,
              },
              {
                name: "vip",
                price: 0,
                isActive: false,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", 25, false, false, false],
                  ["Публикация отзывов, шт.", 5, false, false, false],
                  ["Лайки на бренд, шт.", 25, false, false, false],
                  ["Вопросы бренду / товару, шт.", 10, false, false, false],
                  ["Добавление в корзину, шт.", 25, false, false, false],
                  ["Автоответы на отзывы, SKU", 1, false, false, false],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", 50, false, false, false],
                  ["Выкуп в ближайшее время, шт.", 10, false, false, false],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    15,
                    false,
                    false,
                    false,
                  ],
                  ["Изучение карточки 60 секунд, шт.", 5, false, false, false],
                  ["Выкупить с рекламы, шт.", 15, false, false, false],
                  ["Выкупить с сортировки, шт.", 10, false, false, false],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", true, false, false, false],
                  ["Технический менеджер", true, false, false, false],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 46000,
                isActive: true,
              },
              {
                name: "pro",
                price: 92000,
                isActive: true,
              },
              {
                name: "vip",
                price: 184000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 150, 300, 600],
                  ["Публикация отзывов, шт.", false, 30, 60, 120],
                  ["Лайки на бренд, шт.", false, 150, 300, 600],
                  ["Вопросы бренду / товару, шт.", false, 30, 60, 120],
                  ["Добавление в корзину, шт.", false, 150, 300, 300],
                  ["Автоответы на отзывы, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 300, 600, 1200],
                  ["Выкуп в ближайшее время, шт.", false, 30, 60, 120],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    75,
                    125,
                    200,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 30, 60, 120],
                  ["Выкупить с рекламы, шт.", false, 75, 150, 300],
                  ["Выкупить с сортировки, шт.", false, 30, 60, 120],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 90000,
                isActive: true,
              },
              {
                name: "pro",
                price: 175000,
                isActive: true,
              },
              {
                name: "vip",
                price: 350000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 300, 600, 1200],
                  ["Публикация отзывов, шт.", false, 60, 120, 240],
                  ["Лайки на бренд, шт.", false, 300, 600, 1200],
                  ["Вопросы бренду / товару, шт.", false, 60, 120, 240],
                  ["Добавление в корзину, шт.", false, 300, 600, 1200],
                  ["Автоответы на отзывы, SKU", false, 7, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 600, 1200, 2400],
                  ["Выкуп в ближайшее время, шт.", false, 60, 120, 240],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    150,
                    300,
                    600,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 60, 120, 240],
                  ["Выкупить с рекламы, шт.", false, 150, 300, 600],
                  ["Выкупить с сортировки, шт.", false, 60, 120, 240],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 160000,
                isActive: true,
              },
              {
                name: "pro",
                price: 315000,
                isActive: true,
              },
              {
                name: "vip",
                price: 627000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 600, 1200, 2400],
                  ["Публикация отзывов, шт.", false, 120, 240, 480],
                  ["Лайки на бренд, шт.", false, 600, 1200, 2400],
                  ["Вопросы бренду / товару, шт.", false, 120, 240, 480],
                  ["Добавление в корзину, шт.", false, 600, 1200, 2400],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 1200, 2400, 4800],
                  ["Выкуп в ближайшее время, шт.", false, 120, 240, 480],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    300,
                    600,
                    1200,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 120, 240, 480],
                  ["Выкупить с рекламы, шт.", false, 300, 600, 1200],
                  ["Выкупить с сортировки, шт.", false, 120, 240, 480],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
        full: {
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 60000,
                isActive: true,
              },
              {
                name: "pro",
                price: 120000,
                isActive: true,
              },
              {
                name: "vip",
                price: 240000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 150, 300, 600],
                  ["Публикация отзывов, шт.", false, 30, 60, 120],
                  ["Лайки на бренд, шт.", false, 150, 300, 600],
                  ["Вопросы бренду / товару, шт.", false, 30, 60, 120],
                  ["Добавление в корзину, шт.", false, 150, 300, 300],
                  ["Автоответы на отзывы, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 300, 600, 1200],
                  ["Выкуп в ближайшее время, шт.", false, 30, 60, 120],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    75,
                    125,
                    200,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 30, 60, 120],
                  ["Выкупить с рекламы, шт.", false, 75, 150, 300],
                  ["Выкупить с сортировки, шт.", false, 30, 60, 120],
                  ["Логистика (доп оплата)", false, 150, 300, 600],
                  ["Базовая стратегия, SKU", false, 3, 5, 7],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 112000,
                isActive: true,
              },
              {
                name: "pro",
                price: 222000,
                isActive: true,
              },
              {
                name: "vip",
                price: 444000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 300, 600, 1200],
                  ["Публикация отзывов, шт.", false, 60, 120, 240],
                  ["Лайки на бренд, шт.", false, 300, 600, 1200],
                  ["Вопросы бренду / товару, шт.", false, 60, 120, 240],
                  ["Добавление в корзину, шт.", false, 300, 600, 1200],
                  ["Автоответы на отзывы, SKU", false, 7, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 600, 1200, 2400],
                  ["Выкуп в ближайшее время, шт.", false, 60, 120, 240],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    150,
                    300,
                    600,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 60, 120, 240],
                  ["Выкупить с рекламы, шт.", false, 150, 300, 600],
                  ["Выкупить с сортировки, шт.", false, 60, 120, 240],
                  ["Логистика (доп оплата)", false, 300, 600, 1200],
                  ["Базовая стратегия, SKU", false, 5, 7, 12],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 210000,
                isActive: true,
              },
              {
                name: "pro",
                price: 420000,
                isActive: true,
              },
              {
                name: "vip",
                price: 840000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 600, 1200, 2400],
                  ["Публикация отзывов, шт.", false, 120, 240, 480],
                  ["Лайки на бренд, шт.", false, 600, 1200, 2400],
                  ["Вопросы бренду / товару, шт.", false, 120, 240, 480],
                  ["Добавление в корзину, шт.", false, 600, 1200, 2400],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 1200, 2400, 4800],
                  ["Выкуп в ближайшее время, шт.", false, 120, 240, 480],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    300,
                    600,
                    1200,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 120, 240, 480],
                  ["Выкупить с рекламы, шт.", false, 300, 600, 1200],
                  ["Выкупить с сортировки, шт.", false, 120, 240, 480],
                  ["Логистика (доп оплата)", false, 600, 1200, 2400],
                  ["Базовая стратегия, SKU", false, 7, 12, 25],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
      },
      increase: {
        basic: {
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 155000,
                isActive: true,
              },
              {
                name: "pro",
                price: 455000,
                isActive: true,
              },
              {
                name: "vip",
                price: 910000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 500, 1500, 3000],
                  ["Публикация отзывов, шт.", false, 100, 300, 600],
                  ["Лайки на бренд, шт.", false, 500, 1500, 3000],
                  ["Вопросы бренду / товару, шт.", false, 100, 300, 600],
                  ["Добавление в корзину, шт.", false, 250, 750, 1500],
                  ["Автоответы на отзывы, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 1000, 3000, 6000],
                  ["Выкуп в ближайшее время, шт.", false, 100, 300, 600],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    150,
                    450,
                    900,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 150, 450, 900],
                  ["Выкупить с рекламы, шт.", false, 250, 750, 1500],
                  ["Выкупить с сортировки, шт.", false, 100, 300, 600],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 444000,
                isActive: true,
              },
              {
                name: "pro",
                price: 871000,
                isActive: true,
              },
              {
                name: "vip",
                price: 1742000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 1500, 3000, 6000],
                  ["Публикация отзывов, шт.", false, 300, 600, 1200],
                  ["Лайки на бренд, шт.", false, 1500, 3000, 6000],
                  ["Вопросы бренду / товару, шт.", false, 300, 600, 1200],
                  ["Добавление в корзину, шт.", false, 750, 1500, 3000],
                  ["Автоответы на отзывы, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 3000, 6000, 12000],
                  ["Выкуп в ближайшее время, шт.", false, 300, 600, 1200],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    450,
                    600,
                    1200,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 450, 900, 1800],
                  ["Выкупить с рекламы, шт.", false, 750, 1500, 3000],
                  ["Выкупить с сортировки, шт.", false, 300, 600, 1200],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 787000,
                isActive: true,
              },
              {
                name: "pro",
                price: 1560000,
                isActive: true,
              },
              {
                name: "vip",
                price: 2600000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 3000, 6000, 10000],
                  ["Публикация отзывов, шт.", false, 600, 1200, 2000],
                  ["Лайки на бренд, шт.", false, 3000, 6000, 10000],
                  ["Вопросы бренду / товару, шт.", false, 600, 1200, 2000],
                  ["Добавление в корзину, шт.", false, 1500, 3000, 5000],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 6000, 12000, 20000],
                  ["Выкуп в ближайшее время, шт.", false, 600, 1200, 2000],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    900,
                    1800,
                    3000,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 900, 1800, 3000],
                  ["Выкупить с рекламы, шт.", false, 1500, 3000, 5000],
                  ["Выкупить с сортировки, шт.", false, 600, 1200, 2000],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
        full: {
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 195000,
                isActive: true,
              },
              {
                name: "pro",
                price: 585000,
                isActive: true,
              },
              {
                name: "vip",
                price: 1170000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 500, 1500, 3000],
                  ["Публикация отзывов, шт.", false, 100, 300, 600],
                  ["Лайки на бренд, шт.", false, 500, 1500, 3000],
                  ["Вопросы бренду / товару, шт.", false, 100, 300, 600],
                  ["Добавление в корзину, шт.", false, 250, 750, 1500],
                  ["Автоответы на отзывы, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 1000, 3000, 6000],
                  ["Выкуп в ближайшее время, шт.", false, 100, 300, 600],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    150,
                    450,
                    900,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 150, 450, 900],
                  ["Выкупить с рекламы, шт.", false, 250, 750, 1500],
                  ["Выкупить с сортировки, шт.", false, 100, 300, 600],
                  ["Логистика (доп оплата)", false, 500, 1500, 3000],
                  ["Базовая стратегия, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 555000,
                isActive: true,
              },
              {
                name: "pro",
                price: 1105000,
                isActive: true,
              },
              {
                name: "vip",
                price: 2210000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 1500, 3000, 6000],
                  ["Публикация отзывов, шт.", false, 300, 600, 1200],
                  ["Лайки на бренд, шт.", false, 1500, 3000, 6000],
                  ["Вопросы бренду / товару, шт.", false, 300, 600, 1200],
                  ["Добавление в корзину, шт.", false, 750, 1500, 3000],
                  ["Автоответы на отзывы, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 3000, 6000, 12000],
                  ["Выкуп в ближайшее время, шт.", false, 300, 600, 1200],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    450,
                    600,
                    2120040,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 450, 900, 1800],
                  ["Выкупить с рекламы, шт.", false, 750, 1500, 3000],
                  ["Выкупить с сортировки, шт.", false, 300, 600, 1200],
                  ["Логистика (доп оплата)", false, 500, 1500, 6000],
                  ["Базовая стратегия, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 1040000,
                isActive: true,
              },
              {
                name: "pro",
                price: 2080000,
                isActive: true,
              },
              {
                name: "vip",
                price: 4465000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 3000, 6000, 10000],
                  ["Публикация отзывов, шт.", false, 600, 1200, 2000],
                  ["Лайки на бренд, шт.", false, 3000, 6000, 10000],
                  ["Вопросы бренду / товару, шт.", false, 600, 1200, 2000],
                  ["Добавление в корзину, шт.", false, 1500, 3000, 5000],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 6000, 12000, 20000],
                  ["Выкуп в ближайшее время, шт.", false, 600, 1200, 2000],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    900,
                    1800,
                    3000,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 900, 1800, 3000],
                  ["Выкупить с рекламы, шт.", false, 1500, 3000, 5000],
                  ["Выкупить с сортировки, шт.", false, 600, 1200, 2000],
                  ["Логистика (доп оплата)", false, 3000, 6000, 10000],
                  ["Базовая стратегия, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
      },
      support: {
        basic: {
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 455000,
                isActive: true,
              },
              {
                name: "pro",
                price: 910000,
                isActive: true,
              },
              {
                name: "vip",
                price: 1820000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 1500, 3000, 6000],
                  ["Публикация отзывов, шт.", false, 300, 600, 1200],
                  ["Лайки на бренд, шт.", false, 1500, 3000, 6000],
                  ["Вопросы бренду / товару, шт.", false, 300, 600, 1200],
                  ["Добавление в корзину, шт.", false, 750, 1500, 3000],
                  ["Автоответы на отзывы, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 3000, 6000, 12000],
                  ["Выкуп в ближайшее время, шт.", false, 300, 600, 1200],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    450,
                    900,
                    1800,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 450, 900, 1800],
                  ["Выкупить с рекламы, шт.", false, 750, 1500, 3000],
                  ["Выкупить с сортировки, шт.", false, 300, 600, 1200],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 871000,
                isActive: true,
              },
              {
                name: "pro",
                price: 1741000,
                isActive: true,
              },
              {
                name: "vip",
                price: 2921000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 3000, 6000, 10000],
                  ["Публикация отзывов, шт.", false, 600, 1200, 2400],
                  ["Лайки на бренд, шт.", false, 3000, 6000, 10000],
                  ["Вопросы бренду / товару, шт.", false, 600, 1200, 2400],
                  ["Добавление в корзину, шт.", false, 1350, 2700, 5400],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 100],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 6000, 12000, 20000],
                  ["Выкуп в ближайшее время, шт.", false, 600, 1200, 2400],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    900,
                    1800,
                    3600,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 900, 1800, 3600],
                  ["Выкупить с рекламы, шт.", false, 1500, 3000, 5000],
                  ["Выкупить с сортировки, шт.", false, 600, 1200, 2400],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 1560000,
                isActive: true,
              },
              {
                name: "pro",
                price: 2640000,
                isActive: true,
              },
              {
                name: "vip",
                price: 3975000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 6000, 10000, 15000],
                  ["Публикация отзывов, шт.", false, 1200, 2400, 4800],
                  ["Лайки на бренд, шт.", false, 6000, 10000, 15000],
                  ["Вопросы бренду / товару, шт.", false, 1200, 2000, 2500],
                  ["Добавление в корзину, шт.", false, 3000, 5000, 7500],
                  ["Автоответы на отзывы, SKU", false, 50, 100, 250],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 12000, 20000, 40000],
                  ["Выкуп в ближайшее время, шт.", false, 1200, 2400, 5000],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    2000,
                    3000,
                    5000,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 1800, 3000, 5000],
                  ["Выкупить с рекламы, шт.", false, 2500, 5000, 7500],
                  ["Выкупить с сортировки, шт.", false, 1200, 2400, 4500],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
        full: {
          month3: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 585000,
                isActive: true,
              },
              {
                name: "pro",
                price: 1174000,
                isActive: true,
              },
              {
                name: "vip",
                price: 2440000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 1500, 3000, 6000],
                  ["Публикация отзывов, шт.", false, 300, 600, 1200],
                  ["Лайки на бренд, шт.", false, 1500, 3000, 6000],
                  ["Вопросы бренду / товару, шт.", false, 300, 600, 1200],
                  ["Добавление в корзину, шт.", false, 750, 1500, 3000],
                  ["Автоответы на отзывы, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 3000, 6000, 12000],
                  ["Выкуп в ближайшее время, шт.", false, 300, 600, 1200],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    450,
                    900,
                    1800,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 450, 900, 1800],
                  ["Выкупить с рекламы, шт.", false, 750, 1500, 3000],
                  ["Выкупить с сортировки, шт.", false, 300, 600, 1200],
                  ["Логистика (доп оплата)", false, 500, 1500, 3000],
                  ["Базовая стратегия, SKU", false, 5, 7, 10],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month6: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 1105000,
                isActive: true,
              },
              {
                name: "pro",
                price: 2210000,
                isActive: true,
              },
              {
                name: "vip",
                price: 3706000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 3000, 6000, 10000],
                  ["Публикация отзывов, шт.", false, 600, 1200, 2400],
                  ["Лайки на бренд, шт.", false, 3000, 6000, 10000],
                  ["Вопросы бренду / товару, шт.", false, 600, 1200, 2400],
                  ["Добавление в корзину, шт.", false, 1350, 2700, 5400],
                  ["Автоответы на отзывы, SKU", false, 15, 25, 100],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 6000, 12000, 20000],
                  ["Выкуп в ближайшее время, шт.", false, 600, 1200, 2400],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    900,
                    1800,
                    3600,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 900, 1800, 3600],
                  ["Выкупить с рекламы, шт.", false, 1500, 3000, 5000],
                  ["Выкупить с сортировки, шт.", false, 600, 1200, 2400],
                  ["Логистика (доп оплата)", false, 1500, 3000, 6000],
                  ["Базовая стратегия, SKU", false, 10, 15, 25],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
          month12: {
            btns: [
              {
                name: "demo",
                price: 0,
                isActive: false,
              },
              {
                name: "start",
                price: 2080000,
                isActive: true,
              },
              {
                name: "pro",
                price: 3540000,
                isActive: true,
              },
              {
                name: "vip",
                price: 5300000,
                isActive: true,
              },
            ],
            data: [
              {
                name: "Повышение рейтинга",
                data: [
                  ["Покупка товаров, шт.", false, 6000, 10000, 15000],
                  ["Публикация отзывов, шт.", false, 1200, 2400, 4800],
                  ["Лайки на бренд, шт.", false, 6000, 10000, 15000],
                  ["Вопросы бренду / товару, шт.", false, 1200, 2000, 2500],
                  ["Добавление в корзину, шт.", false, 3000, 5000, 7500],
                  ["Автоответы на отзывы, SKU", false, 50, 100, 250],
                ],
              },
              {
                name: "Поведенческие факторы",
                data: [
                  ["Клики по карточке, шт.", false, 12000, 20000, 40000],
                  ["Выкуп в ближайшее время, шт.", false, 1200, 2400, 5000],
                  [
                    "Добавление конкурентов в корзину, шт.",
                    false,
                    2000,
                    3000,
                    5000,
                  ],
                  ["Изучение карточки 60 секунд, шт.", false, 1800, 3000, 5000],
                  ["Выкупить с рекламы, шт.", false, 2500, 5000, 7500],
                  ["Выкупить с сортировки, шт.", false, 1200, 2400, 4500],
                  ["Логистика (доп оплата)", false, 3000, 6000, 10000],
                  ["Базовая стратегия, SKU", false, 15, 25, 50],
                ],
              },
              {
                name: "Сопровождение",
                data: [
                  ["Личный аккаунт менеджер", false, true, true, true],
                  ["Технический менеджер", false, true, true, true],
                ],
              },
              {
                name: "BI-analytics",
                data: [
                  ["Бриффинг", false, false, false, false],
                  ["Бизнес Интервью", false, false, false, false],
                  ["Семантическое ядро", false, false, false, false],
                  ["Конкурентная Аналитика", false, false, false, false],
                  ["Базовая Стратегия", false, false, false, false],
                  ["Расширенная Стратегия", false, false, false, false],
                  [
                    "FMP (финансовая модель продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "FRP (финансовый отчет по продукту)",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "PHC (карточка здоровья продукта)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Рекламные кампании",
                data: [
                  ["Артикулов", false, false, false, false],
                  [
                    "Запуск и ведение рекламных кампаний, проведение A/B-тестов",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ спроса, сбор и корректировка семантического ядра",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Бюджетирование на РК", false, false, false, false],
                  ["Менеджер", false, false, false, false],
                  [
                    "Мониторинг позиций товаров по каждому запросу",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Работы по увеличению CR% (конверсии) карточек товаров",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Повышение привлекательности карточки товара (инфографика)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
              {
                name: "Brand Awareness",
                data: [
                  [
                    "Интеграций блогеров по бартеру",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Публикация отзывов для поддержания привлекательности",
                    false,
                    false,
                    false,
                    false,
                  ],
                  [
                    "Охват аудитории при публикациях",
                    false,
                    false,
                    false,
                    false,
                  ],
                  ["Количество товаров на бартер", false, false, false, false],
                  [
                    "Работа с узнаваемостью бренда (посол бренда)",
                    false,
                    false,
                    false,
                    false,
                  ],
                ],
              },
            ],
          },
        },
      },
    },
  };

  var ww = $(window).width();

  // price
  var company = $('[name="company"]');
  var packet = $('[name="packet"]');
  var tariff = $('[name="tariff"]');
  var pay = $('[name="pay"]');

  //Кнопка 1 мес.
  var btnOneMounth = $('input[value="month1"]').closest(".tarrif-btn");

  company.change(function () {
    $(packet[0]).prop("checked", true);
    $(tariff[0]).prop("checked", true);
    $(pay[0]).prop("checked", true);

    checkData();

    if (ww < 769) {
      $('[name="tarrif-select-left"]').val("demo").change();
      $('[name="tarrif-select-right"]').val("start").change();
      changeSelect();
    }
  });

  packet.on("change", checkData);
  tariff.on("change", checkData);
  pay.on("change", checkData);

  checkData();
  function checkData() {
    var checked = [];
    $(".tarrifs input:radio:checked").each(function () {
      checked.push($(this).val());
    });

    var dataOneMounth = price[checked[0]][checked[1]][checked[2]].month1;

    if (dataOneMounth) {
      btnOneMounth.removeClass("hidden");
    } else {
      btnOneMounth.addClass("hidden");

      if (checked[3] === "month1") {
        $(pay[1]).prop("checked", true);
        checkData();
      }
    }

    var data = price[checked[0]][checked[1]][checked[2]][checked[3]];

    if (data) {
      renderTable(data);
    }

    if (ww < 769) {
      changeSelect();
    }
  }

  function checkOut(el) {
    var out;
    if (el == true) {
      out = '<img src="assets/img/check-green.svg" alt="icon">';
    } else if (el == false) {
      out = '<img src="assets/img/not.svg" alt="icon">';
    } else {
      out = el;
    }
    return out;
  }

  function renderTable(data) {
    $(".table *").remove();
    var out = "";

    var tableData = data["data"];

    for (let i = 0; i < tableData.length; i++) {
      var name = tableData[i].name;
      var sub_data = tableData[i].data;

      var out_row = "";

      for (let k = 0; k < sub_data.length; k++) {
        out_row += `
               <div class="row">
                  <div class="table__name d-name">${checkOut(
                    sub_data[k][0]
                  )}</div>
                  <div class="table__col d-col" data-col="demo">${checkOut(
                    sub_data[k][1]
                  )}</div>
                  <div class="table__col d-col" data-col="start">${checkOut(
                    sub_data[k][2]
                  )}</div>
                  <div class="table__col d-col" data-col="pro">${checkOut(
                    sub_data[k][3]
                  )}</div>
                  <div class="table__col d-col" data-col="vip">${checkOut(
                    sub_data[k][4]
                  )}</div>
               </div>
            `;
      }

      out += `<div class="table__item">
            <div class="table__title">${name}</div>
            <div class="table__inner">${out_row}</div>
         </div>`;
    }

    $(".table").append(out);

    var btn_demo = $(`[data-packet-name="demo"] .packet__btn`);
    var btn_start = $(`[data-packet-name="start"] .packet__btn`);
    var btn_pro = $(`[data-packet-name="pro"] .packet__btn`);
    var btn_vip = $(`[data-packet-name="vip"] .packet__btn`);

    var btn_demo_price = $(`[data-packet-name="demo"] .packet__price`);
    var btn_start_price = $(`[data-packet-name="start"] .packet__price`);
    var btn_pro_price = $(`[data-packet-name="pro"] .packet__price`);
    var btn_vip_price = $(`[data-packet-name="vip"] .packet__price`);

    var btns = data["btns"];
    btns[0].isActive
      ? btn_demo.removeClass("disabled")
      : btn_demo.addClass("disabled");
    btns[1].isActive
      ? btn_start.removeClass("disabled")
      : btn_start.addClass("disabled");
    btns[2].isActive
      ? btn_pro.removeClass("disabled")
      : btn_pro.addClass("disabled");
    btns[3].isActive
      ? btn_vip.removeClass("disabled")
      : btn_vip.addClass("disabled");

    btn_demo_price.text(btns[0].price.toLocaleString("ru") + " ₽");
    btn_start_price.text(btns[1].price.toLocaleString("ru") + " ₽");
    btn_pro_price.text(btns[2].price.toLocaleString("ru") + " ₽");
    btn_vip_price.text(btns[3].price.toLocaleString("ru") + " ₽");

    collaps_item();
  }

  function collaps_item() {
    var items = $(".table__item").slice(-3);
    items.find(".table__title").addClass("hide");
    items.find(".table__inner").fadeOut(0);
  }

  $("body").on("click", ".table__title", function () {
    $(this).toggleClass("hide");
    $(this).closest(".table__item").find(".table__inner").slideToggle();
  });
  //МОБ

  $('[name="tarrif-select-left"]').change(function () {
    var val = $(this).val();
    $(`[name="tarrif-select-right"] option`).attr("disabled", false);
    $(`[name="tarrif-select-right"] option[value="${val}"]`).attr(
      "disabled",
      true
    );
    changeSelect();
  });

  $('[name="tarrif-select-right"]').change(function () {
    var val = $(this).val();
    $(`[name="tarrif-select-left"] option`).attr("disabled", false);
    $(`[name="tarrif-select-left"] option[value="${val}"]`).attr(
      "disabled",
      true
    );

    changeSelect();
  });

  if (ww < 769) {
    changeSelect();
  }

  function changeSelect() {
    var val1 = $('[name="tarrif-select-left"]').val();
    var val2 = $('[name="tarrif-select-right"]').val();

    $(".table__col").removeClass("show");
    $(`[data-col="${val1}"]`).addClass("show").css("order", 1);
    $(`[data-col="${val2}"]`).addClass("show").css("order", 2);

    $(".packet__item").removeClass("show");
    $(`[data-packet-name="${val1}"]`).addClass("show").css("order", 1);
    $(`[data-packet-name="${val2}"]`).addClass("show").css("order", 2);

    $(".tarif-select").niceSelect("update");
  }

  $(".tarif-select").niceSelect();
  $(".company-select").niceSelect();
});
