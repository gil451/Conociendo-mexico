import "./home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="contenido fade-in">
          <h2 className="subtitulo slide-up">Conociendo</h2>
          <h1 className="titulo slide-up delay-1">MÉXICO</h1>

          <div className="ubicacion pop-in delay-2">
            <span className="estado">Chiapas</span>
            <span className="ciudad">SAN CRISTÓBAL DE LAS CASAS</span>
          </div>

          <a href="/tour360" className="cta slide-up delay-3">
            Explorar ahora
          </a>
        </div>
      </section>
    </>
  );
}
