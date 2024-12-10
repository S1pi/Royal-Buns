import {getAllSliders} from '../../../utils/getMenuItems';
import {router} from '../../navigation/router';

const sliders = async (
  menuDataContainer: HTMLDivElement,
  slidersButton: HTMLButtonElement
) => {
  // slidersButton.classList.toggle('border-b-primary');
  //Mock data for menu items
  //TODO: replace with actual data from the database
  // const menuItems = [
  //   {
  //     id: 1,
  //     name: 'Mini Classic Slider',
  //     description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato.',
  //     image: 'img/classicSlider.jpeg',
  //     price: '5.99',
  //   },
  //   {
  //     id: 2,
  //     name: 'Spicy Mini Fiesta',
  //     description: 'A zesty slider with jalapeños, spicy sauce, and pepper jack cheese.',
  //     image: 'img/spicySlider.jpeg',
  //     price: '6.49',
  //   },
  //   {
  //     id: 3,
  //     name: 'BBQ Mini Bliss',
  //     description: 'BBQ beef patty with smoked cheese and caramelized onions.',
  //     image: 'img/bbqSlider.jpeg',
  //     price: '6.99',
  //   },
  //   {
  //     id: 4,
  //     name: 'Veggie Delight Slider',
  //     description: 'A healthy veggie patty with fresh lettuce and tomato.',
  //     image: 'img/veggieSlider.jpeg',
  //     price: '5.49',
  //   },
  //   {
  //     id: 5,
  //     name: 'Chicken Little Slider',
  //     description: 'Crispy chicken patty with mayo and pickles.',
  //     image: 'img/chickenSlider.jpeg',
  //     price: '6.49',
  //   },
  //   {
  //     id: 6,
  //     name: 'Cheese Lover Slider',
  //     description: 'A slider with double cheese and a juicy beef patty.',
  //     image: 'img/cheeseSlider.jpeg',
  //     price: '6.99',
  //   },
  // ];

  const language = localStorage.getItem('language') as 'EN' | 'FI';
  if (language !== 'EN' && language !== 'FI') {
    localStorage.setItem('language', 'FI');
    router();
  }

  const menuItems = await getAllSliders();

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

export {sliders};
