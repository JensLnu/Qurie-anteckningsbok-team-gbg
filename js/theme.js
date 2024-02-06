
const dialog = document.querySelector(".theme-dialog");
const openThemeModal = document.getElementById("open-theme-modal");
const firstTheme = document.getElementById('first-theme');
const secondTheme = document.getElementById('second-theme');
const thirdTheme = document.getElementById('third-theme');
const fourthTheme = document.getElementById('fourth-theme');
const themeStyle = document.getElementById('theme-style');
const themeSelector = document.getElementById('theme-selector');


openThemeModal.addEventListener("click", () => dialog.showModal());


firstTheme.onclick = function () {
    document.body.classList.toggle('dark-theme')
    console.log('hej')
}

// firstTheme.addEventListener('change', () => {
//     let selectedTheme = this.value;
//     switchTheme(selectedTheme);
// });

// function switchTheme(theme) {
//     let themePath = theme + '-setting.css';
//     themeStyle.setAttribute('href', themePath);
//     document.body.className = 'body-' + theme;
// }





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
  
