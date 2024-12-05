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
import {authenticationComponent} from '../authentication/Authentication';
import {checkUserAuthentication} from '../authentication/AuthenticationService';

const routes: {[key: string]: () => void} = {
  // Header navigation
  '/': mainPage,
  '/menu': menu,
  '/reservation': reservation,
  '/restaurants': restaurants,
  '/business': business,
  '/gallery': gallery,
  '/login': authenticationComponent,

  // Other navigation
  '/about': infoPage,
  '/responsibility': resp,
  '/contact': contact,
  '/reservation/table-selection': reservationModal,
};

const router = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const app = document.querySelector('#app');

  if (route) {
    if (app) {
      if (path === '/reservation/table-selection') {
        if (!reservationSelectionCheck() || !(await checkUserAuthentication())) {
          history.back();
          history.replaceState({}, '', '/reservation');
          alert(
            "Don't try to cheat the system! You need to select restaurant, reservation size, time and day before proceeding! Also you need to be logged in! :)"
          );
          route();
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

// window.onpopstate = () => {
//   router();
// };

export {router};
