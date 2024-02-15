import { addHashtag, createTags } from "./moduls/tags.js";
import { createHtmlElem } from "./moduls/createHtmlElem.js";
import Note from "../js/classes/newNote.js"
import { chooseNote, displayNote } from "./swap-note.js";

// Visa alla sparade anteckningar när sidan laddas om
window.addEventListener("DOMContentLoaded", displayAllNotes);

// HÄR DET STRULAR MED BILDERNA DÅ EN TILLAGD BILD, FONT OCH FONT SIZE INTE RÄKNAS SOM INPUT
// Lyssna på ändringar i main text-area och spara i lS
textarea.addEventListener("input", () => {
    savedNote.updateContent(textarea.innerHTML);
});

// Eventlisteners för båda lägg till-knapparna för att skapa nya anteckningar
addBtnSeveral.addEventListener("click", () => {
    // Jens gtag
    gtag('event', 'clicked_new_note_btn_browser', {
        'event-category': 'click',
        'event_label': 'clicked_new_note_btn_browser',
        'event-author' : 'Jens'
      });
    createNote();
});
addBtnMobile.addEventListener("click", createNote);

// Hämta antecknings-ID från LS om det finns annars är startindex 0
// Går igenom alla ID:n och uppdaterar latestID om den hittar en större siffra
let noteCounter = Math.max(0, getLatestNoteId());
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

// Sätt note index till ett högre än förra
// Skapa ny note med Note-klassen
// Spara den nya noten till LS
// Töm dokumentet
// Lägg till font och uppdatera dokumentets data-id
// Skapa en anteckning i sidebaren och lägg till eventlisteners
// Fokusera muspekaren till nya fönstret
function createNote() {
    const noteId = ++noteCounter;
    savedNote = new Note(noteId, `Note ${noteId}`);
    savedNote.save();
    textarea.innerHTML = "";
    textarea.style.fontFamily = "";
    textarea.setAttribute("data-id", noteId);
    createNotesContainer(noteId);
    chooseNote();
    textarea.focus();
}

// Funktion för att skapa en anteckning i sidebar
// Skapa en divar med respektive klassnamn och ID för note, innehåll och hashtags
// Gå igenom LS och kolla efter existerande tags och skapa tags om några
// Lägg till innehållet (titeln i noten) med motsvarande "Note" eller sparade namnet i LS
// Skapa en knapp för hashtags
// Skapa en ta-bort-knapp
// Visa den nya noten
export function createNotesContainer(noteId) {
    gtag("event", "add_note", { app_name: "add_note_button", screen_name: "add_note_name", }); // G-tag gjord av Oscar Donaldson

    // const notes = document.createElement("div");
    // notes.classList.add("notes");
    const notes = createHtmlElem('div', null, null, 'notes')
    const noteHeaderContainer = createHtmlElem("div", null, notes, "note-header-container", "flex");
    const hashtagContainer = createHtmlElem("div", null, notes, "hashtag-container");
    let jsonObj = JSON.parse(localStorage.getItem(noteId));

    if (jsonObj && jsonObj.hashtags && jsonObj.hashtags.length > 0) {
        jsonObj.hashtags.forEach(tag => {
            createTags(tag, hashtagContainer);
        });
    }

    let noteKeyDisplay = `
    <div class='note-key-display' contenteditable='true' spellcheck='false' data-noteId='${noteId}'>
    ${jsonObj === null ? `Note ${noteId}` : jsonObj.title}</div>`;
    noteHeaderContainer.innerHTML += noteKeyDisplay;

    const displayHashtagBtn = createHtmlElem("button", "#", noteHeaderContainer, "hashtag-btn");
    displayHashtagBtn.addEventListener("click", (e) => {
        addHashtag(e);
    });

    createDeleteButton(noteId, noteHeaderContainer);
    savedNotes.appendChild(notes);
    displayNote(noteId);
}

// Funktion för att ta skapa ta-bort-knapp
function createDeleteButton(noteId, noteHeaderContainer) {
    const deleteBtn = createHtmlElem("button", "-", noteHeaderContainer, "delete-btn");

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
// Lägg till eventlisteners på alla notes i sidebar och visa senaste anteckningen
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
    chooseNote();
    displayNote(noteCounter);
}
