import {header} from '../../header/header';
import {getProfilePageData} from '../AuthenticationService';
import {createProfileView} from './Profile';

const translations = {
  FI: {
    profileInfo: {
      header: 'Profiili',
      name: 'Nimi',
      email: 'Sähköposti',
      phone: 'Puhelinnumero',
      favBurger: 'Lempihampurilainen',
    },
    reeservationInfo: {
      header: 'Varaukset',
      date: 'Päivä',
      selectDay: 'Valitse päivä',
      reservationText: 'Varaus',
      time: 'Kellonaika',
      restaurant: 'Ravintola',
      tableNumber: 'Pöytänumero',
    },
    restaurantContactInfo: {
      header: 'Ravintolan yhteystiedot',
      customerservice: 'Osoite',
      email: 'Sähköposti',
    },
  },
  EN: {
    profileInfo: {
      header: 'Profile',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      favBurger: 'Favorite Burger',
    },
    reeservationInfo: {
      header: 'Reservations',
      date: 'Date',
      selectDay: 'Select day',
      reservationText: 'Reservation',
      time: 'Time',
      restaurant: 'Restaurant',
      tableNumber: 'Table number',
    },
    restaurantContactInfo: {
      header: 'Restaurant contact information',
      customerservice: 'Address',
      email: 'Email',
    },
  },
};

const createAdminView = async (profileContainer: HTMLDivElement) => {
  // Clear profileContainer from profile view
  profileContainer.innerHTML = '';

  profileContainer.classList.add('relative', 'w-full', 'h-full', 'my-4');
  // profileContainer.classList

  // Create overall container for admin view
  const adminViewContainer = document.createElement('div');
  adminViewContainer.classList.add(
    'adminViewContainer', // For responsive styling if needed @jimpohjansaro
    'flex',
    'flex-col',
    'items-center',
    'w-full',
    'h-full'
  );

  // Create header for admin view
  const headerContainer = document.createElement('div');
  // For responsive styling if needed "adminHeader": @jimpohjansaro
  headerContainer.classList.add(
    'adminHeader',
    'w-full',
    'flex',
    'justify-center',
    'relative',
    'mb-4'
  );

  const adminViewHeader = document.createElement('h1');
  adminViewHeader.textContent = 'Admin Panel';
  adminViewHeader.classList.add('text-h1', 'font-bold', 'text-center', 'text-red');
  headerContainer.appendChild(adminViewHeader);

  // Get profile page data from backend to send it to createProfileView
  const profilePageData = await getProfilePageData();

  // Create back button for closing admin view and returning to profile view
  const backButton = document.createElement('button');
  backButton.textContent = 'Back';

  const backButtonIcon = document.createElement('i');
  backButtonIcon.classList.add('fas', 'fa-arrow-left', 'mr-2');
  backButton.prepend(backButtonIcon);

  backButton.classList.add(
    'bg-secondary',
    'text-white',
    'p-2',
    'rounded-md',
    'hover:bg-secondary-dark',
    'absolute',
    'left-2',
    'top-4'
  );

  // basic event listener for back button
  backButton.addEventListener('click', () => {
    profileContainer.innerHTML = '';
    profileContainer.classList.remove('relative', 'w-full', 'h-full', 'my-4');
    createProfileView(profilePageData, profileContainer);
  });

  // Contains all admin panel content
  const panelContainer = document.createElement('div');
  panelContainer.classList.add(
    'adminPanelContainer',
    'flex',
    'items-center',
    'w-full',
    'h-full',
    'gap-2'
  );

  const leftAdminPanel = document.createElement('div'); // Left side of admin panel
  leftAdminPanel.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'w-full',
    'h-full'
    // 'bg-secondary' // For testing purposes
  );

  // Left admin panel content contains menu item change
  const menuChangeContainer = document.createElement('div');
  menuChangeContainer.classList.add(
    'flex',
    'flex-col',
    // 'items-center',
    'w-full',
    'h-full'
  );

  const menuChangeHeader = document.createElement('h3');
  menuChangeHeader.textContent = 'MUUTA MENUA';
  menuChangeHeader.classList.add(
    'text-h3',
    'font-bold',
    'text-center',
    'mb-4',
    'text-warmer-brown'
  );
  menuChangeContainer.appendChild(menuChangeHeader);

  // TODO: Create selection for what menu item to change
  // CODE HERE @S1pi
  const menuChangeSelectionContainer = document.createElement('div');
  menuChangeSelectionContainer.classList.add('flex', 'w-full');

  // Create menu category selection

  const categoryContainer = document.createElement('div');
  categoryContainer.classList.add('flex', 'flex-col', 'w-full', 'p-2', 'mb-2');
  const menuCategorySelectionLabel = document.createElement('label');
  menuCategorySelectionLabel.classList.add('text-label', 'mb-2', 'font-semibold');
  menuCategorySelectionLabel.textContent = 'Valitse menu kategoria:';
  const menuCategorySelection = document.createElement('select');
  menuCategorySelection.classList.add('w-full', 'p-2', 'mb-2');

  // Define language type
  type Language = 'FI' | 'EN';

  // Define translations for menu categories and types
  const categoryLang: {
    FI: string[];
    EN: string[];
  } = {
    FI: ['Hampurilaiset', 'Sliderit', 'Lisukkeet', 'Juomat'],
    EN: ['Burgers', 'Sliders', 'Sides', 'Drinks'],
  };

  let language = (localStorage.getItem('language') as Language) || 'FI';

  categoryLang[language].forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    menuCategorySelection.appendChild(option);
  });

  categoryContainer.append(menuCategorySelectionLabel, menuCategorySelection);
  // Append selection options to menuCategorySelection
  // CODE HERE @S1pi

  const menuItemChangeContainer = document.createElement('div');
  menuItemChangeContainer.classList.add('flex', 'flex-col', 'w-full', 'p-2', 'mb-2');
  const menuChangeSelectionLabel = document.createElement('label');
  menuChangeSelectionLabel.classList.add('text-label', 'mb-2', 'font-semibold');
  menuChangeSelectionLabel.textContent = 'Valitse muutettava annos:';
  const menuChangeSelection = document.createElement('select');
  menuChangeSelection.classList.add('w-full', 'p-2', 'mb-2');

  menuItemChangeContainer.append(menuChangeSelectionLabel, menuChangeSelection);

  // Append selection options to menuChangeSelection
  // CODE HERE @S1pi
  menuChangeSelectionContainer.append(categoryContainer, menuItemChangeContainer);

  // TODO: Create form for changing menu item
  // CODE HERE @S1pi
  const menuChangeForm = document.createElement('form');
  menuChangeForm.classList.add(
    'flex',
    'flex-col',
    'w-full',
    'h-full',
    'items-center',
    'justify-between',
    'border',
    'border-secondary',
    'rounded-md',
    'p-4'
  );

  const menuChangeFormHeader = document.createElement('h4');
  menuChangeFormHeader.textContent = 'Muuta sisältöä';
  menuChangeFormHeader.classList.add('text-h4', 'font-bold', 'text-center', 'mb-4');
  menuChangeForm.appendChild(menuChangeFormHeader);

  // Create input fields for changing menu item
  // CODE HERE @S1pi

  // Create submit button for changing menu item
  const menuChangeSubmitButton = document.createElement('button');
  menuChangeSubmitButton.textContent = 'Submit';
  menuChangeSubmitButton.classList.add(
    'bg-secondary',
    'text-white',
    'p-2',
    'rounded-md',
    'hover:bg-primary-dark',
    'mb-4'
  );
  menuChangeForm.appendChild(menuChangeSubmitButton);

  // Append menuChangeSelectionContainer and menuChangeForm to menuChangeContainer
  menuChangeContainer.append(menuChangeSelectionContainer, menuChangeForm);

  // append menuChangeContainer to leftAdminPanel
  leftAdminPanel.appendChild(menuChangeContainer);

  // Right admin panel content contains user management and reservation management?
  const rightAdminPanel = document.createElement('div'); // Right side of admin panel
  rightAdminPanel.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'w-full',
    'h-full'
    // 'bg-secondary' // For testing purposes
  );

  // TODO: Create right admin panel content
  // CODE HERE @S1pi

  // Append left and right admin panels to panelContainer
  panelContainer.append(leftAdminPanel, rightAdminPanel);

  // Append back button to header and header to adminViewContainer
  headerContainer.prepend(backButton);
  adminViewContainer.append(headerContainer, panelContainer);

  profileContainer.appendChild(adminViewContainer);
};

export default createAdminView;
