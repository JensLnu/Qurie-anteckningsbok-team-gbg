document.getElementById('logo').addEventListener('click', () => {
    gtag('event', 'home-button click', {
        'event-category': 'click',
        'event-label': 'Någon stackare har försökt ta sig tillbaka till startsidan på det här viset'
    })
})