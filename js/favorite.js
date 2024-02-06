import { createNotesContainer } from "./add-several-notes.js";
import { chooseNote } from "./swap-note.js";

function toggleFavorite() {
    savedNote.updateFavorite();    
}

function findFavorites() {
    let savedNote;
    let noteContainer = document.querySelector('.saved-notes');    
    noteContainer.innerHTML = '';
    let localKey;

    for (let i = 0; i < localStorage.length; i++) {
        localKey = localStorage.key(i);
        savedNote = JSON.parse(localStorage.getItem(localKey));
        
        if (savedNote.favorite) { //if-satsen körs bara för de som är true             
            createNotesContainer(savedNote.noteId);
        }         
    }
    chooseNote();    
}

// Event listeners
document.querySelector('.favorite-button').addEventListener('click', toggleFavorite);

document.getElementById('stars-icon').addEventListener('click', findFavorites);


