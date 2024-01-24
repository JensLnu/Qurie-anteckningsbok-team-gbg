document.addEventListener('DOMContentLoaded', chooseNote);

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
    const allNotes = document.querySelectorAll('.notes'); // array with all div elements (notes), needs to be updated every time the function is executed as new notes may have been added
    allNotes.forEach(note => {
        note.classList.remove('displayed-note');
    });
    selectedNote.classList.add('displayed-note'); // css class with white backgroundcolor
    let lsObj = JSON.parse(localStorage.getItem(selectedNote.firstElementChild.getAttribute('data-noteId'))); // get the id from the clicked note, then gets the data from localStorage and makes it to a string
    textArea.innerHTML = `<h2>${lsObj.title}</h2><br>${lsObj.content}`; // displays note in textarea
}