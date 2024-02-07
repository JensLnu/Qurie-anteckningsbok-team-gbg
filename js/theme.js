
const dialog = document.querySelector(".theme-dialog");
const openThemeModal = document.getElementById("open-theme-modal");
const standardTheme = document.getElementById('standard-theme');
const secondTheme = document.getElementById('second-theme');
const thirdTheme = document.getElementById('third-theme');
const fourthTheme = document.getElementById('fourth-theme');
const themeStyle = document.getElementById('theme-style');
const themeSelector = document.getElementById('theme-selector');
const rootColors = document.querySelector(":root");


openThemeModal.addEventListener("click", () => dialog.showModal());


standardTheme.onclick = function () {
    rootColors.style.setProperty("--header-color", "rgb(53, 79, 82)")
    rootColors.style.setProperty("--logo-container-color", "rgb(47, 62, 70)")
    rootColors.style.setProperty(["--logo-color", "--displayed-note-color", "--edit-buttons-primary","--dialog--background-color"], "rgb(255, 255, 255)")
    rootColors.style.setProperty("--sidebar-color", "rgb(202, 210, 197)")
    rootColors.style.setProperty("--toolbar-color", "rgba(0, 0, 0, 0.253)")
    rootColors.style.setProperty("--default-text-color", "rgb(0, 0, 0)")
    rootColors.style.setProperty(["--delete-btn-color", "--hashtag-button-color","--sidebar-addbtn"], "rgb(132, 169, 140)")
    rootColors.style.setProperty("--edit-buttons-secondary", "rgb(85,85,85)")
    rootColors.style.setProperty("--edit-buttons-hover", "rgb(240,240,240)")
    rootColors.style.setProperty("--first-visit-primary", "rgb(34,84,110)")
    
}


secondTheme.onclick = function () {
    rootColors.style.setProperty("--header-color", "rgb(53, 79, 82)")
    rootColors.style.setProperty("--logo-container-color", "rgb(47, 62, 70)")
    rootColors.style.setProperty("--logo-color", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--sidebar-color", "rgb(202, 210, 197)")
    rootColors.style.setProperty(["--delete-btn-color", "--hashtag-button-color","--sidebar-addbtn"], "rgb(132, 169, 140)")
    rootColors.style.setProperty("--toolbar-color", "rgba(0, 0, 0, 0.253)")
    rootColors.style.setProperty("--default-text-color", "rgb(0, 0, 0)")
    rootColors.style.setProperty("--displayed-note-color", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--edit-buttons-primary", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--edit-buttons-secondary", "rgb(85,85,85)")
    rootColors.style.setProperty("--edit-buttons-hover", "rgb(240,240,240)")
    rootColors.style.setProperty("--first-visit-primary", "rgb(34,84,110)")
    rootColors.style.setProperty("--dialog--background-color", "rgb(255, 255, 255)")
    rootColors.style.setProperty("--neon-text-shadow", "10 0 10px #fff")
    
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
  
