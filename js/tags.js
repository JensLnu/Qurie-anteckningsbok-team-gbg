/*--- Som användare vill jag kunna lägga taggar på mina anteckningar och kunna plocka fram alla anteckningar med en viss tag ---*/

/* Som användare vill jag kunna:
[x]- via en knapp # bredvid delete-btn kunna lägga till taggar för en anteckning.
[x]- se mina taggar under titeln i sidebar när noten är aktiv, och dölja övriga tags.
[x] söka efter specifika taggar via search i navigation. Nu söker den efter tags i alla notes, öppnar den man klickar på och döljer övriga notes taggar i sidebaren direkt :)
[x]- visa taggar i varje note
[x]- ta bort taggar i varje note
[x]- exportera och importera till add-several-notes

BUGS, LATER!!

OBS: använd metoder och objekt från newNote.js, så kan vi enklare fixa buggarna. Började på en version som är utkommenterad längst ner, men får den inte att fungera helt. Istället för att hashtagsen sparas i ett specifikt noteId i lS så sparas den av någon anledning i key "undefined"... HJÄLP :)

[] - om man lägger till samma hashtag igen syns den i sidebaren men läggs inte till i ls. (tror jag vill att det inte ska gå att lägga till samma igen?).
[] - om man ändrar en redan sparad hashtag så sparas en ny och den gamla behålls, det ska den inte.
[x] - funktionalitet för att dem sparade hashtagsen i ls ska läsas in i sidebaren igen. Se createNotesContainer i add-several-notes.js. Finns det ett enklare sätt med mindre rader kod??
[] - hashtag sparas inte om man inte klickar på något annat, så om du skriver en hashtag och uppdaterar sidan utan att klicka någon annanstans först så sparas den inte... kan man göra så att alla ändringar sparas direkt i localStorage på samma sätt som t.ex content i text-area? Ändra focusout till input kanske?
[] - när man skapar en ny note är den senaste aktiva noten markerad istället för den nya.
*/

import { createHtmlElem } from './moduls/createHtmlElem.js';

// lägger till en hashtags inputfält & delete knapp
export function addHashtag(e) {
    const hashtagContainer = createHtmlElem('div', '', e.target.parentElement.parentNode, 'hashtag-container', 'flex');
    const hashtagInput = createHtmlElem('input', '', hashtagContainer, 'hashtag-input');
    hashtagInput.addEventListener('focusout', () => {
        saveHashtagToObj();
    });
    createHtmlElem('button', 'X', hashtagContainer, 'delete-btn');
    const hashtagDeleteBtn = hashtagContainer.querySelector('.delete-btn');
    hashtagDeleteBtn.addEventListener('click', (e) => {
        removeHashtag(e);
    })
    hashtagInput.focus();
    return hashtagContainer;
}

// sparar alla hashtags i objektet 'savedNote'
function saveHashtagToObj() {
    const allTags = savedNote.htmlReference.querySelectorAll('.hashtag-input');
    // kontrolerar så att det inte sparas en "tom" hashtag och att man inte sparar dubbletter
    allTags.forEach(input => {
        if (!savedNote.hashtags.includes(input.value) && input.value !== '') {
            savedNote.addTag(input.value)
            input.setAttribute(`data-hashtag`, input.value);
        }
    });
}

// tarbort 'hashtagen' ur objektet & i DOMen
function removeHashtag(e) {
    const hashtagName = e.currentTarget.previousSibling.value;
    savedNote.hashtags = savedNote.hashtags.filter(hashtag => hashtag !== hashtagName);
    e.currentTarget.parentElement.remove();
    localStorage.setItem(savedNote.noteId, JSON.stringify(savedNote));
}


/* OBS: fungerar inte. Får inte hashtagsen att sparas i det specifika noteId. Istället sparas alla hashtags i en key som heter "Undefined". Fungerar iaf att ändra alla hashtags vid input haha.... */

/* import { createHtmlElem } from './moduls/createHtmlElem.js';
import Note from './classes/newNote.js';

// const savedNote = new Note();

// Funktion för att lägga till hashtag
export function addHashtag(e) {
    const hashtagContainer = createHtmlElem('div', '', e.target.parentElement.parentNode, 'hashtag-container', 'flex');
    const hashtagInput = createHtmlElem('input', '', hashtagContainer, 'hashtag-input');
    // Lyssna efter input för att spara samtidigt
    hashtagInput.addEventListener('input', () => saveHashtagsToObj(e));

    const hashtagDeleteBtn = createHtmlElem('button', 'X', hashtagContainer, 'delete-btn');
    hashtagDeleteBtn.addEventListener('click', () => removeHashtag(e, hashtagInput));

    hashtagInput.focus();
    return hashtagContainer;
}

// Funktion för att spara alla hashtags till savedNote
function saveHashtagsToObj(e) {
    const currentNote = e.target.parentNode.parentNode;
    const allTags = currentNote.querySelectorAll('.hashtag-input');

    // Uppdatera savedNote med värdena från input-fälten och filtrera bort tomma strängar
    savedNote.hashtags = Array.from(allTags).map(input => input.value).filter(Boolean);

    updateAndSaveNote();
}

// Funktion för att ta bort hashtag frpn objekt och DOM
function removeHashtag(e, hashtagInput) {
    const hashtagContainer = hashtagInput.parentElement;
    const hashtagName = hashtagContainer.querySelector('.hashtag-input').value;

    // Filtrera bort den borttagna hashtagen från savedNote
    savedNote.hashtags = savedNote.hashtags.filter(hashtag => hashtag !== hashtagName);
    // Ta bort från DOM
    hashtagContainer.remove();
    updateAndSaveNote();
}

// Funktion för att uppdatera och spara anteckn ingen efter ändringar
function updateAndSaveNote() {
    savedNote.save(); // Save-metod från note-klassen
} */