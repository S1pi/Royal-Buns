const infoPage = () => {
  const app = document.getElementById('app') as HTMLElement;

  // Colored background
  const bg = document.createElement('div');
  bg.classList.add(
    'bg-background-light',
    'w-full',
    'h-auto',
    'flex',
    'justify-center',
    'items-center',
    'p-10',
    'bg'
  );

  const container = document.createElement('div');
  container.classList.add(
    'bg-primary',
    'h-5/6',
    'w-5/6',
    'flex-col',
    'p-10',
    'contentContainer'
  );

  //Heading

  const headingContainer = document.createElement('div');
  headingContainer.classList.add(
    'text-red',
    'font-bold',
    'h-1/6',
    'w-full',
    'flex',
    'justify-center',
    'items-center',
    'p-10',
    'headingContainer',
    'infoHeadingContainer'
  );

  const heading = document.createElement('h1');
  heading.classList.add('text-5xl', 'infoHeading');
  heading.textContent = 'MIKÄ ON ROYAL BUNS?';

  headingContainer.appendChild(heading);

  // Content Container includes text and form container

  const contentContainer = document.createElement('div');
  contentContainer.classList.add(
    'flex',
    'h-auto',
    'min-h-1/2',
    'items-center',
    'infoContentContainer'
  );

  const leftContentContainer = document.createElement('div');
  leftContentContainer.classList.add(
    'h-full',
    'w-1/2',
    'flex',
    'flex-col',
    'infoDataContainer',
    'infoDataContainerLeft'
  );

  const rightContentContainer = document.createElement('div');
  rightContentContainer.classList.add(
    'h-full',
    'w-1/2',
    'flex',
    'flex-col',
    'infoDataContainer',
    'infoDataContainerRight'
  );

  contentContainer.append(leftContentContainer, rightContentContainer);

  const leftUpperContainer = document.createElement('div');
  leftUpperContainer.classList.add(
    'p-5',
    'h-1/2',
    'w-full',
    'flex',
    'items-center',
    'justify-center',
    'infoPhotoTextContainer'
  );

  const leftUpperText = document.createElement('p');
  leftUpperText.textContent =
    'Royal Bunsilla uskomme burgereihin, jotka ovat kuin kuninkaallisia. Käytämme ensiluokkaisia raaka-aineita, jotka hankimme parhaimmilta paikallisilta tiloilta, jotta jokainen suupala olisi täynnä makua. Olipa mielessäsi perinteinen juustohampurilainen tai jokin ainutlaatuisista luomuksistamme, jokainen burger valmistetaan huolella täydellisyyttä tavoitellen.';

  leftUpperText.classList.add('w-5/6', 'p-4', 'text-center', 'infoPageTextContent');
  leftUpperContainer.appendChild(leftUpperText);

  const leftLowerContainer = document.createElement('div');
  leftLowerContainer.classList.add(
    'p-5',
    'h-1/2',
    'min-h-60',
    'w-full',
    'flex',
    'items-center',
    'justify-center',
    'infoPhotoTextContainer'
  );

  const leftImg = document.createElement('img');
  leftImg.src = './src/components/infoPage/info-img/infoPagePhoto2.jpg';
  leftImg.classList.add('h-full', 'w-full', 'max-w-xl');

  leftLowerContainer.appendChild(leftImg);

  const rightUpperContainer = document.createElement('div');
  rightUpperContainer.classList.add(
    'p-5',
    'h-1/2',
    'min-h-60',
    'w-full',
    'flex',
    'items-center',
    'justify-center',
    'infoPhotoTextContainer'
  );

  const rightImg = document.createElement('img');
  rightImg.src = './src/components/infoPage/info-img/infoPagePhoto1.jpeg';
  rightImg.classList.add('h-full', 'w-full', 'max-w-xl');

  rightUpperContainer.appendChild(rightImg);

  const rightLowerContainer = document.createElement('div');
  rightLowerContainer.classList.add(
    'p-5',
    'h-1/2',
    'w-full',
    'flex',
    'items-center',
    'justify-center',
    'infoPhotoTextContainer'
  );

  const rightLowerText = document.createElement('p');
  rightLowerText.textContent =
    'Kuvassa näkyy Royal Bunsin pääkokki, Armando Christian Pérez, jonka intohimo ruokaan näkyy jokaisessa annoksessa. Andres on luonut ainutlaatuisia reseptejä, jotka yhdistävät perinteiset maut moderniin burgertaiteeseen. Hänen missionaan on tarjota asiakkaille elämyksiä, jotka ylittävät odotukset – joka kerta.';
  rightLowerText.classList.add('w-5/6', 'p-4', 'text-center', 'infoPageTextContent');

  rightLowerContainer.appendChild(rightLowerText);

  leftContentContainer.append(leftUpperContainer, leftLowerContainer);
  rightContentContainer.append(rightUpperContainer, rightLowerContainer);

  //APPENDS

  container.append(headingContainer, contentContainer);
  bg.appendChild(container);
  app.prepend(bg);
};

export {infoPage};
