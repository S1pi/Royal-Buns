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

  // Created all items for navbar
  const links = [
    {name: 'Etusivu', value: 'main', href: '/'},
    {name: 'Menu', value: 'menu', href: '/menu'},
    {name: 'Varaa pöytä', value: 'reservation', href: '/reservation'},
    {name: 'Ravintolat', value: 'restaurants', href: '/restaurants'},
    {name: 'Galleria', value: 'gallery', href: '/gallery'},
    {name: 'Yrityksille', value: 'business', href: '/business'}, // Väliaikaisesti about us
  ];

  // Iterating throuh list and adding them to dom
  links.forEach((item) => {
    const listItem = document.createElement('li') as HTMLLIElement;
    const a = document.createElement('a');
    listItem.className = 'h-3/4 flex items-center';
    a.textContent = item.name;
    a.href = item.href;

    // Adds eventListner for links to reload new page without refreshing the app
    a.addEventListener('click', (e) => {
      const target = e.target as HTMLLinkElement;
      if (target) {
        const href = target.getAttribute('href');
        e.preventDefault();
        if (href) {
          if (window.location.pathname !== href) {
            history.pushState({}, '', href);
            // window.location.pathname = href;
            router(); // Updates page to user
          }
        }
      }
      // Remove yellow color and bold from all header links
      const allLinks = headerLinks.querySelectorAll('a');
      allLinks.forEach((link) => {
        link.classList.remove('text-yellow', 'font-bold');
      });

      //Add yellow color and bold to active site
      if (window.location.pathname === item.href) {
        a.classList.add('text-yellow', 'font-bold');
      }
    });

    listItem.dataset.value = item.value;
    listItem.appendChild(a);
    headerLinks.appendChild(listItem);
  });
  const navBar = document.querySelector('#navBar');
  if (navBar) {
    navBar.prepend(headerLinks);
  }
};

export {navigation};
