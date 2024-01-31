// Hämta anteckningar från localStorage vid appens start
let notesArray = JSON.parse(localStorage.getItem('notes')) || [];

// Spara en uppdaterad eller ny anteckning till localStorage
function saveNoteToLocalStorage(note) {
    const index = notesArray.findIndex(n => n.noteId === note.noteId);
    index !== -1 ? notesArray[index] = note : notesArray.push(note);
    localStorage.setItem('notes', JSON.stringify(notesArray));
}

// Växla favoritstatus och uppdatera UI samt localStorage
function toggleFavorite(noteId) {
    let note = notesArray.find(note => note.noteId === noteId);
    if (note) {
        note.favorite = !note.favorite;
        document.querySelector(`.favorite-button[data-noteId="${noteId}"]`)
                .classList.toggle('favorited');
        saveNoteToLocalStorage(note);
    }
    console.log(toggleFavorite)
    console.log(notesArray)
}

// Visa favoritmarkerade anteckningar
function displayFavoriteNotes() {
    const savedNotesContainer = document.querySelector(".saved-notes");
    savedNotesContainer.innerHTML = '';
    notesArray.filter(note => note.favorite).forEach(note => {
        savedNotesContainer.appendChild(createNoteElement(note));
    });
}

// Skapa HTML-element för en anteckning
function createNoteElement(note) {
    let noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p>`;
    return noteDiv;
    console.log(createNoteElement)
}

// Event listeners
document.querySelectorAll('.favorite-button').forEach(button => 
    button.addEventListener('click', () => toggleFavorite(button.getAttribute('data-noteId')))
);
document.getElementById('stars-icon').addEventListener('click', displayFavoriteNotes);
