import {footer} from '../footer/footer';
import {header} from '../header/header';

//data

const carouselData = [
  {
    heading: 'Päivän burgeri',
    text: 'Tänään tällainen vitun mahtava burgeri',
    link: 'joo tähä via tasus joksdni',
  },
  {
    heading: 'Lounastarjous',
    text: 'lounalla jotain ja jotain hintaan jotain €',
    link: 'linkki tähän',
  },
  {
    heading: 'Vastuullisuus',
    text: 'Tiesitkö että 94% raaka-aineistamme on kotimaisia',
    link: 'linkki tähän',
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
    'bg-black',
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
  headerBg?.classList.add('bg-opacity-40', 'bg-black', 'shadow-lg');

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
    'h-2/3',
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
    title.classList.add('text-4xl', 'font-bold', 'text-white');
    title.innerText = item.heading;

    const description = document.createElement('p');
    description.classList.add('text-lg', 'text-white', 'mt-8');
    description.innerText = item.text;

    // Yellow div for link

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
      'bg-yellow'
    );

    const link = document.createElement('a');
    link.classList.add('text-black');
    link.href = item.link;
    link.innerText = 'Siirry';

    linkContainer.appendChild(link);
    slide.append(title, description, linkContainer);
    carousel.appendChild(slide);
  });

  carouselContainer.appendChild(carousel);

  mainScreenView.append(
    videoBackground,
    leftArrowContainer,
    carouselContainer,
    rightArrowContainer
  );

  app?.append(mainScreenView);

  // CAROUSEL SET INTERVALS

  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 7000); // 7s

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

  // ADD: info
  // ADD: Daily burger
  // ADD: Link to table reservation
};

export {mainPage};
