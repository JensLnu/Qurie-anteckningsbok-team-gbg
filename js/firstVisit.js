const main = document.querySelector('main');

if (localStorage.length === 0) {
    let rubrik = document.createElement('h1');
    rubrik.setAttribute('id', 'first-rubrik');
    rubrik.innerText('Välkommen till Qurie');
}