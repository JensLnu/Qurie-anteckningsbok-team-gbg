document.addEventListener('DOMContentLoaded', function () {
    const textArea = document.getElementById('text-area');
    const textContent = localStorage.getItem('text');
    const paraText = 'Här hos oss kan du enkelt och smidigt skapa och organisera dina anteckningar. Oavsett om det är idéer, uppgifter eller inspirerande tankar, ger vår plattform dig möjligheten att fånga och förfina dina tankar direkt från din webbläsare. Börja skriva dina anteckningar idag och låt Qurie bli din pålitliga följeslagare för att hålla ordning på dina viktiga tankar och idéer.Enkelhet och användarvänlighet är våra ledord - din nästa stora idé är bara ett klick bort!';
    const search = 'Använd vår smidiga sökfunktion för att enkelt hitta specifika anteckningar. Kategorisera dina tankar genom att lägga till taggar och sök sedan efter dem med ett knapptryck. Effektiv och användarvänlig - hitta rätt anteckning i ett ögonblick!'

    const favorite = 'Markera dina bästa anteckningar som favoriter och hitta dem snabbt under stjärnfliken. Ett enkelt sätt att hålla koll på dina mest älskade tankar!';

    const analyse = 'Förstå ditt användande med Query genom att analysera data och insikter. Utforska mönster, hitta trender och optimera din digitala upplevelse. Enkelt, kraftfullt och skräddarsytt för dig!';

    const settings = 'Skapa din perfekta upplevelse! Konfigurera inställningar på sidan för att anpassa utseendet precis som du vill ha det. Ändra färger, layout och mycket mer för att göra sidan till din egen personliga plats för inspiration och produktivitet.';
   
    if (!textContent) {
        textArea.innerHTML = `
        <div id ="first-div">
            <h1 id = "first-rubrik">Välkommen till Qurie</h1>
            <p>${paraText}</p>
            <div class = "info-div"><h3 class = "header-info">Navigera</h3><p class = "p-info">${search}</p></div>
            <div class = "info-div"><h3 class = "header-info">Favorisera</h3><p class = "p-info">${favorite}</p></div>
            <div class = "info-div"><h3 class = "header-info">Analysera</h3><p class = "p-info">${analyse}</p></div>
            <div class = "info-div"><h3 class = "header-info">Konfigurera</h3><p class = "p-info">${settings}</p></div>        
        </div>      
    `;
       
        console.log('Inga anteckningar sparade i localstorage än');
    }
});


// localStorage.clear();