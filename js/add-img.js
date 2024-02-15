// Kolla om det finns något ID i LS annars är ID = 0
let imgCounter = Math.max(0, localStorage.getItem('img-counter'));

// Eventlistener på file-input
// Konvertera valda filen till en URL
// Lägg till bild med korrekt src och ID
// Uppdatera imgCounter (även i localstorage)
imgBtn.addEventListener('change', (event) => {
    if (event.target.files && event.target.files[0]) {
        const noteTextArea = document.getElementById('text-area');
        let url = URL.createObjectURL(event.target.files[0]); 
        noteTextArea.innerHTML += `
        <div class="img-container">
            <img class="myImg" src="${url}" id="img-${imgCounter}">
        </div>
        `;
        imgCounter++;
        localStorage.setItem('img-counter', imgCounter);
    }
});

// Davids gtag
const myInput = document.getElementById('imgBtn');
myInput.addEventListener('click', function () {
    gtag('event', 'new_button_click'), {
        'event_category':'image_click',
        'event_label': 'new_click'
    }
});