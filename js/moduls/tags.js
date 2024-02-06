import { createHtmlElem } from './createHtmlElem.js';

// lägger till en hashtags inputfält & delete knapp
export function addHashtag(e) {
    const hashtagContainer = createHtmlElem('div', '', e.target.parentElement.parentNode, 'hashtag-container', 'flex');
    const hashtagInput = createHtmlElem('input', '', hashtagContainer, 'hashtag-input');
    hashtagInput.addEventListener('focusout', () => {
        savedNote.addTag(hashtagInput.value); // lägger till hashtagen i objektet
    });
    createHtmlElem('button', 'X', hashtagContainer, 'delete-btn');
    const hashtagDeleteBtn = hashtagContainer.querySelector('.delete-btn');
    hashtagDeleteBtn.addEventListener('click', (e) => {
        savedNote.removeTag(hashtagInput.value); // tarbort hashtagen ur objektet
        hashtagInput.parentElement.remove(); // tarbort hashtagen ur DOMen
    })
    hashtagInput.focus();
    return hashtagContainer;
}