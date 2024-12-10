import {getAllSides} from '../../../utils/getMenuItems';
import {router} from '../../navigation/router';

const sides = async (
  menuDataContainer: HTMLDivElement,
  sidesButton: HTMLButtonElement
) => {
  // sidesButton.classList.toggle('border-b-primary');

  //Mock data for menu items
  //TODO: replace with actual data from the database
  // const menuItems = [
  //   {
  //     id: 1,
  //     name: 'Classic Fries',
  //     diets: 'basic',
  //     description: 'Crispy golden fries with a touch of salt.',
  //     image: 'img/classicFries.jpeg',
  //     price: '3.99',
  //   },
  //   {
  //     id: 2,
  //     name: 'Spicy Fries',
  //     diets: 'spicy',
  //     description: 'Fries with a spicy kick, seasoned with chili powder.',
  //     image: 'img/spicyFries.jpeg',
  //     price: '4.49',
  //   },
  //   {
  //     id: 3,
  //     name: 'Onion Rings',
  //     diets: 'vegetarian',
  //     description: 'Crispy onion rings with a golden batter.',
  //     image: 'img/onionRings.jpeg',
  //     price: '4.99',
  //   },
  //   {
  //     id: 4,
  //     name: 'Cheese Fries',
  //     diets: 'lactose-free',
  //     description: 'Fries topped with melted cheese and bacon bits.',
  //     image: 'img/cheeseFries.jpeg',
  //     price: '5.49',
  //   },
  //   {
  //     id: 5,
  //     name: 'Sweet Potato Fries',
  //     diets: 'gluten-free',
  //     description: 'Sweet potato fries with a hint of cinnamon.',
  //     image: 'img/sweetPotatoFries.jpeg',
  //     price: '4.99',
  //   },
  //   {
  //     id: 6,
  //     name: 'Garlic Parmesan Fries',
  //     diets: 'vegetarian',
  //     description: 'Fries tossed in garlic and Parmesan cheese.',
  //     image: 'img/garlicParmesanFries.jpeg',
  //     price: '5.99',
  //   },
  // ];

  const language = localStorage.getItem('language') as 'FI' | 'EN';
  if (language !== 'FI' && language !== 'EN') {
    localStorage.setItem('language', 'FI');
    router();
  }

  const menuItems = await getAllSides();

  // Menu grid container creation
  const menuGridContainer = document.createElement('div');
  menuGridContainer.classList.add(
    'grid',
    'grid-cols-3',
    'gap-6',
    'w-full',
    'menuGridContainer'
  );

  menuItems.forEach((item) => {
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
      'text-lg',
      'text-gray-600',
      'items-center',
      'justify-center',
      'text-center',
      'menuItemText'
    );

    const itemDescriptionText = document.createElement('div');
    itemDescriptionText.textContent = item.description[language];

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

    // Append grid to datacontainer
    menuDataContainer.appendChild(menuGridContainer);
    // menuDataContainer.prepend(daySpecial);
  });
};

export {sides};
