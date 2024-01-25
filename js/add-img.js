let imgCounter = 0;

// Function to set up the image upload functionality
function getImg() {
    const toolbar = document.getElementById('toolbar')
    const addImgInput = document.createElement('input');
    addImgInput.type = 'file';    
    toolbar.appendChild(addImgInput);
    
    addImgInput.addEventListener('click', () => {        
        const noteTextArea = document.querySelector('.note-textarea');
             
       // Define a function to add the image to the note textarea
        function addImageToNote() {
            noteTextArea.innerHTML += `
            <img class="myImg" src="#" id="img-${imgCounter}">
        `;
    }
        
      // Increment the counter for the next image
      imgCounter++;
  
      // Add the image to the note textarea after the input element has been created
      setTimeout(addImageToNote, 100); // Delay for 100 milliseconds
    });
           
    // Event listener for the window load event
    window.addEventListener('load',  () => {
        document.querySelector('input[type="file"]').addEventListener('change', (event) => {
        
            if (event.target.files && event.target.files[0]) {
                const img = document.getElementById(`img-${imgCounter}`);

                img.addEventListener('change', () => {
                    // The 'note' variable is now assigned a value
                    let note = document.querySelector('.note-textarea');
                    note.appendChild(img);
                    localStorage.setItem(`img-${imgCounter}`, img.src);
                })

                    img.src = URL.createObjectURL(event.target.files[0]); 
            }
         });    
    });
};


getImg();








//------------- hur bilden ska bete sig i browsern ------------
// vi vill kunna länka bilden till den aktuella anteckningen
// storleken på bilden ska vara samma på alla 

//---------- kodlogik ---------------
// skapa en eventListener på window ?
// försöka att lägga till den bilden på den aktuella anteckningen 
// spara bilden i localStorage
//