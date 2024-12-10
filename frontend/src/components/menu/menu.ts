import {Burger} from '../../types/menu';
import {getBurgersByDay} from '../../utils/getMenuItems';
import {menuNavigation} from './menuNavigation';

const getCurrentWeekday = (): string => {
  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const currentDayIndex = new Date().getDay();
  return days[currentDayIndex];
};

const getDailyBurger = async () => {
  const currentDay = getCurrentWeekday();
  const dailyBurger = await getBurgersByDay(currentDay);

  const dailyburgerReturnWithCurrentLanguage = dailyBurger.map((burger) => {
    const currentLanguage = localStorage.getItem('language') || 'EN';
    if (currentLanguage === 'EN') {
      return {
        ...burger,
        description: burger.description.EN,
      };
    } else {
      return {
        ...burger,
        description: burger.description.FI,
      };
    }
  });

  return dailyburgerReturnWithCurrentLanguage;
  // return dailyBurger;
};

// Mock data for the daily burger
// const dailyBurger = [
//   {
//     id: 11,
//     diets: 'L',
//     price: '14.50',
//     name: 'Japanese Panko Chicken',
//     description:
//       'Crispy panko-breaded chicken, Chinese cabbage, sweet chili sauce, and sesame mayo.',
//     photo: 'img/crispyChicken.jpeg',
//     day: 'Friday',
//   },
// ];

//the main menu rendering logic
const menu = async () => {
  const dailyBurger = await getDailyBurger();

  // Select the #app div
  const appDiv = document.querySelector('#app') as HTMLElement;
  const header = document.querySelector('header');
  header?.classList.remove('bg-opacity-0');

  const bgContainer = document.createElement('div');
  bgContainer.classList.add(
    'bg-background-light',
    'p-10',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'bg'
  );

  // wrapper for the main content of the site
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'w-5/6',
    'min-h-[600px]',
    'contentContainer'
  );
  bgContainer.appendChild(contentWrapper);
  appDiv.appendChild(bgContainer);

  // use the navigation from menuNavigation.ts
  //render the menus based on the selection from menuSites and using the menuNavigation.ts
  // Create the main menus container and style it

  const dailyburgerContainer = document.createElement('div');
  dailyburgerContainer.classList.add(
    'flex',
    'h-auto',
    'bg-primary',
    'w-full',
    'max-w-[600px]',
    'p-8',
    'shadow-lg',
    'rounded-sm',
    'mt-5',
    'menuDailyContainer'
  );

  const dailyBurgerContainerWhite = document.createElement('div');
  dailyBurgerContainerWhite.classList.add(
    'flex',
    'w-full',
    'h-full',
    'bg-white',
    'flex-col',
    'items-center',
    'menuDailyWhiteContainer'
  );

  // DAILY BURGER

  const dailyItem = document.createElement('div');
  dailyItem.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'p-4',
    'rounded-md',
    'shadow-md',
    'h-full',
    'w-full',
    'menuDailyItem'
  );

  const headingContainer = document.createElement('div');
  headingContainer.classList.add(
    'w-full',
    'h-auto',
    'flex',
    'items-center',
    'justify-center',
    'menuDailyHeadingContainer'
  );

  const itemTitle = document.createElement('h3');
  itemTitle.textContent = dailyBurger[0].name;
  itemTitle.classList.add(
    'font-bold',
    'text-xl',
    'text-center',
    'pt-2',
    'menuDailyHeading'
  );

  headingContainer.appendChild(itemTitle);

  const contentContainer = document.createElement('div');
  contentContainer.classList.add(
    'w-full',
    'h-auto',
    'flex',
    'flex-1',
    // 'flex-col',
    'menuDailyContentContainer'
  );

  const itemPhotoContainer = document.createElement('div');
  itemPhotoContainer.classList.add('flex-1', 'flex', 'justify-center', 'items-center');

  const itemPhoto = document.createElement('img');
  itemPhoto.src = dailyBurger[0].photo;
  itemPhoto.alt = `Photo for ${dailyBurger[0].name}`;
  itemPhoto.classList.add(
    'p-5',
    'w-full',
    'h-full',
    'object-contain',
    'menuDailyItemPhoto'
  );

  itemPhotoContainer.append(itemPhoto);

  const itemContentContainer = document.createElement('div');
  itemContentContainer.classList.add(
    'flex-1',
    'flex',
    'flex-col',
    'p-6',
    'menuDailyItemContentContainer'
  );

  const itemDescription = document.createElement('p');
  itemDescription.classList.add(
    'flex-1',
    'flex',
    'p-2',
    'text-base',
    'text-gray-700',
    'items-center',
    'justify-center',
    'text-center',
    'menuDailyItemDesc'
  );

  const itemDescriptionText = document.createElement('div');
  itemDescriptionText.textContent = dailyBurger[0].description;

  itemDescription.appendChild(itemDescriptionText);

  const itemPrice = document.createElement('p');
  itemPrice.textContent = dailyBurger[0].price + ' €';
  itemPrice.classList.add(
    'p-2',
    'text-lg',
    'text-center',
    'text-red',
    'font-semibold',
    'menuDailyItemPrice'
  );

  itemContentContainer.append(headingContainer, itemDescription, itemPrice);
  contentContainer.append(itemPhotoContainer, itemContentContainer);

  dailyItem.append(contentContainer);

  const dailyHeading = document.createElement('h1');
  dailyHeading.textContent = 'DAILY BURGER';
  dailyHeading.classList.add(
    'text-red',
    'text-3xl',
    'font-bold',
    'mx-4',
    'mt-4',
    'dailyBurgerHeading'
  );

  dailyBurgerContainerWhite.append(dailyHeading, dailyItem);
  dailyburgerContainer.append(dailyBurgerContainerWhite);

  const menuDataContainer = document.createElement('div');
  menuDataContainer.classList.add(
    'bg-primary',
    'w-full',
    'flex',
    'flex-col',
    'p-14',
    'shadow-lg',
    'rounded-md',
    // 'border-4',
    // 'border-green'
    'menuDataContainer'
  );

  contentWrapper.append(dailyburgerContainer);

  menuNavigation(contentWrapper, menuDataContainer);
  contentWrapper.append(menuDataContainer);
};

export {menu};
