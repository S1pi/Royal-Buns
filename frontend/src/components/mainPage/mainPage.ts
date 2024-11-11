import {header} from '../header/header';

const mainPage = () => {
  // First create header for page
  header(document.querySelector('body') as HTMLElement);
};

export {mainPage};
