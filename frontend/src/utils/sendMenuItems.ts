import {
  Description,
  SuccesfullBurgerPost,
  SuccesfullOtherPostMessage,
} from '../types/menu';
import fetchData from './fetchData';

const sendBurgerMenuItem = async (
  id: number,
  diets: string,
  price: string,
  name: string,
  description: Description,
  day: string
) => {
  const token = localStorage.getItem('user-token');
  console.log('Token: ', token);
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({id, diets, price, name, description, day}),
  };

  const response: SuccesfullBurgerPost = await fetchData('/menu/burgers', options);

  if (!response) {
    throw new Error('Failed to send burger menu item');
  } else {
    return response.message;
  }
};

const sendOtherMenuItem = async (
  id: number,
  diets: string,
  price: string,
  name: string,
  description: Description,
  category: string
) => {
  const token = localStorage.getItem('user-token');
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({id, diets, price, name, description}),
  };

  // Add the correct path for the fetch request based on the category
  let response: SuccesfullOtherPostMessage;

  console.log('Category: ', category);

  switch (category) {
    case 'sliders':
      console.log('Sending sliders');
      response = await fetchData('/menu/sliders', options);
      if (!response) {
        throw new Error('Failed to send slider menu item');
      } else {
        return response.message;
      }
    case 'sides':
      response = await fetchData('/menu/sides', options);
      if (!response) {
        throw new Error('Failed to send side menu item');
      } else {
        return response.message;
      }
    case 'drinks':
      response = await fetchData('/menu/drinks', options);
      if (!response) {
        throw new Error('Failed to send drink menu item');
      } else {
        return response.message;
      }
    default:
      throw new Error('Invalid category');
  }
};

export {sendBurgerMenuItem, sendOtherMenuItem};
