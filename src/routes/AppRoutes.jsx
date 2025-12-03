import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Lugares from "../pages/Lugares";
import Comida from "../pages/Comida";
import Tradiciones from "../pages/Tradiciones";
import Mapa from "../pages/Mapa";
import Tour360 from "../pages/Tour360";

import Login from "../app/pages/Login";
import Register from "../app/pages/Register";
import Hoteles from "../pages/Hoteles";

// import Reseñas from "../pages/Reseñas";
// import Vuelos from "../pages/Vuelos";

// import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* PÚBLICAS */}
      <Route path="/" element={<Home />} />
      <Route path="/lugares" element={<Lugares />} />
      <Route path="/comida" element={<Comida />} />
      <Route path="/tradiciones" element={<Tradiciones />} />
      <Route path="/mapa" element={<Mapa />} />
      <Route path="/tour360" element={<Tour360 />} />

      {/* LOGIN / REGISTRO */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/hoteles" element={<Hoteles />} />
      {/* PROTEGIDAS */ }
  {/* <Route
        path="/resenas"
        element={
          <ProtectedRoute>
            <Reseñas />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vuelos"
        element={
          <ProtectedRoute>
            <Vuelos />
          </ProtectedRoute>
        }
      /> */}
    </Routes >
  );
}
