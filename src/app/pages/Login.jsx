import { useState } from "react";
import { BiUser, BiLock, BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import AuthInput from "../components/AuthInput";
import "../auth.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Iniciar sesión con:", usuario, password);
  };

  return (
    <div className="auth-container">

      {/* 🔙 Botón regresar */}
      <button className="back-btn" onClick={() => navigate("/")}>
        <BiArrowBack size={22} />
      </button>

      <div className="auth-box">
        <h2 className="auth-title">Iniciar Sesión</h2>

        <form onSubmit={handleLogin}>
          <AuthInput
            label="Usuario"
            type="text"
            icon={<BiUser />}
            value={usuario}
            setValue={setUsuario}
          />

          <AuthInput
            label="Contraseña"
            type="password"
            icon={<BiLock />}
            value={password}
            setValue={setPassword}
          />

          <button className="auth-btn">Entrar</button>
        </form>

        <p className="auth-link">
          ¿No tienes cuenta? <a href="/register">Crear cuenta</a>
        </p>
      </div>
    </div>
  );
}
