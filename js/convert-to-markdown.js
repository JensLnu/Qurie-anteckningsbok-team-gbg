/* ----- Som användare vill jag kunna exportera en anteckning som markdown -----*/

const markdownBtn = document.querySelector(".markdown-btn");

// Vid klick på markdown-knappen
markdownBtn.addEventListener('click', () => {
    const textArea = document.getElementById('text-area').innerHTML;
    // Öppnar ett nytt fönster
    w = window.open();
    // Lägger in konverterad markdown i det fönstret
    w.document.write(htmlToMarkdown(textArea));
});

// Funktion för att konvetera HTML till Markdown
function htmlToMarkdown(html) {
    let markdown = html
        .replace(/<h1>(.*?)<\/h1>/gim, '# $1') // <h1> till #
        .replace(/<h2>(.*?)<\/h2>/gim, '## $1') // <h2> till ##
        .replace(/<h3>(.*?)<\/h3>/gim, '### $1') // <h3> till ###
        .replace(/<b>(.*?)<\/b>/gim, '**$1**') // <b> till **
        .replace(/<i[^>]*style[^>]*>(.*?)<\/i>/gim, '*$1*') // <i> till *
        .replace(/<ul>([\s\S]*?)<\/ul>/gim, (_, listItems) => convertListItems(listItems, '-')) // <ul> till - list
        .replace(/<ol>([\s\S]*?)<\/ol>/gim, (_, listItems) => convertListItems(listItems, '1.')) // <ol> till 1. list
        .replace(/<li>(.*?)<\/li>/gim, '$1\n') // <li> till radavbryt
        .replace(/<\/?span[^>]*>/g, ''); // Ta bort spans och deras innehåll
    return markdown.trim();
}

// Funktion för att konvertera listelement till Markdown
function convertListItems(listItems, prefix) {
    let counter = 1;
    return listItems
        .replace(/<\/?span[^>]*>/g, '') // Ta bort spans och deras innehåll
        .split('</li>') // Split listitems baserat på stängningstagg
        .filter(item => item.trim() !== '') // Filtrerar ut tomma items
        .map(item => { // Itererar över varje listelement i arrayen
            item = item.trim().replace(/<li[^>]*>/, ''); // Ta bort öppningstagg och mellanslag
            if (prefix === '1.') { // Håller koll på vilket nummer listelementet har
                item = `${counter}. ${item}`;
                counter++;
            } else {
                item = `${prefix} ${item}`;
            }
            return item;
        })
        .join('\n') // Läggs ihop i en enda string
}