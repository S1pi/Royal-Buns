import {checkUserAuthentication} from './AuthenticationService';
import {createProfileView} from './views/Profile';
import {createSignInView} from './views/SignIn';
import {createSignUpView} from './views/SignUp';
import {createToggleContainer} from './views/ToggleContainer';

const authenticationComponent = async () => {
  // TODO: Yhteensopivuus navigaationkanssa
  const app = document.querySelector('#app');
  const header = document.querySelector('header') as HTMLElement;
  header.classList.remove('bg-opacity-0');

  const background = document.createElement('div');
  background.classList.add(
    'bg-background-light',
    'h-screen-header', // Takes all space left after header (calc(100vh - 5rem))
    'flex',
    'justify-center',
    'items-center',
    'flex-col'
  );

  // TODO: authentication check and redirect
  // If authenticated show profile view
  const authenticated = await checkUserAuthentication();

  if (authenticated) {
    const profileView = createProfileView();
    const profileContainer = document.createElement('div');
    profileContainer.classList.add(
      'cont',
      'bg-primary',
      'p-10',
      'rounded-[10px]',
      'shadow-auth',
      'overflow-hidden',
      'w-5/6', // Check if this is needed
      'max-w-screen-xl',
      'h-5/6'
    );

    profileContainer.appendChild(profileView);
    background.appendChild(profileContainer);
  } else {
    history.replaceState({}, '', '/login');
    // if not authenticated show this view
    const authContainer = document.createElement('div');
    authContainer.id = 'authContainer';
    // container luokka videossa
    authContainer.classList.add(
      'cont',
      'bg-primary',
      'p-10',
      'rounded-3xl',
      'shadow-auth',
      'relative',
      'overflow-hidden',
      'w-3/4',
      'max-w-screen-lg',
      'min-h-[630px]'
    );

    const signIn = createSignInView();
    const signUp = createSignUpView();

    const toggleContainer = createToggleContainer(authContainer);
    authContainer.append(signIn, signUp, toggleContainer);
    background.appendChild(authContainer); // authentication view ends here
  }

  // Append either profileView or authentication view to app
  app?.appendChild(background);
};

export {authenticationComponent};
