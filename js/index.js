document.getElementById('logo-container').addEventListener('click', () => {
    gtag('event', 'home-btn-click', {
        'event-category': 'click',
        'event-label': 'Någon stackare har försökt ta sig tillbaka till startsidan på det här viset',
        'event-author' : 'Emil :-)'
    })
})