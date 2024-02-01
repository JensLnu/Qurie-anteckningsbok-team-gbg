// Hämta anteckningar från localStorage vid appens start

let notesArray = JSON.parse(localStorage.getItem('notes')) || [];
// Manuellt lägga till en testanteckning
// notesArray.push({ noteId: '1', title: 'Test Title', content: 'Test Content', favorite: false });
// saveNoteToLocalStorage(notesArray[0]);
console.log(notesArray);

function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
function addNewNote(title, content) {
    const newNote = {
        noteId: generateUniqueId(),
        title: title,
        content: content,
        favorite: false
    };
    notesArray.push(newNote);
    saveNoteToLocalStorage(newNote);
}


//Spara en uppdaterad eller ny anteckning till localStorage
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
        document.querySelector(`.favorite-button[data-noteId="${noteId}"]`)//letar alltså efter det första elementet i dokumentet som har klassen favorite-button och vars data-noteId-attribut matchar värdet av noteId.
        .classList.toggle('favorited');// kollar om html-elementet har klassnamnet 'favorited' om den har, tas den bort annars lägger den till
        saveNoteToLocalStorage(note);

        console.log(`Note ID: ${noteId}, Favorite Status: ${note.favorite}`);
        console.log(notesArray);
    }    
}

// Visa favoritmarkerade anteckningar
function displayFavoriteNotes() {
    const savedNotesContainer = document.querySelector(".saved-notes");
    savedNotesContainer.innerHTML = '';
    notesArray.filter(note => note.favorite).forEach(note => {
        const noteElement = createNoteElement(note);
        savedNotesContainer.appendChild(noteElement);
    });
    console.log(savedNotesContainer)
    console.log(notesArray.filter(note => note.favorite));
    // console.log(notesArray);   
}

// Skapa HTML-element för en anteckning
function createNoteElement(note) {
    let noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p>`;
    return noteDiv;
    
}

// denna ska fixas och integreas med min kod 
// const addNoteButton = document.getElementById('add-note-button');
// addNoteButton.addEventListener('click', () => {
//     // Antag att du har input-fält för titel och innehåll
//     const title = document.getElementById('title-input').value;
//     const content = document.getElementById('content-input').value;
//     addNewNote(title, content);
// });


// Event listeners
document.querySelectorAll('.favorite-button').forEach(button => 
    button.addEventListener('click', () => toggleFavorite(button.getAttribute('data-noteId'))),
    
);
document.getElementById('stars-icon').addEventListener('click', displayFavoriteNotes);


