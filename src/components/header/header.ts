const header = (element: HTMLElement) => {
  // const body = document.querySelector('body');
  const header = document.createElement('header');
  // Annetaan tailwind css luokkia
  header.classList.add('bg-red-75', 'h-16');

  const nav = document.createElement('nav');
  const headerText = document.createElement('h1');

  headerText.textContent = 'Kiva header';
  nav.appendChild(headerText);

  header.appendChild(nav);
  // body?.appendChild(header);
  element.appendChild(header);
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
