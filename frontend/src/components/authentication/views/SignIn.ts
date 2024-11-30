const createSignInView = (): HTMLDivElement => {
  const container = document.createElement('div');
  // TODO: Vaihda mahdollisesti suoraan kaikki luokat tähän
  container.classList.add('form-container', 'sign-in');
  const form = document.createElement('form');
  const heading = document.createElement('h2');
  // TODO: Change for language selection
  heading.textContent = 'KIRJAUDU';

  const inputs = [
    {type: 'username', placeholder: 'Käyttäjänimi'},
    {type: 'password', placeholder: 'Salasana'},
  ];

  inputs.forEach((data) => {
    const input = document.createElement('input');
    input.type = data.type;
    input.placeholder = data.placeholder;
    form.appendChild(input);
  });

  const signInBtn = document.createElement('button');
  signInBtn.textContent = 'KIRJAUDU';

  return container;
};

export {createSignInView};
