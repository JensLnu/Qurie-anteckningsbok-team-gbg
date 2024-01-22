//Som användare vill jag kunna skapa rubriker, punktlistor, numrerade listor samt göra text kursiv eller fetstil

const btnOptions= document.querySelector('.btn-options');
btnOptions. addEventListener('click', changeFontStyle);


function changeFontStyle(e) {
   const text = document.querySelector('.notesPreview') ;
    if(e.target.id === "bold") {
        e.target.classList.toggle('active');
        text.classList.toggle('bold');
    }  
    if(e.target.id === "italic") {
        e.target.classList.toggle('active');
        text.classList.toggle('italic');
    }  
    if(e.target.id === "header") {
        e.target.classList.toggle('active');
        text.classList.toggle('2em');
    }  
    if(e.target.id === "createbulletList") {
        e.target.classList.toggle('active');
        text.classList.toggle('disc');
    }  
    if(e.target.id === "createNumberedList") {
        e.target.classList.toggle('active');
        text.classList.toggle('decimal');
    }
}