import {footer} from '../footer/footer';
import {header} from '../header/header';

const gallery = () => {
  // First create header for page
  header();
  footer();

  const app = document.getElementById('app') as HTMLElement;
  // app.classList

  // Colored background

  const bg = document.createElement('div');
  bg.classList.add(
    'bg-background-light',
    'w-full',
    'h-full',
    'flex',
    'justify-center',
    'items-center'
  );

  // Colored container for content

  const coloredContainer = document.createElement('div');
  coloredContainer.classList.add('bg-primary', 'h-5/6', 'w-5/6', 'flex');

  //Heading

  // Vasen puoli
  const leftHeadingContainer = document.createElement('div');
  leftHeadingContainer.classList.add(
    'w-1/12',
    'h-full',
    'text-red',
    'flex',
    'justify-center',
    'items-center'
  );

  const leftHeading = document.createElement('div');
  leftHeading.classList.add(
    'flex',
    'flex-col',
    'h-5/6',
    'justify-center',
    'text-center',
    'text-[3vw]',
    'font-bold'
  );

  const leftLetters = 'GALLERIA';
  for (const letter of leftLetters) {
    const letterDiv = document.createElement('div');
    letterDiv.textContent = letter;
    letterDiv.classList.add('flex', 'items-center', 'justify-center', 'flex-1');
    leftHeading.appendChild(letterDiv);
  }

  leftHeadingContainer.appendChild(leftHeading);

  // Oikea puoli
  const rightHeadingContainer = document.createElement('div');
  rightHeadingContainer.classList.add(
    'w-1/12',
    'h-full',
    'text-red',
    'flex',
    'justify-center',
    'items-center'
  );

  const rightHeading = document.createElement('div');
  rightHeading.classList.add(
    'flex',
    'flex-col',
    'h-5/6',
    'justify-center',
    'text-center',
    'text-[3vw]',
    'font-bold',
    'transform',
    'rotate-180'
  );

  const rightLetters = 'GALLERIA';
  for (const letter of rightLetters) {
    const letterDiv = document.createElement('div');
    letterDiv.textContent = letter;
    letterDiv.classList.add('flex', 'items-center', 'justify-center', 'flex-1');
    rightHeading.appendChild(letterDiv);
  }

  rightHeadingContainer.appendChild(rightHeading);

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('w-10/12', 'h-full', 'flex');

  const leftContentContainer = document.createElement('div');
  leftContentContainer.classList.add(
    // 'bg-black',
    'w-2/3',
    'h-full',
    'relative',
    'p-12'
  );

  //   const leftUpperPicture = document.createElement('div');
  //   leftUpperPicture.classList.add(
  //     'absolute',
  //     'left-0',
  //     'top-4',
  //     'w-1/2',
  //     'h-1/2',
  //     'kortti'
  //   );
  //   leftUpperPicture.style.backgroundImage = 'url("/img/placeholder.png")';
  //   leftUpperPicture.style.backgroundSize = 'contain';
  //   leftUpperPicture.style.backgroundPosition = 'center';
  //   leftUpperPicture.style.backgroundRepeat = 'no-repeat';

  const leftUpperScene = document.createElement('div');
  leftUpperScene.classList.add(
    'scene',
    'absolute',
    'left-10',
    'top-10',
    'w-1/2',
    'h-1/2',
    // 'border-white',
    'border-2'
  );

  const leftUpperCard = document.createElement('div');
  leftUpperCard.classList.add('card');

  const leftUpperFaceFront = document.createElement('div');
  leftUpperFaceFront.classList.add('fs', 'l-u-front');

  const leftUpperFaceBack = document.createElement('div');
  leftUpperFaceBack.classList.add('fs', 'l-u-back');

  // LeftUpper Appends

  leftUpperCard.append(leftUpperFaceFront, leftUpperFaceBack);
  leftUpperScene.appendChild(leftUpperCard);

  // Lisää kuva säiliön sisälle

  const leftLowerScene = document.createElement('div');
  leftLowerScene.classList.add(
    'scene',
    'absolute',
    'bottom-10',
    '-right-10',
    'w-3/5',
    'h-3/5',
    // 'border-white',
    'border-2'
  );

  const leftLowerCard = document.createElement('div');
  leftLowerCard.classList.add('card');

  const leftLowerFaceFront = document.createElement('div');
  leftLowerFaceFront.classList.add('fs', 'l-u-front');

  const leftLowerFaceBack = document.createElement('div');
  leftLowerFaceBack.classList.add('fs', 'l-u-back');

  // LeftUpper Appends

  leftLowerCard.append(leftLowerFaceFront, leftLowerFaceBack);
  leftLowerScene.appendChild(leftLowerCard);

  const rightContentContainer = document.createElement('div');
  rightContentContainer.classList.add(
    // 'bg-white',
    'w-1/3',
    'h-full',
    'flex',
    'justify-center',
    'items-center'
  );

  const rightScene = document.createElement('div');
  rightScene.classList.add(
    'scene',
    'w-full',
    'h-1/2',
    // 'border-black',
    'border-2'
  );

  const rightCard = document.createElement('div');
  rightCard.classList.add('card');

  const rightFaceFront = document.createElement('div');
  rightFaceFront.classList.add('fs', 'l-u-front');

  const rightFaceBack = document.createElement('div');
  rightFaceBack.classList.add('fs', 'l-u-back');

  // LeftUpper Appends

  rightCard.append(rightFaceFront, rightFaceBack);
  rightScene.appendChild(rightCard);

  // FUNCTION TO FLIP CARD

  leftUpperCard.addEventListener('click', function () {
    leftUpperCard.classList.toggle('flip');
    console.log('FLIPPING');
  });

  leftLowerCard.addEventListener('click', function () {
    leftLowerCard.classList.toggle('flip');
    console.log('FLIPPING');
  });

  rightCard.addEventListener('click', function () {
    rightCard.classList.toggle('flip');
    console.log('FLIPPING');
  });

  // APPENDS
  leftContentContainer.append(leftUpperScene, leftLowerScene);
  rightContentContainer.append(rightScene);

  contentContainer.append(leftContentContainer, rightContentContainer);

  coloredContainer.append(
    leftHeadingContainer,
    contentContainer,
    rightHeadingContainer
  );
  bg.appendChild(coloredContainer);
  app.appendChild(bg);
};

export {gallery};
