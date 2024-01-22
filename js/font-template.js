/*--- Som användare vill jag kunna skapa egna mallar där jag kan ställa in valfria typsnitt utifrån de som finns i Google fonts ---*/

/*function createFontDropdownBtn() {
    const dropdownFonts = document.createElement('div');
    dropdownFonts.classList.add('dropdown-fonts');
    dropdownFonts.innerHTML = `
        <button class="font-btn">Choose font</button>
        <div class="fonts">
            <a href="#">Font 1</a>
            <a href="#">Font 2</a>
            <a href="#">Font 3</a>
        </div>
    `;
    return dropdownFonts;
}*/

// API key: AIzaSyD9u1DRArZCKthVW8zoz2g1jVhveiaqjYQ

// Vänta tills DOMen har laddats innan koden körs
document.addEventListener('DOMContentLoaded', function() {
    // Anropa funktionen för att hämta google fonts
    fetchGoogleFonts();
});

// Funktion för att hämta Google Fonts
function fetchGoogleFonts() {
    // Anropa API för att hämta data
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD9u1DRArZCKthVW8zoz2g1jVhveiaqjYQ')
        .then(response => response.json())
        .then(data => {
            // Visa dropdown-menyn
            displayFontDropdown(data.items);
        })
        .catch(error => {
            // Visa felmeddelande vid error
            console.error('Error fetching Google Fonts:', error);
        });
}

// Funktion för att visa dropdown-menyn med alla fonts
function displayFontDropdown(fonts) {
    var fontDropdown = document.getElementById('fontDropdown');
    fontDropdown.innerHTML = '';

    // Loopa igenom varje Google Font och lägg till varje i dropdown-menyn
    fonts.forEach(font => {
        var option = document.createElement('option');
        option.value = font.family;
        option.text = font.family;
        fontDropdown.appendChild(option);
    });

    // Event listener för ändringar och applicera valt typsnitt
    fontDropdown.addEventListener('change', function() {
        var selectedFont = fontDropdown.value;
        if (selectedFont) {
            applyFont(selectedFont);
        }
    });

    // Trigga laddning av standardtypsnittet
    var defaultFont = fontDropdown.value;
    if (defaultFont) {
        applyFont(defaultFont);
    }
}

// Funktion för att applicera valt typsnitt på textContainer mha Webfont.js
function applyFont(fontName) {
    WebFont.load({
        google: {
            families: [fontName]
        },
        active: function() {
            document.getElementById('textContainer').style.fontFamily = fontName;
        },
        inactive: function() {
            console.error('Font loading failed');
        }
    });
}