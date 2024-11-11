import {footer} from '../footer/footer';
import {header} from '../header/header';

const mainPage = () => {
  const app = document.getElementById('app');

  // Call header and footer

  header();
  footer();

  // bg

  const mainScreenView = document.createElement('div');
  mainScreenView.classList.add('h-screen', 'bg-blue-600');

  app?.append(mainScreenView);
};

export {mainPage};
