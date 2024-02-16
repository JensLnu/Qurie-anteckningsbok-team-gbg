// skapar ett html-element med innehåll, html-classer och appendar det till ett förälder element 
export function createHtmlElem(htmlElem, content, appendTo, className1, className2) {
    const elem = document.createElement(htmlElem);
    elem.textContent = content;
    if (className1 !== undefined) elem.classList.add(className1);
    if (className2 !== undefined) elem.classList.add(className2);
    if (appendTo === null) return elem
    appendTo.append(elem);
    return elem
}

