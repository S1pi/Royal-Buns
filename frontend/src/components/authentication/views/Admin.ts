import {Burger, OtherMenuItems} from '../../../types/menu';
import {
  getAllBurgers,
  getAllDrinks,
  getAllSides,
  getAllSliders,
} from '../../../utils/getMenuItems';
import {sendBurgerMenuItem, sendOtherMenuItem} from '../../../utils/sendMenuItems';
import {menu} from '../../menu/menu';
import {router} from '../../navigation/router';
import {getProfilePageData} from '../AuthenticationService';
import {createProfileView} from './Profile';

const translations = {
  FI: {
    menuChange: {
      title: 'MUUTA MENUA',
      menuCategory: 'Valitse menu kategoria:',
      menuCategoryInitial: 'Valitse kategoria',
      menuItem: 'Valitse muutettava annos:',
      menuItemsInitial: 'Valitse annos',
      changeContent: 'Muuta sisältöä',
      nameLabel: 'Nimi: ',
      descriptionLabel: 'Annoksen tiedot: ',
      dietsLabel: 'Erityisruokavaliot: ',
      priceLabel: 'Hinta: ',
      photoLabel: 'Kuva: ',
      dailyBurgerLabel: 'Viikonpäivä: ',
      namePlaceholder: 'Valitse annos',
      submit: 'Lähetä',
    },
    buttons: {
      back: 'Takaisin',
    },
  },
  EN: {
    menuChange: {
      title: 'CHANGE MENU',
      menuCategory: 'Select menu category:',
      menuCategoryInitial: 'Select category',
      menuItem: 'Select menu item to change:',
      menuItemsInitial: 'Select item',
      changeContent: 'Change content',
      nameLabel: 'Name: ',
      descriptionLabel: 'Meal description: ',
      dietsLabel: 'Diets: ',
      priceLabel: 'Price: ',
      photoLabel: 'Photo: ',
      dailyBurgerLabel: 'Day of the week: ',
      namePlaceholder: 'Select item',
      submit: 'Submit',
    },
    buttons: {
      back: 'Back',
    },
  },
};

const createAdminView = async (profileContainer: HTMLDivElement) => {
  // Clear profileContainer from profile view
  profileContainer.innerHTML = '';

  let language = localStorage.getItem('language') as 'FI' | 'EN';
  if (language !== 'FI' && language !== 'EN') {
    localStorage.setItem('language', 'FI');
    router();
  }

  profileContainer.classList.add('relative', 'w-full', 'h-full', 'my-4', 'p-4');
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
  backButton.textContent = translations[language].buttons.back;

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
    profileContainer.classList.remove('relative', 'w-full', 'h-full', 'my-4', 'p-4');
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
  menuChangeHeader.textContent = translations[language].menuChange.title;
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
  menuCategorySelectionLabel.textContent = translations[language].menuChange.menuCategory;
  const menuCategorySelection = document.createElement('select');
  menuCategorySelection.classList.add('w-full', 'p-2', 'mb-2');

  const initialSelection = document.createElement('option');
  initialSelection.value = 'initial';
  initialSelection.textContent = translations[language].menuChange.menuCategoryInitial;
  menuCategorySelection.appendChild(initialSelection);

  // Define translations for menu categories and types
  const categoryLang: {
    FI: {value: string[]; text: string[]};
    EN: {value: string[]; text: string[]};
  } = {
    FI: {
      value: ['Burgers', 'Sliders', 'Sides', 'Drinks'],
      text: ['Hampurilaiset', 'Sliderit', 'Lisukkeet', 'Juomat'],
    },
    EN: {
      value: ['Burgers', 'Sliders', 'Sides', 'Drinks'],
      text: ['Burgers', 'Sliders', 'Sides', 'Drinks'],
    },
  };

  // Loops through the categories based on the selected language
  // and creates an option for each category language as text;
  // Value is always the same no matter the language
  categoryLang[language].value.forEach((category, index) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = categoryLang[language].text[index];
    menuCategorySelection.appendChild(option);
  });

  categoryContainer.append(menuCategorySelectionLabel, menuCategorySelection);

  let categoryItems: Burger[] | OtherMenuItems[] = [];

  menuCategorySelection.addEventListener('change', async () => {
    initialSelection.disabled = true;
    const category = menuCategorySelection.value;
    categoryItems = [];
    console.log('Selected category: ', category);
    switch (category) {
      case 'Burgers':
        const burgers = await getAllBurgers();
        categoryItems = burgers;
        break;
      case 'Sliders':
        const sliders = await getAllSliders();
        categoryItems = sliders;
        break;
      case 'Sides':
        const sides = await getAllSides();
        categoryItems = sides;
        break;
      case 'Drinks':
        const drinks = await getAllDrinks();
        categoryItems = drinks;
        break;
      default:
        break;
    }
    menuChangeSelection.innerHTML = '';

    // Empty all form fields
    nameInput.value = '';
    descriptionInput.value = '';
    priceInput.value = '';
    glutenCheckbox.checked = false;
    lactoseCheckbox.checked = false;
    veganCheckbox.checked = false;

    const dailyBurgerInput = document.querySelector(
      '.dailyBurgerInput'
    ) as HTMLInputElement;

    if (dailyBurgerInput) {
      dailyBurgerInput.value = '';
    }

    initialSelectionItem.textContent = translations[language].menuChange.menuItemsInitial;
    menuChangeSelection.appendChild(initialSelectionItem);
    initialSelectionItem.disabled = false;
    menuChangeSelection.selectedIndex = 0;

    if (menuCategorySelection.value === 'Burgers') {
      const dailyBurgerContainer = document.createElement('div');
      dailyBurgerContainer.classList.add(
        'flex',
        'w-2/5',
        'p-2',
        'mb-2',
        'dailyBurgerContainer'
      );
      const dailyBurgerLabel = document.createElement('label');
      dailyBurgerLabel.textContent = translations[language].menuChange.dailyBurgerLabel;
      dailyBurgerLabel.classList.add(
        'text-label',
        'font-semibold',
        'self-center',
        'mr-1'
      );
      const dailyBurgerInput = document.createElement('input');
      dailyBurgerInput.type = 'text';
      dailyBurgerInput.placeholder = "EX. 'Monday'";
      dailyBurgerInput.classList.add(
        'dailyBurgerInput',
        'w-full',
        'p-2',
        'rounded-md',
        'border',
        'border-secondary'
      );
      dailyBurgerInput.disabled = true;
      dailyBurgerContainer.append(dailyBurgerLabel, dailyBurgerInput);
      photoAndDailyInputContainer.insertBefore(dailyBurgerContainer, photoContainer);
    } else {
      const dailyBurgerContainer = document.querySelector('.dailyBurgerContainer');
      if (dailyBurgerContainer) {
        dailyBurgerContainer.remove();
      }
    }

    if (menuCategorySelection.value === 'Drinks') {
      // Change diets to be either basic or alcoholic
      const dietsContainer = document.querySelector('.dietsContainer');

      if (dietsContainer) {
        dietsContainer.remove();
      }

      const alcoholicContainer = document.createElement('div');
      alcoholicContainer.classList.add(
        'alcoholicContainer',
        'flex',
        'w-2/3',
        'p-2',
        'mb-2'
      );
      const alcoholicLabel = document.createElement('label');
      alcoholicLabel.textContent = 'Alkoholic: ';
      alcoholicLabel.classList.add('text-label', 'font-semibold', 'self-center', 'mr-2');
      const alcoholicInput = document.createElement('input');
      alcoholicInput.classList.add('alcoholicInput');
      alcoholicInput.type = 'checkbox';

      // alcoholicInput.checked = ;

      alcoholicContainer.append(alcoholicLabel, alcoholicInput);
      dietsAndPriceContainer.prepend(alcoholicContainer);
    } else {
      const alcoholicContainer = document.querySelector('.alcoholicContainer');
      if (alcoholicContainer) {
        alcoholicContainer.remove();
      }

      if (!document.querySelector('.dietsContainer')) {
        const dietsContainer = document.createElement('div');
        dietsContainer.classList.add(
          'dietsContainer',
          'flex',
          'w-2/3',
          'p-2',
          'rounded-md',
          'border',
          'border-secondary',
          'gap-2',
          'items-center'
        );
        // const dietsLabel = document.createElement('label');
        // dietsLabel.textContent = translations[language].menuChange.dietsLabel;
        // dietsLabel.classList.add('text-label', 'font-semibold', 'self-center', 'mr-2');
        // // All checkboxes for diets
        // // const glutenCheckbox = document.createElement('input');
        // // glutenCheckbox.type = 'checkbox';
        // const glutenLabel = document.createElement('label');
        // glutenLabel.textContent = 'G';
        // const lactoseCheckbox = document.createElement('input');
        // lactoseCheckbox.type = 'checkbox';
        // const lactoseLabel = document.createElement('label');
        // lactoseLabel.textContent = 'L';
        // const veganCheckbox = document.createElement('input');
        // veganCheckbox.type = 'checkbox';
        // const veganLabel = document.createElement('label');
        // veganLabel.textContent = 'V';
        // dietsContainer.append(
        //   dietsLabel,
        //   glutenLabel,
        //   glutenCheckbox
        //   lactoseLabel,
        //   lactoseCheckbox,
        //   veganLabel,
        //   veganCheckbox
        // );
        dietsContainer.append(
          dietsLabel,
          glutenLabel,
          glutenCheckbox,
          lactoseLabel,
          lactoseCheckbox,
          veganLabel,
          veganCheckbox
        );

        dietsAndPriceContainer.prepend(dietsContainer);
      }
    }

    categoryItems.forEach((item) => {
      const option = document.createElement('option');
      option.value = item.id.toString();
      option.textContent = item.name;
      menuChangeSelection.appendChild(option);
    });
  });

  const menuItemChangeContainer = document.createElement('div');
  menuItemChangeContainer.classList.add('flex', 'flex-col', 'w-full', 'p-2', 'mb-2');
  const menuChangeSelectionLabel = document.createElement('label');
  menuChangeSelectionLabel.classList.add('text-label', 'mb-2', 'font-semibold');
  menuChangeSelectionLabel.textContent = translations[language].menuChange.menuItem;
  const menuChangeSelection = document.createElement('select');
  menuChangeSelection.classList.add('w-full', 'p-2', 'mb-2');

  const initialSelectionItem = document.createElement('option');
  initialSelectionItem.value = 'initial';
  initialSelectionItem.textContent =
    translations[language].menuChange.menuCategoryInitial;
  menuChangeSelection.appendChild(initialSelectionItem);

  menuChangeSelection.addEventListener('change', () => {
    console.log(
      'Selected menu item: ',
      categoryItems[menuChangeSelection.selectedIndex - 1]
    );
    initialSelectionItem.disabled = true;
    menuItemData = categoryItems[menuChangeSelection.selectedIndex - 1];

    glutenCheckbox.checked = false;
    lactoseCheckbox.checked = false;
    veganCheckbox.checked = false;

    // Fill the form fields with the selected menu item data
    nameInput.value = menuItemData.name;
    descriptionInput.value = menuItemData.description[language];
    priceInput.value = menuItemData.price.toString();

    // Checkboxes for diets
    if (menuItemData.diets.includes('G')) {
      glutenCheckbox.checked = true;
    }
    if (menuItemData.diets.includes('L')) {
      lactoseCheckbox.checked = true;
    }
    if (menuItemData.diets.includes('V')) {
      veganCheckbox.checked = true;
    }

    const dailyBurgerInput = document.querySelector(
      '.dailyBurgerInput'
    ) as HTMLInputElement;

    if (dailyBurgerInput) {
      // Daily burger input
      if ('day' in menuItemData) {
        dailyBurgerInput.value = menuItemData.day;
      }
    }

    const alcoholicInput = document.querySelector('.alcoholicInput') as HTMLInputElement;

    if (alcoholicInput) {
      alcoholicInput.checked = false;
      if (menuItemData.diets === 'alcoholic') {
        alcoholicInput.checked = true;
      }
    }

    // Photo input
  });

  menuItemChangeContainer.append(menuChangeSelectionLabel, menuChangeSelection);
  menuChangeSelectionContainer.append(categoryContainer, menuItemChangeContainer);

  // menuItemData changes based on the selected menu item
  // data is stored as an object with the following structure:
  let menuItemData: Burger | OtherMenuItems;

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
    'p-2'
  );

  const menuChangeFormHeader = document.createElement('h4');
  menuChangeFormHeader.textContent = translations[language].menuChange.changeContent;
  menuChangeFormHeader.classList.add('text-h4', 'font-bold', 'text-center', 'mb-4');
  menuChangeForm.appendChild(menuChangeFormHeader);

  // Create input fields for changing menu item
  // CODE HERE @S1pi

  const nameInputContainer = document.createElement('div');
  nameInputContainer.classList.add('flex', 'w-full', 'p-2', 'mb-2');
  const nameInput = document.createElement('input');
  const nameInputLabel = document.createElement('label');
  nameInputLabel.textContent = translations[language].menuChange.nameLabel;

  nameInputLabel.classList.add('text-label', 'font-semibold', 'self-center', 'mr-2');

  nameInput.type = 'text';
  nameInput.placeholder = translations[language].menuChange.namePlaceholder;
  nameInput.classList.add('w-full', 'p-2', 'rounded-md', 'border', 'border-secondary');

  const descriptionInputContainer = document.createElement('div');
  descriptionInputContainer.classList.add('flex', 'w-full', 'p-2', 'mb-2');
  const descriptionInputLabel = document.createElement('label');
  descriptionInputLabel.textContent = translations[language].menuChange.descriptionLabel;
  descriptionInputLabel.classList.add(
    'text-label',
    'w-1/4',
    'font-semibold',
    'self-center',
    'mr-2'
  );
  const descriptionInput = document.createElement('textarea');
  descriptionInput.classList.add(
    'w-3/4',
    'p-2',
    'rounded-md',
    'border',
    'border-secondary',
    'max-h-32',
    'overflow-y-auto'
  );
  descriptionInput.placeholder = translations[language].menuChange.descriptionLabel;

  const photoAndDailyInputContainer = document.createElement('div');
  photoAndDailyInputContainer.classList.add('flex', 'w-full', 'p-2', 'mb-2');
  const photoContainer = document.createElement('div');
  photoContainer.classList.add(
    'flex',
    'items-center',
    'w-2/3',
    'px-2',
    'rounded-md',
    'border',
    'border-secondary'
  );
  const photoInputLabel = document.createElement('label');
  photoInputLabel.textContent = translations[language].menuChange.photoLabel;
  photoInputLabel.classList.add('text-label', 'font-semibold', 'self-center', 'mr-2');
  const photoInput = document.createElement('input');
  photoInput.classList.add('w-full', 'p-2', 'border-none');
  photoInput.type = 'file';
  photoContainer.append(photoInputLabel, photoInput);
  photoAndDailyInputContainer.append(photoContainer);

  const dietsAndPriceContainer = document.createElement('div');
  // dietsAndPriceContainer class for responsive styling if needed @jimpohjansaro
  dietsAndPriceContainer.classList.add(
    'dietsAndPriceContainer',
    'flex',
    'w-full',
    'p-2',
    'mb-2',
    'gap-2'
  );
  const dietsContainer = document.createElement('div');
  dietsContainer.classList.add(
    'dietsContainer',
    'flex',
    'w-2/3',
    'p-2',
    'rounded-md',
    'border',
    'border-secondary',
    'gap-2',
    'items-center'
  );
  const dietsLabel = document.createElement('label');
  dietsLabel.textContent = translations[language].menuChange.dietsLabel;
  dietsLabel.classList.add('text-label', 'font-semibold', 'self-center', 'mr-2');
  // All checkboxes for diets
  const glutenCheckbox = document.createElement('input');
  glutenCheckbox.type = 'checkbox';
  const glutenLabel = document.createElement('label');
  glutenLabel.textContent = 'G';
  const lactoseCheckbox = document.createElement('input');
  lactoseCheckbox.type = 'checkbox';
  const lactoseLabel = document.createElement('label');
  lactoseLabel.textContent = 'L';
  const veganCheckbox = document.createElement('input');
  veganCheckbox.type = 'checkbox';
  const veganLabel = document.createElement('label');
  veganLabel.textContent = 'V';
  dietsContainer.append(
    dietsLabel,
    glutenLabel,
    glutenCheckbox,
    lactoseLabel,
    lactoseCheckbox,
    veganLabel,
    veganCheckbox
  );

  const priceContainer = document.createElement('div');
  priceContainer.classList.add(
    'flex',
    'w-1/3',
    'p-2',
    'rounded-md',
    'border',
    'border-secondary',
    'justify-between'
  );
  const priceLabel = document.createElement('label');
  priceLabel.textContent = translations[language].menuChange.priceLabel;
  priceLabel.classList.add('text-label', 'font-semibold', 'self-center', 'mr-2');
  const priceInput = document.createElement('input');
  priceInput.type = 'text';
  priceInput.classList.add('w-2/3', 'p-1', 'rounded-md', 'border', 'border-secondary');
  priceContainer.append(priceLabel, priceInput);

  dietsAndPriceContainer.append(dietsContainer, priceContainer);
  descriptionInputContainer.append(descriptionInputLabel, descriptionInput);
  nameInputContainer.append(nameInputLabel, nameInput);

  menuChangeForm.append(
    nameInputContainer,
    descriptionInputContainer,
    photoAndDailyInputContainer,
    dietsAndPriceContainer
  );

  // Create submit button for changing menu item
  const menuChangeSubmitButton = document.createElement('button');
  menuChangeSubmitButton.textContent = translations[language].menuChange.submit;
  menuChangeSubmitButton.classList.add(
    'bg-secondary',
    'text-white',
    'p-2',
    'rounded-md',
    'hover:bg-primary-dark',
    'mb-4'
  );
  menuChangeForm.appendChild(menuChangeSubmitButton);

  menuChangeSubmitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
    console.log('Form data: ', {
      name: nameInput.value,
      description: descriptionInput.value,
      price: priceInput.value,
      gluten: glutenCheckbox.checked,
      lactose: lactoseCheckbox.checked,
      vegan: veganCheckbox.checked,
    });

    // Check if all required fields are filled
    if (
      nameInput.value === '' ||
      descriptionInput.value === '' ||
      priceInput.value === ''
    ) {
      alert('Fill all information before submitting');
      return;
    }

    // Check if item is a burger
    if (menuCategorySelection.value === 'Burgers') {
      const name = nameInput.value;
      const description = {
        FI: descriptionInput.value,
        EN: descriptionInput.value,
      };
      const price = priceInput.value;
      const dietsArray = [
        glutenCheckbox.checked ? 'G' : '',
        lactoseCheckbox.checked ? 'L' : '',
        veganCheckbox.checked ? 'V' : '',
      ].filter(Boolean);
      const diets = dietsArray.join(',');
      const dailyBurgerInput = document.querySelector(
        '.dailyBurgerInput'
      ) as HTMLInputElement;
      const day = dailyBurgerInput.value;
      const id = menuItemData.id;

      // console.log('Burger data: ', {id, diets, price, name, description, day});
      // Send the form data to backend
      const burgerChangeMessage = await sendBurgerMenuItem(
        id,
        diets,
        price,
        name,
        description,
        day
      );
      if (burgerChangeMessage) {
        alert(burgerChangeMessage);
      } else {
        alert('Failed to update burger');
      }
    } else {
      // Check if item is a slider, side or drink
      const name = nameInput.value;
      const description = {
        FI: descriptionInput.value,
        EN: descriptionInput.value,
      };
      const price = priceInput.value;
      let diets = '';
      const dietsContainer = document.querySelector('.dietsContainer');

      if (dietsContainer) {
        const dietsArray = [
          glutenCheckbox.checked ? 'G' : '',
          lactoseCheckbox.checked ? 'L' : '',
          veganCheckbox.checked ? 'V' : '',
        ].filter(Boolean);
        diets = dietsArray.join(',');
      } else {
        const alcoholicInput = document.querySelector(
          '.alcoholicInput'
        ) as HTMLInputElement;
        diets = alcoholicInput.checked ? 'alcoholic' : 'basic';
      }
      const id = menuItemData.id;
      const category = menuCategorySelection.value.toLowerCase();
      // console.log('Other item data: ', {diets, price, name, description});
      // Send the form data to backend

      console.log('Other item data: ', {id, diets, price, name, description, category});

      const otherItemChangeMessage = await sendOtherMenuItem(
        id,
        diets,
        price,
        name,
        description,
        menuCategorySelection.value.toLowerCase()
      );
      if (otherItemChangeMessage) {
        alert(otherItemChangeMessage);
      } else {
        alert('Failed to update item');
      }
    }

    // Send the form data to backend
    // CODE HERE @S1pi
  });

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
