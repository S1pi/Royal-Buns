import {getRestaurants} from '../../utils/getRestaurants';

// Type for 1 restaurant
type Restaurant = {
  id: number;
  restaurantName: string;
  openHours: {weekdays: string; weekends: string};
};

const reservation = async () => {
  // Select the #app div
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

  // Very very broken still... WALTTERI MAKE TIS WORK!!
  const language = (lang: string) => {
    if (lang === 'FI') {
      return true;
    } else {
      return false;
    }
  };

  // Creates the reservation container and styles it
  const reservationContainer = document.createElement('div');
  reservationContainer.classList.add(
    'mx-auto',
    'm-10',
    'bg-primary',
    'h-3/4',
    'w-3/4',
    'flex',
    'flex-col',
    'p-5'
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
    'w-full',
    'h-10',
    'mx-auto',
    'mt-5',
    'appearance-none',
    'rounded-lg',
    'text-center',
    'bg-primary',
    'text-red',
    'border',
    'border-red',
    'relative',
    'pr-10'
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

  // Fetch the restaurants

  const restaurants = await getRestaurants();

  restaurants.forEach((restaurant) => {
    const optionElement = document.createElement('option');
    optionElement.value = restaurant.id.toString();
    optionElement.textContent = restaurant.restaurantName;
    restaurantDropdown.appendChild(optionElement);
  });

  // Create a container for dropdown and replacement icon
  const restDropdownContainer = document.createElement('div');
  restDropdownContainer.classList.add('relative', 'inline-block', 'w-1/4');
  const restaurantIcon = document.createElement('i');
  restaurantIcon.classList.add(
    'fa-solid',
    'fa-burger',
    'absolute',
    'right-3',
    'top-2/3',
    'transform',
    '-translate-y-1/2',
    'pointer-events-none',
    'text-red'
  );
  restDropdownContainer.appendChild(restaurantDropdown);
  restDropdownContainer.appendChild(restaurantIcon);
  selectionContainer.appendChild(restDropdownContainer);

  // Create the dropdown for amount of people
  const peopleDropdown = document.createElement('select');
  peopleDropdown.classList.add(
    'block',
    'w-full',
    'appearance-none',
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
  const peopleDropdownContainer = document.createElement('div');
  peopleDropdownContainer.classList.add('w-1/4', 'relative', 'inline-block');
  const peopleIcon = document.createElement('i');
  peopleIcon.classList.add(
    'fa-solid',
    'fa-users',
    'absolute',
    'right-3',
    'top-2/3',
    'transform',
    '-translate-y-1/2',
    'pointer-events-none',
    'text-red'
  );
  peopleDropdownContainer.appendChild(peopleDropdown);
  peopleDropdownContainer.appendChild(peopleIcon);
  selectionContainer.appendChild(peopleDropdownContainer);

  //create the date selection button

  // Create the date selection input
  const dateSelection = document.createElement('input');
  dateSelection.type = 'date';
  dateSelection.classList.add(
    'block',
    'w-full', // Use the same width as other elements
    'h-10',
    'mx-auto',
    'mt-5',
    'rounded-lg',
    'bg-primary',
    'text-red',
    'border',
    'border-red',
    'text-center'
  );

  // Create a container for date selection
  const dateContainer = document.createElement('div');
  dateContainer.classList.add('relative', 'inline-block', 'w-1/4');

  // Append the date selection input to the container
  dateContainer.appendChild(dateSelection);

  // Append the container to the selection container
  selectionContainer.appendChild(dateContainer);

  dateSelection.addEventListener('click', () => {
    const restaurantId = restaurantDropdown.value;

    const restaurant = restaurants.find(
      (restaurant) => restaurant.id === Number(restaurantId)
    ) as Restaurant;
    console.log(restaurant);
    if (restaurant == undefined) alert('You need to select Restaurant');
  });

  //main logic for creating the time selection button
  // Create the time selection dropdown
  const timeSelection = document.createElement('select');
  timeSelection.classList.add(
    'block',
    'w-full', // Use full width for the dropdown
    'h-10',
    'mx-auto',
    'mt-5',
    'appearance-none',
    'align-center',
    'text-center',
    'rounded-lg',
    'bg-offwhite',
    'text-red',
    'border',
    'border-red',
    'relative',
    'pr-12' // Increase right padding to make space for the icon
  );

  // Create a container for time selection and replacement icon
  const timeContainer = document.createElement('div');
  timeContainer.classList.add('relative', 'inline-block', 'w-1/4');

  const timeIcon = document.createElement('i');
  timeIcon.classList.add(
    'fa-solid',
    'fa-clock',
    'absolute',
    'right-3',
    'top-2/3',
    'transform',
    '-translate-y-1/2',
    'pointer-events-none'
  );

  timeContainer.appendChild(timeSelection);
  timeContainer.appendChild(timeIcon);

  // Generates times for time selection depending on the restaurant open hours
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
    selectionContainer.appendChild(timeContainer);
  };

  // Determine what day it is and generate times by restaurant and what day is
  // If restaurant changes that won't yet change new times etc
  dateSelection.addEventListener('change', () => {
    // Get restaurant
    const restaurantId = restaurantDropdown.value;
    const restaurant = restaurants.find(
      (restaurant) => restaurant.id === Number(restaurantId)
    ) as Restaurant;
    // Generate that restaurant times
    generateTimeSelection(restaurant);

    if (restaurant === undefined) {
      throw new Error('Error occurred with fetching restaurant');
    } else {
      console.log(restaurant);

      // Adds event listener to restaurant dropdown to change also times
      restaurantDropdown.addEventListener('change', () => {
        const restaurantId = restaurantDropdown.value;
        const restaurant = restaurants.find(
          (restaurant) => restaurant.id === Number(restaurantId)
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
  bgContainer.appendChild(reservationContainer);
  appDiv.appendChild(bgContainer);

  // TODO: Implement changing to reservation modal and pass all data from inputs to modal
  // for table creation
  // Now it's just showing all data on console log
  reservationButton.addEventListener('click', () => {
    const restaurantId = restaurantDropdown.value;
    const peopleAmount = peopleDropdown.value;
    const reservationTime = timeSelection.value;
    const reservationDate = dateSelection.value;
    console.log(restaurantId, peopleAmount, reservationTime, reservationDate);
  });
};

export {reservation};
