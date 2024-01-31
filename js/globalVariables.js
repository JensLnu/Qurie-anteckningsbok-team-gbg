// Global savedNote object
let savedNote = {
    title: "",
    content: "",
    noteId: 0,
    font: "",
    hashtags: [],
    favorite: false
    // size: 12
};

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
const boldBtn = document.getElementById('bold'); //<strong></strong>
const italicBtn = document.getElementById('italic'); //<em> </em>
const heading1Btn = document.getElementById('heading-1'); //<h1></h1>
const heading2Btn = document.getElementById('heading-2');//<h2></h2>
const heading3Btn = document.getElementById('heading-3');//<h3></h3>
const ulBtn = document.getElementById('unordered-list'); //<ul><li></li></ul>
const olBtn = document.getElementById('ordered-list'); //<ol><li></li></ol>
const regularBtn = document.getElementById('regular'); // <p></p>
const selectFormat = document.getElementById('text-type');
const headings = document.querySelectorAll('.headings')
const toolbarButtons = document.querySelectorAll('.toolbar-button')
const fontSelection = document.getElementById('font-size');

// Settings-button
const settingBtn = document.getElementById('test');



