document.addEventListener('DOMContentLoaded', function () {
    const textArea = document.getElementById('text-area');
    const textContent = localStorage.getItem('text');
    const firstDiv = document.createElement('div');
    firstDiv.setAttribute('id', 'first-div');
    const searchDiv = document.createElement('div');
    searchDiv.setAttribute('id', 'search-div');
    searchDiv.setAttribute('class', 'info-div');
    const favoriteDiv = document.createElement('div');
    favoriteDiv.setAttribute('id', 'favorite-div');
    favoriteDiv.setAttribute('class', 'info-div');
    const analyseDiv = document.createElement('div');
    analyseDiv.setAttribute('id', 'analyse-div');
    analyseDiv.setAttribute('class', 'info-div');
    const settingsDiv = document.createElement('div');
    settingsDiv.setAttribute('id', 'settings-div');
    settingsDiv.setAttribute('class', 'info-div');

    if (!textContent) {
        let rubrik = document.createElement('h1');
        rubrik.setAttribute('id', 'first-rubrik');
        rubrik.innerText = 'Välkommen till Qurie';

        let firstTimeInfo = document.createElement('p');
        firstTimeInfo.setAttribute('class', 'text-info');
        firstTimeInfo.setAttribute('id', 'first-p');
        firstTimeInfo.innerText = 'Här hos oss kan du enkelt och smidigt skapa och organisera dina anteckningar. Oavsett om det är idéer, uppgifter eller inspirerande tankar, ger vår plattform dig möjligheten att fånga och förfina dina tankar direkt från din webbläsare. Börja skriva dina anteckningar idag och låt Qurie bli din pålitliga följeslagare för att hålla ordning på dina viktiga tankar och idéer.Enkelhet och användarvänlighet är våra ledord - din nästa stora idé är bara ett klick bort!'

        let search = document.createElement('h3');
        search.setAttribute('class', 'header-info');
        search.innerText = 'Navigera';
        let searchP = document.createElement('p');
        searchP.setAttribute('class', 'p-info');
        searchP.innerText = 'Använd vår smidiga sökfunktion för att enkelt hitta specifika anteckningar. Kategorisera dina tankar genom att lägga till taggar och sök sedan efter dem med ett knapptryck. Effektiv och användarvänlig - hitta rätt anteckning i ett ögonblick!';

        let favorite = document.createElement('h3');
        favorite.setAttribute('class', 'header-info');
        favorite.innerText = 'Favorisera';
        let favoriteP = document.createElement('p');
        favoriteP.setAttribute('class', 'p-info');
        favoriteP.innerText = 'Markera dina bästa anteckningar som favoriter och hitta dem snabbt under stjärnfliken. Ett enkelt sätt att hålla koll på dina mest älskade tankar!';

        let analyse = document.createElement('h3');
        analyse.setAttribute('class', 'header-info');
        analyse.innerText = 'Analysera';
        let analyseP = document.createElement('p');
        analyseP.setAttribute('class', 'p-info');
        analyseP.innerText = 'Förstå ditt användande med Query genom att analysera data och insikter. Utforska mönster, hitta trender och optimera din digitala upplevelse. Enkelt, kraftfullt och skräddarsytt för dig!';

        let settings = document.createElement('h3');
        settings.setAttribute('class', 'header-info');
        settings.innerText = 'Konfigurera';
        let settingsP = document.createElement('p');
        settingsP.setAttribute('class','p-info');
        settingsP.innerText = 'Skapa din perfekta upplevelse! Konfigurera inställningar på sidan för att anpassa utseendet precis som du vill ha det. Ändra färger, layout och mycket mer för att göra sidan till din egen personliga plats för inspiration och produktivitet.';

        firstDiv.appendChild(rubrik);
        firstDiv.appendChild(firstTimeInfo);

        searchDiv.appendChild(search);
        searchDiv.appendChild(searchP);
        firstDiv.appendChild(searchDiv);

        favoriteDiv.appendChild(favorite);
        favoriteDiv.appendChild(favoriteP);
        firstDiv.appendChild(favoriteDiv);
        
        analyseDiv.appendChild(analyse);
        analyseDiv.appendChild(analyseP);
        firstDiv.appendChild(analyseDiv)

        settingsDiv.appendChild(settings);
        settingsDiv.appendChild(settingsP);
        firstDiv.appendChild(settingsDiv);


        textArea.appendChild(firstDiv);

        console.log('Inga anteckningar sparade i localstorage än');
    }
});


// Navigera, favorisera, analysera, konfigurera