// Hämta alla knapparna
// Headings = Alla knappar som behöver ett value för att fungera (h-elementen, p)
// Toolbar = Alla knappar som bara behöver ett command (bold, italic, ul, ol)
const headings = document.querySelectorAll('.headings')
const toolbarButtons = document.querySelectorAll('.toolbar-button')
const fontSelection = document.getElementById('font-size');
document.addEventListener('DOMContentLoaded', populateFontSelection)
fontSelection.addEventListener('change', function() {
    const selectedSize = fontSelection.value;
    if (selectedSize) {
        changeSize(selectedSize);
    }
});
// FONT SIZE
function populateFontSelection() {
    for(let i = 6; i < 41; i += 2){
        fontSelection.innerHTML += `<option value='${i}'>${i}px</option>`
        i+2;
    }
};

// Går att göra en modul för denna som kan ta händelse och värde och uppdatera både font och storlek
// Hämta window selection
// Se om dess range är större än 0
// Om sant, lägg till ett span med vald fontsize, klipp ut selectionen och lägg in det i spannet
// Om falskt, ta bort alla spans och lägg till storleken på hela textdokumentet
function changeSize(fontSize){
    const sel = window.getSelection();
    const range = sel.getRangeAt(0);
    // console.log(range.commonAncestorContainer.parentElement.id === 'text-area');
    if(sel.rangeCount > 0 && range.toString().length > 0){
        let e = document.createElement('span');
        e.style = 'font-size:' + fontSize + 'px;'
        e.innerHTML = sel.toString();
        e.className = 'remove-this-shit'
        range.deleteContents();
        range.insertNode(e);
    } else {
        // savedNote.fontSize = fontSize;
        const spans = document.querySelectorAll('.remove-this-shit');
        console.log(spans);
        spans.forEach(span => {
            span.innerHTML = span.textContent || span.innerText || '';
        })
        document.getElementById('text-area').style = 'font-size:' + fontSize + 'px;';
    }
    textarea.focus();
}

function modifyText(command, defaultUi, value) {
    document.execCommand(command, defaultUi, value);
}

// Lyssna efter klick på en toolbar-knapp
// Kör execCommand med knappens id(motsvarande command, 'bold', 'italic' osv.')
// Fokusera textarea
toolbarButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // btn.classList.toggle('active');
        const textarea = document.getElementById('text-area');
        modifyText(btn.id, false, null);
        textarea.focus();
    });
})

// Lyssna efter klick på heading-knapp
// Kör execCommand med knappens id(heading, regular) och värde (h1-3, p)
// Fokusera textarea
headings.forEach((btn) => {
    btn.addEventListener('change', () => {
        const textarea = document.getElementById('text-area');
        modifyText(btn.id, false, btn.value)
        textarea.focus();
    })
})


