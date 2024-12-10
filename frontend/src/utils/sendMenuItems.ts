import {Description, SuccesfullBurgerPost} from '../types/menu';
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
  description: Description
) => {
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id, diets, price, name, description}),
  };

  const response: Response = await fetchData('/menu/other', options);

  console.log('Other: ', response);

  if (!response.ok) {
    throw new Error('Failed to send other menu item');
  }
};

export {sendBurgerMenuItem, sendOtherMenuItem};
