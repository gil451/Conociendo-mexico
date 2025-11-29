import "./tradiciones.css";

export default function Tradiciones() {
  return (
    <>

      <div className="container-tradiciones">
        <h1>Tradiciones de Chiapas</h1>

        <p className="intro">
          Chiapas es un estado lleno de cultura, color y vida. Cada celebración
          representa siglos de historia, fe y arte.
        </p>

        <div className="grid-tradiciones">
          <div className="tarjeta">
            <img
              src="https://i.pinimg.com/736x/54/71/b1/5471b16ddd591c15fff9f51ef1c584a6.jpg"
              alt="Parachicos"
            />
            <h3>Danza de los Parachicos</h3>
            <p>
              Celebración tradicional reconocida como Patrimonio Cultural de la
              Humanidad. Los danzantes usan máscaras talladas y trajes
              coloridos.
            </p>
          </div>

          <div className="tarjeta">
            <img
              src="https://hotelvmsancristobaldelascasas.com/wp-content/uploads/2024/06/free-photo-of-paisaje-luces-noche-festival.jpeg"
              alt="Ferias"
            />
            <h3>Ferias Chiapanecas</h3>
            <p>
              Música, danza, juegos mecánicos y comida tradicional llenan estas
              celebraciones tan importantes para las comunidades.
            </p>
          </div>

          <div className="tarjeta">
            <img
              src="https://explorervibes.com/wp-content/uploads/2016/05/mexico-san-cristobal-de-las-casas-dia-de-los-muertes-femicide-backpacker-backpacking-travel.jpg"
              alt="Día de Muertos"
            />
            <h3>Día de Muertos</h3>
            <p>
              Fiesta llena de flores, velas y color. Las familias adornan
              altares y celebran con comida y rezos en honor a sus seres
              queridos.
            </p>
          </div>
        </div>

        <div className="extra-info">
          <h3>El alma cultural de Chiapas</h3>
          <p>
            En Chiapas, las tradiciones mantienen viva la identidad de los
            pueblos. Cada costumbre representa un vínculo con los antepasados y
            la naturaleza.
          </p>

          <p>
            Las comunidades indígenas conservan prácticas ancestrales en su
            vestimenta, lengua, gastronomía y ceremonias religiosas.
          </p>

          <p>
            Artesanías como tejidos, bordados, máscaras y cerámica reflejan la
            creatividad y los colores característicos de Chiapas.
          </p>
        </div>
      </div>
    </>
  );
}
