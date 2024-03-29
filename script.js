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

const projectDetails = [
  {
    title: 'Keeping track of hundreds  of components website',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    image: 'img/pop-big.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    linklive: 'https://bruk19.github.io/Portfolio/',
    linkSource: 'https://github.com/bruk19/Portfolio',
    tittle: 'Multi Post Stories',
    descripton: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
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
    <a href="https://bruk19.github.io/Portfolio/"><button class="button">see live    <i class="fa-solid fa-arrow-up-right-from-square"></i></i></button></a>
    <a href="https://github.com/bruk19/Portfolio"><button class="button">see Source <i class="fa-brands fa-github"></i></button></a>
  </div>
</div>`);

const SeeProjectButton = document.querySelectorAll('.betn');
SeeProjectButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('.pop');
    windowPop.style.display = 'block';
    const projectDetail = projectDetails[i];
    const heading = document.querySelector('.modal-mob');
    heading.textContent = projectDetail.title;
    const head2 = document.querySelector('.modall');
    head2.textContent = projectDetail.tittle;
    const paragraph = document.querySelector('.p1');
    paragraph.textContent = projectDetail.description;
    const para2 = document.querySelector('.pnew');
    para2.textContent = projectDetail.descripton;
    const picture = document.querySelector('.imgs');
    picture.src = projectDetail.image;
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
    const projectDetail = projectDetails[i];
    const heading = document.querySelector('.modall');
    heading.textContent = projectDetail.tittle;
    const paragraph = document.querySelector('.pnew');
    paragraph.textContent = projectDetail.descripton;
    const picture = document.querySelector('.imgs');
    picture.src = projectDetail.image;
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

const emailAddress = document.getElementById('email');
const validatorMessage = document.getElementById('validator-message');
const btn1 = document.querySelector('.cont-btn');
const form = document.querySelector('#message');

btn1.addEventListener('click', (e) => {
  if (emailAddress.value !== emailAddress.value.toLowerCase()) {
    validatorMessage.textContent = 'please the email have to be in lowercase';
    e.preventDefault();
  } else {
    validatorMessage.textContent = '';
    form.submit();
  }
});

const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const formText = document.querySelector('#t1');

function storeData() {
  const formData = {
    name: formName.value,
    email: formEmail.value,
    msg: formText.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

function loadData() {
  if (!localStorage.getItem('formData')) {
    storeData();
  }

  const localData = JSON.parse(localStorage.getItem('formData'));
  formName.setAttribute('value', localData.name);
  formEmail.setAttribute('value', localData.email);
  formText.innerText = localData.msg;
}
loadData();
formName.addEventListener('change', storeData);
formEmail.addEventListener('change', storeData);
formText.addEventListener('change', storeData);
