// Lägg till eventlistener till alla existerande anteckningar när sidan laddas
document.addEventListener('DOMContentLoaded', chooseNote);
import Note from "../js/classes/newNote.js";
import { loadFont, removeAllFonts } from "./font-template.js";
import { chooseNoteTemplate } from "./moduls/note-template.js"

// makes all notes clickable and enabels header to be editable
// array with all div elements (notes), needs to be updated every time the function is executed as new notes may have been added
// Hittar igen alla anteckningar i sidebaren
// Lägger till eventlistener för att kunna visa anteckningen som klickas på
// Eventlistener för att kunna uppdatera anteckningens titel
// DESSA SKULLE VI KUNNA LÄGGA IN NÄR VI SKAPAR NOTES
export function chooseNote() {
    const allNotes = document.querySelectorAll('.notes'); 
    allNotes.forEach(note => {
        note.addEventListener('click', (e) => {
            const noteId = e.currentTarget.firstElementChild.firstElementChild.getAttribute('data-noteId')
            displayNote(noteId);
        });
        note.firstElementChild.addEventListener('input', (e) => {
            updateHeaderForNote(e);
        });
    })
}

// displays clicked note
// Se vilken anteckning som klickas på
// Highlighta anteckningen i sidebaren
// Hämta anteckningen från LS med IDt från previewn
// Lägg till innehållet i textarean
// Lägg till id till textarean
// Lägg till senaste använda note-mallen till textarean
// Lägg till fonten till textarean
// Uppdatera font-selection efter om det finns en använd font eller inte
export function displayNote(noteId) {  
    const selectedNote = document.querySelector(`[data-noteId="${noteId}"]`).parentElement.parentElement;
    let source = JSON.parse(localStorage.getItem(noteId));
    savedNote = Object.assign(new Note(), source)
    textarea.innerHTML = savedNote.content;
    textarea.setAttribute('data-Id', savedNote.noteId)
    removeAllFonts();
    highLightTargedNote(selectedNote);
    highLightTargedTag(selectedNote);
    chooseNoteTemplate(savedNote.template);
    if(savedNote.font != ''){
        loadFont(savedNote.fonts);
        fontDropdown.value = textarea.style.font;
    } else {
        fontDropdown.getElementsByTagName('option')[0].selected = 'selected'
    }
}

// change bg color on targed note
// Hämta alla notes från sidebaren
// Ta bort alla förekomster av 'displayed note'
// Lägg till 'displayed-note' till anteckningen som klickades på
function highLightTargedNote(selectedNote) {
    const allNotes = document.querySelectorAll('.notes');
    allNotes.forEach(note => {
        note.classList.remove('displayed-note');
    });
    selectedNote.classList.add('displayed-note');
}

// Funktion för att dölja de tags som inte är aktiva och visa aktiv tag
function highLightTargedTag(selectedNote) {
    let tags = document.querySelectorAll('.saved-tags-div');
    tags.forEach(note => {
        note.classList.add('display-none');
        note.classList.remove('flex-container')
    });

    tags = selectedNote.querySelectorAll('.saved-tags-div');
    tags.forEach(note => {
        note.classList.remove('display-none');
        note.classList.add('flex-container')
    });
}


// Här strular det nog med försvinnande text-content
// LÅT BLI ATT HÄMTA TITELN OCH LÄGGA TILL DET I DOKUMENTET, LÅT DEN VARA SEPARAT (ENDAST I PREVIEW NOTEN)

// hämtar attributet med de id som noten man klickar på har
// hämtar rubriken som ändras
// uppdaterar det nya rubrik namnet i localStorage
function updateHeaderForNote(e) {
    const noteId = e.target.getAttribute("data-noteid"); // hämtar attributet med de id som noten man klickar på har
    savedNote.updateTitle(document.querySelector(`[data-noteId="${noteId}"]`).textContent); // hämtar rubriken som ändras
}