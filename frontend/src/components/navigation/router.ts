import {infoPage} from '../infoPage/infoPage';
import {mainPage} from '../mainPage/mainPage';
import {menu} from '../menu/menu';
import {reservation} from '../reservation/reservation';

const routes: {[key: string]: () => void} = {
  '/': mainPage,
  '/about': infoPage,
  '/menu': menu,
  '/navigation': reservation,
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
