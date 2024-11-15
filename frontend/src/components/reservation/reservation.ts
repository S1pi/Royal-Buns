import {header} from '../header/header';

// Type for 1 restaurant
type Restaurant = {
  id: number;
  restaurantName: string;
  openHours: {weekdays: string; weekends: string};
};

// Mockdata for restaurants
// TODO: Search from database
const restaurants = [
  {
    id: 1,
    restaurantName: 'Royal Buns Helsinki',
    openHours: {weekdays: '10:00-22:00', weekends: '12:00-23:00'},
  },
  {
    id: 2,
    restaurantName: 'Royal Buns Espoo',
    openHours: {weekdays: '10:00-21:00', weekends: '12:00-21:00'},
  },
  {
    id: 3,
    restaurantName: 'Royal Buns Tampere',
    openHours: {weekdays: '12:00-20:00', weekends: '12:00-23:00'},
  },
  {
    id: 4,
    restaurantName: 'Royal Buns Rovaniemi',
    openHours: {weekdays: '12:00-20:00', weekends: '12:00-23:00'},
  },
];

// Function to search restaurant by its id
const getRestaurantById = (restaurantId: number) => {
  console.log(restaurantId);
  return restaurants.find((restaurant) => restaurant.id === restaurantId);
};

const reservation = () => {
  // Select the #app div
  const appDiv = document.querySelector('#app') as HTMLElement;
  appDiv.classList.add(
    'bg-background-light',
    'p-5',
    'h-screen',
    'flex',
    'flex-col',
    'justify-center'
  );
  // Very very broken still... WALTTERI MAKE TIS WORK!!
  const language = (lang: string) => {
    if (lang === 'FI') {
      return true;
    } else {
      return false;
    }
  };

  header(); // Ensure header is placed inside appDiv

  // Creates the reservation container and styles it
  const reservationContainer = document.createElement('div');
  reservationContainer.classList.add(
    'mx-auto', // Center the container horizontally
    'm-10', // Margin top for spacing
    'bg-primary',
    'h-3/4',
    'w-3/4', // Minimum height of the container
    'flex',
    'flex-col',
    'p-5' // Padding
    // Background color
  );

  // Create the reservation title and style it
  const reservationTitleContainer = document.createElement('h1');
  reservationTitleContainer.textContent = language('FI')
    ? 'VARAA PÖYTÄ'
    : 'BOOK A TABLE';
  reservationTitleContainer.classList.add(
    'flex',
    'text-h1', // Use custom h1 size from tailwind config
    'font-bold', // Bold text
    'text-center', // Center text
    'justify-center', // Flex to center the text in case it's inside a flex container
    'text-red' // Custom red color from config
  );
  // Append the title to the reservation container
  reservationContainer.appendChild(reservationTitleContainer);

  // Create containter for selection buttons
  const selectionContainer = document.createElement('div');
  selectionContainer.classList.add(
    'flex',
    'justify-center',
    'items-center',
    'gap-2',
    'mt-5',
    'flex-row'
  );
  reservationContainer.appendChild(selectionContainer);

  // Create the dropdown for restaurant selection
  const restaurantDropdown = document.createElement('select');
  restaurantDropdown.classList.add(
    'block',
    'w-1/4',
    'h-10',
    'mx-auto',
    'mt-5',
    'rounded-lg',
    'text-center',
    'bg-primary',
    'text-red',
    'border',
    'border-red'
  );
  restaurantDropdown.id = 'restaurantSelect';
  restaurantDropdown.name = 'restaurantSelect';
  restaurantDropdown.required = true;
  // default text and option
  const restaurantOption = document.createElement('option');
  restaurantOption.value = '';
  restaurantOption.textContent = 'Valitse Ravintola';
  restaurantOption.disabled = true;
  restaurantOption.selected = true;
  restaurantDropdown.appendChild(restaurantOption);

  restaurants.forEach((restaurant) => {
    const optionElement = document.createElement('option');
    optionElement.value = restaurant.id.toString();
    optionElement.textContent = restaurant.restaurantName;
    restaurantDropdown.appendChild(optionElement);
  });

  selectionContainer.appendChild(restaurantDropdown);

  // Create the dropdown for amount of people
  const peopleDropdown = document.createElement('select');
  peopleDropdown.classList.add(
    'block',
    'w-1/4',
    'h-10',
    'mx-auto',
    'mt-5',
    'rounded-lg',
    'text-center',
    'bg-primary',
    'text-red',
    'border',
    'border-red'
  );
  peopleDropdown.id = 'people';
  peopleDropdown.name = 'people';
  peopleDropdown.required = true;
  //default text and option for dropdown
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Valitse henkilömäärä';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  peopleDropdown.appendChild(defaultOption);
  // Create the options for the dropdown
  const options = [
    '1-2 Henkilöä',
    '3-4 Henkilöä',
    '5-6 Henkilöä',
    '7-8 Henkilöä',
  ];

  options.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    peopleDropdown.appendChild(optionElement);
  });
  selectionContainer.appendChild(peopleDropdown);

  //create the date selection button

  const dateSelection = document.createElement('input');
  dateSelection.type = 'date';
  dateSelection.classList.add(
    'block',
    'w-1/4',
    'h-10',
    'mx-auto',
    'mt-5',
    'rounded-lg',
    'bg-primary',
    'text-red',
    'border',
    'border-red',
    'flex',
    'justify-center',
    'items-center',
    'text-center'
  );

  const dateSelectionText = 'Valitse päivämäärä';
  dateSelection.textContent = dateSelectionText;
  selectionContainer.appendChild(dateSelection);

  // Append the reservation container to the appDiv
  selectionContainer.appendChild(dateSelection);

  dateSelection.addEventListener('click', () => {
    const restaurantId = restaurantDropdown.value;

    const restaurant = getRestaurantById(Number(restaurantId)) as Restaurant;
    if (restaurant == undefined) alert('You need to select Restaurant');
  });

  // Generates times for time selection depending of the restaurant open hours
  const generateTimes = (openHours: string): string[] => {
    const [start, end] = openHours.split('-');

    // Split open- and endhours to hours and minutes
    let [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);

    const times: string[] = [];

    // Create reservation times every 30 minutes
    while (
      startHour < endHour ||
      (startHour === endHour && startMinute <= endMinute)
    ) {
      // Add time into list as ex. "20:30"/"HH:MM"
      times.push(
        `${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`
      );
      // Adds 30 minute
      startMinute += 30;
      if (startMinute >= 60) {
        startMinute -= 60;
        startHour += 1;
      }
    }

    return times;
  };

  //main logic for creating the time selection button
  const timeSelection = document.createElement('select');
  timeSelection.classList.add(
    'block',
    'w-1/4',
    'h-10',
    'mx-auto',
    'mt-5',
    'rounded-lg',
    'bg-primary',
    'text-red',
    'border',
    'border-red',
    'flex',
    'justify-center',
    'text-center'
  );

  const generateTimeSelection = (restaurant: Restaurant) => {
    timeSelection.innerHTML = '';
    const timeOption = document.createElement('option');
    timeOption.value = 'time';
    timeOption.textContent = 'Valitse aika';
    timeOption.disabled = true;
    timeOption.selected = true;
    timeSelection.appendChild(timeOption);
    const currentDate = dateSelection.value;
    const date = new Date(currentDate);
    let timeOfWeek: 'weekends' | 'weekdays';
    if (date.getDay() === 0 || date.getDay() === 6) {
      timeOfWeek = 'weekends';
      console.log('viikonloppu');
    } else {
      timeOfWeek = 'weekdays';
      console.log('Arki');
    }

    // Determine the opening hours and generate times from those
    const openHours = restaurant.openHours[timeOfWeek];

    const reservationTimes = generateTimes(openHours);

    reservationTimes.forEach((time) => {
      const timeOption = document.createElement('option');
      timeOption.value = time;
      timeOption.textContent = time;
      timeSelection.appendChild(timeOption);
    });
    console.log(date.getDay(), reservationTimes);
    // Append the reservation container to the appDiv
    selectionContainer.appendChild(timeSelection);
  };

  // Determine what day it is and generate times by restaurant and what day is
  // If restaurant changes that won't yet change new times etc
  dateSelection.addEventListener('change', () => {
    // Get restaurant
    const restaurantId = restaurantDropdown.value;
    const restaurant = getRestaurantById(Number(restaurantId)) as Restaurant;
    // Generate that restaurant times
    generateTimeSelection(restaurant);

    if (restaurant === undefined) {
      throw new Error('Error occured with fetching restaurant');
    } else {
      console.log(restaurant);

      // Adds event listner to restaurant dropdown to change also times
      restaurantDropdown.addEventListener('change', () => {
        const restaurantId = restaurantDropdown.value;
        const restaurant = getRestaurantById(
          Number(restaurantId)
        ) as Restaurant;
        generateTimeSelection(restaurant);
      });
    }
  });

  // Create reservation date selector button
  // Create the main reservation button
  const reservationButton = document.createElement('button');
  reservationButton.textContent = 'Varaa pöytä';
  reservationButton.classList.add(
    'flex',
    'block',
    'w-1/4',
    'h-20',
    'mx-auto',
    'mt-60',
    'rounded-lg',
    'bg-primary',
    'text-red',
    'border',
    'border-red',
    'shadow-lg',
    'justify-center',
    'items-center',
    'p-5',
    'pop-out-animation'
  );
  reservationContainer.appendChild(reservationButton);
  appDiv.appendChild(reservationContainer);

  reservationButton.addEventListener('click', () => {
    const restaurantId = restaurantDropdown.value;
    const peopleAmount = peopleDropdown.value;
    const reservationTime = timeSelection.value;
    const reservationDate = dateSelection.value;
    console.log(restaurantId, peopleAmount, reservationTime, reservationDate);
  });
};

export {reservation};
