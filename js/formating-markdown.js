/* 
15. (8.5 points) Som användare vill jag kunna klistra in markdown i en anteckning och att den formaterar sig korrekt --Jens och Oskar 
*/

// function formatingMarkdown(){
//     console.log('formatingMarkdown')
//     const note = document.querySelector('.note-textarea');
//     note.addEventListener('input', () => {
//         //convertToMarkdown();
//     }); 
//     console.log(note);
//     convertToMarkdown(note.firstElementChild.textContent);
// }
let string1 = '**hej** *detta är mellan* **123** > blockquote';
convertToMarkdown(string1);

function convertToMarkdown(text) {
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/^>\s*(.*$)/gm, '<blockquote>$1</blockquote>');

    //console.log(text)
}