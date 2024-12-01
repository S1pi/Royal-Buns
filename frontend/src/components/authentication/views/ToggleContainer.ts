const signInToggle = (authContainer: HTMLDivElement): HTMLDivElement => {
  const leftToggle = document.createElement('div');
  leftToggle.classList.add(
    'togglePanel',
    'toggleLeft',
    // Yllä luokan nimet
    'absolute',
    'w-1/2',
    'h-full',
    'flex',
    'justify-center',
    'items-center',
    'flex-col',
    'px-8',
    'text-center',
    'top-0',
    'translate-x-0',
    // Alkaa omat
    'translate-x-[-200%]'
  );

  const leftHeading = document.createElement('h3');
  leftHeading.classList.add('text-h3', 'font-bold');
  leftHeading.textContent = `Sinua odotetaan - kirjaudu sisään ja nauti!`;
  const leftP = document.createElement('p');
  leftP.classList.add('text-h6', 'leading-5', 'tracking-wide', 'my-5');
  leftP.textContent =
    'Premium-nautinto on vain kirjautumisen päässä. Liity takaisin ja nauti yksityiskohtaisesta palvelustamme.';

  const signInBtn = document.createElement('button');

  // hide luokka = videolla hidden
  signInBtn.id = 'loginBtn';
  signInBtn.classList.add(
    'hide', // mahdollisesti vaihtoon
    'bg-primary', // Vaihdetaan miten videolla toimitaan
    'text-secondary',
    'text-sm',
    'px-11',
    'py-2',
    'rounded-3xl',
    'border-solid',
    'border-2',
    'border-transparent',
    'font-semibold',
    'tracking-wider',
    'uppercase',
    'mt-3',
    'cursor-pointer'
  );
  signInBtn.textContent = 'KIRJAUTUMAAN';

  signInBtn.addEventListener('click', () => {
    authContainer.classList.remove('active');
  });

  leftToggle.append(leftHeading, leftP, signInBtn);
  return leftToggle;
};

const signUpToggle = (authContainer: HTMLDivElement): HTMLDivElement => {
  const rightToggle = document.createElement('div');
  rightToggle.classList.add(
    'togglePanel',
    'toggleRight',
    // Yllä olevat oikeita luokan nimiä
    'absolute',
    'w-1/2',
    'h-full',
    'flex',
    'justify-center',
    'items-center',
    'flex-col',
    'px-8',
    'text-center',
    'top-0',
    'translate-x-0',
    // alkaa omat
    'right-0',
    'translate-x-0'
  );
  const rightHeading = document.createElement('h3');
  rightHeading.classList.add('text-h3', 'font-bold');
  rightHeading.textContent = 'Liity kuninkaalliseen pöytään!';
  const rightP = document.createElement('p');
  rightP.classList.add('text-h6', 'leading-5', 'tracking-wide', 'my-5');

  rightP.textContent =
    'Kun rekisteröidyt, avaat oven kuninkaallisiin etuihin, jotka tekevät hampurilaiskokemuksestasi unohtumattoman.';

  const signUpBtn = document.createElement('button');

  // hide luokka = videolla hidden
  signUpBtn.id = 'signUpBtn';
  signUpBtn.classList.add(
    'hide', // mahdollisesti vaihtoon
    'bg-primary', // Vaihdetaan miten videolla toimitaan
    'text-secondary',
    'text-sm',
    'px-11',
    'py-2',
    'rounded-3xl',
    'border-solid',
    'border-2',
    'border-transparent',
    'font-semibold',
    'tracking-wider',
    'uppercase',
    'mt-3',
    'cursor-pointer'
  );
  signUpBtn.textContent = 'REKISTERÖIDY NYT';

  signUpBtn.addEventListener('click', () => {
    authContainer.classList.add('active');
  });

  rightToggle.append(rightHeading, rightP, signUpBtn);

  return rightToggle;
};

const createToggleContainer = (authContainer: HTMLDivElement) => {
  const container = document.createElement('div');
  container.classList.add(
    'toggleContainer',
    'absolute',
    'top-0',
    'left-1/2',
    'w-1/2',
    'h-full',
    'overflow-hidden',
    'rounded-l-[130px]',
    'z-[1000]'
  );

  const toggle = document.createElement('div');
  toggle.classList.add(
    'toggle',
    'bg-secondary',
    'h-full',
    'text-primary',
    'relative',
    '-left-full',
    'h-full',
    'w-[200%]',
    'translate-x-0'
  );

  const signIn = signInToggle(authContainer);
  const signUp = signUpToggle(authContainer);

  toggle.append(signIn, signUp);
  container.appendChild(toggle);
  return container;
};

export {createToggleContainer};
