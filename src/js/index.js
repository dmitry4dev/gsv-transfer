import { createPopupContainer } from './utils/createPopupContainer.js';

document.addEventListener('DOMContentLoaded', () => {
  const date = new Date().toLocaleDateString();
  const popupContainer = createPopupContainer();
  const headerNav = document.querySelector('.header__nav');
  const menuBtn = document.querySelector('.burger-icon');
  const menuCloseBtn = document.querySelector('.header-nav_close-btn');
  const anchorLinks = document.querySelectorAll('.header-nav-list__link');
  const orderBtn = document.querySelector('.hero__link');
  const langList = document.querySelectorAll('.lang-list__link');
  const form = document.querySelector('.contact__form');
  const dateInput = form.date;
  const formErrors = document.querySelector('.form__errors');
  const checkbox = document.querySelector('.checkbox-input');

  langList.forEach(link => link.classList.remove('active-lang'));

  langList.forEach(link => {
    if (link.href.includes('#')) {
      link.classList.add('active-lang');
    }
  });

  menuBtn !== null ? menuBtn.addEventListener('click', () => {
    document.body.prepend(popupContainer);
    headerNav.classList.toggle('show-nav');
  }) : '';

  menuCloseBtn !== null ? menuCloseBtn.addEventListener('click', () => {
    headerNav.classList.remove('show-nav');
    popupContainer.remove();
  }) : '';

  anchorLinks.forEach(link => {
    if (link.tagName === 'A' && link.getAttribute('href').includes('#')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const elemHash = link.getAttribute('href').slice(1);
        const scrollTarget = document.getElementById(elemHash);

        scrollTarget.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });

        if (headerNav.classList.contains('show-nav')) {
          headerNav.classList.remove('show-nav');
          popupContainer.remove();
        }
      });
    }
  });

  orderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const elemHash = orderBtn.getAttribute('href').slice(1);
    const scrollTarget = document.getElementById(elemHash);

    scrollTarget.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  dateInput.addEventListener('focus', () => {
    dateInput.placeholder = '';
    dateInput.value = new Date().toLocaleDateString().split('.').reverse().join('-');
    dateInput.style.color = '#252424';
    dateInput.style.fontSize = '18px';
  });

  dateInput.addEventListener('blur', () => {
    dateInput.value = dateInput.value;
  });
});


