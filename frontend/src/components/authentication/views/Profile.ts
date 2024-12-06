// Meaby get data as parameter and use it to fill the profile view
const createProfileView = () => {
  // TODO: Get user's information from backend
  // Handle the user's information here

  // Container for profile information

  const profileViewContainer = document.createElement('div');
  profileViewContainer.classList.add('flex', 'w-full', 'h-full', 'gap-10');

  // Container for left side of the profile view that shows user's information
  const profileInfoContainer = document.createElement('div');
  profileInfoContainer.classList.add(
    'flex',
    'flex-col',
    'justify-between',
    'items-center',
    'bg-light-brown',
    'rounded-2xl',
    'p-10',
    'w-1/2',
    'h-full'
  );

  const heading = document.createElement('h2');
  heading.textContent = 'PROFIILI';
  heading.classList.add('text-h2', 'font-bold', 'text-secondary');

  // Username container shows the user's username
  const usernameContainer = document.createElement('div');
  usernameContainer.classList.add('flex', 'gap-3');

  const usernameLabel = document.createElement('label');
  usernameLabel.textContent = 'Käyttäjänimi:';
  usernameLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const username = document.createElement('p');
  // Change this to come from backend when user is authenticated
  username.textContent = 'Käyttäjänimi';
  username.classList.add('text-h5', 'text-primary');
  usernameContainer.append(usernameLabel, username);

  // Email container shows the user's email
  const emailContainer = document.createElement('div');
  emailContainer.classList.add('flex', 'gap-3');

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Sähköposti:';
  emailLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const email = document.createElement('p');
  // Change this to come from backend when user is authenticated
  email.textContent = 'Sähköposti';
  email.classList.add('text-h5', 'text-primary');
  emailContainer.append(emailLabel, email);

  const phoneNumContainer = document.createElement('div');
  phoneNumContainer.classList.add('flex', 'gap-3');

  const phoneNumLabel = document.createElement('label');
  phoneNumLabel.textContent = 'Puhelinnumero:';
  phoneNumLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const phoneNum = document.createElement('p');
  // Change this to come from backend when user is authenticated
  phoneNum.textContent = 'Puhelinnumero';
  phoneNum.classList.add('text-h5', 'text-primary');
  phoneNumContainer.append(phoneNumLabel, phoneNum);

  const favouriteBurgerContainer = document.createElement('div');
  favouriteBurgerContainer.classList.add('flex', 'gap-3', 'mb-10');

  const favouriteBurgerLabel = document.createElement('label');
  favouriteBurgerLabel.textContent = 'Lempihampurilainen:';
  favouriteBurgerLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const favouriteBurger = document.createElement('p');
  // Change this to come from backend when user is authenticated
  favouriteBurger.textContent = 'Ei ilmoitettu';
  favouriteBurger.classList.add('text-h5', 'text-primary');

  favouriteBurgerContainer.append(favouriteBurgerLabel, favouriteBurger);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('flex', 'gap-10');

  const changePasswordButton = document.createElement('button');
  changePasswordButton.textContent = 'Vaihda salasana';
  changePasswordButton.classList.add(
    'text-base',
    'font-bold',
    'text-primary',
    'bg-secondary',
    'hover:bg-hover-brown',
    'py-2',
    'px-6',
    'rounded-2xl'
  );

  // Implement password change functionality for button.EventListener('click', changePassword)

  const logoutButton = document.createElement('button');
  logoutButton.textContent = 'Kirjaudu ulos';
  logoutButton.classList.add(
    'text-base',
    'font-bold',
    'text-primary',
    'bg-red',
    'hover:bg-dark-red',
    'py-2',
    'px-6',
    'rounded-2xl'
  );

  // Implement logout functionality for button.EventListener('click', logout)

  buttonContainer.append(changePasswordButton, logoutButton);

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
  reservationInfoHeading.textContent = 'VARAUKSET';
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
    'text-h5',
    'text-secondary',
    'rounded-2xl',
    'px-4',
    'py-0.5',
    'w-1/2',
    'text-center'
  );

  // Implement reservation day selection functionality
  // Add options to the select element
  const reservationDayOption = document.createElement('option');
  reservationDayOption.textContent = 'Valitse päivä';
  reservationDayOption.value = '0';
  reservationDaySelect.appendChild(reservationDayOption);

  reservationDaySelectContainer.append(reservationDayLabel, reservationDaySelect);

  // Make this meaby as select element (For now just show the user's current reservation time)
  const reservationTimeContainer = document.createElement('div');
  reservationTimeContainer.classList.add('flex', 'gap-3', 'mt-5');

  const reservationTimeLabel = document.createElement('label');
  reservationTimeLabel.textContent = 'Kellonaika:';
  reservationTimeLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const reservationTime = document.createElement('p');
  // Change this to come from backend when user is authenticated
  reservationTime.textContent = 'Kellonaika';
  reservationTime.classList.add('text-h5', 'text-primary');

  reservationTimeContainer.append(reservationTimeLabel, reservationTime);

  const reservationRestaurantContainer = document.createElement('div');
  reservationRestaurantContainer.classList.add('flex', 'gap-3', 'mt-5');

  const reservationRestaurantLabel = document.createElement('label');
  reservationRestaurantLabel.textContent = 'Ravintola:';
  reservationRestaurantLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const reservationRestaurant = document.createElement('p');
  // Change this to come from backend when user is authenticated
  reservationRestaurant.textContent = 'Royal Buns Espoo';
  reservationRestaurant.classList.add('text-h5', 'text-primary');

  reservationRestaurantContainer.append(
    reservationRestaurantLabel,
    reservationRestaurant
  );

  const reservationTableContainer = document.createElement('div');
  reservationTableContainer.classList.add('flex', 'gap-3', 'mt-5', 'mb-5');

  const reservationTableLabel = document.createElement('label');
  reservationTableLabel.textContent = 'Pöydän numero:';
  reservationTableLabel.classList.add('text-h5', 'font-bold', 'text-secondary');

  const reservationTable = document.createElement('p');
  // Change this to come from backend when user is authenticated
  // Hehe 69 nice number for a table reservation ;)
  reservationTable.textContent = '69';
  reservationTable.classList.add('text-h5', 'text-primary');

  reservationTableContainer.append(reservationTableLabel, reservationTable);

  // Append all the elements to the reservation info container
  reservationInfoContainer.append(
    reservationInfoHeading,
    reservationDaySelectContainer,
    reservationTimeContainer,
    reservationRestaurantContainer,
    reservationTableContainer
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
  restaurantContactHeading.textContent = 'RAVINTOLAN YHTEYSTIEDOT';
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
  restaurantPhoneLabel.textContent = 'Asiakaspalvelu:';
  restaurantPhoneLabel.classList.add('text-h6', 'font-bold', 'text-secondary');

  const restaurantPhone = document.createElement('p');
  // Hehe 69 nice number for a restaurant phone number ;)
  restaurantPhone.textContent = '044 696 9696';
  restaurantPhone.classList.add('text-h6', 'text-primary', 'font-semibold');

  restaurantPhoneContainer.append(restaurantPhoneLabel, restaurantPhone);

  // Restaurant email container
  const restaurantEmailContainer = document.createElement('div');
  restaurantEmailContainer.classList.add('flex', 'gap-3');

  const restaurantEmailLabel = document.createElement('label');
  restaurantEmailLabel.textContent = 'Sähköposti:';
  restaurantEmailLabel.classList.add('text-h6', 'font-bold', 'text-secondary');

  const restaurantEmail = document.createElement('p');
  restaurantEmail.textContent = 'asiakaspalvelu@rb.fi';
  restaurantEmail.classList.add('text-h6', 'text-primary', 'font-semibold');

  restaurantEmailContainer.append(restaurantEmailLabel, restaurantEmail);

  // Append email and phone number containers to the contact wrapper
  contactWrapper.append(restaurantPhoneContainer, restaurantEmailContainer);

  restaurantContactContainer.append(restaurantContactHeading, contactWrapper);
  // ***End of restaurant contact container***

  rightSideContainer.append(reservationInfoContainer, restaurantContactContainer);
  profileViewContainer.append(profileInfoContainer, rightSideContainer);

  return profileViewContainer;
};
export {createProfileView};
