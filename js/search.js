import { displayNote } from "./swap-note.js";
import { createHtmlElem } from './moduls/createHtmlElem.js';

const dialog = document.querySelector("dialog");
const openSearchModal = document.getElementById("open-search-modal");
const hashtagsOrNot = document.getElementById('search-for-hashtag');
const savedInput = document.getElementById('input-search-bar');
const resultList = document.getElementById('result-list');
const htImg = document.getElementById('ht-img');

// variabel för att hålla reda på ifall man söker efter hashtags eller inte
// Eventlistener för att toggla sökfunktionen efter tag-sök eller vanligt
let searchForHashtag = false; 
hashtagsOrNot.addEventListener('click', () => {
  if (!searchForHashtag) {
    searchForHashtag = true;
    hashtagsOrNot.classList.add('hashtag-marked');
    htImg.src = "./image/hashtag-marked.png";
  } else {
    searchForHashtag = false;
    hashtagsOrNot.classList.remove('hashtag-marked');
    htImg.src = "./image/hashtag.png"
  }
});

// Öppnar modalen
openSearchModal.addEventListener("click", () => 
  dialog.showModal(),
  // Tovas g-tag
  gtag("event", "search_button", { 
    "event_category": "Search button interaction", 
    "event_label": "Search for note",
  }) 
); 

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

// Ta bort mellanslag från början och slutet av inputvärdet
// If-sats för att ta bort resultat om man tar bort den sökta texten och avsluta funktionen
// Ta bort allt innehåll på input
// For-loop som kollar igenom alla anteckningar i LS

savedInput.addEventListener("input", () => {
  let savedValue = savedInput.value.trim(); 

  if (savedValue === '') {
    resultList.innerHTML = '';
    return;
  }
  resultList.innerHTML = '';

  for (let i = 0; i < localStorage.length; i++) {
    const localKey = localStorage.key(i);
    
    // Kollar i localstorage om localKey är en siffra eller inte
    if(!isNaN(localKey)) {
      savedNote = JSON.parse(localStorage.getItem(localKey));
      const hashtagString = savedNote.hashtags.join(' ');

      // Gör om all text i savedValue och localValue.title/content
      // till små bokstäver så det inte är type-sensitive
      if (searchForHashtag && savedNote && (hashtagString.toLowerCase().includes(savedValue.toLowerCase()))) {
        displayResult();
      } else if (!searchForHashtag && savedNote && (savedNote.content.toLowerCase().includes(savedValue.toLowerCase()))
        || (!searchForHashtag && savedNote.title.toLowerCase().includes(savedValue.toLowerCase()))) {
        displayResult();
      }
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
// Stänger modalen och visar innehållet
function showContent(e) {
  let resultNoteId = e.currentTarget.getAttribute("data-noteId-modal");
  dialog.close();
  displayNote(resultNoteId);
}