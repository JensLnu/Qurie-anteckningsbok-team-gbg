// Hämtar data från '../json/firstVisit.json' asynkront.
// Om respons ok skickas det till displayFirstMessage
// IIFE för att köras direkt när sidan laddas
(async function getFirstVisit() {
    let response = await fetch('./json/firstVisit.json');
    if (response.ok) {
        response = await response.json();
        displayFirstMessage(response);
    
    } else {
        console.log('Error:', response.status);
    }
})();

// Kollar att LS är tomt på anteckningar(nycklar bestående av nummer)
// Om tomt visas Välkomsmeddelandet med innehåll från JSON
function displayFirstMessage(response) {
    const textArea = document.getElementById('text-area');

    if (isLocalStorageEmpty()) {
        textArea.innerHTML = `
        <div id ="first-div">
            <h1 id = "first-rubrik">Välkommen till Qurie</h1>
            <p>${response.paraText}</p>
            <div class = "info-div"><h3 class = "header-info">Navigera</h3><p class = "p-info">${response.search}</p></div>
            <div class = "info-div"><h3 class = "header-info">Favorisera</h3><p class = "p-info">${response.favorite}</p></div>
            <div class = "info-div"><h3 class = "header-info">Analysera</h3><p class = "p-info">${response.analyse}</p></div>
            <div class = "info-div"><h3 class = "header-info">Konfigurera</h3><p class = "p-info">${response.settings}</p></div>        
        </div>      
    `;
    }
}


// Hämta alla nycklar från LS
// Om en nyckel motsvarar en siffra har vi en anteckning (alla noteID är siffror)
// Om en nyckel som passar hittas så returnas false annars true
function isLocalStorageEmpty() {
    const allKeys = Object.keys(localStorage);
    let noOfItems = 0;

    for (let i = 0; i < allKeys.length; i++){
        if(!isNaN(parseInt(allKeys[i]))){
            noOfItems++
        }
    }
    if(noOfItems > 0) return false
    else return true;
}

/**
 * Kontrollerar om den lokala lagringen är tom genom att iterera genom alla nycklar
 * och verifiera att varje motsvarande värde varken är null eller undefined.
 * Sant om den lokala lagringen är tom, annars falskt. 
 * */
// const key = allKeys[i];

// Hämta värdet som är kopplat till nyckeln
// const value = localStorage.getItem(key);

// Kontrollera om värdet inte är null eller undefined
// if (value !== null && value !== undefined) {
//     noOfItems++
// }