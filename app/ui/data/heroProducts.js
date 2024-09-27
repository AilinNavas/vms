
import rollerBlackout from '@/public/roller/hero/rollerblackout.png'
import rollerSuns5 from '@/public/roller/hero/rollersunscreen5.png'
import rollerSuns4 from '@/public/roller/hero/rollersunscreen4.png'
import rollerSuns1 from '@/public/roller/hero/rollersunscreen1.png'

import rielAlgodon from '@/public/tradicional/hero/conRiel/gasaAlgodon.png'
import rielIndu from '@/public/tradicional/hero/conRiel/gasaIndu.png'
import rielVoile from '@/public/tradicional/hero/conRiel/voileDeHilo.png'
import rielGros from '@/public/tradicional/hero/conRiel/combinadaGros.png'
import rielBlackout from '@/public/tradicional/hero/conRiel/blackout.png'

import barralIndu from '@/public/tradicional/hero/conBarral/gasaIndu.png'
import barralAlgodon from '@/public/tradicional/hero/conBarral/gasaAlgodon.png'
import barralTusor from '@/public/tradicional/hero/conBarral/tulsor.png'
import barralBlack from '@/public/tradicional/hero/conBarral/blackout.png'
import barralVoile from '@/public/tradicional/hero/conBarral/voile.png'

import bandasBlackout from '@/public/bandas/hero/blackout.png'
import bandasTranslucidas from '@/public/bandas/hero/translucida.png'
import bandasSunscreen from '@/public/bandas/hero/sunscreen.png'

import toldoLonaVinilica from '@/public/toldo/hero/lona.png'
import toldoSunscreen from '@/public/toldo/hero/sunscreen.png'
import toldoPVCcristal from '@/public/toldo/hero/cristal.png'




const heroProducts = {
  tradicionalConBarral: {
    cortinaName: 'Tradicional con Barral',
    fabrics: [
      {
        title: "Gasa Indú",
        description: "Tela perfecta para reducir la radiación solar y permitir la entrada de luz.",
        image: barralIndu
      },
      {
        title: "Gasa de Algodón",
        description: "Bloquea hasta el 99% de la radiación solar. Ideal para mayor privacidad.",
        image: barralAlgodon
      },
      {
        title: "Tusor pesado/ Tusor liviano",
        description: "Elimina completamente la entrada de luz, ideal para dormitorios o cines en casa.",
        image: barralTusor
      },
      {
        title: "Voilé de Hilo",
        description: "Elimina completamente la entrada de luz, ideal para dormitorios o cines en casa.",
        image: barralVoile
      },
      {
        title: "Otras telas",
        description: "Elimina completamente la entrada de luz, ideal para dormitorios o cines en casa.",
        image: barralBlack
      }
    ]
  },
  tradicionalConRiel: {
    cortinaName: 'Tradicional con Riel Europeo',
    fabrics: [
      {
        title: "Gasa de Algodón",
        description: "Bloquea hasta el 99% de la radiación solar. Ideal para mayor privacidad.",
        image: rielAlgodon
      },
      {
        title: "Gasa Indú",
        description: "Tela perfecta para reducir la radiación solar y permitir la entrada de luz.",
        image: rielIndu
      },
      {
        title: "Voilé de Hilo/ Crepe/ Crash/ Camile/ Leonor",
        description: "Elimina completamente la entrada de luz, ideal para dormitorios.",
        image: rielVoile
      },
      {
        title: "Tusor Pesado / Tusor Liviano",
        description: "Elimina completamente la entrada de luz, ideal para dormitorios.",
        image: rielGros
      },

      {
        title: "Blackout Juliette/ de lino/ Melody",
        description: "Elimina completamente la entrada de luz, ideal para dormitorios.",
        image: rielBlackout
      }
    ]
  },
  roller: {
    cortinaName: 'Cortina Roller',
    fabrics: [

      {
        title: "Sunscreen 5%",
        description: "Similar al voile tradicional, pero con mayor densidad para ofrecer más privacidad.",
        image: rollerSuns5
      },
      {
        title: "Sunscreen 4%",
        description: "Opción ideal para bloquear completamente la luz, creando un ambiente oscuro.",
        image: rollerSuns4
      },
      {
        title: "Sunscreen 1%",
        description: "Opción ideal para bloquear completamente la luz, creando un ambiente oscuro.",
        image: rollerSuns1
      },
      {
        title: "Blackout Premium",
        description: "Tela ligera y traslúcida que ofrece un toque de elegancia y permite la entrada de luz natural.",
        image: rollerBlackout
      },
    ]
  },
  bandasVerticales: {
    cortinaName: 'Bandas Verticales',
    fabrics: [
      {
        title: "Translúcidas",
        description: "Opción ideal para bloquear completamente la luz, creando un ambiente oscuro.",
        image: bandasTranslucidas
      },
      {
        title: "Sunscreen",
        description: "Similar al voile tradicional, pero con mayor densidad para ofrecer más privacidad.",
        image: bandasSunscreen
      },

      {
        title: "Blackout premium",
        description: "Tela ligera y traslúcida que ofrece un toque de elegancia y permite la entrada de luz natural.",
        image: bandasBlackout
      },
    ]
  },
  toldosVerticales: {
    cortinaName: 'Toldos Verticales',
    fabrics: [
      {
        title: "Sunscreen",
        description: "Opción ideal para bloquear completamente la luz, creando un ambiente oscuro.",
        image: toldoSunscreen
      },
      {
        title: "Lona vinílica",
        description: "Similar al voile tradicional, pero con mayor densidad para ofrecer más privacidad.",
        image: toldoLonaVinilica
      },

      {
        title: "PVC cristal",
        description: "Tela ligera y traslúcida que ofrece un toque de elegancia y permite la entrada de luz natural.",
        image: toldoPVCcristal
      },
    ]
  },
};

export default heroProducts;
