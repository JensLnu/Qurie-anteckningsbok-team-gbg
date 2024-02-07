/* 18. (7.6 points) Som användare vill jag kunna välja olika mallar för varje anteckning -- JENS & TOLEEN */

// [x] - lägga till valet av mall i toolbaren, dropdown med namn eller popout modul med previews?
// [x] - skapa 3-4 olika mallar med olika färgval
// [x] - applicera dem på vald note
// [x] - och spara valet i ls
// [x] - läs in från ls
// [] - göra så att tidigare vald mall blir vald för kommande ny skapad note, något i ls 'latest template'? (den gör de nu men sparas inte i ls)
// [x] - lägg till olika font till mallarna?
// [x] - lägg till olika boarders, boarder radius, shadow?

/* Bugs */

// [x] - css, LATER! de finns en "note-template.css" som är kopplad och färdig för att göra css i
// [] - ??
const noteTemplateDropdown = document.getElementById('note-template-btn');

import { createHtmlElem } from './createHtmlElem.js';
const rootColors = document.querySelector(':root');

// hit kommer man när man klickar på "Mallar" i toolbaren
// skapar de olika valen i dropdown menyn och lägger på eventListner när menyn ändras
export function createFunctionalityNoteTemplate() {
    // console.log('start createFunctionalityNoteTemplate');
    createHtmlElem('option', 'Standard', noteTemplateDropdown);
    createHtmlElem('option', 'Mall 1', noteTemplateDropdown);
    createHtmlElem('option', 'Mall 2', noteTemplateDropdown);
    createHtmlElem('option', 'Mall 3', noteTemplateDropdown);
    noteTemplateDropdown.addEventListener('change', (e) => {
        const selectedTemplate = e.target.value;
        chooseNoteTemplate(selectedTemplate);
    });
}

// läser av vald mall från dropdown menyn och skickar vidare mallens olika egenskaper
export function chooseNoteTemplate(selectedTemplate) {
    // console.log('start chooseNoteTemplate');
    let template;
    switch (selectedTemplate) {
        case 'Standard':
        case 'Mallar':
            template = {
                textColor: "black",
                headerColor: "black",
                bgColor: "white"
            }
            break;
        case 'Mall 1':
            template = {
                textColor: "#ffb703",
                headerColor: "#fb8500",
                bgColor: "#bb9457"
            }
            break;
        case 'Mall 2':
            template = {
                textColor: "#4895ef",
                headerColor: "#4361ee",
                bgColor: "#d9d9d9"
            }
            break;
        case 'Mall 3':
            template = {
                textColor: "#bfd200",
                headerColor: "#80b918",
                bgColor: "#ffccd5"
            }
            break;
        default: return;
    }
   // savedNote.updateNoteTemplate(selectedTemplate); // spara i class objektet och i ls
    applyNoteTemplate(template);
    // console.log('slut chooseNoteTemplate');
}

// applicerar vald mall
function applyNoteTemplate(template) {
    // console.log('start applyNoteTemplate')
    rootColors.style.setProperty("--note-text-color", template.textColor);
    rootColors.style.setProperty("--note-header-color", template.headerColor);
    rootColors.style.setProperty("--note-bg-color", template.bgColor);
}
