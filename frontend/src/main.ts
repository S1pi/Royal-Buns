// import {footer} from './components/footer/footer';
import {authenticationComponent} from './components/authentication/Authentication';
import {header} from './components/header/header';
import {router} from './components/navigation/router';

// DELETE LATER

// We give window eventlistner for popstate and give it router function to handle
// routing on every state change
window.addEventListener('popstate', router);

// Call header and footer on the DOM and after that call router to handle routing on the page
header();
// footer();
// router();
authenticationComponent();
