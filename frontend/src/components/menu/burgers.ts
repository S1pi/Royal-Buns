import { header } from "../header/header";

const burgers = () => {
    // Select the #app div
    const appDiv = document.querySelector('#app') as HTMLElement;
    appDiv.classList.add(
      'bg-background-light',
      'p-5',
      'h-screen',
      'flex',
      'flex-col',
      'justify-center'
    );
      header(); // Ensure header is placed inside appDiv 

      // Create the main menus container and style it
      const mainMenuContainer = document.createElement('div');
      mainMenuContainer.classList.add(
        'mx-auto', // Center the container horizontally
        'm-10', // Margin top for spacing
        'bg-primary',
        'h-3/4',
        'w-3/4', // Minimum height of the container
        'flex',
        'flex-col',
        'p-5' // Padding
      );
      appDiv.appendChild(mainMenuContainer);
      const menuSelectionContainer = document.createElement('button');
      menuSelectionContainer.classList.add(
        'flex',
        'justify-center',
        'items-center',
        'gap-2',
        'mt-5',
        'flex-row',
        'bg-primary',
        'w-3/6',
        'h-1/3'
      );
      mainMenuContainer.appendChild(menuSelectionContainer);
      const burgerMenuSelector = document.createElement('button');
      burgerMenuSelector.textContent = 'BURGERS';
      burgerMenuSelector.classList.add(
        'flex',
        'text-h1', // Use custom h1 size from tailwind config
        'font-bold', // Bold text
        'text-center', // Center text
        'justify-center', // Flex to center the text in case it's inside a flex container
        'text-red' // Custom red color from config
      );
      menuSelectionContainer.appendChild(burgerMenuSelector);
  };

  export { burgers };