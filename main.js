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

  // три копии подряд — чтобы можно было бесшовно крутить в любую сторону
  for (let copy = 0; copy < 3; copy++){
    PACKS.forEach(pack => carousel.appendChild(buildCard(pack)));
  }

  let singleSetWidth = carousel.scrollWidth / 3;
  carousel.scrollLeft = singleSetWidth;

  window.addEventListener('load', () => {
    singleSetWidth = carousel.scrollWidth / 3;
    carousel.scrollLeft = singleSetWidth;
  });

  function wrapScroll(){
    if (carousel.scrollLeft >= singleSetWidth * 2){
      carousel.scrollLeft -= singleSetWidth;
    } else if (carousel.scrollLeft <= 0){
      carousel.scrollLeft += singleSetWidth;
    }
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
    requestAnimationFrame(tick);
  }
  carousel.dataset.speed = 0;
  tick();

  const cardWidth = 180; // эффективный шаг с учётом нахлёста карточек
  document.querySelector('.nav-left').addEventListener('click', () => {
    carousel.scrollBy({left: -cardWidth * 2, behavior:'smooth'});
    setTimeout(wrapScroll, 400);
  });
  document.querySelector('.nav-right').addEventListener('click', () => {
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

/* ---------- 0. ВИДЕО В ШАПКЕ (плавная смена роликов по кругу) ---------- */
function initHeroVideo(){
  const videos = [
    document.getElementById('heroVideo0'),
    document.getElementById('heroVideo1'),
    document.getElementById('heroVideo2')
  ].filter(Boolean);

  if (videos.length === 0) return;

  let current = 0;

  function playCurrent(){
    const v = videos[current];
    v.currentTime = 0;
    v.play().catch(() => {
      // если браузер заблокировал автоплей — не критично, просто останется первый кадр
    });
  }

  function goToNext(){
    const prevIndex = current;
    current = (current + 1) % videos.length;

    videos[current].currentTime = 0;
    videos[current].classList.add('is-active');
    videos[prevIndex].classList.remove('is-active');
    playCurrent();
  }

  videos.forEach((v, i) => {
    v.addEventListener('ended', goToNext);
  });

  playCurrent();
}

/* ---------- ИНИЦИАЛИЗАЦИЯ ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();
  initLanguageSwitcher();
  initCarousel();
  initBeforeAfter();
  initShowMoreButton();
  setLanguage(currentLang); // это же вызовет renderFilterTabs / renderCatalog / renderBestsellers
});