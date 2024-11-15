import {infoPage} from '../infoPage/infoPage';
import {mainPage} from '../mainPage/mainPage';

const routes: {[key: string]: () => void} = {
  '/': mainPage,
  '/about': infoPage,
  // "/menu":
};

const router = () => {
  const path = window.location.pathname;
  const route = routes[path];

  if (route) {
    route();
  } else {
    const app = document.querySelector('#app') as HTMLDivElement;
    app.innerHTML = `<h1>404 - Page Not Found</h1>`;
  }
};

export {router};
