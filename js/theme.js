
const dialog = document.querySelector(".theme-dialog");
const openThemeModal = document.getElementById("open-theme-modal");
const standardTheme = document.getElementById('standard-theme');
const secondTheme = document.getElementById('second-theme');
const thirdTheme = document.getElementById('third-theme');
const fourthTheme = document.getElementById('fourth-theme');
const themeStyle = document.getElementById('theme-style');
const themeSelector = document.getElementById('theme-selector');
const rootColors = document.querySelector(":root");

// Öppnar modalen
openThemeModal.addEventListener("click", () => dialog.showModal());

// Media query
// Skapa en mediaquery som kontrollerar om användaren använder dark mode
var darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Funktion som körs när användarens färgschema ändras
function handleColorSchemeChange(e) {
  if (e.matches) {
    // Användaren använder dark mode
    console.log("Användaren använder dark mode");
    darkmodeTheme();
  } else {
    // Användaren använder light mode
    console.log("Användaren använder light mode");
    lightmodeTheme();
  }
}

// Lyssna på förändringar i användarens färgschema
darkModeQuery.addListener(handleColorSchemeChange);

// Kör funktionen en gång vid sidans laddning för att anpassa innehållet
handleColorSchemeChange(darkModeQuery);


// STANDARD THEME
standardTheme.onclick = function () {
    lightmodeTheme();
}
function lightmodeTheme() {
    rootColors.style.setProperty("--header-color", "rgb(53, 79, 82)")
    rootColors.style.setProperty("--logo-container-color", "rgb(47, 62, 70)")
    rootColors.style.setProperty("--logo-color", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--displayed-note-color", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--edit-buttons-primary", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--dialog-background-color", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--sidebar-color", "rgb(202,210,197)")
    rootColors.style.setProperty("--toolbar-color", "rgba(0, 0, 0, 0.253)")
    rootColors.style.setProperty("--default-text-color", "rgb(0, 0, 0)")
    rootColors.style.setProperty("--delete-btn-color", "rgb(132, 169, 140)")
    rootColors.style.setProperty("--hashtag-button-color", "rgb(132, 169, 140)")
    rootColors.style.setProperty("--sidebar-addbtn", "rgb(132, 169, 140)")
    rootColors.style.setProperty("--edit-buttons-secondary", "rgb(85,85,85)")
    rootColors.style.setProperty("--edit-buttons-hover", "rgb(240,240,240)")
    rootColors.style.setProperty("--first-visit-primary", "rgb(34,84,110)")
    rootColors.style.setProperty("--neon-text-shadow", "none")
    rootColors.style.setProperty("--bgColor", "white")
    rootColors.style.setProperty("--notes-text-color", "rgb(47, 62, 70)")
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
    rootColors.style.setProperty("--default-text-color", "rgb(58, 134, 255)")
    rootColors.style.setProperty("--displayed-note-color", "rgb(52, 52, 52)")
    rootColors.style.setProperty("--edit-buttons-primary", "rgb(35,35,35)")
    rootColors.style.setProperty("--edit-buttons-secondary", "rgb(85,85,85)")
    rootColors.style.setProperty("--edit-buttons-hover", "rgb(255,0,110)")
    rootColors.style.setProperty("--first-visit-primary", "rgb(34,84,110)")
    rootColors.style.setProperty("--dialog-background-color", "rgb(35,35,35)")
    rootColors.style.setProperty("--neon-text-shadow", "10 0 10px #fff")
    rootColors.style.setProperty("--bgColor", "rgb(35,35,35)")
    rootColors.style.setProperty("--notes-text-color", "rgb(251,86,7)")
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
    rootColors.style.setProperty("--default-text-color", "white")
    rootColors.style.setProperty("--displayed-note-color", "rgb(52, 52, 52)")
    rootColors.style.setProperty("--edit-buttons-primary", "rgb(35,35,35)")
    rootColors.style.setProperty("--edit-buttons-secondary", "rgb(85,85,85)")
    rootColors.style.setProperty("--edit-buttons-hover", "rgb(221, 221, 221)")
    rootColors.style.setProperty("--first-visit-primary", "rgb(221, 221, 221)")
    rootColors.style.setProperty("--dialog-background-color", "rgb(35,35,35)")
    rootColors.style.setProperty("--neon-text-shadow", "10 0 10px #fff")
    rootColors.style.setProperty("--bgColor", "rgb(35,35,35)")
    rootColors.style.setProperty("--notes-text-color", "white")
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
  
