displayBtn.addEventListener('click', toggleDisplay);
dropdownMenu.addEventListener('click', toggleDisplay);

// Display dropdown menu on click
// Add eventlistener to the body after delay to make it available to toggle the menu when clicking outside
// When dropdown is active z-index on main is changed to be able to se the menu
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