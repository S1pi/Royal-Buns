const footer = () => {
  const body = document.querySelector('body');

  // FOOTER component

  const footerContainer = document.createElement('footer');
  footerContainer.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'bg-red',
    'p-10',
    'w-full'
  );

  // LOGO to footer

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('w-3/6', 'h-20');

  const logo = document.createElement('img');
  logo.src = '/img/rb-logo.png';
  logo.alt = 'Logo';
  logo.classList.add('h-full', 'w-auto', 'ml-2');

  logoContainer.appendChild(logo);

  // TEXT container to footer

  const textContainer = document.createElement('div');
  textContainer.classList.add(
    'flex',
    'justify-between',
    'w-3/6',
    'h-2/3',
    'pt-4'
  );

  // Text and links for footer

  const aboutUs = [
    {text: 'TIETOA MEISTÄ', href: 'heading'},
    {text: 'Tietoa meistä', href: '/about'},
    {text: 'Ravintolat', href: '/restaurants'},
    {text: 'Galleria', href: '/gallery'},
  ];

  const customerService = [
    {text: 'ASIAKASPALVELU', href: 'heading'},
    {text: 'Ota yhteyttä', href: '/contact'},
    {text: 'Usein kysyttyä', href: 'https://chatgpt.com'},
    {text: 'Yrityksille', href: '/business'},
  ];

  const products = [
    {text: 'TUOTTEET', href: 'heading'},
    {text: 'Menu', href: '/menu'},
    {text: 'Vastuullisuus', href: '/responsibility'},
  ];

  const offers = [
    {text: 'KAMPANJAT JA TARJOUKSET', href: 'heading'},
    {text: 'Lounastarjous', href: '/menu'}, // TODO?: Luo tarjoukset kohta menuun
  ];

  const followUs = [
    {text: 'SEURAA MEITÄ', href: 'heading'},
    {text: 'Instagram', href: 'https://www.instagram.com'},
    {text: 'Facebook', href: 'https://www.facebook.com'},
  ];

  // To one table

  const tables = [aboutUs, customerService, products, offers, followUs];

  tables.forEach((table) => {
    // Take one table and make container for it

    const tableContainer = document.createElement('div');
    tableContainer.classList.add('flex', 'flex-col', 'items-start', 'p-4');

    table.forEach((element) => {
      // Take text and links for table

      const text = element.text;
      const link = element.href;

      if (link === 'heading') {
        // Heading component to green h3

        const containerHeading = document.createElement('h3');
        containerHeading.classList.add('text-white', 'font-bold', 'mb-2');
        containerHeading.textContent = text;
        tableContainer.append(containerHeading);
      } else {
        // Link component to light gray a

        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.textContent = text;
        linkElement.classList.add('text-gray-300', 'hover:text-yellow', 'mt-1');
        tableContainer.append(linkElement);
      }
    });

    textContainer.append(tableContainer);
  });

  footerContainer.append(logoContainer, textContainer);

  // Footer to body

  if (body) {
    body.append(footerContainer);
  }
};

export {footer};
