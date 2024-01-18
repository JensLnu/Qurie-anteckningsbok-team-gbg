/*--- Som användare vill jag kunna skapa flera olika anteckningar ---*/

// Vid uppdatering av sidan hamnar inte sparade notes i samma ordning som tidigare
// chooseNote är kallad på i displayAllNotes och eventlistener för add-btn
// Synka med firstVisit


// Hämta add-btn och notes från HTML
const addBtnSeveral = document.querySelector('.add-btn');
const savedNotes = document.querySelector('.saved-notes');
const textareaSeveral = document.getElementById('text-area');

// Funktion för att hämta senaste ID från localStorage, så att noteCounter alltid startar från senaste ID:t vid uppdatering av sidan
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

// Unikt id för varje anteckning
let noteCounter = getLatestNoteId() + 1;

// Kontrollera att noteCounter aldrig blir mindre än 1
noteCounter = Math.max(1, noteCounter);

// Funktion för att visa alla anteckningar från localStorage vid uppdatering av sidan
function displayAllNotes() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('Note ')) {
            const noteId = key;

            // Skapa notes container
            const notes = document.createElement('div');
            notes.classList.add('notes');

            // Skapa delete knapp för anteckningen
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = '-';
            deleteBtn.addEventListener('click', () => {
                savedNotes.removeChild(notes);
                localStorage.removeItem(noteId);
            });

            // Visa noteId för anteckningen
            const noteKeyDisplay = document.createElement('div');
            noteKeyDisplay.classList.add('note-key-display');
            noteKeyDisplay.textContent = noteId;

            // Appenda till notes 
            notes.appendChild(noteKeyDisplay);

            // Appenda deleteBtn till notes
            notes.appendChild(deleteBtn);

            // Appenda notes till saved-notes
            savedNotes.appendChild(notes);
        }
    }

    // Kalla på chooseNote för att kunna bläddra mellan anteckningarna
    chooseNote();
}

displayAllNotes();

// Event listener för add-btn
addBtnSeveral.addEventListener('click', () => {
    // Skapa en ny textarea inuti main text-area
    const mainTextArea = document.getElementById('text-area');
    const noteTextarea = document.createElement('textarea');
    noteTextarea.classList.add('note-textarea');

    // Skapa ett unikt id för anteckningen
    const noteId = `Note ${noteCounter++}`;

    // Event listener för att spara i LS
    noteTextarea.addEventListener('input', function () {
        localStorage.setItem(noteId, noteTextarea.value);
    });

    // Appenda nya textarean till main text-area
    mainTextArea.textContent = ''; // Rensa befintligt innehåll
    mainTextArea.appendChild(noteTextarea);

    // Skapa en notes container för saved-notes
    const notes = document.createElement('div');
    notes.classList.add('notes');

    // Visa noteId för anteckningen
    const noteKeyDisplay = document.createElement('div');
    noteKeyDisplay.classList.add('note-key-display');
    noteKeyDisplay.textContent = noteId;

    notes.appendChild(noteKeyDisplay);

    // Skapa delete knapp
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '-';
    deleteBtn.addEventListener('click', () => {
        // Ta bort anteckningen från saved-notes och LS
        savedNotes.removeChild(notes);
        localStorage.removeItem(noteId);

        // Rensa innehållet i main text-area
        mainTextArea.textContent = '';
    });

    // Appenda delete knappen till notes
    notes.appendChild(deleteBtn);

    // Appenda notes till saved-notes
    savedNotes.appendChild(notes);

    // Kalla på chooseNote för att bläddra mellan anteckningar, även de nya
    chooseNote();

    // Fokus på main text-area
    noteTextarea.focus();
});