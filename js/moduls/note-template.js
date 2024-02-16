import { createHtmlElem } from './createHtmlElem.js';
const rootColors = document.querySelector(':root');

// hit kommer man när man klickar på "Mallar" i toolbaren
// skapar de olika valen i dropdown menyn och lägger på eventListner när menyn ändras
export function createFunctionalityNoteTemplate() {
    createHtmlElem('option', 'Standard', noteTemplateDropdown);
    createHtmlElem('option', 'Brown', noteTemplateDropdown);
    createHtmlElem('option', 'Gray', noteTemplateDropdown);
    createHtmlElem('option', 'Pink', noteTemplateDropdown);
    noteTemplateDropdown.addEventListener('change', (e) => {
        const selectedTemplate = e.target.value;
        localStorage.setItem('latest-note-template', JSON.stringify(selectedTemplate)); // sparar den senaste valda mallen så att den används när man skapar en ny note
        chooseNoteTemplate(selectedTemplate);
    });
}

// läser av vald mall från dropdown menyn och skickar vidare mallens olika egenskaper
export function chooseNoteTemplate(selectedTemplate) {
    if (!selectedTemplate) {
        selectedTemplate = JSON.parse(localStorage.getItem('latest-note-template'));
        if (selectedTemplate == null) selectedTemplate = 'Standard';
    }
    
    let template;
    switch (selectedTemplate) {
        case 'Standard':
        case 'Template':
            template = {
                textColor: "black",
                headerColor: "black",
                bgColor: "white"
            }
            break;
        case 'Brown':
            template = {
                textColor: "#ffb703",
                headerColor: "#fb8500",
                bgColor: "#bb9457"
            }
            break;
        case 'Gray':
            template = {
                textColor: "#4895ef",
                headerColor: "#4361ee",
                bgColor: "#d9d9d9"
            }
            break;
        case 'Pink':
            template = {
                textColor: "#bfd200",
                headerColor: "#80b918",
                bgColor: "#ffccd5"
            }
            break;
        default: return;
    }
    savedNote.updateTemplate(selectedTemplate); // spara i class objektet och i ls
    applyNoteTemplate(template);
}

// applicerar vald mall
function applyNoteTemplate(template) {
    rootColors.style.setProperty("--note-text-color", template.textColor);
    rootColors.style.setProperty("--note-header-color", template.headerColor);
    rootColors.style.setProperty("--note-bg-color", template.bgColor);
}