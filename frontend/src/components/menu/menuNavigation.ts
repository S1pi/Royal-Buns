import {burgers} from './menuSites/burgers';
import {drinks} from './menuSites/drinks';
import {sides} from './menuSites/sides';
import {sliders} from './menuSites/sliders';

const menuNavigation = (
  contentWrapper: HTMLDivElement,
  menuDataContainer: HTMLDivElement
) => {
  // Create the menu selection container and style it
  const menuSelectionContainer = document.createElement('div');
  menuSelectionContainer.classList.add(
    'flex',
    'justify-center',
    'items-center',
    'w-full', // Set width to match the main menu container
    'text-center',
    'm-10',
    'menuSelectionContainer'
  );

  contentWrapper.appendChild(menuSelectionContainer);

  // Create the selection buttons for menus
  const menuButtons = ['BURGERS', 'SLIDERS', 'SIDES', 'DRINKS'];
  const menuButtonsElements: HTMLButtonElement[] = [];
  menuButtons.forEach((text) => {
    const menuSelectionButton = document.createElement('button');
    menuButtonsElements.push(menuSelectionButton);
    menuSelectionButton.id = text.toLowerCase();
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    menuSelectionButton.appendChild(textSpan);
    menuSelectionButton.classList.add(
      'px-6',
      'py-2',
      'flex-1',
      'text-h5',
      'font-bold',
      'text-center',
      'text-white',
      'rounded-xl',
      'bg-olive-green',
      'bg-opacity-65',
      'my-0',
      'mx-6',
      'shadow-lg',
      'hover:text-yellow',
      'menuSelection'
    );

    menuSelectionContainer.appendChild(menuSelectionButton);

    // Add event listeners to the buttons
    menuSelectionButton.addEventListener('click', () => {
      // Clear the existing content
      menuDataContainer.innerHTML = '';

      // Remove active class from all buttons
      menuButtonsElements.forEach((button) => {
        button.classList.remove('bg-hover-green');
      });

      // Add active class to the clicked button
      menuSelectionButton.classList.add('bg-hover-green');

      // Load the appropriate content based on the button clicked
      switch (text) {
        case 'BURGERS':
          burgers(menuDataContainer, menuSelectionButton);
          break;
        case 'SLIDERS':
          sliders(menuDataContainer, menuSelectionButton);
          break;
        case 'SIDES':
          sides(menuDataContainer, menuSelectionButton);
          break;
        case 'DRINKS':
          drinks(menuDataContainer, menuSelectionButton);
          break;
      }
    });

    // Add burger menu to show first
    if (text == 'BURGERS') {
      burgers(menuDataContainer, menuSelectionButton);
      menuSelectionButton.classList.add('bg-hover-green'); // Set default active button
    }
  });
};

export {menuNavigation};
