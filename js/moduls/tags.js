import { createHtmlElem } from './createHtmlElem.js';

// skapar en div för alla hashtag element
// lägger till en hashtags inputfält
// enventListner körs när användaren trycker 'enter' & då sparas hashtagen i instansen & createTags() körs
export function addHashtag(e) {
    const parentElementContainer = e.target.parentElement.parentNode;
    const hashtagContainer = createHtmlElem('div', '', parentElementContainer, 'hashtag-container', 'flex');
    const hashtagDiv = createHtmlElem('div', '', parentElementContainer, 'hashtag-div', 'flex');
    const hashtagInput = createHtmlElem('input', '', hashtagContainer, 'hashtag-input');
    
    hashtagInput.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            savedNote.addTag(hashtagInput.value);
        createTags(hashtagInput.value, hashtagDiv);
        }
    });
    hashtagInput.focus();
    return hashtagContainer;
};

// skapar ett div element som alla tags ska ligga i
// skapar en tag med de som skrivs i inputen
// skapar dltBtn till alla tags
// eventListnern tar bort taggen från DOM & klass instansen
export function createTags(hashtagValue, hashtagDiv ) {
    const savedTagsDiv = createHtmlElem('div', '', hashtagDiv, 'saved-tags-div');
    createHtmlElem('h6', '#' + hashtagValue, savedTagsDiv, 'single-tag');
    const img = createHtmlElem('img', '', savedTagsDiv, 'x-img');
    img.src = "./image/delete-button.png"; 
    img.addEventListener('click', () => {
        savedNote.removeTag(hashtagValue);
        savedTagsDiv.remove();
    })
};