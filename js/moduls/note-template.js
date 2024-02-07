/* 18. (7.6 points) Som användare vill jag kunna välja olika mallar för varje anteckning -- JENS & TOLEEN */

// [] - lägga till valet av mall i toolbaren, dropdown med namn eller popout modul med previews?
// [] - skapa 3-4 olika mallar
// [] - applicera dem på vald note, och spara valet i ls
// [] - göra så att tidigare vald mall blir vald för kommande ny skapad note, något i ls 'latest template'?

/* Bugs */

// [] - css, LATER! de finns en "note-template.css" som är kopplad och färdig för att göra css i
// [] - ??

import { createHtmlElem } from './createHtmlElem.js';

// hit kommer man när man klickar på "Mallar" i toolbaren
// skapar de olika valen i dropdown menyn och lägger på eventListner när menyn ändras
export function createFunctionalityNoteTemplate() {
    console.log('start createFunctionalityNoteTemplate');
    createHtmlElem('option', 'Mall 1', noteTemplateDropdown);
    createHtmlElem('option', 'Mall 2', noteTemplateDropdown);
    createHtmlElem('option', 'Mall 3', noteTemplateDropdown);
    noteTemplateDropdown.addEventListener('change', (e) => {
        chooseNoteTemplate(e);
    });
}

// läser av vald mall från dropdown menyn och skickar vidare mallens olika egenskaper
function chooseNoteTemplate(e) {
    console.log('start applyNoteTemplate');
    const selectedTemplate = e.target.value;
    switch (selectedTemplate) {
        case 'Mall 1':
            const template1 = {
                textColor: "#ffb703",
                headerColor: "#fb8500",
                bgColor: "#bb9457"
            }
            applyNoteTemplate(template1);
            break;
        case 'Mall 2':
            const template2 = {
                textColor: "#4895ef",
                headerColor: "#4361ee",
                bgColor: "#d9d9d9"
            }
            applyNoteTemplate(template2);
            break;
        case 'Mall 3':
            const template3 = {
                textColor: "#bfd200",
                headerColor: "#80b918",
                bgColor: "#ffccd5"
            }
            applyNoteTemplate(template3);
            break;
    }
}

function applyNoteTemplate(template) {
    console.log('start applyNoteTemplate')
    
}