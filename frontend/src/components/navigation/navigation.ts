import {router} from './router';

const navigation = () => {
  const headerLinks = document.createElement('ul');
  headerLinks.classList.add(
    'flex',
    'mr-5',
    'gap-14',
    'h-full',
    'items-center',
    'px-4',
    'text-h6',
    'text-primary'
  );

  let language = localStorage.getItem('language') as 'FI' | 'EN';
  if (language !== 'FI' && language !== 'EN') {
    localStorage.setItem('language', 'FI');
    router();
  }

  const hamburgerMenuContent = document.querySelector('.hamMenuContent');
  const finLinks = [
    {name: 'Etusivu', value: 'main', href: '/'},
    {name: 'Menu', value: 'menu', href: '/menu'},
    {name: 'Varaa pöytä', value: 'reservation', href: '/reservation'},
    {name: 'Ravintolat', value: 'restaurants', href: '/restaurants'},
    {name: 'Galleria', value: 'gallery', href: '/gallery'},
    {name: 'Yrityksille', value: 'business', href: '/business'}, // Väliaikaisesti about us
  ];

  const enLinks = [
    {name: 'Home', value: 'main', href: '/'},
    {name: 'Menu', value: 'menu', href: '/menu'},
    {name: 'Book a Table', value: 'reservation', href: '/reservation'},
    {name: 'Restaurants', value: 'restaurants', href: '/restaurants'},
    {name: 'Gallery', value: 'gallery', href: '/gallery'},
    {name: 'Business reservations', value: 'business', href: '/business'},
  ];
  console.log(language);
  let links = [];
  if (language === 'FI') {
    links = finLinks;
    console.log(language);
  } else {
    links = enLinks;
    console.log(language);
  }
  // Created all items for navbar

  // Iterating through list and adding them to DOM
  links.forEach((item) => {
    // Luo listaelementti ja linkki nav-baariin
    const listItem = document.createElement('li') as HTMLLIElement;
    const a = document.createElement('a');
    listItem.className = 'h-3/4 flex items-center';
    a.textContent = item.name;
    a.href = item.href;
    a.className = 'hover:text-yellow';

    // Adds yellow color and bold to main site
    if (window.location.pathname === item.href) {
      a.classList.add('text-yellow', 'font-bold');
    }

    // Lisää eventListener nav-baarin linkeille
    a.addEventListener('click', (e) => {
      const target = e.target as HTMLLinkElement;
      if (target) {
        const href = target.getAttribute('href');
        e.preventDefault();
        if (href) {
          if (window.location.pathname !== href) {
            history.pushState({}, '', href);
            router(); // Päivitä sisältö käyttäjälle
          }
        }
      }
      // Poista valinnat muista linkeistä nav-baarissa
      const allLinks = headerLinks.querySelectorAll('a');
      allLinks.forEach((link) => {
        link.classList.remove('text-yellow', 'font-bold');
      });

      // Lisää aktiivisen sivun tyylit
      if (window.location.pathname === item.href) {
        a.classList.add('text-yellow', 'font-bold');
      }

      // Hampurilaisvalikon linkit samaksi
      const allHamburgerLinks = hamburgerMenuContent?.querySelectorAll('a');
      allHamburgerLinks?.forEach((link) => {
        link.classList.remove('text-yellow', 'font-bold');
      });

      const correspondingHamburgerLink = hamburgerMenuContent?.querySelector(
        `a[href="${item.href}"]`
      );
      correspondingHamburgerLink?.classList.add('text-yellow', 'font-bold');
    });

    // Lisää nav-baarin linkit
    listItem.dataset.value = item.value;
    listItem.appendChild(a);
    headerLinks.appendChild(listItem);

    // Luo linkit myös hampurilaisvalikkoon
    const hamburgerListItem = document.createElement('li') as HTMLLIElement;
    const hamburgerLink = document.createElement('a');
    hamburgerListItem.className = 'w-full text-center py-2';
    hamburgerLink.textContent = item.name;
    hamburgerLink.href = item.href;

    // Lisää eventListener hampurilaisvalikon linkeille
    hamburgerLink.addEventListener('click', (e) => {
      const target = e.target as HTMLLinkElement;
      if (target) {
        const href = target.getAttribute('href');
        e.preventDefault();
        if (href) {
          if (window.location.pathname !== href) {
            history.pushState({}, '', href);
            router(); // Päivitä sisältö käyttäjälle
          }
        }
      }

      // Poista valinnat muista linkeistä hampurilaisvalikossa
      const allHamburgerLinks = hamburgerMenuContent?.querySelectorAll('a');
      allHamburgerLinks?.forEach((link) => {
        link.classList.remove('text-yellow', 'font-bold');
      });

      // Lisää aktiivisen sivun tyylit hampurilaisvalikkoon
      if (window.location.pathname === item.href) {
        hamburgerLink.classList.add('text-yellow', 'font-bold');
      }

      // Synkronoi header-linkkien tyylit
      const allLinks = headerLinks.querySelectorAll('a');
      allLinks.forEach((link) => {
        link.classList.remove('text-yellow', 'font-bold');
      });

      const correspondingHeaderLink = headerLinks.querySelector(`a[href="${item.href}"]`);
      correspondingHeaderLink?.classList.add('text-yellow', 'font-bold');

      // Sulje hampurilaisvalikko
      const menuDisplay = document.querySelector(
        '.hamburgerMenuDisplay'
      ) as HTMLDivElement;
      if (menuDisplay) {
        menuDisplay.classList.remove('show');
        document.body.style.overflow = '';
      }
    });

    hamburgerListItem.appendChild(hamburgerLink);
    if (hamburgerMenuContent) {
      hamburgerMenuContent.appendChild(hamburgerListItem);
    }
  });

  const currentPath = window.location.pathname || '/';
  const activeHeaderLink = headerLinks.querySelector(`a[href="${currentPath}"]`);
  activeHeaderLink?.classList.add('text-yellow', 'font-bold');

  const activeHamburgerLink = hamburgerMenuContent?.querySelector(
    `a[href="${currentPath}"]`
  );
  activeHamburgerLink?.classList.add('text-yellow', 'font-bold');

  const navBar = document.querySelector('#navBar');
  if (navBar) {
    navBar.prepend(headerLinks);
  }
};

export {navigation};
