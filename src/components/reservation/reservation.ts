import {header} from '../header/header';

const reservation = () => {
  // Select the #app div
  const appDiv = document.querySelector('#app') as HTMLElement;
  appDiv.classList.add(
    'bg-background-light',
    'p-5',
    'min-h-screen',
    'flex',
    'flex-col'
  );
  header(); // Ensure header is placed inside appDiv

  // Creates the reservation container and styles it
  const reservationContainer = document.createElement('div');
  reservationContainer.classList.add(
    'container', // Tailwind class for setting the container size
    'mx-auto', // Center the container horizontally
    'mt-10', // Margin top for spacing
    'bg-primary',
    'min-h-screen', // Minimum height of the container
    'w-3/4', // Minimum height of the container
    'flex',
    'flex-col',
    'p-5' // Padding
    // Background color
  );

  // Create the reservation title and style it
  const reservationTitleContainer = document.createElement('h1');
  reservationTitleContainer.textContent = 'Varaa pöytä';
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
    'text-center'
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
  const options = ['1', '2', '3', '4', '5', '6', '7', '8'];
  options.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    peopleDropdown.appendChild(optionElement);
  });
  selectionContainer.appendChild(peopleDropdown);

  //create the date selection button
  const timeSelection = document.createElement('button');
  timeSelection.classList.add(
    'block',
    'w-1/4',
    'h-10',
    'mx-auto',
    'mt-5',
    'rounded-lg',
    'bg-white',
    'text-black'
  );
  const timeSelectionText = 'Valitse kellonaika';
  timeSelection.textContent = timeSelectionText;

  // Append the reservation container to the appDiv
  selectionContainer.appendChild(timeSelection);
  //create reservation time selector button
  const dateSelection = document.createElement('button');
  dateSelection.classList.add(
    'block',
    'w-1/4',
    'h-10',
    'mx-auto',
    'mt-5',
    'rounded-lg',
    'bg-white',
    'text-black'
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
    'h-40',
    'mx-auto',
    'mt-5',
    'rounded-lg',
    'bg-white',
    'text-black',
    'justify-center',
    'items-center',
    'p-5'
  );
  reservationContainer.appendChild(reservationButton);
  appDiv.appendChild(reservationContainer);
};

export {reservation};
