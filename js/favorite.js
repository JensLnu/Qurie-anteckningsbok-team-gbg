import { createNotesContainer } from "./add-several-notes.js";
import { chooseNote } from "./swap-note.js";

document.querySelector('.favorite-button').addEventListener('click', toggleFavorite);
document.querySelector('.stars-icon').addEventListener('click', findFavorites);

// Funktion för att växla favoritstatus på en sparad anteckning.
// Use object method to update favorite status
function toggleFavorite() {
    savedNote.updateFavorite();
    
    //Toleen gtag   
    gtag('event', 'toggle_favorite', {
        'event_category': 'Favorite Actions', 
        'event_label': 'Note Favorite Toggled' 
    });
}

// Funktion för att hitta och visa favoritmarkerade anteckningar.
// Update status and color for favorite button in header
// Empty out all notes
// Iterate through all saved notes and display favorite-notes if favorites-button is active
// Else display all notes
// Run chooseNote to add eventlisteners to displayed notes
function findFavorites() {
    let savedNote;
    const noteContainer = document.querySelector('.saved-notes');
    const starsIcon = document.querySelector('.stars-icon');

    starsIcon.classList.toggle('active');
    noteContainer.innerHTML = '';

    if (starsIcon.classList.contains('active')) {
        starsIcon.querySelector('.stars').style.color = "#FFD700"; 
    } else {
        starsIcon.querySelector('.stars').style.color = "white"; 
    }

    // DENNA ÄR NOG ONÖDIG
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