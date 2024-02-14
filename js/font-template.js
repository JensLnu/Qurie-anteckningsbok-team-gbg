/*--- Som användare vill jag kunna skapa egna mallar där jag kan ställa in valfria typsnitt utifrån de som finns i Google fonts ---*/
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
// Lägger till vald font i Note-objektet
// Länkar till vald font

// Om användaren har något markerat på sidan skapas ett span med valda fonten,
// Den markerade klipps ut ut dokumentet, klistras in i spanet och sedan läggs spannet in som en node i rangen

// Om ingenting är markerat tas alla existerande spans i dokumentet bort för att inte krocka 
// Sedan ändras stilen på textdokumentet till den valda fonten
// Alla andra fonts tas bort från Note-Objektet
// DET ÄR HÄR BUGGEN DYKER UPP MED ATT FONT-SIZE SKRIVS ÖVER NÄR MAN APPLICERAR FONT PÅ HELA DOKUMENTET
// ÄNDRAS GENOM ATT BARA TA BORT FONT-FAMILY PROPERTY PÅ ALLA SPANS

function applyFont(fontName) {
    savedNote.updateFont(fontName);
    linkFont(fontName)
    
    const sel = window.getSelection();
    if(sel.rangeCount > 0 && sel.getRangeAt(0).toString().length > 0){
        const range = sel.getRangeAt(0);
        let e = document.createElement('span');
        e.style = 'font-family:' + fontName + ';'
        e.className = 'yet-another-class'
        e.innerHTML = sel.toString();
        range.deleteContents();
        range.insertNode(e);
    } else {
        const allSpans = document.querySelectorAll('.yet-another-class');
        allSpans.forEach(span => {
            span.outerHTML = span.innerHTML || span.textContent || '';
        })
        textarea.style.fontFamily = fontName;
        savedNote.fonts = [fontName];
    }
}


// Funktion som går igenom objektets array med fonts och länkar dessa
export function loadFont(fontArr){
    fontArr.forEach(font => {
        linkFont(font);
    })
}

// Funktion som skapar en google-fonts länk och appendar till head i DOMen
function linkFont(font){
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = `https://fonts.googleapis.com/css?family=${font.replace(/\s/g, '+')}`;
    linkElement.dataset.fontStylesheet = '';
    document.head.appendChild(linkElement);
}

// Funktion för att ta bort irrelevanta font-länkar för att inte DOMen ska svämma över
export function removeAllFonts(){
    const existingStyles = document.querySelectorAll('[data-font-stylesheet]');
    existingStyles.forEach(style => style.remove());   
}
