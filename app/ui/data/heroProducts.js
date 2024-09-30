
import rollerBlackout from '@/public/roller/hero/rollerblackout.webp'
import rollerSuns5 from '@/public/roller/hero/rollersunscreen5.webp'
import rollerSuns4 from '@/public/roller/hero/rollersunscreen4.webp'
import rollerSuns1 from '@/public/roller/hero/rollersunscreen1.webp'

import rielAlgodon from '@/public/tradicional/hero/conRiel/gasaAlgodon.webp'
import rielHindu from '@/public/tradicional/hero/conRiel/gasaHindu.webp'
import rielVoile from '@/public/tradicional/hero/conRiel/voileDeHilo.webp'
import rielGros from '@/public/tradicional/hero/conRiel/combinadaGros.webp'
import rielBlackout from '@/public/tradicional/hero/conRiel/blackout.webp'

import barralIndu from '@/public/tradicional/hero/conBarral/gasaHindu.webp'
import barralAlgodon from '@/public/tradicional/hero/conBarral/gasaAlgodon.webp'
import barralTusor from '@/public/tradicional/hero/conBarral/tulsor.webp'
import barralBlack from '@/public/tradicional/hero/conBarral/blackout.webp'
import barralVoile from '@/public/tradicional/hero/conBarral/voile.webp'

import bandasBlackout from '@/public/bandas/hero/blackout.webp'
import bandasTranslucidas from '@/public/bandas/hero/translucida.webp'
import bandasSunscreen from '@/public/bandas/hero/sunscreen.webp'

import toldoLonaVinilica from '@/public/toldo/hero/lona.webp'
import toldoSunscreen from '@/public/toldo/hero/sunscreen.webp'
import toldoPVCcristal from '@/public/toldo/hero/cristal.webp'

const heroProducts = {
  tradicionalConBarral: {
    cortinaName: 'Tradicional con Barral',
    fabrics: [
      {
        title: "Gasa de Algodón",
        description: "Aireada y delicada, ideal para ambientes frescos.",
        image: barralAlgodon
      },
      {
        title: "Gasa Hindú",
        description: "Ligera, fresca y suave transparencia elegante.",
        image: barralIndu
      },
      {
        title: "Voile de Hilo / Crepe / Crash / Camile / Leonor",
        description: "Textura suave con caída fluida.",
        image: barralVoile
      },
      {
        title: "Tusor pesado / Tusor liviano",
        description: "Textura robusta que aporta calidez.",
        image: barralTusor
      },
      {
        title: "Blackout Juliette / de lino / Melody",
        description: "Bloquea el paso de luz y permite control térmico.",
        image: barralBlack
      }
    ]
  },
  tradicionalConRiel: {
    cortinaName: 'Tradicional con Riel Europeo',
    fabrics: [
      {
        title: "Gasa de Algodón",
        description: "Aireada y delicada, ideal para ambientes frescos.",
        image: rielAlgodon
      },
      {
        title: "Gasa Hindú",
        description: "Ligera, fresca y suave transparencia elegante.",
        image: rielHindu
      },
      {
        title: "Voile de Hilo / Crepe / Crash / Camile / Leonor",
        description: "Textura suave con caída fluida.",
        image: rielVoile
      },
      {
        title: "Tusor Pesado / Tusor Liviano",
        description: "Textura robusta que aporta calidez.",
        image: rielGros
      },

      {
        title: "Blackout Juliette / de lino / Melody",
        description: "Bloquea el paso de luz y permite control térmico.",
        image: rielBlackout
      }
    ]
  },
  roller: {
    cortinaName: 'Cortina Roller',
    fabrics: [

      {
        title: "Sunscreen 5%",
        description: "Control de luz manteniendo máxima visibilidad exterior.",
        image: rollerSuns5
      },
      {
        title: "Sunscreen 4%",
        description: "Equilibrio entre luz y privacidad.",
        image: rollerSuns4
      },
      {
        title: "Sunscreen 1%",
        description: "Máximo control solar y privacidad.",
        image: rollerSuns1
      },
      {
        title: "Blackout Premium",
        description: "Bloquea el paso de luz y permite control térmico.",
        image: rollerBlackout
      },
    ]
  },
  bandasVerticales: {
    cortinaName: 'Bandas Verticales',
    fabrics: [
      {
        title: "Translúcidas",
        description: "Permite luz suave manteniendo privacidad.",
        image: bandasTranslucidas
      },
      {
        title: "Sunscreen",
        description: "Filtra luz natural de manera sutil.",
        image: bandasSunscreen
      },

      {
        title: "Blackout Premium",
        description: "Bloquea el paso de luz y permite control térmico.",
        image: bandasBlackout
      },
    ]
  },
  toldosVerticales: {
    cortinaName: 'Toldos Verticales',
    fabrics: [
      {
        title: "Sunscreen",
        description: "Filtra luz natural sin bloquear vistas.",
        image: toldoSunscreen
      },
      {
        title: "Lona Vinílica",
        description: "Resistente y duradera, perfecta para exteriores.",
        image: toldoLonaVinilica
      },

      {
        title: "PVC Cristal",
        description: "Transparente y flexible.",
        image: toldoPVCcristal
      },
    ]
  },
};

export default heroProducts;
