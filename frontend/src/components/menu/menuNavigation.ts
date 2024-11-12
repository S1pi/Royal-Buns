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
  // menuSelectionContainer.id = 'menuButtonSelection';
  menuSelectionContainer.classList.add(
    'flex',
    'justify-between',
    'items-center',
    'bg-primary',
    'w-2/4', // Set width to match the main menu container
    'text-center'
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
      'p-2', // Padding for spacing inside
      'flex-1',
      'text-h5', // Use custom size from Tailwind config
      'font-bold', // Bold text
      'text-center', // Center text
      'text-red', // Custom red color from config
      'border-solid',
      'border-black',
      'border-y-2'
    );

    menuButtonsElements.forEach((element) => {
      switch (element.id) {
        case 'sliders':
          element.classList.add('border-x-2');
          break;
        case 'burgers':
          element.classList.add('border-l-2');
          break;
        case 'sides':
          element.classList.add('border-r-2');
          break;
        case 'drinks':
          element.classList.add('border-r-2');
          break;
      }
    });

    menuSelectionContainer.appendChild(menuSelectionButton);

    // Add event listeners to the buttons
    menuSelectionButton.addEventListener('click', () => {
      // Clear the existing content
      menuDataContainer.innerHTML = '';
      // Load the appropriate content based on the button clicked
      switch (text) {
        case 'BURGERS':
          menuButtonsElements.forEach((button) => {
            button.classList.remove('border-b-primary');
          });
          burgers(menuDataContainer, menuSelectionButton);
          break;
        case 'SLIDERS':
          menuButtonsElements.forEach((button) => {
            button.classList.remove('border-b-primary');
          });
          sliders(menuDataContainer, menuSelectionButton);
          break;
        case 'SIDES':
          menuButtonsElements.forEach((button) => {
            button.classList.remove('border-b-primary');
          });
          sides(menuDataContainer, menuSelectionButton);
          break;
        case 'DRINKS':
          menuButtonsElements.forEach((button) => {
            button.classList.remove('border-b-primary');
          });
          drinks(menuDataContainer, menuSelectionButton);
          break;
      }
    });
    // Add burger menu to show first
    if (text == 'BURGERS') burgers(menuDataContainer, menuSelectionButton);
  });
};

export {menuNavigation};
