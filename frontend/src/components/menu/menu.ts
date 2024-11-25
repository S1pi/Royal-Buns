import {menuNavigation} from './menuNavigation';

//the main menu rendering logic
const menu = () => {
  // Select the #app div
  const appDiv = document.querySelector('#app') as HTMLElement;
  const header = document.querySelector('header');
  header?.classList.remove('bg-opacity-0');

  const bgContainer = document.createElement('div');
  bgContainer.classList.add(
    'bg-background-light',
    'p-5',
    'h-screen',
    'flex',
    'flex-col',
    'justify-center',
    'items-center'
  );

  // wrapper for the main content of the site
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'w-2/3',
    'h-5/6'
  );
  bgContainer.appendChild(contentWrapper);
  appDiv.appendChild(bgContainer);

  // use the navigation from menuNavigation.ts
  //render the menus based on the selection from menuSites and using the menuNavigation.ts
  // Create the main menus container and style it
  const menuDataContainer = document.createElement('div');
  menuDataContainer.classList.add(
    'bg-primary',
    // 'h-full',
    'w-full', // Match width with the button container above
    'flex',
    'flex-col',
    'p-14' // Padding
  );

  menuNavigation(contentWrapper, menuDataContainer);
  contentWrapper.appendChild(menuDataContainer);
};

export {menu};
