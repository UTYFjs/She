'use strict'

  /* ------*/

  const burgerIcon = document.querySelector('.burger');
  const menuBody = document.querySelector('.menu-body');
  const shadow=document.querySelector('.shadow');
  const logo=document.querySelector('.logo');
  const header=document.querySelector('.header');
  

  burgerIcon.addEventListener('click', () => {
      burgerIcon.classList.toggle('active');
      document.body.classList.toggle('lock');
      shadow.classList.toggle('active');
      menuBody.classList.toggle('menu-body-active');
      logo.classList.toggle('logo-active');
  });

  const exitMenu = () => {
    burgerIcon.classList.remove('active');
    document.body.classList.remove('lock');
    shadow.classList.remove('active');
    menuBody.classList.remove('menu-body-active');
    logo.classList.remove('logo-active');
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
 
/*------ carousel*/
const petsInfo = [
  {
    "id": "1",
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
    {
      "id": "2",
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "3",
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "id": "4",
      "name": "Sophia",
      "img": "../../assets/images/pets-Sophie.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "id": "5",
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "id": "6",
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    },
    {
      "id": "7",
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    
    
    {
      "id": "8",
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    
  ];

const buttonLeft = document.querySelector('.button-arrow-left');
const buttonRight = document.querySelector('.button-arrow-right');
const carousel = document.querySelector('.carousel');
const itemLeft = document.querySelector('#carousel-left');
const itemRight = document.querySelector('#carousel-right');
const itemActive = document.querySelector('#carousel-active');


/// цикл не повторяющийся

function getRandomArr(){
  let randomArr=[];
  
  for(let i=0; randomArr.length<3;i++){
    let a= Math.floor(Math.random()*8);
    if(!(randomArr.includes(a, 0))){randomArr.unshift(a); // массив работает
    }
  }

  return randomArr;
}

function createCardTemplate2(i){
  const card = document.createElement('div'); // создаем элемент
  card.classList.add('card'); // add class
  card.classList.add('active-card');
  card.setAttribute('data-id', petsInfo[i]['id']);
  const imgPet = `<img class="png" src="${petsInfo[i]['img']}" alt="${petsInfo[i]['type']}">`;
  const namePet = `<p class="card-title">${petsInfo[i]['name']}</p>`;
  const buttonPet = `<div class="wrapbutton"><button class="button-card" >Learn more</button></div>`;
  card.insertAdjacentHTML('beforeend', imgPet);
  card.insertAdjacentHTML('beforeend', namePet);
  card.insertAdjacentHTML('beforeend', buttonPet);
  return card;
}

console.log('добрый человек, не вали слишком сильно, сам знаю что не идеал работа, но я до марта месяца вообще не знал даже что такое css :)');


const moveRight = () => { 
  carousel.classList.add('move-right');
  carousel.removeEventListener('click', moveRight);
  carousel.removeEventListener('click', moveLeft);

}

const moveLeft = () => { 
  carousel.classList.add('move-left');
  carousel.removeEventListener('click', moveRight);
  carousel.removeEventListener('click', moveLeft);

}

buttonLeft.addEventListener('click', moveLeft);
buttonRight.addEventListener('click', moveRight);

carousel.addEventListener('animationend', animationEvent=> {
  if(animationEvent.animationName === 'move-left-carousel'){
    carousel.classList.remove('move-left');
    const RightItem=itemRight.innerHTML;
    document.querySelector('#carousel-active').innerHTML = RightItem;
    itemRight.innerHTML = "";    // delete elements from itemRight 
    let randomArr = getRandomArr();
    for(let i=0; i<3; i++){
      let a = randomArr[i];
      const card = createCardTemplate2(a);
      itemRight.appendChild(card);
    }
        
  } else{
    carousel.classList.remove('move-right');
    const LeftItem=itemLeft.innerHTML;
    document.querySelector('#carousel-active').innerHTML = LeftItem;
    itemLeft.innerHTML = "";
    let randomArr = getRandomArr();
    for(let i=0; i<3; i++){
      let a = randomArr[i];
      const card = createCardTemplate2(a);
      itemLeft.appendChild(card);
    }
  }

                                   ///
})





//  --------------------popup

//popupFunc()-------

const cardOpen = document.querySelectorAll('.card');
let popup = document.querySelector('.popup');

const popupShadow = document.querySelector('.popup-shadow');
let popupBody = document.querySelector('.popup-body');




const exitPopup = () => {
  document.body.classList.remove('lock');
  popup.classList.remove('popup-active');
  popupShadow.classList.remove('popup-shadow-active');
};

cardOpen.forEach((item, i) => {
  item.addEventListener('click', f => {

    setPopupContent(item);
    console.log(popup);
    popup.classList.add('popup-active');
    document.body.classList.add('lock');
    popupShadow.classList.add('popup-shadow-active');
    const popupClose = document.querySelector('.popup-close');
popupClose.addEventListener('click', exitPopup);
popupShadow.addEventListener('click', exitPopup);
  });
});
const popupClose = document.querySelector('.popup-close');

popupClose.addEventListener('click', exitPopup);
popupShadow.addEventListener('click', exitPopup);

const popupShadowActive = document.querySelector('.popup-shadow-active');
const hoverCloseOn = () => {
  popupClose.classList.add('popup-close-hover');
}
const hoverCloseOff = () => {
  popupClose.classList.remove('popup-close-hover');
}
popupShadowActive.addEventListener("mouseover", hoverCloseOn);
popupShadowActive.addEventListener('mouseout', hoverCloseOff);



function setPopupContent (item) {
  let i = (item.dataset.id-1);
  popupBody.innerHTML = "";
  const newPopup = `
  <div class="popup-close"></div>
  <div class="popup-image"><img src="${petsInfo[i]['img']}" alt="${petsInfo[i]['type']}"></div>
  <div class="popup-info">
  <h3 class="popup-title" data-popup="name">${petsInfo[i]['name']}</h3>
  <div class="popup-type-container">
            <div class="popup-type" data-popup="type">${petsInfo[i]['type']}</div>
      <div class="popup-type"> - </div>
      <div class="popup-type" data-popup="breed">${petsInfo[i]['breed']}</div>
        </div>        
  <div class="popup-text" data-popup="description">${petsInfo[i]['description']}</div>
  <ul class="popup-list">
    <li class="popup-link">Age: <span data-popup="age">${petsInfo[i]['age']}</span></li>
    <li class="popup-link">Inoculations: <span data-popup="inoculations">${petsInfo[i]['inoculations']}</span></li>
    <li class="popup-link">Diseases: <span data-popup="diseases">${petsInfo[i]['diseases']}</span></li>
    <li class="popup-link">Parasites: <span data-popup="parasites">${petsInfo[i]['parasites']}</span></li>
  </ul>
  </div>`
  
popupBody.insertAdjacentHTML('beforeend', newPopup);


}




