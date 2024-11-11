const footer = () => {
  const body = document.querySelector('body');

  const footerContainer = document.createElement('div');
  footerContainer.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'bg-red',
    'h-80',
    'w-full',
    'absolute',
    'bottom-0'
  );

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('w-3/6', 'h-20');

  const logo = document.createElement('img');
  logo.src = '/img/rb-logo.png';
  logo.alt = 'Logo';
  logo.classList.add('h-full', 'w-auto', 'ml-2');

  logoContainer.appendChild(logo);

  const textContainer = document.createElement('div');
  textContainer.classList.add(
    'flex',
    'justify-between',
    'w-3/6',
    'h-2/3',
    // 'bg-black',
    'pt-4'
  );

  const aboutUs = [
    {text: 'TIETOA MEISTÄ', value: 'heading'},
    {text: 'Tietoa meistä', value: 'tietoameista'},
    {text: 'Ravintolat', value: 'ravintolat'},
    {text: 'Galleria', value: 'gallery'},
  ];

  const customerService = [
    {text: 'ASIAKASPALVELU', value: 'heading'},
    {text: 'Ota yhteyttä', value: 'otaYhteytta'},
    {text: 'Usein kysyttyä', value: 'useinKysyttya'},
    {text: 'Yrityksille', value: 'yrityksille'},
  ];

  const products = [
    {text: 'TUOTTEET', value: 'heading'},
    {text: 'Menu', value: 'menu'},
    {text: 'Vastuullisuus', value: 'resp'},
  ];

  const offers = [
    {text: 'KAMPANJAT JA TARJOUKSET', value: 'heading'},
    {text: 'Lounastarjous', value: 'lounasTarjous'},
  ];

  const followUs = [
    {text: 'SEURAA MEITÄ', value: 'heading'},
    {text: 'Instagram', value: 'https://www.instagram.com'},
    {text: 'Facebook', value: 'https://www.facebook.com'},
  ];

  const tables = [aboutUs, customerService, products, offers, followUs];

  tables.forEach((table) => {
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('flex', 'flex-col', 'items-start', 'p-4');

    table.forEach((element) => {
      const text = element.text;
      const link = element.value;

      if (link === 'heading') {
        const containerHeading = document.createElement('h3');
        containerHeading.classList.add('text-green', 'font-bold', 'mb-2');
        containerHeading.textContent = text;
        tableContainer.append(containerHeading);
      } else {
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
  if (body) {
    body.append(footerContainer);
  }
};

export {footer};
