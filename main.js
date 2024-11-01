// DATA
const brands = [
    {
        id: 1,
        src: './imgs/logos/audi.png',
        name: 'Audi',
        alt: 'audi.png',
        liked: false
    },
    {
        id: 2,
        src: './imgs/logos/bmw.png',
        name: 'BMW',
        alt: 'bmw.png'
    },
    {
        id: 3,
        src: './imgs/logos/mercedes.png',
        name: 'Mercedes',
        alt: 'mercedes.png'
    },
    {
        id: 4,
        src: './imgs/logos/mini.png',
        name: 'Mini',
        alt: 'mini.png'
    },
    {
        id: 5,
        src: './imgs/logos/seat.png',
        name: 'Seat',
        alt: 'seat.png'
    },
    {
        id: 6,
        src: './imgs/logos/Fiat.png',
        name: 'Fiat',
        alt: 'Fiat.png'
    },
    {
        id: 7,
        src: './imgs/logos/volkswagen.png',
        name: 'Volkswagen',
        alt: 'volkswagen.png'
    },
    {
        id: 8,
        src: './imgs/logos/volvo.png',
        name: 'Volvo',
        alt: 'volvo.png'
    },
    {
        id: 9,
        src: './imgs/logos/ford.png',
        name: 'Ford',
        alt: 'ford.png'
    }
]

const carModels = [
    {
        id: 1,
        brand: 'Audi',
        model: 'RS6',
        img: './imgs/models/audi-rs6.jpg',
        alt: 'audi-rs6.jpg',
        description: 'El Audi RS6 es un deportivo de alto rendimiento basado en el Audi A6, desarrollado por Audi Sport. Es conocido por combinar el lujo y el confort de una berlina familiar con el rendimiento extremo de un superdeportivo. Equipado con un motor V8 biturbo, en las versiones más recientes alcanza alrededor de 600 caballos de fuerza, lo que le permite acelerar de 0 a 100 km/h en menos de 4 segundos.',
        liked: false,
    },
    {
        id: 2,
        brand: 'Volkswagen',
        model: 'Vento',
        img: './imgs/models/vw-vento.jpg',
        alt: 'vw-vento.jpg',
        description: 'El Volkswagen Vento es un sedán compacto producido por el fabricante alemán Volkswagen. Conocido por su fiabilidad y eficiencia, el Vento ofrece una combinación de rendimiento, comodidad y tecnología avanzada, siendo una opción popular en su segmento.',
        liked: false
    },
    {
        id: 3,
        brand: 'Ford',
        model: 'Maverick',
        img: './imgs/models/ford-maverick.jpg',
        alt: 'ford-maverick.jpg',
        description: 'La Ford Maverick es una pickup compacta de Ford que combina la funcionalidad de un camión con la eficiencia de un vehículo pequeño. Ofrece un diseño moderno, versatilidad en la carga y un interior cómodo con espacio para cinco personas. Se destaca por su motor híbrido de serie, que la hace más eficiente en consumo de combustible en comparación con otras pickups.',
        liked: false
    },
    {
        id: 4,
        brand: 'Ford',
        model: 'Mustang Mach1',
        img: './imgs/models/ford-mustang-mach1.jpg',
        alt: 'ford-mustang-mach1.jpg',
        description: 'El Ford Mustang Mach 1 es una versión de alto rendimiento del icónico Mustang. Equipa un motor V8 de 5.0 litros que genera alrededor de 480 caballos de fuerza y cuenta con mejoras en suspensión, frenos y aerodinámica respecto a los modelos estándar. Su diseño incluye detalles distintivos como parrilla y capó exclusivos, y un interior deportivo.',
        liked: false,
    },
    {
        id: 5,
        brand: 'Fiat',
        model: 'Abarth 500',
        img: './imgs/models/fiat-abarth500.jpg',
        alt: 'fiat-abarth500.jpg',
        description: 'El Fiat Abarth 500 es una versión deportiva del Fiat 500, desarrollada por la división de alto rendimiento Abarth. Es un compacto urbano con un motor turboalimentado de 1.4 litros, que genera entre 140 y 180 caballos de fuerza, dependiendo de la versión. Se distingue por su diseño agresivo, con paragolpes, faldones laterales y alerón trasero específicos, además de detalles como el logo de Abarth y el sonido característico del escape. Su interior incluye asientos deportivos y detalles únicos.',
        liked: false,
    },
    {
        id: 6,
        brand: 'Fiat',
        model: 'Cronos',
        img: './imgs/models/fiat-cronos.jpg',
        alt: 'fiat-cronos.jpg',
        description: 'El Fiat Cronos es un sedán compacto producido por Fiat, diseñado principalmente para el mercado latinoamericano. Lanzado en 2018, combina un diseño moderno y elegante con buen espacio interior y características tecnológicas. Está disponible con motores de 1.3 y 1.8 litros, y opciones de transmisión manual o automática. El Cronos se enfoca en ofrecer comodidad, seguridad y eficiencia, con características como pantalla táctil, conectividad y un maletero amplio. Es una opción versátil para quienes buscan un sedán accesible, ideal para el uso urbano y familiar.',
        liked: false
    },
    {
        id: 7,
        brand: 'Volkswagen',
        model: 'Golf',
        img: './imgs/models/vw-golf.webp',
        alt: 'vw-golf.jpg',
        description: 'El Volkswagen Golf es un hatchback compacto producido por Volkswagen desde 1974. Es conocido por su diseño versátil, confiabilidad y buena conducción. El Golf ha sido uno de los modelos más vendidos de Volkswagen, disponible en diferentes versiones, incluyendo motorizaciones a gasolina, diésel e híbridas. También existen variantes deportivas como el Golf GTI y el Golf R, que ofrecen un rendimiento más alto.',
        liked: false
    },
    {
        id: 8,
        brand: 'BMW',
        model: 'M3',
        img: './imgs/models/bmw-m3.jpeg',
        alt: 'bmw-m3.jpg',
        description: 'El BMW M3 es un automóvil deportivo de alto rendimiento basado en el BMW Serie 3, desarrollado por la división BMW M. Desde su debut en la década de 1980, el M3 ha ganado una reputación como uno de los sedanes y coupés deportivos más icónicos del mundo. Está diseñado para ofrecer un equilibrio perfecto entre rendimiento, manejo y practicidad diaria.',
        liked: false
    },
    {
        id: 9,
        brand: 'BMW',
        model: 'X6',
        img: './imgs/models/bmw-x6.jpeg',
        alt: 'bmw-x6.jpg',
        description: 'El BMW X6 es un SUV coupé de lujo, pionero en el segmento de los SUV con estilo deportivo gracias a su diseño único, que combina las características robustas y altas de un SUV tradicional con la silueta aerodinámica de un coupé. Lanzado por primera vez en 2008, el X6 ha mantenido su presencia distintiva en el mercado como un vehículo que equilibra prestaciones dinámicas, lujo y tecnología avanzada.',
        liked: false
    },
    {
        id: 10,
        brand: 'Mercedes Benz',
        model: 'C 63',
        img: './imgs/models/mercedes-c63.jpeg',
        alt: 'mercedes-c63.jpg',
        description: 'El Mercedes-AMG C63 es una versión de alto rendimiento del Mercedes-Benz Clase C, desarrollada por la división deportiva AMG de la marca. Se caracteriza por combinar un diseño elegante y deportivo con un motor potente, ofreciendo una experiencia de conducción emocionante.',
        liked: false
    },
    {
        id: 11,
        brand: 'Mercedes Benz',
        model: 'Clase G',
        img: './imgs/models/mercedes-claseg.jpeg',
        alt: 'mercedes-claseg.jpg',
        description: 'El Mercedes-Benz Clase G, también conocido como G-Wagon o Gelandewagen, es un SUV de lujo con capacidades todoterreno excepcionales. Originalmente desarrollado para uso militar en la década de 1970, ha mantenido su diseño cuadrado icónico y robusto a lo largo de los años, convirtiéndose en un símbolo de estatus y prestigio.',
        liked: false
    }
];


// Variables
let brandsContainer = document.getElementById('brands-container');
let carModelsContainer = document.getElementById('models-container');


window.addEventListener('load', () => {
    brands.forEach(brand => {
        brandsContainer.innerHTML += 
        `<img src="${brand.src}" alt="${brand.alt}" title="${brand.name}">`
    })

    carModels.forEach(model => {
        carModelsContainer.innerHTML += 
        `<article class="model-card" aria-id="${model.id}">
            ${model.liked ? '<span class="liked"><i class="fas fa-heart"></i>En favoritos</span>' : '<span class="favorite"><i class="far fa-heart"></i>Agregar a favoritos</span>'}
            <img src="${model.img}" alt="${model.alt}" title="${model.model}">
            <h3>${model.model}</h3>
            <p>${model.description}</p>
        </article>`

        if (model.liked) {
            setFavorites(model);
        }
    })

    let removeFavoritesButton = document.querySelectorAll('[aria-label="remove-favorite-button"]');

    removeFavoritesButton.forEach(button => {
        button.onclick = () => {
            removeFavorite(carModels.find(model => model.id == button.parentElement.parentElement.getAttribute('aria-id')));
            setFavorites(carModels);
        }
    })

    let addFavoritesButton = document.querySelectorAll('.favorite');

    addFavoritesButton.forEach(button => {
        button.onclick = () => {
            let model = carModels.find(model => model.id == button.parentElement.getAttribute('aria-id'));
            addFavorite(model);
            setFavorites(model);
        }
    })


})