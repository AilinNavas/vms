// data.js
import square1 from '@/public/tradicional/grid/square1.png'
import wide1 from '@/public/tradicional/grid/wide1.png'
import square2 from '@/public/tradicional/grid/square2.png'
import wide2 from '@/public/tradicional/grid/wide2.png'
import square3 from '@/public/tradicional/grid/square3.png'
import wide3 from '@/public/tradicional/grid/wide3.png'


const galleryData = {
    tradicional: {
        title: 'Is simply dummy text of the printing and typesetting industry',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        images: [
            { src: square1, alt: 'img-square-1' },
            { src: wide1, alt: 'img-wide-1' },
            { src: wide2, alt: 'img-wide-2' },
            { src: square2, alt: 'img-square-2' },
            { src: wide3, alt: 'img-wide-3' },
            { src: square3, alt: 'img-square-3' },
        ],
    },
    // page2: {
    //   title: 'Gallery Title for Page 2',
    //   description: 'Description for Page 2',
    //   images: [
    //     { src: '/other/grid/image1.png', alt: 'img1' },
    //     { src: '/other/grid/image2.png', alt: 'img2' },
    //     // más imágenes...
    //   ],
    // },
    // Agregar más páginas según sea necesario
};

export default galleryData;