// data/benefitsData.js
import elegancia from '@/public/tradicional/benefits/conBarral/elegancia.png'
import versatilidad from '@/public/tradicional/benefits/conBarral/versatilidad.png'
import durabilidad from '@/public/tradicional/benefits/conBarral/durabilidad.png'

import suave from '@/public/tradicional/benefits/conRiel/suave.png'
import sofisticada from '@/public/tradicional/benefits/conRiel/sofisticada.png'
import tamaño from '@/public/tradicional/benefits/conRiel/tamaño.png'

import diseñoModerno from '@/public/roller/benefits/diseñoModerno.png';
import controlLuz from '@/public/roller/benefits/controlLuz.png';
import facilMantenimiento from '@/public/roller/benefits/facilMantenimiento.png';

import bandasControlLuz from '@/public/bandas/benefits/controlLuz.png';
import bandasResistencia from '@/public/bandas/benefits/resistencia.png';
import bandasVentanal from '@/public/bandas/benefits/ventanal.png';

import t1 from '@/public/tradicional/grid/squareT1.png'
import t2 from '@/public/tradicional/grid/squareT2.png'
import t3 from '@/public/tradicional/grid/squareT3.png'

 const benefitsData = {
    
    tradicionalConBarral: [
      {
        id: 1,
        title: " Elegancia clásica y atemporal",
        description: [
          "Las cortinas tradicionales con barral son la elección perfecta para aquellos que buscan un estilo clásico y elegante. Su presencia en un espacio no solo aporta un toque de sofisticación, sino que también se adapta a cualquier decoración, desde la más tradicional hasta la moderna, sin perder su esencia.",
          "Además, este tipo de cortina se presta para combinaciones con otros elementos decorativos, como cenefas o cortinajes dobles, lo que permite crear ambientes personalizados y con una estética más rica y completa.",
        ],
        image: elegancia,
        alt: 'Elegancia'
      },
      {
        id: 2,
        title: "Versatilidad en diseño y funcionalidad",
        description: [
          "Estas cortinas permiten una amplia personalización, ya que puedes elegir entre una variedad de tejidos, colores y patrones. Su diseño con barral facilita un manejo sencillo y permite ajustar la entrada de luz según tus necesidades, creando ambientes cálidos y acogedores.",
          " Además, la facilidad para cambiar la cortina en el barral permite renovar el espacio sin necesidad de realizar grandes modificaciones, adaptándose a cambios estacionales o tendencias decorativas.",
        ],
        image: versatilidad,
         alt: 'Versatilidad'
      },
      {
        id: 3,
        title: "Durabilidad y calidad garantizada",
        description: [
          "Al estar fabricadas con materiales de alta calidad, las cortinas con barral ofrecen una larga vida útil. Su robustez y resistencia aseguran que mantendrán su apariencia y funcionalidad con el paso del tiempo, siendo una inversión inteligente para cualquier espacio. ",
          "El barral mismo, generalmente hecho de metales o maderas de alta calidad, añade un elemento decorativo que no solo complementa la cortina, sino que también realza la belleza del entorno.",
        ],
        image: durabilidad,
         alt: 'Durabilidad'
      },
    ],
    tradicionalConRiel: [
      {
        id: 1,
        title: "Estética minimalista y sofisticada",
        description: [
          "Las cortinas con riel europeo destacan por su diseño limpio y discreto, ideal para espacios que buscan un estilo minimalista. Su sistema oculto de fijación realza la caída natural de la tela, creando una apariencia elegante y sin interrupciones visuales. ",
          "Este estilo minimalista es perfecto para espacios modernos que buscan maximizar la luz natural y crear un ambiente abierto y despejado, sin perder la elegancia que caracteriza a estos ambientes.",
        ],
        image: sofisticada,
         alt: 'Sofisticada'
      },
      {
        id: 2,
        title: "Funcionamiento suave y silencioso",
        description: [
          "Gracias a la tecnología avanzada del riel europeo, estas cortinas se deslizan con suavidad y silencio. Este beneficio es especialmente apreciado en entornos donde el confort y la tranquilidad son esenciales, como dormitorios y salas de estar.",
          "Además, el sistema de rieles permite la instalación de cortinas más pesadas o dobles, sin afectar la facilidad de uso, lo que brinda flexibilidad en la elección de los materiales y estilos.",
        ],
        image: suave,
        alt: 'Suave'
      },
      {
        id: 3,
        title: "Adaptabilidad a espacios de gran tamaño",
        description: [
          "El riel europeo permite la instalación de cortinas en espacios amplios sin comprometer su funcionamiento. Es perfecto para cubrir grandes ventanales o divisiones interiores, garantizando un control eficiente de la luz y privacidad, sin perder el estilo.",
          "Esta capacidad de cubrir grandes áreas de manera uniforme es ideal para arquitecturas modernas con ventanales panorámicos, donde se requiere una solución elegante y funcional que mantenga la continuidad visual.",
        ],
        image: tamaño,
        alt: 'Gran tamaño'
      },
    ],
    roller: [
      {
        id: 1,
        title: "Diseño moderno y estilizado",
        description: [
          "Las cortinas roller son la opción preferida para ambientes contemporáneos. Su diseño minimalista y su capacidad de integrarse sin esfuerzo en cualquier espacio las convierte en una elección popular para quienes buscan una solución estética y funcional. ",
          "Este diseño también permite combinar diferentes tipos de tejidos, como screen o blackout, para ofrecer opciones de control de luz que se adapten a cualquier necesidad, todo sin sacrificar el estilo.",
        ],
        image: diseñoModerno,
        alt: 'Diseño moderno'
      },
      {
        id: 2,
        title: "Control de luz y ahorro energético",
        description: [
          "Estas cortinas permiten un control preciso de la luz natural, protegiendo el interior del calor solar y reduciendo la necesidad de climatización. Esto no solo mejora el confort del hogar, sino que también contribuye al ahorro energético, siendo una opción ecoamigable.",
          "Al reducir la entrada de rayos UV, las cortinas roller también protegen los muebles y superficies de la decoloración, prolongando su vida útil y manteniendo el aspecto del espacio como nuevo.",
        ],
        image: controlLuz,
        alt: 'Control de luz'
      },
      {
        id: 3,
        title: "Fácil mantenimiento y larga duración",
        description: [
          "Fabricadas con materiales resistentes y fáciles de limpiar, las cortinas roller requieren un mantenimiento mínimo. Su durabilidad asegura que mantendrán su apariencia y funcionalidad por años, siendo una inversión práctica y eficiente para cualquier hogar.",
          "Además, su diseño compacto permite una fácil instalación y remoción, lo que facilita su limpieza y mantenimiento, contribuyendo a un ambiente más saludable y libre de polvo.",
        ],
        image: facilMantenimiento,
        alt: 'Facil mantenimiento'
      },
    ],
    bandasVerticales: [
      {
        id: 1,
        title: "Flexibilidad en el control de luz y privacidad",
        description: [
          "Las bandas verticales permiten ajustar la orientación de las láminas para controlar con precisión la cantidad de luz que entra y el nivel de privacidad. Esta característica las hace ideales para oficinas y espacios de trabajo, donde la adaptación a diferentes condiciones de iluminación es crucial.",
          "Además, su diseño vertical evita la acumulación de polvo, lo que facilita su mantenimiento y contribuye a un ambiente de trabajo más limpio y saludable.",
        ],
        image: bandasControlLuz,
        alt: 'Bandas verticales 1'
      },
      {
        id: 2,
        title: "Estilo y funcionalidad en grandes ventanales",
        description: [
          "Diseñadas especialmente para cubrir grandes superficies acristaladas, como puertas corredizas y ventanales panorámicos, las bandas verticales combinan funcionalidad con un estilo moderno. Su diseño vertical aporta un toque de sofisticación y orden a cualquier espacio. ",
          "Estas cortinas también pueden coordinarse con otros elementos decorativos, como persianas o cortinas roller, para crear un diseño cohesivo y multifuncional en espacios abiertos.",
        ],
        image: bandasVentanal,
          alt: 'Bandas verticales 2'
      },
      {
        id: 3,
        title: " Resistencia y durabilidad excepcional",
        description: [
          "Fabricadas con materiales de alta resistencia, las bandas verticales son ideales para áreas de alto tránsito. Su durabilidad las convierte en una opción excelente para entornos comerciales y residenciales, manteniendo su apariencia impecable con el tiempo. ",
          "Además, sus materiales están diseñados para resistir la exposición a la luz solar directa sin decolorarse, lo que asegura que mantendrán su aspecto atractivo durante años, incluso en entornos muy luminosos.",
        ],
        image: bandasResistencia,
          alt: 'Bandas verticales 3'
      },
    ],

    toldosVerticales: [
      {
        id: 1,
        title: "Protección eficiente contra el sol y el calor",
        description: [
          "Los toldos verticales ofrecen una excelente barrera contra los rayos solares, protegiendo el interior del hogar del calor excesivo. Esta característica no solo mejora el confort, sino que también ayuda a reducir los costos de climatización, haciendo del toldo una solución práctica y económica.",
          "Además, los toldos verticales protegen las superficies interiores y exteriores de la decoloración y el desgaste, preservando la estética y el valor de la propiedad.",
        ],
        image: t1,
          alt: 'Toldos verticales 1'
      },
      {
        id: 2,
        title: "Privacidad sin sacrificar la vista",
        description: [
          "Estos toldos permiten mantener la privacidad de los espacios interiores sin perder la conexión con el exterior. Son ideales para balcones y terrazas, donde es importante disfrutar de la vista sin comprometer la intimidad del hogar. ",
          "Su diseño adaptable permite elegir entre diferentes grados de opacidad, lo que brinda la posibilidad de personalizar el nivel de privacidad según la necesidad, mientras se mantiene un estilo elegante y moderno.",
        ],
        image: t2,
        alt: 'Toldos verticales 2'
      },
      {
        id: 3,
        title: "Estilo y funcionalidad en espacios exteriores",
        description: [
          "Los toldos verticales no solo protegen, sino que también añaden un toque de estilo a las áreas exteriores. Disponibles en una variedad de colores y materiales, se integran perfectamente en la estética del hogar, convirtiéndose en un elemento decorativo que también cumple con su función práctica.",
          "Además, su instalación profesional garantiza un ajuste perfecto y un funcionamiento suave, lo que contribuye a la durabilidad y eficiencia del toldo en cualquier condición climática.",
        ],
        image: t3,
        alt: 'Toldos verticales 3'
      },
    ],
   
  };
  
  export default benefitsData;