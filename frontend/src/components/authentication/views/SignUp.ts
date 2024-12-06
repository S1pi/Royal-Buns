import {sendRegisterationData} from '../AuthenticationService';

const createSignUpView = (): HTMLDivElement => {
  const container = document.createElement('div');
  container.classList.add(
    'form-container',
    'sign-up',
    'absolute',
    'top-0',
    'h-full',
    'left-0',
    'w-1/2',
    'opacity-0',
    'z-[1]',
    'flex',
    'justify-center',
    'items-center'
  );
  const form = document.createElement('form');
  form.classList.add(
    'bg-primary',
    'flex',
    'items-center',
    'justify-center',
    'flex-col',
    'gap-3',
    'py-0',
    'px-10',
    'h-3/4',
    'w-3/4',
    'border-solid',
    'border-red',
    'border-2',
    'rounded-[30px]'
  );
  const heading = document.createElement('h1');
  heading.classList.add('text-h1', 'font-bold', 'mb-8', 'text-secondary');
  // TODO: Change for language selection
  heading.textContent = 'REKISTERÖIDY';
  form.appendChild(heading);

  // Creates inputelements from inputs array
  const inputs = [
    {name: 'username', type: 'text', placeholder: 'Käyttäjänimi'},
    {name: 'password', type: 'password', placeholder: 'Salasana'},
    {name: 'email', type: 'email', placeholder: 'Sähköposti'},
    {name: 'phonenumber', type: 'tel', placeholder: 'Puhelinnumero'},
  ];

  inputs.forEach((data) => {
    const input = document.createElement('input');
    input.type = data.type;
    input.name = data.name;
    if (data.name === 'username' || data.name === 'password') input.required = true;

    // Miika12345!;
    if (data.name === 'password') {
      // Salasanan tulee sisältää vähintään 8 merkkiä, joista vähintään yksi iso kirjain ja yksi numero ja yksi erikoismerkki
      input.pattern = '^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$';
      input.title =
        'Salasanan tulee sisältää vähintään 8 merkkiä, joista vähintään yksi iso kirjain ja yksi numero ja yksi erikoismerkki';
    }

    input.placeholder = data.placeholder;
    input.classList.add(
      'bg-slate-200',
      'border-none',
      'my-2',
      'py-2',
      'px-4',
      'text-sm',
      'rounded-xl',
      'outline-none'
    );
    form.appendChild(input);
  });

  const signUpBtn = document.createElement('button');
  signUpBtn.type = 'submit';
  signUpBtn.textContent = 'REKISTERÖIDY';
  signUpBtn.classList.add(
    'bg-red',
    'text-white',
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

  // Submit lomakkeen käsittely
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (value !== '') {
        data[key] = value as string;
      }
    });

    sendRegisterationData(data);
  });

  form.appendChild(signUpBtn);
  container.appendChild(form);

  return container;
};

export {createSignUpView};
