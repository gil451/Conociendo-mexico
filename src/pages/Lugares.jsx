import "./lugares.css";

export default function Lugares() {
  return (
    <div className="lugares-body">
      <div className="container">
        {/* Título y Subtítulo */}
        <h1>Lugares Imperdibles de Chiapas</h1>

        <p className="intro">
          Chiapas es un estado lleno de maravillas naturales, historia y cultura.
          Cada rincón ofrece paisajes impresionantes y experiencias únicas que
          reflejan la riqueza de México. Desde pueblos mágicos hasta cañones
          milenarios, Chiapas invita a explorar su magia, tradición y asombro
          natural.
        </p>

        {/* Galería de Lugares */}
        <div className="galeria">
          {/* Lugar 1: San Cristóbal de las Casas */}
          <div className="lugar">
            <img
              src="https://www.gob.mx/cms/uploads/article/main_image/82906/Chiapas-San-Cristobal-web.jpg"
              alt="San Cristóbal de las Casas"
            />
            <div className="lugar-info">
              <h3>San Cristóbal de las Casas</h3>
              <p>
                Ubicado en el corazón de los Altos de Chiapas, es uno de los
                destinos más encantadores. Su arquitectura colonial, calles
                empedradas y coloridas fachadas crean una atmósfera mágica que
                combina historia, cultura y tradición indígena.
              </p>
            </div>
          </div>

          {/* Lugar 2: Cascadas de Agua Azul */}
          <div className="lugar">
            <img
              src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/45cd0becb3ef9f141ab72fabc90fdf404fd858e60426431f629186a30dc99414.jpeg"
              alt="Cascadas de Agua Azul"
            />
            <div className="lugar-info">
              <h3>Cascadas de Agua Azul</h3>
              <p>
                Rodeadas de una exuberante vegetación, ofrecen un espectáculo
                natural impresionante. Sus aguas turquesa fluyen entre pozas y
                caídas que crean un entorno perfecto para relajarse y disfrutar
                de la naturaleza en su máxima expresión.
              </p>
            </div>
          </div>

          {/* Lugar 3: Cañón del Sumidero */}
          <div className="lugar">
            <img
              src="https://www.civitatis.com/f/mexico/san-cristobal-de-las-casas/excursion-canon-sumidero-589x392.jpg"
              alt="Cañón del Sumidero"
            />
            <div className="lugar-info">
              <h3>Cañón del Sumidero</h3>
              <p>
                Una de las joyas naturales más impresionantes de México. Sus
                gigantescas paredes verticales, que alcanzan los 1,000 metros de
                altura, y el río Grijalva ofrecen un paisaje majestuoso, ideal
                para el avistamiento de fauna.
              </p>
            </div>
          </div>

          {/* Lugar 4: Zona Arqueológica de Palenque */}
          <div className="lugar">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YRvnXwdmbMmWU5axfijKWgFMZPm9onwSkw&s"
              alt="Palenque"
            />
            <div className="lugar-info">
              <h3>Zona Arqueológica de Palenque</h3>
              <p>
                Palenque es uno de los sitios arqueológicos más importantes de la
                civilización maya. Entre la selva chiapaneca se alzan templos y
                palacios con una arquitectura impresionante, destacando el Templo
                de las Inscripciones.
              </p>
            </div>
          </div>

          {/* Lugar 5: Lagos de Montebello */}
          <div className="lugar">
            <img
              src="https://mexicotransportservice.com/wp-content/uploads/2022/12/San-Cristobal-de-las-Casas-to-Montebello-Lakes-chiapas-2.jpg"
              alt="Lagos de Montebello"
            />
            <div className="lugar-info">
              <h3>Lagos de Montebello</h3>
              <p>
                Este parque nacional está formado por más de 50 lagunas rodeadas
                de densos bosques. La diversidad de tonos, que van del esmeralda
                al turquesa y violeta, lo convierten en un espectáculo visual
                único en México.
              </p>
            </div>
          </div>

          {/* Lugar 6: Cascada El Chiflón */}
          <div className="lugar">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/af/3b/6d.jpg"
              alt="El Chiflón"
            />
            <div className="lugar-info">
              <h3>Cascada El Chiflón</h3>
              <p>
                Una de las cascadas más altas y espectaculares de Chiapas. Su
                caída principal, conocida como “Velo de Novia”, alcanza más de
                120 metros de altura, ofreciendo una vista inigualable después de
                un sendero entre la vegetación.
              </p>
            </div>
          </div>
        </div>

        <p className="descripcion">
          Cada uno de estos lugares representa una parte del alma de Chiapas: su
          riqueza natural, su historia viva y su belleza incomparable. ¡Una
          experiencia que te conectará con el corazón de México!
        </p>
      </div>
    </div>
  );
}