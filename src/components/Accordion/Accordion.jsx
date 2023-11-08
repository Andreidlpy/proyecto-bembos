import './accordion.css';

export const Accordion = () => {
  return (
    <div className="accordion-container">
      <details className='accordion-container__section'>
        <summary className='accordion-container__section__title'>¿CÓMO NACIÓ BEMBOS?</summary>
        <div className='accordion-container__section__img'>
          <img src="./src/assets/banner.webp" alt="bembos-pionero" />
        </div>
        <div className='accordion-container__section__text'>
          <p>En 1988 un par de jóvenes empresarios peruanos decidió incursionar en un mercado poco difundido hasta el momento en el Perú: el mercado de las hamburguesas.</p>
          <p>En ese momento existían cadenas nacionales que ofrecían hamburguesas dentro de su menú, pero no se había desarrollado el hábito de consumo de hamburguesa en el público peruano ni habían llegado al país las grandes cadenas internacionales. Estos jóvenes empresarios no conocían el negocio pero les gustaban las hamburguesas y tenían muchas ganas y convicción en sacar adelante su proyecto.</p>
          <p>Es así que el 11 de Junio de 1988 nació Bembos en un local alquilado del corazón de Miraflores y comenzaron a trabajar en su objetivo de preparar la mejor hamburguesa del Perú. El éxito fue inmediato, pues además del excelente producto Bembos contaba con un ambiente divertido, una moderna decoración y un excelente servicio.</p>
          <p>Debido a esta gran acogida, en 1990 se inaugura también con éxito sin precedentes el segundo local de Bembos en San Isidro, de allí en adelante el crecimiento sería constante.</p>
          <p>Cuando las grandes cadenas internacionales de hamburguesas llegaron al Perú Bembos ya estaba posicionada en el mercado y la competencia los motivó a ser más innovadores y eficientes, logrando mantener el liderazgo en el mercado.</p>
        </div>
      </details>
      <details className='accordion-container__section'>
        <summary className='accordion-container__section__title'>¿QUÉ OFRECEMOS?</summary>
        <div className='accordion-container__section__img'>
          <img src="./src/assets/banner.webp" alt="bembos-pionero" />
        </div >
        <div className='accordion-container__section__text'>
          <p>La mejor hamburguesa a la parrilla por su sabor único y sus creativas combinaciones a partir de insumos de la más alta calidad ofrecida en nuestros atractivos locales. Nuestro espíritu innovador y expresivo se manifiesta en nuestros productos, pero también en nuestros locales, la música, nuestro ambiente y servicios.</p>
        </div>

      </details>

      <details className='accordion-container__section'>
        <summary className='accordion-container__section__title'>CÓMO SE CREÓ LA HAMBURGUESA BEMBOS</summary>
        <div className='accordion-container__section__img'>
          <img src="./src/assets/banner.webp" alt="bembos-pionero" />
        </div>
        <div className='accordion-container__section__text'>
          <p>Después de muchísimas pruebas y degustaciones descubrieron las tres cualidades que debía tener la hamburguesa: fina carne de novillo (ganado vacuno de hasta 3 años), sazón agradable al exigente paladar peruano y que sea cocida al carbón</p>
          <p>Cuando el producto fue aprobado, descubrieron las posibilidades de combinaciones que se podían lograr. Así nacieron las primeras hamburguesas especiales, hoy “de colección” como “La Francesa” elaborada con champiñones y queso, “la hawaiana” con piña, jamón y queso...y así múltiples combinaciones que han sido ofrecidas durante estos 20 años al público de Bembos para todos los gustos.</p>
          <p>BEMBOS termina de consolidarse alcanzando el liderazgo en el mercado de hamburguesas frente a las cadenas internacionales, con aproximadamente el 50% de participación del mercado.</p>
        </div>
      </details>

      <details className='accordion-container__section'>
        <summary className='accordion-container__section__title'>EN LA ACTUALIDAD</summary>
        <div className='accordion-container__section__img'>
          <img src="./src/assets/banner.webp" alt="bembos-pionero" />
        </div>
        <div className='accordion-container__section__text'>
          <p>BEMBOS cuenta con más de 55 locales en el Perú distribuidos en los principales distritos de Lima, con presencia en los más importantes centros comerciales de esta ciudad: Jockey Plaza, Plaza San Miguel, Caminos del Inca, Mall Aventura Plaza, Megaplaza y en Larcomar, así como en los centros de comercio masivo como son el Jirón de la Unión en el centro de Lima y la avenida Larco en Miraflores donde contamos con 2 locales, 10 tiendas en provincia ubicadas en las ciudades de Trujillo, Chiclayo, Piura, Arequipa y Cuzco, así como de 14 módulos dedicados a la venta exclusiva de postres y helados. Por otro lado contamos con los modernos Bembos Café, ubicados en 10 tiendas incluyendo la tienda de Cuzco. Bembos también está empezando a abrirse camino en el mercado internacional, desarrollando diversos proyectos que tienen como finalidad la consolidación en el mercado internacional.</p>
          <p>Los locales de BEMBOS se caracterizan por su llamativa arquitectura de colores rojo, azul y amarillo además de una moderna decoración. Cuentan con áreas de juegos para niños, servicios de Delivery; algunos locales también tienen Drive-Thru para atención directa al auto, y todos cuentan con la más moderna tecnología con el objeto de proporcionar al cliente un servicio rápido y eficiente, logrado a través de un programa de capacitación permanente y tomando en cuenta los más altos estándares internacionales en cuanto a control de calidad de todos los productos que ofrece.</p>
        </div>

      </details>
    </div>

  )
}
