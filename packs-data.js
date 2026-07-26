/* =========================================================
   СПИСОК ПРЕСЕТ-ПАКОВ
   =========================================================
   Чтобы ДОБАВИТЬ новый пак — скопируйте один блок { ... },
   вставьте его в конец списка (перед закрывающей ]),
   и заполните поля:

   name       — название пака (то, что увидит покупатель)
   image      — имя файла картинки, лежащей в папке images/
   etsyUrl    — ссылка на товар в вашем Etsy-магазине
   price      — цена для отображения на карточке (просто текст)
   category   — одна из вкладок-фильтров (пишите ТОЧНО так же,
                как один из пунктов ниже, буква в букву):
                  "Портретные"
                  "Interiors"
                  "Свадебные"
                  "Seasonal"
                  "Dark & Moody"
   bestseller — true, если пак должен попасть в отдельный блок
                "Хит продаж" наверху страницы. Если не нужно —
                пишите false.

   Больше НИЧЕГО менять не нужно — карусель, блок "Хит продаж",
   вкладки-фильтры и каталог обновятся автоматически.
   ========================================================= */

const PACKS = [
  {
    name: "Family",
    image: "Family_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Портретные",
    bestseller: true
  },
  {
    name: "Adventure Travel",
    image: "Adventure_Travel_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Seasonal",
    bestseller: false
  },
  {
    name: "Summer Beach",
    image: "Summer_Beach_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Seasonal",
    bestseller: true
  },
  {
    name: "Hiking Mood",
    image: "Hiking_Mood_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Seasonal",
    bestseller: false
  },
  {
    name: "Natural Wedding",
    image: "Natural_Wedding_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Свадебные",
    bestseller: true
  },
  {
    name: "Halloween Mood",
    image: "Halloween_Mood_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Dark & Moody",
    bestseller: false
  },
  {
    name: "Outdoor Natural",
    image: "Outdoor_Natural_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Портретные",
    bestseller: true
  },
  {
    name: "Rustic Wedding",
    image: "Rustic_Wedding_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Свадебные",
    bestseller: false
  },
  {
    name: "Disney Park",
    image: "Disney_Park_Thumbnail_-_2x3_Dark.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Портретные",
    bestseller: false
  },
  {
    name: "Cosplay Style",
    image: "Cosplay_Style_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Портретные",
    bestseller: false
  },
  {
    name: "Concert Live",
    image: "Concert_Live_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Dark & Moody",
    bestseller: true
  },
  {
    name: "Moody Forest",
    image: "Moody_Forest_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Dark & Moody",
    bestseller: false
  },
  {
    name: "Boho Wedding",
    image: "Boho_Wedding_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Свадебные",
    bestseller: true
  },
  {
    name: "Fresh Food",
    image: "Fresh_Food_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Interiors",
    bestseller: false
  },
  {
    name: "Landscape",
    image: "Landscape_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Seasonal",
    bestseller: false
  },
  {
    name: "Old Money",
    image: "Old_Money_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Interiors",
    bestseller: true
  },
  {
    name: "Dark Loft",
    image: "Dark_Loft_Thumbnail_-_2x3.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/PUT-LINK-HERE",
    price: "$8",
    category: "Interiors",
    bestseller: false
  }

  /* --- ДОБАВЛЯЙТЕ НОВЫЕ ПАКИ НИЖЕ ЭТОЙ СТРОКИ ---
  ,{
    name: "Название нового пака",
    image: "имя-файла-картинки.jpg",
    etsyUrl: "https://www.etsy.com/your-shop/listing/12345",
    price: "$8",
    category: "Портретные",
    bestseller: false
  }
  */
];
