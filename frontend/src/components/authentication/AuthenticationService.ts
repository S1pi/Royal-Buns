import {
  InternalServerErrorResponse,
  RegisterResponse,
  SuccesfulAuthenticationResponse,
} from '../../types/authentication';
import {ReservationInfo} from '../../types/reservation';
import {LoginError, User, UserProfilePageData} from '../../types/user';
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
    const response: RegisterResponse = await fetchData('/auth/register', options);
    console.log(response);
    if (response.code === 201) {
      alert('Rekisteröinti onnistui! Voit nyt kirjautua sisään.');
      router();
    } else {
      alert('Rekisteröinti epäonnistui: ' + response.message);
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
      history.replaceState({}, '', '/login');
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
  // Authentication check for debugging
  // console.log('Authentication: ', authentication);
  if (authentication.message === 'token ok') {
    return true;
  } else {
    return false;
  }
};

// Type for getProfilePageData is Promise<UserProfilePageData> check type how it need to return
// from user.ts
const getProfilePageData = async (): Promise<UserProfilePageData> => {
  console.log('Getting profile page data');
  const token = localStorage.getItem('user-token');

  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const userProfileData: SuccesfulAuthenticationResponse = await fetchData(
    '/user/me',
    options
  );
  const userReservations: ReservationInfo[] = await fetchData(
    '/reservations/user/all',
    options
  );

  // Create user profile page data from user and reservation data
  const profilePageData: UserProfilePageData = {
    user_info: {
      id: userProfileData.user.id,
      username: userProfileData.user.username,
      email: userProfileData.user.email,
      phonenumber: userProfileData.user.phonenumber,
      user_type: userProfileData.user.user_type,
    },
    reservations: userReservations,
  };

  console.log('Profile page data check from AuthService: ', profilePageData);
  return profilePageData;
};

export {
  sendRegisterationData,
  sendLoginData,
  checkUserAuthentication,
  getProfilePageData,
};
