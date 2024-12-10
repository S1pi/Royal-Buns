import {UserProfilePageData} from '../../../types/user';
import {router} from '../../navigation/router';
import createAdminView from './Admin';
import '../../../styles/profile.css';

const translations = {
  FI: {
    profileInfo: {
      header: 'PROFIILI',
      name: 'Nimi: ',
      email: 'Sähköposti: ',
      phone: 'Puhelinnumero: ',
      favBurger: 'Lempihampurilainen: ',
      notSelected: 'Ei valittu',
      missingPhone: 'ilmoita puhelinnumero',
      missingEmail: 'ilmoita sähköposti',
    },
    reservationInfo: {
      header: 'VARAUKSET',
      date: 'Päivä: ',
      selectDay: 'Valitse päivä',
      noReservations: 'Ei varauksia',
      reservationText: 'Varaus',
      time: 'Kellonaika: ',
      restaurant: 'Ravintola: ',
      tableNumber: 'Pöytänumero: ',
      initialText: 'Valitse varaus nähdäksesi tietoja',
      timeError: 'Kellonaikaa ei saatavilla',
      restaurantError: 'Ravintolaa ei saatavilla',
    },
    restaurantContactInfo: {
      header: 'Ravintolan yhteystiedot',
      customerservice: 'Asiakaspalvelu: ',
      email: 'Sähköposti: ',
    },
    buttons: {
      adminPanel: 'Admin Panel',
      changeInfo: 'Muuta tietoja',
      logout: 'Kirjaudu ulos',
    },
  },
  EN: {
    profileInfo: {
      header: 'PROFILE',
      name: 'Name: ',
      email: 'Email: ',
      phone: 'Phone: ',
      favBurger: 'Favorite Burger: ',
      notSelected: 'Not selected',
      missingPhone: 'Missing phone number',
      missingEmail: 'Missing email',
    },
    reservationInfo: {
      header: 'RESERVATIONS',
      date: 'Date: ',
      selectDay: 'Select day',
      noReservations: 'No reservations',
      reservationText: 'Reservation',
      time: 'Time: ',
      restaurant: 'Restaurant: ',
      tableNumber: 'Table number: ',
      initialText: 'Select a reservation to see details',
      timeError: 'Time not available',
      restaurantError: 'Restaurant not available',
    },
    restaurantContactInfo: {
      header: 'Restaurant contact information',
      customerservice: 'Customerservice: ',
      email: 'Email: ',
    },
    buttons: {
      adminPanel: 'Admin Panel',
      changeInfo: 'Change information',
      logout: 'Log out',
    },
  },
};

// Meaby get data as parameter and use it to fill the profile view
const createProfileView = (
  pageData: UserProfilePageData,
  profileContainer: HTMLDivElement
) => {
  console.log('Profile page data in createProfileView: ', pageData);
  console.log('User info in createProfileView: ', pageData.user_info);
  console.log('Reservations in createProfileView: ', pageData.reservations);
  // Handle the user's information here
  // pageData.user_info has also user_type that can be used
  // but for now we only show the user's information*

  const {username, email, phonenumber, favourite_bgr, user_type} = pageData.user_info;
  const reservations = pageData.reservations;
  let language = localStorage.getItem('language') as 'FI' | 'EN';
  if (language !== 'FI' && language !== 'EN') {
    localStorage.setItem('language', 'FI');
    router();
  }

  if (reservations.length > 0) {
    reservations.sort((a, b) => {
      const dateA = new Date(a.reservation_date.split('.').reverse().join('-'));
      const dateB = new Date(b.reservation_date.split('.').reverse().join('-'));
      return dateA.getTime() - dateB.getTime();
    });
  }

  // Container for profile information
  const profileViewContainer = document.createElement('div');
  profileViewContainer.classList.add('flex', 'w-full', 'h-full', 'gap-10');

  // Container for left side of the profile view that shows user's information
  const profileInfoContainer = document.createElement('div');
  profileInfoContainer.classList.add(
    'testi',
    'flex',
    'flex-col',
    'justify-between',
    'items-center',
    'bg-light-brown',
    'rounded-2xl',
    'py-8',
    'px-5',
    'w-1/2',
    'h-full'
  );

  // Only a prototype, not used in the projects
  // const language = localStorage.getItem('language') as 'FI' | 'EN';

  // if (!language) {
  //   localStorage.setItem('language', 'FI');
  // }

  // const translations = handleTranslations(language, 'profile');
  // console.log('Translations in createProfileView: ', translations);

  // if (!translations) {
  //   return;
  // }
  // ***Prototype ends here***

  const heading = document.createElement('h2');
  heading.textContent = translations[language].profileInfo.header;
  heading.classList.add('text-h2', 'font-bold', 'text-secondary');

  // Username container shows the user's username
  const usernameContainer = document.createElement('div');
  usernameContainer.classList.add('flex', 'gap-3');

  const usernameLabel = document.createElement('label');
  usernameLabel.textContent = translations[language].profileInfo.name;
  usernameLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const usernameText = document.createElement('p');
  // Change this to come from backend when user is authenticated
  usernameText.textContent = username ? username : 'Käyttäjänimi ei saatavilla';
  usernameText.classList.add('text-h5', 'text-primary');
  usernameContainer.append(usernameLabel, usernameText);

  // Email container shows the user's email
  const emailContainer = document.createElement('div');
  emailContainer.classList.add('flex', 'gap-3');

  const emailLabel = document.createElement('label');
  emailLabel.textContent = translations[language].profileInfo.email;
  emailLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const emailText = document.createElement('p');
  // Change this to come from backend when user is authenticated
  emailText.textContent = email ? email : translations[language].profileInfo.missingEmail;
  emailText.classList.add('text-h5', 'text-primary');
  emailContainer.append(emailLabel, emailText);

  const phoneNumContainer = document.createElement('div');
  phoneNumContainer.classList.add('flex', 'gap-3');

  const phoneNumLabel = document.createElement('label');
  phoneNumLabel.textContent = translations[language].profileInfo.phone;
  phoneNumLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const phoneNum = document.createElement('p');
  // Change this to come from backend when user is authenticated
  phoneNum.textContent = phonenumber
    ? phonenumber
    : translations[language].profileInfo.missingPhone;
  phoneNum.classList.add('text-h5', 'text-primary');
  phoneNumContainer.append(phoneNumLabel, phoneNum);

  const favouriteBurgerContainer = document.createElement('div');
  favouriteBurgerContainer.classList.add('flex', 'gap-3', 'mb-10');

  const favouriteBurgerLabel = document.createElement('label');
  favouriteBurgerLabel.textContent = translations[language].profileInfo.favBurger;
  favouriteBurgerLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const favouriteBurger = document.createElement('p');
  // Change this to come from backend when user is authenticated
  favouriteBurger.textContent = favourite_bgr
    ? favourite_bgr
    : translations[language].profileInfo.notSelected;
  favouriteBurger.classList.add('text-h5', 'text-primary');

  favouriteBurgerContainer.append(favouriteBurgerLabel, favouriteBurger);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('flex', 'gap-4', 'w-full', 'justify-center');

  // TODO: Check if user is admin and show admin panel button

  if (user_type === 'admin') {
    const adminViewButton = document.createElement('button');
    adminViewButton.textContent = translations[language].buttons.adminPanel;
    adminViewButton.classList.add(
      'text-base',
      'font-bold',
      'text-primary',
      'bg-secondary',
      'hover:bg-hover-brown',
      'py-2',
      'px-4',
      'rounded-2xl'
    );

    adminViewButton.addEventListener('click', async () => {
      createAdminView(profileContainer);
    });

    buttonContainer.appendChild(adminViewButton);
  }

  // Button for changing the user's password (Meaby change this to a: Change information button)
  const changeInfoButton = document.createElement('button');
  changeInfoButton.textContent = translations[language].buttons.changeInfo;
  changeInfoButton.classList.add(
    'text-base',
    'font-bold',
    'text-primary',
    'bg-secondary',
    'hover:bg-hover-brown',
    'py-2',
    'px-4',
    'rounded-2xl'
  );

  // Implement password change functionality for button.EventListener('click', changePassword)

  const logoutButton = document.createElement('button');
  logoutButton.textContent = translations[language].buttons.logout;
  logoutButton.classList.add(
    'text-base',
    'font-bold',
    'text-primary',
    'bg-red',
    'hover:bg-dark-red',
    'py-2',
    'px-4',
    'rounded-2xl'
  );

  // Implement logout functionality for button.EventListener('click', logout)
  logoutButton.addEventListener('click', () => {
    localStorage.removeItem('user-token');
    history.replaceState({}, '', '/login');
    router();
  });

  buttonContainer.append(changeInfoButton, logoutButton);

  // Append all the elements to the profile info container
  profileInfoContainer.append(
    heading,
    usernameContainer,
    emailContainer,
    phoneNumContainer,
    favouriteBurgerContainer,
    buttonContainer
  );
  // ***End of profile info container***

  // Container for right side of the profile view
  const rightSideContainer = document.createElement('div');
  rightSideContainer.classList.add('flex', 'flex-col', 'items-center', 'w-1/2', 'gap-6');

  // ***Reservation info starts here***
  // Container for reservation information
  const reservationInfoContainer = document.createElement('div');
  reservationInfoContainer.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'justify-between',
    'bg-light-brown',
    'rounded-2xl',
    'p-5',
    'w-full',
    'h-3/5'
  );

  const reservationInfoHeading = document.createElement('h3');
  reservationInfoHeading.textContent = translations[language].reservationInfo.header;
  reservationInfoHeading.classList.add('text-h3', 'font-bold', 'mb-5', 'text-secondary');

  // Container for reservation day selection
  const reservationDaySelectContainer = document.createElement('div');
  reservationDaySelectContainer.classList.add(
    'flex',
    'gap-3',
    'w-full',
    'items-center',
    'justify-center'
  );

  const reservationDayLabel = document.createElement('label');
  reservationDayLabel.textContent = 'Päivä:';
  reservationDayLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const reservationDaySelect = document.createElement('select');
  reservationDaySelect.classList.add(
    'daySelector',
    'text-h5',
    'text-secondary',
    'rounded-2xl',
    'px-3',
    'py-0.5',
    'w-1/2',
    'min-w-56'
  );

  // Reservation day selection logic starts here
  // First option is a placeholder
  // firstSelection is used to disable the first option after user has selected a reservation
  let firstSelection = null;

  const reservationDayOption = document.createElement('option');
  reservationDayOption.textContent = translations[language].reservationInfo.selectDay;
  reservationDayOption.value = '0';
  reservationDaySelect.appendChild(reservationDayOption);
  firstSelection = reservationDayOption;

  // Add all the user's reservations to the select element
  if (reservations.length > 0) {
    reservations.forEach((reservation) => {
      const reservationDayOption = document.createElement('option');
      reservationDayOption.textContent =
        reservation.reservation_date +
        ` ${translations[language].reservationInfo.reservationText}: ` +
        reservation.id;
      reservationDayOption.value = reservation.id.toString();
      reservationDaySelect.appendChild(reservationDayOption);
    });
  } else {
    const reservationDayOption = document.createElement('option');
    reservationDayOption.textContent =
      translations[language].reservationInfo.noReservations;
    reservationDayOption.value = '0';
    reservationDayOption.disabled = true;
    reservationDaySelect.appendChild(reservationDayOption);
  }

  reservationDaySelectContainer.append(reservationDayLabel, reservationDaySelect);

  // Reservation time, restaurant and table number changes based on the selected day value
  // Value is the reservation id

  // Event listener for reservation day select

  const reservationDataContainer = document.createElement('div');
  reservationDataContainer.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'gap-6',
    'mt-5',
    'px-6',
    'h-full',
    'w-5/6',
    'border-2',
    'border-solid',
    'border-warm-brown'
  );

  const reservationDataInitial = document.createElement('p');
  reservationDataInitial.textContent = translations[language].reservationInfo.initialText;
  reservationDataInitial.classList.add(
    'text-h5',
    'text-primary',
    'font-semibold',
    'text-center'
  );
  reservationDataContainer.append(reservationDataInitial);

  reservationDaySelect.addEventListener('change', (event) => {
    // Disable the first option after user has selected a reservation
    firstSelection.disabled = true;

    // Remove previous reservation data
    reservationDataContainer.innerHTML = '';

    reservationDataContainer.classList.remove('items-center');

    // Get the selected reservation id
    const selectedReservationId = parseInt((event.target as HTMLSelectElement).value);

    if (selectedReservationId === 0) return;

    // Find the selected reservation from the reservations array
    const selectedReservation = reservations.find(
      (reservation) => reservation.id === selectedReservationId
    );

    if (!selectedReservation) {
      reservationDataContainer.textContent =
        language === 'FI'
          ? 'Valitulle varaukselle ei löytynyt tietoja'
          : 'No information found for the selected reservation';
    }

    // Container for reservation time, restaurant and table number
    const reservationTimeContainer = document.createElement('div');
    reservationTimeContainer.classList.add('flex', 'gap-3', 'mt-5', 'sm:mt-0', 'sm:mb-0');

    const reservationTimeLabel = document.createElement('label');
    reservationTimeLabel.textContent = translations[language].reservationInfo.time;
    reservationTimeLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

    const reservationTimeElement = document.createElement('p');
    // Change this to come from backend when user is authenticated
    reservationTimeElement.textContent =
      selectedReservation?.start_time + ' - ' + selectedReservation?.end_time ||
      translations[language].reservationInfo.timeError;
    reservationTimeElement.classList.add('text-h5', 'text-primary');

    reservationTimeContainer.append(reservationTimeLabel, reservationTimeElement);

    const reservationRestaurantContainer = document.createElement('div');
    reservationRestaurantContainer.classList.add(
      'flex',
      'gap-3',
      'mt-5',
      'sm:mt-0',
      'sm:mb-0'
    );

    const reservationRestaurantLabel = document.createElement('label');
    reservationRestaurantLabel.textContent =
      translations[language].reservationInfo.restaurant;
    reservationRestaurantLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

    const reservationRestaurantElement = document.createElement('p');
    // Change this to come from backend when user is authenticated
    reservationRestaurantElement.textContent =
      selectedReservation?.restaurant_name ||
      translations[language].reservationInfo.restaurantError;
    reservationRestaurantElement.classList.add('text-h5', 'text-primary');

    reservationRestaurantContainer.append(
      reservationRestaurantLabel,
      reservationRestaurantElement
    );

    const reservationTableContainer = document.createElement('div');
    reservationTableContainer.classList.add(
      'flex',
      'gap-3',
      'mt-5',
      'mb-5',
      'sm:mt-0',
      'sm:mb-0'
    );

    const reservationTableLabel = document.createElement('label');
    reservationTableLabel.textContent =
      translations[language].reservationInfo.tableNumber;
    reservationTableLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

    const reservationTableElement = document.createElement('p');
    // Hehe 69 nice number for a table reservation ;) Used if table_id is not available
    reservationTableElement.textContent =
      selectedReservation?.table_id.toString() || '69? :D';
    reservationTableElement.classList.add('text-h5', 'text-primary');

    reservationTableContainer.append(reservationTableLabel, reservationTableElement);

    reservationDataContainer.append(
      reservationTimeContainer,
      reservationRestaurantContainer,
      reservationTableContainer
    );
  });

  // Append all the elements to the reservation info container
  reservationInfoContainer.append(
    reservationInfoHeading,
    reservationDaySelectContainer,
    reservationDataContainer
  );

  // ***End of reservation info container***

  // If time allows, change this to a tablemap selection view
  // Shows the user's current reservation table that is selected above
  const restaurantContactContainer = document.createElement('div');
  restaurantContactContainer.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'bg-light-brown',
    'rounded-2xl',
    'p-5',
    'w-full',
    'h-2/5'
  );

  const restaurantContactHeading = document.createElement('h5');
  restaurantContactHeading.textContent =
    translations[language].restaurantContactInfo.header;
  restaurantContactHeading.classList.add(
    'text-h5',
    'font-bold',
    'mb-5',
    'text-secondary'
  );

  // Wrapper for restaurant contact information
  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('flex', 'p-6', 'flex-col', 'gap-5');

  // Restaurant phone number container
  const restaurantPhoneContainer = document.createElement('div');
  restaurantPhoneContainer.classList.add('flex', 'gap-3');

  const restaurantPhoneLabel = document.createElement('label');
  restaurantPhoneLabel.textContent =
    translations[language].restaurantContactInfo.customerservice;
  restaurantPhoneLabel.classList.add('text-h6', 'font-bold', 'text-secondary');

  const restaurantPhone = document.createElement('p');
  // Hehe 69 nice number for a restaurant phone number ;)
  restaurantPhone.textContent = '044 6969 69';
  restaurantPhone.classList.add('text-h6', 'text-primary', 'font-semibold');

  restaurantPhoneContainer.append(restaurantPhoneLabel, restaurantPhone);

  // Restaurant email container
  const restaurantEmailContainer = document.createElement('div');
  restaurantEmailContainer.classList.add('flex', 'gap-3');

  const restaurantEmailLabel = document.createElement('label');
  restaurantEmailLabel.textContent = translations[language].restaurantContactInfo.email;
  restaurantEmailLabel.classList.add('text-h6', 'font-bold', 'text-secondary');

  const restaurantEmail = document.createElement('p');
  restaurantEmail.textContent = 'asiakaspalvelu@royalbuns.fi';
  restaurantEmail.classList.add('text-h6', 'text-primary', 'font-semibold');

  restaurantEmailContainer.append(restaurantEmailLabel, restaurantEmail);

  // Append email and phone number containers to the contact wrapper
  contactWrapper.append(restaurantPhoneContainer, restaurantEmailContainer);

  restaurantContactContainer.append(restaurantContactHeading, contactWrapper);
  // ***End of restaurant contact container***

  rightSideContainer.append(reservationInfoContainer, restaurantContactContainer);
  profileViewContainer.append(profileInfoContainer, rightSideContainer);

  profileContainer.appendChild(profileViewContainer);
};
export {createProfileView};
