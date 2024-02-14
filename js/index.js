// Om displayFirstMessage ligger i en annan funktion får vi göra denna till en modul och importera/exportera funktionen
import { createFunctionalityNoteTemplate } from "./moduls/note-template.js"

// Fetch content from JSON
// Eventlistener to display first message when clicking Queri-Icon
(async function getFirstVisit() {
    let response = await fetch('./json/firstVisit.json');
    if (response.ok) {
        response = await response.json();
        displayFirstMessage(response);

        // Denna går att flytta ut för läsbarhetens skull, lägg eventlistenern på egen hand och kalla på displayFirstMessage(?)
        document.getElementById('logo-container').addEventListener('click', () => {
            const textArea = document.getElementById('text-area');
            textArea.innerHTML = `
                <div id="first-div" spellcheck = 'false' contenteditable = 'false' >
                    <h1 id = "first-rubrik">Välkommen till Qurie</h1>
                    <p>${response.paraText}</p>
                    <div class = "info-div"><h3 class = "header-info">Navigera</h3><p class = "p-info">${response.search}</p></div>
                    <div class = "info-div"><h3 class = "header-info">Favorisera</h3><p class = "p-info">${response.favorite}</p></div>
                    <div class = "info-div"><h3 class = "header-info">Analysera</h3><p class = "p-info">${response.analyse}</p></div>
                    <div class = "info-div"><h3 class = "header-info">Konfigurera</h3><p class = "p-info">${response.settings}</p></div>        
                </div > `;
                // Emils gtag
                gtag('event', 'home-btn-click', {
                    'event-category': 'click',
                    'event-label': 'Någon stackare har försökt ta sig tillbaka till startsidan på det här viset',
                    'event-author' : 'Emil :-)'
                })
        })} else {
        console.log('Error:', response.status);
    }
})();

window.addEventListener('DOMContentLoaded', () => {
    createFunctionalityNoteTemplate(); // aktiverar knappen för att välja antecknings mall
});