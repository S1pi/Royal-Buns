(function () {
  const c = document.createElement('link').relList;
  if (c && c.supports && c.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) _(l);
  new MutationObserver((l) => {
    for (const f of l)
      if (f.type === 'childList')
        for (const m of f.addedNodes)
          m.tagName === 'LINK' && m.rel === 'modulepreload' && _(m);
  }).observe(document, {childList: !0, subtree: !0});
  function a(l) {
    const f = {};
    return (
      l.integrity && (f.integrity = l.integrity),
      l.referrerPolicy && (f.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function _(l) {
    if (l.ep) return;
    l.ep = !0;
    const f = a(l);
    fetch(l.href, f);
  }
})();
const ss = () => {
    const p = document.querySelector('body'),
      c = document.createElement('footer');
    c.classList.add(
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'bg-red',
      'p-10',
      'w-full'
    );
    const a = document.createElement('div');
    a.classList.add(
      'flex',
      'justify-center',
      'w-3/6',
      'h-2/3',
      'pt-4',
      'footerTextContainer'
    ),
      [
        [
          {text: 'TIETOA MEISTÄ', href: 'heading'},
          {text: 'Tietoa meistä', href: '/about'},
          {text: 'Ravintolat', href: '/restaurants'},
          {text: 'Galleria', href: '/gallery'},
        ],
        [
          {text: 'ASIAKASPALVELU', href: 'heading'},
          {text: 'Ota yhteyttä', href: '/contact'},
          {text: 'Usein kysyttyä', href: 'https://chatgpt.com'},
          {text: 'Yrityksille', href: '/business'},
        ],
        [
          {text: 'TUOTTEET', href: 'heading'},
          {text: 'Menu', href: '/menu'},
          {text: 'Vastuullisuus', href: '/responsibility'},
        ],
        [
          {text: 'KAMPANJAT JA TARJOUKSET', href: 'heading'},
          {text: 'Lounastarjous', href: '/menu'},
        ],
        [
          {text: 'SEURAA MEITÄ', href: 'heading'},
          {text: 'Instagram', href: 'https://www.instagram.com'},
          {text: 'Facebook', href: 'https://www.facebook.com'},
        ],
      ].forEach((I) => {
        const C = document.createElement('div');
        C.classList.add('flex', 'flex-col', 'items-start', 'p-4'),
          I.forEach((y) => {
            const P = y.text,
              S = y.href;
            if (S === 'heading') {
              const b = document.createElement('h3');
              b.classList.add('text-white', 'font-bold', 'mb-2'),
                (b.textContent = P),
                C.append(b);
            } else {
              const b = document.createElement('a');
              (b.href = S),
                (b.textContent = P),
                b.classList.add('text-gray-300', 'hover:text-yellow', 'mt-1'),
                C.append(b);
            }
          }),
          a.append(C);
      }),
      c.append(a),
      p && p.append(c);
  },
  as = () => {
    const p = sessionStorage.getItem('restaurant'),
      c = sessionStorage.getItem('reservation-size'),
      a = sessionStorage.getItem('reservation-time'),
      _ = sessionStorage.getItem('reservation-day');
    return {restaurant: p, reservationSize: c, time: a, reservationDay: _};
  },
  Bi = () => {
    const p = as();
    return Object.values(p).every((c) => c !== null && c !== '');
  },
  rs = () => {
    const p = document.getElementById('app');
    document.querySelector('header').classList.remove('bg-opacity-0');
    const a = document.createElement('div');
    a.classList.add(
      'bg-background-light',
      'w-full',
      'flex',
      'justify-center',
      'items-center',
      'p-10'
    );
    const _ = document.createElement('div');
    _.classList.add('bg-primary', 'h-5/6', 'w-5/6', 'p-10', 'flex-col');
    const l = document.createElement('div');
    l.classList.add(
      'text-red',
      'font-bold',
      'h-1/6',
      'w-1/1',
      'flex',
      'justify-center',
      'p-10'
    );
    const f = document.createElement('div');
    f.classList.add('flex', 'h-5/6', 'flex-col', 'items-center');
    const m = document.createElement('div');
    m.classList.add('flex', 'h-1/6', 'items-end', 'p-15', 'text-center', 'w-2/5');
    const v = document.createElement('div');
    v.classList.add('flex', 'h-5/6', 'justify-center', 'items-center', 'p-10', 'w-3/5');
    const u = document.createElement('h1');
    u.classList.add('text-6xl'), (u.textContent = 'YRITYKSILLE');
    const I = document.createElement('p');
    I.classList.add('text-lg', 'text-black', 'whitespace-pre-line');
    const C = `Onko teillä mielessä burgeriperjantai, virkistyspäivä tai henkilöstön palkitseminen? Meiltä löydät ratkaisut tilanteeseen kuin tilanteeseen! Yritysasiakkaana voit tilata tuotteitamme kuljetuksella tai ilman, sekä maksaa koko tilauksen laskulla.

Ole yhteydessä alla olevalla lomakkeella.`;
    I.textContent = C;
    const y = document.createElement('form');
    y.classList.add(
      'w-full',
      'space-y-5',
      'flex',
      'flex-col',
      'justify-start',
      'items-center',
      'border-8',
      'border-red',
      'p-14',
      'rounded-3xl',
      'shadow-xl'
    );
    const P = document.createElement('div');
    P.classList.add('flex', 'flex-col', 'w-full');
    const S = document.createElement('label');
    (S.textContent = 'Nimi'), S.classList.add('text-sm', 'text-black', 'mb-2');
    const b = document.createElement('input');
    (b.type = 'text'),
      (b.name = 'name'),
      (b.placeholder = 'Kirjoita nimesi'),
      b.classList.add('border', 'p-2', 'rounded', 'w-full'),
      P.append(S, b);
    const w = document.createElement('div');
    w.classList.add('flex', 'flex-col', 'w-full');
    const M = document.createElement('label');
    (M.textContent = 'Sähköposti'), M.classList.add('text-sm', 'text-black', 'mb-2');
    const D = document.createElement('input');
    (D.type = 'text'),
      (D.name = 'name'),
      (D.placeholder = 'Sähköpostiosoitteesi'),
      D.classList.add('border', 'p-2', 'rounded', 'w-full'),
      w.append(M, D);
    const B = document.createElement('div');
    B.classList.add('flex', 'flex-col', 'w-full');
    const O = document.createElement('label');
    (O.textContent = 'Aihe'), O.classList.add('text-sm', 'text-black', 'mb-2');
    const q = document.createElement('input');
    (q.type = 'text'),
      (q.name = 'subject'),
      (q.placeholder = 'Kirjoita aihe'),
      q.classList.add('border', 'p-2', 'rounded', 'w-full'),
      B.append(O, q);
    const Z = document.createElement('div');
    Z.classList.add('flex', 'flex-col', 'w-full');
    const V = document.createElement('label');
    (V.textContent = 'Viesti'), V.classList.add('text-sm', 'text-black', 'mb-2');
    const R = document.createElement('textarea');
    (R.style.resize = 'none'),
      (R.name = 'message'),
      (R.placeholder = 'Kirjoita viesti'),
      R.classList.add('border', 'p-2', 'rounded', 'w-full', 'h-32'),
      Z.append(V, R);
    const j = document.createElement('button');
    (j.type = 'submit'),
      (j.textContent = 'Lähetä'),
      j.classList.add(
        'bg-green',
        'text-black',
        'px-6',
        'py-3',
        'rounded',
        'hover:bg-yellow',
        'shadow-xl'
      );
    const U = document.createElement('p');
    (U.textContent = 'Viesti lähetetty onnistuneesti!'),
      U.classList.add('text-green-600', 'text-lg', 'mt-5', 'hidden'),
      y.addEventListener('submit', (tt) => {
        tt.preventDefault(),
          U.classList.remove('hidden'),
          y.reset(),
          setTimeout(() => {
            U.classList.add('hidden');
          }, 5e3);
      }),
      y.append(P, w, B, Z, j, U),
      v.append(y),
      f.append(m, v),
      l.append(u),
      m.append(I),
      _.append(l, f),
      a.appendChild(_),
      p.prepend(a);
  },
  ls = () => {
    const p = document.getElementById('app');
    document.createElement('header').classList.remove('bg-opacity-0');
    const a = document.createElement('div');
    a.classList.add(
      'bg-background-light',
      'w-full',
      'flex',
      'justify-center',
      'items-center',
      'p-10'
    );
    const _ = document.createElement('div');
    _.classList.add('bg-primary', 'h-5/6', 'w-5/6', 'p-10', 'flex-col');
    const l = document.createElement('div');
    l.classList.add(
      'text-red',
      'font-bold',
      'h-1/6',
      'w-1/1',
      'flex',
      'justify-center',
      'p-10'
    );
    const f = document.createElement('div');
    f.classList.add('flex', 'h-5/6', 'flex-col', 'items-center');
    const m = document.createElement('div');
    m.classList.add('h-1/6', 'items-end', 'p-15', 'text-center', 'w-2/5');
    const v = document.createElement('div');
    v.classList.add('flex', 'h-5/6', 'justify-center', 'items-center', 'p-10', 'w-3/5');
    const u = document.createElement('h1');
    u.classList.add('text-6xl'), (u.textContent = 'OTA YHTEYTTÄ');
    const I = document.createElement('p');
    I.classList.add('text-lg', 'text-black', 'whitespace-pre-line');
    const C = `Kiitos, että vierailit sivullamme! Olemme iloisia, että olet kiinnostunut palveluistamme ja haluat ottaa meihin yhteyttä. Meille on tärkeää kuulla asiakkaidemme mielipiteitä ja kysymyksiä, sillä ne auttavat meitä kehittämään toimintaamme. Olipa kyseessä palaute tai kysymys, asiantunteva tiimimme on valmiina auttamaan sinua.

Älä epäröi ottaa yhteyttä, olipa aiheesi pieni tai suuri. Tavoitteenamme on tarjota sinulle nopeaa ja tehokasta palvelua. Hyvä vuorovaikutus asiakkaidemme kanssa on meille tärkeää, ja odotamme innolla mahdollisuutta palvella sinua!`;
    I.textContent = C;
    const y = document.createElement('form');
    y.classList.add(
      'w-full',
      'space-y-5',
      'flex',
      'flex-col',
      'justify-start',
      'items-center',
      'border-8',
      'border-red',
      'p-14',
      'rounded-3xl',
      'shadow-xl'
    );
    const P = document.createElement('div');
    P.classList.add('flex', 'flex-col', 'w-full');
    const S = document.createElement('label');
    (S.textContent = 'Nimi'), S.classList.add('text-sm', 'text-black', 'mb-2');
    const b = document.createElement('input');
    (b.type = 'text'),
      (b.name = 'name'),
      (b.placeholder = 'Kirjoita nimesi'),
      b.classList.add('border', 'p-2', 'rounded', 'w-full'),
      P.append(S, b);
    const w = document.createElement('div');
    w.classList.add('flex', 'flex-col', 'w-full');
    const M = document.createElement('label');
    (M.textContent = 'Sähköposti'), M.classList.add('text-sm', 'text-black', 'mb-2');
    const D = document.createElement('input');
    (D.type = 'text'),
      (D.name = 'name'),
      (D.placeholder = 'Sähköpostiosoitteesi'),
      D.classList.add('border', 'p-2', 'rounded', 'w-full'),
      w.append(M, D);
    const B = document.createElement('div');
    B.classList.add('flex', 'flex-col', 'w-full');
    const O = document.createElement('label');
    (O.textContent = 'Aihe'), O.classList.add('text-sm', 'text-black', 'mb-2');
    const q = document.createElement('input');
    (q.type = 'text'),
      (q.name = 'subject'),
      (q.placeholder = 'Kirjoita aihe'),
      q.classList.add('border', 'p-2', 'rounded', 'w-full'),
      B.append(O, q);
    const Z = document.createElement('div');
    Z.classList.add('flex', 'flex-col', 'w-full');
    const V = document.createElement('label');
    (V.textContent = 'Viesti'), V.classList.add('text-sm', 'text-black', 'mb-2');
    const R = document.createElement('textarea');
    (R.style.resize = 'none'),
      (R.name = 'message'),
      (R.placeholder = 'Kirjoita viesti'),
      R.classList.add('border', 'p-2', 'rounded', 'w-full', 'h-32'),
      Z.append(V, R);
    const j = document.createElement('button');
    (j.type = 'submit'),
      (j.textContent = 'Lähetä'),
      j.classList.add(
        'bg-green',
        'text-black',
        'px-6',
        'py-3',
        'rounded',
        'hover:bg-yellow',
        'shadow-xl'
      );
    const U = document.createElement('p');
    (U.textContent = 'Viesti lähetetty onnistuneesti!'),
      U.classList.add('text-green-600', 'text-lg', 'mt-5', 'hidden'),
      y.addEventListener('submit', (tt) => {
        tt.preventDefault(),
          console.log('Name: ' + b.value),
          console.log('Email: ' + D.value),
          console.log('Subject: ' + q.value),
          console.log('Message: ' + R.value),
          U.classList.remove('hidden'),
          y.reset(),
          setTimeout(() => {
            U.classList.add('hidden');
          }, 5e3);
      }),
      y.append(P, w, B, Z, j, U),
      v.append(y),
      f.append(m, v),
      l.append(u),
      m.append(I),
      _.append(l, f),
      a.appendChild(_),
      p.prepend(a);
  },
  cs = () => {
    const p = document.getElementById('app');
    document.querySelector('header').classList.remove('bg-opacity-0');
    const a = document.createElement('div');
    a.classList.add(
      'bg-background-light',
      'w-full',
      'h-screen',
      'flex',
      'justify-center',
      'items-center'
    );
    const _ = document.createElement('div');
    _.classList.add('bg-primary', 'h-5/6', 'w-5/6', 'flex');
    const l = document.createElement('div');
    l.classList.add(
      'w-1/12',
      'h-full',
      'text-red',
      'flex',
      'justify-center',
      'items-center'
    );
    const f = document.createElement('div');
    f.classList.add(
      'flex',
      'flex-col',
      'h-5/6',
      'justify-center',
      'text-center',
      'text-[3vw]',
      'font-bold'
    );
    const m = 'GALLERIA';
    for (const U of m) {
      const tt = document.createElement('div');
      (tt.textContent = U),
        tt.classList.add('flex', 'items-center', 'justify-center', 'flex-1'),
        f.appendChild(tt);
    }
    l.appendChild(f);
    const v = document.createElement('div');
    v.classList.add(
      'w-1/12',
      'h-full',
      'text-red',
      'flex',
      'justify-center',
      'items-center'
    );
    const u = document.createElement('div');
    u.classList.add(
      'flex',
      'flex-col',
      'h-5/6',
      'justify-center',
      'text-center',
      'text-[3vw]',
      'font-bold',
      'transform',
      'rotate-180'
    );
    const I = 'GALLERIA';
    for (const U of I) {
      const tt = document.createElement('div');
      (tt.textContent = U),
        tt.classList.add('flex', 'items-center', 'justify-center', 'flex-1'),
        u.appendChild(tt);
    }
    v.appendChild(u);
    const C = document.createElement('div');
    C.classList.add('w-10/12', 'h-full', 'flex');
    const y = document.createElement('div');
    y.classList.add('w-2/3', 'h-full', 'relative', 'p-12');
    const P = document.createElement('div');
    P.classList.add(
      'scene',
      'absolute',
      'left-10',
      'top-10',
      'w-1/2',
      'h-1/2',
      'border-2'
    );
    const S = document.createElement('div');
    S.classList.add('card');
    const b = document.createElement('div');
    b.classList.add('fs', 'l-u-front'),
      (b.style.backgroundImage = 'url(img/burger2.jpeg)'),
      (b.style.backgroundSize = 'cover'),
      (b.style.backgroundRepeat = 'no-repeat'),
      (b.style.backgroundPosition = 'center'),
      (b.style.backfaceVisibility = 'hidden');
    const w = document.createElement('div');
    w.classList.add('fs', 'l-u-back'),
      (w.style.backgroundImage = 'url(img/frenchFires.jpeg)'),
      (w.style.backgroundSize = 'cover'),
      (w.style.backgroundRepeat = 'no-repeat'),
      (w.style.backgroundPosition = 'center'),
      (w.style.backfaceVisibility = 'hidden'),
      S.append(b, w),
      P.appendChild(S);
    const M = document.createElement('div');
    M.classList.add(
      'scene',
      'absolute',
      'bottom-10',
      '-right-10',
      'w-3/5',
      'h-3/5',
      'border-2'
    );
    const D = document.createElement('div');
    D.classList.add('card');
    const B = document.createElement('div');
    B.classList.add('fs', 'l-l-front'),
      (B.style.backgroundImage = 'url(img/restaurant1.jpeg)'),
      (B.style.backgroundSize = 'cover'),
      (B.style.backgroundRepeat = 'no-repeat'),
      (B.style.backgroundPosition = 'center'),
      (B.style.backfaceVisibility = 'hidden');
    const O = document.createElement('div');
    O.classList.add('fs', 'l-l-back'),
      (O.style.backgroundImage = 'url(img/restaurant2.jpeg)'),
      (O.style.backgroundSize = 'cover'),
      (O.style.backgroundRepeat = 'no-repeat'),
      (O.style.backgroundPosition = 'center'),
      (O.style.backfaceVisibility = 'hidden'),
      D.append(B, O),
      M.appendChild(D);
    const q = document.createElement('div');
    q.classList.add('w-1/3', 'h-full', 'flex', 'justify-center', 'items-center');
    const Z = document.createElement('div');
    Z.classList.add('scene', 'w-full', 'h-3/4', 'border-2');
    const V = document.createElement('div');
    V.classList.add('card');
    const R = document.createElement('div');
    R.classList.add('fs', 'r-front'),
      (R.style.backgroundImage = 'url(img/restaurant3.jpeg)'),
      (R.style.backgroundSize = 'cover'),
      (R.style.backgroundRepeat = 'no-repeat'),
      (R.style.backgroundPosition = 'center'),
      (R.style.backfaceVisibility = 'hidden');
    const j = document.createElement('div');
    j.classList.add('fs', 'r-back'),
      (j.style.backgroundImage = 'url(img/burger1.jpeg)'),
      (j.style.backgroundSize = 'cover'),
      (j.style.backgroundRepeat = 'no-repeat'),
      (j.style.backgroundPosition = 'center'),
      (j.style.backfaceVisibility = 'hidden'),
      V.append(R, j),
      Z.appendChild(V),
      S.addEventListener('click', function () {
        S.classList.toggle('flip'), console.log('FLIPPING');
      }),
      D.addEventListener('click', function () {
        D.classList.toggle('flip'), console.log('FLIPPING');
      }),
      V.addEventListener('click', function () {
        V.classList.toggle('flip'), console.log('FLIPPING');
      }),
      setInterval(function () {
        window.location.pathname == '/gallery' && S.classList.toggle('flip'),
          console.log('Left upper card flipped'),
          setTimeout(function () {
            D.classList.toggle('flip'), console.log('Left lower card flipped');
          }, 1e3),
          setTimeout(function () {
            V.classList.toggle('flip'), console.log('Right card flipped');
          }, 2e3);
      }, 6e3),
      y.append(P, M),
      q.append(Z),
      C.append(y, q),
      _.append(l, C, v),
      a.appendChild(_),
      p.appendChild(a);
  },
  ds = () => {
    const p = document.querySelector('#app'),
      c = document.createElement('div');
    c.classList.add('bg-background-light', 'p-10');
    const a = document.querySelector('header');
    a == null || a.classList.remove('bg-opacity-0');
    const _ = document.createElement('div');
    _.classList.add('container', 'mx-auto', 'bg-primary', 'p-5');
    const l = document.createElement('div');
    l.classList.add('flex', 'flex-col', 'md:flex-row', 'w-full'), _.appendChild(l);
    const f = document.createElement('div');
    f.classList.add('flex', 'flex-col', 'w-full', 'md:w-1/2', 'p-2'), l.appendChild(f);
    const m = document.createElement('h1'),
      v = 'Welcome to Royal Buns – Where Every Bite is Fit for a King!';
    (m.textContent = v),
      m.classList.add('text-2xl', 'font-bold', 'text-center', 'mb-4'),
      f.appendChild(m);
    const u = document.createElement('p'),
      I =
        'At Royal Buns, we believe in creating burgers that are nothing short of royalty. Our premium ingredients are sourced from the finest local farms, ensuring that each bite bursts with flavor. Whether you´re craving a classic cheeseburger or one of our signature creations, each burger is handcrafted to perfection.';
    (u.textContent = I),
      u.classList.add('text-base', 'font-normal', 'text-center', 'mb-4'),
      f.appendChild(u);
    const C = document.createElement('img');
    C.classList.add('w-full', 'mx-auto'),
      (C.src = './src/components/infoPage/info-img/chef.webp'),
      (C.alt = 'Burger cooker man'),
      f.appendChild(C);
    const y = document.createElement('div');
    y.classList.add('flex', 'flex-col', 'w-full', 'md:w-1/2', 'p-2', 'bg-primary'),
      l.appendChild(y);
    const P = document.createElement('img');
    P.classList.add('w-3/4', 'mx-auto', 'p-2'),
      (P.src = './src/components/infoPage/info-img/burger-holding-tray.webp'),
      (P.alt = 'Chef holding a tray of burgers'),
      y.appendChild(P);
    const S = document.createElement('p'),
      b =
        'Our brioche buns are baked fresh daily, while our patties are made from 100% organic beef, seasoned with our secret blend of herbs and spices. For those with a more adventurous palate, we offer a selection of gourmet toppings, from truffle aioli to caramelized onions and smoked cheddar. Vegetarian or vegan? No problem! We have a range of plant-based options that are equally regal. At Royal Buns, it’s not just about burgers; it’s about an experience. Our modern yet cozy atmosphere makes it the perfect spot for a quick lunch or a relaxed dinner with friends. Pair your burger with our handcrafted fries or indulge in our artisanal milkshakes – a treat worthy of royalty. Come by Royal Buns and taste the difference – because at Royal Buns, we believe every meal should be a royal feast!';
    (S.textContent = b),
      S.classList.add('text-base', 'font-normal', 'text-center', 'mb-4'),
      y.appendChild(S),
      c.appendChild(_),
      p.appendChild(c);
  },
  We = [
    {
      id: 1,
      heading: 'Päivän burgeri',
      text: 'Tänään tällainen vitun mahtava burgeri',
      link: 'joo tähä via tasus joksdni',
    },
    {
      id: 2,
      heading: 'Lounastarjous',
      text: 'lounalla jotain ja jotain hintaan jotain €',
      link: 'linkki tähän',
    },
    {
      id: 3,
      heading: 'Vastuullisuus',
      text: 'Tiesitkö että 94% raaka-aineistamme on kotimaisia',
      link: 'linkki tähän',
    },
  ],
  us = () => {
    const p = document.getElementById('app'),
      c = document.createElement('video');
    c.classList.add(
      'absolute',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'object-cover',
      'opacity-80',
      '-z-10',
      'videoBg'
    ),
      (c.src = 'videos/RoyalBuns-figma.mp4'),
      (c.autoplay = !0),
      (c.loop = !0),
      (c.muted = !0),
      document.querySelector('header').classList.add('bg-opacity-0', 'shadow-inner');
    const _ = document.createElement('div');
    _.classList.add('flex', 'items-center', 'justify-center', 'mainView'),
      (_.style.height = 'calc(100vh - 80px)');
    const l = document.createElement('div');
    l.classList.add(
      'relative',
      'w-2/3',
      'h-3/5',
      'overflow-hidden',
      'rounded-2xl',
      'carouselContainer'
    );
    const f = document.createElement('div');
    f.classList.add(
      'flex',
      'transition-transform',
      'duration-500',
      'h-full',
      'rounded-2xl'
    );
    const m = document.createElement('div');
    m.classList.add(
      'absolute',
      'left-0',
      'h-full',
      'w-16',
      'flex',
      'justify-center',
      'items-center',
      'text-yellow',
      'drop-shadow-xl',
      'text-2xl',
      'duration-300',
      'hover:text-4xl',
      'hover:bg-opacity-5',
      'carouselArrowContainer'
    );
    const v = document.createElement('i');
    (v.className = 'fa-solid fa-caret-left'), m.appendChild(v);
    const u = document.createElement('div');
    u.classList.add(
      'absolute',
      'right-0',
      'h-full',
      'w-16',
      'flex',
      'justify-center',
      'items-center',
      'text-yellow',
      'drop-shadow-xl',
      'text-2xl',
      'duration-300',
      'hover:text-4xl',
      'hover:bg-opacity-5',
      'carouselArrowContainer'
    );
    const I = document.createElement('i');
    (I.className = 'fa-solid fa-caret-right'),
      u.appendChild(I),
      We.forEach((j) => {
        const U = document.createElement('div');
        U.classList.add(
          'w-full',
          'flex-shrink-0',
          'h-full',
          'bg-opacity-10',
          'rounded-2xl',
          'flex',
          'flex-col',
          'justify-center',
          'items-center',
          'text-center',
          'py-12',
          'px-6'
        );
        const tt = document.createElement('h2');
        tt.classList.add(
          'text-4xl',
          'font-bold',
          'text-white',
          'drop-shadow-lg',
          'shadow-black'
        ),
          (tt.innerText = j.heading);
        const $ = document.createElement('p');
        if (
          ($.classList.add(
            'text-lg',
            'text-white',
            'mt-8',
            'drop-shadow-lg',
            'shadow-black'
          ),
          ($.innerText = j.text),
          U.append(tt, $),
          j.link)
        ) {
          const mt = document.createElement('div');
          mt.classList.add(
            'mt-8',
            'p-3',
            'h-auto',
            'w-16',
            'flex',
            'items-center',
            'justify-center',
            'rounded-lg',
            'bg-yellow',
            'drop-shadow-xl',
            'shadow-black'
          );
          const at = document.createElement('a');
          at.classList.add('text-black'),
            (at.href = j.link),
            (at.innerText = 'Siirry'),
            mt.appendChild(at),
            U.append(mt);
        }
        f.appendChild(U);
      }),
      l.appendChild(f);
    let C = 0;
    setInterval(() => {
      (C = (C + 1) % We.length), (f.style.transform = `translateX(-${C * 100}%)`);
    }, 5e3);
    const y = (j) => {
      (C = (j + We.length) % We.length), (f.style.transform = `translateX(-${C * 100}%)`);
    };
    m.addEventListener('click', () => y(C - 1)),
      u.addEventListener('click', () => y(C + 1));
    const P = document.createElement('div');
    P.classList.add('h-auto', 'w-full');
    const S = document.createElement('div');
    S.classList.add(
      'h-full',
      'w-full',
      'p-20',
      'bg-contain',
      'bg-center',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'restInfoContainer'
    ),
      (S.style.backgroundImage = "url('img/gold-splash.png')");
    const b = document.createElement('h1');
    b.classList.add('infoHeading', 'text-green', 'font-bold', 'text-h1', 'my-8'),
      (b.textContent = 'ROYAL BUNS');
    const w = document.createElement('p');
    w.classList.add(
      'text-black',
      'text-h5',
      'font-normal',
      'w-2/3',
      'pb-14',
      'text-center',
      'infoTextElement'
    ),
      (w.textContent =
        'Royal Buns on vuonna 2019 perustettu premium-burgeriketju, jonka ravintolat löytyvät Helsingistä, Espoosta, Tampereelta ja Rovaniemeltä. Maineemme laadukkaista ja käsityönä valmistetuista burgereista on tuonut burgerin ystävät yhteen ympäri Suomen. Rennossa mutta tyylikkäässä miljöössä valmistamme jokaisen annoksen huolella, ja Royal Buns onkin vakiinnuttanut paikkansa yhtenä Suomen kymmenestä parhaasta burgeriravintolasta vuosina 2022, 2023 ja 2024.');
    const M = document.createElement('div');
    M.classList.add(
      'w-32',
      'h-16',
      'my-8',
      'bg-yellow',
      'flex',
      'justify-center',
      'items-center',
      'rounded-full',
      'shadow-xl',
      'infoBtnContainer'
    );
    const D = document.createElement('a');
    (D.href = '/about'),
      (D.textContent = 'Lue lisää'),
      M.appendChild(D),
      S.append(b, w, M);
    const B = document.createElement('div');
    B.classList.add(
      'w-full',
      'h-96',
      'bg-fixed',
      'bg-cover',
      'bg-center',
      'picContainer'
    ),
      (B.style.backgroundImage = "url('img/grill.jpg')");
    const O = document.createElement('div');
    O.classList.add(
      'h-full',
      'w-full',
      'p-12',
      'm-0',
      'flex',
      'flex-col',
      'items-center',
      'text-center',
      'justify-center',
      'bg-white',
      'tabelResContainer'
    );
    const q = document.createElement('h1');
    q.classList.add('text-red', 'font-bold', 'text-h1', 'mb-8', 'infoHeading'),
      (q.textContent = 'VARAA PÖYTÄ');
    const Z = document.createElement('p');
    Z.classList.add(
      'text-black',
      'text-h5',
      'font-normal',
      'w-2/3',
      'text-center',
      'tableTextElement'
    ),
      (Z.textContent =
        'Varaa pöytä Royal Bunsista ja tule nauttimaan Suomen parhaimpiin kuuluvista premium-burgereista! Olipa kyseessä mukava ilta ystävien kanssa tai juhlahetki, me tarjoamme ainutlaatuisen burgerielämyksen tyylikkäässä ympäristössä. Varmista paikkasi ja tee varaus jo tänään!');
    const V = document.createElement('div');
    V.classList.add(
      'w-32',
      'h-16',
      'my-8',
      'bg-yellow',
      'flex',
      'justify-center',
      'items-center',
      'rounded-full',
      'shadow-xl'
    );
    const R = document.createElement('a');
    (R.textContent = 'Varaa pöytä'),
      (R.href = '/reservation'),
      V.appendChild(R),
      O.append(q, Z, V),
      P.append(S, B, O),
      _.append(c, m, l, u),
      p == null || p.append(_, P);
  },
  Mi = (p, c) => {
    c.classList.toggle('border-b-primary');
    const a = [
        {
          id: 1,
          diets: 'G,L',
          price: '14.50',
          name: 'Royal Smash',
          description:
            'Smash-style burger with crispy edges, double beef patties, melted cheddar, and house-made tangy sauce.',
          photo: 'img/royalSmash.jpeg',
          day: 'Everyday',
        },
        {
          id: 2,
          diets: 'G',
          price: '13.90',
          name: 'Bacon BBQ Delight',
          description:
            'Juicy beef patty, smoky BBQ sauce, crispy bacon, and crunchy onion rings.',
          photo: 'img/BBQ.jpeg',
          day: 'Everyday',
        },
        {
          id: 3,
          diets: 'L',
          price: '12.90',
          name: 'Crispy Chicken Classic',
          description:
            'Crispy chicken fillet, lettuce, tomato, and a creamy garlic mayo.',
          photo: 'img/crispyChicken.jpeg',
          day: 'Everyday',
        },
        {
          id: 4,
          diets: 'G',
          price: '14.90',
          name: 'Blue Cheese BBQ Chicken',
          description:
            'Grilled chicken fillet topped with tangy blue cheese, BBQ sauce, and fresh arugula.',
          photo: 'img/blueCheese.jpeg',
          day: 'Everyday',
        },
        {
          id: 5,
          diets: 'V',
          price: '12.50',
          name: 'Veggie Garden Delight',
          description:
            'A hearty vegetarian burger with a grilled veggie patty, fresh greens, and basil aioli.',
          photo: 'img/vege.jpeg',
          day: 'Everyday',
        },
        {
          id: 6,
          diets: 'V,G',
          price: '13.90',
          name: 'Grilled Halloumi Burger',
          description:
            'Grilled halloumi cheese, sun-dried tomatoes, avocado, and a balsamic glaze.',
          photo: 'img/halloumi.jpeg',
          day: 'Everyday',
        },
        {
          id: 7,
          diets: 'G,L',
          price: '13.50',
          name: 'Rustic Rye Burger',
          description:
            'A hearty rye burger with a beef patty, caramelized onions, pickled cucumber, and mustard mayo.',
          photo: '',
          day: 'Monday',
        },
        {
          id: 8,
          diets: 'G,L',
          price: '14.90',
          name: 'Crispy Fish Delight',
          description:
            'Golden-battered fish fillet with lettuce, tartar sauce, and fresh dill on a brioche bun.',
          photo: '',
          day: 'Tuesday',
        },
        {
          id: 9,
          diets: 'G,L',
          price: '15.90',
          name: 'Double Bacon Smash',
          description:
            'Two crispy-edged smash patties, double cheddar, crispy bacon, and smoky BBQ mayo.',
          photo: '',
          day: 'Wednesday',
        },
        {
          id: 10,
          diets: 'G,L',
          price: '13.90',
          name: 'Chicken Avocado Bliss',
          description:
            'Grilled chicken breast, creamy avocado slices, lettuce, tomato, and garlic aioli.',
          photo: '',
          day: 'Thursday',
        },
        {
          id: 11,
          diets: 'L',
          price: '14.50',
          name: 'Japanese Panko Chicken',
          description:
            'Crispy panko-breaded chicken, Chinese cabbage, sweet chili sauce, and sesame mayo.',
          photo: '',
          day: 'Friday',
        },
        {
          id: 12,
          diets: 'G',
          price: '14.90',
          name: 'Smokey BBQ Burger',
          description:
            'Beef patty with marinated red onions, smoky BBQ sauce, and melted gouda cheese.',
          photo: '',
          day: 'Saturday',
        },
        {
          id: 13,
          diets: 'G,L',
          price: '13.90',
          name: 'Sunday Roast Burger',
          description:
            'Slow-roasted beef brisket, horseradish mayo, caramelized onions, and arugula on a toasted brioche bun.',
          photo: '',
          day: 'Sunday',
        },
      ],
      _ = document.createElement('div');
    _.classList.add('grid', 'grid-cols-2', 'gap-6', 'w-full'),
      a.forEach((l) => {
        if (l.day == 'Everyday') {
          const f = document.createElement('div');
          f.classList.add(
            'flex',
            'flex-col',
            'items-center',
            'bg-white',
            'p-4',
            'rounded-md',
            'shadow-md'
          );
          const m = document.createElement('div');
          m.classList.add('w-full', 'h-auto', 'flex', 'items-center', 'justify-center');
          const v = document.createElement('h3');
          (v.textContent = l.name),
            v.classList.add('font-bold', 'text-xl', 'text-center', 'pt-2'),
            m.appendChild(v);
          const u = document.createElement('div');
          u.classList.add('w-full', 'h-auto', 'flex', 'flex-1');
          const I = document.createElement('div');
          I.classList.add('flex-1', 'flex', 'justify-center', 'items-center');
          const C = document.createElement('img');
          (C.src = l.photo),
            (C.alt = `Photo for ${l.name}`),
            C.classList.add('w-4/5', 'h-4/5', 'object-contain'),
            I.append(C);
          const y = document.createElement('div');
          y.classList.add('flex-1', 'flex', 'flex-col', 'p-6');
          const P = document.createElement('p');
          P.classList.add(
            'flex-1',
            'flex',
            'p-2',
            'text-lg',
            'text-gray-600',
            'items-center',
            'justify-center',
            'text-center'
          );
          const S = document.createElement('div');
          (S.textContent = l.description), P.appendChild(S);
          const b = document.createElement('p');
          (b.textContent = l.price + ' €'),
            b.classList.add('p-2', 'text-lg', 'text-center', 'text-red', 'font-semibold'),
            y.append(m, P, b),
            u.append(I, y),
            f.append(u),
            _.appendChild(f);
        }
        p.appendChild(_);
      });
  },
  hs = (p, c) => {
    c.classList.toggle('border-b-primary');
    const a = [
        {
          id: 1,
          name: 'Classic Coke',
          diets: 'basic',
          description: 'The timeless taste of Coca-Cola, served chilled to perfection.',
          image: 'path-to-image1.jpg',
          price: '€3.99',
        },
        {
          id: 2,
          name: 'Golden Citrus Elixir',
          diets: 'basic',
          description:
            'Freshly squeezed orange juice, bursting with vibrant citrus flavors.',
          image: 'path-to-image2.jpg',
          price: '€4.49',
        },
        {
          id: 3,
          name: 'Royal Lemonade',
          diets: 'basic',
          description:
            'A refreshing blend of lemons and a hint of mint, fit for royalty.',
          image: 'path-to-image3.jpg',
          price: '€4.99',
        },
        {
          id: 4,
          name: 'Imperial Iced Tea',
          diets: 'basic',
          description: 'Chilled iced tea with a touch of lemon, a drink of emperors.',
          image: 'path-to-image4.jpg',
          price: '€3.99',
        },
        {
          id: 5,
          name: 'Sparkling Crystal Water',
          diets: 'basic',
          description:
            'Pure carbonated water, as clear and refreshing as a mountain spring.',
          image: 'path-to-image5.jpg',
          price: '€2.99',
        },
        {
          id: 6,
          name: 'Velvet Milkshake',
          diets: 'basic',
          description:
            'A creamy milkshake with your choice of gourmet flavors, a true indulgence.',
          image: 'path-to-image6.jpg',
          price: '€5.99',
        },
        {
          id: 7,
          name: 'Royal Red Wine',
          diets: 'alcoholic',
          description: 'A glass of exquisite red wine, aged to perfection.',
          image: 'path-to-image7.jpg',
          price: '€19.99',
        },
        {
          id: 8,
          name: 'Golden Ale',
          diets: 'alcoholic',
          description: 'A premium golden ale with a rich, smooth taste.',
          image: 'path-to-image8.jpg',
          price: '€8.99',
        },
        {
          id: 9,
          name: 'Dom Pérignon Vintage',
          diets: 'alcoholic',
          description:
            'The epitome of luxury, this vintage champagne offers an unparalleled taste experience.',
          image: 'path-to-image9.jpg',
          price: '€299.99',
        },
      ],
      _ = document.createElement('div');
    _.classList.add('grid', 'grid-cols-3', 'gap-4', 'w-full'),
      a.forEach((l) => {
        const f = document.createElement('div');
        f.classList.add(
          'flex',
          'flex-col',
          'items-center',
          'bg-white',
          'p-4',
          'rounded-md',
          'shadow-md'
        );
        const m = document.createElement('h3');
        (m.textContent = l.name), m.classList.add('font-bold', 'text-lg', 'text-center');
        const v = document.createElement('p');
        (v.textContent = l.description),
          v.classList.add('text-sm', 'text-gray-600', 'text-center');
        const u = document.createElement('p');
        (u.textContent = l.price),
          u.classList.add('text-lg', 'text-red-500', 'font-semibold'),
          f.append(m, v, u),
          _.appendChild(f),
          p.appendChild(_);
      });
  },
  ms = (p, c) => {
    c.classList.toggle('border-b-primary');
    const a = [
        {
          id: 1,
          name: 'Classic Fries',
          diets: 'basic',
          description: 'Crispy golden fries with a touch of salt.',
          image: 'path-to-image1.jpg',
          price: '€3.99',
        },
        {
          id: 2,
          name: 'Spicy Fries',
          diets: 'spicy',
          description: 'Fries with a spicy kick, seasoned with chili powder.',
          image: 'path-to-image2.jpg',
          price: '€4.49',
        },
        {
          id: 3,
          name: 'Onion Rings',
          diets: 'vegetarian',
          description: 'Crispy onion rings with a golden batter.',
          image: 'path-to-image3.jpg',
          price: '€4.99',
        },
        {
          id: 4,
          name: 'Cheese Fries',
          diets: 'lactose-free',
          description: 'Fries topped with melted cheese and bacon bits.',
          image: 'path-to-image4.jpg',
          price: '€5.49',
        },
        {
          id: 5,
          name: 'Sweet Potato Fries',
          diets: 'gluten-free',
          description: 'Sweet potato fries with a hint of cinnamon.',
          image: 'path-to-image5.jpg',
          price: '€4.99',
        },
        {
          id: 6,
          name: 'Garlic Parmesan Fries',
          diets: 'vegetarian',
          description: 'Fries tossed in garlic and Parmesan cheese.',
          image: 'path-to-image6.jpg',
          price: '€5.99',
        },
      ],
      _ = document.createElement('div');
    _.classList.add('grid', 'grid-cols-3', 'gap-4', 'w-full'),
      a.forEach((l) => {
        const f = document.createElement('div');
        f.classList.add(
          'flex',
          'flex-col',
          'items-center',
          'bg-white',
          'p-4',
          'rounded-md',
          'shadow-md'
        );
        const m = document.createElement('h3');
        (m.textContent = l.name), m.classList.add('font-bold', 'text-lg', 'text-center');
        const v = document.createElement('p');
        (v.textContent = l.description),
          v.classList.add('text-sm', 'text-gray-600', 'text-center');
        const u = document.createElement('p');
        (u.textContent = l.price),
          u.classList.add('text-lg', 'text-red-500', 'font-semibold'),
          f.append(m, v, u),
          _.appendChild(f),
          p.appendChild(_);
      });
  },
  fs = (p, c) => {
    c.classList.toggle('border-b-primary');
    const a = [
        {
          id: 1,
          name: 'Mini Classic Slider',
          description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato.',
          image: 'path-to-image1.jpg',
          price: '€5.99',
        },
        {
          id: 2,
          name: 'Spicy Mini Fiesta',
          description:
            'A zesty slider with jalapeños, spicy sauce, and pepper jack cheese.',
          image: 'path-to-image2.jpg',
          price: '€6.49',
        },
        {
          id: 3,
          name: 'BBQ Mini Bliss',
          description: 'BBQ beef patty with smoked cheese and caramelized onions.',
          image: 'path-to-image3.jpg',
          price: '€6.99',
        },
        {
          id: 4,
          name: 'Veggie Delight Slider',
          description: 'A healthy veggie patty with fresh lettuce and tomato.',
          image: 'path-to-image4.jpg',
          price: '€5.49',
        },
        {
          id: 5,
          name: 'Chicken Little Slider',
          description: 'Crispy chicken patty with mayo and pickles.',
          image: 'path-to-image5.jpg',
          price: '€6.49',
        },
        {
          id: 6,
          name: 'Cheese Lover Slider',
          description: 'A slider with double cheese and a juicy beef patty.',
          image: 'path-to-image6.jpg',
          price: '€6.99',
        },
      ],
      _ = document.createElement('div');
    _.classList.add('grid', 'grid-cols-3', 'gap-4', 'w-full'),
      a.forEach((l) => {
        const f = document.createElement('div');
        f.classList.add(
          'flex',
          'flex-col',
          'items-center',
          'bg-white',
          'p-4',
          'rounded-md',
          'shadow-md'
        );
        const m = document.createElement('h3');
        (m.textContent = l.name), m.classList.add('font-bold', 'text-lg', 'text-center');
        const v = document.createElement('p');
        (v.textContent = l.description),
          v.classList.add('text-sm', 'text-gray-600', 'text-center');
        const u = document.createElement('p');
        (u.textContent = l.price),
          u.classList.add('text-lg', 'text-red-500', 'font-semibold'),
          f.append(m, v, u),
          _.appendChild(f),
          p.appendChild(_);
      });
  },
  ps = (p, c) => {
    const a = document.createElement('div');
    a.classList.add(
      'flex',
      'justify-between',
      'items-center',
      'bg-primary',
      'w-2/4',
      'text-center'
    ),
      p.appendChild(a);
    const _ = ['BURGERS', 'SLIDERS', 'SIDES', 'DRINKS'],
      l = [];
    _.forEach((f) => {
      const m = document.createElement('button');
      l.push(m), (m.id = f.toLowerCase());
      const v = document.createElement('span');
      (v.textContent = f),
        m.appendChild(v),
        m.classList.add(
          'p-2',
          'flex-1',
          'text-h5',
          'font-bold',
          'text-center',
          'text-red',
          'border-solid',
          'border-black',
          'border-y-2'
        ),
        l.forEach((u) => {
          switch (u.id) {
            case 'sliders':
              u.classList.add('border-x-2');
              break;
            case 'burgers':
              u.classList.add('border-l-2');
              break;
            case 'sides':
              u.classList.add('border-r-2');
              break;
            case 'drinks':
              u.classList.add('border-r-2');
              break;
          }
        }),
        a.appendChild(m),
        m.addEventListener('click', () => {
          switch (((c.innerHTML = ''), f)) {
            case 'BURGERS':
              l.forEach((u) => {
                u.classList.remove('border-b-primary');
              }),
                Mi(c, m);
              break;
            case 'SLIDERS':
              l.forEach((u) => {
                u.classList.remove('border-b-primary');
              }),
                fs(c, m);
              break;
            case 'SIDES':
              l.forEach((u) => {
                u.classList.remove('border-b-primary');
              }),
                ms(c, m);
              break;
            case 'DRINKS':
              l.forEach((u) => {
                u.classList.remove('border-b-primary');
              }),
                hs(c, m);
              break;
          }
        }),
        f == 'BURGERS' && Mi(c, m);
    });
  },
  _s = () => {
    const p = document.querySelector('#app'),
      c = document.querySelector('header');
    c == null || c.classList.remove('bg-opacity-0');
    const a = document.createElement('div');
    a.classList.add(
      'bg-background-light',
      'p-5',
      'flex',
      'flex-col',
      'justify-center',
      'items-center'
    );
    const _ = document.createElement('div');
    _.classList.add('flex', 'flex-col', 'items-center', 'w-2/3', 'min-h-[600px]'),
      a.appendChild(_),
      p.appendChild(a);
    const l = document.createElement('div');
    l.classList.add('bg-primary', 'w-full', 'flex', 'flex-col', 'p-14'),
      ps(_, l),
      _.appendChild(l);
  },
  gs = '/api',
  Ut = async (p, c) => {
    console.log('Checking fetch...');
    try {
      const a = await fetch(gs + p, c);
      if (!a.ok) {
        if (a.statusText === 'Unauthorized')
          return {
            status: a.status,
            errorText: a.statusText,
            message: 'Login failed: Username or password is incorrect',
          };
        if (a.statusText === 'Forbidden')
          return {
            status: a.status,
            errorText: a.statusText,
            message: 'Login failed: User is not authorized',
          };
        if (a.statusText === 'Not Found')
          return {
            status: a.status,
            errorText: a.statusText,
            message: 'Resource not found',
          };
        if (a.status === 409)
          return {
            status: a.status,
            errorText: a.statusText,
            message: 'Username is already in use',
          };
        throw (
          (console.error('Jokin meni vikaan backend fetchissä: ', a, typeof a),
          new Error('Error!!'))
        );
      }
      return await a.json();
    } catch (a) {
      throw (console.error('Error in fetch: ', a), new Error('Error in fetch'));
    }
  },
  zi = async () => {
    const c = await Ut('/restaurants', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    if (!c) throw new Error('Failed to fetch restaurants');
    return c;
  },
  Ln = {
    FI: {
      register: {
        success: 'Rekisteröinti onnistui! Voit nyt kirjautua sisään.',
        fail: 'Rekisteröinti epäonnistui: ',
      },
      logIn: {
        success: 'Kirjautuminen onnistui! Tervetuloa!',
        fail: 'Kirjautuminen epäonnistui: ',
      },
    },
    EN: {
      register: {
        success: 'Registration successful! You can now log in.',
        fail: 'Registration failed: ',
      },
      logIn: {success: 'Login successful! Welcome!', fail: 'Login failed: '},
    },
  },
  Ce = localStorage.getItem('language') || 'FI';
Ce !== 'EN' && Ce !== 'FI' && (localStorage.setItem('language', 'FI'), Mt());
const vs = async (p) => {
    try {
      const c = {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(p),
        },
        a = await Ut('/auth/register', c);
      console.log(a),
        a.code === 201
          ? (alert(Ln[Ce].register.success), Mt())
          : alert(Ln[Ce].register.fail + a.message);
    } catch (c) {
      c instanceof Error &&
        (console.error(
          'Virhe käsitellessä formia: ',
          'stack: ' + c.stack,
          'message: ' + c.message,
          'name: ' + c.name
        ),
        c.message === 'Failed to fetch' &&
          alert('Rekisteröinti epäonnistui: palvelin ei vastaa'));
    }
  },
  ys = async (p) => {
    try {
      const c = {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(p),
        },
        a = await Ut('/auth/login', c);
      console.log('Response:', a),
        'username' in a && 'email' in a
          ? (localStorage.setItem('user-token', a.token),
            history.replaceState({}, '', '/login'),
            Mt())
          : (alert(`${a.status}: ${a.errorText} --> ${a.message}`),
            alert(Ln[Ce].logIn.fail + a.message));
    } catch (c) {
      c instanceof Error
        ? (console.error(
            'Virhe käsitellessä formia: ',
            'stack: ' + c.stack,
            'message: ' + c.message,
            'name: ' + c.name
          ),
          c.message === 'Failed to fetch' &&
            alert('Kirajutuminen epäonnistui: palvelin ei vastaa'))
        : (console.error('Unknown error: ', c), alert('Unknown error: ' + c));
    }
  },
  En = async () => {
    console.log('Checking user authentication');
    const p = localStorage.getItem('user-token');
    if (!p) return !1;
    const c = {
      method: 'GET',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${p}`},
    };
    return (await Ut('/user/me', c)).message === 'token ok';
  },
  Ai = async () => {
    console.log('Getting profile page data');
    const c = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('user-token')}`,
        },
      },
      a = await Ut('/user/me', c),
      _ = await Ut('/reservations/user/all', c),
      l = {
        user_info: {
          id: a.user.id,
          username: a.user.username,
          email: a.user.email,
          phonenumber: a.user.phonenumber,
          user_type: a.user.user_type,
        },
        reservations: _,
      };
    return console.log('Profile page data check from AuthService: ', l), l;
  },
  xs = async () => {
    const p = document.querySelector('#app');
    document.querySelector('header').classList.remove('bg-opacity-0');
    const a = document.createElement('div');
    a.classList.add(
      'bg-background-light',
      'p-5',
      'h-screen',
      'flex',
      'flex-col',
      'justify-center'
    );
    const _ = (et) => !0,
      l = document.createElement('div');
    l.classList.add(
      'contentContainer',
      'mx-auto',
      'm-10',
      'bg-primary',
      'h-full',
      'w-3/4',
      'flex',
      'flex-col',
      'p-5'
    );
    const f = document.createElement('h1');
    (f.textContent = _() ? 'VARAA PÖYTÄ' : 'BOOK A TABLE'),
      f.classList.add(
        'flex',
        'text-h1',
        'font-bold',
        'text-center',
        'justify-center',
        'text-red'
      ),
      l.appendChild(f);
    const m = document.createElement('div');
    m.classList.add('flex', 'justify-center', 'items-center', 'mt-10');
    const v = document.createElement('p');
    (v.textContent = 'Pöydän varaaminen edellyttää että on kirjautunut sisään'),
      v.classList.add(
        'text-center',
        'text-secondary',
        'text-sm',
        'font-semibold',
        'mb-4'
      ),
      m.appendChild(v),
      l.appendChild(m);
    const u = document.createElement('p');
    (u.textContent = 'Kaikki varaukset ovat voimassa 2 tuntia varausajasta alkaen.'),
      u.classList.add('text-center', 'text-secondary', 'text-sm', 'mb-1'),
      l.appendChild(u);
    const I = document.createElement('p');
    (I.textContent =
      'Illan viimeiset varaukset loppuvat 30 minuuttia ovien sulkemisen jälkeen.'),
      I.classList.add('text-center', 'text-secondary', 'text-sm'),
      l.appendChild(I);
    const C = document.createElement('div');
    C.classList.add(
      'flex',
      'justify-center',
      'items-center',
      'gap-2',
      'mt-6',
      'mb-4',
      'flex-col'
    ),
      l.appendChild(C);
    const y = document.createElement('select');
    y.classList.add(
      'block',
      'w-full',
      'h-10',
      'mx-auto',
      'mt-5',
      'appearance-none',
      'rounded-lg',
      'text-center',
      'bg-primary',
      'text-red',
      'border',
      'border-red',
      'relative',
      'pr-10',
      'cursor-pointer'
    ),
      (y.id = 'restaurantSelect'),
      (y.name = 'restaurantSelect'),
      (y.required = !0);
    const P = document.createElement('option');
    (P.value = ''),
      (P.textContent = 'Valitse Ravintola'),
      (P.disabled = !0),
      (P.selected = !0),
      y.appendChild(P);
    const S = await zi();
    S.forEach((et) => {
      const z = document.createElement('option');
      (z.value = et.id.toString()), (z.textContent = et.res_name), y.appendChild(z);
    }),
      y.addEventListener('change', () => {
        console.log(y.value), sessionStorage.setItem('restaurant', y.value);
      });
    const b = document.createElement('div');
    b.classList.add('relative', 'inline-block', 'w-full', 'max-w-96', 'resDropContainer');
    const w = document.createElement('i');
    w.classList.add(
      'fa-solid',
      'fa-burger',
      'absolute',
      'right-3',
      'top-2/3',
      'transform',
      '-translate-y-1/2',
      'pointer-events-none',
      'text-red'
    ),
      b.appendChild(y),
      b.appendChild(w),
      C.appendChild(b);
    const M = document.createElement('select');
    M.classList.add(
      'block',
      'w-full',
      'appearance-none',
      'h-10',
      'mx-auto',
      'mt-5',
      'rounded-lg',
      'text-center',
      'bg-primary',
      'text-red',
      'border',
      'border-red',
      'cursor-pointer'
    ),
      (M.id = 'people'),
      (M.name = 'people'),
      (M.required = !0);
    const D = document.createElement('option');
    (D.value = ''),
      (D.textContent = 'Valitse henkilömäärä'),
      (D.disabled = !0),
      (D.selected = !0),
      M.appendChild(D),
      ['1-2 Henkilöä', '3-4 Henkilöä', '5-6 Henkilöä', '7-8 Henkilöä'].forEach((et) => {
        const z = document.createElement('option');
        (z.value = et), (z.textContent = et), M.appendChild(z);
      }),
      M.addEventListener('change', () => {
        console.log(M.value),
          M.value === '1-2 Henkilöä'
            ? sessionStorage.setItem('reservation-size', '2')
            : M.value === '3-4 Henkilöä' || M.value === '5-6 Henkilöä'
              ? sessionStorage.setItem('reservation-size', '6')
              : M.value === '7-8 Henkilöä' &&
                sessionStorage.setItem('reservation-size', '8');
      });
    const O = document.createElement('div');
    O.classList.add('relative', 'inline-block', 'w-full', 'max-w-96', 'resDropContainer');
    const q = document.createElement('i');
    q.classList.add(
      'fa-solid',
      'fa-users',
      'absolute',
      'right-3',
      'top-2/3',
      'transform',
      '-translate-y-1/2',
      'pointer-events-none',
      'text-red'
    ),
      O.appendChild(M),
      O.appendChild(q),
      C.appendChild(O);
    const Z = document.createElement('input');
    (Z.type = 'date'),
      Z.classList.add(
        'block',
        'w-full',
        'h-10',
        'mx-auto',
        'mt-5',
        'rounded-lg',
        'bg-primary',
        'text-red',
        'border',
        'border-red',
        'text-center',
        'date-picker',
        'cursor-pointer'
      );
    const V = document.createElement('button'),
      R = document.createElement('i');
    R.classList.add('fa-regular', 'fa-calendar', 'text-red'),
      V.appendChild(R),
      V.classList.add(
        'absolute',
        'right-3',
        'top-2/3',
        '-translate-y-1/2',
        'pointer-events-none'
      ),
      V.addEventListener('click', () => {});
    const j = document.createElement('div');
    j.classList.add('relative', 'inline-block', 'w-full', 'max-w-96', 'resDropContainer'),
      j.append(Z, V),
      C.appendChild(j),
      Z.addEventListener('change', () => {
        sessionStorage.setItem('reservation-day', Z.value);
      }),
      Z.addEventListener('click', () => {
        const et = y.value,
          z = S.find((dt) => dt.id === Number(et));
        console.log(z),
          z == null && alert('You need to select Restaurant'),
          Z.showPicker();
      });
    const U = document.createElement('select');
    U.classList.add(
      'block',
      'w-full',
      'h-10',
      'mx-auto',
      'mt-5',
      'appearance-none',
      'align-center',
      'text-center',
      'rounded-lg',
      'bg-primary',
      'text-red',
      'border',
      'border-red',
      'relative',
      'pr-12',
      'cursor-pointer'
    );
    const tt = document.createElement('div');
    tt.classList.add('relative', 'inline-block', 'w-4/5', 'max-w-96', 'resDropContainer');
    const $ = document.createElement('i');
    $.classList.add(
      'fa-solid',
      'fa-clock',
      'absolute',
      'right-3',
      'top-2/3',
      'transform',
      '-translate-y-1/2',
      'pointer-events-none',
      'text-red'
    ),
      tt.appendChild(U),
      tt.appendChild($);
    const st = (et) => {
        const [z, dt] = et.split('-');
        let [T, rt] = z.split(':').map(Number);
        const [x, k] = dt.split(':').map(Number),
          W = [];
        for (; T < x || (T === x && rt <= k); )
          if (
            (W.push(`${String(T).padStart(2, '0')}:${String(rt).padStart(2, '0')}`),
            (rt += 30),
            rt >= 60)
          ) {
            if (T === x - 2) break;
            (rt -= 60), (T += 1);
          }
        return W;
      },
      mt = (et) => {
        U.innerHTML = '';
        const z = document.createElement('option');
        (z.value = 'time'),
          (z.textContent = 'Valitse aika'),
          (z.disabled = !0),
          (z.selected = !0),
          U.appendChild(z);
        const dt = Z.value,
          T = new Date(dt);
        let rt;
        T.getDay() === 0 || T.getDay() === 6
          ? ((rt = 'weekends'), console.log('viikonloppu'))
          : ((rt = 'weekdays'), console.log('Arki'));
        const x = et.openHours[rt],
          k = st(x);
        k.forEach((W) => {
          const J = document.createElement('option');
          (J.value = W), (J.textContent = W), U.appendChild(J);
        }),
          console.log(T.getDay(), k),
          C.appendChild(tt),
          U.addEventListener('change', () => {
            sessionStorage.setItem('reservation-time', U.value + ':00');
          });
      };
    Z.addEventListener('change', () => {
      const et = y.value,
        z = S.find((dt) => dt.id === Number(et));
      if ((mt(z), z === void 0))
        throw new Error('Error occurred with fetching restaurant');
      console.log(z),
        y.addEventListener('change', () => {
          const dt = y.value,
            T = S.find((rt) => rt.id === Number(dt));
          mt(T);
        });
    });
    const at = document.createElement('button');
    (at.textContent = 'Varaa pöytä'),
      at.classList.add(
        'flex',
        'block',
        'w-1/4',
        'h-20',
        'mx-auto',
        'mt-10',
        'rounded-lg',
        'bg-primary',
        'text-red',
        'border',
        'border-red',
        'shadow-lg',
        'justify-center',
        'items-center',
        'p-5',
        'pop-out-animation',
        'max-w-96',
        'w-4/5',
        'resReserveBtn'
      ),
      l.appendChild(at),
      a.appendChild(l),
      p.appendChild(a),
      at.addEventListener('click', async () => {
        const et = await En();
        et && Bi()
          ? (window.location.pathname += '/table-selection')
          : alert(
              et
                ? 'You need to select all the options before making a reservation. Please check the selections and try again.'
                : 'You need to be logged in to make a reservation'
            );
      });
  },
  bs = async (p, c, a, _) => {
    const l = {method: 'GET', headers: {'Content-Type': 'application/json'}},
      f = await Ut(
        `/reservations/${p}/free-tables?reservation_date=${c}&start_time=${a}&end_time=${_}`,
        l
      );
    return f || [];
  },
  ws = async (p, c, a, _, l) => {
    const f = localStorage.getItem('user-token'),
      m = {
        restaurant_id: l,
        table_id: _,
        reservation_date: p,
        start_time: c,
        end_time: a,
      },
      v = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${f}`},
        body: JSON.stringify(m),
      },
      u = await Ut('/reservations/make-reservation', v);
    return console.log('Reservation: ', u), u ? u.reservation_info : null;
  },
  Ls = async () => {
    sessionStorage.getItem('reservationResultModalOpened') === 'true' &&
      (sessionStorage.clear(), (window.location.href = '/'));
    const p = document.querySelector('#app');
    document.querySelector('header').classList.remove('bg-opacity-0');
    const a = document.createElement('div');
    a.classList.add(
      'bg-background-light',
      'p-5',
      'h-screen',
      'flex',
      'flex-col',
      'justify-center'
    );
    const _ = document.createElement('div');
    _.classList.add(
      'mx-auto',
      'm-10',
      'bg-primary',
      'h-full',
      'w-3/4',
      'flex',
      'flex-col',
      'p-5'
    );
    const l = document.createElement('h1');
    (l.textContent = 'VARAA PÖYTÄ'),
      l.classList.add(
        'flex',
        'text-h1',
        'font-bold',
        'text-center',
        'justify-center',
        'text-red'
      ),
      _.appendChild(l);
    const f = document.createElement('div');
    f.classList.add('flex', 'flex-col', 'mt-5', 'items-center');
    const m = document.createElement('div');
    m.classList.add('flex', 'gap-4', 'mb-4');
    const v = document.createElement('div');
    (v.textContent = 'Varattu'), v.classList.add('flex', 'items-center');
    const u = document.createElement('span');
    u.classList.add('w-5', 'h-5', 'mr-2', 'ml-2', 'bg-red'), v.appendChild(u);
    const I = document.createElement('div');
    (I.textContent = 'Varattavissa'), I.classList.add('flex', 'items-center');
    const C = document.createElement('span');
    C.classList.add('w-5', 'h-5', 'mr-2', 'ml-2', 'bg-green'), I.appendChild(C);
    const y = document.createElement('div');
    (y.textContent = 'Valittu'), y.classList.add('flex', 'items-center');
    const P = document.createElement('span');
    P.classList.add('w-5', 'h-5', 'mr-2', 'ml-2', 'bg-yellow'),
      y.appendChild(P),
      m.append(v, I, y),
      f.append(m);
    const S = document.createElement('div');
    S.classList.add('grid', 'grid-cols-3', 'bg-white', 'p-4', 'rounded-xl', 'gap-12');
    const b = document.createElement('div');
    b.classList.add('grid', 'grid-cols-5', 'gap-6', 'col-span-2', 'place-items-center');
    const w = document.createElement('div');
    w.classList.add(
      'grid',
      'grid-cols-3',
      'row-span-2',
      'gap-4',
      'grid',
      'place-items-center'
    );
    const M = document.createElement('div');
    M.classList.add(
      'grid',
      'col-span-2',
      'grid-cols-5',
      'gap-4',
      'justify-center',
      'place-items-center'
    ),
      S.append(b, w, M),
      f.append(S);
    const D = (x) => {
        (document.body.style.overflow = 'hidden'),
          console.log(
            'createSuccessModal -> reservationInformation: ',
            x.reservation_date,
            x.start_time,
            x.end_time,
            x.table_id,
            x.restaurant_name
          );
        const k = document.createElement('div');
        k.classList.add(
          'fixed',
          'inset-0',
          'bg-black',
          'bg-opacity-50',
          'flex',
          'items-center',
          'justify-center',
          'hidden',
          'z-50',
          'scroll-m-0'
        );
        const W = document.createElement('div');
        W.classList.add(
          'bg-primary',
          'rounded-lg',
          'p-10',
          'text-center',
          'min-w-96',
          'shadow-lg'
        );
        const J = document.createElement('h2');
        (J.textContent = 'Varaus onnistui!'),
          J.classList.add('text-h2', 'font-bold', 'mb-6', 'text-warm-brown');
        const X = document.createElement('i');
        X.classList.add(
          'fa-regular',
          'fa-check-circle',
          'text-3xl',
          'mb-2',
          'ml-2',
          'text-olive-green'
        ),
          J.appendChild(X),
          W.appendChild(J);
        const H = document.createElement('div');
        H.classList.add('mb-4', 'border-y-2', 'border-warm-brown', 'py-4');
        const N = document.createElement('h4');
        (N.textContent = 'Varauksen tiedot:'),
          N.classList.add('text-h4', 'font-semibold', 'mb-4', 'text-warmer-brown'),
          H.appendChild(N);
        const ct = document.createElement('div');
        ct.classList.add('flex', 'flex-col', 'text-left');
        const ut = document.createElement('p');
        (ut.textContent = `Ravintola: ${x.restaurant_name}`),
          ut.classList.add('text-base', 'mb-2', 'text-warmer-brown');
        const bt = document.createElement('i');
        bt.classList.add('fas', 'fa-utensils', 'mr-3', 'text-warmer-brown'),
          ut.prepend(bt);
        const Q = document.createElement('p');
        (Q.textContent = `Päivämäärä: ${x.reservation_date}`),
          Q.classList.add('text-base', 'mb-2', 'text-warmer-brown');
        const ft = document.createElement('i');
        ft.classList.add('far', 'fa-calendar-alt', 'mr-3', 'text-warmer-brown'),
          Q.prepend(ft);
        const it = document.createElement('p');
        (it.textContent = `Aika: ${x.start_time} - ${x.end_time}`),
          it.classList.add('text-base', 'mb-2', 'text-warmer-brown');
        const Pt = document.createElement('i');
        Pt.classList.add('far', 'fa-clock', 'mr-3', 'text-warmer-brown'), it.prepend(Pt);
        const wt = document.createElement('p');
        (wt.textContent = `Pöydän numero: ${x.table_id}`),
          wt.classList.add('text-base', 'mb-2', 'text-warmer-brown');
        const _t = document.createElement('i');
        _t.classList.add('fas', 'fa-chair', 'mr-3', 'text-warmer-brown'),
          wt.prepend(_t),
          ct.append(ut, Q, it, wt),
          H.appendChild(ct),
          W.appendChild(H);
        const gt = document.createElement('p');
        (gt.textContent = 'Näet varauksesi profiilissasi.'),
          gt.classList.add('text-sm', 'italic', 'mt-2', 'mb-6', 'text-warmer-brown'),
          W.appendChild(gt);
        const kt = document.createElement('p');
        (kt.innerHTML = 'Kiitos varauksestasi! <br/> Tervetuloa ravintolaamme!'),
          kt.classList.add('text-lg', 'mb-4', 'text-warmer-brown'),
          W.appendChild(kt);
        const It = document.createElement('button');
        return (
          (It.textContent = 'Sulje'),
          It.classList.add(
            'bg-warmer-brown',
            'text-primary',
            'px-4',
            'py-2',
            'rounded',
            'pop-out-animation',
            'cursor-pointer'
          ),
          It.addEventListener('click', () => {
            (window.location.href = '/'),
              sessionStorage.clear(),
              (st = null),
              (document.body.style.overflow = 'auto');
          }),
          W.appendChild(It),
          k.appendChild(W),
          document.body.appendChild(k),
          k
        );
      },
      B = () => {
        document.body.style.overflow = 'hidden';
        const x = document.createElement('div');
        x.classList.add(
          'fixed',
          'inset-0',
          'bg-black',
          'bg-opacity-50',
          'flex',
          'items-center',
          'justify-center',
          'hidden',
          'z-50',
          'scroll-m-0'
        );
        const k = document.createElement('div');
        k.classList.add(
          'bg-primary',
          'rounded-lg',
          'p-6',
          'text-center',
          'w-80',
          'shadow-lg'
        );
        const W = document.createElement('h3');
        (W.textContent = 'Varaus epäonnistui!'),
          W.classList.add('text-h3', 'font-semibold', 'mb-4', 'text-red-600'),
          k.appendChild(W);
        const J = document.createElement('p');
        (J.innerHTML =
          'Pöydän varaaminen epäonnistui. <br/> Palaa takaisin ja yritä uudelleen.'),
          J.classList.add('text-base', 'mb-4'),
          k.appendChild(J);
        const X = document.createElement('button');
        return (
          (X.textContent = 'Sulje'),
          X.classList.add(
            'bg-red',
            'text-black',
            'px-4',
            'py-2',
            'rounded',
            'pop-out-animation',
            'cursor-pointer'
          ),
          X.addEventListener('click', () => {
            (window.location.href = '/reservation'),
              sessionStorage.clear(),
              (st = null),
              (document.body.style.overflow = 'auto');
          }),
          k.appendChild(X),
          x.appendChild(k),
          document.body.appendChild(x),
          x
        );
      },
      O = (x, k, W, J, X) => {
        document.body.style.overflow = 'hidden';
        const H = document.createElement('div');
        H.classList.add(
          'fixed',
          'inset-0',
          'bg-black',
          'bg-opacity-50',
          'flex',
          'items-center',
          'justify-center',
          'hidden',
          'z-50',
          'scroll-m-0'
        );
        const N = document.createElement('div');
        N.classList.add(
          'bg-primary',
          'rounded-lg',
          'p-6',
          'text-center',
          'w-80',
          'shadow-lg'
        );
        const ct = document.createElement('h3');
        (ct.textContent = 'Vahvista varaus'),
          ct.classList.add('text-h3', 'font-semibold', 'mb-4', 'text-red-600'),
          N.appendChild(ct);
        const ut = document.createElement('p');
        (ut.innerHTML =
          'Haluatko varmasti varata tämän pöydän? <br/> <br/> <b>Varaus on sitova.</b>'),
          ut.classList.add('text-base', 'mb-4'),
          N.appendChild(ut);
        const bt = document.createElement('button');
        (bt.textContent = 'Vahvista'),
          bt.classList.add(
            'bg-olive-green',
            'text-black',
            'px-4',
            'py-2',
            'mx-4',
            'rounded',
            'pop-out-animation',
            'cursor-pointer'
          ),
          bt.addEventListener('click', async () => {
            const ft = await ws(x, k, W, J, X);
            ft
              ? (D(ft).classList.remove('hidden'),
                sessionStorage.setItem('reservationResultModalOpened', 'true'),
                setTimeout(() => {
                  (window.location.href = '/'), sessionStorage.clear();
                }, 3e4))
              : (B().classList.remove('hidden'),
                sessionStorage.setItem('reservationResultModalOpened', 'true'),
                setTimeout(() => {
                  (window.location.href = '/reservation'), sessionStorage.clear();
                }, 1e4));
          });
        const Q = document.createElement('button');
        return (
          (Q.textContent = 'Peruuta'),
          Q.classList.add(
            'bg-red',
            'text-black',
            'px-4',
            'py-2',
            'rounded',
            'pop-out-animation',
            'cursor-pointer'
          ),
          Q.addEventListener('click', () => {
            H.classList.add('hidden'),
              (document.body.style.overflow = 'auto'),
              document.body.removeChild(H);
          }),
          N.appendChild(bt),
          N.appendChild(Q),
          H.appendChild(N),
          document.body.appendChild(H),
          H
        );
      },
      q = sessionStorage.getItem('reservation-size'),
      Z = sessionStorage.getItem('reservation-day'),
      V = sessionStorage.getItem('restaurant'),
      R = sessionStorage.getItem('reservation-time');
    let [j, U, tt] = R == null ? void 0 : R.split(':');
    (j = (parseInt(j) + 2).toString()),
      j === '24' ? (j = '00') : j === '25' && (j = '01');
    const $ = `${j}:${U}:${tt}`;
    let st = null;
    const mt = document.createElement('button');
    (mt.textContent = 'VARAA'),
      mt.classList.add(
        'bg-primary',
        'text-red',
        'p-2',
        'mt-4',
        'rounded',
        'hidden',
        'cursor-pointer',
        'border-2',
        'border-red',
        'pop-out-animation'
      ),
      f.appendChild(mt),
      mt.addEventListener('click', async () => {
        if (!Z || !R || !$ || !st || !V) {
          console.error('Missing reservation information');
          return;
        }
        O(Z, R, $, st, V).classList.remove('hidden');
      });
    const at = () => {
        (l.textContent = et[z].reservationModalTitleContainer),
          (v.childNodes[0].textContent = et[z].reservedLegend + ' '),
          (I.childNodes[0].textContent = et[z].availableLegend + ' '),
          (y.childNodes[0].textContent = et[z].selectedLegend + ' '),
          (mt.textContent = et[z].title);
      },
      et = {
        FI: {
          title: 'VARAA TÄMÄ PÖYTÄ',
          reservedLegend: 'Varattu',
          availableLegend: 'Varattavissa',
          selectedLegend: 'Valittu',
          reservationModalTitleContainer: 'VARAA PÖYTÄ',
          successMessage: 'Varaus onnistui!',
          closeButton: 'Sulje',
        },
        EN: {
          title: 'BOOK THIS TABLE',
          reservedLegend: 'Reserved',
          availableLegend: 'Available',
          selectedLegend: 'Selected',
          reservationModalTitleContainer: 'BOOK A TABLE',
          successMessage: 'Reservation successful!',
          closeButton: 'Close',
        },
      };
    let z = localStorage.getItem('language');
    document.querySelectorAll('button').forEach((x) => {
      x.addEventListener('click', () => {
        const k = x.textContent;
        (k === 'FI' || k === 'EN') && (z = k), localStorage.setItem('language', z), at();
      });
    });
    let T = [],
      rt = [];
    if (!V || !Z || !R || !$) {
      console.error('Missing reservation information');
      return;
    } else rt = await bs(V, Z, R, $);
    rt.forEach((x) => {
      const k = document.createElement('button');
      console.log(x.is_free),
        x.is_free
          ? k.classList.add('bg-green')
          : k.classList.add('bg-red', 'cursor-not-allowed'),
        x.seats === 2
          ? (k.classList.add('w-14', 'h-14', 'rounded-full'), M.appendChild(k))
          : x.seats === 6
            ? (k.classList.add('w-16', 'h-36', 'rounded-lg'), w.appendChild(k))
            : x.seats === 8 &&
              (k.classList.add('w-20', 'h-48', 'rounded-lg'), b.appendChild(k)),
        x.seats !== Number(q)
          ? ((k.disabled = !0), k.classList.add('cursor-not-allowed', 'opacity-50'))
          : x.is_free && k.classList.add('hover:bg-hover-green'),
        k.addEventListener('click', () => {
          x.is_free &&
            x.seats &&
            (console.log(x.table_id),
            T.forEach((W) => {
              W.classList.add('hover:bg-hover-green'), W.classList.remove('bg-yellow');
            }),
            k.classList.add('bg-yellow'),
            k.classList.remove('hover:bg-hover-green'),
            (st = x.table_id),
            console.log(st),
            sessionStorage.setItem('selected-table', st.toString()),
            mt.classList.remove('hidden')),
            T.push(k);
        });
    }),
      _.appendChild(f),
      a.appendChild(_),
      p.appendChild(a),
      at();
  },
  Cs = () => {
    const p = document.getElementById('app');
    document.createElement('header').classList.remove('bg-opacity-0');
    const a = document.createElement('div');
    a.classList.add(
      'bg-background-light',
      'w-full',
      'h-screen',
      'flex',
      'justify-center',
      'items-center'
    );
    const _ = document.createElement('div');
    _.classList.add('bg-primary', 'h-5/6', 'w-5/6', 'p-10', 'flex-col');
    const l = document.createElement('div');
    l.classList.add(
      'text-red',
      'font-bold',
      'h-1/6',
      'w-1/1',
      'flex',
      'justify-center',
      'p-10'
    );
    const f = document.createElement('div');
    f.classList.add('flex', 'h-5/6');
    const m = document.createElement('div');
    m.classList.add('flex-1', 'justify-left', 'p-20');
    const v = document.createElement('div');
    v.classList.add('flex-1', 'justify-center', 'p-20');
    const u = document.createElement('img');
    (u.src = '/img/respImg.jpg'), v.append(u);
    const I = document.createElement('h1');
    I.classList.add('text-6xl'), (I.textContent = 'VASTUULLISUUS');
    const C = document.createElement('p');
    C.classList.add('text-lg', 'text-black', 'whitespace-pre-line');
    const y = `Meille Royal Bunsilla vastuullisuus on sydämen asia, ja haluamme olla mukana tukemassa suomalaista yhteiskuntaa monin tavoin. Yksi keskeisistä arvoistamme on paikallisuuden ja kotimaisuuden suosiminen. Käytämme valmistuksessa 94 % suomalaisia raaka-aineita, sillä uskomme vahvasti siihen, että kotimaiset tuotteet ovat paitsi laadukkaita, myös ympäristön ja yhteisön kannalta kestävä valinta. Hankkimalla raaka-aineemme paikallisilta tuottajilta varmistamme tuoreuden ja korkean laadun, samalla vähentäen kuljetusten aiheuttamia päästöjä.

  Haluamme myös varmistaa, että työllistämme vain suomalaista työvoimaa, sillä paikallisen osaamisen arvostaminen on meille tärkeää. Tämä sitoutuminen kotimaiseen työvoimaan tukee paikallista taloutta ja antaa meille mahdollisuuden tarjota työpaikkoja ihmisille eri puolilla Suomea. Varmistamme, että henkilöstömme työolot ovat turvalliset ja reilut, ja kannustamme jatkuvaan koulutukseen ja ammattitaidon kehittämiseen.

  Vastuullisuus ei ole meille vain valinta – se on lupaus siitä, että toimimme oikein sekä ympäristön että yhteiskunnan puolesta. Uskomme, että kestävä ja vastuullinen liiketoiminta luo pitkäaikaista arvoa kaikille, ja siksi olemme sitoutuneet kotimaisten raaka-aineiden ja työvoiman käyttöön jokaisessa vaiheessa.`;
    (C.textContent = y),
      f.append(m, v),
      l.append(I),
      m.append(C),
      _.append(l, f),
      a.appendChild(_),
      p.prepend(a);
  };
var Es =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function ks(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, 'default')
    ? p.default
    : p;
}
var Cn = {exports: {}};
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (p, c) {
  (function (a, _) {
    _(c);
  })(Es, function (a) {
    var _ = '1.9.4';
    function l(t) {
      var e, n, i, o;
      for (n = 1, i = arguments.length; n < i; n++) {
        o = arguments[n];
        for (e in o) t[e] = o[e];
      }
      return t;
    }
    var f =
      Object.create ||
      (function () {
        function t() {}
        return function (e) {
          return (t.prototype = e), new t();
        };
      })();
    function m(t, e) {
      var n = Array.prototype.slice;
      if (t.bind) return t.bind.apply(t, n.call(arguments, 1));
      var i = n.call(arguments, 2);
      return function () {
        return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments);
      };
    }
    var v = 0;
    function u(t) {
      return '_leaflet_id' in t || (t._leaflet_id = ++v), t._leaflet_id;
    }
    function I(t, e, n) {
      var i, o, s, r;
      return (
        (r = function () {
          (i = !1), o && (s.apply(n, o), (o = !1));
        }),
        (s = function () {
          i ? (o = arguments) : (t.apply(n, arguments), setTimeout(r, e), (i = !0));
        }),
        s
      );
    }
    function C(t, e, n) {
      var i = e[1],
        o = e[0],
        s = i - o;
      return t === i && n ? t : ((((t - o) % s) + s) % s) + o;
    }
    function y() {
      return !1;
    }
    function P(t, e) {
      if (e === !1) return t;
      var n = Math.pow(10, e === void 0 ? 6 : e);
      return Math.round(t * n) / n;
    }
    function S(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
    }
    function b(t) {
      return S(t).split(/\s+/);
    }
    function w(t, e) {
      Object.prototype.hasOwnProperty.call(t, 'options') ||
        (t.options = t.options ? f(t.options) : {});
      for (var n in e) t.options[n] = e[n];
      return t.options;
    }
    function M(t, e, n) {
      var i = [];
      for (var o in t)
        i.push(
          encodeURIComponent(n ? o.toUpperCase() : o) + '=' + encodeURIComponent(t[o])
        );
      return (!e || e.indexOf('?') === -1 ? '?' : '&') + i.join('&');
    }
    var D = /\{ *([\w_ -]+) *\}/g;
    function B(t, e) {
      return t.replace(D, function (n, i) {
        var o = e[i];
        if (o === void 0) throw new Error('No value provided for variable ' + n);
        return typeof o == 'function' && (o = o(e)), o;
      });
    }
    var O =
      Array.isArray ||
      function (t) {
        return Object.prototype.toString.call(t) === '[object Array]';
      };
    function q(t, e) {
      for (var n = 0; n < t.length; n++) if (t[n] === e) return n;
      return -1;
    }
    var Z = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    function V(t) {
      return window['webkit' + t] || window['moz' + t] || window['ms' + t];
    }
    var R = 0;
    function j(t) {
      var e = +new Date(),
        n = Math.max(0, 16 - (e - R));
      return (R = e + n), window.setTimeout(t, n);
    }
    var U = window.requestAnimationFrame || V('RequestAnimationFrame') || j,
      tt =
        window.cancelAnimationFrame ||
        V('CancelAnimationFrame') ||
        V('CancelRequestAnimationFrame') ||
        function (t) {
          window.clearTimeout(t);
        };
    function $(t, e, n) {
      if (n && U === j) t.call(e);
      else return U.call(window, m(t, e));
    }
    function st(t) {
      t && tt.call(window, t);
    }
    var mt = {
      __proto__: null,
      extend: l,
      create: f,
      bind: m,
      get lastId() {
        return v;
      },
      stamp: u,
      throttle: I,
      wrapNum: C,
      falseFn: y,
      formatNum: P,
      trim: S,
      splitWords: b,
      setOptions: w,
      getParamString: M,
      template: B,
      isArray: O,
      indexOf: q,
      emptyImageUrl: Z,
      requestFn: U,
      cancelFn: tt,
      requestAnimFrame: $,
      cancelAnimFrame: st,
    };
    function at() {}
    (at.extend = function (t) {
      var e = function () {
          w(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks();
        },
        n = (e.__super__ = this.prototype),
        i = f(n);
      (i.constructor = e), (e.prototype = i);
      for (var o in this)
        Object.prototype.hasOwnProperty.call(this, o) &&
          o !== 'prototype' &&
          o !== '__super__' &&
          (e[o] = this[o]);
      return (
        t.statics && l(e, t.statics),
        t.includes && (et(t.includes), l.apply(null, [i].concat(t.includes))),
        l(i, t),
        delete i.statics,
        delete i.includes,
        i.options &&
          ((i.options = n.options ? f(n.options) : {}), l(i.options, t.options)),
        (i._initHooks = []),
        (i.callInitHooks = function () {
          if (!this._initHooksCalled) {
            n.callInitHooks && n.callInitHooks.call(this), (this._initHooksCalled = !0);
            for (var s = 0, r = i._initHooks.length; s < r; s++)
              i._initHooks[s].call(this);
          }
        }),
        e
      );
    }),
      (at.include = function (t) {
        var e = this.prototype.options;
        return (
          l(this.prototype, t),
          t.options && ((this.prototype.options = e), this.mergeOptions(t.options)),
          this
        );
      }),
      (at.mergeOptions = function (t) {
        return l(this.prototype.options, t), this;
      }),
      (at.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1),
          n =
            typeof t == 'function'
              ? t
              : function () {
                  this[t].apply(this, e);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(n),
          this
        );
      });
    function et(t) {
      if (!(typeof L > 'u' || !L || !L.Mixin)) {
        t = O(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events &&
            console.warn(
              'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
              new Error().stack
            );
      }
    }
    var z = {
      on: function (t, e, n) {
        if (typeof t == 'object') for (var i in t) this._on(i, t[i], e);
        else {
          t = b(t);
          for (var o = 0, s = t.length; o < s; o++) this._on(t[o], e, n);
        }
        return this;
      },
      off: function (t, e, n) {
        if (!arguments.length) delete this._events;
        else if (typeof t == 'object') for (var i in t) this._off(i, t[i], e);
        else {
          t = b(t);
          for (var o = arguments.length === 1, s = 0, r = t.length; s < r; s++)
            o ? this._off(t[s]) : this._off(t[s], e, n);
        }
        return this;
      },
      _on: function (t, e, n, i) {
        if (typeof e != 'function') {
          console.warn('wrong listener type: ' + typeof e);
          return;
        }
        if (this._listens(t, e, n) === !1) {
          n === this && (n = void 0);
          var o = {fn: e, ctx: n};
          i && (o.once = !0),
            (this._events = this._events || {}),
            (this._events[t] = this._events[t] || []),
            this._events[t].push(o);
        }
      },
      _off: function (t, e, n) {
        var i, o, s;
        if (this._events && ((i = this._events[t]), !!i)) {
          if (arguments.length === 1) {
            if (this._firingCount) for (o = 0, s = i.length; o < s; o++) i[o].fn = y;
            delete this._events[t];
            return;
          }
          if (typeof e != 'function') {
            console.warn('wrong listener type: ' + typeof e);
            return;
          }
          var r = this._listens(t, e, n);
          if (r !== !1) {
            var d = i[r];
            this._firingCount && ((d.fn = y), (this._events[t] = i = i.slice())),
              i.splice(r, 1);
          }
        }
      },
      fire: function (t, e, n) {
        if (!this.listens(t, n)) return this;
        var i = l({}, e, {
          type: t,
          target: this,
          sourceTarget: (e && e.sourceTarget) || this,
        });
        if (this._events) {
          var o = this._events[t];
          if (o) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var s = 0, r = o.length; s < r; s++) {
              var d = o[s],
                h = d.fn;
              d.once && this.off(t, h, d.ctx), h.call(d.ctx || this, i);
            }
            this._firingCount--;
          }
        }
        return n && this._propagateEvent(i), this;
      },
      listens: function (t, e, n, i) {
        typeof t != 'string' && console.warn('"string" type argument expected');
        var o = e;
        typeof e != 'function' && ((i = !!e), (o = void 0), (n = void 0));
        var s = this._events && this._events[t];
        if (s && s.length && this._listens(t, o, n) !== !1) return !0;
        if (i) {
          for (var r in this._eventParents)
            if (this._eventParents[r].listens(t, e, n, i)) return !0;
        }
        return !1;
      },
      _listens: function (t, e, n) {
        if (!this._events) return !1;
        var i = this._events[t] || [];
        if (!e) return !!i.length;
        n === this && (n = void 0);
        for (var o = 0, s = i.length; o < s; o++)
          if (i[o].fn === e && i[o].ctx === n) return o;
        return !1;
      },
      once: function (t, e, n) {
        if (typeof t == 'object') for (var i in t) this._on(i, t[i], e, !0);
        else {
          t = b(t);
          for (var o = 0, s = t.length; o < s; o++) this._on(t[o], e, n, !0);
        }
        return this;
      },
      addEventParent: function (t) {
        return (
          (this._eventParents = this._eventParents || {}),
          (this._eventParents[u(t)] = t),
          this
        );
      },
      removeEventParent: function (t) {
        return this._eventParents && delete this._eventParents[u(t)], this;
      },
      _propagateEvent: function (t) {
        for (var e in this._eventParents)
          this._eventParents[e].fire(
            t.type,
            l({layer: t.target, propagatedFrom: t.target}, t),
            !0
          );
      },
    };
    (z.addEventListener = z.on),
      (z.removeEventListener = z.clearAllEventListeners = z.off),
      (z.addOneTimeEventListener = z.once),
      (z.fireEvent = z.fire),
      (z.hasEventListeners = z.listens);
    var dt = at.extend(z);
    function T(t, e, n) {
      (this.x = n ? Math.round(t) : t), (this.y = n ? Math.round(e) : e);
    }
    var rt =
      Math.trunc ||
      function (t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
    T.prototype = {
      clone: function () {
        return new T(this.x, this.y);
      },
      add: function (t) {
        return this.clone()._add(x(t));
      },
      _add: function (t) {
        return (this.x += t.x), (this.y += t.y), this;
      },
      subtract: function (t) {
        return this.clone()._subtract(x(t));
      },
      _subtract: function (t) {
        return (this.x -= t.x), (this.y -= t.y), this;
      },
      divideBy: function (t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function (t) {
        return (this.x /= t), (this.y /= t), this;
      },
      multiplyBy: function (t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function (t) {
        return (this.x *= t), (this.y *= t), this;
      },
      scaleBy: function (t) {
        return new T(this.x * t.x, this.y * t.y);
      },
      unscaleBy: function (t) {
        return new T(this.x / t.x, this.y / t.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return (this.x = rt(this.x)), (this.y = rt(this.y)), this;
      },
      distanceTo: function (t) {
        t = x(t);
        var e = t.x - this.x,
          n = t.y - this.y;
        return Math.sqrt(e * e + n * n);
      },
      equals: function (t) {
        return (t = x(t)), t.x === this.x && t.y === this.y;
      },
      contains: function (t) {
        return (
          (t = x(t)),
          Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        );
      },
      toString: function () {
        return 'Point(' + P(this.x) + ', ' + P(this.y) + ')';
      },
    };
    function x(t, e, n) {
      return t instanceof T
        ? t
        : O(t)
          ? new T(t[0], t[1])
          : t == null
            ? t
            : typeof t == 'object' && 'x' in t && 'y' in t
              ? new T(t.x, t.y)
              : new T(t, e, n);
    }
    function k(t, e) {
      if (t)
        for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) this.extend(n[i]);
    }
    k.prototype = {
      extend: function (t) {
        var e, n;
        if (!t) return this;
        if (t instanceof T || typeof t[0] == 'number' || 'x' in t) e = n = x(t);
        else if (((t = W(t)), (e = t.min), (n = t.max), !e || !n)) return this;
        return (
          !this.min && !this.max
            ? ((this.min = e.clone()), (this.max = n.clone()))
            : ((this.min.x = Math.min(e.x, this.min.x)),
              (this.max.x = Math.max(n.x, this.max.x)),
              (this.min.y = Math.min(e.y, this.min.y)),
              (this.max.y = Math.max(n.y, this.max.y))),
          this
        );
      },
      getCenter: function (t) {
        return x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
      },
      getBottomLeft: function () {
        return x(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return x(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (t) {
        var e, n;
        return (
          typeof t[0] == 'number' || t instanceof T ? (t = x(t)) : (t = W(t)),
          t instanceof k ? ((e = t.min), (n = t.max)) : (e = n = t),
          e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = W(t);
        var e = this.min,
          n = this.max,
          i = t.min,
          o = t.max,
          s = o.x >= e.x && i.x <= n.x,
          r = o.y >= e.y && i.y <= n.y;
        return s && r;
      },
      overlaps: function (t) {
        t = W(t);
        var e = this.min,
          n = this.max,
          i = t.min,
          o = t.max,
          s = o.x > e.x && i.x < n.x,
          r = o.y > e.y && i.y < n.y;
        return s && r;
      },
      isValid: function () {
        return !!(this.min && this.max);
      },
      pad: function (t) {
        var e = this.min,
          n = this.max,
          i = Math.abs(e.x - n.x) * t,
          o = Math.abs(e.y - n.y) * t;
        return W(x(e.x - i, e.y - o), x(n.x + i, n.y + o));
      },
      equals: function (t) {
        return t
          ? ((t = W(t)),
            this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()))
          : !1;
      },
    };
    function W(t, e) {
      return !t || t instanceof k ? t : new k(t, e);
    }
    function J(t, e) {
      if (t)
        for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) this.extend(n[i]);
    }
    J.prototype = {
      extend: function (t) {
        var e = this._southWest,
          n = this._northEast,
          i,
          o;
        if (t instanceof H) (i = t), (o = t);
        else if (t instanceof J) {
          if (((i = t._southWest), (o = t._northEast), !i || !o)) return this;
        } else return t ? this.extend(N(t) || X(t)) : this;
        return (
          !e && !n
            ? ((this._southWest = new H(i.lat, i.lng)),
              (this._northEast = new H(o.lat, o.lng)))
            : ((e.lat = Math.min(i.lat, e.lat)),
              (e.lng = Math.min(i.lng, e.lng)),
              (n.lat = Math.max(o.lat, n.lat)),
              (n.lng = Math.max(o.lng, n.lng))),
          this
        );
      },
      pad: function (t) {
        var e = this._southWest,
          n = this._northEast,
          i = Math.abs(e.lat - n.lat) * t,
          o = Math.abs(e.lng - n.lng) * t;
        return new J(new H(e.lat - i, e.lng - o), new H(n.lat + i, n.lng + o));
      },
      getCenter: function () {
        return new H(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new H(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new H(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (t) {
        typeof t[0] == 'number' || t instanceof H || 'lat' in t ? (t = N(t)) : (t = X(t));
        var e = this._southWest,
          n = this._northEast,
          i,
          o;
        return (
          t instanceof J ? ((i = t.getSouthWest()), (o = t.getNorthEast())) : (i = o = t),
          i.lat >= e.lat && o.lat <= n.lat && i.lng >= e.lng && o.lng <= n.lng
        );
      },
      intersects: function (t) {
        t = X(t);
        var e = this._southWest,
          n = this._northEast,
          i = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= e.lat && i.lat <= n.lat,
          r = o.lng >= e.lng && i.lng <= n.lng;
        return s && r;
      },
      overlaps: function (t) {
        t = X(t);
        var e = this._southWest,
          n = this._northEast,
          i = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > e.lat && i.lat < n.lat,
          r = o.lng > e.lng && i.lng < n.lng;
        return s && r;
      },
      toBBoxString: function () {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(
          ','
        );
      },
      equals: function (t, e) {
        return t
          ? ((t = X(t)),
            this._southWest.equals(t.getSouthWest(), e) &&
              this._northEast.equals(t.getNorthEast(), e))
          : !1;
      },
      isValid: function () {
        return !!(this._southWest && this._northEast);
      },
    };
    function X(t, e) {
      return t instanceof J ? t : new J(t, e);
    }
    function H(t, e, n) {
      if (isNaN(t) || isNaN(e))
        throw new Error('Invalid LatLng object: (' + t + ', ' + e + ')');
      (this.lat = +t), (this.lng = +e), n !== void 0 && (this.alt = +n);
    }
    H.prototype = {
      equals: function (t, e) {
        if (!t) return !1;
        t = N(t);
        var n = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
        return n <= (e === void 0 ? 1e-9 : e);
      },
      toString: function (t) {
        return 'LatLng(' + P(this.lat, t) + ', ' + P(this.lng, t) + ')';
      },
      distanceTo: function (t) {
        return ut.distance(this, N(t));
      },
      wrap: function () {
        return ut.wrapLatLng(this);
      },
      toBounds: function (t) {
        var e = (180 * t) / 40075017,
          n = e / Math.cos((Math.PI / 180) * this.lat);
        return X([this.lat - e, this.lng - n], [this.lat + e, this.lng + n]);
      },
      clone: function () {
        return new H(this.lat, this.lng, this.alt);
      },
    };
    function N(t, e, n) {
      return t instanceof H
        ? t
        : O(t) && typeof t[0] != 'object'
          ? t.length === 3
            ? new H(t[0], t[1], t[2])
            : t.length === 2
              ? new H(t[0], t[1])
              : null
          : t == null
            ? t
            : typeof t == 'object' && 'lat' in t
              ? new H(t.lat, 'lng' in t ? t.lng : t.lon, t.alt)
              : e === void 0
                ? null
                : new H(t, e, n);
    }
    var ct = {
        latLngToPoint: function (t, e) {
          var n = this.projection.project(t),
            i = this.scale(e);
          return this.transformation._transform(n, i);
        },
        pointToLatLng: function (t, e) {
          var n = this.scale(e),
            i = this.transformation.untransform(t, n);
          return this.projection.unproject(i);
        },
        project: function (t) {
          return this.projection.project(t);
        },
        unproject: function (t) {
          return this.projection.unproject(t);
        },
        scale: function (t) {
          return 256 * Math.pow(2, t);
        },
        zoom: function (t) {
          return Math.log(t / 256) / Math.LN2;
        },
        getProjectedBounds: function (t) {
          if (this.infinite) return null;
          var e = this.projection.bounds,
            n = this.scale(t),
            i = this.transformation.transform(e.min, n),
            o = this.transformation.transform(e.max, n);
          return new k(i, o);
        },
        infinite: !1,
        wrapLatLng: function (t) {
          var e = this.wrapLng ? C(t.lng, this.wrapLng, !0) : t.lng,
            n = this.wrapLat ? C(t.lat, this.wrapLat, !0) : t.lat,
            i = t.alt;
          return new H(n, e, i);
        },
        wrapLatLngBounds: function (t) {
          var e = t.getCenter(),
            n = this.wrapLatLng(e),
            i = e.lat - n.lat,
            o = e.lng - n.lng;
          if (i === 0 && o === 0) return t;
          var s = t.getSouthWest(),
            r = t.getNorthEast(),
            d = new H(s.lat - i, s.lng - o),
            h = new H(r.lat - i, r.lng - o);
          return new J(d, h);
        },
      },
      ut = l({}, ct, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (t, e) {
          var n = Math.PI / 180,
            i = t.lat * n,
            o = e.lat * n,
            s = Math.sin(((e.lat - t.lat) * n) / 2),
            r = Math.sin(((e.lng - t.lng) * n) / 2),
            d = s * s + Math.cos(i) * Math.cos(o) * r * r,
            h = 2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d));
          return this.R * h;
        },
      }),
      bt = 6378137,
      Q = {
        R: bt,
        MAX_LATITUDE: 85.0511287798,
        project: function (t) {
          var e = Math.PI / 180,
            n = this.MAX_LATITUDE,
            i = Math.max(Math.min(n, t.lat), -n),
            o = Math.sin(i * e);
          return new T(this.R * t.lng * e, (this.R * Math.log((1 + o) / (1 - o))) / 2);
        },
        unproject: function (t) {
          var e = 180 / Math.PI;
          return new H(
            (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
            (t.x * e) / this.R
          );
        },
        bounds: (function () {
          var t = bt * Math.PI;
          return new k([-t, -t], [t, t]);
        })(),
      };
    function ft(t, e, n, i) {
      if (O(t)) {
        (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), (this._d = t[3]);
        return;
      }
      (this._a = t), (this._b = e), (this._c = n), (this._d = i);
    }
    ft.prototype = {
      transform: function (t, e) {
        return this._transform(t.clone(), e);
      },
      _transform: function (t, e) {
        return (
          (e = e || 1),
          (t.x = e * (this._a * t.x + this._b)),
          (t.y = e * (this._c * t.y + this._d)),
          t
        );
      },
      untransform: function (t, e) {
        return (
          (e = e || 1),
          new T((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        );
      },
    };
    function it(t, e, n, i) {
      return new ft(t, e, n, i);
    }
    var Pt = l({}, ut, {
        code: 'EPSG:3857',
        projection: Q,
        transformation: (function () {
          var t = 0.5 / (Math.PI * Q.R);
          return it(t, 0.5, -t, 0.5);
        })(),
      }),
      wt = l({}, Pt, {code: 'EPSG:900913'});
    function _t(t) {
      return document.createElementNS('http://www.w3.org/2000/svg', t);
    }
    function gt(t, e) {
      var n = '',
        i,
        o,
        s,
        r,
        d,
        h;
      for (i = 0, s = t.length; i < s; i++) {
        for (d = t[i], o = 0, r = d.length; o < r; o++)
          (h = d[o]), (n += (o ? 'L' : 'M') + h.x + ' ' + h.y);
        n += e ? (A.svg ? 'z' : 'x') : '';
      }
      return n || 'M0 0';
    }
    var kt = document.documentElement.style,
      It = 'ActiveXObject' in window,
      de = It && !document.addEventListener,
      te = 'msLaunchUri' in navigator && !('documentMode' in document),
      Kt = Rt('webkit'),
      Ee = Rt('android'),
      kn = Rt('android 2') || Rt('android 3'),
      Zi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      Ri = Ee && Rt('Google') && Zi < 537 && !('AudioNode' in window),
      qe = !!window.opera,
      Pn = !te && Rt('chrome'),
      Tn = Rt('gecko') && !Kt && !qe && !It,
      Di = !Pn && Rt('safari'),
      Sn = Rt('phantom'),
      In = 'OTransition' in kt,
      Ni = navigator.platform.indexOf('Win') === 0,
      Mn = It && 'transition' in kt,
      Ke = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !kn,
      Bn = 'MozPerspective' in kt,
      ji = !window.L_DISABLE_3D && (Mn || Ke || Bn) && !In && !Sn,
      ue = typeof orientation < 'u' || Rt('mobile'),
      Fi = ue && Kt,
      Hi = ue && Ke,
      zn = !window.PointerEvent && window.MSPointerEvent,
      An = !!(window.PointerEvent || zn),
      On = 'ontouchstart' in window || !!window.TouchEvent,
      Vi = !window.L_NO_TOUCH && (On || An),
      Wi = ue && qe,
      Ui = ue && Tn,
      Gi =
        (window.devicePixelRatio ||
          window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      qi = (function () {
        var t = !1;
        try {
          var e = Object.defineProperty({}, 'passive', {
            get: function () {
              t = !0;
            },
          });
          window.addEventListener('testPassiveEventSupport', y, e),
            window.removeEventListener('testPassiveEventSupport', y, e);
        } catch {}
        return t;
      })(),
      Ki = (function () {
        return !!document.createElement('canvas').getContext;
      })(),
      Ye = !!(document.createElementNS && _t('svg').createSVGRect),
      Yi =
        !!Ye &&
        (function () {
          var t = document.createElement('div');
          return (
            (t.innerHTML = '<svg/>'),
            (t.firstChild && t.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg'
          );
        })(),
      $i =
        !Ye &&
        (function () {
          try {
            var t = document.createElement('div');
            t.innerHTML = '<v:shape adj="1"/>';
            var e = t.firstChild;
            return (
              (e.style.behavior = 'url(#default#VML)'), e && typeof e.adj == 'object'
            );
          } catch {
            return !1;
          }
        })(),
      Ji = navigator.platform.indexOf('Mac') === 0,
      Xi = navigator.platform.indexOf('Linux') === 0;
    function Rt(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var A = {
        ie: It,
        ielt9: de,
        edge: te,
        webkit: Kt,
        android: Ee,
        android23: kn,
        androidStock: Ri,
        opera: qe,
        chrome: Pn,
        gecko: Tn,
        safari: Di,
        phantom: Sn,
        opera12: In,
        win: Ni,
        ie3d: Mn,
        webkit3d: Ke,
        gecko3d: Bn,
        any3d: ji,
        mobile: ue,
        mobileWebkit: Fi,
        mobileWebkit3d: Hi,
        msPointer: zn,
        pointer: An,
        touch: Vi,
        touchNative: On,
        mobileOpera: Wi,
        mobileGecko: Ui,
        retina: Gi,
        passiveEvents: qi,
        canvas: Ki,
        svg: Ye,
        vml: $i,
        inlineSvg: Yi,
        mac: Ji,
        linux: Xi,
      },
      Zn = A.msPointer ? 'MSPointerDown' : 'pointerdown',
      Rn = A.msPointer ? 'MSPointerMove' : 'pointermove',
      Dn = A.msPointer ? 'MSPointerUp' : 'pointerup',
      Nn = A.msPointer ? 'MSPointerCancel' : 'pointercancel',
      $e = {touchstart: Zn, touchmove: Rn, touchend: Dn, touchcancel: Nn},
      jn = {touchstart: oo, touchmove: ke, touchend: ke, touchcancel: ke},
      ee = {},
      Fn = !1;
    function Qi(t, e, n) {
      return (
        e === 'touchstart' && io(),
        jn[e]
          ? ((n = jn[e].bind(this, n)), t.addEventListener($e[e], n, !1), n)
          : (console.warn('wrong event specified:', e), y)
      );
    }
    function to(t, e, n) {
      if (!$e[e]) {
        console.warn('wrong event specified:', e);
        return;
      }
      t.removeEventListener($e[e], n, !1);
    }
    function eo(t) {
      ee[t.pointerId] = t;
    }
    function no(t) {
      ee[t.pointerId] && (ee[t.pointerId] = t);
    }
    function Hn(t) {
      delete ee[t.pointerId];
    }
    function io() {
      Fn ||
        (document.addEventListener(Zn, eo, !0),
        document.addEventListener(Rn, no, !0),
        document.addEventListener(Dn, Hn, !0),
        document.addEventListener(Nn, Hn, !0),
        (Fn = !0));
    }
    function ke(t, e) {
      if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || 'mouse')) {
        e.touches = [];
        for (var n in ee) e.touches.push(ee[n]);
        (e.changedTouches = [e]), t(e);
      }
    }
    function oo(t, e) {
      e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && Ct(e),
        ke(t, e);
    }
    function so(t) {
      var e = {},
        n,
        i;
      for (i in t) (n = t[i]), (e[i] = n && n.bind ? n.bind(t) : n);
      return (
        (t = e),
        (e.type = 'dblclick'),
        (e.detail = 2),
        (e.isTrusted = !1),
        (e._simulated = !0),
        e
      );
    }
    var ao = 200;
    function ro(t, e) {
      t.addEventListener('dblclick', e);
      var n = 0,
        i;
      function o(s) {
        if (s.detail !== 1) {
          i = s.detail;
          return;
        }
        if (
          !(
            s.pointerType === 'mouse' ||
            (s.sourceCapabilities && !s.sourceCapabilities.firesTouchEvents)
          )
        ) {
          var r = qn(s);
          if (
            !(
              r.some(function (h) {
                return h instanceof HTMLLabelElement && h.attributes.for;
              }) &&
              !r.some(function (h) {
                return h instanceof HTMLInputElement || h instanceof HTMLSelectElement;
              })
            )
          ) {
            var d = Date.now();
            d - n <= ao ? (i++, i === 2 && e(so(s))) : (i = 1), (n = d);
          }
        }
      }
      return t.addEventListener('click', o), {dblclick: e, simDblclick: o};
    }
    function lo(t, e) {
      t.removeEventListener('dblclick', e.dblclick),
        t.removeEventListener('click', e.simDblclick);
    }
    var Je = Se([
        'transform',
        'webkitTransform',
        'OTransform',
        'MozTransform',
        'msTransform',
      ]),
      he = Se([
        'webkitTransition',
        'transition',
        'OTransition',
        'MozTransition',
        'msTransition',
      ]),
      Vn =
        he === 'webkitTransition' || he === 'OTransition' ? he + 'End' : 'transitionend';
    function Wn(t) {
      return typeof t == 'string' ? document.getElementById(t) : t;
    }
    function me(t, e) {
      var n = t.style[e] || (t.currentStyle && t.currentStyle[e]);
      if ((!n || n === 'auto') && document.defaultView) {
        var i = document.defaultView.getComputedStyle(t, null);
        n = i ? i[e] : null;
      }
      return n === 'auto' ? null : n;
    }
    function ot(t, e, n) {
      var i = document.createElement(t);
      return (i.className = e || ''), n && n.appendChild(i), i;
    }
    function pt(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function Pe(t) {
      for (; t.firstChild; ) t.removeChild(t.firstChild);
    }
    function ne(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function ie(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function Xe(t, e) {
      if (t.classList !== void 0) return t.classList.contains(e);
      var n = Te(t);
      return n.length > 0 && new RegExp('(^|\\s)' + e + '(\\s|$)').test(n);
    }
    function K(t, e) {
      if (t.classList !== void 0)
        for (var n = b(e), i = 0, o = n.length; i < o; i++) t.classList.add(n[i]);
      else if (!Xe(t, e)) {
        var s = Te(t);
        Qe(t, (s ? s + ' ' : '') + e);
      }
    }
    function vt(t, e) {
      t.classList !== void 0
        ? t.classList.remove(e)
        : Qe(t, S((' ' + Te(t) + ' ').replace(' ' + e + ' ', ' ')));
    }
    function Qe(t, e) {
      t.className.baseVal === void 0 ? (t.className = e) : (t.className.baseVal = e);
    }
    function Te(t) {
      return (
        t.correspondingElement && (t = t.correspondingElement),
        t.className.baseVal === void 0 ? t.className : t.className.baseVal
      );
    }
    function Bt(t, e) {
      'opacity' in t.style ? (t.style.opacity = e) : 'filter' in t.style && co(t, e);
    }
    function co(t, e) {
      var n = !1,
        i = 'DXImageTransform.Microsoft.Alpha';
      try {
        n = t.filters.item(i);
      } catch {
        if (e === 1) return;
      }
      (e = Math.round(e * 100)),
        n
          ? ((n.Enabled = e !== 100), (n.Opacity = e))
          : (t.style.filter += ' progid:' + i + '(opacity=' + e + ')');
    }
    function Se(t) {
      for (var e = document.documentElement.style, n = 0; n < t.length; n++)
        if (t[n] in e) return t[n];
      return !1;
    }
    function Yt(t, e, n) {
      var i = e || new T(0, 0);
      t.style[Je] =
        (A.ie3d
          ? 'translate(' + i.x + 'px,' + i.y + 'px)'
          : 'translate3d(' + i.x + 'px,' + i.y + 'px,0)') +
        (n ? ' scale(' + n + ')' : '');
    }
    function yt(t, e) {
      (t._leaflet_pos = e),
        A.any3d ? Yt(t, e) : ((t.style.left = e.x + 'px'), (t.style.top = e.y + 'px'));
    }
    function $t(t) {
      return t._leaflet_pos || new T(0, 0);
    }
    var fe, pe, tn;
    if ('onselectstart' in document)
      (fe = function () {
        G(window, 'selectstart', Ct);
      }),
        (pe = function () {
          lt(window, 'selectstart', Ct);
        });
    else {
      var _e = Se([
        'userSelect',
        'WebkitUserSelect',
        'OUserSelect',
        'MozUserSelect',
        'msUserSelect',
      ]);
      (fe = function () {
        if (_e) {
          var t = document.documentElement.style;
          (tn = t[_e]), (t[_e] = 'none');
        }
      }),
        (pe = function () {
          _e && ((document.documentElement.style[_e] = tn), (tn = void 0));
        });
    }
    function en() {
      G(window, 'dragstart', Ct);
    }
    function nn() {
      lt(window, 'dragstart', Ct);
    }
    var Ie, on;
    function sn(t) {
      for (; t.tabIndex === -1; ) t = t.parentNode;
      t.style &&
        (Me(),
        (Ie = t),
        (on = t.style.outlineStyle),
        (t.style.outlineStyle = 'none'),
        G(window, 'keydown', Me));
    }
    function Me() {
      Ie &&
        ((Ie.style.outlineStyle = on),
        (Ie = void 0),
        (on = void 0),
        lt(window, 'keydown', Me));
    }
    function Un(t) {
      do t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function an(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e,
      };
    }
    var uo = {
      __proto__: null,
      TRANSFORM: Je,
      TRANSITION: he,
      TRANSITION_END: Vn,
      get: Wn,
      getStyle: me,
      create: ot,
      remove: pt,
      empty: Pe,
      toFront: ne,
      toBack: ie,
      hasClass: Xe,
      addClass: K,
      removeClass: vt,
      setClass: Qe,
      getClass: Te,
      setOpacity: Bt,
      testProp: Se,
      setTransform: Yt,
      setPosition: yt,
      getPosition: $t,
      get disableTextSelection() {
        return fe;
      },
      get enableTextSelection() {
        return pe;
      },
      disableImageDrag: en,
      enableImageDrag: nn,
      preventOutline: sn,
      restoreOutline: Me,
      getSizedParentNode: Un,
      getScale: an,
    };
    function G(t, e, n, i) {
      if (e && typeof e == 'object') for (var o in e) ln(t, o, e[o], n);
      else {
        e = b(e);
        for (var s = 0, r = e.length; s < r; s++) ln(t, e[s], n, i);
      }
      return this;
    }
    var Dt = '_leaflet_events';
    function lt(t, e, n, i) {
      if (arguments.length === 1) Gn(t), delete t[Dt];
      else if (e && typeof e == 'object') for (var o in e) cn(t, o, e[o], n);
      else if (((e = b(e)), arguments.length === 2))
        Gn(t, function (d) {
          return q(e, d) !== -1;
        });
      else for (var s = 0, r = e.length; s < r; s++) cn(t, e[s], n, i);
      return this;
    }
    function Gn(t, e) {
      for (var n in t[Dt]) {
        var i = n.split(/\d/)[0];
        (!e || e(i)) && cn(t, i, null, null, n);
      }
    }
    var rn = {
      mouseenter: 'mouseover',
      mouseleave: 'mouseout',
      wheel: !('onwheel' in window) && 'mousewheel',
    };
    function ln(t, e, n, i) {
      var o = e + u(n) + (i ? '_' + u(i) : '');
      if (t[Dt] && t[Dt][o]) return this;
      var s = function (d) {
          return n.call(i || t, d || window.event);
        },
        r = s;
      !A.touchNative && A.pointer && e.indexOf('touch') === 0
        ? (s = Qi(t, e, s))
        : A.touch && e === 'dblclick'
          ? (s = ro(t, s))
          : 'addEventListener' in t
            ? e === 'touchstart' ||
              e === 'touchmove' ||
              e === 'wheel' ||
              e === 'mousewheel'
              ? t.addEventListener(rn[e] || e, s, A.passiveEvents ? {passive: !1} : !1)
              : e === 'mouseenter' || e === 'mouseleave'
                ? ((s = function (d) {
                    (d = d || window.event), un(t, d) && r(d);
                  }),
                  t.addEventListener(rn[e], s, !1))
                : t.addEventListener(e, r, !1)
            : t.attachEvent('on' + e, s),
        (t[Dt] = t[Dt] || {}),
        (t[Dt][o] = s);
    }
    function cn(t, e, n, i, o) {
      o = o || e + u(n) + (i ? '_' + u(i) : '');
      var s = t[Dt] && t[Dt][o];
      if (!s) return this;
      !A.touchNative && A.pointer && e.indexOf('touch') === 0
        ? to(t, e, s)
        : A.touch && e === 'dblclick'
          ? lo(t, s)
          : 'removeEventListener' in t
            ? t.removeEventListener(rn[e] || e, s, !1)
            : t.detachEvent('on' + e, s),
        (t[Dt][o] = null);
    }
    function Jt(t) {
      return (
        t.stopPropagation
          ? t.stopPropagation()
          : t.originalEvent
            ? (t.originalEvent._stopped = !0)
            : (t.cancelBubble = !0),
        this
      );
    }
    function dn(t) {
      return ln(t, 'wheel', Jt), this;
    }
    function ge(t) {
      return (
        G(t, 'mousedown touchstart dblclick contextmenu', Jt),
        (t._leaflet_disable_click = !0),
        this
      );
    }
    function Ct(t) {
      return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
    }
    function Xt(t) {
      return Ct(t), Jt(t), this;
    }
    function qn(t) {
      if (t.composedPath) return t.composedPath();
      for (var e = [], n = t.target; n; ) e.push(n), (n = n.parentNode);
      return e;
    }
    function Kn(t, e) {
      if (!e) return new T(t.clientX, t.clientY);
      var n = an(e),
        i = n.boundingClientRect;
      return new T(
        (t.clientX - i.left) / n.x - e.clientLeft,
        (t.clientY - i.top) / n.y - e.clientTop
      );
    }
    var ho =
      A.linux && A.chrome
        ? window.devicePixelRatio
        : A.mac
          ? window.devicePixelRatio * 3
          : window.devicePixelRatio > 0
            ? 2 * window.devicePixelRatio
            : 1;
    function Yn(t) {
      return A.edge
        ? t.wheelDeltaY / 2
        : t.deltaY && t.deltaMode === 0
          ? -t.deltaY / ho
          : t.deltaY && t.deltaMode === 1
            ? -t.deltaY * 20
            : t.deltaY && t.deltaMode === 2
              ? -t.deltaY * 60
              : t.deltaX || t.deltaZ
                ? 0
                : t.wheelDelta
                  ? (t.wheelDeltaY || t.wheelDelta) / 2
                  : t.detail && Math.abs(t.detail) < 32765
                    ? -t.detail * 20
                    : t.detail
                      ? (t.detail / -32765) * 60
                      : 0;
    }
    function un(t, e) {
      var n = e.relatedTarget;
      if (!n) return !0;
      try {
        for (; n && n !== t; ) n = n.parentNode;
      } catch {
        return !1;
      }
      return n !== t;
    }
    var mo = {
        __proto__: null,
        on: G,
        off: lt,
        stopPropagation: Jt,
        disableScrollPropagation: dn,
        disableClickPropagation: ge,
        preventDefault: Ct,
        stop: Xt,
        getPropagationPath: qn,
        getMousePosition: Kn,
        getWheelDelta: Yn,
        isExternalTarget: un,
        addListener: G,
        removeListener: lt,
      },
      $n = dt.extend({
        run: function (t, e, n, i) {
          this.stop(),
            (this._el = t),
            (this._inProgress = !0),
            (this._duration = n || 0.25),
            (this._easeOutPower = 1 / Math.max(i || 0.5, 0.2)),
            (this._startPos = $t(t)),
            (this._offset = e.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire('start'),
            this._animate();
        },
        stop: function () {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function () {
          (this._animId = $(this._animate, this)), this._step();
        },
        _step: function (t) {
          var e = +new Date() - this._startTime,
            n = this._duration * 1e3;
          e < n
            ? this._runFrame(this._easeOut(e / n), t)
            : (this._runFrame(1), this._complete());
        },
        _runFrame: function (t, e) {
          var n = this._startPos.add(this._offset.multiplyBy(t));
          e && n._round(), yt(this._el, n), this.fire('step');
        },
        _complete: function () {
          st(this._animId), (this._inProgress = !1), this.fire('end');
        },
        _easeOut: function (t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        },
      }),
      nt = dt.extend({
        options: {
          crs: Pt,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0,
        },
        initialize: function (t, e) {
          (e = w(this, e)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(t),
            this._initLayout(),
            (this._onResize = m(this._onResize, this)),
            this._initEvents(),
            e.maxBounds && this.setMaxBounds(e.maxBounds),
            e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)),
            e.center &&
              e.zoom !== void 0 &&
              this.setView(N(e.center), e.zoom, {reset: !0}),
            this.callInitHooks(),
            (this._zoomAnimated =
              he && A.any3d && !A.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(),
              G(this._proxy, Vn, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView: function (t, e, n) {
          if (
            ((e = e === void 0 ? this._zoom : this._limitZoom(e)),
            (t = this._limitCenter(N(t), e, this.options.maxBounds)),
            (n = n || {}),
            this._stop(),
            this._loaded && !n.reset && n !== !0)
          ) {
            n.animate !== void 0 &&
              ((n.zoom = l({animate: n.animate}, n.zoom)),
              (n.pan = l({animate: n.animate, duration: n.duration}, n.pan)));
            var i =
              this._zoom !== e
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom)
                : this._tryAnimatedPan(t, n.pan);
            if (i) return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(t, e, n.pan && n.pan.noMoveStart), this;
        },
        setZoom: function (t, e) {
          return this._loaded
            ? this.setView(this.getCenter(), t, {zoom: e})
            : ((this._zoom = t), this);
        },
        zoomIn: function (t, e) {
          return (
            (t = t || (A.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom + t, e)
          );
        },
        zoomOut: function (t, e) {
          return (
            (t = t || (A.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom - t, e)
          );
        },
        setZoomAround: function (t, e, n) {
          var i = this.getZoomScale(e),
            o = this.getSize().divideBy(2),
            s = t instanceof T ? t : this.latLngToContainerPoint(t),
            r = s.subtract(o).multiplyBy(1 - 1 / i),
            d = this.containerPointToLatLng(o.add(r));
          return this.setView(d, e, {zoom: n});
        },
        _getBoundsCenterZoom: function (t, e) {
          (e = e || {}), (t = t.getBounds ? t.getBounds() : X(t));
          var n = x(e.paddingTopLeft || e.padding || [0, 0]),
            i = x(e.paddingBottomRight || e.padding || [0, 0]),
            o = this.getBoundsZoom(t, !1, n.add(i));
          if (
            ((o = typeof e.maxZoom == 'number' ? Math.min(e.maxZoom, o) : o), o === 1 / 0)
          )
            return {center: t.getCenter(), zoom: o};
          var s = i.subtract(n).divideBy(2),
            r = this.project(t.getSouthWest(), o),
            d = this.project(t.getNorthEast(), o),
            h = this.unproject(r.add(d).divideBy(2).add(s), o);
          return {center: h, zoom: o};
        },
        fitBounds: function (t, e) {
          if (((t = X(t)), !t.isValid())) throw new Error('Bounds are not valid.');
          var n = this._getBoundsCenterZoom(t, e);
          return this.setView(n.center, n.zoom, e);
        },
        fitWorld: function (t) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180],
            ],
            t
          );
        },
        panTo: function (t, e) {
          return this.setView(t, this._zoom, {pan: e});
        },
        panBy: function (t, e) {
          if (((t = x(t).round()), (e = e || {}), !t.x && !t.y))
            return this.fire('moveend');
          if (e.animate !== !0 && !this.getSize().contains(t))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(t)),
                this.getZoom()
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new $n()),
              this._panAnim.on(
                {step: this._onPanTransitionStep, end: this._onPanTransitionEnd},
                this
              )),
            e.noMoveStart || this.fire('movestart'),
            e.animate !== !1)
          ) {
            K(this._mapPane, 'leaflet-pan-anim');
            var n = this._getMapPanePos().subtract(t).round();
            this._panAnim.run(this._mapPane, n, e.duration || 0.25, e.easeLinearity);
          } else this._rawPanBy(t), this.fire('move').fire('moveend');
          return this;
        },
        flyTo: function (t, e, n) {
          if (((n = n || {}), n.animate === !1 || !A.any3d)) return this.setView(t, e, n);
          this._stop();
          var i = this.project(this.getCenter()),
            o = this.project(t),
            s = this.getSize(),
            r = this._zoom;
          (t = N(t)), (e = e === void 0 ? r : e);
          var d = Math.max(s.x, s.y),
            h = d * this.getZoomScale(r, e),
            g = o.distanceTo(i) || 1,
            E = 1.42,
            F = E * E;
          function Y(xt) {
            var Ve = xt ? -1 : 1,
              es = xt ? h : d,
              ns = h * h - d * d + Ve * F * F * g * g,
              is = 2 * es * F * g,
              wn = ns / is,
              Ii = Math.sqrt(wn * wn + 1) - wn,
              os = Ii < 1e-9 ? -18 : Math.log(Ii);
            return os;
          }
          function Tt(xt) {
            return (Math.exp(xt) - Math.exp(-xt)) / 2;
          }
          function Lt(xt) {
            return (Math.exp(xt) + Math.exp(-xt)) / 2;
          }
          function At(xt) {
            return Tt(xt) / Lt(xt);
          }
          var St = Y(0);
          function ce(xt) {
            return d * (Lt(St) / Lt(St + E * xt));
          }
          function Jo(xt) {
            return (d * (Lt(St) * At(St + E * xt) - Tt(St))) / F;
          }
          function Xo(xt) {
            return 1 - Math.pow(1 - xt, 1.5);
          }
          var Qo = Date.now(),
            Ti = (Y(1) - St) / E,
            ts = n.duration ? 1e3 * n.duration : 1e3 * Ti * 0.8;
          function Si() {
            var xt = (Date.now() - Qo) / ts,
              Ve = Xo(xt) * Ti;
            xt <= 1
              ? ((this._flyToFrame = $(Si, this)),
                this._move(
                  this.unproject(i.add(o.subtract(i).multiplyBy(Jo(Ve) / g)), r),
                  this.getScaleZoom(d / ce(Ve), r),
                  {flyTo: !0}
                ))
              : this._move(t, e)._moveEnd(!0);
          }
          return this._moveStart(!0, n.noMoveStart), Si.call(this), this;
        },
        flyToBounds: function (t, e) {
          var n = this._getBoundsCenterZoom(t, e);
          return this.flyTo(n.center, n.zoom, e);
        },
        setMaxBounds: function (t) {
          return (
            (t = X(t)),
            this.listens('moveend', this._panInsideMaxBounds) &&
              this.off('moveend', this._panInsideMaxBounds),
            t.isValid()
              ? ((this.options.maxBounds = t),
                this._loaded && this._panInsideMaxBounds(),
                this.on('moveend', this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          );
        },
        setMinZoom: function (t) {
          var e = this.options.minZoom;
          return (
            (this.options.minZoom = t),
            this._loaded &&
            e !== t &&
            (this.fire('zoomlevelschange'), this.getZoom() < this.options.minZoom)
              ? this.setZoom(t)
              : this
          );
        },
        setMaxZoom: function (t) {
          var e = this.options.maxZoom;
          return (
            (this.options.maxZoom = t),
            this._loaded &&
            e !== t &&
            (this.fire('zoomlevelschange'), this.getZoom() > this.options.maxZoom)
              ? this.setZoom(t)
              : this
          );
        },
        panInsideBounds: function (t, e) {
          this._enforcingBounds = !0;
          var n = this.getCenter(),
            i = this._limitCenter(n, this._zoom, X(t));
          return n.equals(i) || this.panTo(i, e), (this._enforcingBounds = !1), this;
        },
        panInside: function (t, e) {
          e = e || {};
          var n = x(e.paddingTopLeft || e.padding || [0, 0]),
            i = x(e.paddingBottomRight || e.padding || [0, 0]),
            o = this.project(this.getCenter()),
            s = this.project(t),
            r = this.getPixelBounds(),
            d = W([r.min.add(n), r.max.subtract(i)]),
            h = d.getSize();
          if (!d.contains(s)) {
            this._enforcingBounds = !0;
            var g = s.subtract(d.getCenter()),
              E = d.extend(s).getSize().subtract(h);
            (o.x += g.x < 0 ? -E.x : E.x),
              (o.y += g.y < 0 ? -E.y : E.y),
              this.panTo(this.unproject(o), e),
              (this._enforcingBounds = !1);
          }
          return this;
        },
        invalidateSize: function (t) {
          if (!this._loaded) return this;
          t = l({animate: !1, pan: !0}, t === !0 ? {animate: !0} : t);
          var e = this.getSize();
          (this._sizeChanged = !0), (this._lastCenter = null);
          var n = this.getSize(),
            i = e.divideBy(2).round(),
            o = n.divideBy(2).round(),
            s = i.subtract(o);
          return !s.x && !s.y
            ? this
            : (t.animate && t.pan
                ? this.panBy(s)
                : (t.pan && this._rawPanBy(s),
                  this.fire('move'),
                  t.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(m(this.fire, this, 'moveend'), 200)))
                    : this.fire('moveend')),
              this.fire('resize', {oldSize: e, newSize: n}));
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire('viewreset'),
            this._stop()
          );
        },
        locate: function (t) {
          if (
            ((t = this._locateOptions = l({timeout: 1e4, watch: !1}, t)),
            !('geolocation' in navigator))
          )
            return (
              this._handleGeolocationError({
                code: 0,
                message: 'Geolocation not supported.',
              }),
              this
            );
          var e = m(this._handleGeolocationResponse, this),
            n = m(this._handleGeolocationError, this);
          return (
            t.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(e, n, t))
              : navigator.geolocation.getCurrentPosition(e, n, t),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (t) {
          if (this._container._leaflet_id) {
            var e = t.code,
              n =
                t.message ||
                (e === 1
                  ? 'permission denied'
                  : e === 2
                    ? 'position unavailable'
                    : 'timeout');
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire('locationerror', {
                code: e,
                message: 'Geolocation error: ' + n + '.',
              });
          }
        },
        _handleGeolocationResponse: function (t) {
          if (this._container._leaflet_id) {
            var e = t.coords.latitude,
              n = t.coords.longitude,
              i = new H(e, n),
              o = i.toBounds(t.coords.accuracy * 2),
              s = this._locateOptions;
            if (s.setView) {
              var r = this.getBoundsZoom(o);
              this.setView(i, s.maxZoom ? Math.min(r, s.maxZoom) : r);
            }
            var d = {latlng: i, bounds: o, timestamp: t.timestamp};
            for (var h in t.coords)
              typeof t.coords[h] == 'number' && (d[h] = t.coords[h]);
            this.fire('locationfound', d);
          }
        },
        addHandler: function (t, e) {
          if (!e) return this;
          var n = (this[t] = new e(this));
          return this._handlers.push(n), this.options[t] && n.enable(), this;
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds && this.off('moveend', this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error('Map container is being reused by another instance');
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            (this._container._leaflet_id = void 0), (this._containerId = void 0);
          }
          this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            pt(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest &&
              (st(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire('unload');
          var t;
          for (t in this._layers) this._layers[t].remove();
          for (t in this._panes) pt(this._panes[t]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (t, e) {
          var n =
              'leaflet-pane' + (t ? ' leaflet-' + t.replace('Pane', '') + '-pane' : ''),
            i = ot('div', n, e || this._mapPane);
          return t && (this._panes[t] = i), i;
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var t = this.getPixelBounds(),
            e = this.unproject(t.getBottomLeft()),
            n = this.unproject(t.getTopRight());
          return new J(e, n);
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0
            ? this._layersMinZoom || 0
            : this.options.minZoom;
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (t, e, n) {
          (t = X(t)), (n = x(n || [0, 0]));
          var i = this.getZoom() || 0,
            o = this.getMinZoom(),
            s = this.getMaxZoom(),
            r = t.getNorthWest(),
            d = t.getSouthEast(),
            h = this.getSize().subtract(n),
            g = W(this.project(d, i), this.project(r, i)).getSize(),
            E = A.any3d ? this.options.zoomSnap : 1,
            F = h.x / g.x,
            Y = h.y / g.y,
            Tt = e ? Math.max(F, Y) : Math.min(F, Y);
          return (
            (i = this.getScaleZoom(Tt, i)),
            E &&
              ((i = Math.round(i / (E / 100)) * (E / 100)),
              (i = e ? Math.ceil(i / E) * E : Math.floor(i / E) * E)),
            Math.max(o, Math.min(s, i))
          );
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new T(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (t, e) {
          var n = this._getTopLeftPoint(t, e);
          return new k(n, n.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function (t) {
          return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
        },
        getPane: function (t) {
          return typeof t == 'string' ? this._panes[t] : t;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (t, e) {
          var n = this.options.crs;
          return (e = e === void 0 ? this._zoom : e), n.scale(t) / n.scale(e);
        },
        getScaleZoom: function (t, e) {
          var n = this.options.crs;
          e = e === void 0 ? this._zoom : e;
          var i = n.zoom(t * n.scale(e));
          return isNaN(i) ? 1 / 0 : i;
        },
        project: function (t, e) {
          return (
            (e = e === void 0 ? this._zoom : e), this.options.crs.latLngToPoint(N(t), e)
          );
        },
        unproject: function (t, e) {
          return (
            (e = e === void 0 ? this._zoom : e), this.options.crs.pointToLatLng(x(t), e)
          );
        },
        layerPointToLatLng: function (t) {
          var e = x(t).add(this.getPixelOrigin());
          return this.unproject(e);
        },
        latLngToLayerPoint: function (t) {
          var e = this.project(N(t))._round();
          return e._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (t) {
          return this.options.crs.wrapLatLng(N(t));
        },
        wrapLatLngBounds: function (t) {
          return this.options.crs.wrapLatLngBounds(X(t));
        },
        distance: function (t, e) {
          return this.options.crs.distance(N(t), N(e));
        },
        containerPointToLayerPoint: function (t) {
          return x(t).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (t) {
          return x(t).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (t) {
          var e = this.containerPointToLayerPoint(x(t));
          return this.layerPointToLatLng(e);
        },
        latLngToContainerPoint: function (t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(N(t)));
        },
        mouseEventToContainerPoint: function (t) {
          return Kn(t, this._container);
        },
        mouseEventToLayerPoint: function (t) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
        },
        mouseEventToLatLng: function (t) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        },
        _initContainer: function (t) {
          var e = (this._container = Wn(t));
          if (e) {
            if (e._leaflet_id) throw new Error('Map container is already initialized.');
          } else throw new Error('Map container not found.');
          G(e, 'scroll', this._onScroll, this), (this._containerId = u(e));
        },
        _initLayout: function () {
          var t = this._container;
          (this._fadeAnimated = this.options.fadeAnimation && A.any3d),
            K(
              t,
              'leaflet-container' +
                (A.touch ? ' leaflet-touch' : '') +
                (A.retina ? ' leaflet-retina' : '') +
                (A.ielt9 ? ' leaflet-oldie' : '') +
                (A.safari ? ' leaflet-safari' : '') +
                (this._fadeAnimated ? ' leaflet-fade-anim' : '')
            );
          var e = me(t, 'position');
          e !== 'absolute' &&
            e !== 'relative' &&
            e !== 'fixed' &&
            e !== 'sticky' &&
            (t.style.position = 'relative'),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes: function () {
          var t = (this._panes = {});
          (this._paneRenderers = {}),
            (this._mapPane = this.createPane('mapPane', this._container)),
            yt(this._mapPane, new T(0, 0)),
            this.createPane('tilePane'),
            this.createPane('overlayPane'),
            this.createPane('shadowPane'),
            this.createPane('markerPane'),
            this.createPane('tooltipPane'),
            this.createPane('popupPane'),
            this.options.markerZoomAnimation ||
              (K(t.markerPane, 'leaflet-zoom-hide'),
              K(t.shadowPane, 'leaflet-zoom-hide'));
        },
        _resetView: function (t, e, n) {
          yt(this._mapPane, new T(0, 0));
          var i = !this._loaded;
          (this._loaded = !0), (e = this._limitZoom(e)), this.fire('viewprereset');
          var o = this._zoom !== e;
          this._moveStart(o, n)._move(t, e)._moveEnd(o),
            this.fire('viewreset'),
            i && this.fire('load');
        },
        _moveStart: function (t, e) {
          return t && this.fire('zoomstart'), e || this.fire('movestart'), this;
        },
        _move: function (t, e, n, i) {
          e === void 0 && (e = this._zoom);
          var o = this._zoom !== e;
          return (
            (this._zoom = e),
            (this._lastCenter = t),
            (this._pixelOrigin = this._getNewPixelOrigin(t)),
            i
              ? n && n.pinch && this.fire('zoom', n)
              : ((o || (n && n.pinch)) && this.fire('zoom', n), this.fire('move', n)),
            this
          );
        },
        _moveEnd: function (t) {
          return t && this.fire('zoomend'), this.fire('moveend');
        },
        _stop: function () {
          return st(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function (t) {
          yt(this._mapPane, this._getMapPanePos().subtract(t));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error('Set map center and zoom first.');
        },
        _initEvents: function (t) {
          (this._targets = {}), (this._targets[u(this._container)] = this);
          var e = t ? lt : G;
          e(
            this._container,
            'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
            this._handleDOMEvent,
            this
          ),
            this.options.trackResize && e(window, 'resize', this._onResize, this),
            A.any3d &&
              this.options.transform3DLimit &&
              (t ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
        },
        _onResize: function () {
          st(this._resizeRequest),
            (this._resizeRequest = $(function () {
              this.invalidateSize({debounceMoveend: !0});
            }, this));
        },
        _onScroll: function () {
          (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
        },
        _onMoveEnd: function () {
          var t = this._getMapPanePos();
          Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (t, e) {
          for (
            var n = [],
              i,
              o = e === 'mouseout' || e === 'mouseover',
              s = t.target || t.srcElement,
              r = !1;
            s;

          ) {
            if (
              ((i = this._targets[u(s)]),
              i && (e === 'click' || e === 'preclick') && this._draggableMoved(i))
            ) {
              r = !0;
              break;
            }
            if (
              (i && i.listens(e, !0) && ((o && !un(s, t)) || (n.push(i), o))) ||
              s === this._container
            )
              break;
            s = s.parentNode;
          }
          return !n.length && !r && !o && this.listens(e, !0) && (n = [this]), n;
        },
        _isClickDisabled: function (t) {
          for (; t && t !== this._container; ) {
            if (t._leaflet_disable_click) return !0;
            t = t.parentNode;
          }
        },
        _handleDOMEvent: function (t) {
          var e = t.target || t.srcElement;
          if (
            !(
              !this._loaded ||
              e._leaflet_disable_events ||
              (t.type === 'click' && this._isClickDisabled(e))
            )
          ) {
            var n = t.type;
            n === 'mousedown' && sn(e), this._fireDOMEvent(t, n);
          }
        },
        _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
        _fireDOMEvent: function (t, e, n) {
          if (t.type === 'click') {
            var i = l({}, t);
            (i.type = 'preclick'), this._fireDOMEvent(i, i.type, n);
          }
          var o = this._findEventTargets(t, e);
          if (n) {
            for (var s = [], r = 0; r < n.length; r++)
              n[r].listens(e, !0) && s.push(n[r]);
            o = s.concat(o);
          }
          if (o.length) {
            e === 'contextmenu' && Ct(t);
            var d = o[0],
              h = {originalEvent: t};
            if (t.type !== 'keypress' && t.type !== 'keydown' && t.type !== 'keyup') {
              var g = d.getLatLng && (!d._radius || d._radius <= 10);
              (h.containerPoint = g
                ? this.latLngToContainerPoint(d.getLatLng())
                : this.mouseEventToContainerPoint(t)),
                (h.layerPoint = this.containerPointToLayerPoint(h.containerPoint)),
                (h.latlng = g ? d.getLatLng() : this.layerPointToLatLng(h.layerPoint));
            }
            for (r = 0; r < o.length; r++)
              if (
                (o[r].fire(e, h, !0),
                h.originalEvent._stopped ||
                  (o[r].options.bubblingMouseEvents === !1 &&
                    q(this._mouseEvents, e) !== -1))
              )
                return;
          }
        },
        _draggableMoved: function (t) {
          return (
            (t = t.dragging && t.dragging.enabled() ? t : this),
            (t.dragging && t.dragging.moved()) || (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var t = 0, e = this._handlers.length; t < e; t++)
            this._handlers[t].disable();
        },
        whenReady: function (t, e) {
          return (
            this._loaded ? t.call(e || this, {target: this}) : this.on('load', t, e), this
          );
        },
        _getMapPanePos: function () {
          return $t(this._mapPane) || new T(0, 0);
        },
        _moved: function () {
          var t = this._getMapPanePos();
          return t && !t.equals([0, 0]);
        },
        _getTopLeftPoint: function (t, e) {
          var n =
            t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
          return n.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (t, e) {
          var n = this.getSize()._divideBy(2);
          return this.project(t, e)._subtract(n)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function (t, e, n) {
          var i = this._getNewPixelOrigin(n, e);
          return this.project(t, e)._subtract(i);
        },
        _latLngBoundsToNewLayerBounds: function (t, e, n) {
          var i = this._getNewPixelOrigin(n, e);
          return W([
            this.project(t.getSouthWest(), e)._subtract(i),
            this.project(t.getNorthWest(), e)._subtract(i),
            this.project(t.getSouthEast(), e)._subtract(i),
            this.project(t.getNorthEast(), e)._subtract(i),
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (t) {
          return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
        },
        _limitCenter: function (t, e, n) {
          if (!n) return t;
          var i = this.project(t, e),
            o = this.getSize().divideBy(2),
            s = new k(i.subtract(o), i.add(o)),
            r = this._getBoundsOffset(s, n, e);
          return Math.abs(r.x) <= 1 && Math.abs(r.y) <= 1
            ? t
            : this.unproject(i.add(r), e);
        },
        _limitOffset: function (t, e) {
          if (!e) return t;
          var n = this.getPixelBounds(),
            i = new k(n.min.add(t), n.max.add(t));
          return t.add(this._getBoundsOffset(i, e));
        },
        _getBoundsOffset: function (t, e, n) {
          var i = W(this.project(e.getNorthEast(), n), this.project(e.getSouthWest(), n)),
            o = i.min.subtract(t.min),
            s = i.max.subtract(t.max),
            r = this._rebound(o.x, -s.x),
            d = this._rebound(o.y, -s.y);
          return new T(r, d);
        },
        _rebound: function (t, e) {
          return t + e > 0
            ? Math.round(t - e) / 2
            : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        },
        _limitZoom: function (t) {
          var e = this.getMinZoom(),
            n = this.getMaxZoom(),
            i = A.any3d ? this.options.zoomSnap : 1;
          return i && (t = Math.round(t / i) * i), Math.max(e, Math.min(n, t));
        },
        _onPanTransitionStep: function () {
          this.fire('move');
        },
        _onPanTransitionEnd: function () {
          vt(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend');
        },
        _tryAnimatedPan: function (t, e) {
          var n = this._getCenterOffset(t)._trunc();
          return (e && e.animate) !== !0 && !this.getSize().contains(n)
            ? !1
            : (this.panBy(n, e), !0);
        },
        _createAnimProxy: function () {
          var t = (this._proxy = ot('div', 'leaflet-proxy leaflet-zoom-animated'));
          this._panes.mapPane.appendChild(t),
            this.on(
              'zoomanim',
              function (e) {
                var n = Je,
                  i = this._proxy.style[n];
                Yt(
                  this._proxy,
                  this.project(e.center, e.zoom),
                  this.getZoomScale(e.zoom, 1)
                ),
                  i === this._proxy.style[n] &&
                    this._animatingZoom &&
                    this._onZoomTransitionEnd();
              },
              this
            ),
            this.on('load moveend', this._animMoveEnd, this),
            this._on('unload', this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function () {
          pt(this._proxy),
            this.off('load moveend', this._animMoveEnd, this),
            delete this._proxy;
        },
        _animMoveEnd: function () {
          var t = this.getCenter(),
            e = this.getZoom();
          Yt(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
        },
        _catchTransitionEnd: function (t) {
          this._animatingZoom &&
            t.propertyName.indexOf('transform') >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
        },
        _tryAnimatedZoom: function (t, e, n) {
          if (this._animatingZoom) return !0;
          if (
            ((n = n || {}),
            !this._zoomAnimated ||
              n.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var i = this.getZoomScale(e),
            o = this._getCenterOffset(t)._divideBy(1 - 1 / i);
          return n.animate !== !0 && !this.getSize().contains(o)
            ? !1
            : ($(function () {
                this._moveStart(!0, n.noMoveStart || !1)._animateZoom(t, e, !0);
              }, this),
              !0);
        },
        _animateZoom: function (t, e, n, i) {
          this._mapPane &&
            (n &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = t),
              (this._animateToZoom = e),
              K(this._mapPane, 'leaflet-zoom-anim')),
            this.fire('zoomanim', {center: t, zoom: e, noUpdate: i}),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(m(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          this._animatingZoom &&
            (this._mapPane && vt(this._mapPane, 'leaflet-zoom-anim'),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire('zoom'),
            delete this._tempFireZoomEvent,
            this.fire('move'),
            this._moveEnd(!0));
        },
      });
    function fo(t, e) {
      return new nt(t, e);
    }
    var Ot = at.extend({
        options: {position: 'topright'},
        initialize: function (t) {
          w(this, t);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (t) {
          var e = this._map;
          return (
            e && e.removeControl(this),
            (this.options.position = t),
            e && e.addControl(this),
            this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (t) {
          this.remove(), (this._map = t);
          var e = (this._container = this.onAdd(t)),
            n = this.getPosition(),
            i = t._controlCorners[n];
          return (
            K(e, 'leaflet-control'),
            n.indexOf('bottom') !== -1
              ? i.insertBefore(e, i.firstChild)
              : i.appendChild(e),
            this._map.on('unload', this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? (pt(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off('unload', this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (t) {
          this._map &&
            t &&
            t.screenX > 0 &&
            t.screenY > 0 &&
            this._map.getContainer().focus();
        },
      }),
      ve = function (t) {
        return new Ot(t);
      };
    nt.include({
      addControl: function (t) {
        return t.addTo(this), this;
      },
      removeControl: function (t) {
        return t.remove(), this;
      },
      _initControlPos: function () {
        var t = (this._controlCorners = {}),
          e = 'leaflet-',
          n = (this._controlContainer = ot(
            'div',
            e + 'control-container',
            this._container
          ));
        function i(o, s) {
          var r = e + o + ' ' + e + s;
          t[o + s] = ot('div', r, n);
        }
        i('top', 'left'), i('top', 'right'), i('bottom', 'left'), i('bottom', 'right');
      },
      _clearControlPos: function () {
        for (var t in this._controlCorners) pt(this._controlCorners[t]);
        pt(this._controlContainer),
          delete this._controlCorners,
          delete this._controlContainer;
      },
    });
    var Jn = Ot.extend({
        options: {
          collapsed: !0,
          position: 'topright',
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (t, e, n, i) {
            return n < i ? -1 : i < n ? 1 : 0;
          },
        },
        initialize: function (t, e, n) {
          w(this, n),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1),
            (this._preventClick = !1);
          for (var i in t) this._addLayer(t[i], i);
          for (i in e) this._addLayer(e[i], i, !0);
        },
        onAdd: function (t) {
          this._initLayout(),
            this._update(),
            (this._map = t),
            t.on('zoomend', this._checkDisabledLayers, this);
          for (var e = 0; e < this._layers.length; e++)
            this._layers[e].layer.on('add remove', this._onLayerChange, this);
          return this._container;
        },
        addTo: function (t) {
          return Ot.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
        },
        onRemove: function () {
          this._map.off('zoomend', this._checkDisabledLayers, this);
          for (var t = 0; t < this._layers.length; t++)
            this._layers[t].layer.off('add remove', this._onLayerChange, this);
        },
        addBaseLayer: function (t, e) {
          return this._addLayer(t, e), this._map ? this._update() : this;
        },
        addOverlay: function (t, e) {
          return this._addLayer(t, e, !0), this._map ? this._update() : this;
        },
        removeLayer: function (t) {
          t.off('add remove', this._onLayerChange, this);
          var e = this._getLayer(u(t));
          return (
            e && this._layers.splice(this._layers.indexOf(e), 1),
            this._map ? this._update() : this
          );
        },
        expand: function () {
          K(this._container, 'leaflet-control-layers-expanded'),
            (this._section.style.height = null);
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            t < this._section.clientHeight
              ? (K(this._section, 'leaflet-control-layers-scrollbar'),
                (this._section.style.height = t + 'px'))
              : vt(this._section, 'leaflet-control-layers-scrollbar'),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return vt(this._container, 'leaflet-control-layers-expanded'), this;
        },
        _initLayout: function () {
          var t = 'leaflet-control-layers',
            e = (this._container = ot('div', t)),
            n = this.options.collapsed;
          e.setAttribute('aria-haspopup', !0), ge(e), dn(e);
          var i = (this._section = ot('section', t + '-list'));
          n &&
            (this._map.on('click', this.collapse, this),
            G(e, {mouseenter: this._expandSafely, mouseleave: this.collapse}, this));
          var o = (this._layersLink = ot('a', t + '-toggle', e));
          (o.href = '#'),
            (o.title = 'Layers'),
            o.setAttribute('role', 'button'),
            G(
              o,
              {
                keydown: function (s) {
                  s.keyCode === 13 && this._expandSafely();
                },
                click: function (s) {
                  Ct(s), this._expandSafely();
                },
              },
              this
            ),
            n || this.expand(),
            (this._baseLayersList = ot('div', t + '-base', i)),
            (this._separator = ot('div', t + '-separator', i)),
            (this._overlaysList = ot('div', t + '-overlays', i)),
            e.appendChild(i);
        },
        _getLayer: function (t) {
          for (var e = 0; e < this._layers.length; e++)
            if (this._layers[e] && u(this._layers[e].layer) === t) return this._layers[e];
        },
        _addLayer: function (t, e, n) {
          this._map && t.on('add remove', this._onLayerChange, this),
            this._layers.push({layer: t, name: e, overlay: n}),
            this.options.sortLayers &&
              this._layers.sort(
                m(function (i, o) {
                  return this.options.sortFunction(i.layer, o.layer, i.name, o.name);
                }, this)
              ),
            this.options.autoZIndex &&
              t.setZIndex &&
              (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update: function () {
          if (!this._container) return this;
          Pe(this._baseLayersList),
            Pe(this._overlaysList),
            (this._layerControlInputs = []);
          var t,
            e,
            n,
            i,
            o = 0;
          for (n = 0; n < this._layers.length; n++)
            (i = this._layers[n]),
              this._addItem(i),
              (e = e || i.overlay),
              (t = t || !i.overlay),
              (o += i.overlay ? 0 : 1);
          return (
            this.options.hideSingleBase &&
              ((t = t && o > 1), (this._baseLayersList.style.display = t ? '' : 'none')),
            (this._separator.style.display = e && t ? '' : 'none'),
            this
          );
        },
        _onLayerChange: function (t) {
          this._handlingClick || this._update();
          var e = this._getLayer(u(t.target)),
            n = e.overlay
              ? t.type === 'add'
                ? 'overlayadd'
                : 'overlayremove'
              : t.type === 'add'
                ? 'baselayerchange'
                : null;
          n && this._map.fire(n, e);
        },
        _createRadioElement: function (t, e) {
          var n =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              t +
              '"' +
              (e ? ' checked="checked"' : '') +
              '/>',
            i = document.createElement('div');
          return (i.innerHTML = n), i.firstChild;
        },
        _addItem: function (t) {
          var e = document.createElement('label'),
            n = this._map.hasLayer(t.layer),
            i;
          t.overlay
            ? ((i = document.createElement('input')),
              (i.type = 'checkbox'),
              (i.className = 'leaflet-control-layers-selector'),
              (i.defaultChecked = n))
            : (i = this._createRadioElement('leaflet-base-layers_' + u(this), n)),
            this._layerControlInputs.push(i),
            (i.layerId = u(t.layer)),
            G(i, 'click', this._onInputClick, this);
          var o = document.createElement('span');
          o.innerHTML = ' ' + t.name;
          var s = document.createElement('span');
          e.appendChild(s), s.appendChild(i), s.appendChild(o);
          var r = t.overlay ? this._overlaysList : this._baseLayersList;
          return r.appendChild(e), this._checkDisabledLayers(), e;
        },
        _onInputClick: function () {
          if (!this._preventClick) {
            var t = this._layerControlInputs,
              e,
              n,
              i = [],
              o = [];
            this._handlingClick = !0;
            for (var s = t.length - 1; s >= 0; s--)
              (e = t[s]),
                (n = this._getLayer(e.layerId).layer),
                e.checked ? i.push(n) : e.checked || o.push(n);
            for (s = 0; s < o.length; s++)
              this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
            for (s = 0; s < i.length; s++)
              this._map.hasLayer(i[s]) || this._map.addLayer(i[s]);
            (this._handlingClick = !1), this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function () {
          for (
            var t = this._layerControlInputs,
              e,
              n,
              i = this._map.getZoom(),
              o = t.length - 1;
            o >= 0;
            o--
          )
            (e = t[o]),
              (n = this._getLayer(e.layerId).layer),
              (e.disabled =
                (n.options.minZoom !== void 0 && i < n.options.minZoom) ||
                (n.options.maxZoom !== void 0 && i > n.options.maxZoom));
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function () {
          var t = this._section;
          (this._preventClick = !0), G(t, 'click', Ct), this.expand();
          var e = this;
          setTimeout(function () {
            lt(t, 'click', Ct), (e._preventClick = !1);
          });
        },
      }),
      po = function (t, e, n) {
        return new Jn(t, e, n);
      },
      hn = Ot.extend({
        options: {
          position: 'topleft',
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: 'Zoom in',
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: 'Zoom out',
        },
        onAdd: function (t) {
          var e = 'leaflet-control-zoom',
            n = ot('div', e + ' leaflet-bar'),
            i = this.options;
          return (
            (this._zoomInButton = this._createButton(
              i.zoomInText,
              i.zoomInTitle,
              e + '-in',
              n,
              this._zoomIn
            )),
            (this._zoomOutButton = this._createButton(
              i.zoomOutText,
              i.zoomOutTitle,
              e + '-out',
              n,
              this._zoomOut
            )),
            this._updateDisabled(),
            t.on('zoomend zoomlevelschange', this._updateDisabled, this),
            n
          );
        },
        onRemove: function (t) {
          t.off('zoomend zoomlevelschange', this._updateDisabled, this);
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this;
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this;
        },
        _zoomIn: function (t) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _zoomOut: function (t) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _createButton: function (t, e, n, i, o) {
          var s = ot('a', n, i);
          return (
            (s.innerHTML = t),
            (s.href = '#'),
            (s.title = e),
            s.setAttribute('role', 'button'),
            s.setAttribute('aria-label', e),
            ge(s),
            G(s, 'click', Xt),
            G(s, 'click', o, this),
            G(s, 'click', this._refocusOnMap, this),
            s
          );
        },
        _updateDisabled: function () {
          var t = this._map,
            e = 'leaflet-disabled';
          vt(this._zoomInButton, e),
            vt(this._zoomOutButton, e),
            this._zoomInButton.setAttribute('aria-disabled', 'false'),
            this._zoomOutButton.setAttribute('aria-disabled', 'false'),
            (this._disabled || t._zoom === t.getMinZoom()) &&
              (K(this._zoomOutButton, e),
              this._zoomOutButton.setAttribute('aria-disabled', 'true')),
            (this._disabled || t._zoom === t.getMaxZoom()) &&
              (K(this._zoomInButton, e),
              this._zoomInButton.setAttribute('aria-disabled', 'true'));
        },
      });
    nt.mergeOptions({zoomControl: !0}),
      nt.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new hn()), this.addControl(this.zoomControl));
      });
    var _o = function (t) {
        return new hn(t);
      },
      Xn = Ot.extend({
        options: {position: 'bottomleft', maxWidth: 100, metric: !0, imperial: !0},
        onAdd: function (t) {
          var e = 'leaflet-control-scale',
            n = ot('div', e),
            i = this.options;
          return (
            this._addScales(i, e + '-line', n),
            t.on(i.updateWhenIdle ? 'moveend' : 'move', this._update, this),
            t.whenReady(this._update, this),
            n
          );
        },
        onRemove: function (t) {
          t.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
        },
        _addScales: function (t, e, n) {
          t.metric && (this._mScale = ot('div', e, n)),
            t.imperial && (this._iScale = ot('div', e, n));
        },
        _update: function () {
          var t = this._map,
            e = t.getSize().y / 2,
            n = t.distance(
              t.containerPointToLatLng([0, e]),
              t.containerPointToLatLng([this.options.maxWidth, e])
            );
          this._updateScales(n);
        },
        _updateScales: function (t) {
          this.options.metric && t && this._updateMetric(t),
            this.options.imperial && t && this._updateImperial(t);
        },
        _updateMetric: function (t) {
          var e = this._getRoundNum(t),
            n = e < 1e3 ? e + ' m' : e / 1e3 + ' km';
          this._updateScale(this._mScale, n, e / t);
        },
        _updateImperial: function (t) {
          var e = t * 3.2808399,
            n,
            i,
            o;
          e > 5280
            ? ((n = e / 5280),
              (i = this._getRoundNum(n)),
              this._updateScale(this._iScale, i + ' mi', i / n))
            : ((o = this._getRoundNum(e)),
              this._updateScale(this._iScale, o + ' ft', o / e));
        },
        _updateScale: function (t, e, n) {
          (t.style.width = Math.round(this.options.maxWidth * n) + 'px'),
            (t.innerHTML = e);
        },
        _getRoundNum: function (t) {
          var e = Math.pow(10, (Math.floor(t) + '').length - 1),
            n = t / e;
          return (n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1), e * n;
        },
      }),
      go = function (t) {
        return new Xn(t);
      },
      vo =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      mn = Ot.extend({
        options: {
          position: 'bottomright',
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (A.inlineSvg ? vo + ' ' : '') +
            'Leaflet</a>',
        },
        initialize: function (t) {
          w(this, t), (this._attributions = {});
        },
        onAdd: function (t) {
          (t.attributionControl = this),
            (this._container = ot('div', 'leaflet-control-attribution')),
            ge(this._container);
          for (var e in t._layers)
            t._layers[e].getAttribution &&
              this.addAttribution(t._layers[e].getAttribution());
          return (
            this._update(), t.on('layeradd', this._addAttribution, this), this._container
          );
        },
        onRemove: function (t) {
          t.off('layeradd', this._addAttribution, this);
        },
        _addAttribution: function (t) {
          t.layer.getAttribution &&
            (this.addAttribution(t.layer.getAttribution()),
            t.layer.once(
              'remove',
              function () {
                this.removeAttribution(t.layer.getAttribution());
              },
              this
            ));
        },
        setPrefix: function (t) {
          return (this.options.prefix = t), this._update(), this;
        },
        addAttribution: function (t) {
          return t
            ? (this._attributions[t] || (this._attributions[t] = 0),
              this._attributions[t]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (t) {
          return t
            ? (this._attributions[t] && (this._attributions[t]--, this._update()), this)
            : this;
        },
        _update: function () {
          if (this._map) {
            var t = [];
            for (var e in this._attributions) this._attributions[e] && t.push(e);
            var n = [];
            this.options.prefix && n.push(this.options.prefix),
              t.length && n.push(t.join(', ')),
              (this._container.innerHTML = n.join(' <span aria-hidden="true">|</span> '));
          }
        },
      });
    nt.mergeOptions({attributionControl: !0}),
      nt.addInitHook(function () {
        this.options.attributionControl && new mn().addTo(this);
      });
    var yo = function (t) {
      return new mn(t);
    };
    (Ot.Layers = Jn),
      (Ot.Zoom = hn),
      (Ot.Scale = Xn),
      (Ot.Attribution = mn),
      (ve.layers = po),
      (ve.zoom = _o),
      (ve.scale = go),
      (ve.attribution = yo);
    var Nt = at.extend({
      initialize: function (t) {
        this._map = t;
      },
      enable: function () {
        return this._enabled ? this : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    });
    Nt.addTo = function (t, e) {
      return t.addHandler(e, this), this;
    };
    var xo = {Events: z},
      Qn = A.touch ? 'touchstart mousedown' : 'mousedown',
      Gt = dt.extend({
        options: {clickTolerance: 3},
        initialize: function (t, e, n, i) {
          w(this, i),
            (this._element = t),
            (this._dragStartTarget = e || t),
            (this._preventOutline = n);
        },
        enable: function () {
          this._enabled ||
            (G(this._dragStartTarget, Qn, this._onDown, this), (this._enabled = !0));
        },
        disable: function () {
          this._enabled &&
            (Gt._dragging === this && this.finishDrag(!0),
            lt(this._dragStartTarget, Qn, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (t) {
          if (
            this._enabled &&
            ((this._moved = !1), !Xe(this._element, 'leaflet-zoom-anim'))
          ) {
            if (t.touches && t.touches.length !== 1) {
              Gt._dragging === this && this.finishDrag();
              return;
            }
            if (
              !(
                Gt._dragging ||
                t.shiftKey ||
                (t.which !== 1 && t.button !== 1 && !t.touches)
              ) &&
              ((Gt._dragging = this),
              this._preventOutline && sn(this._element),
              en(),
              fe(),
              !this._moving)
            ) {
              this.fire('down');
              var e = t.touches ? t.touches[0] : t,
                n = Un(this._element);
              (this._startPoint = new T(e.clientX, e.clientY)),
                (this._startPos = $t(this._element)),
                (this._parentScale = an(n));
              var i = t.type === 'mousedown';
              G(document, i ? 'mousemove' : 'touchmove', this._onMove, this),
                G(document, i ? 'mouseup' : 'touchend touchcancel', this._onUp, this);
            }
          }
        },
        _onMove: function (t) {
          if (this._enabled) {
            if (t.touches && t.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var e = t.touches && t.touches.length === 1 ? t.touches[0] : t,
              n = new T(e.clientX, e.clientY)._subtract(this._startPoint);
            (!n.x && !n.y) ||
              Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance ||
              ((n.x /= this._parentScale.x),
              (n.y /= this._parentScale.y),
              Ct(t),
              this._moved ||
                (this.fire('dragstart'),
                (this._moved = !0),
                K(document.body, 'leaflet-dragging'),
                (this._lastTarget = t.target || t.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                K(this._lastTarget, 'leaflet-drag-target')),
              (this._newPos = this._startPos.add(n)),
              (this._moving = !0),
              (this._lastEvent = t),
              this._updatePosition());
          }
        },
        _updatePosition: function () {
          var t = {originalEvent: this._lastEvent};
          this.fire('predrag', t), yt(this._element, this._newPos), this.fire('drag', t);
        },
        _onUp: function () {
          this._enabled && this.finishDrag();
        },
        finishDrag: function (t) {
          vt(document.body, 'leaflet-dragging'),
            this._lastTarget &&
              (vt(this._lastTarget, 'leaflet-drag-target'), (this._lastTarget = null)),
            lt(document, 'mousemove touchmove', this._onMove, this),
            lt(document, 'mouseup touchend touchcancel', this._onUp, this),
            nn(),
            pe();
          var e = this._moved && this._moving;
          (this._moving = !1),
            (Gt._dragging = !1),
            e &&
              this.fire('dragend', {
                noInertia: t,
                distance: this._newPos.distanceTo(this._startPos),
              });
        },
      });
    function ti(t, e, n) {
      var i,
        o = [1, 4, 2, 8],
        s,
        r,
        d,
        h,
        g,
        E,
        F,
        Y;
      for (s = 0, E = t.length; s < E; s++) t[s]._code = Qt(t[s], e);
      for (d = 0; d < 4; d++) {
        for (F = o[d], i = [], s = 0, E = t.length, r = E - 1; s < E; r = s++)
          (h = t[s]),
            (g = t[r]),
            h._code & F
              ? g._code & F || ((Y = Be(g, h, F, e, n)), (Y._code = Qt(Y, e)), i.push(Y))
              : (g._code & F &&
                  ((Y = Be(g, h, F, e, n)), (Y._code = Qt(Y, e)), i.push(Y)),
                i.push(h));
        t = i;
      }
      return t;
    }
    function ei(t, e) {
      var n, i, o, s, r, d, h, g, E;
      if (!t || t.length === 0) throw new Error('latlngs not passed');
      zt(t) ||
        (console.warn('latlngs are not flat! Only the first ring will be used'),
        (t = t[0]));
      var F = N([0, 0]),
        Y = X(t),
        Tt =
          Y.getNorthWest().distanceTo(Y.getSouthWest()) *
          Y.getNorthEast().distanceTo(Y.getNorthWest());
      Tt < 1700 && (F = fn(t));
      var Lt = t.length,
        At = [];
      for (n = 0; n < Lt; n++) {
        var St = N(t[n]);
        At.push(e.project(N([St.lat - F.lat, St.lng - F.lng])));
      }
      for (d = h = g = 0, n = 0, i = Lt - 1; n < Lt; i = n++)
        (o = At[n]),
          (s = At[i]),
          (r = o.y * s.x - s.y * o.x),
          (h += (o.x + s.x) * r),
          (g += (o.y + s.y) * r),
          (d += r * 3);
      d === 0 ? (E = At[0]) : (E = [h / d, g / d]);
      var ce = e.unproject(x(E));
      return N([ce.lat + F.lat, ce.lng + F.lng]);
    }
    function fn(t) {
      for (var e = 0, n = 0, i = 0, o = 0; o < t.length; o++) {
        var s = N(t[o]);
        (e += s.lat), (n += s.lng), i++;
      }
      return N([e / i, n / i]);
    }
    var bo = {__proto__: null, clipPolygon: ti, polygonCenter: ei, centroid: fn};
    function ni(t, e) {
      if (!e || !t.length) return t.slice();
      var n = e * e;
      return (t = Co(t, n)), (t = Lo(t, n)), t;
    }
    function ii(t, e, n) {
      return Math.sqrt(ye(t, e, n, !0));
    }
    function wo(t, e, n) {
      return ye(t, e, n);
    }
    function Lo(t, e) {
      var n = t.length,
        i = typeof Uint8Array < 'u' ? Uint8Array : Array,
        o = new i(n);
      (o[0] = o[n - 1] = 1), pn(t, o, e, 0, n - 1);
      var s,
        r = [];
      for (s = 0; s < n; s++) o[s] && r.push(t[s]);
      return r;
    }
    function pn(t, e, n, i, o) {
      var s = 0,
        r,
        d,
        h;
      for (d = i + 1; d <= o - 1; d++)
        (h = ye(t[d], t[i], t[o], !0)), h > s && ((r = d), (s = h));
      s > n && ((e[r] = 1), pn(t, e, n, i, r), pn(t, e, n, r, o));
    }
    function Co(t, e) {
      for (var n = [t[0]], i = 1, o = 0, s = t.length; i < s; i++)
        Eo(t[i], t[o]) > e && (n.push(t[i]), (o = i));
      return o < s - 1 && n.push(t[s - 1]), n;
    }
    var oi;
    function si(t, e, n, i, o) {
      var s = i ? oi : Qt(t, n),
        r = Qt(e, n),
        d,
        h,
        g;
      for (oi = r; ; ) {
        if (!(s | r)) return [t, e];
        if (s & r) return !1;
        (d = s || r),
          (h = Be(t, e, d, n, o)),
          (g = Qt(h, n)),
          d === s ? ((t = h), (s = g)) : ((e = h), (r = g));
      }
    }
    function Be(t, e, n, i, o) {
      var s = e.x - t.x,
        r = e.y - t.y,
        d = i.min,
        h = i.max,
        g,
        E;
      return (
        n & 8
          ? ((g = t.x + (s * (h.y - t.y)) / r), (E = h.y))
          : n & 4
            ? ((g = t.x + (s * (d.y - t.y)) / r), (E = d.y))
            : n & 2
              ? ((g = h.x), (E = t.y + (r * (h.x - t.x)) / s))
              : n & 1 && ((g = d.x), (E = t.y + (r * (d.x - t.x)) / s)),
        new T(g, E, o)
      );
    }
    function Qt(t, e) {
      var n = 0;
      return (
        t.x < e.min.x ? (n |= 1) : t.x > e.max.x && (n |= 2),
        t.y < e.min.y ? (n |= 4) : t.y > e.max.y && (n |= 8),
        n
      );
    }
    function Eo(t, e) {
      var n = e.x - t.x,
        i = e.y - t.y;
      return n * n + i * i;
    }
    function ye(t, e, n, i) {
      var o = e.x,
        s = e.y,
        r = n.x - o,
        d = n.y - s,
        h = r * r + d * d,
        g;
      return (
        h > 0 &&
          ((g = ((t.x - o) * r + (t.y - s) * d) / h),
          g > 1 ? ((o = n.x), (s = n.y)) : g > 0 && ((o += r * g), (s += d * g))),
        (r = t.x - o),
        (d = t.y - s),
        i ? r * r + d * d : new T(o, s)
      );
    }
    function zt(t) {
      return !O(t[0]) || (typeof t[0][0] != 'object' && typeof t[0][0] < 'u');
    }
    function ai(t) {
      return (
        console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.'),
        zt(t)
      );
    }
    function ri(t, e) {
      var n, i, o, s, r, d, h, g;
      if (!t || t.length === 0) throw new Error('latlngs not passed');
      zt(t) ||
        (console.warn('latlngs are not flat! Only the first ring will be used'),
        (t = t[0]));
      var E = N([0, 0]),
        F = X(t),
        Y =
          F.getNorthWest().distanceTo(F.getSouthWest()) *
          F.getNorthEast().distanceTo(F.getNorthWest());
      Y < 1700 && (E = fn(t));
      var Tt = t.length,
        Lt = [];
      for (n = 0; n < Tt; n++) {
        var At = N(t[n]);
        Lt.push(e.project(N([At.lat - E.lat, At.lng - E.lng])));
      }
      for (n = 0, i = 0; n < Tt - 1; n++) i += Lt[n].distanceTo(Lt[n + 1]) / 2;
      if (i === 0) g = Lt[0];
      else
        for (n = 0, s = 0; n < Tt - 1; n++)
          if (((r = Lt[n]), (d = Lt[n + 1]), (o = r.distanceTo(d)), (s += o), s > i)) {
            (h = (s - i) / o), (g = [d.x - h * (d.x - r.x), d.y - h * (d.y - r.y)]);
            break;
          }
      var St = e.unproject(x(g));
      return N([St.lat + E.lat, St.lng + E.lng]);
    }
    var ko = {
        __proto__: null,
        simplify: ni,
        pointToSegmentDistance: ii,
        closestPointOnSegment: wo,
        clipSegment: si,
        _getEdgeIntersection: Be,
        _getBitCode: Qt,
        _sqClosestPointOnSegment: ye,
        isFlat: zt,
        _flat: ai,
        polylineCenter: ri,
      },
      _n = {
        project: function (t) {
          return new T(t.lng, t.lat);
        },
        unproject: function (t) {
          return new H(t.y, t.x);
        },
        bounds: new k([-180, -90], [180, 90]),
      },
      gn = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new k(
          [-2003750834279e-5, -1549657073972e-5],
          [2003750834279e-5, 1876465623138e-5]
        ),
        project: function (t) {
          var e = Math.PI / 180,
            n = this.R,
            i = t.lat * e,
            o = this.R_MINOR / n,
            s = Math.sqrt(1 - o * o),
            r = s * Math.sin(i),
            d = Math.tan(Math.PI / 4 - i / 2) / Math.pow((1 - r) / (1 + r), s / 2);
          return (i = -n * Math.log(Math.max(d, 1e-10))), new T(t.lng * e * n, i);
        },
        unproject: function (t) {
          for (
            var e = 180 / Math.PI,
              n = this.R,
              i = this.R_MINOR / n,
              o = Math.sqrt(1 - i * i),
              s = Math.exp(-t.y / n),
              r = Math.PI / 2 - 2 * Math.atan(s),
              d = 0,
              h = 0.1,
              g;
            d < 15 && Math.abs(h) > 1e-7;
            d++
          )
            (g = o * Math.sin(r)),
              (g = Math.pow((1 - g) / (1 + g), o / 2)),
              (h = Math.PI / 2 - 2 * Math.atan(s * g) - r),
              (r += h);
          return new H(r * e, (t.x * e) / n);
        },
      },
      Po = {__proto__: null, LonLat: _n, Mercator: gn, SphericalMercator: Q},
      To = l({}, ut, {
        code: 'EPSG:3395',
        projection: gn,
        transformation: (function () {
          var t = 0.5 / (Math.PI * gn.R);
          return it(t, 0.5, -t, 0.5);
        })(),
      }),
      li = l({}, ut, {
        code: 'EPSG:4326',
        projection: _n,
        transformation: it(1 / 180, 1, -1 / 180, 0.5),
      }),
      So = l({}, ct, {
        projection: _n,
        transformation: it(1, 0, -1, 0),
        scale: function (t) {
          return Math.pow(2, t);
        },
        zoom: function (t) {
          return Math.log(t) / Math.LN2;
        },
        distance: function (t, e) {
          var n = e.lng - t.lng,
            i = e.lat - t.lat;
          return Math.sqrt(n * n + i * i);
        },
        infinite: !0,
      });
    (ct.Earth = ut),
      (ct.EPSG3395 = To),
      (ct.EPSG3857 = Pt),
      (ct.EPSG900913 = wt),
      (ct.EPSG4326 = li),
      (ct.Simple = So);
    var Zt = dt.extend({
      options: {pane: 'overlayPane', attribution: null, bubblingMouseEvents: !0},
      addTo: function (t) {
        return t.addLayer(this), this;
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (t) {
        return t && t.removeLayer(this), this;
      },
      getPane: function (t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function (t) {
        return (this._map._targets[u(t)] = this), this;
      },
      removeInteractiveTarget: function (t) {
        return delete this._map._targets[u(t)], this;
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (t) {
        var e = t.target;
        if (e.hasLayer(this)) {
          if (((this._map = e), (this._zoomAnimated = e._zoomAnimated), this.getEvents)) {
            var n = this.getEvents();
            e.on(n, this),
              this.once(
                'remove',
                function () {
                  e.off(n, this);
                },
                this
              );
          }
          this.onAdd(e), this.fire('add'), e.fire('layeradd', {layer: this});
        }
      },
    });
    nt.include({
      addLayer: function (t) {
        if (!t._layerAdd) throw new Error('The provided object is not a Layer.');
        var e = u(t);
        return this._layers[e]
          ? this
          : ((this._layers[e] = t),
            (t._mapToAdd = this),
            t.beforeAdd && t.beforeAdd(this),
            this.whenReady(t._layerAdd, t),
            this);
      },
      removeLayer: function (t) {
        var e = u(t);
        return this._layers[e]
          ? (this._loaded && t.onRemove(this),
            delete this._layers[e],
            this._loaded && (this.fire('layerremove', {layer: t}), t.fire('remove')),
            (t._map = t._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (t) {
        return u(t) in this._layers;
      },
      eachLayer: function (t, e) {
        for (var n in this._layers) t.call(e, this._layers[n]);
        return this;
      },
      _addLayers: function (t) {
        t = t ? (O(t) ? t : [t]) : [];
        for (var e = 0, n = t.length; e < n; e++) this.addLayer(t[e]);
      },
      _addZoomLimit: function (t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) &&
          ((this._zoomBoundLayers[u(t)] = t), this._updateZoomLevels());
      },
      _removeZoomLimit: function (t) {
        var e = u(t);
        this._zoomBoundLayers[e] &&
          (delete this._zoomBoundLayers[e], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var t = 1 / 0,
          e = -1 / 0,
          n = this._getZoomSpan();
        for (var i in this._zoomBoundLayers) {
          var o = this._zoomBoundLayers[i].options;
          (t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom)),
            (e = o.maxZoom === void 0 ? e : Math.max(e, o.maxZoom));
        }
        (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
          (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
          n !== this._getZoomSpan() && this.fire('zoomlevelschange'),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom);
      },
    });
    var oe = Zt.extend({
        initialize: function (t, e) {
          w(this, e), (this._layers = {});
          var n, i;
          if (t) for (n = 0, i = t.length; n < i; n++) this.addLayer(t[n]);
        },
        addLayer: function (t) {
          var e = this.getLayerId(t);
          return (this._layers[e] = t), this._map && this._map.addLayer(t), this;
        },
        removeLayer: function (t) {
          var e = t in this._layers ? t : this.getLayerId(t);
          return (
            this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
            delete this._layers[e],
            this
          );
        },
        hasLayer: function (t) {
          var e = typeof t == 'number' ? t : this.getLayerId(t);
          return e in this._layers;
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (t) {
          var e = Array.prototype.slice.call(arguments, 1),
            n,
            i;
          for (n in this._layers) (i = this._layers[n]), i[t] && i[t].apply(i, e);
          return this;
        },
        onAdd: function (t) {
          this.eachLayer(t.addLayer, t);
        },
        onRemove: function (t) {
          this.eachLayer(t.removeLayer, t);
        },
        eachLayer: function (t, e) {
          for (var n in this._layers) t.call(e, this._layers[n]);
          return this;
        },
        getLayer: function (t) {
          return this._layers[t];
        },
        getLayers: function () {
          var t = [];
          return this.eachLayer(t.push, t), t;
        },
        setZIndex: function (t) {
          return this.invoke('setZIndex', t);
        },
        getLayerId: function (t) {
          return u(t);
        },
      }),
      Io = function (t, e) {
        return new oe(t, e);
      },
      Ft = oe.extend({
        addLayer: function (t) {
          return this.hasLayer(t)
            ? this
            : (t.addEventParent(this),
              oe.prototype.addLayer.call(this, t),
              this.fire('layeradd', {layer: t}));
        },
        removeLayer: function (t) {
          return this.hasLayer(t)
            ? (t in this._layers && (t = this._layers[t]),
              t.removeEventParent(this),
              oe.prototype.removeLayer.call(this, t),
              this.fire('layerremove', {layer: t}))
            : this;
        },
        setStyle: function (t) {
          return this.invoke('setStyle', t);
        },
        bringToFront: function () {
          return this.invoke('bringToFront');
        },
        bringToBack: function () {
          return this.invoke('bringToBack');
        },
        getBounds: function () {
          var t = new J();
          for (var e in this._layers) {
            var n = this._layers[e];
            t.extend(n.getBounds ? n.getBounds() : n.getLatLng());
          }
          return t;
        },
      }),
      Mo = function (t, e) {
        return new Ft(t, e);
      },
      se = at.extend({
        options: {popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1},
        initialize: function (t) {
          w(this, t);
        },
        createIcon: function (t) {
          return this._createIcon('icon', t);
        },
        createShadow: function (t) {
          return this._createIcon('shadow', t);
        },
        _createIcon: function (t, e) {
          var n = this._getIconUrl(t);
          if (!n) {
            if (t === 'icon')
              throw new Error('iconUrl not set in Icon options (see the docs).');
            return null;
          }
          var i = this._createImg(n, e && e.tagName === 'IMG' ? e : null);
          return (
            this._setIconStyles(i, t),
            (this.options.crossOrigin || this.options.crossOrigin === '') &&
              (i.crossOrigin =
                this.options.crossOrigin === !0 ? '' : this.options.crossOrigin),
            i
          );
        },
        _setIconStyles: function (t, e) {
          var n = this.options,
            i = n[e + 'Size'];
          typeof i == 'number' && (i = [i, i]);
          var o = x(i),
            s = x(
              (e === 'shadow' && n.shadowAnchor) ||
                n.iconAnchor ||
                (o && o.divideBy(2, !0))
            );
          (t.className = 'leaflet-marker-' + e + ' ' + (n.className || '')),
            s && ((t.style.marginLeft = -s.x + 'px'), (t.style.marginTop = -s.y + 'px')),
            o && ((t.style.width = o.x + 'px'), (t.style.height = o.y + 'px'));
        },
        _createImg: function (t, e) {
          return (e = e || document.createElement('img')), (e.src = t), e;
        },
        _getIconUrl: function (t) {
          return (A.retina && this.options[t + 'RetinaUrl']) || this.options[t + 'Url'];
        },
      });
    function Bo(t) {
      return new se(t);
    }
    var xe = se.extend({
        options: {
          iconUrl: 'marker-icon.png',
          iconRetinaUrl: 'marker-icon-2x.png',
          shadowUrl: 'marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        },
        _getIconUrl: function (t) {
          return (
            typeof xe.imagePath != 'string' && (xe.imagePath = this._detectIconPath()),
            (this.options.imagePath || xe.imagePath) +
              se.prototype._getIconUrl.call(this, t)
          );
        },
        _stripUrl: function (t) {
          var e = function (n, i, o) {
            var s = i.exec(n);
            return s && s[o];
          };
          return (
            (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)),
            t && e(t, /^(.*)marker-icon\.png$/, 1)
          );
        },
        _detectIconPath: function () {
          var t = ot('div', 'leaflet-default-icon-path', document.body),
            e = me(t, 'background-image') || me(t, 'backgroundImage');
          if ((document.body.removeChild(t), (e = this._stripUrl(e)), e)) return e;
          var n = document.querySelector('link[href$="leaflet.css"]');
          return n ? n.href.substring(0, n.href.length - 11 - 1) : '';
        },
      }),
      ci = Nt.extend({
        initialize: function (t) {
          this._marker = t;
        },
        addHooks: function () {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new Gt(t, t, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd,
                },
                this
              )
              .enable(),
            K(t, 'leaflet-marker-draggable');
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .disable(),
            this._marker._icon && vt(this._marker._icon, 'leaflet-marker-draggable');
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (t) {
          var e = this._marker,
            n = e._map,
            i = this._marker.options.autoPanSpeed,
            o = this._marker.options.autoPanPadding,
            s = $t(e._icon),
            r = n.getPixelBounds(),
            d = n.getPixelOrigin(),
            h = W(r.min._subtract(d).add(o), r.max._subtract(d).subtract(o));
          if (!h.contains(s)) {
            var g = x(
              (Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) -
                (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x),
              (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) -
                (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)
            ).multiplyBy(i);
            n.panBy(g, {animate: !1}),
              this._draggable._newPos._add(g),
              this._draggable._startPos._add(g),
              yt(e._icon, this._draggable._newPos),
              this._onDrag(t),
              (this._panRequest = $(this._adjustPan.bind(this, t)));
          }
        },
        _onDragStart: function () {
          (this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire('movestart').fire('dragstart');
        },
        _onPreDrag: function (t) {
          this._marker.options.autoPan &&
            (st(this._panRequest), (this._panRequest = $(this._adjustPan.bind(this, t))));
        },
        _onDrag: function (t) {
          var e = this._marker,
            n = e._shadow,
            i = $t(e._icon),
            o = e._map.layerPointToLatLng(i);
          n && yt(n, i),
            (e._latlng = o),
            (t.latlng = o),
            (t.oldLatLng = this._oldLatLng),
            e.fire('move', t).fire('drag', t);
        },
        _onDragEnd: function (t) {
          st(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire('moveend').fire('dragend', t);
        },
      }),
      ze = Zt.extend({
        options: {
          icon: new xe(),
          interactive: !0,
          keyboard: !0,
          title: '',
          alt: 'Marker',
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: 'markerPane',
          shadowPane: 'shadowPane',
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10,
        },
        initialize: function (t, e) {
          w(this, e), (this._latlng = N(t));
        },
        onAdd: function (t) {
          (this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation),
            this._zoomAnimated && t.on('zoomanim', this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove: function (t) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && t.off('zoomanim', this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents: function () {
          return {zoom: this.update, viewreset: this.update};
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (t) {
          var e = this._latlng;
          return (
            (this._latlng = N(t)),
            this.update(),
            this.fire('move', {oldLatLng: e, latlng: this._latlng})
          );
        },
        setZIndexOffset: function (t) {
          return (this.options.zIndexOffset = t), this.update();
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (t) {
          return (
            (this.options.icon = t),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(t);
          }
          return this;
        },
        _initIcon: function () {
          var t = this.options,
            e = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
            n = t.icon.createIcon(this._icon),
            i = !1;
          n !== this._icon &&
            (this._icon && this._removeIcon(),
            (i = !0),
            t.title && (n.title = t.title),
            n.tagName === 'IMG' && (n.alt = t.alt || '')),
            K(n, e),
            t.keyboard && ((n.tabIndex = '0'), n.setAttribute('role', 'button')),
            (this._icon = n),
            t.riseOnHover &&
              this.on({mouseover: this._bringToFront, mouseout: this._resetZIndex}),
            this.options.autoPanOnFocus && G(n, 'focus', this._panOnFocus, this);
          var o = t.icon.createShadow(this._shadow),
            s = !1;
          o !== this._shadow && (this._removeShadow(), (s = !0)),
            o && (K(o, e), (o.alt = '')),
            (this._shadow = o),
            t.opacity < 1 && this._updateOpacity(),
            i && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({mouseover: this._bringToFront, mouseout: this._resetZIndex}),
            this.options.autoPanOnFocus &&
              lt(this._icon, 'focus', this._panOnFocus, this),
            pt(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null);
        },
        _removeShadow: function () {
          this._shadow && pt(this._shadow), (this._shadow = null);
        },
        _setPos: function (t) {
          this._icon && yt(this._icon, t),
            this._shadow && yt(this._shadow, t),
            (this._zIndex = t.y + this.options.zIndexOffset),
            this._resetZIndex();
        },
        _updateZIndex: function (t) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom: function (t) {
          var e = this._map
            ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
            .round();
          this._setPos(e);
        },
        _initInteraction: function () {
          if (
            this.options.interactive &&
            (K(this._icon, 'leaflet-interactive'),
            this.addInteractiveTarget(this._icon),
            ci)
          ) {
            var t = this.options.draggable;
            this.dragging && ((t = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new ci(this)),
              t && this.dragging.enable();
          }
        },
        setOpacity: function (t) {
          return (this.options.opacity = t), this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function () {
          var t = this.options.opacity;
          this._icon && Bt(this._icon, t), this._shadow && Bt(this._shadow, t);
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var t = this._map;
          if (t) {
            var e = this.options.icon.options,
              n = e.iconSize ? x(e.iconSize) : x(0, 0),
              i = e.iconAnchor ? x(e.iconAnchor) : x(0, 0);
            t.panInside(this._latlng, {
              paddingTopLeft: i,
              paddingBottomRight: n.subtract(i),
            });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        },
      });
    function zo(t, e) {
      return new ze(t, e);
    }
    var qt = Zt.extend({
        options: {
          stroke: !0,
          color: '#3388ff',
          weight: 3,
          opacity: 1,
          lineCap: 'round',
          lineJoin: 'round',
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: 'evenodd',
          interactive: !0,
          bubblingMouseEvents: !0,
        },
        beforeAdd: function (t) {
          this._renderer = t.getRenderer(this);
        },
        onAdd: function () {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function (t) {
          return (
            w(this, t),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                t &&
                Object.prototype.hasOwnProperty.call(t, 'weight') &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          this._project(), this._update();
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        },
      }),
      Ae = qt.extend({
        options: {fill: !0, radius: 10},
        initialize: function (t, e) {
          w(this, e), (this._latlng = N(t)), (this._radius = this.options.radius);
        },
        setLatLng: function (t) {
          var e = this._latlng;
          return (
            (this._latlng = N(t)),
            this.redraw(),
            this.fire('move', {oldLatLng: e, latlng: this._latlng})
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (t) {
          return (this.options.radius = this._radius = t), this.redraw();
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (t) {
          var e = (t && t.radius) || this._radius;
          return qt.prototype.setStyle.call(this, t), this.setRadius(e), this;
        },
        _project: function () {
          (this._point = this._map.latLngToLayerPoint(this._latlng)),
            this._updateBounds();
        },
        _updateBounds: function () {
          var t = this._radius,
            e = this._radiusY || t,
            n = this._clickTolerance(),
            i = [t + n, e + n];
          this._pxBounds = new k(this._point.subtract(i), this._point.add(i));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        _containsPoint: function (t) {
          return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
        },
      });
    function Ao(t, e) {
      return new Ae(t, e);
    }
    var vn = Ae.extend({
      initialize: function (t, e, n) {
        if (
          (typeof e == 'number' && (e = l({}, n, {radius: e})),
          w(this, e),
          (this._latlng = N(t)),
          isNaN(this.options.radius))
        )
          throw new Error('Circle radius cannot be NaN');
        this._mRadius = this.options.radius;
      },
      setRadius: function (t) {
        return (this._mRadius = t), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var t = [this._radius, this._radiusY || this._radius];
        return new J(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: qt.prototype.setStyle,
      _project: function () {
        var t = this._latlng.lng,
          e = this._latlng.lat,
          n = this._map,
          i = n.options.crs;
        if (i.distance === ut.distance) {
          var o = Math.PI / 180,
            s = this._mRadius / ut.R / o,
            r = n.project([e + s, t]),
            d = n.project([e - s, t]),
            h = r.add(d).divideBy(2),
            g = n.unproject(h).lat,
            E =
              Math.acos(
                (Math.cos(s * o) - Math.sin(e * o) * Math.sin(g * o)) /
                  (Math.cos(e * o) * Math.cos(g * o))
              ) / o;
          (isNaN(E) || E === 0) && (E = s / Math.cos((Math.PI / 180) * e)),
            (this._point = h.subtract(n.getPixelOrigin())),
            (this._radius = isNaN(E) ? 0 : h.x - n.project([g, t - E]).x),
            (this._radiusY = h.y - r.y);
        } else {
          var F = i.unproject(i.project(this._latlng).subtract([this._mRadius, 0]));
          (this._point = n.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - n.latLngToLayerPoint(F).x);
        }
        this._updateBounds();
      },
    });
    function Oo(t, e, n) {
      return new vn(t, e, n);
    }
    var Ht = qt.extend({
      options: {smoothFactor: 1, noClip: !1},
      initialize: function (t, e) {
        w(this, e), this._setLatLngs(t);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (t) {
        return this._setLatLngs(t), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (t) {
        for (
          var e = 1 / 0, n = null, i = ye, o, s, r = 0, d = this._parts.length;
          r < d;
          r++
        )
          for (var h = this._parts[r], g = 1, E = h.length; g < E; g++) {
            (o = h[g - 1]), (s = h[g]);
            var F = i(t, o, s, !0);
            F < e && ((e = F), (n = i(t, o, s)));
          }
        return n && (n.distance = Math.sqrt(e)), n;
      },
      getCenter: function () {
        if (!this._map) throw new Error('Must add layer to map before using getCenter()');
        return ri(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (t, e) {
        return (
          (e = e || this._defaultShape()),
          (t = N(t)),
          e.push(t),
          this._bounds.extend(t),
          this.redraw()
        );
      },
      _setLatLngs: function (t) {
        (this._bounds = new J()), (this._latlngs = this._convertLatLngs(t));
      },
      _defaultShape: function () {
        return zt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (t) {
        for (var e = [], n = zt(t), i = 0, o = t.length; i < o; i++)
          n
            ? ((e[i] = N(t[i])), this._bounds.extend(e[i]))
            : (e[i] = this._convertLatLngs(t[i]));
        return e;
      },
      _project: function () {
        var t = new k();
        (this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, t),
          this._bounds.isValid() &&
            t.isValid() &&
            ((this._rawPxBounds = t), this._updateBounds());
      },
      _updateBounds: function () {
        var t = this._clickTolerance(),
          e = new T(t, t);
        this._rawPxBounds &&
          (this._pxBounds = new k([
            this._rawPxBounds.min.subtract(e),
            this._rawPxBounds.max.add(e),
          ]));
      },
      _projectLatlngs: function (t, e, n) {
        var i = t[0] instanceof H,
          o = t.length,
          s,
          r;
        if (i) {
          for (r = [], s = 0; s < o; s++)
            (r[s] = this._map.latLngToLayerPoint(t[s])), n.extend(r[s]);
          e.push(r);
        } else for (s = 0; s < o; s++) this._projectLatlngs(t[s], e, n);
      },
      _clipPoints: function () {
        var t = this._renderer._bounds;
        if (((this._parts = []), !(!this._pxBounds || !this._pxBounds.intersects(t)))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts,
            n,
            i,
            o,
            s,
            r,
            d,
            h;
          for (n = 0, o = 0, s = this._rings.length; n < s; n++)
            for (h = this._rings[n], i = 0, r = h.length; i < r - 1; i++)
              (d = si(h[i], h[i + 1], t, i, !0)),
                d &&
                  ((e[o] = e[o] || []),
                  e[o].push(d[0]),
                  (d[1] !== h[i + 1] || i === r - 2) && (e[o].push(d[1]), o++));
        }
      },
      _simplifyPoints: function () {
        for (
          var t = this._parts, e = this.options.smoothFactor, n = 0, i = t.length;
          n < i;
          n++
        )
          t[n] = ni(t[n], e);
      },
      _update: function () {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (t, e) {
        var n,
          i,
          o,
          s,
          r,
          d,
          h = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (n = 0, s = this._parts.length; n < s; n++)
          for (d = this._parts[n], i = 0, r = d.length, o = r - 1; i < r; o = i++)
            if (!(!e && i === 0) && ii(t, d[o], d[i]) <= h) return !0;
        return !1;
      },
    });
    function Zo(t, e) {
      return new Ht(t, e);
    }
    Ht._flat = ai;
    var ae = Ht.extend({
      options: {fill: !0},
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map) throw new Error('Must add layer to map before using getCenter()');
        return ei(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function (t) {
        var e = Ht.prototype._convertLatLngs.call(this, t),
          n = e.length;
        return n >= 2 && e[0] instanceof H && e[0].equals(e[n - 1]) && e.pop(), e;
      },
      _setLatLngs: function (t) {
        Ht.prototype._setLatLngs.call(this, t),
          zt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return zt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var t = this._renderer._bounds,
          e = this.options.weight,
          n = new T(e, e);
        if (
          ((t = new k(t.min.subtract(n), t.max.add(n))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(t)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var i = 0, o = this._rings.length, s; i < o; i++)
            (s = ti(this._rings[i], t, !0)), s.length && this._parts.push(s);
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (t) {
        var e = !1,
          n,
          i,
          o,
          s,
          r,
          d,
          h,
          g;
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (s = 0, h = this._parts.length; s < h; s++)
          for (n = this._parts[s], r = 0, g = n.length, d = g - 1; r < g; d = r++)
            (i = n[r]),
              (o = n[d]),
              i.y > t.y != o.y > t.y &&
                t.x < ((o.x - i.x) * (t.y - i.y)) / (o.y - i.y) + i.x &&
                (e = !e);
        return e || Ht.prototype._containsPoint.call(this, t, !0);
      },
    });
    function Ro(t, e) {
      return new ae(t, e);
    }
    var Vt = Ft.extend({
      initialize: function (t, e) {
        w(this, e), (this._layers = {}), t && this.addData(t);
      },
      addData: function (t) {
        var e = O(t) ? t : t.features,
          n,
          i,
          o;
        if (e) {
          for (n = 0, i = e.length; n < i; n++)
            (o = e[n]),
              (o.geometries || o.geometry || o.features || o.coordinates) &&
                this.addData(o);
          return this;
        }
        var s = this.options;
        if (s.filter && !s.filter(t)) return this;
        var r = Oe(t, s);
        return r
          ? ((r.feature = De(t)),
            (r.defaultOptions = r.options),
            this.resetStyle(r),
            s.onEachFeature && s.onEachFeature(t, r),
            this.addLayer(r))
          : this;
      },
      resetStyle: function (t) {
        return t === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((t.options = l({}, t.defaultOptions)),
            this._setLayerStyle(t, this.options.style),
            this);
      },
      setStyle: function (t) {
        return this.eachLayer(function (e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function (t, e) {
        t.setStyle && (typeof e == 'function' && (e = e(t.feature)), t.setStyle(e));
      },
    });
    function Oe(t, e) {
      var n = t.type === 'Feature' ? t.geometry : t,
        i = n ? n.coordinates : null,
        o = [],
        s = e && e.pointToLayer,
        r = (e && e.coordsToLatLng) || yn,
        d,
        h,
        g,
        E;
      if (!i && !n) return null;
      switch (n.type) {
        case 'Point':
          return (d = r(i)), di(s, t, d, e);
        case 'MultiPoint':
          for (g = 0, E = i.length; g < E; g++) (d = r(i[g])), o.push(di(s, t, d, e));
          return new Ft(o);
        case 'LineString':
        case 'MultiLineString':
          return (h = Ze(i, n.type === 'LineString' ? 0 : 1, r)), new Ht(h, e);
        case 'Polygon':
        case 'MultiPolygon':
          return (h = Ze(i, n.type === 'Polygon' ? 1 : 2, r)), new ae(h, e);
        case 'GeometryCollection':
          for (g = 0, E = n.geometries.length; g < E; g++) {
            var F = Oe(
              {geometry: n.geometries[g], type: 'Feature', properties: t.properties},
              e
            );
            F && o.push(F);
          }
          return new Ft(o);
        case 'FeatureCollection':
          for (g = 0, E = n.features.length; g < E; g++) {
            var Y = Oe(n.features[g], e);
            Y && o.push(Y);
          }
          return new Ft(o);
        default:
          throw new Error('Invalid GeoJSON object.');
      }
    }
    function di(t, e, n, i) {
      return t ? t(e, n) : new ze(n, i && i.markersInheritOptions && i);
    }
    function yn(t) {
      return new H(t[1], t[0], t[2]);
    }
    function Ze(t, e, n) {
      for (var i = [], o = 0, s = t.length, r; o < s; o++)
        (r = e ? Ze(t[o], e - 1, n) : (n || yn)(t[o])), i.push(r);
      return i;
    }
    function xn(t, e) {
      return (
        (t = N(t)),
        t.alt !== void 0
          ? [P(t.lng, e), P(t.lat, e), P(t.alt, e)]
          : [P(t.lng, e), P(t.lat, e)]
      );
    }
    function Re(t, e, n, i) {
      for (var o = [], s = 0, r = t.length; s < r; s++)
        o.push(e ? Re(t[s], zt(t[s]) ? 0 : e - 1, n, i) : xn(t[s], i));
      return !e && n && o.length > 0 && o.push(o[0].slice()), o;
    }
    function re(t, e) {
      return t.feature ? l({}, t.feature, {geometry: e}) : De(e);
    }
    function De(t) {
      return t.type === 'Feature' || t.type === 'FeatureCollection'
        ? t
        : {type: 'Feature', properties: {}, geometry: t};
    }
    var bn = {
      toGeoJSON: function (t) {
        return re(this, {type: 'Point', coordinates: xn(this.getLatLng(), t)});
      },
    };
    ze.include(bn),
      vn.include(bn),
      Ae.include(bn),
      Ht.include({
        toGeoJSON: function (t) {
          var e = !zt(this._latlngs),
            n = Re(this._latlngs, e ? 1 : 0, !1, t);
          return re(this, {type: (e ? 'Multi' : '') + 'LineString', coordinates: n});
        },
      }),
      ae.include({
        toGeoJSON: function (t) {
          var e = !zt(this._latlngs),
            n = e && !zt(this._latlngs[0]),
            i = Re(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
          return (
            e || (i = [i]),
            re(this, {type: (n ? 'Multi' : '') + 'Polygon', coordinates: i})
          );
        },
      }),
      oe.include({
        toMultiPoint: function (t) {
          var e = [];
          return (
            this.eachLayer(function (n) {
              e.push(n.toGeoJSON(t).geometry.coordinates);
            }),
            re(this, {type: 'MultiPoint', coordinates: e})
          );
        },
        toGeoJSON: function (t) {
          var e = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (e === 'MultiPoint') return this.toMultiPoint(t);
          var n = e === 'GeometryCollection',
            i = [];
          return (
            this.eachLayer(function (o) {
              if (o.toGeoJSON) {
                var s = o.toGeoJSON(t);
                if (n) i.push(s.geometry);
                else {
                  var r = De(s);
                  r.type === 'FeatureCollection'
                    ? i.push.apply(i, r.features)
                    : i.push(r);
                }
              }
            }),
            n
              ? re(this, {geometries: i, type: 'GeometryCollection'})
              : {type: 'FeatureCollection', features: i}
          );
        },
      });
    function ui(t, e) {
      return new Vt(t, e);
    }
    var Do = ui,
      Ne = Zt.extend({
        options: {
          opacity: 1,
          alt: '',
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: '',
          zIndex: 1,
          className: '',
        },
        initialize: function (t, e, n) {
          (this._url = t), (this._bounds = X(e)), w(this, n);
        },
        onAdd: function () {
          this._image ||
            (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (K(this._image, 'leaflet-interactive'),
              this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove: function () {
          pt(this._image),
            this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        setOpacity: function (t) {
          return (this.options.opacity = t), this._image && this._updateOpacity(), this;
        },
        setStyle: function (t) {
          return t.opacity && this.setOpacity(t.opacity), this;
        },
        bringToFront: function () {
          return this._map && ne(this._image), this;
        },
        bringToBack: function () {
          return this._map && ie(this._image), this;
        },
        setUrl: function (t) {
          return (this._url = t), this._image && (this._image.src = t), this;
        },
        setBounds: function (t) {
          return (this._bounds = X(t)), this._map && this._reset(), this;
        },
        getEvents: function () {
          var t = {zoom: this._reset, viewreset: this._reset};
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        setZIndex: function (t) {
          return (this.options.zIndex = t), this._updateZIndex(), this;
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var t = this._url.tagName === 'IMG',
            e = (this._image = t ? this._url : ot('img'));
          if (
            (K(e, 'leaflet-image-layer'),
            this._zoomAnimated && K(e, 'leaflet-zoom-animated'),
            this.options.className && K(e, this.options.className),
            (e.onselectstart = y),
            (e.onmousemove = y),
            (e.onload = m(this.fire, this, 'load')),
            (e.onerror = m(this._overlayOnError, this, 'error')),
            (this.options.crossOrigin || this.options.crossOrigin === '') &&
              (e.crossOrigin =
                this.options.crossOrigin === !0 ? '' : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            t)
          ) {
            this._url = e.src;
            return;
          }
          (e.src = this._url), (e.alt = this.options.alt);
        },
        _animateZoom: function (t) {
          var e = this._map.getZoomScale(t.zoom),
            n = this._map._latLngBoundsToNewLayerBounds(
              this._bounds,
              t.zoom,
              t.center
            ).min;
          Yt(this._image, n, e);
        },
        _reset: function () {
          var t = this._image,
            e = new k(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ),
            n = e.getSize();
          yt(t, e.min), (t.style.width = n.x + 'px'), (t.style.height = n.y + 'px');
        },
        _updateOpacity: function () {
          Bt(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire('error');
          var t = this.options.errorOverlayUrl;
          t && this._url !== t && ((this._url = t), (this._image.src = t));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        },
      }),
      No = function (t, e, n) {
        return new Ne(t, e, n);
      },
      hi = Ne.extend({
        options: {
          autoplay: !0,
          loop: !0,
          keepAspectRatio: !0,
          muted: !1,
          playsInline: !0,
        },
        _initImage: function () {
          var t = this._url.tagName === 'VIDEO',
            e = (this._image = t ? this._url : ot('video'));
          if (
            (K(e, 'leaflet-image-layer'),
            this._zoomAnimated && K(e, 'leaflet-zoom-animated'),
            this.options.className && K(e, this.options.className),
            (e.onselectstart = y),
            (e.onmousemove = y),
            (e.onloadeddata = m(this.fire, this, 'load')),
            t)
          ) {
            for (
              var n = e.getElementsByTagName('source'), i = [], o = 0;
              o < n.length;
              o++
            )
              i.push(n[o].src);
            this._url = n.length > 0 ? i : [e.src];
            return;
          }
          O(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(e.style, 'objectFit') &&
              (e.style.objectFit = 'fill'),
            (e.autoplay = !!this.options.autoplay),
            (e.loop = !!this.options.loop),
            (e.muted = !!this.options.muted),
            (e.playsInline = !!this.options.playsInline);
          for (var s = 0; s < this._url.length; s++) {
            var r = ot('source');
            (r.src = this._url[s]), e.appendChild(r);
          }
        },
      });
    function jo(t, e, n) {
      return new hi(t, e, n);
    }
    var mi = Ne.extend({
      _initImage: function () {
        var t = (this._image = this._url);
        K(t, 'leaflet-image-layer'),
          this._zoomAnimated && K(t, 'leaflet-zoom-animated'),
          this.options.className && K(t, this.options.className),
          (t.onselectstart = y),
          (t.onmousemove = y);
      },
    });
    function Fo(t, e, n) {
      return new mi(t, e, n);
    }
    var jt = Zt.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: '',
        pane: void 0,
        content: '',
      },
      initialize: function (t, e) {
        t && (t instanceof H || O(t))
          ? ((this._latlng = N(t)), w(this, e))
          : (w(this, t), (this._source = e)),
          this.options.content && (this._content = this.options.content);
      },
      openOn: function (t) {
        return (
          (t = arguments.length ? t : this._source._map),
          t.hasLayer(this) || t.addLayer(this),
          this
        );
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function (t) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = t) : (t = this._source),
              this._prepareOpen(),
              this.openOn(t._map)),
          this
        );
      },
      onAdd: function (t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && Bt(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && Bt(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (K(this._container, 'leaflet-interactive'),
            this.addInteractiveTarget(this._container));
      },
      onRemove: function (t) {
        t._fadeAnimated
          ? (Bt(this._container, 0),
            (this._removeTimeout = setTimeout(m(pt, void 0, this._container), 200)))
          : pt(this._container),
          this.options.interactive &&
            (vt(this._container, 'leaflet-interactive'),
            this.removeInteractiveTarget(this._container));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        return (
          (this._latlng = N(t)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = 'hidden'),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ''),
          this._adjustPan());
      },
      getEvents: function () {
        var t = {zoom: this._updatePosition, viewreset: this._updatePosition};
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && ne(this._container), this;
      },
      bringToBack: function () {
        return this._map && ie(this._container), this;
      },
      _prepareOpen: function (t) {
        var e = this._source;
        if (!e._map) return !1;
        if (e instanceof Ft) {
          e = null;
          var n = this._source._layers;
          for (var i in n)
            if (n[i]._map) {
              e = n[i];
              break;
            }
          if (!e) return !1;
          this._source = e;
        }
        if (!t)
          if (e.getCenter) t = e.getCenter();
          else if (e.getLatLng) t = e.getLatLng();
          else if (e.getBounds) t = e.getBounds().getCenter();
          else throw new Error('Unable to get source layer LatLng.');
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function () {
        if (this._content) {
          var t = this._contentNode,
            e =
              typeof this._content == 'function'
                ? this._content(this._source || this)
                : this._content;
          if (typeof e == 'string') t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire('contentupdate');
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng),
            e = x(this.options.offset),
            n = this._getAnchor();
          this._zoomAnimated ? yt(this._container, t.add(n)) : (e = e.add(t).add(n));
          var i = (this._containerBottom = -e.y),
            o = (this._containerLeft = -Math.round(this._containerWidth / 2) + e.x);
          (this._container.style.bottom = i + 'px'),
            (this._container.style.left = o + 'px');
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    });
    nt.include({
      _initOverlay: function (t, e, n, i) {
        var o = e;
        return o instanceof t || (o = new t(i).setContent(e)), n && o.setLatLng(n), o;
      },
    }),
      Zt.include({
        _initOverlay: function (t, e, n, i) {
          var o = n;
          return (
            o instanceof t
              ? (w(o, i), (o._source = this))
              : ((o = e && !i ? e : new t(i, this)), o.setContent(n)),
            o
          );
        },
      });
    var je = jt.extend({
        options: {
          pane: 'popupPane',
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: '',
        },
        openOn: function (t) {
          return (
            (t = arguments.length ? t : this._source._map),
            !t.hasLayer(this) &&
              t._popup &&
              t._popup.options.autoClose &&
              t.removeLayer(t._popup),
            (t._popup = this),
            jt.prototype.openOn.call(this, t)
          );
        },
        onAdd: function (t) {
          jt.prototype.onAdd.call(this, t),
            t.fire('popupopen', {popup: this}),
            this._source &&
              (this._source.fire('popupopen', {popup: this}, !0),
              this._source instanceof qt || this._source.on('preclick', Jt));
        },
        onRemove: function (t) {
          jt.prototype.onRemove.call(this, t),
            t.fire('popupclose', {popup: this}),
            this._source &&
              (this._source.fire('popupclose', {popup: this}, !0),
              this._source instanceof qt || this._source.off('preclick', Jt));
        },
        getEvents: function () {
          var t = jt.prototype.getEvents.call(this);
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) && (t.preclick = this.close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t
          );
        },
        _initLayout: function () {
          var t = 'leaflet-popup',
            e = (this._container = ot(
              'div',
              t + ' ' + (this.options.className || '') + ' leaflet-zoom-animated'
            )),
            n = (this._wrapper = ot('div', t + '-content-wrapper', e));
          if (
            ((this._contentNode = ot('div', t + '-content', n)),
            ge(e),
            dn(this._contentNode),
            G(e, 'contextmenu', Jt),
            (this._tipContainer = ot('div', t + '-tip-container', e)),
            (this._tip = ot('div', t + '-tip', this._tipContainer)),
            this.options.closeButton)
          ) {
            var i = (this._closeButton = ot('a', t + '-close-button', e));
            i.setAttribute('role', 'button'),
              i.setAttribute('aria-label', 'Close popup'),
              (i.href = '#close'),
              (i.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              G(
                i,
                'click',
                function (o) {
                  Ct(o), this.close();
                },
                this
              );
          }
        },
        _updateLayout: function () {
          var t = this._contentNode,
            e = t.style;
          (e.width = ''), (e.whiteSpace = 'nowrap');
          var n = t.offsetWidth;
          (n = Math.min(n, this.options.maxWidth)),
            (n = Math.max(n, this.options.minWidth)),
            (e.width = n + 1 + 'px'),
            (e.whiteSpace = ''),
            (e.height = '');
          var i = t.offsetHeight,
            o = this.options.maxHeight,
            s = 'leaflet-popup-scrolled';
          o && i > o ? ((e.height = o + 'px'), K(t, s)) : vt(t, s),
            (this._containerWidth = this._container.offsetWidth);
        },
        _animateZoom: function (t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
            n = this._getAnchor();
          yt(this._container, e.add(n));
        },
        _adjustPan: function () {
          if (this.options.autoPan) {
            if ((this._map._panAnim && this._map._panAnim.stop(), this._autopanning)) {
              this._autopanning = !1;
              return;
            }
            var t = this._map,
              e = parseInt(me(this._container, 'marginBottom'), 10) || 0,
              n = this._container.offsetHeight + e,
              i = this._containerWidth,
              o = new T(this._containerLeft, -n - this._containerBottom);
            o._add($t(this._container));
            var s = t.layerPointToContainerPoint(o),
              r = x(this.options.autoPanPadding),
              d = x(this.options.autoPanPaddingTopLeft || r),
              h = x(this.options.autoPanPaddingBottomRight || r),
              g = t.getSize(),
              E = 0,
              F = 0;
            s.x + i + h.x > g.x && (E = s.x + i - g.x + h.x),
              s.x - E - d.x < 0 && (E = s.x - d.x),
              s.y + n + h.y > g.y && (F = s.y + n - g.y + h.y),
              s.y - F - d.y < 0 && (F = s.y - d.y),
              (E || F) &&
                (this.options.keepInView && (this._autopanning = !0),
                t.fire('autopanstart').panBy([E, F]));
          }
        },
        _getAnchor: function () {
          return x(
            this._source && this._source._getPopupAnchor
              ? this._source._getPopupAnchor()
              : [0, 0]
          );
        },
      }),
      Ho = function (t, e) {
        return new je(t, e);
      };
    nt.mergeOptions({closePopupOnClick: !0}),
      nt.include({
        openPopup: function (t, e, n) {
          return this._initOverlay(je, t, e, n).openOn(this), this;
        },
        closePopup: function (t) {
          return (t = arguments.length ? t : this._popup), t && t.close(), this;
        },
      }),
      Zt.include({
        bindPopup: function (t, e) {
          return (
            (this._popup = this._initOverlay(je, this._popup, t, e)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (t) {
          return (
            this._popup &&
              (this instanceof Ft || (this._popup._source = this),
              this._popup._prepareOpen(t || this._latlng) &&
                this._popup.openOn(this._map)),
            this
          );
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this;
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this;
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1;
        },
        setPopupContent: function (t) {
          return this._popup && this._popup.setContent(t), this;
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (t) {
          if (!(!this._popup || !this._map)) {
            Xt(t);
            var e = t.layer || t.target;
            if (this._popup._source === e && !(e instanceof qt)) {
              this._map.hasLayer(this._popup)
                ? this.closePopup()
                : this.openPopup(t.latlng);
              return;
            }
            (this._popup._source = e), this.openPopup(t.latlng);
          }
        },
        _movePopup: function (t) {
          this._popup.setLatLng(t.latlng);
        },
        _onKeyPress: function (t) {
          t.originalEvent.keyCode === 13 && this._openPopup(t);
        },
      });
    var Fe = jt.extend({
        options: {
          pane: 'tooltipPane',
          offset: [0, 0],
          direction: 'auto',
          permanent: !1,
          sticky: !1,
          opacity: 0.9,
        },
        onAdd: function (t) {
          jt.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire('tooltipopen', {tooltip: this}),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire('tooltipopen', {tooltip: this}, !0));
        },
        onRemove: function (t) {
          jt.prototype.onRemove.call(this, t),
            t.fire('tooltipclose', {tooltip: this}),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire('tooltipclose', {tooltip: this}, !0));
        },
        getEvents: function () {
          var t = jt.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function () {
          var t = 'leaflet-tooltip',
            e =
              t +
              ' ' +
              (this.options.className || '') +
              ' leaflet-zoom-' +
              (this._zoomAnimated ? 'animated' : 'hide');
          (this._contentNode = this._container = ot('div', e)),
            this._container.setAttribute('role', 'tooltip'),
            this._container.setAttribute('id', 'leaflet-tooltip-' + u(this));
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (t) {
          var e,
            n,
            i = this._map,
            o = this._container,
            s = i.latLngToContainerPoint(i.getCenter()),
            r = i.layerPointToContainerPoint(t),
            d = this.options.direction,
            h = o.offsetWidth,
            g = o.offsetHeight,
            E = x(this.options.offset),
            F = this._getAnchor();
          d === 'top'
            ? ((e = h / 2), (n = g))
            : d === 'bottom'
              ? ((e = h / 2), (n = 0))
              : d === 'center'
                ? ((e = h / 2), (n = g / 2))
                : d === 'right'
                  ? ((e = 0), (n = g / 2))
                  : d === 'left'
                    ? ((e = h), (n = g / 2))
                    : r.x < s.x
                      ? ((d = 'right'), (e = 0), (n = g / 2))
                      : ((d = 'left'), (e = h + (E.x + F.x) * 2), (n = g / 2)),
            (t = t
              .subtract(x(e, n, !0))
              .add(E)
              .add(F)),
            vt(o, 'leaflet-tooltip-right'),
            vt(o, 'leaflet-tooltip-left'),
            vt(o, 'leaflet-tooltip-top'),
            vt(o, 'leaflet-tooltip-bottom'),
            K(o, 'leaflet-tooltip-' + d),
            yt(o, t);
        },
        _updatePosition: function () {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function (t) {
          (this.options.opacity = t), this._container && Bt(this._container, t);
        },
        _animateZoom: function (t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
          this._setPosition(e);
        },
        _getAnchor: function () {
          return x(
            this._source && this._source._getTooltipAnchor && !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0]
          );
        },
      }),
      Vo = function (t, e) {
        return new Fe(t, e);
      };
    nt.include({
      openTooltip: function (t, e, n) {
        return this._initOverlay(Fe, t, e, n).openOn(this), this;
      },
      closeTooltip: function (t) {
        return t.close(), this;
      },
    }),
      Zt.include({
        bindTooltip: function (t, e) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(Fe, this._tooltip, t, e)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0),
              this.closeTooltip(),
              (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (t) {
          if (!(!t && this._tooltipHandlersAdded)) {
            var e = t ? 'off' : 'on',
              n = {remove: this.closeTooltip, move: this._moveTooltip};
            this._tooltip.options.permanent
              ? (n.add = this._openTooltip)
              : ((n.mouseover = this._openTooltip),
                (n.mouseout = this.closeTooltip),
                (n.click = this._openTooltip),
                this._map
                  ? this._addFocusListeners()
                  : (n.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (n.mousemove = this._moveTooltip),
              this[e](n),
              (this._tooltipHandlersAdded = !t);
          }
        },
        openTooltip: function (t) {
          return (
            this._tooltip &&
              (this instanceof Ft || (this._tooltip._source = this),
              this._tooltip._prepareOpen(t) &&
                (this._tooltip.openOn(this._map),
                this.getElement
                  ? this._setAriaDescribedByOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (t) {
          return this._tooltip && this._tooltip.setContent(t), this;
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function (t) {
          var e = typeof t.getElement == 'function' && t.getElement();
          e &&
            (G(
              e,
              'focus',
              function () {
                (this._tooltip._source = t), this.openTooltip();
              },
              this
            ),
            G(e, 'blur', this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function (t) {
          var e = typeof t.getElement == 'function' && t.getElement();
          e && e.setAttribute('aria-describedby', this._tooltip._container.id);
        },
        _openTooltip: function (t) {
          if (!(!this._tooltip || !this._map)) {
            if (
              this._map.dragging &&
              this._map.dragging.moving() &&
              !this._openOnceFlag
            ) {
              this._openOnceFlag = !0;
              var e = this;
              this._map.once('moveend', function () {
                (e._openOnceFlag = !1), e._openTooltip(t);
              });
              return;
            }
            (this._tooltip._source = t.layer || t.target),
              this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
          }
        },
        _moveTooltip: function (t) {
          var e = t.latlng,
            n,
            i;
          this._tooltip.options.sticky &&
            t.originalEvent &&
            ((n = this._map.mouseEventToContainerPoint(t.originalEvent)),
            (i = this._map.containerPointToLayerPoint(n)),
            (e = this._map.layerPointToLatLng(i))),
            this._tooltip.setLatLng(e);
        },
      });
    var fi = se.extend({
      options: {iconSize: [12, 12], html: !1, bgPos: null, className: 'leaflet-div-icon'},
      createIcon: function (t) {
        var e = t && t.tagName === 'DIV' ? t : document.createElement('div'),
          n = this.options;
        if (
          (n.html instanceof Element
            ? (Pe(e), e.appendChild(n.html))
            : (e.innerHTML = n.html !== !1 ? n.html : ''),
          n.bgPos)
        ) {
          var i = x(n.bgPos);
          e.style.backgroundPosition = -i.x + 'px ' + -i.y + 'px';
        }
        return this._setIconStyles(e, 'icon'), e;
      },
      createShadow: function () {
        return null;
      },
    });
    function Wo(t) {
      return new fi(t);
    }
    se.Default = xe;
    var be = Zt.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: A.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: 'tilePane',
        className: '',
        keepBuffer: 2,
      },
      initialize: function (t) {
        w(this, t);
      },
      onAdd: function () {
        this._initContainer(), (this._levels = {}), (this._tiles = {}), this._resetView();
      },
      beforeAdd: function (t) {
        t._addZoomLimit(this);
      },
      onRemove: function (t) {
        this._removeAllTiles(),
          pt(this._container),
          t._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return this._map && (ne(this._container), this._setAutoZIndex(Math.max)), this;
      },
      bringToBack: function () {
        return this._map && (ie(this._container), this._setAutoZIndex(Math.min)), this;
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (t) {
        return (this.options.opacity = t), this._updateOpacity(), this;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && ((this._tileZoom = t), this._updateLevels()),
            this._update();
        }
        return this;
      },
      getEvents: function () {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = I(this._onMoveEnd, this.options.updateInterval, this)),
            (t.move = this._onMove)),
          this._zoomAnimated && (t.zoomanim = this._animateZoom),
          t
        );
      },
      createTile: function () {
        return document.createElement('div');
      },
      getTileSize: function () {
        var t = this.options.tileSize;
        return t instanceof T ? t : new T(t, t);
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (t) {
        for (
          var e = this.getPane().children, n = -t(-1 / 0, 1 / 0), i = 0, o = e.length, s;
          i < o;
          i++
        )
          (s = e[i].style.zIndex), e[i] !== this._container && s && (n = t(n, +s));
        isFinite(n) && ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !A.ielt9) {
          Bt(this._container, this.options.opacity);
          var t = +new Date(),
            e = !1,
            n = !1;
          for (var i in this._tiles) {
            var o = this._tiles[i];
            if (!(!o.current || !o.loaded)) {
              var s = Math.min(1, (t - o.loaded) / 200);
              Bt(o.el, s),
                s < 1
                  ? (e = !0)
                  : (o.active ? (n = !0) : this._onOpaqueTile(o), (o.active = !0));
            }
          }
          n && !this._noPrune && this._pruneTiles(),
            e && (st(this._fadeFrame), (this._fadeFrame = $(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: y,
      _initContainer: function () {
        this._container ||
          ((this._container = ot(
            'div',
            'leaflet-layer ' + (this.options.className || '')
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var t = this._tileZoom,
          e = this.options.maxZoom;
        if (t !== void 0) {
          for (var n in this._levels)
            (n = Number(n)),
              this._levels[n].el.children.length || n === t
                ? ((this._levels[n].el.style.zIndex = e - Math.abs(t - n)),
                  this._onUpdateLevel(n))
                : (pt(this._levels[n].el),
                  this._removeTilesAtZoom(n),
                  this._onRemoveLevel(n),
                  delete this._levels[n]);
          var i = this._levels[t],
            o = this._map;
          return (
            i ||
              ((i = this._levels[t] = {}),
              (i.el = ot(
                'div',
                'leaflet-tile-container leaflet-zoom-animated',
                this._container
              )),
              (i.el.style.zIndex = e),
              (i.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
              (i.zoom = t),
              this._setZoomTransform(i, o.getCenter(), o.getZoom()),
              y(i.el.offsetWidth),
              this._onCreateLevel(i)),
            (this._level = i),
            i
          );
        }
      },
      _onUpdateLevel: y,
      _onRemoveLevel: y,
      _onCreateLevel: y,
      _pruneTiles: function () {
        if (this._map) {
          var t,
            e,
            n = this._map.getZoom();
          if (n > this.options.maxZoom || n < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles) (e = this._tiles[t]), (e.retain = e.current);
          for (t in this._tiles)
            if (((e = this._tiles[t]), e.current && !e.active)) {
              var i = e.coords;
              this._retainParent(i.x, i.y, i.z, i.z - 5) ||
                this._retainChildren(i.x, i.y, i.z, i.z + 2);
            }
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function (t) {
        for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
      },
      _removeAllTiles: function () {
        for (var t in this._tiles) this._removeTile(t);
      },
      _invalidateAll: function () {
        for (var t in this._levels)
          pt(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (t, e, n, i) {
        var o = Math.floor(t / 2),
          s = Math.floor(e / 2),
          r = n - 1,
          d = new T(+o, +s);
        d.z = +r;
        var h = this._tileCoordsToKey(d),
          g = this._tiles[h];
        return g && g.active
          ? ((g.retain = !0), !0)
          : (g && g.loaded && (g.retain = !0),
            r > i ? this._retainParent(o, s, r, i) : !1);
      },
      _retainChildren: function (t, e, n, i) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var s = 2 * e; s < 2 * e + 2; s++) {
            var r = new T(o, s);
            r.z = n + 1;
            var d = this._tileCoordsToKey(r),
              h = this._tiles[d];
            if (h && h.active) {
              h.retain = !0;
              continue;
            } else h && h.loaded && (h.retain = !0);
            n + 1 < i && this._retainChildren(o, s, n + 1, i);
          }
      },
      _resetView: function (t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      },
      _animateZoom: function (t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function (t) {
        var e = this.options;
        return e.minNativeZoom !== void 0 && t < e.minNativeZoom
          ? e.minNativeZoom
          : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t
            ? e.maxNativeZoom
            : t;
      },
      _setView: function (t, e, n, i) {
        var o = Math.round(e);
        (this.options.maxZoom !== void 0 && o > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && o < this.options.minZoom)
          ? (o = void 0)
          : (o = this._clampZoom(o));
        var s = this.options.updateWhenZooming && o !== this._tileZoom;
        (!i || s) &&
          ((this._tileZoom = o),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          o !== void 0 && this._update(t),
          n || this._pruneTiles(),
          (this._noPrune = !!n)),
          this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function (t, e) {
        for (var n in this._levels) this._setZoomTransform(this._levels[n], t, e);
      },
      _setZoomTransform: function (t, e, n) {
        var i = this._map.getZoomScale(n, t.zoom),
          o = t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e, n)).round();
        A.any3d ? Yt(t.el, o, i) : yt(t.el, o);
      },
      _resetGrid: function () {
        var t = this._map,
          e = t.options.crs,
          n = (this._tileSize = this.getTileSize()),
          i = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
          (this._wrapX = e.wrapLng &&
            !this.options.noWrap && [
              Math.floor(t.project([0, e.wrapLng[0]], i).x / n.x),
              Math.ceil(t.project([0, e.wrapLng[1]], i).x / n.y),
            ]),
          (this._wrapY = e.wrapLat &&
            !this.options.noWrap && [
              Math.floor(t.project([e.wrapLat[0], 0], i).y / n.x),
              Math.ceil(t.project([e.wrapLat[1], 0], i).y / n.y),
            ]);
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function (t) {
        var e = this._map,
          n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
          i = e.getZoomScale(n, this._tileZoom),
          o = e.project(t, this._tileZoom).floor(),
          s = e.getSize().divideBy(i * 2);
        return new k(o.subtract(s), o.add(s));
      },
      _update: function (t) {
        var e = this._map;
        if (e) {
          var n = this._clampZoom(e.getZoom());
          if ((t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0)) {
            var i = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(i),
              s = o.getCenter(),
              r = [],
              d = this.options.keepBuffer,
              h = new k(
                o.getBottomLeft().subtract([d, -d]),
                o.getTopRight().add([d, -d])
              );
            if (
              !(
                isFinite(o.min.x) &&
                isFinite(o.min.y) &&
                isFinite(o.max.x) &&
                isFinite(o.max.y)
              )
            )
              throw new Error('Attempted to load an infinite number of tiles');
            for (var g in this._tiles) {
              var E = this._tiles[g].coords;
              (E.z !== this._tileZoom || !h.contains(new T(E.x, E.y))) &&
                (this._tiles[g].current = !1);
            }
            if (Math.abs(n - this._tileZoom) > 1) {
              this._setView(t, n);
              return;
            }
            for (var F = o.min.y; F <= o.max.y; F++)
              for (var Y = o.min.x; Y <= o.max.x; Y++) {
                var Tt = new T(Y, F);
                if (((Tt.z = this._tileZoom), !!this._isValidTile(Tt))) {
                  var Lt = this._tiles[this._tileCoordsToKey(Tt)];
                  Lt ? (Lt.current = !0) : r.push(Tt);
                }
              }
            if (
              (r.sort(function (St, ce) {
                return St.distanceTo(s) - ce.distanceTo(s);
              }),
              r.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire('loading'));
              var At = document.createDocumentFragment();
              for (Y = 0; Y < r.length; Y++) this._addTile(r[Y], At);
              this._level.el.appendChild(At);
            }
          }
        }
      },
      _isValidTile: function (t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var n = this._globalTileRange;
          if (
            (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x)) ||
            (!e.wrapLat && (t.y < n.min.y || t.y > n.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var i = this._tileCoordsToBounds(t);
        return X(this.options.bounds).overlaps(i);
      },
      _keyToBounds: function (t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function (t) {
        var e = this._map,
          n = this.getTileSize(),
          i = t.scaleBy(n),
          o = i.add(n),
          s = e.unproject(i, t.z),
          r = e.unproject(o, t.z);
        return [s, r];
      },
      _tileCoordsToBounds: function (t) {
        var e = this._tileCoordsToNwSe(t),
          n = new J(e[0], e[1]);
        return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n;
      },
      _tileCoordsToKey: function (t) {
        return t.x + ':' + t.y + ':' + t.z;
      },
      _keyToTileCoords: function (t) {
        var e = t.split(':'),
          n = new T(+e[0], +e[1]);
        return (n.z = +e[2]), n;
      },
      _removeTile: function (t) {
        var e = this._tiles[t];
        e &&
          (pt(e.el),
          delete this._tiles[t],
          this.fire('tileunload', {tile: e.el, coords: this._keyToTileCoords(t)}));
      },
      _initTile: function (t) {
        K(t, 'leaflet-tile');
        var e = this.getTileSize();
        (t.style.width = e.x + 'px'),
          (t.style.height = e.y + 'px'),
          (t.onselectstart = y),
          (t.onmousemove = y),
          A.ielt9 && this.options.opacity < 1 && Bt(t, this.options.opacity);
      },
      _addTile: function (t, e) {
        var n = this._getTilePos(t),
          i = this._tileCoordsToKey(t),
          o = this.createTile(this._wrapCoords(t), m(this._tileReady, this, t));
        this._initTile(o),
          this.createTile.length < 2 && $(m(this._tileReady, this, t, null, o)),
          yt(o, n),
          (this._tiles[i] = {el: o, coords: t, current: !0}),
          e.appendChild(o),
          this.fire('tileloadstart', {tile: o, coords: t});
      },
      _tileReady: function (t, e, n) {
        e && this.fire('tileerror', {error: e, tile: n, coords: t});
        var i = this._tileCoordsToKey(t);
        (n = this._tiles[i]),
          n &&
            ((n.loaded = +new Date()),
            this._map._fadeAnimated
              ? (Bt(n.el, 0),
                st(this._fadeFrame),
                (this._fadeFrame = $(this._updateOpacity, this)))
              : ((n.active = !0), this._pruneTiles()),
            e ||
              (K(n.el, 'leaflet-tile-loaded'),
              this.fire('tileload', {tile: n.el, coords: t})),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire('load'),
              A.ielt9 || !this._map._fadeAnimated
                ? $(this._pruneTiles, this)
                : setTimeout(m(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (t) {
        var e = new T(
          this._wrapX ? C(t.x, this._wrapX) : t.x,
          this._wrapY ? C(t.y, this._wrapY) : t.y
        );
        return (e.z = t.z), e;
      },
      _pxBoundsToTileRange: function (t) {
        var e = this.getTileSize();
        return new k(
          t.min.unscaleBy(e).floor(),
          t.max.unscaleBy(e).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function () {
        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
        return !0;
      },
    });
    function Uo(t) {
      return new be(t);
    }
    var le = be.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: 'abc',
        errorTileUrl: '',
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1,
      },
      initialize: function (t, e) {
        (this._url = t),
          (e = w(this, e)),
          e.detectRetina && A.retina && e.maxZoom > 0
            ? ((e.tileSize = Math.floor(e.tileSize / 2)),
              e.zoomReverse
                ? (e.zoomOffset--, (e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)))
                : (e.zoomOffset++, (e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1))),
              (e.minZoom = Math.max(0, e.minZoom)))
            : e.zoomReverse
              ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
              : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
          typeof e.subdomains == 'string' && (e.subdomains = e.subdomains.split('')),
          this.on('tileunload', this._onTileRemove);
      },
      setUrl: function (t, e) {
        return (
          this._url === t && e === void 0 && (e = !0),
          (this._url = t),
          e || this.redraw(),
          this
        );
      },
      createTile: function (t, e) {
        var n = document.createElement('img');
        return (
          G(n, 'load', m(this._tileOnLoad, this, e, n)),
          G(n, 'error', m(this._tileOnError, this, e, n)),
          (this.options.crossOrigin || this.options.crossOrigin === '') &&
            (n.crossOrigin =
              this.options.crossOrigin === !0 ? '' : this.options.crossOrigin),
          typeof this.options.referrerPolicy == 'string' &&
            (n.referrerPolicy = this.options.referrerPolicy),
          (n.alt = ''),
          (n.src = this.getTileUrl(t)),
          n
        );
      },
      getTileUrl: function (t) {
        var e = {
          r: A.retina ? '@2x' : '',
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var n = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = n), (e['-y'] = n);
        }
        return B(this._url, l(e, this.options));
      },
      _tileOnLoad: function (t, e) {
        A.ielt9 ? setTimeout(m(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function (t, e, n) {
        var i = this.options.errorTileUrl;
        i && e.getAttribute('src') !== i && (e.src = i), t(n, e);
      },
      _onTileRemove: function (t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var t = this._tileZoom,
          e = this.options.maxZoom,
          n = this.options.zoomReverse,
          i = this.options.zoomOffset;
        return n && (t = e - t), t + i;
      },
      _getSubdomain: function (t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      _abortLoading: function () {
        var t, e;
        for (t in this._tiles)
          if (
            this._tiles[t].coords.z !== this._tileZoom &&
            ((e = this._tiles[t].el), (e.onload = y), (e.onerror = y), !e.complete)
          ) {
            e.src = Z;
            var n = this._tiles[t].coords;
            pt(e), delete this._tiles[t], this.fire('tileabort', {tile: e, coords: n});
          }
      },
      _removeTile: function (t) {
        var e = this._tiles[t];
        if (e) return e.el.setAttribute('src', Z), be.prototype._removeTile.call(this, t);
      },
      _tileReady: function (t, e, n) {
        if (!(!this._map || (n && n.getAttribute('src') === Z)))
          return be.prototype._tileReady.call(this, t, e, n);
      },
    });
    function pi(t, e) {
      return new le(t, e);
    }
    var _i = le.extend({
      defaultWmsParams: {
        service: 'WMS',
        request: 'GetMap',
        layers: '',
        styles: '',
        format: 'image/jpeg',
        transparent: !1,
        version: '1.1.1',
      },
      options: {crs: null, uppercase: !1},
      initialize: function (t, e) {
        this._url = t;
        var n = l({}, this.defaultWmsParams);
        for (var i in e) i in this.options || (n[i] = e[i]);
        e = w(this, e);
        var o = e.detectRetina && A.retina ? 2 : 1,
          s = this.getTileSize();
        (n.width = s.x * o), (n.height = s.y * o), (this.wmsParams = n);
      },
      onAdd: function (t) {
        (this._crs = this.options.crs || t.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var e = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
        (this.wmsParams[e] = this._crs.code), le.prototype.onAdd.call(this, t);
      },
      getTileUrl: function (t) {
        var e = this._tileCoordsToNwSe(t),
          n = this._crs,
          i = W(n.project(e[0]), n.project(e[1])),
          o = i.min,
          s = i.max,
          r = (
            this._wmsVersion >= 1.3 && this._crs === li
              ? [o.y, o.x, s.y, s.x]
              : [o.x, o.y, s.x, s.y]
          ).join(','),
          d = le.prototype.getTileUrl.call(this, t);
        return (
          d +
          M(this.wmsParams, d, this.options.uppercase) +
          (this.options.uppercase ? '&BBOX=' : '&bbox=') +
          r
        );
      },
      setParams: function (t, e) {
        return l(this.wmsParams, t), e || this.redraw(), this;
      },
    });
    function Go(t, e) {
      return new _i(t, e);
    }
    (le.WMS = _i), (pi.wms = Go);
    var Wt = Zt.extend({
        options: {padding: 0.1},
        initialize: function (t) {
          w(this, t), u(this), (this._layers = this._layers || {});
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(), K(this._container, 'leaflet-zoom-animated')),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on('update', this._updatePaths, this);
        },
        onRemove: function () {
          this.off('update', this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function () {
          var t = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd,
          };
          return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
        },
        _onAnimZoom: function (t) {
          this._updateTransform(t.center, t.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (t, e) {
          var n = this._map.getZoomScale(e, this._zoom),
            i = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            o = this._map.project(this._center, e),
            s = i.multiplyBy(-n).add(o).subtract(this._map._getNewPixelOrigin(t, e));
          A.any3d ? Yt(this._container, s, n) : yt(this._container, s);
        },
        _reset: function () {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var t in this._layers) this._layers[t]._reset();
        },
        _onZoomEnd: function () {
          for (var t in this._layers) this._layers[t]._project();
        },
        _updatePaths: function () {
          for (var t in this._layers) this._layers[t]._update();
        },
        _update: function () {
          var t = this.options.padding,
            e = this._map.getSize(),
            n = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
          (this._bounds = new k(n, n.add(e.multiplyBy(1 + t * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom());
        },
      }),
      gi = Wt.extend({
        options: {tolerance: 0},
        getEvents: function () {
          var t = Wt.prototype.getEvents.call(this);
          return (t.viewprereset = this._onViewPreReset), t;
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          Wt.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function () {
          var t = (this._container = document.createElement('canvas'));
          G(t, 'mousemove', this._onMouseMove, this),
            G(t, 'click dblclick mousedown mouseup contextmenu', this._onClick, this),
            G(t, 'mouseout', this._handleMouseOut, this),
            (t._leaflet_disable_events = !0),
            (this._ctx = t.getContext('2d'));
        },
        _destroyContainer: function () {
          st(this._redrawRequest),
            delete this._ctx,
            pt(this._container),
            lt(this._container),
            delete this._container;
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var t;
            this._redrawBounds = null;
            for (var e in this._layers) (t = this._layers[e]), t._update();
            this._redraw();
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            Wt.prototype._update.call(this);
            var t = this._bounds,
              e = this._container,
              n = t.getSize(),
              i = A.retina ? 2 : 1;
            yt(e, t.min),
              (e.width = i * n.x),
              (e.height = i * n.y),
              (e.style.width = n.x + 'px'),
              (e.style.height = n.y + 'px'),
              A.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-t.min.x, -t.min.y),
              this.fire('update');
          }
        },
        _reset: function () {
          Wt.prototype._reset.call(this),
            this._postponeUpdatePaths &&
              ((this._postponeUpdatePaths = !1), this._updatePaths());
        },
        _initPath: function (t) {
          this._updateDashArray(t), (this._layers[u(t)] = t);
          var e = (t._order = {layer: t, prev: this._drawLast, next: null});
          this._drawLast && (this._drawLast.next = e),
            (this._drawLast = e),
            (this._drawFirst = this._drawFirst || this._drawLast);
        },
        _addPath: function (t) {
          this._requestRedraw(t);
        },
        _removePath: function (t) {
          var e = t._order,
            n = e.next,
            i = e.prev;
          n ? (n.prev = i) : (this._drawLast = i),
            i ? (i.next = n) : (this._drawFirst = n),
            delete t._order,
            delete this._layers[u(t)],
            this._requestRedraw(t);
        },
        _updatePath: function (t) {
          this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
        },
        _updateStyle: function (t) {
          this._updateDashArray(t), this._requestRedraw(t);
        },
        _updateDashArray: function (t) {
          if (typeof t.options.dashArray == 'string') {
            var e = t.options.dashArray.split(/[, ]+/),
              n = [],
              i,
              o;
            for (o = 0; o < e.length; o++) {
              if (((i = Number(e[o])), isNaN(i))) return;
              n.push(i);
            }
            t.options._dashArray = n;
          } else t.options._dashArray = t.options.dashArray;
        },
        _requestRedraw: function (t) {
          this._map &&
            (this._extendRedrawBounds(t),
            (this._redrawRequest = this._redrawRequest || $(this._redraw, this)));
        },
        _extendRedrawBounds: function (t) {
          if (t._pxBounds) {
            var e = (t.options.weight || 0) + 1;
            (this._redrawBounds = this._redrawBounds || new k()),
              this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
              this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
          }
        },
        _redraw: function () {
          (this._redrawRequest = null),
            this._redrawBounds &&
              (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null);
        },
        _clear: function () {
          var t = this._redrawBounds;
          if (t) {
            var e = t.getSize();
            this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(0, 0, this._container.width, this._container.height),
              this._ctx.restore();
        },
        _draw: function () {
          var t,
            e = this._redrawBounds;
          if ((this._ctx.save(), e)) {
            var n = e.getSize();
            this._ctx.beginPath(),
              this._ctx.rect(e.min.x, e.min.y, n.x, n.y),
              this._ctx.clip();
          }
          this._drawing = !0;
          for (var i = this._drawFirst; i; i = i.next)
            (t = i.layer),
              (!e || (t._pxBounds && t._pxBounds.intersects(e))) && t._updatePath();
          (this._drawing = !1), this._ctx.restore();
        },
        _updatePoly: function (t, e) {
          if (this._drawing) {
            var n,
              i,
              o,
              s,
              r = t._parts,
              d = r.length,
              h = this._ctx;
            if (d) {
              for (h.beginPath(), n = 0; n < d; n++) {
                for (i = 0, o = r[n].length; i < o; i++)
                  (s = r[n][i]), h[i ? 'lineTo' : 'moveTo'](s.x, s.y);
                e && h.closePath();
              }
              this._fillStroke(h, t);
            }
          }
        },
        _updateCircle: function (t) {
          if (!(!this._drawing || t._empty())) {
            var e = t._point,
              n = this._ctx,
              i = Math.max(Math.round(t._radius), 1),
              o = (Math.max(Math.round(t._radiusY), 1) || i) / i;
            o !== 1 && (n.save(), n.scale(1, o)),
              n.beginPath(),
              n.arc(e.x, e.y / o, i, 0, Math.PI * 2, !1),
              o !== 1 && n.restore(),
              this._fillStroke(n, t);
          }
        },
        _fillStroke: function (t, e) {
          var n = e.options;
          n.fill &&
            ((t.globalAlpha = n.fillOpacity),
            (t.fillStyle = n.fillColor || n.color),
            t.fill(n.fillRule || 'evenodd')),
            n.stroke &&
              n.weight !== 0 &&
              (t.setLineDash && t.setLineDash((e.options && e.options._dashArray) || []),
              (t.globalAlpha = n.opacity),
              (t.lineWidth = n.weight),
              (t.strokeStyle = n.color),
              (t.lineCap = n.lineCap),
              (t.lineJoin = n.lineJoin),
              t.stroke());
        },
        _onClick: function (t) {
          for (
            var e = this._map.mouseEventToLayerPoint(t), n, i, o = this._drawFirst;
            o;
            o = o.next
          )
            (n = o.layer),
              n.options.interactive &&
                n._containsPoint(e) &&
                (!(t.type === 'click' || t.type === 'preclick') ||
                  !this._map._draggableMoved(n)) &&
                (i = n);
          this._fireEvent(i ? [i] : !1, t);
        },
        _onMouseMove: function (t) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var e = this._map.mouseEventToLayerPoint(t);
            this._handleMouseHover(t, e);
          }
        },
        _handleMouseOut: function (t) {
          var e = this._hoveredLayer;
          e &&
            (vt(this._container, 'leaflet-interactive'),
            this._fireEvent([e], t, 'mouseout'),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (t, e) {
          if (!this._mouseHoverThrottled) {
            for (var n, i, o = this._drawFirst; o; o = o.next)
              (n = o.layer), n.options.interactive && n._containsPoint(e) && (i = n);
            i !== this._hoveredLayer &&
              (this._handleMouseOut(t),
              i &&
                (K(this._container, 'leaflet-interactive'),
                this._fireEvent([i], t, 'mouseover'),
                (this._hoveredLayer = i))),
              this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                m(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32
              );
          }
        },
        _fireEvent: function (t, e, n) {
          this._map._fireDOMEvent(e, n || e.type, t);
        },
        _bringToFront: function (t) {
          var e = t._order;
          if (e) {
            var n = e.next,
              i = e.prev;
            if (n) n.prev = i;
            else return;
            i ? (i.next = n) : n && (this._drawFirst = n),
              (e.prev = this._drawLast),
              (this._drawLast.next = e),
              (e.next = null),
              (this._drawLast = e),
              this._requestRedraw(t);
          }
        },
        _bringToBack: function (t) {
          var e = t._order;
          if (e) {
            var n = e.next,
              i = e.prev;
            if (i) i.next = n;
            else return;
            n ? (n.prev = i) : i && (this._drawLast = i),
              (e.prev = null),
              (e.next = this._drawFirst),
              (this._drawFirst.prev = e),
              (this._drawFirst = e),
              this._requestRedraw(t);
          }
        },
      });
    function vi(t) {
      return A.canvas ? new gi(t) : null;
    }
    var we = (function () {
        try {
          return (
            document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
            function (t) {
              return document.createElement('<lvml:' + t + ' class="lvml">');
            }
          );
        } catch {}
        return function (t) {
          return document.createElement(
            '<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      })(),
      qo = {
        _initContainer: function () {
          this._container = ot('div', 'leaflet-vml-container');
        },
        _update: function () {
          this._map._animatingZoom ||
            (Wt.prototype._update.call(this), this.fire('update'));
        },
        _initPath: function (t) {
          var e = (t._container = we('shape'));
          K(e, 'leaflet-vml-shape ' + (this.options.className || '')),
            (e.coordsize = '1 1'),
            (t._path = we('path')),
            e.appendChild(t._path),
            this._updateStyle(t),
            (this._layers[u(t)] = t);
        },
        _addPath: function (t) {
          var e = t._container;
          this._container.appendChild(e),
            t.options.interactive && t.addInteractiveTarget(e);
        },
        _removePath: function (t) {
          var e = t._container;
          pt(e), t.removeInteractiveTarget(e), delete this._layers[u(t)];
        },
        _updateStyle: function (t) {
          var e = t._stroke,
            n = t._fill,
            i = t.options,
            o = t._container;
          (o.stroked = !!i.stroke),
            (o.filled = !!i.fill),
            i.stroke
              ? (e || (e = t._stroke = we('stroke')),
                o.appendChild(e),
                (e.weight = i.weight + 'px'),
                (e.color = i.color),
                (e.opacity = i.opacity),
                i.dashArray
                  ? (e.dashStyle = O(i.dashArray)
                      ? i.dashArray.join(' ')
                      : i.dashArray.replace(/( *, *)/g, ' '))
                  : (e.dashStyle = ''),
                (e.endcap = i.lineCap.replace('butt', 'flat')),
                (e.joinstyle = i.lineJoin))
              : e && (o.removeChild(e), (t._stroke = null)),
            i.fill
              ? (n || (n = t._fill = we('fill')),
                o.appendChild(n),
                (n.color = i.fillColor || i.color),
                (n.opacity = i.fillOpacity))
              : n && (o.removeChild(n), (t._fill = null));
        },
        _updateCircle: function (t) {
          var e = t._point.round(),
            n = Math.round(t._radius),
            i = Math.round(t._radiusY || n);
          this._setPath(
            t,
            t._empty()
              ? 'M0 0'
              : 'AL ' + e.x + ',' + e.y + ' ' + n + ',' + i + ' 0,' + 65535 * 360
          );
        },
        _setPath: function (t, e) {
          t._path.v = e;
        },
        _bringToFront: function (t) {
          ne(t._container);
        },
        _bringToBack: function (t) {
          ie(t._container);
        },
      },
      He = A.vml ? we : _t,
      Le = Wt.extend({
        _initContainer: function () {
          (this._container = He('svg')),
            this._container.setAttribute('pointer-events', 'none'),
            (this._rootGroup = He('g')),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function () {
          pt(this._container),
            lt(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            Wt.prototype._update.call(this);
            var t = this._bounds,
              e = t.getSize(),
              n = this._container;
            (!this._svgSize || !this._svgSize.equals(e)) &&
              ((this._svgSize = e),
              n.setAttribute('width', e.x),
              n.setAttribute('height', e.y)),
              yt(n, t.min),
              n.setAttribute('viewBox', [t.min.x, t.min.y, e.x, e.y].join(' ')),
              this.fire('update');
          }
        },
        _initPath: function (t) {
          var e = (t._path = He('path'));
          t.options.className && K(e, t.options.className),
            t.options.interactive && K(e, 'leaflet-interactive'),
            this._updateStyle(t),
            (this._layers[u(t)] = t);
        },
        _addPath: function (t) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(t._path),
            t.addInteractiveTarget(t._path);
        },
        _removePath: function (t) {
          pt(t._path), t.removeInteractiveTarget(t._path), delete this._layers[u(t)];
        },
        _updatePath: function (t) {
          t._project(), t._update();
        },
        _updateStyle: function (t) {
          var e = t._path,
            n = t.options;
          e &&
            (n.stroke
              ? (e.setAttribute('stroke', n.color),
                e.setAttribute('stroke-opacity', n.opacity),
                e.setAttribute('stroke-width', n.weight),
                e.setAttribute('stroke-linecap', n.lineCap),
                e.setAttribute('stroke-linejoin', n.lineJoin),
                n.dashArray
                  ? e.setAttribute('stroke-dasharray', n.dashArray)
                  : e.removeAttribute('stroke-dasharray'),
                n.dashOffset
                  ? e.setAttribute('stroke-dashoffset', n.dashOffset)
                  : e.removeAttribute('stroke-dashoffset'))
              : e.setAttribute('stroke', 'none'),
            n.fill
              ? (e.setAttribute('fill', n.fillColor || n.color),
                e.setAttribute('fill-opacity', n.fillOpacity),
                e.setAttribute('fill-rule', n.fillRule || 'evenodd'))
              : e.setAttribute('fill', 'none'));
        },
        _updatePoly: function (t, e) {
          this._setPath(t, gt(t._parts, e));
        },
        _updateCircle: function (t) {
          var e = t._point,
            n = Math.max(Math.round(t._radius), 1),
            i = Math.max(Math.round(t._radiusY), 1) || n,
            o = 'a' + n + ',' + i + ' 0 1,0 ',
            s = t._empty()
              ? 'M0 0'
              : 'M' + (e.x - n) + ',' + e.y + o + n * 2 + ',0 ' + o + -n * 2 + ',0 ';
          this._setPath(t, s);
        },
        _setPath: function (t, e) {
          t._path.setAttribute('d', e);
        },
        _bringToFront: function (t) {
          ne(t._path);
        },
        _bringToBack: function (t) {
          ie(t._path);
        },
      });
    A.vml && Le.include(qo);
    function yi(t) {
      return A.svg || A.vml ? new Le(t) : null;
    }
    nt.include({
      getRenderer: function (t) {
        var e =
          t.options.renderer ||
          this._getPaneRenderer(t.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          e || (e = this._renderer = this._createRenderer()),
          this.hasLayer(e) || this.addLayer(e),
          e
        );
      },
      _getPaneRenderer: function (t) {
        if (t === 'overlayPane' || t === void 0) return !1;
        var e = this._paneRenderers[t];
        return (
          e === void 0 &&
            ((e = this._createRenderer({pane: t})), (this._paneRenderers[t] = e)),
          e
        );
      },
      _createRenderer: function (t) {
        return (this.options.preferCanvas && vi(t)) || yi(t);
      },
    });
    var xi = ae.extend({
      initialize: function (t, e) {
        ae.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      setBounds: function (t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function (t) {
        return (
          (t = X(t)),
          [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        );
      },
    });
    function Ko(t, e) {
      return new xi(t, e);
    }
    (Le.create = He),
      (Le.pointsToPath = gt),
      (Vt.geometryToLayer = Oe),
      (Vt.coordsToLatLng = yn),
      (Vt.coordsToLatLngs = Ze),
      (Vt.latLngToCoords = xn),
      (Vt.latLngsToCoords = Re),
      (Vt.getFeature = re),
      (Vt.asFeature = De),
      nt.mergeOptions({boxZoom: !0});
    var bi = Nt.extend({
      initialize: function (t) {
        (this._map = t),
          (this._container = t._container),
          (this._pane = t._panes.overlayPane),
          (this._resetStateTimeout = 0),
          t.on('unload', this._destroy, this);
      },
      addHooks: function () {
        G(this._container, 'mousedown', this._onMouseDown, this);
      },
      removeHooks: function () {
        lt(this._container, 'mousedown', this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        pt(this._pane), delete this._pane;
      },
      _resetState: function () {
        (this._resetStateTimeout = 0), (this._moved = !1);
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (t) {
        if (!t.shiftKey || (t.which !== 1 && t.button !== 1)) return !1;
        this._clearDeferredResetState(),
          this._resetState(),
          fe(),
          en(),
          (this._startPoint = this._map.mouseEventToContainerPoint(t)),
          G(
            document,
            {
              contextmenu: Xt,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseMove: function (t) {
        this._moved ||
          ((this._moved = !0),
          (this._box = ot('div', 'leaflet-zoom-box', this._container)),
          K(this._container, 'leaflet-crosshair'),
          this._map.fire('boxzoomstart')),
          (this._point = this._map.mouseEventToContainerPoint(t));
        var e = new k(this._point, this._startPoint),
          n = e.getSize();
        yt(this._box, e.min),
          (this._box.style.width = n.x + 'px'),
          (this._box.style.height = n.y + 'px');
      },
      _finish: function () {
        this._moved && (pt(this._box), vt(this._container, 'leaflet-crosshair')),
          pe(),
          nn(),
          lt(
            document,
            {
              contextmenu: Xt,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseUp: function (t) {
        if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(m(this._resetState, this), 0));
          var e = new J(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(e).fire('boxzoomend', {boxZoomBounds: e});
        }
      },
      _onKeyDown: function (t) {
        t.keyCode === 27 &&
          (this._finish(), this._clearDeferredResetState(), this._resetState());
      },
    });
    nt.addInitHook('addHandler', 'boxZoom', bi), nt.mergeOptions({doubleClickZoom: !0});
    var wi = Nt.extend({
      addHooks: function () {
        this._map.on('dblclick', this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off('dblclick', this._onDoubleClick, this);
      },
      _onDoubleClick: function (t) {
        var e = this._map,
          n = e.getZoom(),
          i = e.options.zoomDelta,
          o = t.originalEvent.shiftKey ? n - i : n + i;
        e.options.doubleClickZoom === 'center'
          ? e.setZoom(o)
          : e.setZoomAround(t.containerPoint, o);
      },
    });
    nt.addInitHook('addHandler', 'doubleClickZoom', wi),
      nt.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
      });
    var Li = Nt.extend({
      addHooks: function () {
        if (!this._draggable) {
          var t = this._map;
          (this._draggable = new Gt(t._mapPane, t._container)),
            this._draggable.on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            ),
            this._draggable.on('predrag', this._onPreDragLimit, this),
            t.options.worldCopyJump &&
              (this._draggable.on('predrag', this._onPreDragWrap, this),
              t.on('zoomend', this._onZoomEnd, this),
              t.whenReady(this._onZoomEnd, this));
        }
        K(this._map._container, 'leaflet-grab leaflet-touch-drag'),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []);
      },
      removeHooks: function () {
        vt(this._map._container, 'leaflet-grab'),
          vt(this._map._container, 'leaflet-touch-drag'),
          this._draggable.disable();
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var t = this._map;
        if (
          (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
        ) {
          var e = X(this._map.options.maxBounds);
          (this._offsetLimit = W(
            this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(e.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize())
          )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity)
            ));
        } else this._offsetLimit = null;
        t.fire('movestart').fire('dragstart'),
          t.options.inertia && ((this._positions = []), (this._times = []));
      },
      _onDrag: function (t) {
        if (this._map.options.inertia) {
          var e = (this._lastTime = +new Date()),
            n = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
          this._positions.push(n), this._times.push(e), this._prunePositions(e);
        }
        this._map.fire('move', t).fire('drag', t);
      },
      _prunePositions: function (t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function () {
        var t = this._map.getSize().divideBy(2),
          e = this._map.latLngToLayerPoint([0, 0]);
        (this._initialWorldOffset = e.subtract(t).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
      },
      _viscousLimit: function (t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos),
            e = this._offsetLimit;
          t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
            t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
            t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
            t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(t));
        }
      },
      _onPreDragWrap: function () {
        var t = this._worldWidth,
          e = Math.round(t / 2),
          n = this._initialWorldOffset,
          i = this._draggable._newPos.x,
          o = ((i - e + n) % t) + e - n,
          s = ((i + e + n) % t) - e - n,
          r = Math.abs(o + n) < Math.abs(s + n) ? o : s;
        (this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = r);
      },
      _onDragEnd: function (t) {
        var e = this._map,
          n = e.options,
          i = !n.inertia || t.noInertia || this._times.length < 2;
        if ((e.fire('dragend', t), i)) e.fire('moveend');
        else {
          this._prunePositions(+new Date());
          var o = this._lastPos.subtract(this._positions[0]),
            s = (this._lastTime - this._times[0]) / 1e3,
            r = n.easeLinearity,
            d = o.multiplyBy(r / s),
            h = d.distanceTo([0, 0]),
            g = Math.min(n.inertiaMaxSpeed, h),
            E = d.multiplyBy(g / h),
            F = g / (n.inertiaDeceleration * r),
            Y = E.multiplyBy(-F / 2).round();
          !Y.x && !Y.y
            ? e.fire('moveend')
            : ((Y = e._limitOffset(Y, e.options.maxBounds)),
              $(function () {
                e.panBy(Y, {duration: F, easeLinearity: r, noMoveStart: !0, animate: !0});
              }));
        }
      },
    });
    nt.addInitHook('addHandler', 'dragging', Li),
      nt.mergeOptions({keyboard: !0, keyboardPanDelta: 80});
    var Ci = Nt.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173],
      },
      initialize: function (t) {
        (this._map = t),
          this._setPanDelta(t.options.keyboardPanDelta),
          this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function () {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = '0'),
          G(
            t,
            {focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown},
            this
          ),
          this._map.on({focus: this._addHooks, blur: this._removeHooks}, this);
      },
      removeHooks: function () {
        this._removeHooks(),
          lt(
            this._map._container,
            {focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown},
            this
          ),
          this._map.off({focus: this._addHooks, blur: this._removeHooks}, this);
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var t = document.body,
            e = document.documentElement,
            n = t.scrollTop || e.scrollTop,
            i = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(i, n);
        }
      },
      _onFocus: function () {
        (this._focused = !0), this._map.fire('focus');
      },
      _onBlur: function () {
        (this._focused = !1), this._map.fire('blur');
      },
      _setPanDelta: function (t) {
        var e = (this._panKeys = {}),
          n = this.keyCodes,
          i,
          o;
        for (i = 0, o = n.left.length; i < o; i++) e[n.left[i]] = [-1 * t, 0];
        for (i = 0, o = n.right.length; i < o; i++) e[n.right[i]] = [t, 0];
        for (i = 0, o = n.down.length; i < o; i++) e[n.down[i]] = [0, t];
        for (i = 0, o = n.up.length; i < o; i++) e[n.up[i]] = [0, -1 * t];
      },
      _setZoomDelta: function (t) {
        var e = (this._zoomKeys = {}),
          n = this.keyCodes,
          i,
          o;
        for (i = 0, o = n.zoomIn.length; i < o; i++) e[n.zoomIn[i]] = t;
        for (i = 0, o = n.zoomOut.length; i < o; i++) e[n.zoomOut[i]] = -t;
      },
      _addHooks: function () {
        G(document, 'keydown', this._onKeyDown, this);
      },
      _removeHooks: function () {
        lt(document, 'keydown', this._onKeyDown, this);
      },
      _onKeyDown: function (t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode,
            n = this._map,
            i;
          if (e in this._panKeys) {
            if (!n._panAnim || !n._panAnim._inProgress)
              if (
                ((i = this._panKeys[e]),
                t.shiftKey && (i = x(i).multiplyBy(3)),
                n.options.maxBounds && (i = n._limitOffset(x(i), n.options.maxBounds)),
                n.options.worldCopyJump)
              ) {
                var o = n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(i)));
                n.panTo(o);
              } else n.panBy(i);
          } else if (e in this._zoomKeys)
            n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && n._popup && n._popup.options.closeOnEscapeKey)
            n.closePopup();
          else return;
          Xt(t);
        }
      },
    });
    nt.addInitHook('addHandler', 'keyboard', Ci),
      nt.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60,
      });
    var Ei = Nt.extend({
      addHooks: function () {
        G(this._map._container, 'wheel', this._onWheelScroll, this), (this._delta = 0);
      },
      removeHooks: function () {
        lt(this._map._container, 'wheel', this._onWheelScroll, this);
      },
      _onWheelScroll: function (t) {
        var e = Yn(t),
          n = this._map.options.wheelDebounceTime;
        (this._delta += e),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
          this._startTime || (this._startTime = +new Date());
        var i = Math.max(n - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer),
          (this._timer = setTimeout(m(this._performZoom, this), i)),
          Xt(t);
      },
      _performZoom: function () {
        var t = this._map,
          e = t.getZoom(),
          n = this._map.options.zoomSnap || 0;
        t._stop();
        var i = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(i))))) / Math.LN2,
          s = n ? Math.ceil(o / n) * n : o,
          r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
        (this._delta = 0),
          (this._startTime = null),
          r &&
            (t.options.scrollWheelZoom === 'center'
              ? t.setZoom(e + r)
              : t.setZoomAround(this._lastMousePos, e + r));
      },
    });
    nt.addInitHook('addHandler', 'scrollWheelZoom', Ei);
    var Yo = 600;
    nt.mergeOptions({tapHold: A.touchNative && A.safari && A.mobile, tapTolerance: 15});
    var ki = Nt.extend({
      addHooks: function () {
        G(this._map._container, 'touchstart', this._onDown, this);
      },
      removeHooks: function () {
        lt(this._map._container, 'touchstart', this._onDown, this);
      },
      _onDown: function (t) {
        if ((clearTimeout(this._holdTimeout), t.touches.length === 1)) {
          var e = t.touches[0];
          (this._startPos = this._newPos = new T(e.clientX, e.clientY)),
            (this._holdTimeout = setTimeout(
              m(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (G(document, 'touchend', Ct),
                    G(document, 'touchend touchcancel', this._cancelClickPrevent),
                    this._simulateEvent('contextmenu', e));
              }, this),
              Yo
            )),
            G(document, 'touchend touchcancel contextmenu', this._cancel, this),
            G(document, 'touchmove', this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        lt(document, 'touchend', Ct), lt(document, 'touchend touchcancel', t);
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          lt(document, 'touchend touchcancel contextmenu', this._cancel, this),
          lt(document, 'touchmove', this._onMove, this);
      },
      _onMove: function (t) {
        var e = t.touches[0];
        this._newPos = new T(e.clientX, e.clientY);
      },
      _isTapValid: function () {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function (t, e) {
        var n = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY,
        });
        (n._simulated = !0), e.target.dispatchEvent(n);
      },
    });
    nt.addInitHook('addHandler', 'tapHold', ki),
      nt.mergeOptions({touchZoom: A.touch, bounceAtZoomLimits: !0});
    var Pi = Nt.extend({
      addHooks: function () {
        K(this._map._container, 'leaflet-touch-zoom'),
          G(this._map._container, 'touchstart', this._onTouchStart, this);
      },
      removeHooks: function () {
        vt(this._map._container, 'leaflet-touch-zoom'),
          lt(this._map._container, 'touchstart', this._onTouchStart, this);
      },
      _onTouchStart: function (t) {
        var e = this._map;
        if (
          !(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)
        ) {
          var n = e.mouseEventToContainerPoint(t.touches[0]),
            i = e.mouseEventToContainerPoint(t.touches[1]);
          (this._centerPoint = e.getSize()._divideBy(2)),
            (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
            e.options.touchZoom !== 'center' &&
              (this._pinchStartLatLng = e.containerPointToLatLng(n.add(i)._divideBy(2))),
            (this._startDist = n.distanceTo(i)),
            (this._startZoom = e.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            e._stop(),
            G(document, 'touchmove', this._onTouchMove, this),
            G(document, 'touchend touchcancel', this._onTouchEnd, this),
            Ct(t);
        }
      },
      _onTouchMove: function (t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map,
            n = e.mouseEventToContainerPoint(t.touches[0]),
            i = e.mouseEventToContainerPoint(t.touches[1]),
            o = n.distanceTo(i) / this._startDist;
          if (
            ((this._zoom = e.getScaleZoom(o, this._startZoom)),
            !e.options.bounceAtZoomLimits &&
              ((this._zoom < e.getMinZoom() && o < 1) ||
                (this._zoom > e.getMaxZoom() && o > 1)) &&
              (this._zoom = e._limitZoom(this._zoom)),
            e.options.touchZoom === 'center')
          ) {
            if (((this._center = this._startLatLng), o === 1)) return;
          } else {
            var s = n._add(i)._divideBy(2)._subtract(this._centerPoint);
            if (o === 1 && s.x === 0 && s.y === 0) return;
            this._center = e.unproject(
              e.project(this._pinchStartLatLng, this._zoom).subtract(s),
              this._zoom
            );
          }
          this._moved || (e._moveStart(!0, !1), (this._moved = !0)),
            st(this._animRequest);
          var r = m(e._move, e, this._center, this._zoom, {pinch: !0, round: !1}, void 0);
          (this._animRequest = $(r, this, !0)), Ct(t);
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        (this._zooming = !1),
          st(this._animRequest),
          lt(document, 'touchmove', this._onTouchMove, this),
          lt(document, 'touchend touchcancel', this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      },
    });
    nt.addInitHook('addHandler', 'touchZoom', Pi),
      (nt.BoxZoom = bi),
      (nt.DoubleClickZoom = wi),
      (nt.Drag = Li),
      (nt.Keyboard = Ci),
      (nt.ScrollWheelZoom = Ei),
      (nt.TapHold = ki),
      (nt.TouchZoom = Pi),
      (a.Bounds = k),
      (a.Browser = A),
      (a.CRS = ct),
      (a.Canvas = gi),
      (a.Circle = vn),
      (a.CircleMarker = Ae),
      (a.Class = at),
      (a.Control = Ot),
      (a.DivIcon = fi),
      (a.DivOverlay = jt),
      (a.DomEvent = mo),
      (a.DomUtil = uo),
      (a.Draggable = Gt),
      (a.Evented = dt),
      (a.FeatureGroup = Ft),
      (a.GeoJSON = Vt),
      (a.GridLayer = be),
      (a.Handler = Nt),
      (a.Icon = se),
      (a.ImageOverlay = Ne),
      (a.LatLng = H),
      (a.LatLngBounds = J),
      (a.Layer = Zt),
      (a.LayerGroup = oe),
      (a.LineUtil = ko),
      (a.Map = nt),
      (a.Marker = ze),
      (a.Mixin = xo),
      (a.Path = qt),
      (a.Point = T),
      (a.PolyUtil = bo),
      (a.Polygon = ae),
      (a.Polyline = Ht),
      (a.Popup = je),
      (a.PosAnimation = $n),
      (a.Projection = Po),
      (a.Rectangle = xi),
      (a.Renderer = Wt),
      (a.SVG = Le),
      (a.SVGOverlay = mi),
      (a.TileLayer = le),
      (a.Tooltip = Fe),
      (a.Transformation = ft),
      (a.Util = mt),
      (a.VideoOverlay = hi),
      (a.bind = m),
      (a.bounds = W),
      (a.canvas = vi),
      (a.circle = Oo),
      (a.circleMarker = Ao),
      (a.control = ve),
      (a.divIcon = Wo),
      (a.extend = l),
      (a.featureGroup = Mo),
      (a.geoJSON = ui),
      (a.geoJson = Do),
      (a.gridLayer = Uo),
      (a.icon = Bo),
      (a.imageOverlay = No),
      (a.latLng = N),
      (a.latLngBounds = X),
      (a.layerGroup = Io),
      (a.map = fo),
      (a.marker = zo),
      (a.point = x),
      (a.polygon = Ro),
      (a.polyline = Zo),
      (a.popup = Ho),
      (a.rectangle = Ko),
      (a.setOptions = w),
      (a.stamp = u),
      (a.svg = yi),
      (a.svgOverlay = Fo),
      (a.tileLayer = pi),
      (a.tooltip = Vo),
      (a.transformation = it),
      (a.version = _),
      (a.videoOverlay = jo);
    var $o = window.L;
    (a.noConflict = function () {
      return (window.L = $o), this;
    }),
      (window.L = a);
  });
})(Cn, Cn.exports);
var Ps = Cn.exports;
const Ue = ks(Ps),
  Ge = {
    FI: {title: 'Ravintolat', selectRestaurant: 'Valitse ravintola kartalta'},
    EN: {title: 'Restaurants', selectRestaurant: 'Select restaurant from the map'},
  },
  Ts = async () => {
    const p = document.querySelector('#app');
    document.querySelector('header').classList.remove('bg-opacity-0');
    const a = document.createElement('div');
    a.classList.add(
      'bg-background-light',
      'p-5',
      'h-screen',
      'flex',
      'flex-col',
      'justify-center'
    );
    let _ = 'FI';
    document.querySelectorAll('button').forEach((b) => {
      b.addEventListener('click', () => {
        const w = b.textContent;
        (w === 'FI' || w === 'EN') && (_ = w), f();
      });
    });
    const f = () => {
        (v.textContent = Ge[_].title), (S.textContent = Ge[_].selectRestaurant);
      },
      m = document.createElement('div');
    m.classList.add(
      'container2',
      'mx-auto',
      'bg-primary',
      'h-[80vh]',
      'w-3/4',
      'flex',
      'flex-row',
      'p-5',
      'gap-2',
      'text-center',
      'justify-center'
    );
    const v = document.createElement('h1');
    (v.textContent = Ge[_].title),
      v.classList.add(
        'flex',
        'mx-auto',
        'w-3/4',
        'text-h1',
        'font-bold',
        'text-center',
        'justify-center',
        'text-red',
        'bg-primary'
      ),
      a.appendChild(v);
    const u = document.createElement('div');
    u.classList.add(
      'flex',
      'flex-col',
      'items-start',
      'justify-center',
      'p-4',
      'text-black',
      'bg-white',
      'border-2',
      'border-secondary',
      'w-1/8',
      'h-4/5',
      'mt-10',
      'rounded-lg',
      'gap-4'
    ),
      m.appendChild(u);
    const I = document.createElement('div');
    I.classList.add(
      'h-4/5',
      'w-3/5',
      'items-center',
      'justify-center',
      'mt-10',
      'rounded-lg',
      'border-2',
      'border-secondary'
    ),
      m.appendChild(I);
    const C = Ue.map(I).setView([64.31434, 25.26326], 5);
    Ue.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(C),
      setTimeout(() => {
        C.invalidateSize();
      }, 100);
    const y = Ue.icon({
      iconUrl: 'img/pin.png',
      iconSize: [47, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -46],
    });
    (await zi()).forEach((b) => {
      const w = document.createElement('button');
      (w.textContent = b.res_name),
        w.classList.add(
          'flex',
          'flex-col',
          'bg-primary',
          'text-black',
          'border-2',
          'border-secondary',
          'text-h5',
          'text-center',
          'items-center',
          'justify-center',
          'p-2',
          'm-2',
          'pop-out-animation',
          'rounded-lg'
        );
      const M = Ue.marker([b.coordinates.latitude, b.coordinates.longitude], {
        icon: y,
      }).addTo(C);
      M.bindPopup(
        `<b>${b.res_name}</b><br><br><b>Open Hours:</b> <br> Arkisin: ${b.openHours.weekdays} <br> Viikonloppuisin: ${b.openHours.weekends}`
      ),
        w.addEventListener('click', () => {
          C.setView([b.coordinates.latitude, b.coordinates.longitude], 16), M.openPopup();
        }),
        u.appendChild(w);
    });
    const S = document.createElement('p');
    (S.textContent = Ge[_].selectRestaurant),
      S.classList.add(
        'flex',
        'mx-auto',
        'w-3/4',
        'text-h5',
        'font-bold',
        'text-center',
        'justify-center',
        'text-black',
        'bg-primary'
      ),
      a.appendChild(S),
      a.appendChild(m),
      p.appendChild(a),
      m.appendChild(u);
  },
  Ss = async () => {
    const c = await Ut('/menu/burgers', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    if ((console.log('Burgers: ', c), !c)) throw new Error('Failed to fetch burgers');
    return c;
  },
  Et = {
    FI: {
      menuChange: {
        title: 'MUUTA MENUA',
        menuCategory: 'Valitse menu kategoria:',
        menuCategoryInitial: 'Valitse kategoria',
        menuItem: 'Valitse muutettava annos:',
        menuItemsInitial: 'Valitse annos',
        changeContent: 'Muuta sisältöä',
        nameLabel: 'Nimi: ',
        descriptionLabel: 'Annoksen tiedot: ',
        dietsLabel: 'Erityisruokavaliot: ',
        priceLabel: 'Hinta: ',
        photoLabel: 'Kuva: ',
        dailyBurgerLabel: 'Viikonpäivä: ',
        namePlaceholder: 'Valitse annos',
        submit: 'Lähetä',
      },
      buttons: {back: 'Takaisin'},
    },
    EN: {
      menuChange: {
        title: 'CHANGE MENU',
        menuCategory: 'Select menu category:',
        menuCategoryInitial: 'Select category',
        menuItem: 'Select menu item to change:',
        menuItemsInitial: 'Select item',
        changeContent: 'Change content',
        nameLabel: 'Name: ',
        descriptionLabel: 'Meal description: ',
        dietsLabel: 'Diets: ',
        priceLabel: 'Price: ',
        photoLabel: 'Photo: ',
        dailyBurgerLabel: 'Day of the week: ',
        namePlaceholder: 'Select item',
        submit: 'Submit',
      },
      buttons: {back: 'Back'},
    },
  },
  Is = async (p) => {
    p.innerHTML = '';
    let c = localStorage.getItem('language');
    c !== 'FI' && c !== 'EN' && (localStorage.setItem('language', 'FI'), Mt()),
      p.classList.add('relative', 'w-full', 'h-full', 'my-4', 'p-4');
    const a = document.createElement('div');
    a.classList.add(
      'adminViewContainer',
      'flex',
      'flex-col',
      'items-center',
      'w-full',
      'h-full'
    );
    const _ = document.createElement('div');
    _.classList.add(
      'adminHeader',
      'w-full',
      'flex',
      'justify-center',
      'relative',
      'mb-4'
    );
    const l = document.createElement('h1');
    (l.textContent = 'Admin Panel'),
      l.classList.add('text-h1', 'font-bold', 'text-center', 'text-red'),
      _.appendChild(l);
    const f = await Ai(),
      m = document.createElement('button');
    m.textContent = Et[c].buttons.back;
    const v = document.createElement('i');
    v.classList.add('fas', 'fa-arrow-left', 'mr-2'),
      m.prepend(v),
      m.classList.add(
        'bg-secondary',
        'text-white',
        'p-2',
        'rounded-md',
        'hover:bg-secondary-dark',
        'absolute',
        'left-2',
        'top-4'
      ),
      m.addEventListener('click', () => {
        (p.innerHTML = ''),
          p.classList.remove('relative', 'w-full', 'h-full', 'my-4', 'p-4'),
          Oi(f, p);
      });
    const u = document.createElement('div');
    u.classList.add(
      'adminPanelContainer',
      'flex',
      'items-center',
      'w-full',
      'h-full',
      'gap-2'
    );
    const I = document.createElement('div');
    I.classList.add('flex', 'flex-col', 'items-center', 'w-full', 'h-full');
    const C = document.createElement('div');
    C.classList.add('flex', 'flex-col', 'w-full', 'h-full');
    const y = document.createElement('h3');
    (y.textContent = Et[c].menuChange.title),
      y.classList.add('text-h3', 'font-bold', 'text-center', 'mb-4', 'text-warmer-brown'),
      C.appendChild(y);
    const P = document.createElement('div');
    P.classList.add('flex', 'w-full');
    const S = document.createElement('div');
    S.classList.add('flex', 'flex-col', 'w-full', 'p-2', 'mb-2');
    const b = document.createElement('label');
    b.classList.add('text-label', 'mb-2', 'font-semibold'),
      (b.textContent = Et[c].menuChange.menuCategory);
    const w = document.createElement('select');
    w.classList.add('w-full', 'p-2', 'mb-2');
    const M = document.createElement('option');
    (M.value = 'initial'),
      (M.textContent = Et[c].menuChange.menuCategoryInitial),
      w.appendChild(M);
    const D = {
      FI: {
        value: ['Burgers', 'Sliders', 'Sides', 'Drinks'],
        text: ['Hampurilaiset', 'Sliderit', 'Lisukkeet', 'Juomat'],
      },
      EN: {
        value: ['Burgers', 'Sliders', 'Sides', 'Drinks'],
        text: ['Burgers', 'Sliders', 'Sides', 'Drinks'],
      },
    };
    D[c].value.forEach((wt, _t) => {
      const gt = document.createElement('option');
      (gt.value = wt), (gt.textContent = D[c].text[_t]), w.appendChild(gt);
    }),
      S.append(b, w);
    let B = [];
    w.addEventListener('change', async () => {
      M.disabled = !0;
      const wt = w.value;
      switch (((B = []), console.log('Selected category: ', wt), wt)) {
        case 'Burgers':
          B = await Ss();
          break;
      }
      if (
        ((Z.innerHTML = ''),
        ($.value = ''),
        (V.textContent = Et[c].menuChange.menuItemsInitial),
        Z.appendChild(V),
        (V.disabled = !1),
        (Z.selectedIndex = 0),
        w.value === 'Burgers')
      ) {
        const _t = document.createElement('div');
        _t.classList.add('flex', 'w-2/5', 'p-2', 'mb-2', 'dailyBurgerContainer');
        const gt = document.createElement('label');
        (gt.textContent = Et[c].menuChange.dailyBurgerLabel),
          gt.classList.add('text-label', 'font-semibold', 'self-center', 'mr-1');
        const kt = document.createElement('input');
        (kt.type = 'text'),
          (kt.placeholder = "EX. 'Monday'"),
          kt.classList.add(
            'dailyBurgerInput',
            'w-full',
            'p-2',
            'rounded-md',
            'border',
            'border-secondary'
          ),
          _t.append(gt, kt),
          z.insertBefore(_t, dt);
      } else {
        const _t = document.querySelector('.dailyBurgerContainer');
        _t && _t.remove();
      }
      B.forEach((_t) => {
        const gt = document.createElement('option');
        (gt.value = _t.id.toString()), (gt.textContent = _t.name), Z.appendChild(gt);
      });
    });
    const O = document.createElement('div');
    O.classList.add('flex', 'flex-col', 'w-full', 'p-2', 'mb-2');
    const q = document.createElement('label');
    q.classList.add('text-label', 'mb-2', 'font-semibold'),
      (q.textContent = Et[c].menuChange.menuItem);
    const Z = document.createElement('select');
    Z.classList.add('w-full', 'p-2', 'mb-2');
    const V = document.createElement('option');
    (V.value = 'initial'),
      (V.textContent = Et[c].menuChange.menuCategoryInitial),
      Z.appendChild(V),
      Z.addEventListener('change', () => {
        console.log('Selected menu item: ', B[Z.selectedIndex - 1]),
          (V.disabled = !0),
          (R = B[Z.selectedIndex - 1]),
          ($.value = R.name),
          (et.value = R.description[c]),
          (ft.value = R.price.toString()),
          R.diets.includes('gluten') && (J.checked = !0),
          R.diets.includes('lactose') && (H.checked = !0),
          R.diets.includes('vegan') && (ct.checked = !0);
        const wt = document.querySelector('.dailyBurgerInput');
        wt && 'day' in R && (wt.value = R.day);
      }),
      O.append(q, Z),
      P.append(S, O);
    let R;
    const j = document.createElement('form');
    j.classList.add(
      'flex',
      'flex-col',
      'w-full',
      'h-full',
      'items-center',
      'justify-between',
      'border',
      'border-secondary',
      'rounded-md',
      'p-2'
    );
    const U = document.createElement('h4');
    (U.textContent = Et[c].menuChange.changeContent),
      U.classList.add('text-h4', 'font-bold', 'text-center', 'mb-4'),
      j.appendChild(U);
    const tt = document.createElement('div');
    tt.classList.add('flex', 'w-full', 'p-2', 'mb-2');
    const $ = document.createElement('input'),
      st = document.createElement('label');
    (st.textContent = Et[c].menuChange.nameLabel),
      st.classList.add('text-label', 'font-semibold', 'self-center', 'mr-2'),
      ($.type = 'text'),
      ($.placeholder = Et[c].menuChange.namePlaceholder),
      $.classList.add('w-full', 'p-2', 'rounded-md', 'border', 'border-secondary');
    const mt = document.createElement('div');
    mt.classList.add('flex', 'w-full', 'p-2', 'mb-2');
    const at = document.createElement('label');
    (at.textContent = Et[c].menuChange.descriptionLabel),
      at.classList.add('text-label', 'w-1/4', 'font-semibold', 'self-center', 'mr-2');
    const et = document.createElement('textarea');
    et.classList.add(
      'w-3/4',
      'p-2',
      'rounded-md',
      'border',
      'border-secondary',
      'max-h-32',
      'overflow-y-auto'
    ),
      (et.placeholder = Et[c].menuChange.descriptionLabel);
    const z = document.createElement('div');
    z.classList.add('flex', 'w-full', 'p-2', 'mb-2');
    const dt = document.createElement('div');
    dt.classList.add(
      'flex',
      'items-center',
      'w-2/3',
      'px-2',
      'rounded-md',
      'border',
      'border-secondary'
    );
    const T = document.createElement('label');
    (T.textContent = Et[c].menuChange.photoLabel),
      T.classList.add('text-label', 'font-semibold', 'self-center', 'mr-2');
    const rt = document.createElement('input');
    rt.classList.add('w-full', 'p-2', 'border-none'),
      (rt.type = 'file'),
      dt.append(T, rt),
      z.append(dt);
    const x = document.createElement('div');
    x.classList.add('dietsAndPriceContainer', 'flex', 'w-full', 'p-2', 'mb-2', 'gap-2');
    const k = document.createElement('div');
    k.classList.add(
      'flex',
      'w-2/3',
      'p-2',
      'rounded-md',
      'border',
      'border-secondary',
      'gap-2',
      'items-center'
    );
    const W = document.createElement('label');
    (W.textContent = Et[c].menuChange.dietsLabel),
      W.classList.add('text-label', 'font-semibold', 'self-center', 'mr-2');
    const J = document.createElement('input');
    J.type = 'checkbox';
    const X = document.createElement('label');
    X.textContent = 'G';
    const H = document.createElement('input');
    H.type = 'checkbox';
    const N = document.createElement('label');
    N.textContent = 'L';
    const ct = document.createElement('input');
    ct.type = 'checkbox';
    const ut = document.createElement('label');
    (ut.textContent = 'V'), k.append(W, X, J, N, H, ut, ct);
    const bt = document.createElement('div');
    bt.classList.add(
      'flex',
      'w-1/3',
      'p-2',
      'rounded-md',
      'border',
      'border-secondary',
      'justify-between'
    );
    const Q = document.createElement('label');
    (Q.textContent = Et[c].menuChange.priceLabel),
      Q.classList.add('text-label', 'font-semibold', 'self-center', 'mr-2');
    const ft = document.createElement('input');
    (ft.type = 'number'),
      ft.classList.add('w-2/3', 'p-1', 'rounded-md', 'border', 'border-secondary'),
      bt.append(Q, ft),
      x.append(k, bt),
      mt.append(at, et),
      tt.append(st, $),
      j.append(tt, mt, z, x);
    const it = document.createElement('button');
    (it.textContent = Et[c].menuChange.submit),
      it.classList.add(
        'bg-secondary',
        'text-white',
        'p-2',
        'rounded-md',
        'hover:bg-primary-dark',
        'mb-4'
      ),
      j.appendChild(it),
      C.append(P, j),
      I.appendChild(C);
    const Pt = document.createElement('div');
    Pt.classList.add('flex', 'flex-col', 'items-center', 'w-full', 'h-full'),
      u.append(I, Pt),
      _.prepend(m),
      a.append(_, u),
      p.appendChild(a);
  },
  ht = {
    FI: {
      profileInfo: {
        header: 'PROFIILI',
        name: 'Nimi: ',
        email: 'Sähköposti: ',
        phone: 'Puhelinnumero: ',
        favBurger: 'Lempihampurilainen: ',
        notSelected: 'Ei valittu',
        missingPhone: 'ilmoita puhelinnumero',
        missingEmail: 'ilmoita sähköposti',
      },
      reservationInfo: {
        header: 'VARAUKSET',
        date: 'Päivä: ',
        selectDay: 'Valitse päivä',
        noReservations: 'Ei varauksia',
        reservationText: 'Varaus',
        time: 'Kellonaika: ',
        restaurant: 'Ravintola: ',
        tableNumber: 'Pöytänumero: ',
        initialText: 'Valitse varaus nähdäksesi tietoja',
        timeError: 'Kellonaikaa ei saatavilla',
        restaurantError: 'Ravintolaa ei saatavilla',
      },
      restaurantContactInfo: {
        header: 'Ravintolan yhteystiedot',
        customerservice: 'Asiakaspalvelu: ',
        email: 'Sähköposti: ',
      },
      buttons: {
        adminPanel: 'Admin Panel',
        changeInfo: 'Muuta tietoja',
        logout: 'Kirjaudu ulos',
      },
    },
    EN: {
      profileInfo: {
        header: 'PROFILE',
        name: 'Name: ',
        email: 'Email: ',
        phone: 'Phone: ',
        favBurger: 'Favorite Burger: ',
        notSelected: 'Not selected',
        missingPhone: 'Missing phone number',
        missingEmail: 'Missing email',
      },
      reservationInfo: {
        header: 'RESERVATIONS',
        date: 'Date: ',
        selectDay: 'Select day',
        noReservations: 'No reservations',
        reservationText: 'Reservation',
        time: 'Time: ',
        restaurant: 'Restaurant: ',
        tableNumber: 'Table number: ',
        initialText: 'Select a reservation to see details',
        timeError: 'Time not available',
        restaurantError: 'Restaurant not available',
      },
      restaurantContactInfo: {
        header: 'Restaurant contact information',
        customerservice: 'Customerservice: ',
        email: 'Email: ',
      },
      buttons: {
        adminPanel: 'Admin Panel',
        changeInfo: 'Change information',
        logout: 'Log out',
      },
    },
  },
  Oi = (p, c) => {
    console.log('Profile page data in createProfileView: ', p),
      console.log('User info in createProfileView: ', p.user_info),
      console.log('Reservations in createProfileView: ', p.reservations);
    const {
        username: a,
        email: _,
        phonenumber: l,
        favourite_bgr: f,
        user_type: m,
      } = p.user_info,
      v = p.reservations;
    let u = localStorage.getItem('language');
    u !== 'FI' && u !== 'EN' && (localStorage.setItem('language', 'FI'), Mt()),
      v.length > 0 &&
        v.sort((Q, ft) => {
          const it = new Date(Q.reservation_date.split('.').reverse().join('-')),
            Pt = new Date(ft.reservation_date.split('.').reverse().join('-'));
          return it.getTime() - Pt.getTime();
        });
    const I = document.createElement('div');
    I.classList.add('flex', 'w-full', 'h-full', 'gap-10');
    const C = document.createElement('div');
    C.classList.add(
      'testi',
      'flex',
      'flex-col',
      'justify-between',
      'items-center',
      'bg-light-brown',
      'rounded-2xl',
      'py-8',
      'px-5',
      'w-1/2',
      'h-full'
    );
    const y = document.createElement('h2');
    (y.textContent = ht[u].profileInfo.header),
      y.classList.add('text-h2', 'font-bold', 'text-secondary');
    const P = document.createElement('div');
    P.classList.add('flex', 'gap-3');
    const S = document.createElement('label');
    (S.textContent = ht[u].profileInfo.name),
      S.classList.add('text-h5', 'font-bold', 'text-secondary');
    const b = document.createElement('p');
    (b.textContent = a || 'Käyttäjänimi ei saatavilla'),
      b.classList.add('text-h5', 'text-primary'),
      P.append(S, b);
    const w = document.createElement('div');
    w.classList.add('flex', 'gap-3');
    const M = document.createElement('label');
    (M.textContent = ht[u].profileInfo.email),
      M.classList.add('text-h5', 'font-bold', 'text-secondary');
    const D = document.createElement('p');
    (D.textContent = _ || ht[u].profileInfo.missingEmail),
      D.classList.add('text-h5', 'text-primary'),
      w.append(M, D);
    const B = document.createElement('div');
    B.classList.add('flex', 'gap-3');
    const O = document.createElement('label');
    (O.textContent = ht[u].profileInfo.phone),
      O.classList.add('text-h5', 'font-bold', 'text-secondary');
    const q = document.createElement('p');
    (q.textContent = l || ht[u].profileInfo.missingPhone),
      q.classList.add('text-h5', 'text-primary'),
      B.append(O, q);
    const Z = document.createElement('div');
    Z.classList.add('flex', 'gap-3', 'mb-10');
    const V = document.createElement('label');
    (V.textContent = ht[u].profileInfo.favBurger),
      V.classList.add('text-h5', 'font-bold', 'text-secondary');
    const R = document.createElement('p');
    (R.textContent = f || ht[u].profileInfo.notSelected),
      R.classList.add('text-h5', 'text-primary'),
      Z.append(V, R);
    const j = document.createElement('div');
    if ((j.classList.add('flex', 'gap-4', 'w-full', 'justify-center'), m === 'admin')) {
      const Q = document.createElement('button');
      (Q.textContent = ht[u].buttons.adminPanel),
        Q.classList.add(
          'text-base',
          'font-bold',
          'text-primary',
          'bg-secondary',
          'hover:bg-hover-brown',
          'py-2',
          'px-4',
          'rounded-2xl'
        ),
        Q.addEventListener('click', async () => {
          Is(c);
        }),
        j.appendChild(Q);
    }
    const U = document.createElement('button');
    (U.textContent = ht[u].buttons.changeInfo),
      U.classList.add(
        'text-base',
        'font-bold',
        'text-primary',
        'bg-secondary',
        'hover:bg-hover-brown',
        'py-2',
        'px-4',
        'rounded-2xl'
      );
    const tt = document.createElement('button');
    (tt.textContent = ht[u].buttons.logout),
      tt.classList.add(
        'text-base',
        'font-bold',
        'text-primary',
        'bg-red',
        'hover:bg-dark-red',
        'py-2',
        'px-4',
        'rounded-2xl'
      ),
      tt.addEventListener('click', () => {
        localStorage.removeItem('user-token'),
          history.replaceState({}, '', '/login'),
          Mt();
      }),
      j.append(U, tt),
      C.append(y, P, w, B, Z, j);
    const $ = document.createElement('div');
    $.classList.add('flex', 'flex-col', 'items-center', 'w-1/2', 'gap-6');
    const st = document.createElement('div');
    st.classList.add(
      'flex',
      'flex-col',
      'items-center',
      'justify-between',
      'bg-light-brown',
      'rounded-2xl',
      'p-5',
      'w-full',
      'h-3/5'
    );
    const mt = document.createElement('h3');
    (mt.textContent = ht[u].reservationInfo.header),
      mt.classList.add('text-h3', 'font-bold', 'mb-5', 'text-secondary');
    const at = document.createElement('div');
    at.classList.add('flex', 'gap-3', 'w-full', 'items-center', 'justify-center');
    const et = document.createElement('label');
    (et.textContent = 'Päivä:'),
      et.classList.add('text-h5', 'font-bold', 'text-secondary');
    const z = document.createElement('select');
    z.classList.add(
      'daySelector',
      'text-h5',
      'text-secondary',
      'rounded-2xl',
      'px-3',
      'py-0.5',
      'w-1/2',
      'min-w-56'
    );
    let dt = null;
    const T = document.createElement('option');
    if (
      ((T.textContent = ht[u].reservationInfo.selectDay),
      (T.value = '0'),
      z.appendChild(T),
      (dt = T),
      v.length > 0)
    )
      v.forEach((Q) => {
        const ft = document.createElement('option');
        (ft.textContent =
          Q.reservation_date + ` ${ht[u].reservationInfo.reservationText}: ` + Q.id),
          (ft.value = Q.id.toString()),
          z.appendChild(ft);
      });
    else {
      const Q = document.createElement('option');
      (Q.textContent = ht[u].reservationInfo.noReservations),
        (Q.value = '0'),
        (Q.disabled = !0),
        z.appendChild(Q);
    }
    at.append(et, z);
    const rt = document.createElement('div');
    rt.classList.add(
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'gap-6',
      'mt-5',
      'px-6',
      'h-full',
      'w-5/6',
      'border-2',
      'border-solid',
      'border-warm-brown'
    );
    const x = document.createElement('p');
    (x.textContent = ht[u].reservationInfo.initialText),
      x.classList.add('text-h5', 'text-primary', 'font-semibold', 'text-center'),
      rt.append(x),
      z.addEventListener('change', (Q) => {
        (dt.disabled = !0), (rt.innerHTML = ''), rt.classList.remove('items-center');
        const ft = parseInt(Q.target.value);
        if (ft === 0) return;
        const it = v.find((Ee) => Ee.id === ft);
        it ||
          (rt.textContent =
            u === 'FI'
              ? 'Valitulle varaukselle ei löytynyt tietoja'
              : 'No information found for the selected reservation');
        const Pt = document.createElement('div');
        Pt.classList.add('flex', 'gap-3', 'mt-5', 'sm:mt-0', 'sm:mb-0');
        const wt = document.createElement('label');
        (wt.textContent = ht[u].reservationInfo.time),
          wt.classList.add('text-h5', 'font-bold', 'text-secondary');
        const _t = document.createElement('p');
        (_t.textContent =
          (it == null ? void 0 : it.start_time) +
            ' - ' +
            (it == null ? void 0 : it.end_time) || ht[u].reservationInfo.timeError),
          _t.classList.add('text-h5', 'text-primary'),
          Pt.append(wt, _t);
        const gt = document.createElement('div');
        gt.classList.add('flex', 'gap-3', 'mt-5', 'sm:mt-0', 'sm:mb-0');
        const kt = document.createElement('label');
        (kt.textContent = ht[u].reservationInfo.restaurant),
          kt.classList.add('text-h5', 'font-bold', 'text-secondary');
        const It = document.createElement('p');
        (It.textContent =
          (it == null ? void 0 : it.restaurant_name) ||
          ht[u].reservationInfo.restaurantError),
          It.classList.add('text-h5', 'text-primary'),
          gt.append(kt, It);
        const de = document.createElement('div');
        de.classList.add('flex', 'gap-3', 'mt-5', 'mb-5', 'sm:mt-0', 'sm:mb-0');
        const te = document.createElement('label');
        (te.textContent = ht[u].reservationInfo.tableNumber),
          te.classList.add('text-h5', 'font-bold', 'text-secondary');
        const Kt = document.createElement('p');
        (Kt.textContent = (it == null ? void 0 : it.table_id.toString()) || '69? :D'),
          Kt.classList.add('text-h5', 'text-primary'),
          de.append(te, Kt),
          rt.append(Pt, gt, de);
      }),
      st.append(mt, at, rt);
    const k = document.createElement('div');
    k.classList.add(
      'flex',
      'flex-col',
      'items-center',
      'bg-light-brown',
      'rounded-2xl',
      'p-5',
      'w-full',
      'h-2/5'
    );
    const W = document.createElement('h5');
    (W.textContent = ht[u].restaurantContactInfo.header),
      W.classList.add('text-h5', 'font-bold', 'mb-5', 'text-secondary');
    const J = document.createElement('div');
    J.classList.add('flex', 'p-6', 'flex-col', 'gap-5');
    const X = document.createElement('div');
    X.classList.add('flex', 'gap-3');
    const H = document.createElement('label');
    (H.textContent = ht[u].restaurantContactInfo.customerservice),
      H.classList.add('text-h6', 'font-bold', 'text-secondary');
    const N = document.createElement('p');
    (N.textContent = '044 6969 69'),
      N.classList.add('text-h6', 'text-primary', 'font-semibold'),
      X.append(H, N);
    const ct = document.createElement('div');
    ct.classList.add('flex', 'gap-3');
    const ut = document.createElement('label');
    (ut.textContent = ht[u].restaurantContactInfo.email),
      ut.classList.add('text-h6', 'font-bold', 'text-secondary');
    const bt = document.createElement('p');
    (bt.textContent = 'asiakaspalvelu@royalbuns.fi'),
      bt.classList.add('text-h6', 'text-primary', 'font-semibold'),
      ct.append(ut, bt),
      J.append(X, ct),
      k.append(W, J),
      $.append(st, k),
      I.append(C, $),
      c.appendChild(I);
  },
  Ms = () => {
    const p = document.createElement('div');
    p.classList.add(
      'form-container',
      'sign-in',
      'absolute',
      'top-0',
      'h-full',
      'left-0',
      'w-1/2',
      'z-[2]',
      'flex',
      'justify-center',
      'items-center'
    );
    const c = document.createElement('form');
    c.classList.add(
      'bg-primary',
      'flex',
      'items-center',
      'justify-center',
      'flex-col',
      'gap-4',
      'py-0',
      'px-10',
      'h-2/3',
      'w-2/3',
      'border-solid',
      'border-red',
      'border-2',
      'rounded-[30px]'
    );
    const a = document.createElement('h1');
    a.classList.add('text-h1', 'font-bold', 'mb-8', 'text-secondary'),
      (a.textContent = 'KIRJAUDU'),
      c.appendChild(a),
      [
        {name: 'username', type: 'text', placeholder: 'Käyttäjänimi'},
        {name: 'password', type: 'password', placeholder: 'Salasana'},
      ].forEach((f) => {
        const m = document.createElement('input');
        (m.type = f.type),
          (m.name = f.name),
          (f.name === 'username' || f.name === 'password') && (m.required = !0),
          (m.placeholder = f.placeholder),
          m.classList.add(
            'bg-slate-200',
            'border-none',
            'my-2',
            'py-2',
            'px-4',
            'text-sm',
            'rounded-xl',
            'outline-none'
          ),
          c.appendChild(m);
      });
    const l = document.createElement('button');
    return (
      (l.type = 'submit'),
      (l.textContent = 'KIRJAUDU'),
      l.classList.add(
        'bg-red',
        'text-white',
        'text-sm',
        'px-11',
        'py-2',
        'rounded-3xl',
        'border-solid',
        'border-2',
        'border-transparent',
        'font-semibold',
        'tracking-wider',
        'uppercase',
        'mt-3',
        'cursor-pointer'
      ),
      c.addEventListener('submit', async (f) => {
        f.preventDefault();
        const m = new FormData(c),
          v = {};
        m.forEach((u, I) => {
          u !== '' && (v[I] = u);
        }),
          ys(v);
      }),
      c.appendChild(l),
      p.appendChild(c),
      p
    );
  },
  Bs = () => {
    const p = document.createElement('div');
    p.classList.add(
      'form-container',
      'sign-up',
      'absolute',
      'top-0',
      'h-full',
      'left-0',
      'w-1/2',
      'opacity-0',
      'z-[1]',
      'flex',
      'justify-center',
      'items-center'
    );
    const c = document.createElement('form');
    c.classList.add(
      'bg-primary',
      'flex',
      'items-center',
      'justify-center',
      'flex-col',
      'gap-3',
      'py-0',
      'px-10',
      'h-3/4',
      'w-3/4',
      'border-solid',
      'border-red',
      'border-2',
      'rounded-[30px]'
    );
    const a = document.createElement('h1');
    a.classList.add('text-h1', 'font-bold', 'mb-8', 'text-secondary'),
      (a.textContent = 'REKISTERÖIDY'),
      c.appendChild(a),
      [
        {name: 'username', type: 'text', placeholder: 'Käyttäjänimi'},
        {name: 'password', type: 'password', placeholder: 'Salasana'},
        {name: 'email', type: 'email', placeholder: 'Sähköposti'},
        {name: 'phonenumber', type: 'tel', placeholder: 'Puhelinnumero'},
      ].forEach((f) => {
        const m = document.createElement('input');
        (m.type = f.type),
          (m.name = f.name),
          (f.name === 'username' || f.name === 'password') && (m.required = !0),
          f.name === 'password' &&
            ((m.pattern = '^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$'),
            (m.title =
              'Salasanan tulee sisältää vähintään 8 merkkiä, joista vähintään yksi iso kirjain ja yksi numero ja yksi erikoismerkki')),
          (m.placeholder = f.placeholder),
          m.classList.add(
            'bg-slate-200',
            'border-none',
            'my-2',
            'py-2',
            'px-4',
            'text-sm',
            'rounded-xl',
            'outline-none'
          ),
          c.appendChild(m);
      });
    const l = document.createElement('button');
    return (
      (l.type = 'submit'),
      (l.textContent = 'REKISTERÖIDY'),
      l.classList.add(
        'bg-red',
        'text-white',
        'text-sm',
        'px-11',
        'py-2',
        'rounded-3xl',
        'border-solid',
        'border-2',
        'border-transparent',
        'font-semibold',
        'tracking-wider',
        'uppercase',
        'mt-3',
        'cursor-pointer'
      ),
      c.addEventListener('submit', async (f) => {
        f.preventDefault();
        const m = new FormData(c),
          v = {};
        m.forEach((u, I) => {
          u !== '' && (v[I] = u);
        }),
          vs(v);
      }),
      c.appendChild(l),
      p.appendChild(c),
      p
    );
  },
  zs = (p) => {
    const c = document.createElement('div');
    c.classList.add(
      'togglePanel',
      'toggleLeft',
      'absolute',
      'w-1/2',
      'h-full',
      'flex',
      'justify-center',
      'items-center',
      'flex-col',
      'px-8',
      'text-center',
      'top-0',
      'translate-x-0',
      'translate-x-[-200%]'
    );
    const a = document.createElement('h2');
    a.classList.add('text-h2', 'font-bold', 'mb-5'),
      (a.textContent = 'Sinua odotetaan - kirjaudu sisään ja nauti!');
    const _ = document.createElement('p');
    _.classList.add('text-h6', 'leading-5', 'tracking-wide', 'my-10', 'max-w-xs'),
      (_.textContent =
        'Premium-nautinto on vain kirjautumisen päässä. Liity takaisin ja nauti yksityiskohtaisesta palvelustamme.');
    const l = document.createElement('button');
    return (
      (l.id = 'loginBtn'),
      l.classList.add(
        'hide',
        'bg-primary',
        'text-secondary',
        'text-sm',
        'px-11',
        'py-2',
        'rounded-3xl',
        'border-solid',
        'border-2',
        'border-transparent',
        'font-semibold',
        'tracking-wider',
        'uppercase',
        'mt-6',
        'cursor-pointer'
      ),
      (l.textContent = 'KIRJAUTUMAAN'),
      l.addEventListener('click', () => {
        p.classList.remove('active');
      }),
      c.append(a, _, l),
      c
    );
  },
  As = (p) => {
    const c = document.createElement('div');
    c.classList.add(
      'togglePanel',
      'toggleRight',
      'absolute',
      'w-1/2',
      'h-full',
      'flex',
      'justify-center',
      'items-center',
      'flex-col',
      'px-8',
      'text-center',
      'top-0',
      'translate-x-0',
      'right-0',
      'translate-x-0'
    );
    const a = document.createElement('h2');
    a.classList.add('text-h2', 'font-bold', 'mb-5'),
      (a.textContent = 'Liity kuninkaalliseen pöytään!');
    const _ = document.createElement('p');
    _.classList.add('text-h6', 'leading-5', 'tracking-wide', 'my-10', 'max-w-xs'),
      (_.textContent =
        'Kun rekisteröidyt, avaat oven kuninkaallisiin etuihin, jotka tekevät hampurilaiskokemuksestasi unohtumattoman.');
    const l = document.createElement('button');
    return (
      (l.id = 'signUpBtn'),
      l.classList.add(
        'hide',
        'bg-primary',
        'text-secondary',
        'text-sm',
        'px-11',
        'py-2',
        'rounded-3xl',
        'border-solid',
        'border-2',
        'border-transparent',
        'font-semibold',
        'tracking-wider',
        'uppercase',
        'mt-6',
        'cursor-pointer'
      ),
      (l.textContent = 'REKISTERÖIDY NYT'),
      l.addEventListener('click', () => {
        p.classList.add('active');
      }),
      c.append(a, _, l),
      c
    );
  },
  Os = (p) => {
    const c = document.createElement('div');
    c.classList.add(
      'toggleContainer',
      'absolute',
      'top-0',
      'left-1/2',
      'w-1/2',
      'h-full',
      'overflow-hidden',
      'rounded-l-[130px]',
      'z-[1000]'
    );
    const a = document.createElement('div');
    a.classList.add(
      'toggle',
      'bg-secondary',
      'h-full',
      'text-primary',
      'relative',
      '-left-full',
      'h-full',
      'w-[200%]',
      'translate-x-0'
    );
    const _ = zs(p),
      l = As(p);
    return a.append(_, l), c.appendChild(a), c;
  },
  Zs = async () => {
    const p = document.querySelector('#app');
    document.querySelector('header').classList.remove('bg-opacity-0');
    const a = document.createElement('div');
    if (
      (a.classList.add(
        'bg-background-light',
        'h-screen-header',
        'flex',
        'justify-center',
        'items-center',
        'flex-col'
      ),
      await En())
    ) {
      const l = await Ai();
      console.log('Profile page data before generating profile view: ', l);
      const f = document.createElement('div');
      f.classList.add(
        'cont',
        'bg-primary',
        'p-10',
        'rounded-[10px]',
        'shadow-auth',
        'overflow-hidden',
        'w-5/6',
        'max-w-screen-xl',
        'h-5/6'
      ),
        Oi(l, f),
        a.appendChild(f);
    } else {
      history.replaceState({}, '', '/login');
      const l = document.createElement('div');
      (l.id = 'authContainer'),
        l.classList.add(
          'cont',
          'bg-primary',
          'p-10',
          'rounded-3xl',
          'shadow-auth',
          'relative',
          'overflow-hidden',
          'w-3/4',
          'max-w-screen-lg',
          'min-h-[630px]'
        );
      const f = Ms(),
        m = Bs(),
        v = Os(l);
      l.append(f, m, v), a.appendChild(l);
    }
    p == null || p.appendChild(a);
  },
  Rs = {
    '/': us,
    '/menu': _s,
    '/reservation': xs,
    '/restaurants': Ts,
    '/business': rs,
    '/gallery': cs,
    '/login': Zs,
    '/about': ds,
    '/responsibility': Cs,
    '/contact': ls,
    '/reservation/table-selection': Ls,
  },
  Mt = async () => {
    const p = window.location.pathname,
      c = Rs[p],
      a = document.querySelector('#app');
    if (c) {
      if (a)
        if (p === '/reservation/table-selection') {
          if (!Bi() || !(await En())) {
            history.back(),
              history.replaceState({}, '', '/reservation'),
              alert(
                "Don't try to cheat the system! You need to select restaurant, reservation size, time and day before proceeding! Also you need to be logged in! :)"
              ),
              c();
            return;
          }
          (a.innerHTML = ''), c();
        } else (a.innerHTML = ''), c();
    } else {
      const _ = document.querySelector('#app');
      _.innerHTML = '<h1>404 - Page Not Found</h1>';
    }
  },
  Ds = () => {
    const p = document.createElement('ul');
    p.classList.add(
      'flex',
      'mr-5',
      'gap-14',
      'h-full',
      'items-center',
      'px-4',
      'text-h6',
      'text-primary'
    );
    const c = document.querySelector('.hamMenuContent');
    [
      {name: 'Etusivu', value: 'main', href: '/'},
      {name: 'Menu', value: 'menu', href: '/menu'},
      {name: 'Varaa pöytä', value: 'reservation', href: '/reservation'},
      {name: 'Ravintolat', value: 'restaurants', href: '/restaurants'},
      {name: 'Galleria', value: 'gallery', href: '/gallery'},
      {name: 'Yrityksille', value: 'business', href: '/business'},
    ].forEach((v) => {
      const u = document.createElement('li'),
        I = document.createElement('a');
      (u.className = 'h-3/4 flex items-center'),
        (I.textContent = v.name),
        (I.href = v.href),
        (I.className = 'hover:text-yellow'),
        window.location.pathname === v.href &&
          I.classList.add('text-yellow', 'font-bold'),
        I.addEventListener('click', (P) => {
          const S = P.target;
          if (S) {
            const D = S.getAttribute('href');
            P.preventDefault(),
              D && window.location.pathname !== D && (history.pushState({}, '', D), Mt());
          }
          p.querySelectorAll('a').forEach((D) => {
            D.classList.remove('text-yellow', 'font-bold');
          }),
            window.location.pathname === v.href &&
              I.classList.add('text-yellow', 'font-bold');
          const w = c == null ? void 0 : c.querySelectorAll('a');
          w == null ||
            w.forEach((D) => {
              D.classList.remove('text-yellow', 'font-bold');
            });
          const M = c == null ? void 0 : c.querySelector(`a[href="${v.href}"]`);
          M == null || M.classList.add('text-yellow', 'font-bold');
        }),
        (u.dataset.value = v.value),
        u.appendChild(I),
        p.appendChild(u);
      const C = document.createElement('li'),
        y = document.createElement('a');
      (C.className = 'w-full text-center py-2'),
        (y.textContent = v.name),
        (y.href = v.href),
        y.addEventListener('click', (P) => {
          const S = P.target;
          if (S) {
            const B = S.getAttribute('href');
            P.preventDefault(),
              B && window.location.pathname !== B && (history.pushState({}, '', B), Mt());
          }
          const b = c == null ? void 0 : c.querySelectorAll('a');
          b == null ||
            b.forEach((B) => {
              B.classList.remove('text-yellow', 'font-bold');
            }),
            window.location.pathname === v.href &&
              y.classList.add('text-yellow', 'font-bold'),
            p.querySelectorAll('a').forEach((B) => {
              B.classList.remove('text-yellow', 'font-bold');
            });
          const M = p.querySelector(`a[href="${v.href}"]`);
          M == null || M.classList.add('text-yellow', 'font-bold');
          const D = document.querySelector('.hamburgerMenuDisplay');
          D && (D.classList.remove('show'), (document.body.style.overflow = ''));
        }),
        C.appendChild(y),
        c && c.appendChild(C);
    });
    const _ = window.location.pathname || '/',
      l = p.querySelector(`a[href="${_}"]`);
    l == null || l.classList.add('text-yellow', 'font-bold');
    const f = c == null ? void 0 : c.querySelector(`a[href="${_}"]`);
    f == null || f.classList.add('text-yellow', 'font-bold');
    const m = document.querySelector('#navBar');
    m && m.prepend(p);
  },
  Ns = [
    {
      logoName: 'Facebook',
      fontAwesomeClass: 'fa-brands fa-facebook-f',
      href: 'https://www.facebook.com',
    },
    {
      logoName: 'instagram',
      fontAwesomeClass: 'fa-brands fa-instagram',
      href: 'https://www.instagram.com',
    },
    {logoName: 'logIn', fontAwesomeClass: 'fa-solid fa-right-to-bracket', href: '/login'},
  ],
  js = () => {
    const p = document.querySelector('body'),
      c = document.createElement('header');
    c.classList.add('bg-secondary', 'h-20', 'flex', 'justify-between');
    const a = document.createElement('nav');
    (a.id = 'navBar'), a.classList.add('flex', 'mr-10');
    let _ = 0,
      l = 0;
    const f = 50,
      m = document.createElement('div');
    m.classList.add('hamburgerMenuDisplay', 'bg-primary'), document.body.appendChild(m);
    const v = document.createElement('div');
    v.classList.add(
      'flex',
      'justify-center',
      'items-center',
      'h-20',
      'w-20',
      'top-0',
      'right-0',
      'absolute',
      'mr-4',
      'text-background-dark'
    );
    const u = document.createElement('i');
    u.classList.add('fa-solid', 'fa-x', 'text-4xl'), v.appendChild(u);
    const I = document.createElement('ul');
    I.classList.add(
      'w-full',
      'm-[10px]',
      'h-1/2',
      'min-h-64',
      'flex',
      'flex-col',
      'justify-center',
      'items-center',
      'text-background-dark',
      'text-2xl',
      'gap-6',
      'hamMenuContent'
    ),
      v.addEventListener('click', () => {
        console.log('Miika töihin');
        const B = document.querySelector('.hamburgerMenuDisplay');
        B &&
          (B.classList.toggle('show'),
          B.classList.contains('show')
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = ''));
      }),
      document.body.addEventListener('touchstart', (B) => {
        _ = B.touches[0].clientX;
      }),
      document.body.addEventListener('touchmove', (B) => {
        l = B.touches[0].clientX;
      }),
      document.body.addEventListener('touchend', () => {
        _ - l > f
          ? (m.classList.add('show'), (document.body.style.overflow = 'hidden'))
          : _ - l < -f &&
            (m.classList.remove('show'), (document.body.style.overflow = ''));
      }),
      m.append(v, I);
    const C = document.createElement('div');
    C.classList.add('w-20'),
      (C.style.backgroundImage = 'url("/img/rb-logo.png")'),
      (C.style.backgroundSize = 'contain'),
      (C.style.backgroundPosition = 'center'),
      (C.style.backgroundRepeat = 'no-repeat');
    const y = document.createElement('div');
    y.classList.add('vitunSepari', 'bg-primary', 'w-0.5', 'h-2/3', 'self-center', 'mx-3');
    const P = document.createElement('div');
    P.classList.add(
      'flex',
      'justify-center',
      'items-center',
      'gap-1',
      'ml-6',
      'text-primary',
      'hamburgerMenu'
    );
    const S = document.createElement('div');
    S.classList.add('flex', 'logoContainer'),
      Ns.forEach((B) => {
        const O = document.createElement('a');
        (O.href = B.href), (O.className = 'flex p-4 items-center');
        const q = document.createElement('i');
        if (
          ((q.className = B.fontAwesomeClass),
          q.classList.add('text-2xl', 'text-primary', 'pointer-events-none'),
          B.href == '/login' &&
            O.addEventListener('click', (Z) => {
              const R = Z.target.getAttribute('href');
              Z.preventDefault(),
                R &&
                  window.location.pathname !== R &&
                  (history.pushState({}, '', O.href), Mt());
            }),
          O.appendChild(q),
          S.appendChild(O),
          B.logoName === 'logIn')
        ) {
          O.classList.add('loginButton');
          const Z = O.cloneNode(!0);
          P.appendChild(Z);
        }
      });
    const b = document.createElement('div');
    b.classList.add(
      'languageContainer',
      'flex',
      'flex-col',
      'justify-center',
      'gap-1',
      'ml-4',
      'text-primary'
    );
    const w = document.createElement('button');
    w.textContent = 'FI';
    const M = document.createElement('button');
    (M.textContent = 'EN'),
      w.addEventListener('click', () => {
        localStorage.setItem('language', 'FI'), Mt();
      }),
      M.addEventListener('click', () => {
        localStorage.setItem('language', 'EN'), Mt();
      }),
      b.append(w, M);
    const D = document.createElement('i');
    D.classList.add('fa-solid', 'fa-bars', 'text-4xl', 'cursor-pointer'),
      P.append(D),
      P.addEventListener('click', () => {
        const B = document.querySelector('.hamburgerMenuDisplay');
        B &&
          (B.classList.toggle('show'),
          B.classList.contains('show')
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = ''));
      }),
      a.append(y, S, b, P),
      m.append(v),
      c.append(C, a),
      p.prepend(c, m),
      Ds();
  };
window.addEventListener('popstate', Mt);
js();
ss();
Mt();
//# sourceMappingURL=index-D7m7DN82.js.map
