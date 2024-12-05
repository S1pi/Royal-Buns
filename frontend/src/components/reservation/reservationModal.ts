import {reservation} from './reservation';

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
  reservationContainer.classList.add('flex', 'flex-col', 'mt-5', 'items-center');

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
    {id: 2, restaurantId: 1, seats: 8, reserved: false},
    {id: 3, restaurantId: 1, seats: 8, reserved: false},
    {id: 4, restaurantId: 1, seats: 6, reserved: false},
    {id: 5, restaurantId: 1, seats: 6, reserved: false},
    {id: 6, restaurantId: 1, seats: 6, reserved: false},
    {id: 7, restaurantId: 1, seats: 6, reserved: false},
    {id: 8, restaurantId: 1, seats: 2, reserved: true},
    {id: 9, restaurantId: 1, seats: 2, reserved: true},
    {id: 10, restaurantId: 1, seats: 2, reserved: true},
    {id: 11, restaurantId: 1, seats: 2, reserved: true},
    {id: 12, restaurantId: 1, seats: 2, reserved: false},
    {id: 13, restaurantId: 1, seats: 2, reserved: false},
    {id: 14, restaurantId: 1, seats: 2, reserved: false},
    {id: 15, restaurantId: 1, seats: 2, reserved: false},
    {id: 16, restaurantId: 1, seats: 2, reserved: true},
    {id: 17, restaurantId: 1, seats: 6, reserved: true},
    {id: 18, restaurantId: 1, seats: 6, reserved: false},
    {id: 19, restaurantId: 1, seats: 8, reserved: true},
    {id: 20, restaurantId: 1, seats: 8, reserved: true},
    {id: 21, restaurantId: 1, seats: 2, reserved: false},
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
  // Create a modal for successful reservation
  const createSuccessModal = () => {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add(
      'fixed',
      'inset-0',
      'bg-black',
      'bg-opacity-50',
      'flex',
      'items-center',
      'justify-center',
      'hidden',
      'z-50'
    );
    const modalContent = document.createElement('div');
    modalContent.classList.add(
      'bg-primary',
      'rounded-lg',
      'p-6',
      'text-center',
      'w-80',
      'shadow-lg'
    );
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Reservation successful!';
    successMessage.classList.add('text-lg', 'font-semibold', 'mb-4', 'text-green-600');
    modalContent.appendChild(successMessage);
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add(
      'bg-red',
      'text-black',
      'px-4',
      'py-2',
      'rounded',
      'hover:bg-primary-dark',
      'pop-out-animation',
      'cursor-pointer'
    );
    closeButton.addEventListener('click', () => {
      window.location.href = '/';
      sessionStorage.removeItem('reservation-day');
      sessionStorage.removeItem('reservation-size');
      sessionStorage.removeItem('reservation-time');
      sessionStorage.removeItem('restaurant');
      sessionStorage.removeItem('selected-table');

      //TODO show the modal ONLY if the backend returns a successful response
      //TODO hide the modal after a few seconds
      //TODO make close button navigate the user back to home page
      // Close the modal and navigate to the home page
    });

    modalContent.appendChild(closeButton);
    modalContainer.appendChild(modalContent);
    document.body.appendChild(modalContainer);
    return modalContainer;
  };
  const successModal = createSuccessModal();

  const submitButton = document.createElement('button');
  submitButton.textContent = 'VARAA';
  submitButton.classList.add(
    'bg-primary',
    'text-red',
    'p-2',
    'mt-4',
    'rounded',
    'hidden',
    'cursor-pointer',
    'border-2',
    'border-red',
    'pop-out-animation'
  );
  reservationContainer.appendChild(submitButton);
  submitButton.addEventListener('click', () => {
    successModal.classList.remove('hidden'); // Show the success modal
  });

  const updateContent = () => {
    // Update the reservation modal title
    reservationModalTitleContainer.textContent =
      translations[currentLanguage].reservationModalTitleContainer;

    // Update the legends' text without overwriting the styled spans
    reservedLegend.childNodes[0].textContent =
      translations[currentLanguage].reservedLegend + ' ';
    availableLegend.childNodes[0].textContent =
      translations[currentLanguage].availableLegend + ' ';
    selectedLegend.childNodes[0].textContent =
      translations[currentLanguage].selectedLegend + ' ';
    // Update the submit button text
    submitButton.textContent = translations[currentLanguage].title;
    successModal.childNodes[0].childNodes[0].textContent =
      translations[currentLanguage].successMessage;
    successModal.childNodes[0].childNodes[1].textContent =
      translations[currentLanguage].closeButton;
  };

  // Translation functionality for the page.
  const translations = {
    FI: {
      title: 'VARAA TÄMÄ PÖYTÄ',
      reservedLegend: 'Varattu',
      availableLegend: 'Varattavissa',
      selectedLegend: 'Valittu',
      reservationModalTitleContainer: 'VARAA PÖYTÄ',
      successMessage: 'Varaus onnistui!',
      closeButton: 'Sulje',
    },
    EN: {
      title: 'BOOK THIS TABLE',
      reservedLegend: 'Reserved',
      availableLegend: 'Available',
      selectedLegend: 'Selected',
      reservationModalTitleContainer: 'BOOK A TABLE',
      successMessage: 'Reservation successful!',
      closeButton: 'Close',
    },
  };

  let currentLanguage: 'EN' | 'FI' = localStorage.getItem('language') as 'EN' | 'FI'; // Default language
  const languageButtons = document.querySelectorAll('button');
  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedLanguage = button.textContent as 'FI' | 'EN';
      if (selectedLanguage === 'FI' || selectedLanguage === 'EN') {
        currentLanguage = selectedLanguage;
      }
      // todo: store language in local storage
      localStorage.setItem('language', currentLanguage);
      updateContent();
    });
  });

  // Get the reservation size from session storage
  const selectionSize = sessionStorage.getItem('reservation-size');

  let selectedTable: number | null;
  let tableElements: HTMLButtonElement[] = [];

  // loop through the tables and create table elements
  tables.forEach((table) => {
    // Filter tables by reservation size
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

    if (table.seats.toString() !== selectionSize) {
      tableButton.disabled = true;
      tableButton.classList.add('cursor-not-allowed', 'opacity-50');
    }
    tableButton.addEventListener('click', () => {
      if (!table.reserved && table.seats) {
        console.log(table.id);
        // if (!selectedTable) {
        // tableButton.classList.toggle('bg-yellow');
        // selectedTable = table.id;
        // }
        tableElements.forEach((element) => {
          element.classList.remove('bg-yellow');
        });
        tableButton.classList.add('bg-yellow');
        selectedTable = table.id;
        console.log(selectedTable);
        // add selected table to session storage
        sessionStorage.setItem('selected-table', selectedTable.toString());
        // button to pass reservation to backend
        submitButton.classList.remove('hidden');
      }
      // create modal for informing the user of having booked successfully
      submitButton.addEventListener('click', () => {
        const reservationInfoModal = document.createElement('div');
        reservationInfoModal.classList.add(
          'bg-white',
          'p-5',
          'rounded-lg',
          'border-2',
          'border-black',
          'absolute',
          'top-1/2',
          'left-1/2',
          'transform',
          '-translate-x-1/2',
          '-translate-y-1/2'
        );
      });
      tableElements.push(tableButton);
    });
  });

  // Append reservationcontainer to modal container
  reservationModalContainer.appendChild(reservationContainer);

  bgContainer.appendChild(reservationModalContainer);
  appDiv.appendChild(bgContainer);
  updateContent();
};

export {reservationModal};
