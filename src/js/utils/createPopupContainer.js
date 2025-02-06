export function createPopupContainer() {
  const container = document.createElement('div');

  container.classList.add('popup-container');

  container.addEventListener('click', () => {
    document.querySelector('.header__nav').classList.remove('show-nav');

    if (document.querySelector('.confirm-popup') !== null) {
      document.querySelector('.confirm-popup').classList.remove('show-popup');

      setTimeout(() => {
        document.querySelector('.confirm-popup') !== null ? document.querySelector('.confirm-popup').remove() : '';
        container.remove();
      }, 400);
    } else {
      container.remove();
    }
  });

  return container;
}
