import { createFunctionalityNoteTemplate } from "./moduls/note-template.js"

document.getElementById('logo-container').addEventListener('click', () => {
    console.log('connection');
    const textArea = document.getElementById('text-area');
    textArea.innerHTML = '';

    textArea.innerHTML = 'STARTSIDA'

    gtag('event', 'home-btn-click', {
        'event-category': 'click',
        'event-label': 'Någon stackare har försökt ta sig tillbaka till startsidan på det här viset',
        'event-author' : 'Emil :-)'
    })
})

window.addEventListener('DOMContentLoaded', () => {
    createFunctionalityNoteTemplate(); // aktiverar knappen för att välja antecknings mall
});