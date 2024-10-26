let brandsToShow = 6;
let carouselBrands = new Array();
let carouselStart = 0;

let setBrands = () =>{
    let brand = document.querySelectorAll('.brands img');

    for (let i = 0; i < brand.length; i++){
        carouselBrands.push(brand[i]);
        carouselBrands[i].style.display = 'none';
    }
}

let carousel = (show, start, elements) => {
    if (start >= show) {
        start = 0;
    }

    for (let i=0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }
    
    for (let i = start; i < start + show; i++) {
        elements[i].style.display = 'block';
    }

}

window.addEventListener('load', () => {
    setBrands();

    for (let i = 0; i < brandsToShow; i++) {
        carouselBrands[i].style.display = 'block';
    }

    setInterval(() => {
        carouselStart += 1;
        carousel(brandsToShow, carouselStart, carouselBrands);
    }, 3000);
})