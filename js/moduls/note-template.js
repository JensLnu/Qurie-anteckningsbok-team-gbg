/* 18. (7.6 points) Som användare vill jag kunna välja olika mallar för varje anteckning -- JENS & TOLEEN */

// [] - lägga till valet av mall i toolbaren, dropdown med namn eller popout modul med previews?
// [] - skapa 3-4 olika mallar
// [] - applicera dem på vald note
// [] - göra så att tidigare vald mall blir vald för kommande ny skapad note

/* Bugs */

// [] - css, LATER! de finns en "note-template.css" som är kopplad och färdig för att göra css i
// [] - ??

import { createHtmlElem } from './createHtmlElem.js';

// hit kommer man när man klickar på "Mallar" i toolbaren
export function createFunctionalityNoteTemplate() {
    console.log('start createFunctionalityNoteTemplate');
    createHtmlElem('option', 'Mall 1', noteTemplateDropdown);
    createHtmlElem('option', 'Mall 2', noteTemplateDropdown);
    createHtmlElem('option', 'Mall 3', noteTemplateDropdown);
    noteTemplateDropdown.addEventListener('change', () => {
        applyNoteTemplate();
    });
}

function applyNoteTemplate() {
    console.log('start applyNoteTemplate');
}