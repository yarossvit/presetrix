/* =========================================================
   PRESETRIX — MAIN LOGIC
   =========================================================
   Разделы этого файла:
   1. Переводы (RU / EN / UA)
   2. Переключение языка
   3. Рендер карусели (бесконечная, с наведением мышки)
   4. Рендер блока "Хит продаж"
   5. Вкладки-фильтры + рендер каталога с кнопкой "Показать ещё"
   ========================================================= */

/* ---------- 1. ПЕРЕВОДЫ ---------- */
const TRANSLATIONS = {
  ru: {
    eyebrow: "Мобильные и десктопные пресеты Lightroom",
    heroText: "Готовые пресеты для любого настроения кадра — от свадеб до концертов. Выбирайте пак и переходите на Etsy для покупки.",
    baTitle: "До / После",
    baSub: "Двигайте слайдер мышкой, чтобы увидеть разницу",
    baBefore: "До",
    baAfter: "После",
    saleBannerText: "🔥 Распродажа! Скидка 35% на все паки — промокод ETSY35",
    bestsellerTitle: "🔥 Хит продаж",
    bestsellerSub: "Самые популярные паки у наших клиентов",
    bestsellerRibbon: "Хит",
    catalogTitle: "Все паки",
    catalogSub: "Нажмите «Купить на Etsy», чтобы перейти к оплате",
    buyBtn: "Купить на Etsy",
    heroCta: "Выбрать пак",
    testimonialsTitle: "Отзывы наших клиентов",
    testimonialsSub: "Что говорят фотографы о наших пресетах",
    findStyleTitle: "Найдите свой идеальный стиль в один клик",
    findStyleSub: "Коллекции профессиональных пресетов для Lightroom Mobile и Desktop под любое настроение.",
    countdownEyebrow: "Акция активна",
    countdownTitle: "Успейте купить со скидкой",
    countdownCta: "Купить сейчас",
    countdownDays: "Дни",
    countdownHours: "Часы",
    countdownMinutes: "Минуты",
    countdownSeconds: "Секунды",
    showMore: "Показать ещё",
    showLess: "Свернуть",
    footerText: "© 2026 Presetrix. Все права защищены.",
    categories: {
      all: "Все",
      portraits: "Портретные",
      interiors: "Interiors",
      weddings: "Свадебные",
      seasonal: "Seasonal",
      darkmoody: "Dark & Moody"
    }
  },
  en: {
    eyebrow: "Mobile & Desktop Lightroom Presets",
    heroText: "Ready-to-use presets for every mood — from weddings to concerts. Pick a pack and head to Etsy to purchase.",
    baTitle: "Before / After",
    baSub: "Drag the slider with your mouse to see the difference",
    baBefore: "Before",
    baAfter: "After",
    saleBannerText: "🔥 Sale! 35% OFF on all preset packs — Use code ETSY35",
    bestsellerTitle: "🔥 Best Sellers",
    bestsellerSub: "The most popular packs among our customers",
    bestsellerRibbon: "Best",
    catalogTitle: "All Packs",
    catalogSub: "Click “Buy on Etsy” to proceed to checkout",
    buyBtn: "Buy on Etsy",
    heroCta: "Choose a pack",
    testimonialsTitle: "Our Happy Customers",
    testimonialsSub: "What photographers say about our presets",
    findStyleTitle: "Find your perfect style in one click",
    findStyleSub: "Collections of professional Lightroom Mobile & Desktop presets for every mood.",
    countdownEyebrow: "Sale is on",
    countdownTitle: "Shop the sale before it ends",
    countdownCta: "Shop now",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    showMore: "Show more",
    showLess: "Show less",
    footerText: "© 2026 Presetrix. All rights reserved.",
    categories: {
      all: "All",
      portraits: "Portraits",
      interiors: "Interiors",
      weddings: "Weddings",
      seasonal: "Seasonal",
      darkmoody: "Dark & Moody"
    }
  },
  ua: {
    eyebrow: "Мобільні та десктопні пресети Lightroom",
    heroText: "Готові пресети для будь-якого настрою кадру — від весіль до концертів. Обирайте пак і переходьте на Etsy для покупки.",
    baTitle: "До / Після",
    baSub: "Рухайте повзунок мишкою, щоб побачити різницю",
    baBefore: "До",
    baAfter: "Після",
    saleBannerText: "🔥 Розпродаж! Знижка 35% на всі пресет-паки — промокод ETSY35",
    bestsellerTitle: "🔥 Хіт продажів",
    bestsellerSub: "Найпопулярніші паки серед наших клієнтів",
    bestsellerRibbon: "Хіт",
    catalogTitle: "Усі паки",
    catalogSub: "Натисніть «Купити на Etsy», щоб перейти до оплати",
    buyBtn: "Купити на Etsy",
    heroCta: "Обрати пак",
    testimonialsTitle: "Відгуки наших клієнтів",
    testimonialsSub: "Що фотографи кажуть про наші пресети",
    findStyleTitle: "Знайдіть свій ідеальний стиль в один клік",
    findStyleSub: "Колекції професійних пресетів для Lightroom Mobile та Desktop під будь-який настрій.",
    countdownEyebrow: "Акція триває",
    countdownTitle: "Встигніть купити зі знижкою",
    countdownCta: "Купити зараз",
    countdownDays: "Дні",
    countdownHours: "Години",
    countdownMinutes: "Хвилини",
    countdownSeconds: "Секунди",
    showMore: "Показати ще",
    showLess: "Згорнути",
    footerText: "© 2026 Presetrix. Всі права захищені.",
    categories: {
      all: "Усі",
      portraits: "Портретні",
      interiors: "Interiors",
      weddings: "Весільні",
      seasonal: "Seasonal",
      darkmoody: "Dark & Moody"
    }
  }
};

/* ---------- ВІДГУКИ КЛІЄНТІВ ---------- */
const TESTIMONIALS = {
  ru: [
    { name: "Марина К.", quote: "Пресеты легли идеально на свадебные фото — цвет кожи натуральный, атмосфера сразу праздничная. Больше не трачу часы на обработку." },
    { name: "Олег П.", quote: "Beру Concert Live для съёмок с концертов — свет и неон выглядят кинематографично буквально за пару кликов." },
    { name: "Ирина С.", quote: "Купила Outdoor Natural — идеально для семейных прогулочных фотосессий. Установка простая, инструкция понятная." }
  ],
  en: [
    { name: "Marina K.", quote: "The presets nailed my wedding photos — natural skin tones and an instantly festive mood. I no longer spend hours editing." },
    { name: "Oleg P.", quote: "I use Concert Live for gig photography — the lights and neon look cinematic in just a couple of clicks." },
    { name: "Irina S.", quote: "Got the Outdoor Natural pack — perfect for family walks and lifestyle sessions. Easy to install, clear instructions." }
  ],
  ua: [
    { name: "Марина К.", quote: "Пресети ідеально лягли на весільні фото — натуральний відтінок шкіри, одразу святкова атмосфера. Більше не витрачаю години на обробку." },
    { name: "Олег П.", quote: "Беру Concert Live для зйомок з концертів — світло і неон виглядають кінематографічно буквально за пару кліків." },
    { name: "Ірина С.", quote: "Купила Outdoor Natural — ідеально для сімейних прогулянкових фотосесій. Встановлення просте, інструкція зрозуміла." }
  ]
};

let currentLang = "ua";
const CATEGORY_ORDER = ["all", "portraits", "interiors", "weddings", "seasonal", "darkmoody"];
const INITIAL_VISIBLE = 12; // 4 колонки × 3 ряда — всегда полные ряды без "рваных" пустот

/* ---------- 2. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ---------- */
function setLanguage(lang){
  currentLang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  renderFilterTabs();
  renderCatalog();
  renderBestsellers();
  renderTestimonials();
}

function initLanguageSwitcher(){
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

/* ---------- 3. КАРУСЕЛЬ (бесконечная, следует за мышкой) ---------- */
function initCarousel(){
  const carousel = document.getElementById('carousel');
  const wrap = document.getElementById('carouselWrap');

  function buildCard(pack){
    const a = document.createElement('a');
    a.className = 'carousel-card';
    a.href = pack.etsyUrl;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `<img src="images/${pack.image}" alt="${pack.name}">`;
    return a;
  }

  const cardWidth = 180; // эффективный шаг с учётом нахлёста карточек (270 - 90)

  // три копии подряд — чтобы можно было бесшовно крутить в любую сторону
  for (let copy = 0; copy < 3; copy++){
    PACKS.forEach(pack => carousel.appendChild(buildCard(pack)));
  }

  const cards = Array.from(carousel.querySelectorAll('.carousel-card'));

  function getWrapCenterX(){
    const r = wrap.getBoundingClientRect();
    return r.left + r.width / 2;
  }

  // находим карточку, чей центр реально ближе всего к центру блока
  // (считаем по факту отрисовки, а не по приблизительной арифметике —
  // так центрирование остаётся точным независимо от паддингов/отступов)
  function findClosest(){
    const centerX = getWrapCenterX();
    let closest = cards[0];
    let closestDist = Infinity;
    cards.forEach(card => {
      const r = card.getBoundingClientRect();
      const d = Math.abs((r.left + r.width / 2) - centerX);
      if (d < closestDist){ closestDist = d; closest = card; }
    });
    return closest;
  }

  // довыравнивание: подгоняем scrollLeft так, чтобы ближайшая карточка
  // оказалась РОВНО по центру (устраняет любой накопленный сдвиг)
  function snapToCenter(smooth){
    const card = findClosest();
    const cardRect = card.getBoundingClientRect();
    const delta = (cardRect.left + cardRect.width / 2) - getWrapCenterX();
    if (Math.abs(delta) < 0.5) return;
    if (smooth){
      carousel.scrollBy({ left: delta, behavior: 'smooth' });
    } else {
      carousel.scrollLeft += delta;
    }
  }

  let singleSetWidth = carousel.scrollWidth / 3;
  // при каждой загрузке страницы по центру оказывается случайный пак
  const randomStart = Math.floor(Math.random() * PACKS.length) * cardWidth;
  carousel.scrollLeft = singleSetWidth + randomStart;
  snapToCenter(false); // сразу доводим до точного центра, без анимации

  window.addEventListener('load', () => {
    singleSetWidth = carousel.scrollWidth / 3;
    carousel.scrollLeft = singleSetWidth + randomStart;
    snapToCenter(false);
  });

  function wrapScroll(){
    if (carousel.scrollLeft >= singleSetWidth * 2){
      carousel.scrollLeft -= singleSetWidth;
    } else if (carousel.scrollLeft <= 0){
      carousel.scrollLeft += singleSetWidth;
    }
  }

  // ---- Ровный ряд без наклона: карточка ближе к центру — крупнее и лежит
  // поверх; чем дальше карточка от центра (в любую сторону), тем ниже
  // она в стопке (уходит "под" соседей), а не наоборот ----
  function updateCoverflow(){
    const wrapRect = wrap.getBoundingClientRect();
    const centerX = wrapRect.left + wrapRect.width / 2;
    const items = cards.map(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      return { card, dist: Math.abs(cardCenter - centerX) };
    });
    // сортируем от самой дальней к самой близкой — дальняя получает
    // самый низкий z-index (оказывается внизу стопки), ближайшая — самый высокий
    items.sort((a, b) => b.dist - a.dist);
    let closest = items[items.length - 1].card;
    items.forEach((item, idx) => {
      item.card.style.zIndex = idx + 1;
      item.card.classList.toggle('is-active', item.card === closest);
    });
  }

  // следование за курсором мыши (оригинальная скорость, работает и над стрелками)
  let mouseActive = false;
  const DEAD_ZONE = 0.12;
  const MAX_SPEED = 18;

  wrap.addEventListener('mousemove', (e) => {
    mouseActive = true;
    const rect = wrap.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const center = relX - 0.5;
    let speed = 0;
    if (Math.abs(center) > DEAD_ZONE / 2) {
      const sign = center > 0 ? 1 : -1;
      const strength = (Math.abs(center) - DEAD_ZONE / 2) / (0.5 - DEAD_ZONE / 2);
      speed = sign * strength * MAX_SPEED;
    }
    carousel.dataset.speed = speed;
  });
  wrap.addEventListener('mouseleave', () => {
    mouseActive = false;
    carousel.dataset.speed = 0;
    // мышь ушла — плавно доводим ближайшую карточку точно по центру
    setTimeout(() => snapToCenter(true), 60);
  });

  function tick(){
    const speed = parseFloat(carousel.dataset.speed || 0);
    if (mouseActive && speed !== 0) {
      carousel.scrollLeft = carousel.scrollLeft + speed;
      wrapScroll();
    }
    updateCoverflow();
    requestAnimationFrame(tick);
  }
  carousel.dataset.speed = 0;
  tick();
  window.addEventListener('resize', () => { updateCoverflow(); snapToCenter(false); });
  window.addEventListener('load', updateCoverflow);

  // реальный шаг между карточками (ширина + отрицательный margin), а не
  // фиксированное число — иначе на новых адаптивных мобильных размерах
  // карточек стрелки будут либо недокручивать, либо перекручивать
  function getStep(){
    if (cards.length < 2) return cardWidth * 2;
    const w = cards[0].getBoundingClientRect().width;
    const marginLeft = parseFloat(getComputedStyle(cards[1]).marginLeft) || 0;
    return w + marginLeft;
  }

  wrap.querySelector('.nav-left').addEventListener('click', () => {
    carousel.scrollBy({left: -getStep() * 2, behavior:'smooth'});
    setTimeout(() => { wrapScroll(); snapToCenter(true); }, 400);
  });
  wrap.querySelector('.nav-right').addEventListener('click', () => {
    carousel.scrollBy({left: getStep() * 2, behavior:'smooth'});
    setTimeout(() => { wrapScroll(); snapToCenter(true); }, 400);
  });
}

/* ---------- 4. БЛОК "ХИТ ПРОДАЖ" ---------- */
function buildShopCard(pack, extraClass, ribbonText){
  const card = document.createElement('div');
  card.className = 'shop-card' + (extraClass ? ' ' + extraClass : '');
  const t = TRANSLATIONS[currentLang];

  // Формируем цену: если есть oldPrice, рисуем зачеркнутую старую и акционную новую
  const priceHtml = pack.oldPrice 
    ? `<span style="text-decoration: line-through; color: var(--muted); margin-right: 8px; font-size: 0.85rem;">${pack.oldPrice}</span> <span style="color: var(--accent); font-weight: bold;">${pack.price}</span>`
    : `${pack.price}`;

  card.innerHTML = `
    ${ribbonText ? `<div class="bestseller-ribbon">${ribbonText}</div>` : ''}
    <img src="images/${pack.image}" alt="${pack.name}">
    <div class="info">
      <div class="name">${pack.name}</div>
      <div class="price">${priceHtml}</div>
      <a class="buy-btn" href="${pack.etsyUrl}" target="_blank" rel="noopener">${t.buyBtn}</a>
    </div>
  `;
  return card;
}

function renderBestsellers(){
  const grid = document.getElementById('bestsellerGrid');
  grid.innerHTML = '';
  const t = TRANSLATIONS[currentLang];
  PACKS.filter(p => p.bestseller).forEach(pack => {
    grid.appendChild(buildShopCard(pack, 'bestseller-card', t.bestsellerRibbon));
  });
}

/* ---------- 4.5. ВІДГУКИ КЛІЄНТІВ ---------- */
function renderTestimonials(){
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const items = TESTIMONIALS[currentLang] || TESTIMONIALS.ua;
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <div class="testimonial-stars">★★★★★</div>
      <div class="testimonial-quote">${item.quote}</div>
      <div class="testimonial-name">${item.name}</div>
    `;
    grid.appendChild(card);
  });
}

/* ---------- 5. ВКЛАДКИ-ФИЛЬТРЫ + КАТАЛОГ С "ПОКАЗАТЬ ЕЩЁ" ---------- */
let activeCategory = "all";
let showAll = false;

function renderFilterTabs(){
  const wrap = document.getElementById('filterTabs');
  wrap.innerHTML = '';
  const t = TRANSLATIONS[currentLang];

  CATEGORY_ORDER.forEach(key => {
    const btn = document.createElement('button');
    btn.className = 'filter-tab' + (key === activeCategory ? ' active' : '');
    btn.textContent = t.categories[key];
    btn.addEventListener('click', () => {
      activeCategory = key;
      showAll = false; // сброс "показать ещё" при смене категории
      renderFilterTabs();
      renderCatalog();
    });
    wrap.appendChild(btn);
  });
}

function renderCatalog(){
  const grid = document.getElementById('catalogGrid');
  const showMoreWrap = document.getElementById('showMoreWrap');
  const showMoreBtn = document.getElementById('showMoreBtn');
  const t = TRANSLATIONS[currentLang];

  grid.innerHTML = '';

  const fullList = activeCategory === "all"
    ? PACKS
    : PACKS.filter(p => p.category === activeCategory);

  const visibleList = showAll ? fullList : fullList.slice(0, INITIAL_VISIBLE);

  visibleList.forEach(pack => {
    grid.appendChild(buildShopCard(pack));
  });

  if (fullList.length > INITIAL_VISIBLE){
    showMoreWrap.style.display = 'block';
    showMoreBtn.textContent = showAll ? t.showLess : t.showMore;
  } else {
    showMoreWrap.style.display = 'none';
  }
}

function initShowMoreButton(){
  document.getElementById('showMoreBtn').addEventListener('click', () => {
    showAll = !showAll;
    renderCatalog();
  });
}

/* ---------- 0. ГЛАВНЫЙ СЛАЙДЕР-ШАПКА (изображения) ---------- */
function initHeroSlider(){
  const track = document.getElementById('heroSliderTrack');
  const leftBtn = document.getElementById('heroSliderLeft');
  const rightBtn = document.getElementById('heroSliderRight');
  const dotsWrap = document.getElementById('heroSliderDots');
  const section = document.getElementById('heroSliderSection');

  if (!track) return;

  const slides = Array.from(track.querySelectorAll('.hero-slide'));
  const total = slides.length;
  let index = 0;
  let timer = null;

  // строим точки-индикаторы под слайдер
  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  // картинка всегда остаётся на одном месте — переключаем только то,
  // какой слайд видимый (плавный переход прозрачности)
  function goTo(i){
    index = (i + total) % total;
    slides.forEach((slide, idx) => slide.classList.toggle('active', idx === index));
    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === index));
  }

  function startAutoplay(){
    stopAutoplay();
    timer = setInterval(() => goTo(index + 1), 5000);
  }
  function stopAutoplay(){
    if (timer) clearInterval(timer);
  }

  leftBtn.addEventListener('click', () => { goTo(index - 1); startAutoplay(); });
  rightBtn.addEventListener('click', () => { goTo(index + 1); startAutoplay(); });

  section.addEventListener('mouseenter', stopAutoplay);
  section.addEventListener('mouseleave', startAutoplay);

  goTo(0);
  startAutoplay();
}

/* ---------- ТАЙМЕР АКЦИИ ---------- */
function initCountdown(){
  const el = document.getElementById('countdownTimer');
  if (!el) return;

  // таймер отсчитывает фиксированный интервал от момента открытия страницы —
  // хранится в localStorage, чтобы при обновлении страницы не сбрасывался заново
  const DURATION_MS = 3 * 24 * 60 * 60 * 1000; // 3 дня
  const STORAGE_KEY = 'presetrixSaleDeadline';

  let deadline = parseInt(localStorage.getItem(STORAGE_KEY), 10);
  if (!deadline || deadline < Date.now()){
    deadline = Date.now() + DURATION_MS;
    localStorage.setItem(STORAGE_KEY, String(deadline));
  }

  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minutesEl = document.getElementById('cdMinutes');
  const secondsEl = document.getElementById('cdSeconds');
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function pad(n){ return String(n).padStart(2, '0'); }

  function tick(){
    const diff = Math.max(0, deadline - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);

    if (diff <= 0){
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  tick();
  setInterval(tick, 1000);
}

/* ---------- МИКРОАНИМАЦИИ: плавное появление блоков при скролле ---------- */
function initScrollReveal(){
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0 }); // 0 — срабатывает как только элемент хоть немного показался.
  // Раньше было 0.15: на мобильных, где сетки складываются в 1–2 колонки,
  // высокие блоки (каталог, бестселлеры) никогда не показывали 15% своей
  // площади на экране целиком — и блок так и оставался невидимым (opacity:0).

  items.forEach(el => observer.observe(el));

  // страховка: даже если по какой-то причине наблюдатель не сработает
  // (редкий баг браузера, очень необычная вёрстка и т.п.), через 2.5с
  // всё равно показываем все блоки — контент не должен зависать невидимым
  setTimeout(() => {
    items.forEach(el => el.classList.add('is-visible'));
  }, 2500);
}

/* ---------- ИНИЦИАЛИЗАЦИЯ ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // каждый блок инициализируется независимо: если один блок не находит
  // свой элемент и падает с ошибкой, это НЕ должно мешать остальным —
  // раньше одна ошибка (например, из-за несовпадения старых/новых файлов)
  // обрывала всю цепочку и каталог/карусель/бестселлеры оставались пустыми
  function safeInit(name, fn){
    try {
      fn();
    } catch (err) {
      console.error('Ошибка инициализации блока "' + name + '":', err);
    }
  }

  safeInit('heroSlider', initHeroSlider);
  safeInit('languageSwitcher', initLanguageSwitcher);
  safeInit('carousel', initCarousel);
  safeInit('showMoreButton', initShowMoreButton);
  safeInit('countdown', initCountdown);
  safeInit('scrollReveal', initScrollReveal);
  // это же вызовет renderFilterTabs / renderCatalog / renderBestsellers / renderTestimonials
  safeInit('language render', () => setLanguage(currentLang));
});