const convertFromMarkdown = document.getElementById('convert-from-markdown');

convertFromMarkdown.addEventListener('click', () => {
    textarea.innerHTML = parseMarkdown(textarea.innerText);
});

// Hela dokumentets innehåll kommer med text-parametern
// Byt ut rader som startar med # mot deras resp hN
// Byt ut en rad som innefattas av ** ** till bold-tags
// Byt ut en rad som innefattas av * * mot italic
// En rad som startar med - byts ut mot en ul där texten hamnar i li
// För att förhindra att varje -/1. blir ny lista så tas stängnings och öppningstaggar som ligger brevid varandra bort
function parseMarkdown(text){
    const toHTML = text
    .replace(/^### (.*$)/gim, '<h3>$1</h3>') 
    .replace(/^## (.*$)/gim, '<h2>$1</h2>') 
    .replace(/^# (.*$)/gim, '<h1>$1</h1>') 
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>') 
    .replace(/\*(.*)\*/gim, '<em>$1</em>') 
    .replace(/\-+(.*)?/gim,"<ul><li>$1</li></ul>")
    .replace(/(\<\/ul\>\n(.*)\<ul\>*)+/,"") 
    .replace(/(\d+\.\d*)\s?(.*?)(?=\d+\.|$)/gsm, '<ol><li>$2</li></ol>')
    .replace(/(\<\/ol\>\n(.*)\<ol\>*)+/,"")

    return toHTML.trim();
            
}