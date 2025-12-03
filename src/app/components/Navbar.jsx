import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Activa el estado 'scrolled' si el usuario ha bajado más de 50px
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Aplica la clase 'scrolled' condicionalmente
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      
      {/* --- LOGO --- */}
      <div className="navbar-logo">
        <NavLink to="/">
          Chiapas <span className="logo-accent">Travel</span>
        </NavLink>
      </div>

      {/* --- MENÚ PRINCIPAL Y BOTONES DE ACCIÓN --- */}
      <nav className="menu">
        
        {/* Enlaces de navegación principales */}
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
        <NavLink to="/hoteles" className={({ isActive }) => (isActive ? "activo" : "")}>
          Hoteles
        </NavLink>

        {/* Tour 360 como botón destacado */}
        <NavLink
          to="/tour360"
          className={({ isActive }) =>
            isActive ? "activo destacado" : "destacado-btn"
          }
        >
          Tour 360°
        </NavLink>

        {/* --- GRUPO: Botones de Autenticación (Login / Register) --- */}
        <div className="auth-actions">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "btn-login active" : "btn-login"
            }
          >
            Iniciar Sesión
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "btn-register active" : "btn-register"
            }
          >
            Registrarse
          </NavLink>
        </div>
      </nav>
    </header>
  );
}