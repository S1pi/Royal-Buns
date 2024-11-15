import {infoPage} from '../infoPage/infoPage';

// const navigation = (page: string) => {
const dataContainer = document.getElementById('app');

//   if (!dataContainer) {
//     throw new Error('Elementtiä ei löydetty');
//   } else {
//     // Ekana nollataan koko sivu Inner.HTML avulla
//     dataContainer.innerHTML = '';

//     switch (page) {
//       case 'main':
//         // Load mainscreen function
//         break;
//       case 'menu':
//         // Load menu screen function
//         break;
//       default:
//         console.error('Something went wrong');
//     }
//   }
// };

const displayContent = (pageValue: string) => {
  const dataContainer = document.getElementById('app');
  if (!dataContainer) {
    throw new Error('Element not found');
  } else {
    try {
      dataContainer.innerHTML = '';
      // Something to change document title:
      // document.title = ex: `Something ${content.something}`
    } catch (e) {
      console.error('Error loading page: ', e);
    }
  }
};

const initialState = {};
