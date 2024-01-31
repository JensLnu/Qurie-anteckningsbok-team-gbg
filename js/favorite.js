// användaren ska kunna markera en anteckning som favorit så jag enkelt kan hitta till den igen när de behöver den. 

/*tasks:
-lägg till en stjärnknapp i sidbaren som i add several notes som en funktion och det gör man i funktionen create an element och appenda den.
-sätt en class till stjärnknappen så att det är unik. när man trycker på knappen så fylls den i.
-när man trycker på favorit knappen i sidbaren så ska den kolla om den som markerade finns i anteckningarna.
-sist ska den displaya.
*/

let notesArray = JSON.parse(localStorage.getItem('notes')) || [];

function saveNoteToLocalStorage(noteId, noteTextarea, font) {
    let note = findNoteById(noteId) || {
        noteId: noteId,
        title: "",
        content: "",
        font: "",
        favorite: false
    };
    
    note.title = document.querySelector(`[data-noteId="${noteId}"]`).textContent;
    note.content = noteTextarea.innerHTML;
    note.font = font;
    
    updateOrAddNoteToArray(note);
    localStorage.setItem('notes', JSON.stringify(notesArray));
}

// Resten av funktionerna som definierats tidigare

const favoriteButton = document.getElementById("favorite");
const savedNotesContainer = document.querySelector(".saved-notes");
  
// favoriteButton.addEventListener("click", () => {
//     // toggleFavorite(); 
//     console.log('hej');
//     saveFavorite(noteId);

// });
document.querySelectorAll('.favorite-button').forEach(button => {
    button.addEventListener('click', function() {
        let noteId = this.getAttribute('data-noteId');
        saveFavorite(noteId);
    });
});




// function saveFavorite() {
//     savedNote.favorite = !savedNote.favorite;
//     localStorage.setItem('favorite', savedNote.favorite);

// };

function saveFavorite(noteId) {
    // Hitta anteckningen med det givna noteId i din anteckningsarray
    let note = findNoteById(noteId);
    if (note) {
        note.favorite = !note.favorite;
        // Uppdatera användargränssnittet här om nödvändigt
        updateFavoriteButtonUI(noteId, note.favorite);
        // Spara den uppdaterade listan av anteckningar i localStorage
        saveNotesToLocalStorage();
    }
};

function findNoteById(noteId) {
    // Antag att du har en array av anteckningar
    return notesArray.find(note => note.noteId === noteId);
}

function updateFavoriteButtonUI(noteId, isFavorite) {
    // Uppdatera användargränssnittet baserat på favoritstatus
    // Exempel: Ändra färg eller ikon på favoritknappen
}

function saveNotesToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notesArray));
}





// lägga till en key i globa save-notes som heter 'favorite'
// den kan ha true eller false värde
// när man klickar på den så ändras statusen på den
// klicka på knappen och sparas i input


  
