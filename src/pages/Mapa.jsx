import "./mapa.css";

export default function Mapa() {
  return (
    <>
      <div className="container-mapa">
        <h1>Mapa Dinámico</h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15112.302023895796!2d-92.64708931395064!3d16.737235142152827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed4592e28505a1%3A0xf5e1dd4cfce6c5d5!2sCatedral%20de%20San%20Crist%C3%B3bal%20de%20las%20Casas!5e0!3m2!1ses!2smx!4v1697584572521!5m2!1ses!2smx"
          loading="lazy"
          allowFullScreen
        ></iframe>

        <img
          src="https://www.travelreport.mx/wp-content/uploads/2017/11/scc4.jpg"
          className="imagen"
          alt="Catedral San Cristóbal"
        />

        <div className="descripcion">
          <p>
            El mapa muestra la ubicación de la{" "}
            <strong>Catedral de San Cristóbal de las Casas</strong>, uno de los
            sitios más emblemáticos de Chiapas.
          </p>

          <p>
            La catedral fue construida en el siglo XVI y combina estilos barroco
            y plateresco. Es el corazón espiritual y social de la ciudad.
          </p>

          <p>
            Además, es el punto de partida de rutas hacia pueblos mágicos,
            cascadas y zonas arqueológicas, consolidando a San Cristóbal como un
            destino ideal para explorar Chiapas.
          </p>
        </div>
      </div>
    </>
  );
}
