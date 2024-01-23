const addBtn = document.querySelector('.add-btn');
const addBtnMobile = document.querySelector('.add');
const textArea = document.getElementById('text-area');

addBtn.addEventListener('click', addNote);
addBtnMobile.addEventListener('click', addNote);

// When add button is clicked, add a text-area to the HTML
// Add eventlisterner to the new note to save all changes in local storage
// Focus the text-area
function addNote(){
    textArea.innerHTML = '<textarea name="title" id="title"></textarea>';
    const note = document.getElementById('title');
    note.addEventListener('input', () => {
        localStorage.setItem('text', note.value);
    })
    note.focus();
    formatingMarkdown();
};

