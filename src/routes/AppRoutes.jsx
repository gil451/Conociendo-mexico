import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Lugares from "../pages/Lugares";
import Comida from "../pages/Comida";
import Tradiciones from "../pages/Tradiciones";
import Mapa from "../pages/Mapa";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lugares" element={<Lugares />} />
      <Route path="/comida" element={<Comida />} />
      <Route path="/tradiciones" element={<Tradiciones />} />
      <Route path="/mapa" element={<Mapa />} />
    </Routes>
  );
}
