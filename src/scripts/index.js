let divHome = document.querySelector('.divHome');
let divLogin = document.querySelector('.divLogin');

divHome.addEventListener('click', ()=>{
    window.location.replace('./src/pages/home.html');
})
divLogin.addEventListener('click', ()=>{
    window.location.replace('./src/pages/login.html');
})