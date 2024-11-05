const header = (element: HTMLElement) => {
  const body = document.querySelector('body') as HTMLBodyElement;
  const header = document.createElement('header');

  // Annetaan tailwind css luokkia
  header.classList.add('bg-secondary', 'h-16');
  header.classList.add('flex');

  const nav = document.createElement('nav');
  nav.classList.add('bg-primary');

  const headerLinks = document.createElement('ul');
  headerLinks.classList.add('flex', 'gap-8', 'h-full', 'items-center', 'px-4');

  // Created all items for navbar
  const links = [
    {name: 'Etusivu', value: 'main'},
    {name: 'Menu', value: 'menu'},
    {name: 'Varaa Pöytä', value: 'reservation'},
    {name: 'Ravintolat', value: 'restaurants'},
    {name: 'Galleria', value: 'gallery'},
    {name: 'Yrityksille', value: 'business'},
  ];

  // Iterating throuh list and adding them to dom
  links.forEach((item) => {
    const listItem = document.createElement('li') as HTMLLIElement;
    const btn = document.createElement('button');
    listItem.className = 'h-3/4 flex items-center';
    btn.textContent = item.name;
    listItem.dataset.value = item.value;
    listItem.appendChild(btn);
    headerLinks.appendChild(listItem);
  });

  nav.appendChild(headerLinks);

  // Navbar Royal-buns logo creation and vertical separator for navbar and link logos
  const rbLogo = document.createElement('div');
  rbLogo.classList.add('w-20');
  rbLogo.style.backgroundImage = 'url("/img/rb-logo.png")';
  rbLogo.style.backgroundSize = 'contain';
  rbLogo.style.backgroundPosition = 'center';
  rbLogo.style.backgroundRepeat = 'no-repeat';
  const divSeperator = document.createElement('div');
  divSeperator.classList.add(
    'bg-primary',
    'w-1',
    'h-5/6',
    'self-center',
    'mx-6'
  );

  // List of logos and their attributes
  const logos = [
    {
      logoName: 'Facebook',
      logoSrc: '/img/placeholder.png',
      href: 'https://www.facebook.com',
    },
    {
      logoName: 'instagram',
      logoSrc: '/img/placeholder.png',
      href: 'https://www.instagram.com',
    },
    {
      logoName: 'logIn',
      logoSrc: '/img/placeholder.png',
      href: '/login',
    },
  ];
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('flex');

  // Iterating through list and adding to DOM
  logos.forEach((item) => {
    const link = document.createElement('a');
    link.href = item.href;
    link.className = 'flex mx-4';
    const img = document.createElement('img');
    img.src = item.logoSrc;
    img.alt = item.logoName;
    link.appendChild(img);
    logoContainer.appendChild(link);
  });

  // Language selection buttons
  const languageContainer = document.createElement('div');
  languageContainer.classList.add(
    'flex',
    'flex-col',
    'justify-center',
    'gap-1',
    'text-primary'
  );

  const fin = document.createElement('button');
  fin.textContent = 'FI';
  const en = document.createElement('button');
  en.textContent = 'EN';

  languageContainer.append(fin, en);

  // Adding all elements created to the header and appending that to DOM
  header.append(rbLogo, nav, divSeperator, logoContainer, languageContainer);
  body.appendChild(header);
};

const navigation = (page: string) => {
  const dataContainer = document.getElementById('app');

  if (!dataContainer) {
    throw new Error('Elementtiä ei löydetty');
  } else {
    // Ekana nollataan koko sivu Inner.HTML avulla
    dataContainer.innerHTML = '';

    switch (page) {
      case 'main':
        // Load mainscreen function
        break;
      case 'menu':
        // Load menu screen function
        break;
      default:
        console.error('Something went wrong');
    }
  }
};

export {header};
