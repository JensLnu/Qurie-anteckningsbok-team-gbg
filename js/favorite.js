import { createNotesContainer } from "./add-several-notes.js";
import { chooseNote } from "./swap-note.js";

function toggleFavorite() {
    savedNote.updateFavorite();    
}

function findFavorites() {
    let savedNote;
    let noteContainer = document.querySelector('.saved-notes');
    let starsIcon = document.getElementById('stars-icon');

    starsIcon.classList.toggle('active');

    noteContainer.innerHTML = '';
    let localKey;

    for (let i = 0; i < localStorage.length; i++) {
        localKey = localStorage.key(i);

        try {
            savedNote = JSON.parse(localStorage.getItem(localKey));

            if (starsIcon.classList.contains('active')) {
                if (savedNote.favorite) {
                    createNotesContainer(savedNote.noteId);
                }
            } else {
                createNotesContainer(savedNote.noteId);
            }
        } catch (error) {
            console.error(`Error parsing JSON for localStorage key ${localKey}: ${error}`);
        }
    }

    chooseNote();    
}

// Event listeners
document.querySelector('.favorite-button').addEventListener('click', toggleFavorite);
document.getElementById('stars-icon').addEventListener('click', findFavorites);



