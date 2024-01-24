// Function to set up the image upload functionality
function getImg() {
    const toolbar = document.getElementById('toolbar')
    const addImgInput = document.createElement('input');
    addImgInput.type = 'file';
    
    toolbar.appendChild(addImgInput);
    
    addImgInput.addEventListener('click', function () {
        
        const noteTextArea = document.querySelector('.note-textarea');
      
        addImgInput.innerHTML = `
            <input type='file' />
        `;
        
        noteTextArea.innerHTML += `       
            <img id="myImg" src="#">
    
        `;
       
    });
        
}
// Event listener for the window load event
window.addEventListener('load', function () {

    document.querySelector('input[type="file"]').addEventListener('change', function() {
        
        if (this.files && this.files[0]) {
            let img = document.querySelector('img');
                img.onload = () => {
                URL.revokeObjectURL(img.src); 
            }
      
                img.src = URL.createObjectURL(this.files[0]); 
            }
        });
    
});

getImg();








//------------- hur bilden ska bete sig i browsern ------------
// vi vill kunna länka bilden till den aktuella anteckningen
// storleken på bilden ska vara samma på alla 

//---------- kodlogik ---------------
// skapa en eventListener på window ?
// försöka att lägga till den bilden på den aktuella anteckningen 
// spara bilden i localStorage
//