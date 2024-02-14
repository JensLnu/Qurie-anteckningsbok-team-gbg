// Global savedNote object
let savedNote;


// {
//     title: "",
//     content: "",
//     noteId: 0,
//     font: "",
//     hashtags: [],
//     favorite: false
//     // size: 12
// };

// Addbuttons, saved-notes for sidebar, text-area 
const addBtnSeveral = document.querySelector(".add-btn");
const addBtnMobile = document.querySelector(".add");
const savedNotes = document.querySelector(".saved-notes");
const textarea = document.getElementById("text-area");

// Font-selection
const fontDropdown = document.getElementById('fonts');

// Välj fil-knapp
const imgBtn = document.getElementById('imgBtn');

// Dropdown-meny, toolbar
const displayBtn = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.nav-list');
const toolbar = document.getElementById('toolbar');
const main = document.querySelector('main');
const body = document.querySelector('body');

// Toolbar-knappar
const boldBtn = document.getElementById('bold');
const italicBtn = document.getElementById('italic');
const heading1Btn = document.getElementById('heading-1');
const heading2Btn = document.getElementById('heading-2');
const heading3Btn = document.getElementById('heading-3');
const ulBtn = document.getElementById('unordered-list');
const olBtn = document.getElementById('ordered-list');
const regularBtn = document.getElementById('regular');
const selectFormat = document.getElementById('text-type');
const headings = document.querySelectorAll('.headings')
const toolbarButtons = document.querySelectorAll('.toolbar-button')
const fontSelection = document.getElementById('font-size');

// note-templates.js
const noteTemplateDropdown = document.getElementById('note-template-btn');

// theme.js
const dialog = document.querySelector(".theme-dialog");
const openThemeModal = document.getElementById("open-theme-modal");
const standardTheme = document.getElementById('standard-theme');
const secondTheme = document.getElementById('second-theme');
const thirdTheme = document.getElementById('third-theme');
const fourthTheme = document.getElementById('fourth-theme');
const themeStyle = document.getElementById('theme-style');
const themeSelector = document.getElementById('theme-selector');
const rootColors = document.querySelector(":root");