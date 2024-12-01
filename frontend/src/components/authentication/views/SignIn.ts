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
    'z-[2]'
  );
  const form = document.createElement('form');
  form.classList.add(
    'bg-primary',
    'flex',
    'items-center',
    'justify-center',
    'flex-col',
    'py-0',
    'px-10',
    'h-full'
  );
  const heading = document.createElement('h3');
  heading.classList.add('text-h3', 'font-bold');
  // TODO: Change for language selection
  heading.textContent = 'KIRJAUDU';

  form.appendChild(heading);

  const inputs = [
    {type: 'username', placeholder: 'Käyttäjänimi'},
    {type: 'password', placeholder: 'Salasana'},
  ];

  // Creates inputelements from inputs array
  inputs.forEach((data) => {
    const input = document.createElement('input');
    input.type = data.type;
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

  form.appendChild(signInBtn);

  container.appendChild(form);

  return container;
};

export {createSignInView};
