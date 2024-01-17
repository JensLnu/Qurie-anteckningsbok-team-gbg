/*
6. (5.3 points) Som användare vill jag kunna bläddra bland mina olika anteckningar på ett smidigt sätt -- Adam och Jens
*/

//global refrens
const allNotes = document.querySelectorAll('.notes'); // array med alla div-element (notes)

chooseNote();

// makes all notes clickable
function chooseNote() {
    allNotes.forEach(note => {
        note.addEventListener('click', (e) => {
            displayNote(e);
        });
    })
}

// display clicked note
function displayNote(e) {
    let selectedNote = e.currentTarget;
    allNotes.forEach(note => {
        note.classList.remove('displayed-note');
    });
    selectedNote.classList.add('displayed-note');
    textArea.textContent = selectedNote.textContent;
}