
let setFavorites = (car, container) => {
    let span = document.querySelector('[aria-labelledby="default-text"]');
    
    if (span) span.style.display = 'none'

    if(car.length === 0){
        return span.style.display = 'block'; 
    }

    container.innerHTML +=
        `<article class="favorite-model-card" aria-favorite-id="${car.id}">

                    <div id="remove"><i class="fas fa-times" aria-label="remove-favorite-button"></i>
                        <span class="tooltip-span">Eliminar de favoritos</span>
                    </div>

                    <img src="${car.img}" alt="${car.alt}" title="${car.model}">
                <div class="fav-info"> 
                    <h3>${car.model}</h3>
                
                    <h4>${car.brand}</h4>
                </div>        
            </article>`


            
}


let addFavorite = (model) => {
    localStorage.setItem(`car_liked_${model.id}`, JSON.stringify(model));

    return model.liked = true;
}

let removeFavorite = (model) => {
    localStorage.removeItem(`car_liked_${model.id}`);
    
    return model.liked = false;
}

let getFavorites = () => {
    let keys = Object.keys(localStorage);
    let favorites = keys.filter(key => key.includes('car_liked_'));
    let models = favorites.map(favorite => JSON.parse(localStorage.getItem(favorite)));
    
    return models;
}

let checkAdded = (model) => {
    let liked = localStorage.getItem(`car_liked_${model.id}`);

    if(liked) return true;

    return false;
}