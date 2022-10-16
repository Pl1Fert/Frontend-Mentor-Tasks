let hidden = document.querySelector('.hidden');
let navButtons = document.querySelectorAll('.nav-button');
let openNavButton = document.querySelector('.open-nav-button');
let closeNavButton = document.querySelector('.close-nav-button');
let nav = document.querySelector('.header__inner');
let body = document.querySelector('body');

for(let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', function() {
        this.classList.toggle('.active-nav-button');
        

    if (openNavButton.style.display == 'none') {
        hidden.style.display = 'none';
        nav.style.display = 'none';
        openNavButton.style.display = 'block';
        closeNavButton.style.display = 'none';
        body.style.position = 'static';
    } else {
        hidden.style.display = 'block';
        nav.style.display = 'block';
        openNavButton.style.display = 'none';
        closeNavButton.style.display = 'block';
        body.style.position = 'fixed';
    }
    })
}