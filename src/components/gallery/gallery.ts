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

  const container = document.createElement('div');
  container.classList.add('h-5/6', 'w-5/6', 'p-10', 'flex-col');

  const headingContainer = document.createElement('div');
  headingContainer.classList.add(
    'text-red',
    'font-bold',
    'h-1/6',
    'w-1/1',
    'flex',
    'justify-center',
    'p-10'
  );

  const contentContainer = document.createElement('div') as HTMLDivElement;
  contentContainer.classList.add('flex', 'h-5/6');

  const textContainer: HTMLDivElement = document.createElement('div');
  textContainer.classList.add('flex-1', 'justify-left', 'p-20');

  const photoContainer = document.createElement('div');
  photoContainer.classList.add('flex-1', 'justify-center', 'p-20');

  const img = document.createElement('img');
  img.src = '/img/respImg.jpg';
  photoContainer.append(img);

  container.append(headingContainer, contentContainer);
  bg.appendChild(container);
  app.prepend(bg);
};

export {gallery};
