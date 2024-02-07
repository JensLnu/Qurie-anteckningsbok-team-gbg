import { createHtmlElem } from './createHtmlElem.js';

// lägger till en hashtags inputfält & delete knapp
export function addHashtag(e) {
    // just nu är detta hela diven för tag funktionen
    const hashtagContainer = createHtmlElem('div', '', e.target.parentElement.parentNode, 'hashtag-container', 'flex');

    const parentElement = e.target.parentElement.parentNode;

    // hashtag div skapas 
    const hashtagDiv = createHtmlElem('div', '', parentElement, 'hashtag-div');

    // här skriver användaren taggen 
    const hashtagInput = createHtmlElem('input', '', hashtagContainer, 'hashtag-input');

    
    // när man trycker utanför så sparas taggen till objektet/klassen (?) addTag.
    hashtagInput.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            const hashtagValue = hashtagInput.value;
            savedNote.addTag(hashtagValue); // lägger till hashtagen i objektet
            
            //kör funktionen createTags med hashtagvalue som parameter.
        createTags(hashtagValue, hashtagDiv);
        }
    });
    hashtagInput.focus();
    return hashtagContainer;
};

// en funktion som skapar h6 för tagg och dltbtn samt evnt lyssnare till den för att ta bort taggen
export function createTags(hashtagValue, hashtagDiv ) {
    // skapa diven taggar ska ligga i 
    const savedTagsDiv = createHtmlElem('div', '', hashtagDiv, 'saved-tags-div');

    //skapa h6 för varje tagg med # framför och appenda till savedTagsDiv
    const singleTag = createHtmlElem('h6', '#' + hashtagValue, savedTagsDiv, 'single-tag');

    //skapa dltBtn till varje tagg och appenda till savedTagsDiv
    const dltTag = createHtmlElem('button', 'x', savedTagsDiv, 'dlt-tag');

    // ta bort taggen med evntlyssnare på dltTag
    dltTag.addEventListener('click', () => {
        // tar bort hashtag från objektet/klassen(?).
        savedNote.removeTag(hashtagValue);
        //ta bort hashtag från domen
        savedTagsDiv.remove();
    })
};