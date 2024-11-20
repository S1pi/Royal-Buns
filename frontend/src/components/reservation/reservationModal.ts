// Reservation modal
const reservationModal = () => {
  // Select the #app div
  const appDiv = document.querySelector('#app') as HTMLElement;

  // Get header element and remove opacity
  const headerBg = document.querySelector('header') as HTMLElement;
  headerBg.classList.remove('bg-opacity-0');

  const bgContainer = document.createElement('div');
  bgContainer.classList.add(
    'bg-background-light',
    'p-5',
    'h-screen',
    'flex',
    'flex-col',
    'justify-center'
  );

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
  reservationContainer.append(legendContainer);

  //Create table map
  // const tableMap = document.createElement('div');
  // tableMap.classList.add(
  //   'grid',
  //   'grid-cols-8',
  //   'gap-4',
  //   'bg-white',
  //   'p-4',
  //   'rounded-lg',
  //   'border-solid',
  //   'border-2',
  //   'border-black'
  // );

  // Create table mock data
  //TODO: Replace with actual data from the database
  const tables = [
    {id: 1, restaurantId: 1, seats: 8, reserved: false},
    {id: 1, restaurantId: 1, seats: 8, reserved: false},
    {id: 1, restaurantId: 1, seats: 8, reserved: false},
    {id: 2, restaurantId: 1, seats: 6, reserved: false},
    {id: 2, restaurantId: 1, seats: 6, reserved: false},
    {id: 2, restaurantId: 1, seats: 6, reserved: false},
    {id: 2, restaurantId: 1, seats: 6, reserved: false},
    {id: 3, restaurantId: 1, seats: 2, reserved: true},
    {id: 3, restaurantId: 1, seats: 2, reserved: true},
    {id: 3, restaurantId: 1, seats: 2, reserved: true},
    {id: 3, restaurantId: 1, seats: 2, reserved: true},
    {id: 4, restaurantId: 1, seats: 2, reserved: false},
    {id: 4, restaurantId: 1, seats: 2, reserved: false},
    {id: 4, restaurantId: 1, seats: 2, reserved: false},
    {id: 4, restaurantId: 1, seats: 2, reserved: false},
    {id: 5, restaurantId: 1, seats: 2, reserved: true},
    {id: 6, restaurantId: 1, seats: 6, reserved: true},
    {id: 7, restaurantId: 1, seats: 6, reserved: false},
    {id: 8, restaurantId: 1, seats: 8, reserved: true},
    {id: 8, restaurantId: 1, seats: 8, reserved: true},
    {id: 9, restaurantId: 1, seats: 2, reserved: false},
  ];

  const mainContainer = document.createElement('div');
  mainContainer.classList.add(
    'grid',
    'grid-cols-3',
    'bg-white',
    'p-4',
    'rounded-xl',
    'gap-12'
  );

  // Grid for 8-people tables
  const largeTableGrid = document.createElement('div');
  largeTableGrid.classList.add(
    'grid',
    'grid-cols-5',
    'gap-6',
    'col-span-2',
    'place-items-center'
  );

  // Grid for 6-people tables
  const mediumTableGrid = document.createElement('div');
  mediumTableGrid.classList.add(
    'grid',
    'grid-cols-3',
    'row-span-2',
    'gap-4',
    'grid',
    'place-items-center'
  );

  // Grid for 2-people tables
  const smallTableGrid = document.createElement('div');
  smallTableGrid.classList.add(
    'grid',
    'col-span-2',
    'grid-cols-5',
    'gap-4',
    'justify-center',
    'place-items-center'
  );

  // Append the grids to main container
  mainContainer.append(largeTableGrid, mediumTableGrid, smallTableGrid);
  reservationContainer.append(mainContainer);

  // loop through the tables and create table elements
  tables.forEach((table) => {
    const tableButton = document.createElement('button');
    table.reserved
      ? tableButton.classList.add('bg-red') // Gives red color if table is already reserved
      : tableButton.classList.add('bg-green'); // Gives green color if tables is available

    // Determine table size by seats
    if (table.seats === 2) {
      tableButton.classList.add('w-14', 'h-14', 'rounded-full');
      smallTableGrid.appendChild(tableButton);
    } else if (table.seats === 6) {
      tableButton.classList.add('w-16', 'h-36', 'rounded-lg');
      mediumTableGrid.appendChild(tableButton);
    } else if (table.seats === 8) {
      tableButton.classList.add('w-20', 'h-48', 'rounded-lg');
      largeTableGrid.appendChild(tableButton);
    }

    tableButton.addEventListener('click', () => {
      if (!table.reserved) {
        console.log(table.id);
        tableButton.classList.toggle('bg-yellow');
      }
    });
  });

  // Append reservationcontainer to modal container
  reservationModalContainer.appendChild(reservationContainer);

  bgContainer.appendChild(reservationModalContainer);
  appDiv.appendChild(bgContainer);
};

export {reservationModal};
