displayBtn.addEventListener('click', toggleDisplay);
dropdownMenu.addEventListener('click', toggleDisplay);

// Eventlistener för att visa mobil-dropdown meny
// Kolla om menyn är aktiv
// Eventlistener på bodyn behövde timeout för att fungera, gör det möjligt att klicka bort menyn när man klickar utanför. (Hade gått att lösa med e.client och  dropdownens dimensioner)
function toggleDisplay() {
    if(dropdownMenu.classList.contains('display')){
        dropdownMenu.classList.remove('display')
        main.classList.remove('background') 
        toolbar.classList.remove('background')
        body.removeEventListener('click', toggleDisplay) 
    } else {
        dropdownMenu.classList.add('display')
        main.classList.add('background')
        toolbar.classList.add('background')
        // Timeout för att det ska funka?????????????????????
        setTimeout(() => {
            body.addEventListener('click', toggleDisplay)
        }, 0.1);
    }
}