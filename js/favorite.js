// användaren ska kunna markera en anteckning som favorit så jag enkelt kan hitta till den igen när de behöver den. 

/*tasks:
-lägg till en stjärnknapp i sidbaren som i add several notes som en funktion och det gör man i funktionen create an element och appenda den.
-sätt en class till stjärnknappen så att det är unik. när man trycker på knappen så fylls den i.
-när man trycker på favorit knappen i sidbaren så ska den kolla om den som markerade finns i anteckningarna.
-sist ska den displaya.
*/


const favoriteButton = document.getElementById("favorite");
const savedNotesContainer = document.querySelector(".saved-notes");
  
favoriteButton.addEventListener("click", function () {
toggleFavorite(); 
});
  
