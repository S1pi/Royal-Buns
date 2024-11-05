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

  const links = [
    {name: 'Etusivu', value: 'main'},
    {name: 'Menu', value: 'menu'},
    {name: 'Varaa Pöytä', value: 'reservation'},
    {name: 'Ravintolat', value: 'restaurants'},
    {name: 'Galleria', value: 'gallery'},
    {name: 'Yrityksille', value: 'business'},
  ];

  links.forEach((item) => {
    const listItem = document.createElement('li') as HTMLLIElement;
    listItem.className = 'hover:cursor-pointer h-3/4 flex items-center';
    listItem.textContent = item.name;
    listItem.dataset.value = item.value;
    headerLinks.appendChild(listItem);
  });

  nav.appendChild(headerLinks);

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

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('flex');
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

  const languageContainer = document.createElement('div');

  header.append(rbLogo, nav, divSeperator, logoContainer);
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
