const toBePrinted = document.getElementById('text-area');
const btn = document.querySelector('.print-icon');

// Funktion som tar dokumentets innerHTML
// Öppnar en ny  sida
// Klistrar in HTML för korrekt formatering
// Öppnar print alternativen
// Stänger fliken när man väljer något
function printPreview(){
    const content = toBePrinted.innerHTML;
    w = window.open();
    w.document.write(content);
    w.print();
    w.close();
    // gtag av nyat
    gtag('event', 'print_preview', {
        'event_category': 'Printing function',
        'event_label': 'Print preview'
    });
}

btn.addEventListener('click', printPreview);