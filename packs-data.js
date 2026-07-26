/* =========================================================
   БАЗА ДАННЫХ ПРЕСЕТ-ПАКОВ
   =========================================================
   Чтобы ДОБАВИТЬ новый пак — скопируйте один блок { ... },
   вставьте его в конец списка (перед закрывающей ]),
   и заполните поля:

   name       — название пака (показывается одинаково на всех языках)
   image      — имя файла картинки, лежащей в папке images/
   etsyUrl    — ссылка на товар в вашем Etsy-магазине
   price      — акционная (текущая) цена, которую видит покупатель
   oldPrice   — старая цена ДО скидки (показывается зачёркнутой рядом
                с price). Если скидки нет — просто уберите это поле
                у конкретного пака, зачёркнутая цена не появится.
   category   — ключ категории для вкладок-фильтров.
                Разрешённые значения (пишите ТОЧНО так, латиницей):
                  "portraits"    -> Портретные / Portraits / Портретні
                  "interiors"    -> Interiors
                  "weddings"     -> Свадебные / Weddings / Весільні
                  "seasonal"     -> Seasonal
                  "darkmoody"    -> Dark & Moody
   bestseller — true, если пак должен попасть в блок
                "Хит продаж" наверху страницы.

   Названия категорий на трёх языках редактируются в main.js
   (объект TRANSLATIONS -> categories) — здесь трогать не нужно.
   Текст баннера распродажи наверху сайта — тоже в main.js
   (ключ saleBannerText в каждом языке).
   ========================================================= */

const PACKS = [
  {
    name: "Family",
    image: "Family_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "portraits",
    bestseller: true
  },
  {
    name: "Adventure Travel",
    image: "Adventure_Travel_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "seasonal",
    bestseller: false
  },
  {
    name: "Summer Beach",
    image: "Summer_Beach_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "seasonal",
    bestseller: true
  },
  {
    name: "Hiking Mood",
    image: "Hiking_Mood_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "seasonal",
    bestseller: false
  },
  {
    name: "Natural Wedding",
    image: "Natural_Wedding_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "weddings",
    bestseller: true
  },
  {
    name: "Halloween Mood",
    image: "Halloween_Mood_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "darkmoody",
    bestseller: false
  },
  {
    name: "Outdoor Natural",
    image: "Outdoor_Natural_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "portraits",
    bestseller: true
  },
  {
    name: "Rustic Wedding",
    image: "Rustic_Wedding_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "weddings",
    bestseller: false
  },
  {
    name: "Disney Park",
    image: "Disney_Park_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "portraits",
    bestseller: false
  },
  {
    name: "Cosplay Style",
    image: "Cosplay_Style_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "portraits",
    bestseller: false
  },
  {
    name: "Concert Live",
    image: "Concert_Live_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "darkmoody",
    bestseller: false
  },
  {
    name: "Moody Forest",
    image: "Moody_Forest_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "darkmoody",
    bestseller: false
  },
  {
    name: "Boho Wedding",
    image: "Boho_Wedding_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "weddings",
    bestseller: false
  },
  {
    name: "Fresh Food",
    image: "Fresh_Food_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "interiors",
    bestseller: false
  },
  {
    name: "Landscape",
    image: "Landscape_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "seasonal",
    bestseller: false
  },
  {
    name: "Old Money",
    image: "Old_Money_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "interiors",
    bestseller: false
  },
  {
    name: "Dark Loft",
    image: "Dark_Loft_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "interiors",
    bestseller: false
  }

  /* --- ДОБАВЛЯЙТЕ НОВЫЕ ПАКИ НИЖЕ ЭТОЙ СТРОКИ ---
  ,{
    name: "Название нового пака",
    image: "имя-файла-картинки.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/12345",
    price: "$6.49",
    oldPrice: "$9.99",
    category: "portraits",
    bestseller: false
  }
  */
];