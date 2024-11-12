import {footer} from '../footer/footer';
import {header} from '../header/header';

//data

//diets, price, name, description, photo, day

const carouselData = [
  {
    id: 1,
    heading: 'Päivän burgeri',
    text: 'Tänään tällainen vitun mahtava burgeri',
    link: 'joo tähä via tasus joksdni',
  },
  {
    id: 2,
    heading: 'Lounastarjous',
    text: 'lounalla jotain ja jotain hintaan jotain €',
    link: 'linkki tähän',
  },
  {
    id: 3,
    heading: 'Vastuullisuus',
    text: 'Tiesitkö että 94% raaka-aineistamme on kotimaisia',
    link: 'linkki tähän',
  },
  {
    id: 4,
    heading: 'MIIKA TÖIHIN',
    text: 'Joo, luit oikein!',
    link: '',
  },
];

const mainPage = () => {
  const body = document.querySelector('body') as HTMLBodyElement;

  const app = document.getElementById('app');

  // Call header and footer

  header();
  footer();

  //VIDEO

  const videoBackground = document.createElement('video');
  videoBackground.classList.add(
    'absolute',
    'top-0',
    'left-0',
    'w-full',
    // 'bg-black',
    'h-full',
    'object-cover',
    'opacity-80',
    '-z-10'
  );
  videoBackground.src = 'videos/RoyalBuns-figma.mp4';
  videoBackground.autoplay = true;
  videoBackground.loop = true;
  videoBackground.muted = true;

  // Set header bg and opacity to see video

  const headerBg = document.querySelector('header');
  headerBg?.classList.add('bg-opacity-0', 'shadow-inner');

  // bg

  const mainScreenView = document.createElement('div');
  mainScreenView.classList.add(
    'h-screen',
    // 'bg-background-light',
    'flex',
    'items-center',
    'justify-center'
  );

  // carousel container

  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add(
    'relative',
    'w-2/3',
    'h-3/5',
    'overflow-hidden',
    'rounded-2xl'
    // 'bg-green'
  );

  const carousel = document.createElement('div');
  carousel.classList.add(
    'flex',
    'transition-transform',
    'duration-500',
    'h-full',
    'rounded-2xl'
  );

  // carousel arrows

  const leftArrowContainer = document.createElement('div');
  leftArrowContainer.classList.add(
    'absolute',
    'left-0',
    'h-full',
    'w-16',
    'flex',
    'justify-center',
    'items-center',
    'text-yellow',
    'drop-shadow-xl',
    'text-2xl',
    'duration-300',
    'hover:text-4xl',
    // 'hover:bg-black',
    'hover:bg-opacity-5'
  );

  const leftArrow = document.createElement('i');
  leftArrow.className = 'fa-solid fa-caret-left';

  leftArrowContainer.appendChild(leftArrow);

  const rightArrowContainer = document.createElement('div');
  rightArrowContainer.classList.add(
    'absolute',
    'right-0',
    'h-full',
    'w-16',
    'flex',
    'justify-center',
    'items-center',
    'text-yellow',
    'drop-shadow-xl',
    'text-2xl',
    'duration-300',
    'hover:text-4xl',
    // 'hover:bg-black',
    'hover:bg-opacity-5'
  );

  const rightArrow = document.createElement('i');
  rightArrow.className = 'fa-solid fa-caret-right';

  rightArrowContainer.appendChild(rightArrow);

  // Make slides to carousel container

  carouselData.forEach((item) => {
    const slide = document.createElement('div');
    slide.classList.add(
      'w-full',
      'flex-shrink-0',
      'h-full',
      // 'bg-black',
      'bg-opacity-10',
      'rounded-2xl',
      'flex',
      'flex-col',
      'justify-center',
      'items-center',
      'text-center',
      'py-12',
      'px-6'
      // 'shadow-lg'
    );

    const title = document.createElement('h2');
    title.classList.add(
      'text-4xl',
      'font-bold',
      'text-white',
      'drop-shadow-lg',
      'shadow-black'
    );
    title.innerText = item.heading;

    const description = document.createElement('p');
    description.classList.add(
      'text-lg',
      'text-white',
      'mt-8',
      'drop-shadow-lg',
      'shadow-black'
    );
    description.innerText = item.text;

    // Append title and description to slide

    slide.append(title, description);

    // Yellow div for link

    // ADD: Make link only if link

    const linkDestination = item.link;

    if (linkDestination) {
      const linkContainer = document.createElement('div');
      linkContainer.classList.add(
        'mt-8',
        'p-3',
        'h-auto',
        'w-16',
        'flex',
        'items-center',
        'justify-center',
        'rounded-lg',
        'bg-yellow',
        'drop-shadow-xl',
        'shadow-black'
      );

      const link = document.createElement('a');
      link.classList.add('text-black');
      link.href = item.link;
      link.innerText = 'Siirry';

      // If link,-> append link container to slide

      linkContainer.appendChild(link);
      slide.append(linkContainer);
    }

    carousel.appendChild(slide);
  });

  carouselContainer.appendChild(carousel);

  // CAROUSEL SET INTERVALS

  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 5000); // 5s

  const slideToIndex = (index: number) => {
    currentIndex = (index + carouselData.length) % carouselData.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  // EVENT LISTENER FOR CAROUSEL

  leftArrowContainer.addEventListener('click', () =>
    slideToIndex(currentIndex - 1)
  );
  rightArrowContainer.addEventListener('click', () =>
    slideToIndex(currentIndex + 1)
  );

  // other mainpage content to here

  const mainPageContentContainer = document.createElement('div');
  mainPageContentContainer.classList.add('h-auto', 'w-full');

  // ADD: info

  const restaurantInfoContainer = document.createElement('div');
  restaurantInfoContainer.classList.add(
    'h-full',
    'w-full',
    'p-20',
    'bg-contain',
    'bg-center',
    'flex',
    'flex-col',
    'items-center',
    'justify-center'
  );
  restaurantInfoContainer.style.backgroundImage = "url('img/gold-splash.png')";

  const infoHeadingElement = document.createElement('h1');
  infoHeadingElement.classList.add(
    'text-green',
    'font-bold',
    'text-h1',
    'mb-8'
  );
  infoHeadingElement.textContent = 'ROYAL BUNS';

  const infoTextElement = document.createElement('p');
  infoTextElement.classList.add(
    'text-black',
    'text-h5',
    'font-normal',
    'w-2/3',
    'pb-14',
    'text-center'
  );
  infoTextElement.textContent =
    'Royal Buns on vuonna 2019 perustettu premium-burgeriketju, jonka ravintolat löytyvät Helsingistä, Espoosta, Tampereelta ja Rovaniemeltä. Maineemme laadukkaista ja käsityönä valmistetuista burgereista on tuonut burgerin ystävät yhteen ympäri Suomen. Rennossa mutta tyylikkäässä miljöössä valmistamme jokaisen annoksen huolella, ja Royal Buns onkin vakiinnuttanut paikkansa yhtenä Suomen kymmenestä parhaasta burgeriravintolasta vuosina 2022, 2023 ja 2024.';

  restaurantInfoContainer.append(infoHeadingElement, infoTextElement);

  // ADD: Daily burger

  // ADD: Picture

  const pictureContainer = document.createElement('div');
  pictureContainer.classList.add('w-full', 'h-96', 'bg-fixed', 'bg-cover');

  pictureContainer.style.backgroundImage = "url('img/grill.jpg')";

  // ADD: Link to table reservation

  const tableReservationContainer = document.createElement('div');
  tableReservationContainer.classList.add(
    'h-full',
    'w-full',
    'p-12',
    'm-0',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'bg-white'
  );

  const tableHeadingElement = document.createElement('h1');
  tableHeadingElement.classList.add('text-red', 'font-bold', 'text-h1', 'mb-8');
  tableHeadingElement.textContent = 'VARAA PÖYTÄ';

  const tableTextElement = document.createElement('hp');
  tableTextElement.classList.add(
    'text-black',
    'text-h5',
    'font-normal',
    'w-1/3',
    'text-center'
  );
  tableTextElement.textContent =
    'Varaa pöytä Royal Bunsista ja tule nauttimaan Suomen parhaimpiin kuuluvista premium-burgereista! Olipa kyseessä mukava ilta ystävien kanssa tai juhlahetki, me tarjoamme ainutlaatuisen burgerielämyksen tyylikkäässä ympäristössä. Varmista paikkasi ja tee varaus jo tänään!';

  const tableLinkContainer = document.createElement('div');
  tableLinkContainer.classList.add(
    'w-32',
    'h-16',
    'my-8',
    'bg-yellow',
    'flex',
    'justify-center',
    'items-center',
    'rounded-full',
    'shadow-xl'
  );

  const tableLink = document.createElement('a');
  tableLink.textContent = 'Varaa pöytä';
  tableLink.href = '/Varaa';

  tableLinkContainer.appendChild(tableLink);

  tableReservationContainer.append(
    tableHeadingElement,
    tableTextElement,
    tableLinkContainer
  );

  mainPageContentContainer.append(
    restaurantInfoContainer,
    pictureContainer,
    tableReservationContainer
  );

  // Append everything to mainScreenView and to app

  mainScreenView.append(
    videoBackground,
    leftArrowContainer,
    carouselContainer,
    rightArrowContainer
  );

  app?.append(mainScreenView, mainPageContentContainer);
};

export {mainPage};
