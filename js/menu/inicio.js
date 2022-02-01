var card1 = new Card('Los 3 Puentes', 'Natación. Trelew. Tres distancias distintas, sobre el Río Chubut.', 'img/01-tw_3-puentes.jpg')
var card2 = new Card('Natatlón en Puerto Madryn.', 'Puerto Madryn. Primera Fecha. Distancias Sprint, Promocional, y Postas.', 'img/02-pm_natatlon.jpg')

var cards = [
    card1,
    card2,
    new Card('Gran Campeonato de Aguas Abiertas de Puerto Madryn.', 'Puerto Madryn. Primer Fecha. Distancias competitivas y promocional.', 'img/03-pm_natacion.jpg'),
    new Card('Natación en Villa La Angostura. Carrera.', 'Playa Lago Correntoso, Villa La Angostura, Neuquén. Distancias competitiva y promocional.', 'img/04-vla_natacion.jpg'),
    new Card('Natación en Puerto Madryn. Vuelta al Folias', 'Puerto Madryn, Playa Paraná.', 'img/05-pm_folias.jpg'),
]


function initInicio() {
    console.warn('initInicio')

    var elemCardsContainer = document.getElementsByClassName('cards-container')[0]

    for (var card of cards) {
        card.appendTo(elemCardsContainer)
    }
}