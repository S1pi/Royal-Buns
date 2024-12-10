import { handleLanguageChange } from '../../utils/handleLanguageChange';
import {navigation} from '../navigation/navigation';
import {router} from '../navigation/router';

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

let headerLoginElement = null as HTMLAnchorElement | null;

const header = () => {
  const body = document.querySelector('body') as HTMLBodyElement;
  const header = document.createElement('header');
  // Get the language from the session storage
  let language = localStorage.getItem('language') as 'FI' | 'EN';

  if (language !== 'FI' && language !== 'EN') {
    localStorage.setItem('language', 'FI');
    router();
  }
  // Annetaan tailwind css luokkia
  header.classList.add('bg-secondary', 'h-20', 'flex', 'justify-between');

  const nav = document.createElement('nav');
  nav.id = 'navBar';
  nav.classList.add('flex', 'mr-10');

  let touchStartX = 0; // Kosketuksen aloituspaikka
  let touchEndX = 0; // Kosketuksen lopetuspaikka
  const swipeThreshold = 50;

  // Hamburger menu creation:
  const hamburgerMenuDisplay = document.createElement('div');
  hamburgerMenuDisplay.classList.add('hamburgerMenuDisplay', 'bg-primary');
  document.body.appendChild(hamburgerMenuDisplay);

  const hamburgerMenuDisplayCloseCont = document.createElement('div');
  hamburgerMenuDisplayCloseCont.classList.add(
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

  const hamburgerMenuCloseIcon = document.createElement('i');
  hamburgerMenuCloseIcon.classList.add('fa-solid', 'fa-x', 'text-4xl', 'cursor-pointer');
  hamburgerMenuDisplayCloseCont.appendChild(hamburgerMenuCloseIcon);

  // Still need to add the logo to the hamburger menu
  // And implement the functionality for the links
  const hamburgerMenuLoginLogo = document.createElement('div');

  const hamburgerMenuContent = document.createElement('ul');
  hamburgerMenuContent.classList.add(
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
  );

  hamburgerMenuDisplayCloseCont.addEventListener('click', () => {
    console.log('Miika töihin');
    const menuDisplay = document.querySelector('.hamburgerMenuDisplay') as HTMLDivElement;

    if (menuDisplay) {
      // toggle "show" class
      menuDisplay.classList.toggle('show');

      // toggle body overflow
      if (menuDisplay.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  });

  hamburgerMenuDisplay.append(hamburgerMenuDisplayCloseCont, hamburgerMenuContent);
  hamburgerMenuDisplay.append(hamburgerMenuDisplayCloseCont, hamburgerMenuContent);

  // Navbar Royal-buns logo creation and vertical separator for navbar and link logos
  const rbLogo = document.createElement('div');
  rbLogo.classList.add('w-20');
  rbLogo.style.backgroundImage = 'url("/img/rb-logo.png")';
  rbLogo.style.backgroundSize = 'contain';
  rbLogo.style.backgroundPosition = 'center';
  rbLogo.style.backgroundRepeat = 'no-repeat';
  const divSeperator = document.createElement('div');
  divSeperator.classList.add(
    'vitunSepari',
    'bg-primary',
    'w-0.5',
    'h-2/3',
    'self-center',
    'mx-3'
  );

  // Hamburger menu container for login and hamburger icon
  const hamburgerMenuContainer = document.createElement('div');
  hamburgerMenuContainer.classList.add(
    'flex',
    'justify-center',
    'items-center',
    'gap-1',
    'ml-6',
    'text-primary',
    'hamburgerMenu'
  );

  // List of logos and their attributes (Logos comes from fontawesome)
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('flex', 'logoContainer');

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

    if (item.logoName === 'logIn') {
      link.classList.add('loginButton');
      const loginClone = link.cloneNode(true) as HTMLAnchorElement;
      hamburgerMenuContainer.appendChild(loginClone);
    }
  });

  // Language selection buttons
  const languageContainer = document.createElement('div');
  languageContainer.classList.add(
    'languageContainer',
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

  fin.addEventListener('click', () => {
   handleLanguageChange('FI');
  });

  en.addEventListener('click', () => {
    handleLanguageChange('EN');
  });

  languageContainer.append(fin, en);

  //ADD: HamburgerMenu to here

  const hamburgerIcon = document.createElement('i');
  hamburgerIcon.classList.add('fa-solid', 'fa-bars', 'text-4xl', 'cursor-pointer');

  hamburgerMenuContainer.append(hamburgerIcon);

  hamburgerIcon.addEventListener('click', () => {
    const menuDisplay = document.querySelector('.hamburgerMenuDisplay') as HTMLDivElement;

    if (menuDisplay) {
      // Togglaa "show"-luokka
      menuDisplay.classList.toggle('show');

      // Togglaa body:n overflow
      if (menuDisplay.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  });

  // Adding all elements created to the header
  nav.append(divSeperator, logoContainer, languageContainer, hamburgerMenuContainer);

  hamburgerMenuDisplay.append(hamburgerMenuDisplayCloseCont);
  header.append(rbLogo, nav);
  // Adding header as first element of body
  body.prepend(header, hamburgerMenuDisplay);

  // After created all other elements for header we call navigation function to prepend all navigation links to navbar
  navigation();
};

export {header};
