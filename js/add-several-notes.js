/*--- Som användare vill jag kunna skapa flera olika anteckningar ---*/

// Vid uppdatering av sidan hamnar inte sparade notes i samma ordning som tidigare
// chooseNote är kallad på i displayAllNotes och eventlistener för add-btn
// Synka med firstVisit

import { addHashtag } from "./tags.js";
import { createHtmlElem } from "./moduls/createHtmlElem.js";

// Hämta referenser från HTML

// Visa alla sparade anteckningar när sidan laddas om
window.addEventListener("DOMContentLoaded", displayAllNotes);

// HÄR DET STRULAR MED BILDERNA DÅ EN TILLAGD BILD INTE RÄKNAS SOM INPUT
// Lyssna på ändringar i main text-area och spara i lS
textarea.addEventListener("input", () => {
    saveNoteToLocalStorage(
        textarea.getAttribute("data-id"),
        textarea,
        textarea.style.fontFamily
    );
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

// Skapa en ny anteckning
// Highlighta den nya anteckningen
// Lägg till ta-bort-knapp
// Skapar en textruta för anteckningen, ger unikt ID och bestämmer innehållet efter om det finns motsvarande ID i LS
// Append till sparade anteckningar
function createNotesContainer(noteId) {
    // G-tag gjord av Oscar Donaldson
    gtag("event", "add_note", { app_name: "add_note_button", screen_name: "add_note_name", });

    const notes = document.createElement("div");
    notes.classList.add("notes");

    hithLightTargedNote(notes); // gör så att den nya noten får vit bg färg och ser targetad ut
    const noteHeaderContainer = createHtmlElem("div", null, notes, "note-header-container", "flex");

    // Visa antecknings-ID i notes
    let jsonObj = JSON.parse(localStorage.getItem(noteId)); // hämtar sparad note för att bestämma vilket namn rubriken ska ha
    let noteKeyDisplay = `
    <div class='note-key-display' contenteditable='true' spellcheck='false' data-noteId='${noteId}'>
    ${jsonObj === null ? `Note ${noteId}` : jsonObj.title}</div>`;
    noteHeaderContainer.innerHTML += noteKeyDisplay;



    // hashtags hantering
    const displayHashtagBtn = createHtmlElem("button", "#", noteHeaderContainer, "hashtag-btn");
    displayHashtagBtn.addEventListener("click", (e) => {
        let hashtagContainer = addHashtag(e);
    });

    createDeleteButton(noteId, noteHeaderContainer); // Knapp för att ta bort anteckning
    savedNotes.appendChild(notes);
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
    displayNote();
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
    textarea.textContent = "";
    textarea.style.fontFamily = "";
    textarea.setAttribute("data-id", noteId);
    createNotesContainer(noteId);

    console.log(savedNote)
    saveNoteToLocalStorage(noteId, textarea, "sans-serif");
    chooseNote();
    textarea.focus();
}

// Använd savedNote-objektet för att strukturerat kunna spara anteckningar
// Anteckningens noteID från textarean
// Anteckningens titel från sidebaren
// Anteckningens innehåll
// Font-family från text-area
function saveNoteToLocalStorage(noteId, noteTextarea, font) {
    savedNote.noteId = noteId;
    // add-several-notes.js:134 Uncaught TypeError: Cannot read properties of null (reading 'textContent')
    // at saveNoteToLocalStorage (add-several-notes.js:134:74)
    // at HTMLDivElement.<anonymous> (add-several-notes.js:29:5)
    savedNote.title = document.querySelector(`[data-noteId="${noteId}"]`).textContent;
    savedNote.content = noteTextarea.innerHTML;
    savedNote.font = font;
    localStorage.setItem(noteId, JSON.stringify(savedNote));
}

