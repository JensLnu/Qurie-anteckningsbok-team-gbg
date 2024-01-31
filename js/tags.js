/*--- Som användare vill jag kunna lägga taggar på mina anteckningar och kunna plocka fram alla anteckningar med en viss tag ---*/

/* Som användare vill jag kunna:
[x]- via en knapp # bredvid delete-btn kunna lägga till taggar för en anteckning.
[x]- se mina taggar under titeln i sidebar när noten är aktiv, och dölja övriga tags.
[]- söka efter specifika taggar via search i navigation
[]    - se enbart de notes med sökt tagg i sidebar (utan att taggarna visas under varje note)
[]    - text-area är tom efter sökt tagg, tills man väljer en note
[x]- visa taggar i varje note
[x]- ta bort taggar i varje note

[x]- exportera och importera till add-several-notes
*/
import { createHtmlElem } from './moduls/createHtmlElem.js';

// lägger till en hashtags inputfält & delete knapp
export function addHashtag(e) {
    const hashtagContainer = createHtmlElem('div', '', e.target.parentElement.parentNode, 'hashtag-container', 'flex');
    const hashtagInput = createHtmlElem('input', '', hashtagContainer, 'hashtag-input');
    hashtagInput.addEventListener('focusout', () => {
        saveHashtagToObj(e);
    });
    createHtmlElem('button', 'X', hashtagContainer, 'delete-btn');
    const hashtagDeleteBtn = hashtagContainer.querySelector('.delete-btn');
    hashtagDeleteBtn.addEventListener('click', (e) => {
        removeHashtag(e);
    })
    return hashtagContainer;
}

// sparar alla hashtags i objektet 'savedNote'
function saveHashtagToObj(e) {
    const currentNote = e.target.parentNode.parentNode;
    const allTags = currentNote.querySelectorAll('.hashtag-input');
    allTags.forEach(input => {
        savedNote.hashtags.push(input.value);
        input.setAttribute(`data-hashtag`, input.value);
    });
    localStorage.setItem(savedNote.noteId, JSON.stringify(savedNote));
}

// tarbort 'hashtagen' ur objektet & i DOMen
function removeHashtag(e) {
    const hashtagName = e.currentTarget.previousSibling.value;
    savedNote.hashtags = savedNote.hashtags.filter(hashtag => hashtag !== hashtagName);
    e.currentTarget.parentElement.remove();
    localStorage.setItem(savedNote.noteId, JSON.stringify(savedNote));
}


// const searchbar = document.getElementById('input-search-bar');
// searchHashtags();
// function searchHashtags() {
//     searchbar.addEventListener('input', () => {
//         // savedNote = 
//     });
// }