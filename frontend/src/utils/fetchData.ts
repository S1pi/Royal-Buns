// const backendUrl = 'http://127.0.0.1:3000/api'; // Development backend url
const backendUrl = '/api'; // Deployment backend url needs this cuz runs on same server

const fetchData = async <T>(url: string, options: RequestInit): Promise<T> => {
  console.log('Checking fetch...');
  try {
    const response = await fetch(backendUrl + url, options);
    if (!response.ok) {
      if (response.statusText === 'Unauthorized') {
        return {
          status: response.status,
          errorText: response.statusText,
          message: 'Login failed: Username or password is incorrect',
        } as T;
      } else if (response.statusText === 'Forbidden') {
        return {
          status: response.status,
          errorText: response.statusText,
          message: 'Login failed: User is not authorized',
        } as T;
      } else if (response.statusText === 'Not Found') {
        return {
          status: response.status,
          errorText: response.statusText,
          message: 'Resource not found',
        } as T;
      } else if (response.status === 409) {
        return {
          status: response.status,
          errorText: response.statusText,
          message: 'Username is already in use',
        } as T;
      }
      console.error('Jokin meni vikaan backend fetchissä: ', response, typeof response);
      throw new Error('Error!!');
    }
    return await response.json();
  } catch (err) {
    console.error('Error in fetch: ', err);
    throw new Error('Error in fetch');
  }
};

// Log response for debugging
// console.log(response);

export default fetchData;
