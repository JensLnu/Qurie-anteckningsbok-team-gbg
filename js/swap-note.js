document.addEventListener('DOMContentLoaded', chooseNote);
const textarea = document.getElementById('text-area');

// makes all notes clickable and enabels header to be editable
function chooseNote() {
    const allNotes = document.querySelectorAll('.notes'); // array with all div elements (notes), needs to be updated every time the function is executed as new notes may have been added
    allNotes.forEach(note => {
        note.addEventListener('click', (e) => {
            displayNote(e);
        });
        note.firstElementChild.addEventListener('input', (e) => {
            updateHeaderForNote(e);
        });
    })
}

// displays clicked note
function displayNote(e) {
    let selectedNote = e.currentTarget;
    hithLightTargedNote(selectedNote);
    savedNote = JSON.parse(localStorage.getItem(selectedNote.firstElementChild.firstElementChild.getAttribute('data-noteId'))); // get the id from the clicked note, then gets the data from localStorage and makes it to a string
    textarea.innerHTML = `<div><h2>${savedNote.title}</h2></div><br>${savedNote.content}`; // displays note in textarea
}

// change bg color on targed note
function hithLightTargedNote(selectedNote) {
    const allNotes = document.querySelectorAll('.notes'); // array with all div elements (notes), needs to be updated every time the function is executed as new notes may have been added
    allNotes.forEach(note => {
        note.classList.remove('displayed-note');
    });
    selectedNote.classList.add('displayed-note'); // css class with white backgroundcolor
}