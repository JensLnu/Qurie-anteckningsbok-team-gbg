// Get input button
// Image counter, needs to be fixed to get number of images after page refresh
let imgCounter = Math.max(0, localStorage.getItem('img-counter'));

// When file is selected get the note area
// Convert file to URL
// Add image-tag to document with unique ID and source
// Update counter
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
        saveNoteToLocalStorage(textarea.getAttribute('data-id'), textarea, textarea.style.fontFamily);
    }

});

// David gtag
const myInput = document.getElementById('imgBtn');
myInput.addEventListener('click', function (argument) {
    gtag('event', 'new_button_click'), {
        'image_click': 'new_click'
    }
});

// innerHTML saves on input. Adding img does not count as input. Find other listener