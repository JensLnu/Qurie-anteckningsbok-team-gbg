//Som användare vill jag kunna skapa rubriker, punktlistor, numrerade listor samt göra text kursiv eller fetstil

const btnOptions = document.querySelector('.btn-options');
const notesBody = document.querySelector('.notes__body');
const boldBtn = document.getElementById('bold');

btnOptions.addEventListener('click', changeFontStyle);
boldBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.getSelection();
})

function changeFontStyle(e) {
    if (e.target.id === "bold" || e.target.id === "italic" || e.target.id === "header" || e.target.id === "createbulletList" || e.target.id === "createNumberedList") {
        e.target.classList.toggle('active');
        notesBody.classList.toggle(e.target.id);
    }
}

function replaceSelected(selectedText) {
    const selected = window.getSelection();
    if(selected.rangeCount) {
        const range = selected.getRangeAt(0);
        range.deleteContents();
        range.insertNode(`<strong>${selectedText}</strong>`);
    }
}