const createProfileView = () => {
  const profileViewContainer = document.createElement('div');
  const heading = document.createElement('h1');
  heading.textContent = 'Profile';
  profileViewContainer.appendChild(heading);

  return profileViewContainer;
};
export {createProfileView};
