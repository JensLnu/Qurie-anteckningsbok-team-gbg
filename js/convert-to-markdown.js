/* ----- Som användare vill jag kunna exportera en anteckning som markdown -----*/

const markdownBtn = document.querySelector(".markdown-btn");

// Vid klick på markdown-knappen
// Hämta innerHTML från textarea
// Öppna nytt fönster och skriv ut resultatet från htmlToMarkdown
markdownBtn.addEventListener('click', () => {
    const textArea = document.getElementById('text-area').innerHTML;
    w = window.open();
    w.document.write(htmlToMarkdown(textArea));
});


// Funktion för att konvetera HTML till Markdown
// Byt ut alla html-taggar mot motsvarande markdown
// Extra funktion för att kunna byta ut ul/ol + li till motsvarande markdown
// execCommand lägger till en massa konstiga spans som hittas igen i sista steget
function htmlToMarkdown(html) {
    let markdown = html
        .replace(/<h1>(.*?)<\/h1>/gim, '# $1') 
        .replace(/<h2>(.*?)<\/h2>/gim, '## $1') 
        .replace(/<h3>(.*?)<\/h3>/gim, '### $1')
        .replace(/<b>(.*?)<\/b>/gim, '**$1**') 
        .replace(/<i[^>]*style[^>]*>(.*?)<\/i>/gim, '*$1*') 
        .replace(/<ul>([\s\S]*?)<\/ul>/gim, (_, listItems) => convertListItems(listItems, '-'))
        .replace(/<ol>([\s\S]*?)<\/ol>/gim, (_, listItems) => convertListItems(listItems, '1.'))
        .replace(/<li>(.*?)<\/li>/gim, '$1\n')
        .replace(/<\/?span[^>]*>/g, '');
    return markdown.trim();
}

// Funktion för att konvertera listelement till Markdown
// Tar innehållet från en ul/ol
// Tar bort span om det är formaterat (bold, italic, etc.)
// Delar upp listitems 
// Tar bort tomma items
// Tar bort öppningstagg
// Counter för att hålla koll på OL
// Lägger ihop alla list items till en string
function convertListItems(listItems, prefix) {
    let counter = 1;
    return listItems
        .replace(/<\/?span[^>]*>/g, '')
        .split('</li>')
        .filter(item => item.trim() !== '')
        .map(item => {
            item = item.trim().replace(/<li[^>]*>/, '');
            if (prefix === '1.') {
                item = `${counter}. ${item}`;
                counter++;
            } else {
                item = `${prefix} ${item}`;
            }
            return item;
        })
        .join('\n')
}