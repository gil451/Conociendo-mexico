import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Activa el estado 'scrolled' cuando el usuario se desplaza más de 50px
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Agregamos una clase para el logo que está separado de los enlaces
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <NavLink to="/">
          Chiapas <span className="logo-accent">Travel</span>
        </NavLink>
      </div>

      <nav className="menu">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "activo" : "")}>
          Home
        </NavLink>

        <NavLink to="/lugares" className={({ isActive }) => (isActive ? "activo" : "")}>
          Lugares
        </NavLink>

        <NavLink to="/comida" className={({ isActive }) => (isActive ? "activo" : "")}>
          Gastronomía
        </NavLink>

        <NavLink to="/tradiciones" className={({ isActive }) => (isActive ? "activo" : "")}>
          Cultura
        </NavLink>

        <NavLink to="/mapa" className={({ isActive }) => (isActive ? "activo" : "")}>
          Mapa
        </NavLink>
        
        {/* Enlace destacado como 'Call to Action' */}
        <NavLink to="/tour360" className={({ isActive }) => (isActive ? "activo destacado" : "destacado-btn")}>
          Tour 360°
        </NavLink>
      </nav>
      {/* El div.buscador ha sido eliminado según tu solicitud */}
    </header>
  );
}