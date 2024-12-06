const createProfileView = () => {
  // Container for profile information
  const profileViewContainer = document.createElement('div');
  profileViewContainer.classList.add(
    'flex',
    'justify-center',
    'items-center',
    'flex-col',
    'bg-light-brown',
    'w-1/2'
  );
  const heading = document.createElement('h1');
  heading.textContent = 'Profile';
  profileViewContainer.appendChild(heading);

  return profileViewContainer;
};
export {createProfileView};
