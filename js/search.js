// Skapa en modal
// Lägg den i main ovanför text area
// Klickar du på search, öppnas modalen
// Gör en function som kollar igenom localstorage
// Sök efter titlarna, matchar det med input value
// Displayar resultaten i result-list

// Lägg en eventlistener, rätt note vid rätt klick
// När vi klickar på ett resultat vill vi att modaler stängs ner

const dialog = document.querySelector("dialog")
const openSearchModal = document.getElementById("open-search-modal")
// tags
const hashtagsOrNot = document.getElementById('search-for-hashtag');
let searchForHashtag = false;

hashtagsOrNot.addEventListener('click', () => {
  if (!searchForHashtag) {
    searchForHashtag = true;
    hashtagsOrNot.classList.add('hashtag-marked');
  } else {
    searchForHashtag = false;
    hashtagsOrNot.classList.remove('hashtag-marked');
  }
});

// dialog.showModal()

openSearchModal.addEventListener("click", function () {
  dialog.showModal() // Opens a modal
})


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

let savedInput = document.getElementById('input-search-bar');
let resultList = document.getElementById('result-list');


let localKey;

savedInput.addEventListener("input", function () {
  let savedValue = savedInput.value.trim(); // Ta bort mellanslag från början och slutet av inputvärdet

  // Om savedValue är tomt, rensa resultList och avsluta funktionen
  if (savedValue === '') {
    resultList.innerHTML = '';
    return;
  }

  resultList.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    localKey = localStorage.key(i);
    savedNote = JSON.parse(localStorage.getItem(localKey));

    const hashtagString = savedNote.hashtags.join(' ');
    console.log(savedNote.hashtags)
    console.log(hashtagString)

    if (!searchForHashtag) {
      if (savedNote && (savedNote.content.toLowerCase().includes(savedValue.toLowerCase()))) {
        console.log('if')
        displayResult(localKey);
      } else {
        console.log('else')
        // Konvertera både savedValue och localValue.title/content till små bokstäver för jämförelse
        if (savedNote && (savedNote.content.toLowerCase().includes(savedValue.toLowerCase()) ||
          savedNote.title.toLowerCase().includes(savedValue.toLowerCase()))) {
          displayResult(localKey);
        }
      }
    }
  }
});

function displayResult(key) {
  const resultItem = document.createElement('div');
  resultItem.classList.add('result-item');
  resultItem.innerHTML = ` 
      <h3 class="result-header">${savedNote.title}</h3>
      <h6 class="result-tags"></h6>
      <p class="result-content">${savedNote.content}</p>`;

  // Lägg till klickhändelse för att visa innehållet vid klick
  resultItem.addEventListener('click', function () {
    showContent();
  });

  resultList.appendChild(resultItem);
}

function showContent() {

  dialog.close()
  chooseNote();
}
