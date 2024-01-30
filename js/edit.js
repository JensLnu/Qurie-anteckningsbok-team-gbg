
//Som användare vill jag kunna skapa rubriker, punktlistor, numrerade listor samt göra text kursiv eller fetstil


// Kunna markera text och hitta igen det i HTML
// Omringa den markerade texten av relevanta taggar
// Använd e.preventDefault() för att förhindra att markeringen försvinner

function applyTag(tagName) {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        // console.log(selection.focusNode.childNodes[1])
        // Omringa den markerade texten av relevanta taggar
        const wrapper = document.createElement(tagName);
        wrapper.appendChild(range.extractContents());
        range.insertNode(wrapper);
    }
}


// Hämta markerad text
// Hämta range .getRangeAt(0)
// Kolla selection.focusNode.childNodes efter <strong>-tag
// Jämför innehållet mot den valda texten
// Om det stämmer överens med markerade texten byt ut <strong> och </strong> mot tom string
// Lägg tillbaka texten med range.insertNode()

// childNode[1] är alltid den markerade texten 

// function removeTag(tagname){
//     const selection = window.getSelection();
//     console.log(selection)
//     if(selection.rangeCount > 0){
//         const range = selection.getRangeAt(0)
//         const node = selection.focusNode.childNodes[1];
//         if(node.outerHTML.includes(`<${tagname}>`)){
//             const text = node.textContent;
//             const textNode = document.createTextNode(text)
//             range.extractContents();
//             range.insertNode(textNode);
//         }
//     }
// }


selectFormat.addEventListener('change', (e) => {
    console.log(selectFormat.selectedIndex);
    switch(selectFormat.selectedIndex) {
        case 0: 
            e.preventDefault();
            applyTag('p');
            break;
        case 1: 
            e.preventDefault();
            applyTag('h1');
            break;
        case 2: 
            e.preventDefault();
            applyTag('h2');
            break;
        case 3: 
            e.preventDefault();
            applyTag('h3');
            break;
        case 4:
            e.preventDefault();
            applyTag('li')
            applyTag('ul')
            break;
        case 5: 
            e.preventDefault();
            applyTag('li');
            applyTag('ol');
            break;
    }
})

// Ta ut range
// Hitta igen parentelement för att få ut taggen som texten ligger i
// Ta ut textcontent frårn taggen
// Ta bort parentelement
// Lägg tillbaka texten (via getRangeAt(0))????????????????????

// Använd e.preventDefault() för att förhindra att markeringen försvinner
boldBtn.addEventListener('click', function (e) {
    e.preventDefault();
    applyTag('strong');
    removeTag('strong');
});

italicBtn.addEventListener('click', function (e) {
    e.preventDefault();
    applyTag('em');
});