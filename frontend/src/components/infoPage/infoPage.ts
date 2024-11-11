import {header} from '../header/header';

const infoPage = () => {
  // First create header for page
  header();

  // Info page content
  const infoMainContainer = document.createElement('div');
  infoMainContainer.classList.add(
    'container',
    'mx-auto',
    'mt-10',
    'bg-amber-100',
    'p-5'
  );
  const infoLeftContent = document.createElement('div');
  infoMainContainer.appendChild(infoLeftContent);
  infoLeftContent.classList.add('flex', 'flex-col', 'md:flex-row');

  const infoLeftContentTitle = document.createElement('h1');
  infoLeftContentTitle.textContent =
    'Welcome to Royal Buns – Where Every Bite is Fit for a King!';
  infoMainContainer.appendChild(infoLeftContentTitle);
  infoLeftContentTitle.classList.add(
    'flex',
    'text-2xl',
    'font-bold',
    'text-center'
  );
  const infoLeftContentText = document.createElement('p');
  infoLeftContentText.textContent =
    ' At Royal Buns, we believe in creating burgers that are nothing short of royalty. Our premium ingredients are sourced from the finest local farms, ensuring that each bite bursts with flavor. Whether you´re craving a classic cheeseburger or one of our signature creations, each burger is handcrafted to perfection.';
  const infoLeftContentImage = document.createElement('img');
  infoLeftContentImage.classList.add('w-1/2', 'mx-auto');
  infoLeftContentImage.src = './src/components/infoPage/info-img/chef.webp';
  infoLeftContentImage.alt = 'Burger cooker man';
  infoLeftContent.appendChild(infoLeftContentImage);
  infoMainContainer.appendChild(infoLeftContentText);
  infoLeftContentText.classList.add(
    'flex',
    'text-1',
    'font-normal',
    'text-center'
  );

  // Append the container to the document body
  document.body.appendChild(infoMainContainer);
};

export {infoPage};
