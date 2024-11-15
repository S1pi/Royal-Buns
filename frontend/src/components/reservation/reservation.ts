import {header} from '../header/header';

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
  const language = (lang: string) => {
    if (lang === 'fi') {
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
  reservationTitleContainer.textContent = language('fi')?'VARAA PÖYTÄ':'BOOK A TABLE';
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
    'border-red',
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
  const options = ['1-2 Henkilöä', '3-4 Henkilöä', '5-6 Henkilöä', '7-8 Henkilöä'];
  options.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    peopleDropdown.appendChild(optionElement);
  });
  selectionContainer.appendChild(peopleDropdown);

  //create the date selection button

  // list of available times
  const times = [
    "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00"
  ];  

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
  const timeOption = document.createElement('option');
  timeOption.value = 'time';
  timeOption.textContent = 'Valitse aika';
  timeOption.disabled = true;
  timeOption.selected = true;
  timeSelection.appendChild(timeOption);

  times.forEach((time) => {
    const timeOption = document.createElement('option');
    timeOption.value = time;
    timeOption.textContent = time;
    timeSelection.appendChild(timeOption);
  });

  // Append the reservation container to the appDiv
  selectionContainer.appendChild(timeSelection);
  //create reservation time selector button
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

  //Create the main reservation button
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
};



export {reservation};
