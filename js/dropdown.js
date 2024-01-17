const displayBtn = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.nav-list');
const main = document.querySelector('main');
const body = document.querySelector('body');

displayBtn.addEventListener('click', toggleDisplay);
dropdownMenu.addEventListener('click', toggleDisplay);


function toggleDisplay() {
    if(dropdownMenu.classList.contains('display')){
        dropdownMenu.classList.remove('display')
        main.classList.remove('background') 
        body.removeEventListener('click', toggleDisplay) 
    } else {
        dropdownMenu.classList.add('display')
        main.classList.add('background')
        // Timeout för att det ska funka?????????????????????
        setTimeout(() => {
            body.addEventListener('click', toggleDisplay)
        }, 0.1);
    }
}