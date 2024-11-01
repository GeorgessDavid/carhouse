let setFavorites = (car) => {
    let container = document.querySelector('.favorites-container');

    container.innerHTML +=
        `<article class="favorite-model-card">

                    <div id="remove"><i class="fas fa-times" aria-label="remove-favorite-button"></i>
                        <span class="tooltip-span">Eliminar de favoritos</span>
                    </div>

                    <img src="${car.img}" alt="${car.alt}" title="${car.model}">
                <h3>${car.model}</h3>
                <p>${car.description}</p>
            </article>`


    let span = document.querySelector('[aria-labelledby="default-text"]');

    span.style.display = 'none'
}


let addFavorite = (model) => {
    localStorage.setItem(model.id, JSON.stringify(model));
}

let removeFavorite = (model) => {
    localStorage.removeItem(model.id);
}
