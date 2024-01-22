document.addEventListener('DOMContentLoaded', getFirstVisit);


// Hämtar data från '../json/firstVisit.json' asynkront.
async function getFirstVisit() {
    let response = await fetch('../json/firstVisit.json');
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

    // hämta sparad text från localStorage
    const textContent = localStorage.getItem('text');

    // om det inte fins sparad text i localStorage, skapar och lägger till
    if (!textContent) {
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

>>>>>>> 1076818aa1760453042064e50bc7cd8843c3bf53
