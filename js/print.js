const toBePrinted = document.getElementById('text-area');
const btn = document.querySelector('.print');
console.log('vi är connected iallafall')
function printPreview(){
    const printed = toBePrinted.innerHTML;
    console.log(printed)
    w = window.open();
    w.document.write(printed);
    // w.print();
    // w.close();
}

btn.addEventListener('click', printPreview);