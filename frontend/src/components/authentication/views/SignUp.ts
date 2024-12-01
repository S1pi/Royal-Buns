const createSignUpView = (): HTMLDivElement => {
  const container = document.createElement('div');
  // TODO: Vaihda mahdollisesti suoraan kaikki luokat tähän
  container.classList.add(
    'form-container',
    'sign-up',
    'absolute',
    'top-0',
    'h-full',
    'left-0',
    'w-1/2',
    'opacity-0',
    'z-[1]'
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
  heading.textContent = 'REKISTERÖIDY';
  form.appendChild(heading);

  // Creates inputelements from inputs array
  const inputs = [
    {type: 'username', placeholder: 'Käyttäjänimi'},
    {type: 'password', placeholder: 'Salasana'},
    {type: 'email', placeholder: 'Sähköposti'},
    {type: 'tel', placeholder: 'Puhelinnumero'},
  ];

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

  const signUpBtn = document.createElement('button');
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

  form.appendChild(signUpBtn);
  container.appendChild(form);

  return container;
};

export {createSignUpView};
