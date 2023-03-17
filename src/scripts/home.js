let dialogModal = document.querySelector('.dialogModal');
let iconBars = document.querySelector('.fa-bars');
let liLogin = document.querySelector('#liLogin');

iconBars.addEventListener('click', ()=>{
    console.log('clicou');
    dialogModal.showModal();
    let btnClose = document.querySelector('.btnClose');
    btnClose.addEventListener('click', ()=>{
        dialogModal.close();
    })
    let pHome = document.querySelector('.pHome');
    pHome.addEventListener('click', ()=>{
        window.location.replace('../../index.html');
    })
})

liLogin.addEventListener('click', ()=>{
    window.location.replace('./login.html');
})

//********************** SLIDES **********************/
let cont=0;
let divSlides = document.querySelector('.divSlides');
let divBefore = document.querySelector('.divBefore');
let divAfter = document.querySelector('.divAfter');

setInterval(()=>{
    if(cont>300){
        cont=0;
    }
    divSlides.style.margin=`0 0 0 -${cont}%`;
    cont=cont+100;
},6000);

divBefore.addEventListener('click', ()=>{
    if(cont==0){
        cont=300;
        divSlides.style.margin=`0 0 0 -${cont}%`;
    }
    else{
        cont=cont-100;
        divSlides.style.margin=`0 0 0 -${cont}%`;
    }
})

divAfter.addEventListener('click', ()=>{
    if(cont==300){
        cont=0;
        divSlides.style.margin=`0 0 0 -${cont}%`;
    }
    else{
        cont=cont+100;
        divSlides.style.margin=`0 0 0 -${cont}%`;
    }
})
//****************************************************/