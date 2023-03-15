let dialogModal = document.querySelector('.dialogModal');
let iconBars = document.querySelector('.fa-bars');

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

