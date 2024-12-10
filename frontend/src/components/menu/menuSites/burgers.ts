const burgers = (menuDataContainer: HTMLDivElement, burgersButton: HTMLButtonElement) => {
  // TODO: SISÄLLYTÄ TÄMÄ https://www.youtube.com/watch?v=4qRZmFYdozY
  // const daySpecial = document.createElement('div');
  // daySpecial.classList.add(
  //   'bg-primary',
  //   'text-center',
  //   'text-white',
  //   'font-bold',
  //   'p-2',
  //   'mb-4',
  //   'rounded-md',
  //   'bg-red',
  //   'w-2/4',
  //   'flex',
  //   'justify-center',
  //   'items-center',
  //   'mx-auto'
  // );
  // daySpecial.textContent = "Today's Special: Classic Chicken Burger for €13.99";

  // burgersButton.classList.add('bg-hover-green');

  // Mockdata for grid items
  const menuItems = [
    {
      id: 1,
      diets: 'G,L',
      price: '14.50',
      name: 'Royal Smash',
      description:
        'Smash-style burger with crispy edges, double beef patties, melted cheddar, and house-made tangy sauce.',
      photo: 'img/royalSmash.jpeg',
      day: 'Everyday',
    },
    {
      id: 2,
      diets: 'G',
      price: '13.90',
      name: 'Bacon BBQ Delight',
      description:
        'Juicy beef patty, smoky BBQ sauce, crispy bacon, and crunchy onion rings.',
      photo: 'img/BBQ.jpeg',
      day: 'Everyday',
    },
    {
      id: 3,
      diets: 'L',
      price: '12.90',
      name: 'Crispy Chicken Classic',
      description: 'Crispy chicken fillet, lettuce, tomato, and a creamy garlic mayo.',
      photo: 'img/crispyChicken.jpeg',
      day: 'Everyday',
    },
    {
      id: 4,
      diets: 'G',
      price: '14.90',
      name: 'Blue Cheese BBQ Chicken',
      description:
        'Grilled chicken fillet topped with tangy blue cheese, BBQ sauce, and fresh arugula.',
      photo: 'img/blueCheese.jpeg',
      day: 'Everyday',
    },
    {
      id: 5,
      diets: 'V',
      price: '12.50',
      name: 'Veggie Garden Delight',
      description:
        'A hearty vegetarian burger with a grilled veggie patty, fresh greens, and basil aioli.',
      photo: 'img/vege.jpeg',
      day: 'Everyday',
    },
    {
      id: 6,
      diets: 'V,G',
      price: '13.90',
      name: 'Grilled Halloumi Burger',
      description:
        'Grilled halloumi cheese, sun-dried tomatoes, avocado, and a balsamic glaze.',
      photo: 'img/halloumi.jpeg',
      day: 'Everyday',
    },
    {
      id: 7,
      diets: 'G,L',
      price: '13.50',
      name: 'Rustic Rye Burger',
      description:
        'A hearty rye burger with a beef patty, caramelized onions, pickled cucumber, and mustard mayo.',
      photo: '',
      day: 'Monday',
    },
    {
      id: 8,
      diets: 'G,L',
      price: '14.90',
      name: 'Crispy Fish Delight',
      description:
        'Golden-battered fish fillet with lettuce, tartar sauce, and fresh dill on a brioche bun.',
      photo: '',
      day: 'Tuesday',
    },
    {
      id: 9,
      diets: 'G,L',
      price: '15.90',
      name: 'Double Bacon Smash',
      description:
        'Two crispy-edged smash patties, double cheddar, crispy bacon, and smoky BBQ mayo.',
      photo: '',
      day: 'Wednesday',
    },
    {
      id: 10,
      diets: 'G,L',
      price: '13.90',
      name: 'Chicken Avocado Bliss',
      description:
        'Grilled chicken breast, creamy avocado slices, lettuce, tomato, and garlic aioli.',
      photo: '',
      day: 'Thursday',
    },
    {
      id: 11,
      diets: 'L',
      price: '14.50',
      name: 'Japanese Panko Chicken',
      description:
        'Crispy panko-breaded chicken, Chinese cabbage, sweet chili sauce, and sesame mayo.',
      photo: '',
      day: 'Friday',
    },
    {
      id: 12,
      diets: 'G',
      price: '14.90',
      name: 'Smokey BBQ Burger',
      description:
        'Beef patty with marinated red onions, smoky BBQ sauce, and melted gouda cheese.',
      photo: '',
      day: 'Saturday',
    },
    {
      id: 13,
      diets: 'G,L',
      price: '13.90',
      name: 'Sunday Roast Burger',
      description:
        'Slow-roasted beef brisket, horseradish mayo, caramelized onions, and arugula on a toasted brioche bun.',
      photo: '',
      day: 'Sunday',
    },
  ];

  // Menu grid container creation
  const menuGridContainer = document.createElement('div');
  menuGridContainer.classList.add(
    'grid',
    'grid-cols-3',
    'gap-6',
    'w-full',
    'menuGridContainer'
  );

  // FOR EACH jokaselle burgerille datasta

  menuItems.forEach((item) => {
    if (item.day == 'Everyday') {
      const menuItem = document.createElement('div');
      menuItem.classList.add(
        'flex',
        'flex-col',
        'items-center',
        'bg-white',
        'p-4',
        'rounded-md',
        'shadow-md',
        'menuItemContainer'
      );

      const headingContainer = document.createElement('div');
      headingContainer.classList.add(
        'w-full',
        'h-auto',
        'flex',
        'items-center',
        'justify-center'
      );

      const itemTitle = document.createElement('h3');
      itemTitle.textContent = item.name;
      itemTitle.classList.add('font-bold', 'text-xl', 'text-center', 'pt-2');

      headingContainer.appendChild(itemTitle);

      const contentContainer = document.createElement('div');
      contentContainer.classList.add(
        'w-full',
        'h-auto',
        'flex',
        'flex-1',
        'menuContentContainer'
      );

      const itemPhotoContainer = document.createElement('div');
      itemPhotoContainer.classList.add(
        'flex-1',
        'flex',
        'justify-center',
        'items-center',
        'menuPhotoContainer'
      );

      const itemPhoto = document.createElement('img');
      itemPhoto.src = item.photo;
      itemPhoto.alt = `Photo for ${item.name}`;
      itemPhoto.classList.add('w-4/5', 'h-4/5', 'object-contain', 'menuPhoto');

      itemPhotoContainer.append(itemPhoto);

      const itemContentContainer = document.createElement('div');
      itemContentContainer.classList.add(
        'flex-1',
        'flex',
        'flex-col',
        'p-6',
        'menuItemContentContainer'
      );

      const itemDescription = document.createElement('p');
      itemDescription.classList.add(
        'flex-1',
        'flex',
        'p-2',
        'text-sm',
        'text-gray-600',
        'items-center',
        'justify-center',
        'text-center',
        'menuItemText'
      );

      const itemDescriptionText = document.createElement('div');
      itemDescriptionText.textContent = item.description;

      itemDescription.appendChild(itemDescriptionText);

      const itemPrice = document.createElement('p');
      itemPrice.textContent = item.price + ' €';
      itemPrice.classList.add(
        'p-2',
        'text-lg',
        'text-center',
        'text-red',
        'font-semibold',
        'menuItemPrice'
      );

      itemContentContainer.append(headingContainer, itemDescription, itemPrice);
      contentContainer.append(itemPhotoContainer, itemContentContainer);

      menuItem.append(contentContainer);

      menuGridContainer.appendChild(menuItem);
    }

    // Append grid to datacontainer
    menuDataContainer.appendChild(menuGridContainer);
    // menuDataContainer.prepend(daySpecial);
  });
};

export {burgers};
