const burgers = (
  menuDataContainer: HTMLDivElement,
  burgersButton: HTMLButtonElement
) => {
  // TODO: SISÄLLYTÄ TÄMÄ https://www.youtube.com/watch?v=4qRZmFYdozY
  const daySpecial = document.createElement('div');
  daySpecial.classList.add(
    'bg-primary',
    'text-center',
    'text-white',
    'font-bold',
    'p-2',
    'mb-4',
    'rounded-md',
    'bg-red',
    'w-2/4',
    'flex',
    'justify-center',
    'items-center',
    'mx-auto'
  );
  daySpecial.textContent = "Today's Special: Classic Chicken Burger for €13.99";

  burgersButton.classList.toggle('border-b-primary');

  // Mockdata for grid items
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
    menuDataContainer.prepend(daySpecial);
  });
};

export {burgers};
