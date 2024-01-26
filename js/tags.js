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

console.log('halllooooo');

export function addHashtagBtn() {
    const hashtagBtn = document.createElement('button');
    hashtagBtn.classList.add('hashtag-btn');
    hashtagBtn.textContent = '#';
    return addHashtagBtn;
}

export function addHashtag() {
    const hashtagContainer = document.createElement('div');
    hashtagContainer.classList.add('hashtag-container');

    
    const hashtagInput = document.createElement('input');
    hashtagInput.classList.add('hashtag-input');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'X';


    hashtagInput.appendChild(hashtagContainer);
    deleteBtn.appendChild(hashtagContainer);

    return hashtagContainer;
}