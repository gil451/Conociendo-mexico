import "./comida.css";

export default function Comida() {
  return (
    <div className="comida-body">
      <div className="container">
        <h1>Gastronomía de Chiapas</h1>

        <p className="intro">
          La gastronomía chiapaneca es un reflejo de su diversidad cultural y natural.
          Combinando sabores indígenas, españoles y tropicales, cada platillo cuenta
          una historia de identidad, color y tradición.
        </p>

        <div className="grid-comida">

          <div className="platillo">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/ff/7d/93/tamal-de-mole.jpg" alt="Tamales" />
            <h3>Tamales Chiapanecos</h3>
            <p>Envueltos en hoja de plátano, rellenos de carne y salsa roja o mole.</p>
          </div>

          <div className="platillo">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/a3/c5/61/mole-chiapaneco-el-plato.jpg" alt="Mole" />
            <h3>Mole Chiapaneco</h3>
            <p>Mezcla de chiles, semillas, especias y chocolate con un sabor profundo.</p>
          </div>

          <div className="platillo">
            <img src="https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/06/17130627320_0bd1ee6598_b.jpg" alt="Café" />
            <h3>Café de Chiapas</h3>
            <p>Café de montaña con aroma intenso y sabor equilibrado.</p>
          </div>

          <div className="platillo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjz7AY2sOwduVIBbgAQFs6ZyKh6kRWu39OQ&s" alt="Pepita con Tasajo" />
            <h3>Pepita con Tasajo</h3>
            <p>Carne de res asada bañada en salsa espesa de pepita molida.</p>
          </div>

          <div className="platillo">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/e3/61/87/pozol-de-cacao.jpg" alt="Pozol" />
            <h3>Pozol</h3>
            <p>Bebida refrescante hecha con cacao y maíz molido.</p>
          </div>

          <div className="platillo">
            <img src="https://mayacomunicacion.com.mx/wp-content/uploads/2023/04/Los-%E2%80%98chinculguajes-platillo-de-la-gastronomia-chiapaneca.jpeg" alt="Chinculguajes" />
            <h3>Chinculguajes</h3>
            <p>Empanadas de masa rellenas de frijol y queso.</p>
          </div>
        </div>

        <div className="extra-info">
          <h3>Sabores con historia</h3>
          <p>
            En Chiapas, comer es una experiencia que une familia, comunidad y tradición.
            Cada región aporta ingredientes únicos: plátano, cacao, el maíz y hierbas de la sierra.
          </p>
          <p>
            La cocina chiapaneca mezcla sabores prehispánicos con los heredados de la época colonial.
          </p>
          <p>
            Los mercados y cocinas de los pueblos preservan esta herencia gastronómica transmitida de generación en generación.
          </p>
        </div>
      </div>
    </div>
  );
}
