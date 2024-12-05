import {sendLoginData} from '../AuthenticationService';

const createSignInView = (): HTMLDivElement => {
  const container = document.createElement('div');
  // TODO: Vaihda mahdollisesti suoraan kaikki luokat tähän
  container.classList.add(
    'form-container',
    'sign-in',
    'absolute',
    'top-0',
    'h-full',
    'left-0',
    'w-1/2',
    'z-[2]',
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
    'gap-4',
    'py-0',
    'px-10',
    'h-2/3',
    'w-2/3',
    'border-solid',
    'border-red',
    'border-2',
    'rounded-[30px]'
  );
  const heading = document.createElement('h1');
  heading.classList.add('text-h1', 'font-bold', 'mb-8', 'text-secondary');
  // TODO: Change for language selection
  heading.textContent = 'KIRJAUDU';

  form.appendChild(heading);

  const inputs = [
    {name: 'username', type: 'text', placeholder: 'Käyttäjänimi'},
    {name: 'password', type: 'password', placeholder: 'Salasana'},
  ];

  // Creates inputelements from inputs array
  inputs.forEach((data) => {
    const input = document.createElement('input');
    input.type = data.type;
    input.name = data.name;
    if (data.name === 'username' || data.name === 'password') input.required = true;
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

  const signInBtn = document.createElement('button');
  signInBtn.type = 'submit';
  signInBtn.textContent = 'KIRJAUDU';
  signInBtn.classList.add(
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

    sendLoginData(data);
  });

  form.appendChild(signInBtn);

  container.appendChild(form);

  return container;
};

export {createSignInView};
