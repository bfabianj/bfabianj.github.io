function Card(heading, description, image) {
    this.heading = heading
    this.description = description
    this.image = image

    this.getCardContent = function () {
        var content =
            `
                <article class="card__article">
                    <div class="card__image-container">
                        <img class="card__image" src="${this.image}" alt="${this.heading}">
                        <h3 class="card__heading">${this.heading}</h3>
                    </div>
                    <div class="card__content">
                        <div class="card__description">
                            <h2 class="card__heading">${this.heading}</h2>
                            <p>${this.description}</p>
                        </div>
                    </div>
                </article>
            `
        return content
    }

    this.getCard = function () {
        var nuevaCard = document.createElement('div')
        nuevaCard.classList.add('card')
        nuevaCard.innerHTML = this.getCardContent()

        var thisCard = this

        nuevaCard.addEventListener('click', function () {
            alert(thisCard.heading)
        })

        return nuevaCard
    }

    this.appendTo = function (element) {
        element.appendChild(this.getCard())
    }
}
