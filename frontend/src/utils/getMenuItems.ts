import {AllBurgersResponse, OtherMenuItemsResponse} from '../types/menu';
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

const getAllDrinks = async () => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response: OtherMenuItemsResponse = await fetchData('/menu/drinks', options);

  console.log('Drinks: ', response);

  if (!response) {
    throw new Error('Failed to fetch drinks');
  }

  return response;
};

const getAllSliders = async () => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response: OtherMenuItemsResponse = await fetchData('/menu/sliders', options);

  console.log('Sliders: ', response);

  if (!response) {
    throw new Error('Failed to fetch sliders');
  }

  return response;
};

const getAllSides = async () => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response: OtherMenuItemsResponse = await fetchData('/menu/sides', options);

  console.log('Sides: ', response);

  if (!response) {
    throw new Error('Failed to fetch sides');
  }

  return response;
};

export {getAllBurgers, getBurgersByDay, getAllDrinks, getAllSliders, getAllSides};
