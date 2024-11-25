import {business} from '../business/business';
import {gallery} from '../gallery/gallery';
import {infoPage} from '../infoPage/infoPage';
import {mainPage} from '../mainPage/mainPage';
import {menu} from '../menu/menu';
import {reservation} from '../reservation/reservation';
import {resp} from '../resp/resp';

const routes: {[key: string]: () => void} = {
  // Header navigation
  '/': mainPage,
  '/menu': menu,
  '/reservation': reservation,
  // "/restaurant": restaurant, TODO: Restaurant function here
  '/business': business,
  '/gallery': gallery,

  // Other navigation
  '/about': infoPage,
  '/responsibility': resp,
};

const router = () => {
  const path = window.location.pathname;
  const route = routes[path];
  const app = document.querySelector('#app');

  if (route) {
    if (app) {
      app.innerHTML = '';
      route();
    }
  } else {
    const app = document.querySelector('#app') as HTMLDivElement;
    app.innerHTML = `<h1>404 - Page Not Found</h1>`;
  }
};

export {router};
