import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="menu">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "activo" : "")}>
          Home
        </NavLink>

        <NavLink to="/lugares" className={({ isActive }) => (isActive ? "activo" : "")}>
          Lugares
        </NavLink>

        <NavLink to="/comida" className={({ isActive }) => (isActive ? "activo" : "")}>
          Comida
        </NavLink>

        <NavLink to="/tradiciones" className={({ isActive }) => (isActive ? "activo" : "")}>
          Tradiciones
        </NavLink>

        <NavLink to="/mapa" className={({ isActive }) => (isActive ? "activo" : "")}>
          Mapa
        </NavLink>
      </nav>

      <div className="buscador">
        <input type="text" placeholder="Buscar..." />
        <button>🔍</button>
      </div>
    </header>
  );
}
