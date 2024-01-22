/*
6. (5.3 points) Som användare vill jag kunna bläddra bland mina olika anteckningar på ett smidigt sätt -- Adam och Jens
*/

document.addEventListener('DOMContentLoaded', chooseNote);

// makes all notes clickable
function chooseNote() {
    const allNotes = document.querySelectorAll('.notes'); // array med alla div-element (notes)
    allNotes.forEach(note => {
        note.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            displayNote(e, allNotes);
        });
    })
}

// display clicked note
function displayNote(e, allNotes) {
    console.log('displayNote')
    let selectedNote = e.currentTarget;
    allNotes.forEach(note => {
        note.classList.remove('displayed-note');
    });
    selectedNote.classList.add('displayed-note');
    const header = selectedNote.firstElementChild.textContent;
    textArea.innerHTML = `<h2>${header}</h2><p>${localStorage.getItem(header)}</p>`;
}