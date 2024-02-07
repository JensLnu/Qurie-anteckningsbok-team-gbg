/*--- Som användare vill jag kunna skapa flera olika anteckningar ---*/

import { addHashtag, createTags } from "./moduls/test-tag.js";
import { createHtmlElem } from "./moduls/createHtmlElem.js";
import Note from "../js/classes/newNote.js"
import { chooseNote, displayNote } from "./swap-note.js";
import { chooseNoteTemplate } from "./moduls/note-template.js";


// Visa alla sparade anteckningar när sidan laddas om
window.addEventListener("DOMContentLoaded", displayAllNotes);

// HÄR DET STRULAR MED BILDERNA DÅ EN TILLAGD BILD INTE RÄKNAS SOM INPUT
// Sammas problem med att ändra fonts då content endast uppdateras vid input
// Lyssna på ändringar i main text-area och spara i lS
textarea.addEventListener("input", () => {
    savedNote.updateContent(textarea.innerHTML);
});

// Eventlisteners för båda lägg till-knapparna
addBtnSeveral.addEventListener("click", createNote);
addBtnMobile.addEventListener("click", createNote);

// Hämta antecknings-ID från lS, och låt aldrig ID:t vara mindre än 1
let noteCounter = Math.max(0, getLatestNoteId());

// Går igenom alla ID:n och uppdaterar latestID om den hittar en större siffra
function getLatestNoteId() {
    let latestId = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = parseInt(localStorage.key(i));
        if (!isNaN(key) && key > latestId) {
            latestId = key;
        }
    }
    return latestId;
}

// Ta bort tidigare note
// Sätt standard-font
// Lägg till ID till anteckningen
// Skapa en ny anteckning
// Spara ner den nya anteckningen till LS
// Highlighta den nya anteckningen
// Fokusera muspekaren till nya fönstret
function createNote() {
    const noteId = ++noteCounter;
    savedNote = new Note(noteId, `Note ${noteId}`);
    savedNote.save();
    textarea.innerHTML = "";
    textarea.style.fontFamily = "";
    textarea.setAttribute("data-id", noteId);
    createNotesContainer(noteId);

    // saveNoteToLocalStorage(noteId, textarea, "");
    chooseNote();
    textarea.focus();
}

// Skapa en ny anteckning
// Highlighta den nya anteckningen
// Lägg till ta-bort-knapp
// Skapar en textruta för anteckningen, ger unikt ID och bestämmer innehållet efter om det finns motsvarande ID i LS
// Append till sparade anteckningar
export function createNotesContainer(noteId) {
    gtag("event", "add_note", { app_name: "add_note_button", screen_name: "add_note_name", }); // G-tag gjord av Oscar Donaldson

    const notes = document.createElement("div");
    notes.classList.add("notes");

    const noteHeaderContainer = createHtmlElem("div", null, notes, "note-header-container", "flex");
    // Visa antecknings-ID i notes
    let jsonObj = JSON.parse(localStorage.getItem(noteId)); // hämtar sparad note för att bestämma vilket namn rubriken ska ha

    // Visa tags i sidebaren efter reload
    // Skapa en hashtagContainer (samma klass som i tags.js) som innehåller alla tags under varje note
    const hashtagContainer = createHtmlElem("div", null, notes, "hashtag-container");
    // Kolla om den sparade noten existerar och innehåller hashtags
    if (jsonObj && jsonObj.hashtags && jsonObj.hashtags.length > 0) {
        // Gå igenom varje hashtag i sparade notes
        jsonObj.hashtags.forEach(tag => {
            createTags(tag, hashtagContainer);
        });
    }

    let noteKeyDisplay = `
    <div class='note-key-display' contenteditable='true' spellcheck='false' data-noteId='${noteId}'>
    ${jsonObj === null ? `Note ${noteId}` : jsonObj.title}</div>`;
    noteHeaderContainer.innerHTML += noteKeyDisplay;

    // hashtags hantering
    const displayHashtagBtn = createHtmlElem("button", "#", noteHeaderContainer, "hashtag-btn");
    displayHashtagBtn.addEventListener("click", (e) => {
        addHashtag(e);
    });

    createDeleteButton(noteId, noteHeaderContainer); // Knapp för att ta bort anteckning
    savedNotes.appendChild(notes);
    displayNote(noteId);
}

// Funktion för att ta bort anteckning
function createDeleteButton(noteId, noteHeaderContainer) {
    const deleteBtn = createHtmlElem("button", "-", noteHeaderContainer, "delete-btn");

    // Ta bort anteckning från DOM och lS
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        savedNotes.removeChild(deleteBtn.parentElement.parentElement);
        localStorage.removeItem(noteId);
        textarea.innerHTML = "";
    });
    return deleteBtn;
}

// Funktion som parameter till sort för att sortera nummer i storleksordning
function compareNumber(a, b) {
    return a - b;
}

// Skapa en tom array och lägg till alla ID:n som är siffror
// Sortera i nummerordning
// Skapa note-previews för alla element i arrayen
function displayAllNotes() {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
        if (!isNaN(parseInt(localStorage.key(i)))) {
            arr.push(parseInt(localStorage.key(i)));
        }
    }
    arr.sort(compareNumber);
    for (let i = 0; i < arr.length; i++) {
        createNotesContainer(arr[i]);
    }
    // Kalla på chooseNote för att kunna bläddra bland anteckningarna
    chooseNote();
    displayNote(noteCounter);
}



// Använd savedNote-objektet för att strukturerat kunna spara anteckningar
// Anteckningens noteID från textarean
// Anteckningens titel från sidebaren
// Anteckningens innehåll
// Font-family från text-area
// function saveNoteToLocalStorage(noteId, noteTextarea, font) {
//     savedNote.noteId = noteId;
//     // add-several-notes.js:134 Uncaught TypeError: Cannot read properties of null (reading 'textContent')
//     // at saveNoteToLocalStorage (add-several-notes.js:134:74)
//     // at HTMLDivElement.<anonymous> (add-several-notes.js:29:5)
//     savedNote.title = document.querySelector(`[data-noteId="${noteId}"]`).textContent;
//     savedNote.content = noteTextarea.innerHTML;
//     savedNote.font = font;
//     localStorage.setItem(noteId, JSON.stringify(savedNote));
// }

