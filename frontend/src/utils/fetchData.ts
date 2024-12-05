const backendUrl = 'http://127.0.0.1:3000/api';

const fetchData = async <T>(url: string, options: RequestInit): Promise<T> => {
  console.log('Checking fetch');
  const response = await fetch(backendUrl + url, options);
  if (!response.ok) {
    if (response.statusText === 'Unauthorized') {
      return {
        status: response.status,
        errorText: response.statusText,
        message: 'Kirjautuminen epäonnistui: Väärä salasana tai käyttäjätunnus',
      } as T;
    } else if (response.statusText === 'Forbidden') {
      return {
        status: response.status,
        errorText: response.statusText,
        message: 'Kirjautuminen epäonnistui: Ei oikeuksia',
      } as T;
    } else if (response.statusText === 'Not Found') {
      return {
        status: response.status,
        errorText: response.statusText,
        message: 'Resurssia ei löytynyt',
      } as T;
    }
    console.error('Jokin meni vikaan backend fetchissä: ', response, typeof response);
    throw new Error('Error!!');
  }

  console.log(response);
  return await response.json();
};

export default fetchData;
