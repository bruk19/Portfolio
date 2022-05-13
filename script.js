const menu = document.querySelector('#mob-mn');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-lin').forEach((n) => n.addEventListener('click', () => {
  menu.classList.remove('is-active');
  menuLinks.classList.remove('active');
}));

/*window popup ----------------------------------------*/

const p = document.querySelector('.pop');
const b = document.querySelector('.betn');
const c = document.querySelector('.btk');
const section = document.querySelector('.info');

function appe() {
  p.style.display = 'block';
  section.style.filter = 'blur(10px)';
}
b.addEventListener('click', appe);
c.addEventListener('click', appe);

function disappeP(t) {
  if (t.target.className === '.pop') {
    p.style.display = 'none';
    section.style.filter = 'blur(0px)';
  }
}


const projectDetails = [
  {
    titleOne: 'Keeping track of hundreds  of components website',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    imageOne: 'img/pop-big.png',
    descriptionOne: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    linklive: 'https://bruk19.github.io/Portfolio/',
    linkSource: 'git clone https://github.com/bruk19/Portfolio.git',
  },
];

const pros = [
  {
    titleTwo: 'Multi Post Stories',
    languagesTwo: ['html', 'Bootstrap', 'Ruby on Rails'],
    imageTwo: 'img/pop-big.png',
    descriptionTwo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkLives: 'https://bruk19.github.io/Portfolio/',
    linkSors: 'git clone https://github.com/bruk19/Portfolio.git',
  },
];

const box3 = document.querySelector('.betn');
box3.insertAdjacentHTML('afterend', `
<div class="pop">
  <h2 class="modal-mob"></h2>
  <h3 class="modall"></h3>
  <img class="x" src="img/pop.png" alt="popp">
  <ul class="pop-list">
    <li class="modal-liste"></li>
    <li class="modal-liste"></li>
    <li class="modal-liste"></li>
  </ul>
  <div class="ins-pop">
    <img class="imgs" src="img/pop-big.png" alt="big-image">
    <div class="iner-pop">
    <p class="p1"></p>
    <p class="pnew"></p>
  </div>
  <div class="iner-btn">
    <a href="#"><button class="button">see live    <i class="fa-solid fa-arrow-up-right-from-square"></i></i></button></a>
    <a href="#"><button class="button">see Source <i class="fa-brands fa-github"></i></button></a>
  </div>
</div>`);

/*
const box2 = document.querySelector('.btk');
box2.insertAdjacentHTML('afterend', `
<div class="pop">
  <h3 class="modall"></h3>
  <img class="immg" src="img/pop.png" alt="popp">
  <ul class="pop-list">
    <li class="modal-liste"></li>
    <li class="modal-liste"></li>
    <li class="modal-liste"></li>
  </ul>
  <div class="ins-pop">
    <img class="imgs" src="img/pop-big.png" alt="big-image">
    <div class="iner-pop">
    <p class="pnew"></p>
  </div>
  <div class="iner-btn">
    <a href="#"><button class="button">see live <i class="fa-solid fa-arrow-up-right-from-square"></i></i></button></a>
    <a href="#"><button class="button">see Source <i class="fa-brands fa-github"></i></button></a>
  </div>
</div>`);
*/

const SeeProjectButton = document.querySelectorAll('.betn');
SeeProjectButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('.pop');
    windowPop.style.display = 'block';
    const projectDetail = projectDetails[i];
    const proj = pros[i];
    const heading = document.querySelector('.modal-mob');
    heading.textContent = projectDetail.titleOne;
    const head2 = document.querySelector('.modall');
    head2.textContent = proj.titleTwo;
    const paragraph = document.querySelector('.p1');
    paragraph.textContent = projectDetail.descriptionOne;
    const para2 = document.querySelector('.pnew');
    para2.textContent = proj.descriptionTwo;
    const picture = document.querySelector('.imgs');
    picture.src = projectDetail.imageOne;
    const languag = document.querySelectorAll('.modal-liste');
    languag.forEach((li, s) => {
      li.textContent = projectDetail.languages[s];
    });
    const live = windowPop.querySelector('.button')[0];
    live.href = projectDetail.linklive;
    const source = windowPop.querySelector('.button')[1];
    source.href = projectDetail.linkSource;
  });
});


const SeeProjectB = document.querySelectorAll('.btk');
SeeProjectB.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('.pop');
    windowPop.style.display = 'block';
    const projectDetail = pros[i];
    const heading = document.querySelector('.modall');
    heading.textContent = projectDetail.titleTwo;
    const paragraph = document.querySelector('.pnew');
    paragraph.textContent = projectDetail.descriptionTwo;
    const picture = document.querySelector('.imgs');
    picture.src = projectDetail.imageTwo;
    const languag = document.querySelectorAll('.modal-liste');
    languag.forEach((li, s) => {
      li.textContent = projectDetail.languagesTwo[s];
    });
    const liv = windowPop.querySelector('.button');
    liv.href = projectDetail.linkLives;
    const sourc = windowPop.querySelector('.button');
    sourc.href = projectDetail.linkSors;
  });
});

const closeProjectButton = document.querySelector('.x');
closeProjectButton.addEventListener('click', () => {
  const windowPop = document.querySelector('.pop');
  windowPop.style.display = 'none';
});

