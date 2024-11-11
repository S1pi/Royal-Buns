const header = () => {
  const body = document.querySelector('body') as HTMLBodyElement;
  const header = document.createElement('header');

  // Annetaan tailwind css luokkia
  header.classList.add('bg-secondary', 'h-16', 'flex', 'justify-between');

  const nav = document.createElement('nav');
  nav.classList.add('flex', 'mr-10');

  const headerLinks = document.createElement('ul');
  headerLinks.classList.add(
    'flex',
    'gap-12',
    'h-full',
    'items-center',
    'px-4',
    'text-h2',
    'text-primary'
  );

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
  // Note to self: Muuta mahdollisesti käyttämään (a) elementtejä sekä href liikkumista varten
  links.forEach((item) => {
    const listItem = document.createElement('li') as HTMLLIElement;
    const btn = document.createElement('button');
    listItem.className = 'h-3/4 flex items-center';
    btn.textContent = item.name;
    listItem.dataset.value = item.value;
    listItem.appendChild(btn);
    headerLinks.appendChild(listItem);
  });

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
    'mx-3'
  );

  // List of logos and their attributes (Logos comes from fontawesome)
  const logos = [
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
    {
      logoName: 'logIn',
      fontAwesomeClass: 'fa-solid fa-right-to-bracket',
      href: '/login',
    },
  ];
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('flex');

  // Iterating through list and adding to DOM
  logos.forEach((item) => {
    const link = document.createElement('a');
    link.href = item.href;
    link.className = 'flex p-4 items-center';
    const icon = document.createElement('i');
    icon.className = item.fontAwesomeClass as string;
    icon.classList.add('text-2xl', 'text-primary');
    link.appendChild(icon);
    logoContainer.appendChild(link);
  });

  // Language selection buttons
  const languageContainer = document.createElement('div');
  languageContainer.classList.add(
    'flex',
    'flex-col',
    'justify-center',
    'gap-1',
    'ml-4',
    'text-primary'
  );

  const fin = document.createElement('button');
  fin.textContent = 'FI';
  const en = document.createElement('button');
  en.textContent = 'EN';

  languageContainer.append(fin, en);

  // Adding all elements created to the header
  nav.append(headerLinks, divSeperator, logoContainer, languageContainer);
  header.append(rbLogo, nav);
  // Adding header as first element of body
  body.prepend(header);
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
