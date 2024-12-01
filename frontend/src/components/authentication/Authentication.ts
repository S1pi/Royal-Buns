import {createSignInView} from './views/SignIn';
import {createSignUpView} from './views/SignUp';
import {createToggleContainer} from './views/ToggleContainer';

const authenticationComponent = () => {
  // TODO: Yhteensopivuus navigaationkanssa
  const app = document.querySelector('#app');

  const background = document.createElement('div');
  background.classList.add(
    'bg-background-light',
    'h-screen-header', // Takes all space left after header (calc(100vh - 5rem))
    'flex',
    'justify-center',
    'items-center',
    'flex-col'
  );

  const container = document.createElement('div');
  container.id = 'authContainer';
  // container luokka videossa
  container.classList.add(
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
  const toggleContainer = createToggleContainer(container);
  container.append(signIn, signUp, toggleContainer);

  background.appendChild(container);
  app?.appendChild(background);
};

export {authenticationComponent};
