
document.addEventListener('DOMContentLoaded', setTheme);

// Öppnar modalen
// openThemeModal.addEventListener("click", () => dialog.showModal());
// Davids g-tag
openThemeModal.addEventListener("click", () => {
  dialog.showModal(); 
  gtag('event', 'new_theme', { // Anropar gtag för att spåra händelsen
      'event_category': 'theme_setting',
      'event_label': 'change the theme',
      'value': 'David' 
  });
});


// matchMedia query
// Skapa en mediaquery som kontrollerar om användaren använder dark mode
let darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Funktion som körs när användarens färgschema ändras
function handleColorSchemeChange(e) {
  if (e.matches) {
    // Användaren använder dark mode
    darkmodeTheme();
  } else {
    // Användaren använder light mode
    lightmodeTheme();
  }
}

// STANDARD THEME
standardTheme.onclick = function () {
    lightmodeTheme();
}
// En funktion som ändrar färg på varje färg-variabel
function lightmodeTheme() {
    rootColors.style.setProperty("--header-color", "rgb(53, 79, 82)")
    rootColors.style.setProperty("--logo-container-color", "rgb(47, 62, 70)")
    rootColors.style.setProperty("--logo-color", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--displayed-note-color", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--edit-buttons-primary", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--note-bg-color", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--sidebar-color", "rgb(202,210,197)")
    rootColors.style.setProperty("--toolbar-color", "rgba(0, 0, 0, 0.253)")
    rootColors.style.setProperty("--note-text-color", "rgb(0, 0, 0)")
    rootColors.style.setProperty("--delete-btn-color", "rgb(132, 169, 140)")
    rootColors.style.setProperty("--hashtag-button-color", "rgb(132, 169, 140)")
    rootColors.style.setProperty("--sidebar-addbtn", "rgb(132, 169, 140)")
    rootColors.style.setProperty("--edit-buttons-secondary", "rgb(85,85,85)")
    rootColors.style.setProperty("--edit-buttons-hover", "rgb(240,240,240)")
    rootColors.style.setProperty("--first-visit-primary", "rgb(34,84,110)")
    rootColors.style.setProperty("--neon-text-shadow", "none")
    rootColors.style.setProperty("--bgColor", "white")
  rootColors.style.setProperty("--notes-text-color", "rgb(47, 62, 70)")
  rootColors.style.setProperty("--toolbar-text-color", "rgb(0,0,0)")
  
    localStorage.setItem('theme', 'default');
}


// NEON THEME
secondTheme.onclick = function () {
    neonTheme();
}
function neonTheme() {
    rootColors.style.setProperty("--header-color", "rgb(35,35,35)")
    rootColors.style.setProperty("--logo-container-color", "rgb(35,35,35)")
    rootColors.style.setProperty("--logo-color", "rgb(255,0,110)")
    rootColors.style.setProperty("--sidebar-color", "rgb(17,17,17)")
    rootColors.style.setProperty("--delete-btn-color", "rgb(131, 56, 236)")
    rootColors.style.setProperty("--hashtag-button-color", "rgb(131, 56, 236)")
    rootColors.style.setProperty("--sidebar-addbtn", "rgba(35,35,35)")
    rootColors.style.setProperty("--toolbar-color", "rgb(17,17,17)")
    rootColors.style.setProperty("--note-text-color", "rgb(58, 134, 255)")
    rootColors.style.setProperty("--displayed-note-color", "rgb(52, 52, 52)")
    rootColors.style.setProperty("--edit-buttons-primary", "rgb(35,35,35)")
    rootColors.style.setProperty("--edit-buttons-secondary", "rgb(85,85,85)")
    rootColors.style.setProperty("--edit-buttons-hover", "rgb(255,0,110)")
    rootColors.style.setProperty("--first-visit-primary", "rgb(34,84,110)")
    rootColors.style.setProperty("--note-bg-color", "rgb(35,35,35)")
    rootColors.style.setProperty("--neon-text-shadow", "10 0 10px #fff")
    rootColors.style.setProperty("--bgColor", "rgb(35,35,35)")
    rootColors.style.setProperty("--notes-text-color", "rgb(251,86,7)")
    rootColors.style.setProperty("--toolbar-text-color", "rgb(251,86,7)")
  
  
  localStorage.setItem('theme', 'neon');
}

// DARKMODE THEME
thirdTheme.onclick = function () {
    darkmodeTheme();
}
function darkmodeTheme() {
    rootColors.style.setProperty("--header-color", "rgb(35,35,35)")
    rootColors.style.setProperty("--logo-container-color", "rgb(35,35,35)")
    rootColors.style.setProperty("--logo-color", "rgb(221, 221, 221)")
    rootColors.style.setProperty("--sidebar-color", "rgb(17,17,17)")
    rootColors.style.setProperty("--delete-btn-color", "rgb(35,35,35)")
    rootColors.style.setProperty("--hashtag-button-color", "rgb(35,35,35)")
    rootColors.style.setProperty("--sidebar-addbtn", "rgba(35,35,35)")
    rootColors.style.setProperty("--toolbar-color", "rgb(17,17,17)")
    rootColors.style.setProperty("--note-text-color", "white")
    rootColors.style.setProperty("--displayed-note-color", "rgb(52, 52, 52)")
    rootColors.style.setProperty("--edit-buttons-primary", "rgb(35,35,35)")
    rootColors.style.setProperty("--edit-buttons-secondary", "rgb(85,85,85)")
    rootColors.style.setProperty("--edit-buttons-hover", "rgb(89, 89, 89)")
    rootColors.style.setProperty("--first-visit-primary", "rgb(221, 221, 221)")
    rootColors.style.setProperty("--note-bg-color", "rgb(35,35,35)")
    rootColors.style.setProperty("--neon-text-shadow", "10 0 10px #fff")
    rootColors.style.setProperty("--bgColor", "rgb(35,35,35)")
  rootColors.style.setProperty("--notes-text-color", "white")
  rootColors.style.setProperty("--toolbar-text-color", "rgb(255, 255, 255)")

    localStorage.setItem('theme', 'dark');
}

// FOURTH THEME
fourthTheme.onclick = function () {
  quireTheme();
}
function quireTheme() {
   rootColors.style.setProperty("--header-color", "rgb(225, 245, 254)"); 
   rootColors.style.setProperty("--logo-container-color", "rgb(187, 222, 251)"); 
   rootColors.style.setProperty("--logo-color", "rgb(30, 136, 229)"); 
   rootColors.style.setProperty("--displayed-note-color", "rgb(227, 242, 253)");
   rootColors.style.setProperty("--edit-buttons-primary", "rgb(144, 202, 249)"); 
   rootColors.style.setProperty("--note-bg-color", "rgb(207, 216, 220)"); 
   rootColors.style.setProperty("--sidebar-color", "rgb(225, 230, 240)"); 
   rootColors.style.setProperty("--toolbar-color", "rgba(100, 181, 246, 0.8)"); 
   rootColors.style.setProperty("--note-text-color", "rgb(26, 35, 126)"); 
   rootColors.style.setProperty("--delete-btn-color", "rgb(144, 202, 249)"); 
   rootColors.style.setProperty("--hashtag-button-color", "rgb(144, 202, 249)"); 
   rootColors.style.setProperty("--sidebar-addbtn", "rgb(144, 202, 249)"); 
   rootColors.style.setProperty("--edit-buttons-secondary", "rgb(187, 222, 251)"); 
   rootColors.style.setProperty("--edit-buttons-hover", "rgb(227, 242, 253)"); 
   rootColors.style.setProperty("--first-visit-primary", "rgb(30, 136, 229)"); 
   rootColors.style.setProperty("--neon-text-shadow", "none"); 
   rootColors.style.setProperty("--bgColor", "rgb(237, 247, 255)"); 
  rootColors.style.setProperty("--notes-text-color", "rgb(30, 136, 229)");
  rootColors.style.setProperty("--toolbar-text-color", "rgb(255, 255, 255)")

   localStorage.setItem('theme', 'quire');
 
}

// Skapar switch-sats för att enkelt kunna ändra tema
function setTheme() {
  const theme = localStorage.getItem('theme');

  switch (theme) {
    case 'default':
      lightmodeTheme();
      break;
    case 'neon':
      neonTheme();
      break;
    case 'dark':
      darkmodeTheme();
      break;
    case 'quire':
      quireTheme();
      break;
    default:
      handleColorSchemeChange(darkModeQuery);

  }
}


// Stänger modalen om man klickar utanför
dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
        dialog.close();
    }
});