import {SuccesfulAuthenticationResponse} from '../../types/authentication';
import {LoginError, User} from '../../types/user';
import fetchData from '../../utils/fetchData';
import {router} from '../navigation/router';

const sendRegisterationData = async (data: Record<string, string>) => {
  try {
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    // Implement response handling?
    const response = await fetchData('/auth/register', options);
    // console.log(response);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(
        'Virhe käsitellessä formia: ',
        'stack: ' + err.stack,
        'message: ' + err.message,
        'name: ' + err.name
      );
      if (err.message === 'Failed to fetch') {
        alert('Rekisteröinti epäonnistui: palvelin ei vastaa');
      }
    }
  }
};

const sendLoginData = async (data: Record<string, string>) => {
  try {
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response: User | LoginError = await fetchData('/auth/login', options);

    console.log('Response:', response);

    if ('username' in response && 'email' in response) {
      // console.log('Token: ', response.token);
      // Sets token to localStorage
      localStorage.setItem('user-token', response.token!);

      // After login pushes user to mainpage
      history.replaceState({}, '', '/');
      history.pushState({}, '', '/');
      router();
    } else {
      // Simple unauthorized
      alert(`${response.status}: ${response.errorText} --> ${response.message}`);
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(
        'Virhe käsitellessä formia: ',
        'stack: ' + err.stack,
        'message: ' + err.message,
        'name: ' + err.name
      );
      if (err.message === 'Failed to fetch') {
        alert('Kirajutuminen epäonnistui: palvelin ei vastaa');
      }
    } else {
      console.error('Unknown error: ', err);
      alert('Unknown error: ' + err);
    }
  }
};

const checkUserAuthentication = async (): Promise<Boolean> => {
  console.log('Checking user authentication');
  const token = localStorage.getItem('user-token');
  // Token check for debugging
  // console.log('Token: ', token);
  if (!token) {
    return false; // No token
  }
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const authentication: SuccesfulAuthenticationResponse = await fetchData(
    '/user/me',
    options
  );
  // console.log('Authentication: ', authentication);
  if (authentication.message === 'token ok') {
    return true;
  } else {
    return false;
  }
};

export {sendRegisterationData, sendLoginData, checkUserAuthentication};
