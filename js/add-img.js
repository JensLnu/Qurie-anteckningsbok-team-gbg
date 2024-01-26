// Get input button
// Image counter, needs to be fixed to get number of images after page refresh
const imgBtn = document.getElementById('imgBtn');
let imgCounter = 0;

// When file is selected get the note area
// Convert file to URL
// Add image-tag to document with unique ID and source
// Update counter
imgBtn.addEventListener('change', (event) => {
    if (event.target.files && event.target.files[0]) {
        const noteTextArea = document.querySelector('.note-textarea');
        let url = URL.createObjectURL(event.target.files[0]); 
        noteTextArea.innerHTML += `
        <img class="myImg" src="${url}" id="img-${imgCounter}">
        `;
        imgCounter++;
    }
});

// innerHTML saves on input. Adding img does not count as input. Find other listener