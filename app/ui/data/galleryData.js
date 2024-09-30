// data.js
import squareTB1 from '@/public/grid/squareTB1.webp'
import wideTB1 from '@/public/grid/wideTB1.webp'
import squareTB2 from '@/public/grid/squareTB2.webp'
import wideTB2 from '@/public/grid/wideTB2.webp'
import squareTB3 from '@/public/grid/squareTB3.webp'
import wideTB3 from '@/public/grid/wideTB3.webp'

import squareTR1 from '@/public/grid/squareTR1.webp'
import wideTR1 from '@/public/grid/wideTR1.webp'
import squareTR2 from '@/public/grid/squareTR2.webp'
import wideTR2 from '@/public/grid/wideTR2.webp'
import squareTR3 from '@/public/grid/squareTR3.webp'
import wideTR3 from '@/public/grid/wideTR3.webp'


import squareR1 from '@/public/grid/squareR1.webp'
import wideR1 from '@/public/grid/wideR1.webp'
import squareR2 from '@/public/grid/squareR2.webp'
import wideR2 from '@/public/grid/wideR2.webp'
import squareR3 from '@/public/grid/squareR3.webp'
import wideR3 from '@/public/grid/wideR3.webp'

import squareB1 from '@/public/grid/squareB1.webp'
import wideB1 from '@/public/grid/wideB1.webp'
import squareB2 from '@/public/grid/squareB2.webp'
import wideB2 from '@/public/grid/wideB2.webp'
import squareB3 from '@/public/grid/squareB3.webp'
import wideB3 from '@/public/grid/wideB3.webp'

import squareT1 from '@/public/grid/squareT1.webp'
import wideT1 from '@/public/grid/wideT1.webp'
import squareT2 from '@/public/grid/squareT2.webp'
import wideT2 from '@/public/grid/wideT2.webp'
import squareT3 from '@/public/grid/squareT3.webp'
import wideT3 from '@/public/grid/wideT3.webp'


const galleryData = {

    tradicionalConBarral: {
        title: 'Elegancia en cada pliegue',
        description: "Las cortinas tradicionales con barral transforman cualquier espacio con una sensación de calidez y sofisticación. Cada pliegue, cuidadosamente diseñado, añade un toque clásico que convierte tu hogar en un refugio acogedor, mientras resalta la belleza natural de tus ventanas.",
        images: [
            { src: squareTB1, alt: 'img-tradicional-barral-cuadrada-1' },
            { src: wideTB1, alt: 'img-tradicional-barral-rectangular-1' },
            { src: wideTB2, alt: 'img-tradicional-barral-rectangular-2' },
            { src: squareTB2, alt: 'img-tradicional-barral-cuadrada-2' },
            { src: wideTB3, alt: 'img-tradicional-barral-rectangular-3' },
            { src: squareTB3, alt: 'img-tradicional-barral-cuadrada-3' },
        ],
    },
    tradicionalConRiel: {
        title: 'Discreción y perfección en el movimiento',
        description: "Las cortinas con riel europeo deslizan suavemente, creando una estética limpia y moderna. Este sistema permite un movimiento fluido y silencioso, ideal para quienes buscan elegancia con una funcionalidad impecable en cada detalle.",
        images: [
            { src: squareTR1, alt: 'img-tradicional-riel-cuadrada-1' },
            { src: wideTR1, alt: 'img-tradicional-riel-rectangular-1' },
            { src: wideTR2, alt: 'img-tradicional-riel-rectangular-2' },
            { src: squareTR2, alt: 'img-tradicional-riel-cuadrada-2' },
            { src: wideTR3, alt: 'img-tradicional-riel-rectangular-3' },
            { src: squareTR3, alt: 'img-tradicional-riel-cuadrada-3' },
        ],
    },
    roller: {
        title: 'Control y minimalismo en tus manos',
        description: "Las cortinas roller ofrecen la combinación perfecta entre diseño minimalista y control total de luz. Con su estilo sencillo y moderno, brindan privacidad sin complicaciones, mientras crean ambientes luminosos y ordenados que se adaptan a cualquier estilo de vida.",
        images: [
            { src: squareR1, alt: 'img-roller-cuadrada-1' },
            { src: wideR1, alt: 'img-roller-rectangular-1' },
            { src: wideR2, alt: 'img-roller-rectangular-2' },
            { src: squareR2, alt: 'img-roller-cuadrada-1' },
            { src: wideR3, alt: 'img-roller-rectangular-3' },
            { src: squareR3, alt: 'img-roller-cuadrada-1' },
        ],
    },
    bandasVerticales: {
        title: 'Versatilidad con un toque moderno',
        description: "Las cortinas de bandas verticales aportan una estética contemporánea y funcionalidad total. Perfectas para grandes ventanales, su diseño estilizado permite controlar la luz con precisión, añadiendo un dinamismo único que llena de vida cualquier espacio.",
        images: [
            { src: squareB1, alt: 'img-banda-vertical-cuadrada-1' },
            { src: wideB1, alt: 'img-banda-vertical-rectangular-1' },
            { src: wideB2, alt: 'img-banda-vertical-rectangular-2' },
            { src: squareB2, alt: 'img-banda-vertical-cuadrada-2' },
            { src: wideB3, alt: 'img-banda-vertical-rectangular-3' },
            { src: squareB3, alt: 'img-banda-vertical-cuadrada-3' },
        ],
    },
    toldosVerticales: {
        title: 'Protección exterior con estilo',
        description: "Los toldos verticales transforman tus exteriores en un espacio de confort y diseño. No solo protegen contra el sol y el viento, sino que también crean un ambiente acogedor y elegante, ideal para disfrutar del aire libre sin renunciar al estilo.",
        images: [
            { src: squareT1, alt: 'img-toldo-vertical-cuadrada-1' },
            { src: wideT1, alt: 'img-toldo-vertical-rectangular-1' },
            { src: wideT2, alt: 'img-toldo-vertical-rectangular-2' },
            { src: squareT2, alt: 'img-toldo-vertical-cuadrada-2' },
            { src: wideT3, alt: 'img-toldo-vertical-rectangular-3' },
            { src: squareT3, alt: 'img-toldo-vertical-cuadrada-3' },
        ],
    },
    sobreNosotros: {
        title: 'Transformamos espacios con estilo y funcionalidad',
        description: "En VMS Cortinados, no solo vendemos cortinas, sino que brindamos una experiencia de transformación que eleva la estética y funcionalidad de cualquier entorno.",
        images: [
            { src: squareT1, alt: 'img-toldo-vertical-cuadrada-1' },
            { src: wideB3, alt: 'img-toldo-vertical-rectangular-1' },
            { src: wideR2, alt: 'img-toldo-vertical-rectangular-2' },
            { src: squareTR1, alt: 'img-toldo-vertical-cuadrada-2' },
            { src: wideTR3, alt: 'img-toldo-vertical-rectangular-3' },
            { src: squareTB3, alt: 'img-toldo-vertical-cuadrada-3' },
        ],
    },




};

export default galleryData;