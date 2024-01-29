/*--- Som användare vill jag kunna skapa flera olika anteckningar ---*/

// Vid uppdatering av sidan hamnar inte sparade notes i samma ordning som tidigare
// chooseNote är kallad på i displayAllNotes och eventlistener för add-btn
// Synka med firstVisit
// import { hithLightTargedNote, chooseNote } from './swap-note.js'


// Hämta referenser från HTML
const addBtnSeveral = document.querySelector('.add-btn');
const addBtnMobile = document.querySelector('.add');
const savedNotes = document.querySelector('.saved-notes');
const textarea = document.getElementById('text-area');
let savedNote = {
    title: '',
    content: '',
    noteId: 0,
    font: ''
}

// Visa alla sparade anteckningar när sidan laddas om
window.addEventListener('DOMContentLoaded', displayAllNotes)


// HÄR DET STRULAR MED BILDERNA DÅ EN TILLAGD BILD INTE RÄKNAS SOM INPUT
// Lyssna på ändringar i main text-area och spara i lS
textarea.addEventListener('input', (e) => {
    saveNoteToLocalStorage(textarea.getAttribute('data-id'), textarea, textarea.style.fontFamily);
});

// Eventlisteners för båda lägg till-knapparna
addBtnSeveral.addEventListener('click', createNote);
addBtnMobile.addEventListener('click', createNote);
// Hämta antecknings-ID från lS, och låt aldrig ID:t vara mindre än 1
let noteCounter = Math.max(0, getLatestNoteId());

// Funktion för att hämta senaste anteckningarna från lS
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

// Funktion för att skapa notes i DOM
function createNotesContainer(noteId) {
    const notes = document.createElement('div');
    notes.classList.add('notes');
    hithLightTargedNote(notes); // gör så att den nya noten får vit bg färg och ser targetad ut
    // Knapp för att ta bort anteckning
    const deleteBtn = createDeleteButton(noteId);

    // Visa antecknings-ID i notes
    let jsonObj = JSON.parse(localStorage.getItem(noteId)); // hämtar sparad note för att bestämma vilket namn rubriken ska ha
    const noteKeyDisplay = `
    <div class='note-key-display' contenteditable='true' spellcheck='false' data-noteId='${noteId}'>
    ${(jsonObj === null ? `Note ${noteId}` : jsonObj.title)}
    </div>`
    notes.innerHTML += noteKeyDisplay;
    notes.appendChild(deleteBtn);
    savedNotes.appendChild(notes);
}

// Funktion för att ta bort anteckning
function createDeleteButton(noteId) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '-';
    // Ta bort anteckning från DOM och lS
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        savedNotes.removeChild(deleteBtn.parentElement);
        localStorage.removeItem(noteId);
        textarea.innerHTML = '';
    });
    return deleteBtn;
}

// Funktion som parameter till sort för att sortera nummer i storleksordning
function compareNumber(a, b) {
    return a - b;
}

// Funktion för att visa alla sparade anteckningar, och sortera
function displayAllNotes() {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
        arr.push(parseInt(localStorage.key(i)));
    }
    arr.sort(compareNumber);
    for (let i = 0; i < arr.length; i++) {
        createNotesContainer(arr[i])
    }
    // Kalla på chooseNote för att kunna bläddra bland anteckningarna
    chooseNote();
}

function createNote() {
    // Unikt ID för varje anteckning
    const noteId = ++noteCounter;
    textarea.textContent = '';
    textarea.setAttribute('data-id', noteId);
    // Lägg till den nya anteckningen i DOM (sidebar)
    createNotesContainer(noteId);
    // sparar en ny tom note i lS, om användaren väljer att inte skriva något utan bara klickar på lägg till knappen
    saveNoteToLocalStorage(noteId, textarea, 'sans-serif');
    // Kalla på chooseNote för att kunna bläddra bland anteckningarna
    chooseNote();
    // Fokus på den nya anteckningen
    textarea.focus();
};

function saveNoteToLocalStorage(noteId, noteTextarea, font) {
    // sparar innehållet i noten (title, content, id) i objektet (saveNote)
    savedNote.noteId = noteId;
    savedNote.title = document.querySelector(`[data-noteId="${noteId}"]`).textContent; // titlen på notesen i sidebaren
    savedNote.content = noteTextarea.innerHTML; // innehållet användaren skriver i textarean
    savedNote.font = font;
    localStorage.setItem(noteId, JSON.stringify(savedNote)); // spara objektet i typen string till ls
}

// Här strular det nog med försvinnande text-content
// LocalStorage uppdateras med endast titeln och skriver över det som står där innan?
// LÅT BLI ATT HÄMTA TITELN OCH LÄGGA TILL DET I DOKUMENTET, LÅT DEN VARA SEPARAT (ENDAST I PREVIEW NOTEN)
// när användaren skriver in en ny rubrik till en note sparas de i localStorage direkt
function updateHeaderForNote(e) {
    const noteId = e.target.getAttribute('data-noteId'); // hämtar attributet med de id som noten man klickar på har
    savedNote.title = document.querySelector(`[data-noteId="${noteId}"]`).textContent; // hämtar rubriken som ändras
    localStorage.setItem(noteId, JSON.stringify(savedNote)); // uppdaterar det nya rubrik namnet i localStorage
    console.log(localStorage.getItem(noteId))
}