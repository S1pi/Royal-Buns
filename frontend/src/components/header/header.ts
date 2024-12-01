import {navigation} from '../navigation/navigation';
import {router} from '../navigation/router';

const translations: {[key: string]: {[key: string]: string}} = {
  FI: {
    main: 'Etusivu',
    menu: 'Menu',
    reservation: 'Varaa Pöytä',
    restaurants: 'Ravintolat',
    gallery: 'Galleria',
    business: 'Yrityksille',
  },
  EN: {
    main: 'Home',
    menu: 'Menu',
    reservation: 'Book a Table',
    restaurants: 'Restaurants',
    gallery: 'Gallery',
    business: 'Business reservations',
  },
};

const header = () => {
  const body = document.querySelector('body') as HTMLBodyElement;
  const header = document.createElement('header');

  // Annetaan tailwind css luokkia
  header.classList.add('bg-secondary', 'h-20', 'flex', 'justify-between');

  const nav = document.createElement('nav');
  nav.id = 'navBar';
  nav.classList.add('flex', 'mr-10');

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
    'w-0.5',
    'h-2/3',
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
    icon.classList.add('text-2xl', 'text-primary', 'pointer-events-none');
    if (item.href == '/login') {
      link.addEventListener('click', (e) => {
        const target = e.target as HTMLLinkElement;
        const href = target.getAttribute('href');
        e.preventDefault();
        if (href) {
          if (window.location.pathname !== href) {
            history.pushState({}, '', link.href);
            router(); // Updates page to user
          }
        }
      });
    }
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

  // !!! Language selection needs to be re-implemented
  // // language update function for links
  // const updateLanguage = (lang: 'FI' | 'EN') => {
  //   links.forEach((item) => {
  //     const linkElement = headerLinks.querySelector(
  //       `li[data-value="${item.value}"] button`
  //     ) as HTMLButtonElement;
  //     const key = item.value.toLowerCase();
  //     linkElement.textContent = translations[lang][key];
  //   });
  // };

  // // Event listeners for language buttons
  // fin.addEventListener('click', () => {
  //   updateLanguage('FI');
  //   console.log('töihin');
  // });

  // en.addEventListener('click', () => updateLanguage('EN'));

  // Adding all elements created to the header
  nav.append(divSeperator, logoContainer, languageContainer);
  header.append(rbLogo, nav);
  // Adding header as first element of body
  body.prepend(header);

  // After created all other elements for header we call navigation function to prepend all navigation links to navbar
  navigation();
};

export {header};
