/*--- Som användare vill jag kunna skapa egna mallar där jag kan ställa in valfria typsnitt utifrån de som finns i Google fonts ---*/

// Kan man göra så att de mest använda typsnitten hamnar högst upp i listan?
const fontDropdown = document.getElementById('fonts');

// API key: AIzaSyD9u1DRArZCKthVW8zoz2g1jVhveiaqjYQ

// Hämta Google Web Fonts
// Om respons OK, fyll på med options i font select
(async function fetchGoogleFonts() {
    try {
        const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD9u1DRArZCKthVW8zoz2g1jVhveiaqjYQ');
        if (!response.ok) {
            throw new Error('Failed to fetch Google Fonts');
        }
        const data = await response.json();
        displayFontDropdown(data.items);
    } catch(error) {
        console.error('Error fetching Google Fonts:', error);
        alert('Failed to fetch Google Fonts. Please try again later');
    };
})();

// Event listener för ändringar och applicera valt typsnitt
// När option ändras, kolla att det är en font som är vald och applicera
fontDropdown.addEventListener('change', function() {
    const selectedFont = fontDropdown.value;
    if (selectedFont) {
        applyFont(selectedFont);
    }
});

// En default option i pedagogiskt syfte
// Gå igenom alla fonts från API och skapa options för varje font
function displayFontDropdown(fonts) {
    fontDropdown.innerHTML = '<option>Välj en font</option>';
    fonts.forEach(font => {
        const option = new Option(font.family, font.family);
        fontDropdown.appendChild(option);
    });
}

// Funktion för att applicera valt typsnitt på textContainer
// Ta bort existerande font-länkar
// Skapa en ny länk med den valda fonten
// Om det finns en selection, byt ut nuvarande innehåll mot ett span med rätt font
// Annars lägg till fonten till savedNote-objektet
// Uppdatera text-areans font
// Här strular det med att 
function applyFont(fontName) {
    const existingStyles = document.querySelectorAll('[data-font-stylesheet]');
    existingStyles.forEach(style => style.remove());
    
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = `https://fonts.googleapis.com/css?family=${fontName.replace(/\s/g, '+')}`;
    linkElement.dataset.fontStylesheet = '';
    document.head.appendChild(linkElement);

    const sel = window.getSelection();
    const range = sel.getRangeAt(0);
    if(sel.rangeCount > 0 && range.toString().length > 0){
        let e = document.createElement('span');
        e.style = 'font-family:' + fontName + ';'
        e.className = 'yet-another-class'
        e.innerHTML = sel.toString();
        range.deleteContents();
        range.insertNode(e);
    } else {
        const allSpans = document.querySelectorAll('yet-another-class')
        allSpans.forEach(span => {
            span.innerHTML = span.innerText || span.textContent || '';
        })
        savedNote.font = fontName;
        document.getElementById('text-area').style.fontFamily = fontName;
    }
}

