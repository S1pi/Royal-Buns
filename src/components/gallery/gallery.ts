import {header} from '../header/header';

// resp = Responsibility

const gallery = () => {
  // First create header for page
  const body = document.querySelector('body') as HTMLElement;
  header(body);
  const app = document.getElementById('app') as HTMLElement;
  // app.classList

  const bg = document.createElement('div');
  bg.classList.add(
    'bg-background-light',
    'w-full',
    'h-full',
    'flex',
    'justify-center',
    'items-center'
  );
};

export {gallery};
