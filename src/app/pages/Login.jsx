import { useState } from "react"; 
import { BiUser, BiLock, BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";  // ⬅ IMPORTANTE
import AuthInput from "../components/AuthInput";
import "../auth.css";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación rápida:
    if (correo.trim() === "" || password.trim() === "") {
      return Swal.fire({
        icon: "warning",
        title: "Campos vacíos",
        text: "Debes ingresar un correo y contraseña",
        confirmButtonColor: "#333",
      });
    }

    // 🎉 Simulación de login exitoso
    Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      text: "Bienvenido a la plataforma",
      confirmButtonColor: "#111",
      timer: 1600,
      showConfirmButton: false,
    });

    // Navegar después de un momento
    setTimeout(() => {
      navigate("/"); // Cambia a la página que quieras
    }, 1600);
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
            label="Correo"
            type="email"
            icon={<BiUser />}
            value={correo}
            setValue={setCorreo}
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
