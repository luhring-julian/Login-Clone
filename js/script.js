//
// Scripts for Login page
//

window.onload = function(){
    //Setting constants
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    //Functions
    
    //Switch Login form to Register form
    registerLink.addEventListener('click', ()=>{
        wrapper.classList.add('active');
    })

    //Switch Register form to Login form
    loginLink.addEventListener('click', ()=>{
        wrapper.classList.remove('active');
    })

    //Click on Login Button
    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
    })

    //Close popup
    iconClose.addEventListener('click', ()=>{
        wrapper.classList.remove('active-popup');
    })
}