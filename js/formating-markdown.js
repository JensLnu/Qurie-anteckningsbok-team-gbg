/* 
15. (8.5 points) Som användare vill jag kunna klistra in markdown i en anteckning och att den formaterar sig korrekt --Jens och Oskar 
*/

function formatMarkdown(markdown) {
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

    // alla li-element i en string
    let allLi = matches.join('');
    // Omslut de samlade listelementen med <ol>
    markdown = markdown.replace(/^\d\.\s(.*?)$/gm, "<ol>" + allLi + "</ol>");


    // Ersätt - punktlista med <ul><li> punktlista </li></ul>
    markdown = markdown.replace(/^\-\s(.*?)$/gm, "<ul><li>$1</li></ul>");

    return markdown;
}

// Exempel:
function testMarkdown() {
    console.log(formatMarkdown(textarea.textContent));

    let markdownText = "# **Huvudrubrik**\n## *Underrubrik*\n### Underunderrubrik\n- Punkt 1\n- Punkt 2\n1. Nummer 1\n2. Nummer 2";
    let formattedHTML = formatMarkdown(markdownText);
    console.log(formattedHTML);

    //textarea.innerHTML = formattedHTML;
}

// test i browsern
const settingBtn = document.getElementById('test');
const textarea = document.getElementById('text-area');
settingBtn.addEventListener('click', testMarkdown);



// Extract inner text from each match
// let liTexts =
//     matches &&
//     matches.map((match) => {
//         // Remove the <li> and </li> tags from each match
//         return match.replace(/<\/?li>/g, "");
//     });