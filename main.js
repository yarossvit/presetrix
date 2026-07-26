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
    showMore: "Показать ещё",
    showLess: "Свернуть",
    footerText: "© Presetrix — все пресеты продаются на Etsy",
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
    showMore: "Show more",
    showLess: "Show less",
    footerText: "© Presetrix — all presets are sold on Etsy",
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
    showMore: "Показати ще",
    showLess: "Згорнути",
    footerText: "© Presetrix — усі пресети продаються на Etsy",
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

  let singleSetWidth = carousel.scrollWidth / 3;
  // при каждой загрузке страницы по центру оказывается случайный пак
  const randomStart = Math.floor(Math.random() * PACKS.length) * cardWidth;
  carousel.scrollLeft = singleSetWidth + randomStart;

  window.addEventListener('load', () => {
    singleSetWidth = carousel.scrollWidth / 3;
    carousel.scrollLeft = singleSetWidth + randomStart;
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
  const cards = Array.from(carousel.querySelectorAll('.carousel-card'));
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
  window.addEventListener('resize', updateCoverflow);
  window.addEventListener('load', updateCoverflow);

  wrap.querySelector('.nav-left').addEventListener('click', () => {
    carousel.scrollBy({left: -cardWidth * 2, behavior:'smooth'});
    setTimeout(wrapScroll, 400);
  });
  wrap.querySelector('.nav-right').addEventListener('click', () => {
    carousel.scrollBy({left: cardWidth * 2, behavior:'smooth'});
    setTimeout(wrapScroll, 400);
  });
}

/* ---------- 3.5. СЛАЙДЕР "ДО / ПОСЛЕ" ---------- */
function initBeforeAfter(){
  const container = document.getElementById('baContainer');
  const beforeWrap = document.getElementById('baBeforeWrap');
  const beforeImg = document.getElementById('baBeforeImg');
  const handle = document.getElementById('baHandle');

  function setBeforeImgWidth(){
    // картинка "до" внутри обрезанной обёртки должна быть шириной
    // с весь контейнер, а не с текущую ширину обёртки — иначе она сожмётся
    beforeImg.style.width = container.offsetWidth + 'px';
  }

  function setPosition(percent){
    percent = Math.min(100, Math.max(0, percent));
    beforeWrap.style.width = percent + '%';
    handle.style.left = percent + '%';
  }

  setBeforeImgWidth();
  setPosition(50);
  window.addEventListener('resize', setBeforeImgWidth);
  window.addEventListener('load', setBeforeImgWidth);

  function percentFromEvent(clientX){
    const rect = container.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  let dragging = false;

  container.addEventListener('mousedown', (e) => {
    dragging = true;
    setPosition(percentFromEvent(e.clientX));
  });
  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    setPosition(percentFromEvent(e.clientX));
  });
  window.addEventListener('mouseup', () => { dragging = false; });

  // тач-устройства
  container.addEventListener('touchstart', (e) => {
    dragging = true;
    setPosition(percentFromEvent(e.touches[0].clientX));
  });
  container.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    setPosition(percentFromEvent(e.touches[0].clientX));
  });
  container.addEventListener('touchend', () => { dragging = false; });
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

/* ---------- 0. ВИДЕО-СЛАЙДЕР В ШАПКЕ ---------- */
function initVideoSlider(){
  const track = document.getElementById('videoSliderTrack');
  const leftBtn = document.getElementById('videoSliderLeft');
  const rightBtn = document.getElementById('videoSliderRight');

  if (!track) return;

  const slides = Array.from(track.querySelectorAll('.video-slide'));
  const total = slides.length;
  let index = 0;

  // Видео всегда остаётся на одном месте — переключаем только то,
  // какой слайд видимый (плавный переход прозрачности), без сдвига блока.
  function goTo(i){
    index = (i + total) % total;
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });
  }

  leftBtn.addEventListener('click', () => goTo(index - 1));
  rightBtn.addEventListener('click', () => goTo(index + 1));

  goTo(0);
}

/* ---------- ИНИЦИАЛИЗАЦИЯ ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initVideoSlider();
  initLanguageSwitcher();
  initCarousel();
  initBeforeAfter();
  initShowMoreButton();
  setLanguage(currentLang); // это же вызовет renderFilterTabs / renderCatalog / renderBestsellers
});