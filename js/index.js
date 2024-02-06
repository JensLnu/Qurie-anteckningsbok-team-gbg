import { chooseNoteTemplate } from "./moduls/note-template.js"

document.getElementById('logo-container').addEventListener('click', () => {
    gtag('event', 'home-btn-click', {
        'event-category': 'click',
        'event-label': 'Någon stackare har försökt ta sig tillbaka till startsidan på det här viset',
        'event-author' : 'Emil :-)'
    })
})

// förslag på att ha en main.js fil som läser in standard funktionalitet?

noteTemplateBtn.addEventListener('click', chooseNoteTemplate); // aktiverar knappen för att välja antecknings mall