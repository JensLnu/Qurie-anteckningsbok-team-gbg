document.addEventListener('DOMContentLoaded', getFirstVisit);

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

function displayFirstMessage(response) {
    const textArea = document.getElementById('text-area');
    const textContent = localStorage.getItem('text');


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

