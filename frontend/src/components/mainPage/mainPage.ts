import {footer} from '../footer/footer';
import {header} from '../header/header';

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

  // VIDEO

  const videoBackground = document.createElement('video');
  videoBackground.classList.add(
    'absolute', // Asetetaan video täyttämään koko containerin
    'top-0',
    'left-0',
    'w-full',
    'bg-red',
    'h-full',
    'object-cover', // Video mukautuu containerin kokoon
    'opacity-30', // Säädetään peittävyyttä
    '-z-10' // Sijoitetaan videon alle muiden elementtien
  );
  videoBackground.src = 'path/to/your/video.mp4'; // Korvaa omalla videopolullasi
  videoBackground.autoplay = true;
  videoBackground.loop = true;
  videoBackground.muted = true;

  const app = document.getElementById('app');

  // Call header and footer

  header();
  footer();

  const headerBg = document.querySelector('header');
  headerBg?.classList.add('bg-transparent');

  // bg

  const mainScreenView = document.createElement('div');
  mainScreenView.classList.add(
    'h-screen',
    // 'bg-background-light',
    'flex',
    'items-center',
    'justify-center'
  );

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
    'hover:bg-black',
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
    'hover:bg-black',
    'hover:bg-opacity-5'
  );

  const rightArrow = document.createElement('i');
  rightArrow.className = 'fa-solid fa-caret-right';

  rightArrowContainer.appendChild(rightArrow);

  carouselData.forEach((item) => {
    const slide = document.createElement('div');
    slide.classList.add(
      'w-full',
      'flex-shrink-0',
      'h-full',
      'bg-black',
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
    title.classList.add('text-4xl', 'font-bold', 'text-gray-800');
    title.innerText = item.heading;

    const description = document.createElement('p');
    description.classList.add('text-lg', 'text-gray-600', 'mt-8');
    description.innerText = item.text;

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
};

export {mainPage};
