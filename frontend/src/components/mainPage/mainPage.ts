import {header} from '../header/header';
import {infoPage} from '../infoPage/infoPage';

const mainPage = () => {
  // First create header for page
  header();
  infoPage();
};

export {mainPage};
