/*--- Som användare vill jag kunna lägga taggar på mina anteckningar och kunna plocka fram alla anteckningar med en viss tag ---*/

/* Som användare vill jag kunna:
- via en knapp # bredvid delete-btn kunna lägga till taggar för en anteckning.
- se mina taggar under titeln i sidebar när noten är aktiv.
- söka efter specifika taggar via search i navigation
    - se enbart de notes med sökt tagg i sidebar (utan att taggarna visas under varje note)
    - text-area är tom efter sökt tagg, tills man väljer en note
- visa och ta bort taggar i varje note

- exportera och importera till add-several-notes
*/
import {createHtmlElem} from './moduls/createHtmlElem.js';

export function addHashtag(e) {
    console.log('start addHashtag')
    const hashtagContainer = createHtmlElem('div', '', e.target.parentElement.parentNode, 'hashtag-container', 'flex');
    createHtmlElem('input', '', hashtagContainer, 'hashtag-input');
    createHtmlElem('button', 'X', hashtagContainer, 'delete-btn');
    console.log('slut addHashtag')
    
    return hashtagContainer;
}

export function saveHashtagToLs() {
    const allTags = document.querySelectorAll()
}