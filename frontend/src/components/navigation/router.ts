import {reservationSelectionCheck} from '../../utils/reservationSelections';
import {business} from '../business/business';
import {contact} from '../contact/contact';
import {gallery} from '../gallery/gallery';
import {infoPage} from '../infoPage/infoPage';
import {mainPage} from '../mainPage/mainPage';
import {menu} from '../menu/menu';
import {reservation} from '../reservation/reservation';
import {reservationModal} from '../reservation/reservationModal';
import {resp} from '../resp/resp';
import {restaurants} from '../restaurants/restaurants';

const routes: {[key: string]: () => void} = {
  // Header navigation
  '/': mainPage,
  '/menu': menu,
  '/reservation': reservation,
  '/restaurants': restaurants,
  '/business': business,
  '/gallery': gallery,

  // Other navigation
  '/about': infoPage,
  '/responsibility': resp,
  '/contact': contact,
  '/reservation/table-selection': reservationModal,
};

const router = () => {
  const path = window.location.pathname;
  const route = routes[path];
  const app = document.querySelector('#app');

  if (route) {
    if (app) {
      if (path === '/reservation/table-selection') {
        if (!reservationSelectionCheck()) {
          history.back();
          history.replaceState({}, '', '/reservation');
          alert('You need to select all selections first');
          return;
        }
        // If reservationSelectionCheck returns true we generate table-selection
        app.innerHTML = '';
        route();
      } else {
        app.innerHTML = '';
        route();
      }
    }
  } else {
    const app = document.querySelector('#app') as HTMLDivElement;
    app.innerHTML = `<h1>404 - Page Not Found</h1>`;
  }
};

window.onpopstate = () => {
  router();
};

export {router};
