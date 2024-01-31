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


dialog.showModal()

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

let localValue;
let localKey;

savedInput.addEventListener("input", function () {
  for (let i = 0; i < localStorage.length; i++) {
     localKey = localStorage.key(i);
    let localValue = JSON.parse(localStorage.getItem(localKey));
    let savedValue = savedInput.value;

    if (localValue.content.includes(savedValue) || localValue.title.includes(savedValue)) {
      console.log('Anteckning:' + localKey + ', Värde:' + localValue.content);
    }
    
  }
  displayResult(localValue);
  
});


function displayResult(localValue) {
  resultList.innerHTML = ` <div class="result-item">
            <h3 class="result-header">${localValue.title}</h3>
            <h6 class="result-tags"></h6>
            <p class="result-content">${localValue.content}</p>
          </div>`
}