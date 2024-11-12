import {header} from '../../header/header';
import {sides} from './sides';
import {sliders} from './sliders';

const burgers = () => {
  // Select the #app div
  // const appDiv = document.querySelector('#app') as HTMLElement;
  // appDiv.classList.add(
  //   'bg-background-light',
  //   'p-5',
  //   'h-screen',
  //   'flex',
  //   'flex-col',
  //   'justify-center'
  // );

  const daySpecial = document.createElement('div');
  daySpecial.classList.add(
    'bg-primary',
    'text-center',
    'text-white',
    'p-2',
    'mb-4'
  );
  daySpecial.textContent = "Today's Special: Classic Chicken Burger for €13.99";
  // appDiv.appendChild(daySpecial);

  // wrapper for the main content of the site
  // const contentWrapper = document.createElement('div');
  // contentWrapper.classList.add('flex', 'flex-col', 'items-center', 'w-full');
  // appDiv.appendChild(contentWrapper);

  // Create the main menus container and style it
  const mainMenuContainer = document.createElement('div');
  mainMenuContainer.classList.add(
    'bg-primary',
    'h-3/4',
    'w-full', // Match width with the button container above
    'flex',
    'flex-col',
    'p-5' // Padding
  );
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
  // contentWrapper.appendChild(menuSelectionContainer);

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
      // Load the appropriate content based on the button clicked
      if (text === 'BURGERS') {
        burgers();
      } else if (text === 'SLIDERS') {
        sliders();
      } else if (text === 'SIDES') {
        sides();
      }
    });

    menuSelectionContainer.appendChild(menuSelectionButton);
  });

  // contentWrapper.appendChild(mainMenuContainer);

  // Menu grid container creation
  const menuItems = [
    {
      id: 1,
      name: 'The Royal Classic',
      diets: 'basic',
      description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato.',
      image: 'path-to-image1.jpg',
      price: '€12.99',
      day: 'Thursday',
    },
    {
      id: 2,
      name: 'Spicy Fiesta',
      diets: 'MUY CALIENTE!',
      description:
        'A zesty burger with jalapeños, spicy sauce, and pepper jack cheese.',
      image: 'path-to-image2.jpg',
      price: '€14.99',
      day: 'Wednesday',
    },
    {
      id: 3,
      name: 'BBQ Bliss',
      diets: 'gluten-free',
      description: 'BBQ beef patty with smoked cheese and caramelized onions.',
      image: 'path-to-image3.jpg',
      price: '€13.49',
      day: 'Tuesday',
    },
    {
      id: 4,
      name: 'Veggie Delight',
      diets: 'vegetarian',
      description: 'A healthy veggie patty with fresh lettuce and tomato.',
      image: 'path-to-image4.jpg',
      price: '€11.49',
      day: 'Everyday',
    },
    {
      id: 5,
      name: 'Cheesy Overload',
      diets: 'lactose-free',
      description: 'Double cheese, bacon, and a juicy beef patty.',
      image: 'path-to-image5.jpg',
      price: '€15.99',
      day: 'Monday',
    },
    {
      id: 6,
      name: 'Classic Chicken',
      diets: 'halal',
      description: 'Crispy chicken patty with lettuce and mayo.',
      image: 'path-to-image6.jpg',
      price: '€13.99',
      day: 'Friday',
    },
  ];

  const menuGridContainer = document.createElement('div');
  menuGridContainer.classList.add('grid', 'grid-cols-3', 'gap-4', 'w-full');

  menuItems.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add(
      'flex',
      'flex-col',
      'items-center',
      'bg-white',
      'p-4',
      'rounded-md',
      'shadow-md'
    );
    const itemTitle = document.createElement('h3');
    itemTitle.textContent = item.name;
    itemTitle.classList.add('font-bold', 'text-lg', 'text-center');

    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;
    itemDescription.classList.add('text-sm', 'text-gray-600', 'text-center');

    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;
    itemPrice.classList.add('text-lg', 'text-red-500', 'font-semibold');

    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);

    menuGridContainer.appendChild(menuItem);
    // menu item creation for a 3x2 grid

    mainMenuContainer.appendChild(menuGridContainer);
    // contentWrapper.appendChild(mainMenuContainer);
  });
};
export {burgers};
