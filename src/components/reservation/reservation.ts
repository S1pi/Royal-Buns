import {header} from '../header/header';

const reservation = () => {
  const bodyElement = document.querySelector('body') as HTMLElement;
  header(bodyElement);
  }


  const reservationTitleContainer = document.createElement('h1');
  reservationTitleContainer.textContent = 'Varaa pöytä';
  reservationTitleContainer.classList.add(
    'flex',
    'text-2xl',
    'font-bold',
    'text-center'
  );

  document.body.appendChild(reservationTitleContainer);
};

export {reservation};
