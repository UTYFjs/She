'use strict'

const burgerIcon = document.querySelector('.burger');
  const menuBody = document.querySelector('.menu-body');
  const shadow=document.querySelector('.shadow');
  const logo=document.querySelector('.logo');
  const header=document.querySelector('.header');
  const h1 = document.querySelector('h1');
  const logoSubtitle = document.querySelector('.subtitle');

  

  burgerIcon.addEventListener('click', () => {
      burgerIcon.classList.toggle('active');
      document.body.classList.toggle('lock');
      shadow.classList.toggle('shadow-active');
      menuBody.classList.toggle('menu-body-active');
      logo.classList.toggle('logo-active');
      h1.classList.toggle('h1-active');
      logoSubtitle.classList.toggle('subtitle-active');
  });

  const exitMenu = () => {
    burgerIcon.classList.remove('active');
    document.body.classList.remove('lock');
    shadow.classList.remove('shadow-active');
    menuBody.classList.remove('menu-body-active');
    logo.classList.remove('logo-active');
    h1.classList.remove('h1-active');
    logoSubtitle.classList.remove('subtitle-active');
  };
 shadow.addEventListener('click', exitMenu);
 
 const menuAllLink = document.querySelectorAll('.nav-link');
  
for(let select of menuAllLink){
      select.addEventListener('click', () => {
        if( menuBody.classList.contains('menu-body-active')) {
            exitMenu();
        }
      }
      );
      
  };