
// Lägg till eventlistener till alla existerande anteckningar när sidan laddas
document.addEventListener('DOMContentLoaded', chooseNote);

// makes all notes clickable and enabels header to be editable
// array with all div elements (notes), needs to be updated every time the function is executed as new notes may have been added
// Hittar igen alla anteckningar i sidebaren
// Lägger till eventlistener för att kunna visa anteckningen som klickas på
// Eventlistener för att kunna uppdatera anteckningens titel
function chooseNote() {
    const allNotes = document.querySelectorAll('.notes'); 
    allNotes.forEach(note => {
        note.addEventListener('click', (e) => {
            displayNote(e);
        });
        note.firstElementChild.addEventListener('input', (e) => {
            updateHeaderForNote(e);
        });
    })
}

// displays clicked note
// Se vilken anteckning som klickas på
// Highlighta anteckningen i sidebaren
// Hämta anteckningen från LS med IDt från previewn
// Lägg till innehållet i textarean
// Lägg till id till textarean
// Lägg till fonten till textarean
// Uppdatera font-selection efter om det finns en använd font eller inte
function displayNote(e) {
    let selectedNote = e.currentTarget;
    hithLightTargedNote(selectedNote);
    savedNote = JSON.parse(localStorage.getItem(selectedNote.firstElementChild.firstElementChild.getAttribute('data-noteId')));
    textarea.innerHTML = savedNote.content;
    textarea.setAttribute('data-Id', savedNote.noteId)
    applyFont(savedNote.font);
    if(savedNote.font != ''){
        fontDropdown.value = savedNote.font;
    } else {
        fontDropdown.getElementsByTagName('option')[0].selected = 'selected'
    }
}

// change bg color on targed note
// Hämta alla notes från sidebaren
// Ta bort alla förekomster av 'displayed note'
// Lägg till 'displayed-note' till anteckningen som klickades på
function hithLightTargedNote(selectedNote) {
    const allNotes = document.querySelectorAll('.notes');
    allNotes.forEach(note => {
        note.classList.remove('displayed-note');
    });
    selectedNote.classList.add('displayed-note');
}