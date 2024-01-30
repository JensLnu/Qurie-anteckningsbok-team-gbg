document.getElementById('logo').addEventListener('click', () => {
    gtag('click', 'home-button', {
        'event-category': 'click',
        'event-label': 'Någon stackare har försökt ta sig tillbaka till startsidan på det här viset'
    })
})