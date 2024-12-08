import {ReservationInfo} from '../../types/reservation';
import {Table} from '../../types/restaurant';
import {fetchTableMap, handleReservation} from './reservationService';

// Reservation modal
const reservationModal = async () => {
  // Check if the reservation was successful and clear the session
  if (sessionStorage.getItem('reservationResultModalOpened') === 'true') {
    sessionStorage.clear();
    window.location.href = '/'; // Ohjaa käyttäjä pois, jolloin modaalit eivät tule uudelleen näkyviin
  }

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
    'h-full', // Full height of the container
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
  const createSuccessModal = (reservationInformation: ReservationInfo) => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    console.log(
      'createSuccessModal -> reservationInformation: ',
      reservationInformation.reservation_date,
      reservationInformation.start_time,
      reservationInformation.end_time,
      reservationInformation.table_id,
      reservationInformation.restaurant_name
    );

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
      'z-50',
      'scroll-m-0'
    );
    const modalContent = document.createElement('div');
    modalContent.classList.add(
      'bg-primary',
      'rounded-lg',
      'p-10',
      'text-center',
      'min-w-96',
      'shadow-lg'
    );

    const successMessage = document.createElement('h2');
    successMessage.textContent = 'Varaus onnistui!';
    successMessage.classList.add('text-h2', 'font-bold', 'mb-6', 'text-warm-brown');
    const succesIcon = document.createElement('i');
    succesIcon.classList.add(
      'fa-regular',
      'fa-check-circle',
      'text-3xl',
      'mb-2',
      'ml-2',
      'text-olive-green'
    );
    successMessage.appendChild(succesIcon);
    modalContent.appendChild(successMessage);

    // Create a container for the reservation information title
    const reservationInfoContainer = document.createElement('div');
    reservationInfoContainer.classList.add(
      'mb-4',
      'border-y-2',
      'border-warm-brown',
      'py-4'
    );

    const reservationInfoTitle = document.createElement('h4');
    reservationInfoTitle.textContent = 'Varauksen tiedot:';
    reservationInfoTitle.classList.add(
      'text-h4',
      'font-semibold',
      'mb-4',
      'text-warmer-brown'
    );
    reservationInfoContainer.appendChild(reservationInfoTitle);

    // Create a container for the reservation information
    const reservationInfo = document.createElement('div');
    reservationInfo.classList.add('flex', 'flex-col', 'text-left');

    // Create a section for the restaurant name
    const restaurantName = document.createElement('p');
    restaurantName.textContent = `Ravintola: ${reservationInformation.restaurant_name}`;
    restaurantName.classList.add('text-base', 'mb-2', 'text-warmer-brown');
    const restaurantIcon = document.createElement('i');
    restaurantIcon.classList.add('fas', 'fa-utensils', 'mr-3', 'text-warmer-brown');
    restaurantName.prepend(restaurantIcon);

    // Create a section for the reservation date
    const reservationDate = document.createElement('p');
    reservationDate.textContent = `Päivämäärä: ${reservationInformation.reservation_date}`;
    reservationDate.classList.add('text-base', 'mb-2', 'text-warmer-brown');
    const calendarIcon = document.createElement('i');
    calendarIcon.classList.add('far', 'fa-calendar-alt', 'mr-3', 'text-warmer-brown');
    reservationDate.prepend(calendarIcon);

    // Create a section for the reservation time
    const reservationTime = document.createElement('p');
    reservationTime.textContent = `Aika: ${reservationInformation.start_time} - ${reservationInformation.end_time}`;
    reservationTime.classList.add('text-base', 'mb-2', 'text-warmer-brown');
    const clockIcon = document.createElement('i');
    clockIcon.classList.add('far', 'fa-clock', 'mr-3', 'text-warmer-brown');
    reservationTime.prepend(clockIcon);

    // Create a section for the table number
    const reservationTable = document.createElement('p');
    reservationTable.textContent = `Pöydän numero: ${reservationInformation.table_id}`;
    reservationTable.classList.add('text-base', 'mb-2', 'text-warmer-brown');
    const tableIcon = document.createElement('i');
    tableIcon.classList.add('fas', 'fa-chair', 'mr-3', 'text-warmer-brown');
    reservationTable.prepend(tableIcon);

    // Append all reservation information to the reservation info container
    reservationInfo.append(
      restaurantName,
      reservationDate,
      reservationTime,
      reservationTable
    );

    // Append the reservation info container to the modal content
    reservationInfoContainer.appendChild(reservationInfo);
    modalContent.appendChild(reservationInfoContainer);

    const reservationInfoInProfile = document.createElement('p');
    reservationInfoInProfile.textContent = 'Näet varauksesi profiilissasi.';
    reservationInfoInProfile.classList.add(
      'text-sm',
      'italic',
      'mt-2',
      'mb-6',
      'text-warmer-brown'
    );
    modalContent.appendChild(reservationInfoInProfile);

    const successDescription = document.createElement('p');
    successDescription.innerHTML =
      'Kiitos varauksestasi! <br/> Tervetuloa ravintolaamme!';
    successDescription.classList.add('text-lg', 'mb-4', 'text-warmer-brown');
    modalContent.appendChild(successDescription);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Sulje';
    closeButton.classList.add(
      'bg-warmer-brown',
      'text-primary',
      'px-4',
      'py-2',
      'rounded',
      'pop-out-animation',
      'cursor-pointer'
    );
    closeButton.addEventListener('click', () => {
      window.location.href = '/';
      sessionStorage.clear();
      selectedTable = null;

      document.body.style.overflow = 'auto'; // Enable scrolling
    });

    modalContent.appendChild(closeButton);
    modalContainer.appendChild(modalContent);
    document.body.appendChild(modalContainer);
    return modalContainer;
  };

  const createErrorModal = () => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling

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
      'z-50',
      'scroll-m-0'
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
    const errorMessage = document.createElement('h3');
    errorMessage.textContent = 'Varaus epäonnistui!';
    errorMessage.classList.add('text-h3', 'font-semibold', 'mb-4', 'text-red-600');
    modalContent.appendChild(errorMessage);
    const errorDescription = document.createElement('p');
    errorDescription.innerHTML =
      'Pöydän varaaminen epäonnistui. <br/> Palaa takaisin ja yritä uudelleen.';
    errorDescription.classList.add('text-base', 'mb-4');
    modalContent.appendChild(errorDescription);
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Sulje';
    closeButton.classList.add(
      'bg-red',
      'text-black',
      'px-4',
      'py-2',
      'rounded',
      'pop-out-animation',
      'cursor-pointer'
    );
    closeButton.addEventListener('click', () => {
      window.location.href = '/reservation';
      sessionStorage.clear();
      selectedTable = null;

      document.body.style.overflow = 'auto'; // Enable scrolling
    });

    modalContent.appendChild(closeButton);
    modalContainer.appendChild(modalContent);
    document.body.appendChild(modalContainer);
    return modalContainer;
  };

  // Create a modal for confirming the reservation
  const createReservationConfirmationModal = (
    selectionDay: string,
    selectionStartTime: string,
    selectionEndTime: string,
    selectedTable: number,
    selectionRestaurant: number
  ) => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    // Create the modal container
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
      'z-50',
      'scroll-m-0'
    );

    // Create the modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add(
      'bg-primary',
      'rounded-lg',
      'p-6',
      'text-center',
      'w-80',
      'shadow-lg'
    );

    // Create the confirmation message
    const confirmationMessage = document.createElement('h3');
    confirmationMessage.textContent = 'Vahvista varaus';
    confirmationMessage.classList.add('text-h3', 'font-semibold', 'mb-4', 'text-red-600');
    modalContent.appendChild(confirmationMessage);
    const confirmationDescription = document.createElement('p');

    // Improvement idea: Make reservation cancellation possible and change the description text accordingly
    confirmationDescription.innerHTML =
      'Haluatko varmasti varata tämän pöydän? <br/> <br/> <b>Varaus on sitova.</b>';
    confirmationDescription.classList.add('text-base', 'mb-4');
    modalContent.appendChild(confirmationDescription);

    // Create a confirm button for the modal
    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Vahvista';
    confirmButton.classList.add(
      'bg-olive-green',
      'text-black',
      'px-4',
      'py-2',
      'mx-4',
      'rounded',
      'pop-out-animation',
      'cursor-pointer'
    );

    // Add event listener to the confirm button to handle the reservation
    confirmButton.addEventListener('click', async () => {
      // Handle the reservation and show the success or error modal
      // TODO: Move this into confirmation modal
      const successfullReservation = await handleReservation(
        selectionDay,
        selectionStartTime,
        selectionEndTime,
        selectedTable,
        selectionRestaurant
      );

      if (!successfullReservation) {
        const errorModal = createErrorModal(); // Create the error modal
        // updateContent(); // Update the content of the error modal // TODO: Implement this
        errorModal.classList.remove('hidden'); // Show the error modal
        sessionStorage.setItem('reservationResultModalOpened', 'true');
        setTimeout(() => {
          window.location.href = '/reservation'; // Ohjaa käyttäjä takaisin varausnäkymään muutaman sekunnin kuluttua
          sessionStorage.clear();
        }, 10000);
      } else {
        const successModal = createSuccessModal(successfullReservation); // Create the success modal
        successModal.classList.remove('hidden'); // Show the success modal
        sessionStorage.setItem('reservationResultModalOpened', 'true');

        // Väliaikaisesti aika on pidennetty 60 sekuntiin, testausta varten

        setTimeout(() => {
          window.location.href = '/'; // Ohjaa käyttäjä takaisin etusivulle muutaman sekunnin kuluttua
          sessionStorage.clear();
        }, 30000);
      }
    });

    // Create a close button for the modal
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Peruuta';
    closeButton.classList.add(
      'bg-red',
      'text-black',
      'px-4',
      'py-2',
      'rounded',
      'pop-out-animation',
      'cursor-pointer'
    );

    // Add event listener to the close button to close the modal
    closeButton.addEventListener('click', () => {
      modalContainer.classList.add('hidden');
      document.body.style.overflow = 'auto'; // Enable scrolling
      document.body.removeChild(modalContainer);
    });

    // Append the buttons to the modal content
    modalContent.appendChild(confirmButton);
    modalContent.appendChild(closeButton);

    // Append the modal content to the modal container
    modalContainer.appendChild(modalContent);
    document.body.appendChild(modalContainer);

    return modalContainer;
  };

  // Get the reservation information from session storage
  const selectionSize = sessionStorage.getItem('reservation-size') as number | null;
  const selectionDay = sessionStorage.getItem('reservation-day');
  const selectionRestaurant = sessionStorage.getItem('restaurant') as number | null;
  const selectionStartTime = sessionStorage.getItem('reservation-time');
  let [hour, minute, seconds] = selectionStartTime?.split(':') as string[];
  // Add 2 hours to the reservation time
  hour = (parseInt(hour) + 2).toString();

  // Backup plan for handling closing hour reservations
  // so backend can handle them correctly
  if (hour === '24') {
    hour = '00';
  } else if (hour === '25') {
    hour = '01';
  }

  const selectionEndTime = `${hour}:${minute}:${seconds}`;
  let selectedTable: number | null = null;

  // Create a submit button for the reservation to send the reservation to the backend
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
  submitButton.addEventListener('click', async () => {
    if (
      !selectionDay ||
      !selectionStartTime ||
      !selectionEndTime ||
      !selectedTable ||
      !selectionRestaurant
    ) {
      console.error('Missing reservation information');
      return;
    }

    // TODO: Implement reservation confirmation modal

    const reservationConfirmationModal = createReservationConfirmationModal(
      selectionDay,
      selectionStartTime,
      selectionEndTime,
      selectedTable,
      selectionRestaurant
    );

    reservationConfirmationModal.classList.remove('hidden');
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

    // This fucked up the modal, so I commented it out!!!
    // Remake the success modal translation!!!
    // if (successModal) {
    //   successModal.childNodes[0].childNodes[0].textContent =
    //     translations[currentLanguage].successMessage;
    //   successModal.childNodes[0].childNodes[1].textContent =
    //     translations[currentLanguage].closeButton;
    // }
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

  let currentLanguage = localStorage.getItem('language') as 'EN' | 'FI'; // Get the language from local storage Default to FI
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

  let tableElements: HTMLButtonElement[] = [];

  // Create table mock data
  //TODO: Replace with actual data from the database

  let tables: Table[] = [];

  if (!selectionRestaurant || !selectionDay || !selectionStartTime || !selectionEndTime) {
    console.error('Missing reservation information');
    return;
  } else {
    tables = await fetchTableMap(
      selectionRestaurant,
      selectionDay,
      selectionStartTime,
      selectionEndTime
    );
  }

  // loop through the tables and create table elements
  tables.forEach((table) => {
    // Filter tables by reservation size
    const tableButton = document.createElement('button');
    console.log(table.is_free);
    table.is_free
      ? tableButton.classList.add('bg-green') // Gives green color if tables is available
      : tableButton.classList.add('bg-red', 'cursor-not-allowed'); // Gives red color if table is reserved

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

    if (table.seats !== Number(selectionSize)) {
      tableButton.disabled = true;
      tableButton.classList.add('cursor-not-allowed', 'opacity-50');
    } else if (table.is_free) {
      tableButton.classList.add('hover:bg-hover-green');
    }

    // Handles table selection if the table is available
    tableButton.addEventListener('click', () => {
      if (table.is_free && table.seats) {
        console.log(table.table_id);
        tableElements.forEach((element) => {
          element.classList.add('hover:bg-hover-green');
          element.classList.remove('bg-yellow');
        });
        tableButton.classList.add('bg-yellow');
        tableButton.classList.remove('hover:bg-hover-green');
        selectedTable = table.table_id;
        console.log(selectedTable);
        // add selected table to session storage
        sessionStorage.setItem('selected-table', selectedTable.toString());
        // button to pass reservation to backend
        submitButton.classList.remove('hidden');
      }
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
