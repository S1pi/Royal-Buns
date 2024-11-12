import {header} from '../header/header';

// Reservation modal
const reservationModal = () => {
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
  header(); // Ensure header is placed inside appDiv

  // Creates the table reservation modal and styles it
  const reservationModalContainer = document.createElement('div');
  reservationModalContainer.classList.add(
    'mx-auto', // Center the container horizontally
    'm-10', // Margin top for spacing
    'bg-primary',
    'h-3/4',
    'w-3/4', // Minimum height of the container
    'flex',
    'flex-col',
    'p-5' // Padding
  );

  // Creates the page title text and styles it
  const reservationModalTitleContainer = document.createElement('h1');
  reservationModalTitleContainer.textContent = 'VARAA PÖYTÄ';
  reservationModalTitleContainer.classList.add(
    'flex',
    'text-h1', // Use custom h1 size from tailwind config
    'font-bold', // Bold text
    'text-center', // Center text
    'justify-center', // Flex to center the text in case it's inside a flex container
    'text-red' // Custom red color from config
  );
  // Append the title to the reservation container
  reservationModalContainer.appendChild(reservationModalTitleContainer);

  // Create container for table map
  const reservationContainer = document.createElement('div');
  reservationContainer.classList.add(
    'flex',
    'flex-col',
    'mt-5',
    'items-center'
  );

  // Reservation legends
  const legendContainer = document.createElement('div');
  legendContainer.classList.add('flex', 'gap-4', 'mb-4');

  // Legend for reserved
  const reservedLegend = document.createElement('div');
  reservedLegend.textContent = 'Varattu';
  reservedLegend.classList.add('flex', 'items-center');
  const reserSpan = document.createElement('span');
  reserSpan.classList.add('w-5', 'h-5', 'mr-2', 'ml-2', 'bg-red');
  reservedLegend.appendChild(reserSpan);

  // Legend for availables
  const availableLegend = document.createElement('div');
  availableLegend.textContent = 'Varattavissa';
  availableLegend.classList.add('flex', 'items-center');
  const availableSpan = document.createElement('span');
  availableSpan.classList.add('w-5', 'h-5', 'mr-2', 'ml-2', 'bg-green');
  availableLegend.appendChild(availableSpan);

  // Legend for selected
  const selectedLegend = document.createElement('div');
  selectedLegend.textContent = 'Valittu';
  selectedLegend.classList.add('flex', 'items-center');
  const selectedSpan = document.createElement('span');
  selectedSpan.classList.add('w-5', 'h-5', 'mr-2', 'ml-2', 'bg-yellow');
  selectedLegend.appendChild(selectedSpan);

  // Append all legends into their container
  legendContainer.append(reservedLegend, availableLegend, selectedLegend);

  //Create table map
  const tableMap = document.createElement('div');
  tableMap.classList.add('grid', 'grid-cols-5', 'gap-4');

  // !!VANHA TYYLI ÄLÄ POISTA VIELÄ!!
  // tableMap.classList.add(
  //   'flex',
  //   // 'flex-wrap',
  //   'w-full',
  //   'h-full',
  //   'gap-2',
  //   'bg-white',
  //   'border',
  //   'border-black',
  //   'rounded-lg',
  //   'h-3/4'
  // );

  reservationContainer.append(legendContainer, tableMap);

  // Create table mock data
  //TODO: Replace with actual data from the database
  const tables = [
    {id: 1, restaurantId: 1, seats: 8, reserved: false},
    {id: 2, restaurantId: 1, seats: 6, reserved: false},
    {id: 3, restaurantId: 1, seats: 2, reserved: true},
    {id: 4, restaurantId: 1, seats: 2, reserved: false},
    {id: 5, restaurantId: 1, seats: 2, reserved: true},
    {id: 6, restaurantId: 1, seats: 6, reserved: true},
    {id: 7, restaurantId: 1, seats: 6, reserved: false},
    {id: 8, restaurantId: 1, seats: 8, reserved: true},
    {id: 9, restaurantId: 1, seats: 2, reserved: false},
  ];

  const smallTableContainer = document.createElement('div');
  const largeTableContainer = document.createElement('div');
  const mediumTableContainer = document.createElement('div');

  // loop through the tables and create table elements
  tables.forEach((table) => {
    if (table.seats == 2) {
      const smallTable = document.createElement('div');
      smallTable.classList.add('w-16', 'h-16', 'bg-gray-400', 'rounded-full');
      tableMap.appendChild(smallTable);
    } else if (table.seats == 6) {
      const mediumTable = document.createElement('div');
      mediumTable.classList.add('w-5', 'h-30', 'bg-gray-400', 'rounded-lg');
      tableMap.appendChild(mediumTable);
    } else if (table.seats == 8) {
      const largeTable = document.createElement('div');
      largeTable.classList.add('w-7/12', 'h-56', 'bg-gray-400', 'rounded-lg');
      tableMap.appendChild(largeTable);
    }
  });

  // Append reservationcontainer to modal container
  reservationModalContainer.appendChild(reservationContainer);

  appDiv.appendChild(reservationModalContainer);
};

export {reservationModal};
