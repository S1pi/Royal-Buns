import {createSignInView} from './views/SignIn';
import {createSignUpView} from './views/SignUp';

const authenticationComponent = () => {
  // TODO: Yhteensopivuus navigaationkanssa
  const app = document.querySelector('#app');

  const container = document.createElement('div');
  container.id = 'authContainer';
  container.classList.add('container');

  const signIn = createSignInView();
  const signUp = createSignUpView();
  container.append(signIn, signUp);

  app?.appendChild(container);
};

export {authenticationComponent};
