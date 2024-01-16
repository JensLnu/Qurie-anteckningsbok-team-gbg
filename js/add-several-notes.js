/*--- Som användare vill jag kunna skapa flera olika anteckningar ---*/

// 1. Kalla på vår funktion i add-note.js
// 2. Ev. spara-knapp i add-note.js
// 3. Korta ner och snygga till koden!

// Hämta add-btn och notes från HTML
const addBtnSeveral = document.querySelector('.add-btn');
const notesContainerSeveral = document.querySelector('.notes');
const textareaSeveral = document.getElementById('text-area');

// Funktion för att hämta senaste ID från localStorage, så att noteCounter alltid startar från senaste ID:t vid uppdatering av sidan
function getLatestNoteId() {
    let latestId = -1;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('note_')) {
            const id = parseInt(key.split('_')[1]);
            if (!isNaN(id) && id > latestId) {
                latestId = id;
            }
        }
    }
    return latestId;
}

// Unikt id för varje anteckning
let noteCounter = getLatestNoteId() + 1;

// Kontrollera att noteCounter aldrig blir mindre än 0
noteCounter = Math.max(0, noteCounter);

// Funktion för att visa alla anteckningar från localStorage
function displayAllNotes() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('note_')) {
            const noteId = key;
            const noteText = localStorage.getItem(noteId);

            // Skapa note container
            const noteContainer = document.createElement('div');
            noteContainer.classList.add('note');

            // Skapa textarea för anteckningen
            const noteTextarea = document.createElement('textarea');
            noteTextarea.classList.add('note-textarea');
            noteTextarea.value = noteText;

            // Skapa delete knapp för anteckningen
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = '-';
            deleteBtn.addEventListener('click', () => {
                notesContainerSeveral.removeChild(noteContainer);
                localStorage.removeItem(noteId);
            });

            // Appenda till note container
            noteContainer.appendChild(noteTextarea);
            noteContainer.appendChild(deleteBtn);

            // Appenda note container till notes container
            notesContainerSeveral.appendChild(noteContainer);

        }
    }
}

displayAllNotes();

// Event listener för add-btn
addBtnSeveral.addEventListener('click', () => {
    // Skapa ny antecknings container (t.ex note)
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note');

    // Skapa ny textarea för anteckningen
    const noteTextarea = document.createElement('textarea');
    noteTextarea.classList.add('note-textarea');

    // Skapa unikt id med counter
    const noteId = `note_${noteCounter++}`;

    // Hämta tidigare sparad anteckning från localStorage
    const savedNote = localStorage.getItem(noteId);
    if (savedNote) {
        noteTextarea.value = savedNote;
    }

    // Skapa event listener för input eventet och spara till localStorage
    noteTextarea.addEventListener('input', function() {
        localStorage.setItem(noteId, noteTextarea.value);
    });

    // Appenda textarea till note container
    noteContainer.appendChild(noteTextarea);

    // Skapa en delete knapp för anteckningen
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    // Lägg - som knapp
    deleteBtn.textContent = '-';

    // Skapa event listener för delete knappen och ta bort från localStorage
    deleteBtn.addEventListener('click', () => {
        notesContainerSeveral.removeChild(noteContainer);
        localStorage.removeItem(noteId);
    });

    // Appenda deleteknapp till note container
    noteContainer.appendChild(deleteBtn);

    // Appenda note container till notes container
    notesContainerSeveral.appendChild(noteContainer);

    // Focus på den nya anteckningen
    noteTextarea.focus();
});