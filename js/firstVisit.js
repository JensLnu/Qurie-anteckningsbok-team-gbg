document.addEventListener('DOMContentLoaded', getFirstVisit);


// Hämtar data från '../json/firstVisit.json' asynkront.
async function getFirstVisit() {
    let response = await fetch('./json/firstVisit.json');
    console.log(response)
    if (response.ok) {
        response = await response.json();
        displayFirstMessage(response);
    
    } else {
        console.log('Error:', response.status);
    }
}

// Visar den första välkomstmeddelandet på sidan
function displayFirstMessage(response) {
    const textArea = document.getElementById('text-area');

    // om det inte fins sparad text i localStorage, skapar och lägger till
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
       
        console.log('Inga anteckningar sparade i localstorage än');
    }
}

/**
 * Kontrollerar om den lokala lagringen är tom genom att iterera genom alla nycklar
 * och verifiera att varje motsvarande värde varken är null eller undefined.
 * Sant om den lokala lagringen är tom, annars falskt. 
 * */
function isLocalStorageEmpty() {
    
    // Hämta alla nycklar i den lokala lagringen
    const allKeys = Object.keys(localStorage);

    // Iterera genom varje nyckel
    for (let i = 0; i < allKeys.length; i++){
        const key = allKeys[i];

        // Hämta värdet som är kopplat till nyckeln
        const value = localStorage.getItem(key);

        // Kontrollera om värdet inte är null eller undefined
        if (value !== null && value !== undefined) {

            // Om något icke-tomt värde hittas, returnera falskt
            return false;
        }
    }

    // Om alla värden antingen är null eller undefined, returnera sant
    return true;
}
