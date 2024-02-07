// Importera nödvändiga funktioner från andra moduler.
import { createNotesContainer } from "./add-several-notes.js";
import { chooseNote } from "./swap-note.js";

// Funktion för att växla favoritstatus på en sparad anteckning.
function toggleFavorite() {
    savedNote.updateFavorite(); // Uppdaterar favoritstatus för en specifik anteckning.   
}

// Funktion för att hitta och visa favoritmarkerade anteckningar.
function findFavorites() {
    let savedNote; // Deklarerar en variabel för att hålla den nuvarande behandlade anteckningen.
    let noteContainer = document.querySelector('.saved-notes');
    let starsIcon = document.querySelector('.stars-icon');

    starsIcon.classList.toggle('active');// Växlar klassen 'active' för att visuellt indikera om filtret är aktivt eller inte.

    if (starsIcon.classList.contains('active')) {
        starsIcon.querySelector('.stars').style.color = "#FFD700"; 
    } else {
        starsIcon.querySelector('.stars').style.color = "white"; 
    }

    noteContainer.innerHTML = '';
    let localKey; // Deklarerar en variabel för att hålla nyckeln till den aktuella posten i localStorage.

    for (let i = 0; i < localStorage.length; i++) {
        localKey = localStorage.key(i);

        try {
            savedNote = JSON.parse(localStorage.getItem(localKey));
            
            // Kontrollerar om stjärnikonen är aktiv och om den sparade anteckningen är markerad som favorit.
            if (starsIcon.classList.contains('active')) {
                if (savedNote.favorite) {
                    createNotesContainer(savedNote.noteId);// Skapar ett element för anteckningen om den är en favorit.
                }
            } else {
                createNotesContainer(savedNote.noteId);// Skapar ett element för anteckningen även om favoritfilter inte är aktiverat.
            }
        } catch (error) {
            console.error(`Error parsing JSON for localStorage key ${localKey}: ${error}`);
        }
    }

    chooseNote(); // Anropar funktionen för att möjliggöra val av en anteckning efter att listan har uppdaterats.   
}

// Event listeners
document.querySelector('.favorite-button').addEventListener('click', toggleFavorite);
document.querySelector('.stars-icon').addEventListener('click', findFavorites);



