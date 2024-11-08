import {header} from '../header/header';

const reservation = () => {
  header(document.querySelector('body') as HTMLElement);

  const reservationTitleContainer = document.createElement('h1');
  reservationTitleContainer.textContent = 'Varaa pöytä';
  reservationTitleContainer.classList.add(
    'flex',
    'text-2xl',
    'font-bold',
    'text-center'
  );
};

export {reservation};
