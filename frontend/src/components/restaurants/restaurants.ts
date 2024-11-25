// TODO: Implement the restaurants to appear on the map page fron the getRestaurants mock data.
// TODO: Improve to get the same data from the actual database backend.
import {getRestaurants} from '../../utils/getRestaurants';
import L from 'leaflet';

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
    'bg-primary',
    'h-[80vh]', // 80% viewport height
    'w-3/4', // 75% viewport width
    'flex',
    'flex-row', // Horizontal layout
    'p-5',
    'gap-2',
    'text-center',
    'justify-center'
  );

  // Create the title for the page
  const restaurantTitleContainer = document.createElement('h1');
  restaurantTitleContainer.textContent = language('FI')
    ? 'Ravintolat'
    : 'Restaurants';

  // Use the styling universal to all pages
  restaurantTitleContainer.classList.add(
    'flex',
    'mx-auto',
    'w-3/4',
    'text-h1', // Use custom h1 size from tailwind config
    'font-bold', // Bold text
    'text-center', // Center text
    'justify-center', // Flex to center the text in case it's inside a flex container
    'text-red',
    'bg-primary'
  );
  bgContainer.appendChild(restaurantTitleContainer);

  // Create the restaurant selection button container
  const restaurantSelectionContainer = document.createElement('div');
  restaurantSelectionContainer.classList.add(
    'flex',
    'flex-col',
    'items-start',
    'justify-center',
    'p-4',
    'text-black',
    'w-2/5',
    'h-full' // Set width for the restaurant selection container
  );
  restaurantsMainContainer.appendChild(restaurantSelectionContainer);

  // get restaurants from mock data
  const restaurantNames = await getRestaurants();
  //TODO: Implement the actual database fetch
  // Create buttons for restaurant selection
  restaurantNames.forEach((restaurants) => {
    const restaurantSelectionButtons = document.createElement('button');
    restaurantSelectionButtons.textContent = restaurants.restaurantName;
    restaurantSelectionButtons.classList.add(
      'flex',
      'flex-col',
      'bg-primary',
      'text-black',
      'text-h2',
      'p-2',
      'm-2',
      'pop-out-animation'
    );
    restaurantSelectionContainer.appendChild(restaurantSelectionButtons);
  });
  restaurantsMainContainer.appendChild(restaurantSelectionContainer);

  // Create container for map
  const mapContainer = document.createElement('div');
  mapContainer.classList.add(
    'h-/5', // Full height
    'w-3/5',
    'items-center',
    'justify-center',
    'mt-20'
  );

  restaurantsMainContainer.appendChild(mapContainer);

  // Initialize Leaflet map
  const map = L.map(mapContainer).setView([64.31434, 27.26326], 5); // Set initial view to center of finland

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  setTimeout(() => {
    map.invalidateSize();
  }, 100);

  // Add markers for each restaurant
  restaurantNames.forEach((restaurant) => {
    const marker = L.marker([restaurant.latitude, restaurant.longitude]).addTo(
      map
    );
    marker.bindPopup(
      `<b>${restaurant.restaurantName}</b><br>${restaurant.openHours.weekdays} - ${restaurant.openHours.weekends}`
    );
  });
  bgContainer.appendChild(restaurantsMainContainer);
  appDiv.appendChild(bgContainer);
};

export {restaurants};
