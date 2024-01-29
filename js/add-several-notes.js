/*--- Som användare vill jag kunna skapa flera olika anteckningar ---*/

// Vid uppdatering av sidan hamnar inte sparade notes i samma ordning som tidigare
// chooseNote är kallad på i displayAllNotes och eventlistener för add-btn
// Synka med firstVisit

// Hämta referenser från HTML
const addBtnSeveral = document.querySelector('.add-btn');
const savedNotes = document.querySelector('.saved-notes');
const textareaSeveral = document.getElementById('text-area');

// Hämta antecknings-ID från lS, och låt aldrig ID:t vara mindre än 0
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

    // Knapp för att ta bort anteckning
    const deleteBtn = createDeleteButton(noteId);

    // Visa antecknings-ID i notes
    const noteKeyDisplay = document.createElement('div');
    noteKeyDisplay.classList.add('note-key-display');
    noteKeyDisplay.textContent = `Note ${noteId}`;

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
    for(let i = 0; i < arr.length; i++){
        createNotesContainer(arr[i])
    }
    // Kalla på chooseNote för att kunna bläddra bland anteckningarna
    chooseNote();
}

// Visa alla sparade anteckningar när sidan laddas om
displayAllNotes();

addBtnSeveral.addEventListener('click', () => {
    const mainTextArea = document.getElementById('text-area');
    const noteTextarea = document.createElement('div');
    noteTextarea.className = "note-textarea";
    noteTextarea.setAttribute("contenteditable", "true");

    // Unikt ID för varje anteckning
    noteCounter++
    const noteId = noteCounter;

    // Lyssna på ändringar i main text-area och spara i lS
    noteTextarea.addEventListener('input', () => localStorage.setItem(noteId, noteTextarea.value));
    mainTextArea.textContent = '';
    mainTextArea.appendChild(noteTextarea);

    // Lägg till den nya anteckningen i DOM (sidebar)
    createNotesContainer(noteId);
    // Kalla på chooseNote för att kunna bläddra bland anteckningarna
    chooseNote();
    // Fokus på den nya anteckningen
    noteTextarea.focus();
});
