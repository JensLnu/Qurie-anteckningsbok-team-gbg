displayBtn.addEventListener('click', toggleDisplay);
dropdownMenu.addEventListener('click', toggleDisplay);

const showNotes = document.querySelector('.show-notes');
const sidebar = document.getElementById('sidebar');
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
showNotes.addEventListener('click', function () {
    rootColors.style.setProperty('--toggle-sidebar', 'block');
    sidebar.style.zIndex = 999;
});

sidebar.addEventListener('focusout', function () {
    if (window.innerWidth < 700) {
    rootColors.style.setProperty('--toggle-sidebar', 'none');
    }
})