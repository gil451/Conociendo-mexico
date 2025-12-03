import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Lugares from "../pages/Lugares";
import Comida from "../pages/Comida";
import Tradiciones from "../pages/Tradiciones";
import Mapa from "../pages/Mapa";
import Tour360 from "../pages/Tour360";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lugares" element={<Lugares />} />
      <Route path="/comida" element={<Comida />} />
      <Route path="/tradiciones" element={<Tradiciones />} />
      <Route path="/mapa" element={<Mapa />} />
      <Route path="/tour360" element={<Tour360 />} />
    </Routes>
  );
}
