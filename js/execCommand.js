// Hämta alla knapparna
// Headings = Alla knappar som behöver ett value för att fungera (h-elementen, p)
// Toolbar = Alla knappar som bara behöver ett command (bold, italic, ul, ol)
const headings = document.querySelectorAll('.headings')
const toolbarButtons = document.querySelectorAll('.toolbar-button')

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