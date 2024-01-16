const addBtn = document.querySelector('.add-btn');
const textArea = document.getElementById('text-area');


addBtn.addEventListener('click', () => {
    textArea.innerHTML = '<textarea name="title" id="title"></textarea>';
    const note = document.getElementById('title');
    note.addEventListener('input', () => {
        localStorage.setItem('text', note.value);
    })
    note.focus();
});