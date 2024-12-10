// Only a prototype, not used in the projects

const profileTranslations = {
  FI: {
    Heading: 'Profiili',
    Name: 'Nimi',
    Email: 'Sähköposti',
    phonenumber: 'Puhelinnumero',
    favourite_burger: 'Lempihampurilainen',
  },
  EN: {
    Heading: 'Profile',
    Name: 'Name',
    Email: 'Email',
    phonenumber: 'Phone number',
    favourite_burger: 'Favourite burger',
  },
};

const mainMenuTranslations = {
  FI: {
    Heading: 'Päävalikko',
    Admin: 'Admin',
    Profile: 'Profiili',
    Logout: 'Kirjaudu ulos',
  },
  EN: {
    Heading: 'Main menu',
    Admin: 'Admin',
    Profile: 'Profile',
    Logout: 'Logout',
  },
};

const handleTranslations = (language: 'FI' | 'EN', component: string) => {
  switch (component) {
    case 'profile':
      return profileTranslations[language];
    case 'mainMenu':
      return mainMenuTranslations[language];
    default:
      return {
        Heading: 'Translation not found',
        Name: 'Translation not found',
        Email: 'Translation not found',
        phonenumber: 'Translation not found',
        favourite_burger: 'Translation not found',
      };
  }
};

export default handleTranslations;
