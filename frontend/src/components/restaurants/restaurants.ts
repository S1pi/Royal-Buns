// TODO: Implement the restaurants to appear on the map page fron the getRestaurants mock data.
// TODO: Improve to get the same data from the actual database backend.
import {Restaurant} from '../../types/restaurant';
import {getRestaurants} from '../../utils/getRestaurants';
import L from 'leaflet';

// Translations for the page (mock data).
const translations = {
  FI: {
    title: 'Ravintolat',
    selectRestaurant: 'Valitse ravintola kartalta',
  },
  EN: {
    title: 'Restaurants',
    selectRestaurant: 'Select restaurant from the map',
  },
};
// Main container for the page content.
const restaurants = async () => {
  // select #app div element.
  const appDiv = document.querySelector('#app') as HTMLDivElement;

  const header = document.querySelector('header') as HTMLElement;
  header.classList.remove('bg-opacity-0');

  const bgContainer = document.createElement('div');
  bgContainer.classList.add(
    'bg-background-light',
    'p-5',
    'h-screen',
    'flex',
    'flex-col',
    'justify-center'
  );

  // Translation functionality for the page.
  let currentLanguage: 'EN' | 'FI' = 'FI'; // Default language
  const languageButtons = document.querySelectorAll('button');
  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedLanguage = button.textContent as 'FI' | 'EN';
      if (selectedLanguage === 'FI' || selectedLanguage === 'EN') {
        currentLanguage = selectedLanguage;
      }
      updateContent();
    });
  });

  const updateContent = () => {
    restaurantTitleContainer.textContent = translations[currentLanguage].title;
    restaurantTextContainer.textContent = translations[currentLanguage].selectRestaurant;
  };

  // Create the container for the main content of the page
  const restaurantsMainContainer = document.createElement('div');
  restaurantsMainContainer.classList.add(
    'container2',
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
  restaurantTitleContainer.textContent = translations[currentLanguage].title;

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
    'bg-white',
    'border-2',
    'border-secondary',
    'w-1/8',
    'h-4/5',
    'mt-10',
    'rounded-lg',
    'gap-4' // Set width for the restaurant selection container
  );
  restaurantsMainContainer.appendChild(restaurantSelectionContainer);

  // Create container for map
  const mapContainer = document.createElement('div');
  mapContainer.classList.add(
    'h-4/5',
    'w-3/5',
    'items-center',
    'justify-center',
    'mt-10',
    'rounded-lg',
    'border-2',
    'border-secondary'
  );

  restaurantsMainContainer.appendChild(mapContainer);

  // Initialize Leaflet map
  const map = L.map(mapContainer).setView([64.31434, 25.26326], 5); //

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  setTimeout(() => {
    map.invalidateSize();
  }, 100);

  const customIcon = L.icon({
    iconUrl: 'img/pin.png',
    iconSize: [47, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -46],
  });

  // get restaurants from mock data
  const restaurants: Restaurant[] = await getRestaurants();
  //TODO: Implement the actual database fetch
  // Create buttons for restaurant selection
  restaurants.forEach((res) => {
    const restaurantSelectionButtons = document.createElement('button');
    restaurantSelectionButtons.textContent = res.res_name;
    restaurantSelectionButtons.classList.add(
      'flex',
      'flex-col',
      'bg-primary',
      'text-black',
      'border-2',
      'border-secondary',
      'text-h5',
      'text-center',
      'items-center',
      'justify-center',
      'p-2',
      'm-2',
      'pop-out-animation',
      'rounded-lg'
    );

    const marker = L.marker([res.coordinates.latitude, res.coordinates.longitude], {
      icon: customIcon,
    }).addTo(map);

    marker.bindPopup(
      `<b>${res.res_name}</b><br><br><b>Open Hours:</b> <br> Arkisin: ${res.openHours.weekdays} <br> Viikonloppuisin: ${res.openHours.weekends}`
    );

    restaurantSelectionButtons.addEventListener('click', () => {
      map.setView([res.coordinates.latitude, res.coordinates.longitude], 16);
      marker.openPopup();
      // Log the coordinates to the console for debugging
      // console.log(res.coordinates.latitude, res.coordinates.longitude);
    });

    restaurantSelectionContainer.appendChild(restaurantSelectionButtons);
  });

  // Restaurant selection info
  const restaurantTextContainer = document.createElement('p');
  restaurantTextContainer.textContent = translations[currentLanguage].selectRestaurant;
  restaurantTextContainer.classList.add(
    'flex',
    'mx-auto',
    'w-3/4',
    'text-h5', // Use custom h1 size from tailwind config
    'font-bold', // Bold text
    'text-center', // Center text
    'justify-center', // Flex to center the text in case it's inside a flex container
    'text-black',
    'bg-primary'
  );
  bgContainer.appendChild(restaurantTextContainer);

  bgContainer.appendChild(restaurantsMainContainer);
  appDiv.appendChild(bgContainer);
  restaurantsMainContainer.appendChild(restaurantSelectionContainer);
};

export {restaurants};
