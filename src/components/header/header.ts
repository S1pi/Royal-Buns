const header = (element: HTMLElement) => {
  const body = document.querySelector('body') as HTMLBodyElement;
  const header = document.createElement('header');

  // Annetaan tailwind css luokkia
  header.classList.add('bg-red-75', 'h-16');
  header.classList.add('flex');

  const nav = document.createElement('nav');
  nav.classList.add('bg-black');

  const headerLinks = document.createElement('ul');

  const links = [
    {name: 'Etusivu', value: 'etusivu'},
    {name: 'Menu', value: 'menu'},
  ];

  const headerText = document.createElement('h1');

  const rbLogo = document.createElement('img');
  rbLogo.src = '/img/rb-logo.png';
  rbLogo.alt = 'Royalbuns Logo';

  header.append(rbLogo);

  headerText.textContent = 'Kiva header';
  nav.appendChild(headerText);

  header.appendChild(nav);
  body.appendChild(header);
};

const navigation = (page: string) => {
  const dataContainer = document.getElementById('app');

  if (!dataContainer) {
    throw new Error('Elementtiä ei löydetty');
  } else {
    // Ekana nollataan koko sivu Inner.HTML avulla
    dataContainer.innerHTML = '';

    switch (page) {
      case 'main':
        // Load mainscreen function
        break;
      case 'menu':
        // Load menu screen function
        break;
      default:
        console.error('Something went wrong');
    }
  }
};

export {header};
