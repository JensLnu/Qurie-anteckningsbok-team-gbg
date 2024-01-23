const addBtn = document.querySelector('.add-btn');
const addBtnMobile = document.querySelector('.add');
const textArea = document.getElementById('text-area');


addBtn.addEventListener('click', addNote);
addBtnMobile.addEventListener('click', addNote);

function addNote(){
    textArea.innerHTML = '<textarea name="title" id="title"></textarea>';
    const note = document.getElementById('title');
    note.addEventListener('input', () => {
        localStorage.setItem('text', note.value);
    })
    note.focus();
    formatingMarkdown();
};

