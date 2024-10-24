let articlesToShow = 4;
let articles = new Array();
let currentStart = 0;

// Esta función agrega todos los elementos que tengan la clase "model-card" al arreglo de articles
let setArticles = () => {
    let article = document.getElementsByClassName('model-card');

    for (let i = 0; i < article.length; i++) {
        articles.push(article[i]);
        articles[i].style.display = 'none';
    }
}

// Función para responder al click del boton derecho.
let rightHandle = () => {

    if (currentStart >= articlesToShow) {
        return currentStart = 0;
    }

    return currentStart += 1

}

// Función para responder al click del boton izquierdo.
let leftHandle = () => {

    if (currentStart <= 0) {
        return currentStart = articles.length - articlesToShow;
    }

    return currentStart -= 1
}

let refreshArticles = (articles, currentStart) => {
    for (let i = 0; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }

    for (let i = currentStart; i < currentStart + articlesToShow; i++) {
        articles[i].style.display = 'block';
    }
}


// Seteo de los articles al cargar la página.
window.addEventListener('load', () => {
    setArticles();
    for (let i = 0; i < articlesToShow; i++) {
        articles[i].style.display = 'block';
    }
})


// Obtenemos del dom los botones de control
let rightButton = document.getElementById('right-handle');
let leftButton = document.getElementById('left-handle');


// Acción de cada evento por click, derecho e izquierdo.
rightButton.addEventListener('click', () => {
    rightHandle();
    refreshArticles(articles, currentStart);
});

leftButton.addEventListener('click', () => {
    leftHandle();
    refreshArticles(articles, currentStart);
});


setInterval(() => {
    rightHandle();
    refreshArticles(articles, currentStart)
}, 3000)