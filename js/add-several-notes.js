/*--- Som användare vill jag kunna skapa flera olika anteckningar ---*/

// Hämta add-btn och notes från HTML
const addBtnSeveral = document.querySelector('.add-btn');
const notesContainerSeveral = document.querySelector('.notes');
const textareaSeveral = document.getElementById('text-area');

// Unikt id för varje anteckning
let noteCounter = 0;

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