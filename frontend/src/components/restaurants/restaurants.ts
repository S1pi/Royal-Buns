// TODO: Implement the restaurants to appear on the map page fron the getRestaurants mock data.
// TODO: Improve to get the same data from the actual database backend.
import {getRestaurants} from '../../utils/getRestaurants';

// Main container for the page content.
const restaurants = async () => {
  // select #app div element.
  const appDiv = document.querySelector('#app') as HTMLElement;

  const bgContainer = document.createElement('div');
  bgContainer.classList.add(
    'bg-background-light',
    'p-5',
    'h-screen',
    'flex',
    'flex-col',
    'justify-center'
  );

  // TODO: Implement translations for the page.
  const language = (lang: string) => {
    if (lang === 'FI') {
      return true;
    } else {
      return false;
    }
  };
  // Create the container for the main content of the page
  const restaurantsMainContainer = document.createElement('div');
  restaurantsMainContainer.classList.add(
    'mx-auto',
    'm-10',
    'bg-primary',
    'h-3/4',
    'w-3/4',
    'flex',
    'flex-col',
    'p-5'
  );

  // Create the title for the page
  const restaurantTitleContainer = document.createElement('h1');
  restaurantTitleContainer.textContent = language('FI')
    ? 'Ravintolat'
    : 'Restaurants';

  // Use the styling universal to all pages
  restaurantTitleContainer.classList.add(
    'flex',
    'text-h1', // Use custom h1 size from tailwind config
    'font-bold', // Bold text
    'text-center', // Center text
    'justify-center', // Flex to center the text in case it's inside a flex container
    'text-red' // Custom red color from config
  );
  restaurantsMainContainer.appendChild(restaurantTitleContainer);

  // Create the restaurant selection button container
  const restaurantSelectionContainer = document.createElement('div');
  restaurantSelectionContainer.classList.add(
    'flex',
    'flex-row',
    'flex-wrap',
    'justify-center',
    'mt-5',
    'text-black',
    'border-1'
  );

  appDiv.appendChild(restaurantsMainContainer);
};

export {restaurants};
