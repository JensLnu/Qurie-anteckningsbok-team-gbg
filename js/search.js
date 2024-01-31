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
  })





// const inputSearchBar = document.getElementById("input-search-bar");
// const resultList = document.getElementById("result-list");


// function displayResult() {


// }

// inputSearchBar.addEventListener("input", displayResult)