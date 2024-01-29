/*--- Som användare vill jag kunna skapa egna mallar där jag kan ställa in valfria typsnitt utifrån de som finns i Google fonts ---*/

// Kan man göra så att de mest använda typsnitten hamnar högst upp i listan?
// Spara i lS

const fontDropdown = document.getElementById('fonts');

// API key: AIzaSyD9u1DRArZCKthVW8zoz2g1jVhveiaqjYQ

// Funktion för att hämta Google Fonts
(async function fetchGoogleFonts() {
    // Anropa API för att hämta data
    try {
        const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD9u1DRArZCKthVW8zoz2g1jVhveiaqjYQ');
        if (!response.ok) {
            throw new Error('Failed to fetch Google Fonts');
        }
        const data = await response.json();
        displayFontDropdown(data.items);
    } catch(error) {
        // Visa felmeddelande vid error
        console.error('Error fetching Google Fonts:', error);
        // Alert till användaren
        alert('Failed to fetch Google Fonts. Please try again later');
    };
})();

// Event listener för ändringar och applicera valt typsnitt
fontDropdown.addEventListener('change', function() {
    const selectedFont = fontDropdown.value;
    if (selectedFont) {
        applyFont(selectedFont);
    }
});

// Funktion för att visa dropdown-menyn med alla fonts
function displayFontDropdown(fonts) {
    fontDropdown.innerHTML = '<option>Välj en font</option>';
    // Loopa igenom varje Google Font och lägg till varje i dropdown-menyn
    fonts.forEach(font => {
        const option = new Option(font.family, font.family);
        fontDropdown.appendChild(option);
    });
}

// Funktion för att applicera valt typsnitt på textContainer
function applyFont(fontName) {
    // // Ta bort nuvarande styles
    const existingStyles = document.querySelectorAll('[data-font-stylesheet]');
    existingStyles.forEach(style => style.remove());
    
    // Skapa länk för font
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = `https://fonts.googleapis.com/css?family=${fontName.replace(/\s/g, '+')}`;
    linkElement.dataset.fontStylesheet = '';
    document.head.appendChild(linkElement);

    // Applicera fonten till texten
    savedNote.font = fontName;
    document.getElementById('text-area').style.fontFamily = fontName;
}

