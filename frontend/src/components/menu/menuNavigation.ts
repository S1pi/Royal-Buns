import {burgers} from './menuSites/burgers';
import {sides} from './menuSites/sides';
import {sliders} from './menuSites/sliders';

const menuNavigation = (
  contentWrapper: HTMLDivElement,
  menuDataContainer: HTMLDivElement
) => {
  // const contentWrapper = document.createElement('div');
  // contentWrapper.classList.add(
  //   'flex',
  //   'flex-col',
  //   'items-center',
  //   'justify-center',
  //   'min-h-screen'
  // );

  // Create the menu selection container and style it
  const menuSelectionContainer = document.createElement('div');
  menuSelectionContainer.classList.add(
    'flex',
    'justify-between',
    'items-center',
    'bg-primary',
    'w-2/4', // Set width to match the main menu container
    'p-2', // Padding for spacing inside
    'text-center'
  );
  contentWrapper.appendChild(menuSelectionContainer);

  // Create the selection buttons for menus
  const menuButtons = ['BURGERS', 'SLIDERS', 'SIDES'];
  menuButtons.forEach((text) => {
    const menuSelectionButton = document.createElement('button');
    menuSelectionButton.textContent = text;
    menuSelectionButton.classList.add(
      'flex-1',
      'text-h5', // Use custom size from Tailwind config
      'font-bold', // Bold text
      'text-center', // Center text
      'text-red' // Custom red color from config
    );

    // Add event listeners to the buttons
    menuSelectionButton.addEventListener('click', () => {
      // Clear the existing content
      // contentWrapper.innerHTML = '';

      // Append the menu selection container again
      // contentWrapper.appendChild(menuSelectionContainer);

      // Load the appropriate content based on the button clicked
      switch (text) {
        case 'BURGERS':
          menuDataContainer.innerHTML = '';
          burgers(menuDataContainer);
          break;
        case 'SLIDERS':
          menuDataContainer.innerHTML = '';
          sliders(menuDataContainer);
          break;
        case 'SIDES':
          menuDataContainer.innerHTML = '';
          sides(menuDataContainer);
          break;
      }
    });

    menuSelectionContainer.appendChild(menuSelectionButton);
  });

  // Append the content wrapper to the body or a specific container
  // app.appendChild(contentWrapper);
};

export {menuNavigation};
