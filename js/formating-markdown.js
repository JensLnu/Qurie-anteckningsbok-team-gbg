
// Hela dokumentets innehåll kommer med text-parametern
// Regex för att hitta markdown syntax och byta ut mot motsvarande HTML
function parseMarkdown(text){
    const toHTML = text
    .replace(/^### (.*$)/gim, '<h3>$1</h3>') // Byt ut rader som startar med # mot deras resp hN:or
    .replace(/^## (.*$)/gim, '<h2>$1</h2>') 
    .replace(/^# (.*$)/gim, '<h1>$1</h1>') 
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>') // Byt ut en rad som innefattas av ** ** till bold-tags
    .replace(/\*(.*)\*/gim, '<em>$1</em>') // Byt ut en rad som innefattas av * * mot italic
    .replace(/\-+(.*)?/gim,"<ul><li>$1</li></ul>") //En rad som startar med - byts ut mot en ul där texten hamnar i li
    .replace(/(\<\/ul\>\n(.*)\<ul\>*)+/,"") //För att förhindra att varje - blir ny lista så byts </ul><ul> ut mot ingenting
    .replace(/(\d+\.\d*)\s?(.*?)(?=\d+\.|$)/gsm, '<ol><li>$2</li></ol>') //Samma som för ul fast med nummer (tillåter 1.1 osv)
    .replace(/(\<\/ol\>\n(.*)\<ol\>*)+/,"")

    return toHTML.trim(); //Ta bort whitespace
            
}
