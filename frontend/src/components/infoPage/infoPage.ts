import {header} from '../header/header';

const infoPage = () => {
  const appDiv = document.querySelector('#app') as HTMLElement;
  appDiv.classList.add('bg-background-light', 'p-10');
  header();

  const infoMainContainer = document.createElement('div');
  infoMainContainer.classList.add(
    'container',
    'mx-auto',
    'bg-primary', // Use the Tailwind CSS class for the custom background color
    'p-5'
  );

  const infoContentWrapper = document.createElement('div');
  infoContentWrapper.classList.add('flex', 'flex-col', 'md:flex-row', 'w-full');
  infoMainContainer.appendChild(infoContentWrapper);

  const infoLeftContent = document.createElement('div');
  infoLeftContent.classList.add(
    'flex',
    'flex-col',
    'w-full',
    'md:w-1/2',
    'p-2'
  );
  infoContentWrapper.appendChild(infoLeftContent);

  const infoLeftContentTitle = document.createElement('h1');
  const leftTitleText =
    'Welcome to Royal Buns – Where Every Bite is Fit for a King!';
  infoLeftContentTitle.textContent = leftTitleText;
  infoLeftContentTitle.classList.add(
    'text-2xl',
    'font-bold',
    'text-center',
    'mb-4'
  );
  infoLeftContent.appendChild(infoLeftContentTitle);

  const infoLeftContentText = document.createElement('p');
  const leftContentText =
    'At Royal Buns, we believe in creating burgers that are nothing short of royalty. Our premium ingredients are sourced from the finest local farms, ensuring that each bite bursts with flavor. Whether you´re craving a classic cheeseburger or one of our signature creations, each burger is handcrafted to perfection.';
  infoLeftContentText.textContent = leftContentText;
  infoLeftContentText.classList.add(
    'text-base',
    'font-normal',
    'text-center',
    'mb-4'
  );
  infoLeftContent.appendChild(infoLeftContentText);

  const infoLeftContentImage = document.createElement('img');
  infoLeftContentImage.classList.add('w-full', 'mx-auto');
  infoLeftContentImage.src = './src/components/infoPage/info-img/chef.webp';
  infoLeftContentImage.alt = 'Burger cooker man';
  infoLeftContent.appendChild(infoLeftContentImage);

  const infoRightContent = document.createElement('div');
  infoRightContent.classList.add(
    'flex',
    'flex-col',
    'w-full',
    'md:w-1/2',
    'p-2',
    'bg-primary'
  );
  infoContentWrapper.appendChild(infoRightContent);

  const infoRightContentImage = document.createElement('img');
  infoRightContentImage.classList.add('w-3/4', 'mx-auto', 'p-2');
  infoRightContentImage.src =
    './src/components/infoPage/info-img/burger-holding-tray.webp';
  infoRightContentImage.alt = 'Chef holding a tray of burgers';
  infoRightContent.appendChild(infoRightContentImage);

  const infoRightContentText = document.createElement('p');
  const rightContentText =
    'Our brioche buns are baked fresh daily, while our patties are made from 100% organic beef, seasoned with our secret blend of herbs and spices. For those with a more adventurous palate, we offer a selection of gourmet toppings, from truffle aioli to caramelized onions and smoked cheddar. Vegetarian or vegan? No problem! We have a range of plant-based options that are equally regal. At Royal Buns, it’s not just about burgers; it’s about an experience. Our modern yet cozy atmosphere makes it the perfect spot for a quick lunch or a relaxed dinner with friends. Pair your burger with our handcrafted fries or indulge in our artisanal milkshakes – a treat worthy of royalty. Come by Royal Buns and taste the difference – because at Royal Buns, we believe every meal should be a royal feast!';
  infoRightContentText.textContent = rightContentText;
  infoRightContentText.classList.add(
    'text-base',
    'font-normal',
    'text-center',
    'mb-4'
  );
  infoRightContent.appendChild(infoRightContentText);

  appDiv.appendChild(infoMainContainer); // Append the main container to the div with id "app"
};

export {infoPage};
