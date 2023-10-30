export const changeFavorite = () => {
  const inputsFavorites = [...document.getElementsByClassName('input-favorite')];
  const favoritesBooks = [...document.getElementsByClassName('favorite')];

  const defaultFavorite = 'winter';
  const delayTimeDisplay = 500;
  const timerActivationAnimation = 100;

  const showDefaultFavorite = () => inputsFavorites.forEach(item => {
    favoritesBooks.forEach(item => {
      if(item.className.includes(defaultFavorite)) {
        item.style.display = 'flex';
        item.classList.add('active-season');
      };
    });

    if (item.id === defaultFavorite) {
      item.checked = true;
      item.labels[0].classList.add('active-input');
    };
  });

  showDefaultFavorite();

  const changeFavoriteSeason = (item) => {
    const season = item.target.defaultValue;
    item.target.checked = true;
    item.target.labels[0].classList.add('active-input');

    favoritesBooks.forEach(item => {
      if(item.className.includes(season)) {
        setTimeout(() => {
          item.style.display = 'flex';
          setTimeout(() => {
            item.classList.add('active-season');
          }, timerActivationAnimation)
        }, delayTimeDisplay);
      } else {
        item.classList.remove('active-season');
        setTimeout(() => {
          item.style.display = 'none';
        }, delayTimeDisplay);
      };
    });

    inputsFavorites.forEach(item => {
      if (item.id !== season) {
        item.checked = false;
        item.labels[0].classList.remove('active-input');
      };
    });
  };

  inputsFavorites.forEach(item => {
    item.addEventListener('click', (item) => {
      switch (item.target.id) {
        case 'winter':
          changeFavoriteSeason(item);
          break;
        case 'spring':
          changeFavoriteSeason(item);
          break;
        case 'summer':
          changeFavoriteSeason(item);
          break;
        case 'autumn':
          changeFavoriteSeason(item);
          break;
      };
    });
  });
};