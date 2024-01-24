//Som användare vill jag kunna skapa rubriker, punktlistor, numrerade listor samt göra text kursiv eller fetstil
const boldBtn = document.getElementById('bold'); //<strong></strong>
const italicBtn = document.getElementById('italic'); //<em> </em>
const heading1Btn = document.getElementById('heading-1'); //<h1></h1>
const heading2Btn = document.getElementById('heading-2');//<h2></h2>
const heading3Btn = document.getElementById('heading-3');//<h3></h3>
const ulBtn = document.getElementById('unordered-list'); //<ul><li></li></ul>
const olBtn = document.getElementById('ordered-list'); //<ol><li></li></ol>
const regularBtn = document.getElementById('regular'); // <p></p>

// Kunna markera text och hitta igen det i HTML
// Omringa den markerade texten av relevanta taggar
// Använd e.preventDefault() för att förhindra att markeringen försvinner

