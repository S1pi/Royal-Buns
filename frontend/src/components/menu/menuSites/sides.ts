const sides = (
  menuDataContainer: HTMLDivElement,
  sidesButton: HTMLButtonElement
) => {
  sidesButton.classList.toggle('border-b-primary');

  //Mock data for menu items
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

export {sides};
