/* 
15. (8.5 points) Som användare vill jag kunna klistra in markdown i en anteckning och att den formaterar sig korrekt --Jens och Oskar 
*/

function formatingMarkdown(){
    console.log('formatingMarkdown')
    const note = document.getElementById('text-area');
    console.log(note);
    convertToMarkdown(note.firstElementChild.textContent);
}

function convertToMarkdown(text) {
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    console.log(text)
}