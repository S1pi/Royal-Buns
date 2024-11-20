import {footer} from './components/footer/footer';
import {header} from './components/header/header';
import {router} from './components/navigation/router';
// We give window eventlistner for popstate and give it router function to handle
// routing on every state change
window.addEventListener('popstate', router);

// Call header and footer on the DOM and after that call router to handle routing on the page
header();
footer();
router();
