/*--- Som användare vill jag kunna skapa flera olika anteckningar ---*/

// Vid uppdatering av sidan hamnar inte sparade notes i samma ordning som tidigare
// chooseNote är kallad på i displayAllNotes och eventlistener för add-btn
// Synka med firstVisit

const addBtnSeveral = document.querySelector('.add-btn');
const savedNotes = document.querySelector('.saved-notes');
const textareaSeveral = document.getElementById('text-area');

let noteCounter = Math.max(1, getLatestNoteId() + 1);

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

function createNotesContainer(noteId) {
    const notes = document.createElement('div');
    notes.classList.add('notes');

    const deleteBtn = createDeleteButton(noteId);

    const noteKeyDisplay = document.createElement('div');
    noteKeyDisplay.classList.add('note-key-display');
    noteKeyDisplay.textContent = noteId;

    notes.appendChild(noteKeyDisplay);
    notes.appendChild(deleteBtn);
    savedNotes.appendChild(notes);
}

function createDeleteButton(noteId) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '-';
    deleteBtn.addEventListener('click', () => {
        savedNotes.removeChild(deleteBtn.parentElement);
        localStorage.removeItem(noteId);
        textareaSeveral.textContent = '';
    });
    return deleteBtn;
}

function displayAllNotes() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('Note ')) {
            const noteId = key;
            createNotesContainer(noteId);
        }
    }
    chooseNote();
}

displayAllNotes();

addBtnSeveral.addEventListener('click', () => {
    const mainTextArea = document.getElementById('text-area');
    const noteTextarea = document.createElement('textarea');
    noteTextarea.classList.add('note-textarea');

    const noteId = `Note ${noteCounter++}`;

    noteTextarea.addEventListener('input', () => localStorage.setItem(noteId, noteTextarea.value));
    mainTextArea.textContent = '';
    mainTextArea.appendChild(noteTextarea);

    createNotesContainer(noteId);
    chooseNote();
    noteTextarea.focus();
});
