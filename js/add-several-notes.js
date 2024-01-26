/*--- Som användare vill jag kunna skapa flera olika anteckningar ---*/

// Vid uppdatering av sidan hamnar inte sparade notes i samma ordning som tidigare
// chooseNote är kallad på i displayAllNotes och eventlistener för add-btn
// Synka med firstVisit

// Hämta referenser från HTML
const addBtnSeveral = document.querySelector('.add-btn');
const savedNotes = document.querySelector('.saved-notes');
const textareaSeveral = document.getElementById('text-area');
let savedNoteContent = {
    title: '',
    content: '',
    noteId: 0
}

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
    const noteKeyDisplay = document.createElement('div');
    noteKeyDisplay.classList.add('note-key-display');
    noteKeyDisplay.contentEditable = true;
    noteKeyDisplay.spellcheck = false; // tar väck den rödvågiga under texten om man döper en note till ett "felstavat" namn
    noteKeyDisplay.setAttribute('data-noteId', noteId); // sparar noteId som ett attribut
    let jsonObj = JSON.parse(localStorage.getItem(noteId)); // hämtar sparad note för att bestämma vilket namn rubriken ska ha
    jsonObj === null ? noteKeyDisplay.textContent = `Note ${noteId}` : noteKeyDisplay.textContent = jsonObj.title; // om det är en ny note får den 'Note + noteId' som rubrik annars hämtar den det sparade namnet för rubriken
    notes.appendChild(noteKeyDisplay);
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
        textareaSeveral.innerHTML = '';
    });
    return deleteBtn;
}

// Funktion för att visa alla sparade anteckningar, och sortera
function displayAllNotes() {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
        arr.push(parseInt(localStorage.key(i)));
    }
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        createNotesContainer(arr[i])
    }
    // Kalla på chooseNote för att kunna bläddra bland anteckningarna
    chooseNote();
}

// Visa alla sparade anteckningar när sidan laddas om
displayAllNotes();

addBtnSeveral.addEventListener('click', createNote);

function createNote() {
    const mainTextArea = document.getElementById('text-area');
    mainTextArea.classList = "note-textarea"; // behövs mest troligt inte

    // Unikt ID för varje anteckning
    noteCounter++
    const noteId = noteCounter;
    mainTextArea.textContent = '';

    // Lägg till den nya anteckningen i DOM (sidebar)
    createNotesContainer(noteId);
    // sparar en ny tom note i lS, om användaren väljer att inte skriva något utan bara klickar på lägg till knappen
    saveNoteToLocalStorage(noteId, mainTextArea);
    // Lyssna på ändringar i main text-area och spara i lS
    mainTextArea.addEventListener('input', () => {
        saveNoteToLocalStorage(noteId, mainTextArea);
    });
    // Kalla på chooseNote för att kunna bläddra bland anteckningarna
    chooseNote();
    
    // Fokus på den nya anteckningen
    mainTextArea.focus();
};

function saveNoteToLocalStorage(noteId, noteTextarea) {
    // sparar innehållet i noten (title, content, id) i objektet (saveNoteContent)
    savedNoteContent.noteId = noteId;
    savedNoteContent.title = document.querySelector(`[data-noteId="${noteId}"]`).textContent; // titlen på notesen i sidebaren
    savedNoteContent.content = noteTextarea.innerHTML; // innehållet användaren skriver i textarean
    localStorage.setItem(noteId, JSON.stringify(savedNoteContent)); // spara objektet i typen string till ls
}

// när användaren skriver in en ny rubrik till en note sparas de i localStorage direkt
function updateHeaderForNote(e) {
    const noteId = e.target.getAttribute('data-noteid'); // hämtar attributet med de id som noten man klickar på har
    savedNoteContent.title = document.querySelector(`[data-noteId="${noteId}"]`).textContent; // hämtar rubriken som ändras
    localStorage.setItem(noteId, JSON.stringify(savedNoteContent)); // uppdaterar det nya rubrik namnet i localStorage
}