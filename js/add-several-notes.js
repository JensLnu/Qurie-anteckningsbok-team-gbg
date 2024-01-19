/*--- Som användare vill jag kunna skapa flera olika anteckningar ---*/

// Vid uppdatering av sidan hamnar inte sparade notes i samma ordning som tidigare
// chooseNote är kallad på i displayAllNotes och eventlistener för add-btn
// Synka med firstVisit


// Hämta referenser från HTML
const addBtnSeveral = document.querySelector('.add-btn');
const savedNotes = document.querySelector('.saved-notes');
const textareaSeveral = document.getElementById('text-area');

// Hämta antecknings-ID från lS, och låt aldrig ID:t vara mindre än 1
let noteCounter = Math.max(1, getLatestNoteId() + 1);

// Funktion för att hämta senaste anteckningarna från lS
function getLatestNoteId() {
    let latestId = -1;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('Note ')) {
            const id = parseInt(key.split(' ')[1]);
            if (!isNaN(id) && id > latestId) {
                latestId = id;
            }
        }
    }
    return latestId;
}

// Funktion för att skapa notes i DOM
function createNotesContainer(noteId) {
    const notes = document.createElement('div');
    notes.classList.add('notes');

    // Knapp för att ta bort anteckning
    const deleteBtn = createDeleteButton(noteId);

    // Visa antecknings-ID i notes
    const noteKeyDisplay = document.createElement('div');
    noteKeyDisplay.classList.add('note-key-display');
    noteKeyDisplay.textContent = noteId;

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
    deleteBtn.addEventListener('click', () => {
        savedNotes.removeChild(deleteBtn.parentElement);
        localStorage.removeItem(noteId);
        textareaSeveral.textContent = '';
    });
    return deleteBtn;
}

// Funktion för att visa alla sparade anteckningar
function displayAllNotes() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('Note ')) {
            const noteId = key;
            createNotesContainer(noteId);
        }
    }
    // Kalla på chooseNote för att kunna bläddra bland anteckningarna
    chooseNote();
}

// Visa alla sparade anteckningar när sidan laddas om
displayAllNotes();

// Event listener för add-btn
addBtnSeveral.addEventListener('click', () => {
    const mainTextArea = document.getElementById('text-area');
    const noteTextarea = document.createElement('textarea');
    noteTextarea.classList.add('note-textarea');

    // Unikt ID för varje anteckning
    const noteId = `Note ${noteCounter++}`;

    // Lyssna på ändringar i main text-area och spara i lS
    noteTextarea.addEventListener('input', () => localStorage.setItem(noteId, noteTextarea.value));
    mainTextArea.textContent = '';
    mainTextArea.appendChild(noteTextarea);

    // Lägg till den nya anteckningen i DOM
    createNotesContainer(noteId);
    // Kalla på chooseNote för att kunna bläddra bland anteckningarna
    chooseNote();
    // Fokus på den nya anteckningen
    noteTextarea.focus();
});