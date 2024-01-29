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
textarea.addEventListener('input', () => {
    saveNoteToLocalStorage(textarea.getAttribute('data-id'), textarea, textarea.style.fontFamily);
});

// Eventlisteners för båda lägg till-knapparna
addBtnSeveral.addEventListener('click', createNote);
addBtnMobile.addEventListener('click', createNote);
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
    const notes = document.createElement('div');
    notes.classList.add('notes');
    hithLightTargedNote(notes);
    const deleteBtn = createDeleteButton(noteId);
    let jsonObj = JSON.parse(localStorage.getItem(noteId));
    const noteKeyDisplay = `
    <div class='note-key-display' contenteditable='true' spellcheck='false' data-noteId='${noteId}'>
    ${(jsonObj === null ? `Note ${noteId}` : jsonObj.title)}
    </div>`
    notes.innerHTML += noteKeyDisplay;
    notes.appendChild(deleteBtn);
    savedNotes.appendChild(notes);
}

// Skapa en ta-bort-knapp
// Eventlistener som tar bort motsvarande ID i LS + tar bort note-previe
// Rensa textarea
function createDeleteButton(noteId) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '-';
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

// Skapa en tom array och lägg till alla ID:n som är siffror
// Sortera i nummerordning
// Skapa note-previews för alla element i arrayen
function displayAllNotes() {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
        if(!isNaN(parseInt(localStorage.key(i)))){
            arr.push(parseInt(localStorage.key(i)));
        }
    }
    arr.sort(compareNumber);
    for (let i = 0; i < arr.length; i++) {
        createNotesContainer(arr[i])
    }
    // Kalla på chooseNote för att kunna bläddra bland anteckningarna
    chooseNote();
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
    textarea.textContent = '';
    textarea.style.fontFamily = ''
    textarea.setAttribute('data-id', noteId);
    createNotesContainer(noteId);
    saveNoteToLocalStorage(noteId, textarea, 'sans-serif');
    chooseNote();
    textarea.focus();
};

// Använd savedNote-objektet för att strukturerat kunna spara anteckningar
// Anteckningens noteID från textarean
// Anteckningens titel från sidebaren
// Anteckningens innehåll
// Font-family från text-area
function saveNoteToLocalStorage(noteId, noteTextarea, font) {
    savedNote.noteId = noteId;
    savedNote.title = document.querySelector(`[data-noteId="${noteId}"]`).textContent;
    savedNote.content = noteTextarea.innerHTML;
    savedNote.font = font;
    localStorage.setItem(noteId, JSON.stringify(savedNote));
}

// Här strular det nog med försvinnande text-content
// LÅT BLI ATT HÄMTA TITELN OCH LÄGGA TILL DET I DOKUMENTET, LÅT DEN VARA SEPARAT (ENDAST I PREVIEW NOTEN)

// hämtar attributet med de id som noten man klickar på har
// hämtar rubriken som ändras
// uppdaterar det nya rubrik namnet i localStorage
function updateHeaderForNote(e) {
    const noteId = e.target.getAttribute('data-noteId'); 
    savedNote.title = document.querySelector(`[data-noteId="${noteId}"]`).textContent; 
    localStorage.setItem(noteId, JSON.stringify(savedNote)); 
}