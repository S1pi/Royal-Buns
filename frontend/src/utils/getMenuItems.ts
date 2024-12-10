import {AllBurgersResponse} from '../types/menu';
import fetchData from './fetchData';

const getAllBurgers = async () => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response: AllBurgersResponse = await fetchData('/menu/burgers', options);

  console.log('Burgers: ', response);

  if (!response) {
    throw new Error('Failed to fetch burgers');
  }

  return response;
};

const getBurgersByDay = async (day: string) => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response: AllBurgersResponse = await fetchData(`/menu/burgers/${day}`, options);

  console.log('Burgers: ', response);

  if (!response) {
    throw new Error('Failed to fetch burgers');
  }

  return response;
};

export {getAllBurgers, getBurgersByDay};
