const createSignUpView = (): HTMLDivElement => {
  const container = document.createElement('div');
  // TODO: Vaihda mahdollisesti suoraan kaikki luokat tähän
  container.classList.add('form-container', 'sign-up');
  const form = document.createElement('form');
  const heading = document.createElement('h2');
  // TODO: Change for language selection
  heading.textContent = 'REKISTERÖIDY';

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
    form.appendChild(input);
  });

  const signUpBtn = document.createElement('button');
  signUpBtn.textContent = 'REKISTERÖIDY';

  return container;
};

export {createSignUpView};
