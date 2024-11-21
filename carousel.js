let brandsToShow = 6;
let carouselBrands = [];
let carouselStart = 0;

let setBrands = () => {
    carouselBrands = [];
    let brand = document.querySelectorAll('.brands img');

    // Guardar las marcas y ocultarlas inicialmente
    brand.forEach((element) => {
        carouselBrands.push(element);
        element.style.display = 'none';
    });
};

let carousel = (show, start, elements) => {
    // Ocultar todos los elementos
    elements.forEach((element) => (element.style.display = 'none'));

    // Mostrar el número correcto de elementos a partir de la posición de inicio
    for (let i = 0; i < show; i++) {
        const index = (start + i) % elements.length;
        elements[index].style.display = 'block';
    }
};

window.addEventListener('load', () => {
    setBrands();

    // Mostrar las primeras marcas al cargar la página
    carousel(brandsToShow, carouselStart, carouselBrands);

    // Configurar el intervalo para mover el carrusel cada 3 segundos
    setInterval(() => {
        carouselStart = (carouselStart + 1) % carouselBrands.length;
        carousel(brandsToShow, carouselStart, carouselBrands);
    }, 3000);
});
