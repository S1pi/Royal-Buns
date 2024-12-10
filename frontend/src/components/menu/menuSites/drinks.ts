import {getAllDrinks} from '../../../utils/getMenuItems';
import {router} from '../../navigation/router';

const drinks = async (
  menuDataContainer: HTMLDivElement,
  drinksButton: HTMLButtonElement
) => {
  // drinksButton.classList.toggle('border-b-primary');

  //Mock data for menu items TODO: Drinks mockdata
  //TODO: replace with actual data from the database
  // const menuItems = [
  //   {
  //     id: 1,
  //     name: 'Classic Coke',
  //     diets: 'basic',
  //     description: 'The timeless taste of Coca-Cola, served chilled to perfection.',
  //     image: 'img/cola.jpeg',
  //     price: '3.99',
  //   },
  //   {
  //     id: 2,
  //     name: 'Golden Citrus Elixir',
  //     diets: 'basic',
  //     description: 'Freshly squeezed orange juice, bursting with vibrant citrus flavors.',
  //     image: 'img/orangeJuice.jpeg',
  //     price: '4.49',
  //   },
  //   {
  //     id: 3,
  //     name: 'Royal Lemonade',
  //     diets: 'basic',
  //     description: 'A refreshing blend of lemons and a hint of mint, fit for royalty.',
  //     image: 'img/lemonade.jpeg',
  //     price: '4.99',
  //   },
  //   {
  //     id: 4,
  //     name: 'Imperial Iced Tea',
  //     diets: 'basic',
  //     description: 'Chilled iced tea with a touch of lemon, a drink of emperors.',
  //     image: 'img/iceTea.jpeg',
  //     price: '3.99',
  //   },
  //   {
  //     id: 5,
  //     name: 'Sparkling Crystal Water',
  //     diets: 'basic',
  //     description: 'Pure carbonated water, as clear and refreshing as a mountain spring.',
  //     image: 'img/sparklingWater.jpeg',
  //     price: '2.99',
  //   },
  //   {
  //     id: 6,
  //     name: 'Velvet Milkshake',
  //     diets: 'basic',
  //     description:
  //       'A creamy milkshake with your choice of gourmet flavors, a true indulgence.',
  //     image: 'img/milkShake.jpeg',
  //     price: '5.99',
  //   },
  //   {
  //     id: 7,
  //     name: 'Royal Red Wine',
  //     diets: 'alcoholic',
  //     description: 'A glass of exquisite red wine, aged to perfection.',
  //     image: 'img/redWine.jpeg',
  //     price: '19.99',
  //   },
  //   {
  //     id: 8,
  //     name: 'Golden Ale',
  //     diets: 'alcoholic',
  //     description: 'A premium golden ale with a rich, smooth taste.',
  //     image: 'img/ale.jpeg',
  //     price: '8.99',
  //   },
  //   {
  //     id: 9,
  //     name: 'Dom Pérignon Vintage',
  //     diets: 'alcoholic',
  //     description:
  //       'The epitome of luxury, this vintage champagne offers an unparalleled taste experience.',
  //     image: 'img/champagne.jpeg',
  //     price: '29.99',
  //   },
  // ];

  const language = localStorage.getItem('language') as 'FI' | 'EN';
  if (language !== 'FI' && language !== 'EN') {
    localStorage.setItem('language', 'FI');
    router();
  }

  const menuItems = await getAllDrinks();

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

export {drinks};
