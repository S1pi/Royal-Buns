const sides = () => {
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

  // wrapper for the main content of the site
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('flex', 'flex-col', 'items-center', 'w-full');
  appDiv.appendChild(contentWrapper);

  // Create the menu selection container and style it
  const menuSelectionContainer = document.createElement('button');
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
  //Create the selection buttons for menus
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
    menuSelectionContainer.appendChild(menuSelectionButton);
  });
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
  contentWrapper.appendChild(mainMenuContainer);

  // Menu grid container creation

  //mock data for menu items
  //TODO: replace with actual data from the database
  const menuItems = [
    {
      id: 1,
      name: 'Classic Fries',
      diets: 'basic',
      description: 'Crispy golden fries with a touch of salt.',
      image: 'path-to-image1.jpg',
      price: '€3.99',
    },
    {
      id: 2,
      name: 'Spicy Fries',
      diets: 'spicy',
      description: 'Fries with a spicy kick, seasoned with chili powder.',
      image: 'path-to-image2.jpg',
      price: '€4.49',
    },
    {
      id: 3,
      name: 'Onion Rings',
      diets: 'vegetarian',
      description: 'Crispy onion rings with a golden batter.',
      image: 'path-to-image3.jpg',
      price: '€4.99',
    },
    {
      id: 4,
      name: 'Cheese Fries',
      diets: 'lactose-free',
      description: 'Fries topped with melted cheese and bacon bits.',
      image: 'path-to-image4.jpg',
      price: '€5.49',
    },
    {
      id: 5,
      name: 'Sweet Potato Fries',
      diets: 'gluten-free',
      description: 'Sweet potato fries with a hint of cinnamon.',
      image: 'path-to-image5.jpg',
      price: '€4.99',
    },
    {
      id: 6,
      name: 'Garlic Parmesan Fries',
      diets: 'vegetarian',
      description: 'Fries tossed in garlic and Parmesan cheese.',
      image: 'path-to-image6.jpg',
      price: '€5.99',
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
    contentWrapper.appendChild(mainMenuContainer);
  });
};
export {sides};
