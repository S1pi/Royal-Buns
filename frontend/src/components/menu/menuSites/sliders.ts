const sliders = (
  menuDataContainer: HTMLDivElement,
  slidersButton: HTMLButtonElement
) => {
  slidersButton.classList.toggle('border-b-primary');
  //Mock data for menu items
  //TODO: replace with actual data from the database
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

  // Menu grid container creation
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

    menuItem.append(itemTitle, itemDescription, itemPrice);

    menuGridContainer.appendChild(menuItem);

    // Append grid to datacontainer
    menuDataContainer.appendChild(menuGridContainer);
  });
};

export {sliders};
