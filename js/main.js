const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

//day1

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginForm = document.querySelector('#logInForm');
console.dir(modalAuth);

let login = '';

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
}


function authorized() {
  console.log('Authorized');
}

function notAuthorized() {
  console.log('Not authorized');

  function logIn(){
    console.log('Login');

  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click',toggleModalAuth);
  loginForm.addEventListener('submit', logIn);
}

if(login){
  authorized();
}else{
  notAuthorized();
}
