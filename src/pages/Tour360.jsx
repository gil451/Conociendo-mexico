import { useState } from "react";
import "./tour360.css";

export default function Tour360() {

  const lugares = {
    "catedral": {
      nombre: "Catedral de San Cristóbal",
      url: "https://www.google.com/maps/embed?pb=!4v1711489645714!6m8!1m7!1sCAoSLEFGMVFpcE1lV0hBZG5nb2dTeHFHb0M2T1BvM0dFVmhtNm5sVldpYzJtZ0ll!2m2!1d16.7310!2d-92.6370!3f0!4f0!5f0.7820865974627469"
    },
    "andador": {
      nombre: "Andador Eclesiástico",
      url: "https://www.google.com/maps/embed?pb=!4v1602105789085!6m8!1m7!1sCAoSLEFGMVFpcE82bjF5SlBXZ1VBdXo3WkJuRmJnc1hRWXJTTkR5cXNxRFhFSTJn!2m2!1d16.7326!2d-92.6360!3f0!4f0!5f1.1924812503605782"
    },
    "guadalupe": {
      nombre: "Iglesia de Guadalupe (Mirador)",
      url: "https://www.google.com/maps/embed?pb=!4v1602106015623!6m8!1m7!1sCAoSLEFGMVFpcE9RQm95T2FmbEpIeGdWeGZVd0ZMNFBpNUpSREZsZXV5TktzX2hm!2m2!1d16.7435!2d-92.6270!3f0!4f0!5f0.7820865974627469"
    },
    "santodomingo": {
      nombre: "Templo de Santo Domingo",
      url: "https://www.google.com/maps/embed?pb=!4v1602105965883!6m8!1m7!1sCAoSLEFGMVFpcE5OSllTQjRRYTNpUnBVWE1LZnc4SjA3NHpqWmhaV3Nad3gyWGsw!2m2!1d16.7367!2d-92.6337!3f0!4f0!5f0.7820865974627469"
    }
  };

  // 🔥 NUEVO: Array dinámico de videos
  const videos = [
    {
      titulo: "San Cristóbal desde el aire",
      url: "https://www.youtube.com/embed/6gU6U98hSug?si=Cr_KlTYXjUfVqprT"
    },
    {
      titulo: "Lugares que no te puedes perder en Chiapas",
      url: "https://www.youtube.com/embed/YH7ZnB-oGoM?si=BWY406QzAYXhEI6y"
    },
    {
      titulo: "cosas que hacer en San Cristóbal de las Casas",
      url:"https://www.youtube.com/embed/6xqVSuuJYbE?si=Ac6sO3EnD7YPImYP"
    }
  ];


  const [selected, setSelected] = useState("catedral");

  return (
    <div className="tour-container">
      <h1 className="tour-title">Tour Virtual 360°</h1>
      <p className="tour-subtitle">
        Explora los lugares más representativos de San Cristóbal de las Casas desde tu pantalla
      </p>

      {/* Select del Tour */}
      <div className="tour-picker">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {Object.entries(lugares).map(([key, lugar]) => (
            <option key={key} value={key}>
              {lugar.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Iframe del Tour 360 */}
      <iframe
        className="tour-iframe"
        src={lugares[selected].url}
        allowFullScreen
        loading="lazy"
      ></iframe>

      {/* --- NUEVO BLOQUE DE VIDEOS --- */}
      <h2 className="videos-title">Videos del destino</h2>

      <div className="videos-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <h3>{video.titulo}</h3>
            <iframe
              src={video.url}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
