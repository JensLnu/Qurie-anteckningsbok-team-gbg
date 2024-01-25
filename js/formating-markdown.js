/* 
15. (8.5 points) Som användare vill jag kunna klistra in markdown i en anteckning och att den formaterar sig korrekt --Jens och Oskar 
*/

// kontakt med DOMen
const settingBtn = document.getElementById('test');
const textarea = document.getElementById('text-area');
settingBtn.addEventListener('click', testMarkdown);

function formatMarkdown(markdown, firstTimeFalse) {
    // Ersätt **text** med <strong>text</strong>
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Ersätt *text* med <em>text</em>
    markdown = markdown.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Ersätt #, ##, och ### med motsvarande HTML-rubriker h1, h2, h3 osv
    markdown = markdown.replace(/^#{1,6}\s*(.*)$/gm, (match, group1) => {
        let headerLevel = 0;
        for (let i = 0; i < match.length; i++) {
            if (match[i] === "#") {
                headerLevel++;
            } else {
                break;
            }
        }
        return `<h${headerLevel}>${group1.trim()}</h${headerLevel}>`;
    });

    // Samla alla numrerade listelement i en variabel
    let olListItems = markdown.replace(/^\d\.\s(.*?)$/gm, "<li>$1</li>");

    // Regular expression to match <li> tags and their contents
    let liRegex = /<li>(.*?)<\/li>/g;

    // Find all matches
    let matches = olListItems.match(liRegex);

    // Kontrollera om det finns några matchningar
    if (matches) {
        // Alla li-element i en string
        let allLi = matches.join('');
        let firstTime = firstTimeFalse;
        // Omslut de samlade listelementen med <ol>
        markdown = markdown.replace(/^1\.\s(.*?)$/gm, "<ol>" + allLi + "</ol>");
        if (firstTime) {
            markdown = markdown.replace(/^\d\.\s(.*?)$/gm, "");
        }
        firstTime = true
    }

    // Ersätt - punktlista med <ul><li> punktlista </li></ul>
    markdown = markdown.replace(/^\-\s(.*?)$/gm, "<ul><li>$1</li></ul>");
    return markdown;
}

// Exempel:
function testMarkdown() {
    console.log('start testMarkdown')

    // realdeal
    //console.log(formatMarkdown(textarea.innerHTML));
    divContent(formatMarkdown(textarea.innerHTML));
}

function divContent(htmlString) {
    // regex för att matcha innehållet mellan <div>...</div>
    let divContentRegex = /<div>(.*?)<\/div>/g;

    // Använd match för att hitta alla matchningar
    let matches = htmlString.match(divContentRegex);

    let markdownToHtml = '';

    // Loopa över matchningarna och skriv ut innehållet
    if (matches) {
        matches.forEach((match) => {
            // sparar innehållet mellan <div> och </div> i content
            let content = match.replace(/<\/?div>/g, '');
            markdownToHtml += formatMarkdown(content, false);
        });
    }
    console.log(markdownToHtml);
    textarea.innerHTML = markdownToHtml;
}
