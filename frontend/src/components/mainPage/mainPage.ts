import {header} from '../header/header';
import {infoPage} from '../infoPage/infoPage';

const mainPage = () => {
  // First create header for page
  header(document.querySelector('body') as HTMLElement);
  infoPage();
};

export {mainPage};
