import {infoPage} from './components/infoPage/infoPage';
import {mainPage} from './components/mainPage/mainPage';
import {reservation} from './components/reservation/reservation';
import {reservationModal} from './components/reservation/reservationModal';

mainPage();
document.addEventListener('DOMContentLoaded', () => {
  reservationModal();
});
