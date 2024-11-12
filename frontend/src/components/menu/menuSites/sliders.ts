const sliders = () => {
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
  const menuItems = [
    {
      id: 1,
      name: 'Mini Classic Slider',
      description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato.',
      image: 'path-to-image1.jpg',
      price: '€5.99',
    },
    {
      id: 2,
      name: 'Spicy Mini Fiesta',
      description:
        'A zesty slider with jalapeños, spicy sauce, and pepper jack cheese.',
      image: 'path-to-image2.jpg',
      price: '€6.49',
    },
    {
      id: 3,
      name: 'BBQ Mini Bliss',
      description: 'BBQ beef patty with smoked cheese and caramelized onions.',
      image: 'path-to-image3.jpg',
      price: '€6.99',
    },
    {
      id: 4,
      name: 'Veggie Delight Slider',
      description: 'A healthy veggie patty with fresh lettuce and tomato.',
      image: 'path-to-image4.jpg',
      price: '€5.49',
    },
    {
      id: 5,
      name: 'Chicken Little Slider',
      description: 'Crispy chicken patty with mayo and pickles.',
      image: 'path-to-image5.jpg',
      price: '€6.49',
    },
    {
      id: 6,
      name: 'Cheese Lover Slider',
      description: 'A slider with double cheese and a juicy beef patty.',
      image: 'path-to-image6.jpg',
      price: '€6.99',
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
export {sliders};
