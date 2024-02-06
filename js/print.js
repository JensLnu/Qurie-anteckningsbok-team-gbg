const toBePrinted = document.getElementById('text-area');
const btn = document.querySelector('.print-button');

function printPreview(){
    const content = toBePrinted.innerHTML;
    w = window.open();
    w.document.write(content);
    w.print();
    w.close();
}

btn.addEventListener('click', printPreview);