import {LoginError, User} from '../../types/user';
import fetchData from '../../utils/fetchData';
import {router} from '../navigation/router';

const sendRegisterationData = async (data: Record<string, string>) => {
  try {
    console.log(data);

    const options: RequestInit = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetchData('/auth/register', options);
    console.log(response);
  } catch (err) {
    console.error('Virhe käsitellessä formia: ', err);
  }
};

const sendLoginData = async (data: Record<string, string>) => {
  try {
    console.log(data);

    const options: RequestInit = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response: User | LoginError = await fetchData('/auth/login', options);

    console.log('Response:', response);

    if ('username' in response) {
      console.log('Token: ', response.token);
      localStorage.setItem('user-token', response.token!);
      // After login pushes user to mainpage
      history.replaceState({}, '', '/');
      history.pushState({}, '', '/');
      router();
    } else {
      // Simple unauthorized
      alert(`${response.status}: ${response.errorText} --> ${response.message}`);
    }
  } catch (err) {
    console.error('Virhe käsitellessä formia: ', err);
  }
};

export {sendRegisterationData, sendLoginData};
