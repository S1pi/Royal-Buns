const business = () => {
  const app = document.getElementById('app') as HTMLElement;

  const header = document.querySelector('header') as HTMLElement;
  header.classList.remove('bg-opacity-0');

  // Colored background
  const bg = document.createElement('div');
  bg.classList.add(
    'bg-background-light',
    'w-full',
    'flex',
    'justify-center',
    'items-center',
    'p-10'
  );

  // Colored container for content

  const container = document.createElement('div');
  container.classList.add('bg-primary', 'h-5/6', 'w-5/6', 'p-10', 'flex-col');

  //Heading

  const headingContainer = document.createElement('div');
  headingContainer.classList.add(
    'text-red',
    'font-bold',
    'h-1/6',
    'w-1/1',
    'flex',
    'justify-center',
    'p-10'
  );

  // Content Container includes text and form container

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('flex', 'h-5/6', 'flex-col', 'items-center');

  const textContainer = document.createElement('div');
  textContainer.classList.add(
    'flex',
    'h-1/6',
    'items-end',
    'p-15',
    // 'bg-blue-500',
    'text-center',
    'w-2/5'
  );

  const formContainer = document.createElement('div');
  formContainer.classList.add(
    'flex',
    'h-5/6',
    'justify-center',
    'items-center',
    'p-10',
    // 'bg-green',
    'w-3/5'
  );

  const heading = document.createElement('h1');
  heading.classList.add('text-6xl');
  heading.textContent = 'YRITYKSILLE';

  const p = document.createElement('p');
  p.classList.add('text-lg', 'text-black', 'whitespace-pre-line');

  const text = `Onko teillä mielessä burgeriperjantai, virkistyspäivä tai henkilöstön palkitseminen? Meiltä löydät ratkaisut tilanteeseen kuin tilanteeseen! Yritysasiakkaana voit tilata tuotteitamme kuljetuksella tai ilman, sekä maksaa koko tilauksen laskulla.

Ole yhteydessä alla olevalla lomakkeella.`;
  p.textContent = text;

  // Create the form

  const form = document.createElement('form');
  form.classList.add(
    'w-full',
    'space-y-5',
    'flex',
    'flex-col',
    'justify-start',
    'items-center',
    'border-8',
    'border-red',
    'p-14',
    'rounded-3xl',
    'shadow-xl'
  );

  // Name input

  const nameField = document.createElement('div');
  nameField.classList.add('flex', 'flex-col', 'w-full');
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Nimi';
  nameLabel.classList.add('text-sm', 'text-black', 'mb-2');
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.placeholder = 'Kirjoita nimesi';
  nameInput.classList.add('border', 'p-2', 'rounded', 'w-full');
  nameField.append(nameLabel, nameInput);

  const emailField = document.createElement('div');
  emailField.classList.add('flex', 'flex-col', 'w-full');
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Sähköposti';
  emailLabel.classList.add('text-sm', 'text-black', 'mb-2');
  const emailInput = document.createElement('input');
  emailInput.type = 'text';
  emailInput.name = 'name';
  emailInput.placeholder = 'Sähköpostiosoitteesi';
  emailInput.classList.add('border', 'p-2', 'rounded', 'w-full');
  emailField.append(emailLabel, emailInput);

  // Subject input

  const subjectField = document.createElement('div');
  subjectField.classList.add('flex', 'flex-col', 'w-full');
  const subjectLabel = document.createElement('label');
  subjectLabel.textContent = 'Aihe';
  subjectLabel.classList.add('text-sm', 'text-black', 'mb-2');
  const subjectInput = document.createElement('input');
  subjectInput.type = 'text';
  subjectInput.name = 'subject';
  subjectInput.placeholder = 'Kirjoita aihe';
  subjectInput.classList.add('border', 'p-2', 'rounded', 'w-full');
  subjectField.append(subjectLabel, subjectInput);

  // Message input

  const messageField = document.createElement('div');
  messageField.classList.add('flex', 'flex-col', 'w-full');
  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Viesti';
  messageLabel.classList.add('text-sm', 'text-black', 'mb-2');
  const messageInput = document.createElement('textarea');
  messageInput.style.resize = 'none';
  messageInput.name = 'message';
  messageInput.placeholder = 'Kirjoita viesti';
  messageInput.classList.add('border', 'p-2', 'rounded', 'w-full', 'h-32');
  messageField.append(messageLabel, messageInput);

  // Send button

  const sendBtn = document.createElement('button');
  sendBtn.type = 'submit';
  sendBtn.textContent = 'Lähetä';
  sendBtn.classList.add(
    'bg-green',
    'text-black',
    'px-6',
    'py-3',
    'rounded',
    'hover:bg-yellow',
    'shadow-xl'
  );

  // Success message
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Viesti lähetetty onnistuneesti!';
  successMessage.classList.add('text-green-600', 'text-lg', 'mt-5', 'hidden');

  // Form submit event
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.classList.remove('hidden');

    form.reset();

    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 5000);
  });

  // Append everything
  form.append(
    nameField,
    emailField,
    subjectField,
    messageField,
    sendBtn,
    successMessage
  );
  formContainer.append(form);
  contentContainer.append(textContainer, formContainer);
  headingContainer.append(heading);
  textContainer.append(p);
  container.append(headingContainer, contentContainer);
  bg.appendChild(container);
  app.prepend(bg);
};

export {business};
