const drinks = (
  menuDataContainer: HTMLDivElement,
  drinksButton: HTMLButtonElement
) => {
  drinksButton.classList.toggle('border-b-primary');

  //Mock data for menu items TODO: Drinks mockdata
  //TODO: replace with actual data from the database
  const menuItems = [
    {
      id: 1,
      name: 'Classic Coke',
      diets: 'basic',
      description: 'The timeless taste of Coca-Cola, served chilled to perfection.',
      image: 'path-to-image1.jpg',
      price: '€3.99',
    },
    {
      id: 2,
      name: 'Golden Citrus Elixir',
      diets: 'basic',
      description: 'Freshly squeezed orange juice, bursting with vibrant citrus flavors.',
      image: 'path-to-image2.jpg',
      price: '€4.49',
    },
    {
      id: 3,
      name: 'Royal Lemonade',
      diets: 'basic',
      description: 'A refreshing blend of lemons and a hint of mint, fit for royalty.',
      image: 'path-to-image3.jpg',
      price: '€4.99',
    },
    {
      id: 4,
      name: 'Imperial Iced Tea',
      diets: 'basic',
      description: 'Chilled iced tea with a touch of lemon, a drink of emperors.',
      image: 'path-to-image4.jpg',
      price: '€3.99',
    },
    {
      id: 5,
      name: 'Sparkling Crystal Water',
      diets: 'basic',
      description: 'Pure carbonated water, as clear and refreshing as a mountain spring.',
      image: 'path-to-image5.jpg',
      price: '€2.99',
    },
    {
      id: 6,
      name: 'Velvet Milkshake',
      diets: 'basic',
      description: 'A creamy milkshake with your choice of gourmet flavors, a true indulgence.',
      image: 'path-to-image6.jpg',
      price: '€5.99',
    },
    {
      id: 7,
      name: 'Royal Red Wine',
      diets: 'alcoholic',
      description: 'A glass of exquisite red wine, aged to perfection.',
      image: 'path-to-image7.jpg',
      price: '€19.99',
    },
    {
      id: 8,
      name: 'Golden Ale',
      diets: 'alcoholic',
      description: 'A premium golden ale with a rich, smooth taste.',
      image: 'path-to-image8.jpg',
      price: '€8.99',
    },
    {
      id: 9,
      name: 'Dom Pérignon Vintage',
      diets: 'alcoholic',
      description: 'The epitome of luxury, this vintage champagne offers an unparalleled taste experience.',
      image: 'path-to-image9.jpg',
      price: '€299.99',
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

export {drinks};
