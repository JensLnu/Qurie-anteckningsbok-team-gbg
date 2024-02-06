// Skapa en modal
// Lägg den i main ovanför text area
// Klickar du på search, öppnas modalen
// Gör en function som kollar igenom localstorage
// Sök efter titlarna, matchar det med input value
// Displayar resultaten i result-list
// När vi klickar på ett resultat vill vi att modaler stängs ner
// Lägg en eventlistener, rätt note vid rätt klick

import { displayNote } from "./swap-note.js";
import { createHtmlElem } from './moduls/createHtmlElem.js';

const dialog = document.querySelector("dialog");
const openSearchModal = document.getElementById("open-search-modal");
const hashtagsOrNot = document.getElementById('search-for-hashtag');
const savedInput = document.getElementById('input-search-bar');
const resultList = document.getElementById('result-list');

let searchForHashtag = false; // håller reda på ifall man söker efter hashtags eller inte

hashtagsOrNot.addEventListener('click', () => {
  if (!searchForHashtag) {
    searchForHashtag = true;
    hashtagsOrNot.classList.add('hashtag-marked');
  } else {
    searchForHashtag = false;
    hashtagsOrNot.classList.remove('hashtag-marked');
  }
});

openSearchModal.addEventListener("click", () => dialog.showModal()); // Opens a modal

// Stänger modalen om man klickar utanför
dialog.addEventListener("click", e => {
  const dialogDimensions = dialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close()
  }
});

savedInput.addEventListener("input", () => {
  let savedValue = savedInput.value.trim(); // Ta bort mellanslag från början och slutet av inputvärdet

  // Om savedValue är tomt, rensa resultList och avsluta funktionen
  if (savedValue === '') {
    resultList.innerHTML = '';
    return;
  }

  resultList.innerHTML = '';
  let localKey;
  for (let i = 0; i < localStorage.length; i++) {
    localKey = localStorage.key(i);
    savedNote = JSON.parse(localStorage.getItem(localKey));
    const hashtagString = savedNote.hashtags.join(' ');

    if (searchForHashtag && savedNote && (hashtagString.toLowerCase().includes(savedValue.toLowerCase()))) {
      displayResult();
    } else if (!searchForHashtag && savedNote && (savedNote.content.toLowerCase().includes(savedValue.toLowerCase()))
      || (!searchForHashtag && savedNote.title.toLowerCase().includes(savedValue.toLowerCase()))) {
      // Konvertera både savedValue och localValue.title/content till små bokstäver för jämförelse
      displayResult();
    }
  }
});

function displayResult() {
  const resultItem = createHtmlElem('div', '', resultList, 'result-item');
  resultItem.setAttribute("data-noteId-modal", savedNote.noteId)
  resultItem.innerHTML = ` 
      <h3 class="result-header">${savedNote.title}</h3>
      <h6 class="result-tags">${savedNote.hashtags.map(tag => tag = `#${tag}`).join(' ')}</h6>
      <p class="result-content">${savedNote.content}</p>`;

  // Lägg till klickhändelse för att visa innehållet vid klick
  resultItem.addEventListener('click', (e) => {
    savedInput.value = '';
    resultList.innerHTML = '';
    showContent(e);
  });
}

function showContent(e) {
  let resultNoteId = e.currentTarget.getAttribute("data-noteId-modal");
  dialog.close();
  displayNote(resultNoteId);
}