import { useState } from "react";
import { BiUser, BiLock, BiEnvelope, BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // ⬅ IMPORTANTE
import AuthInput from "../components/AuthInput";
import "../auth.css";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Validaciones simples
    if (!nombre || !correo || !password) {
      return Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor llena todos los campos",
        confirmButtonColor: "#222",
      });
    }

    // Registro exitoso (simulación)
    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: "Tu cuenta fue creada correctamente",
      confirmButtonColor: "#111",
      timer: 1700,
      showConfirmButton: false,
    });

    // Redirigir después de un momento
    setTimeout(() => {
      navigate("/login");
    }, 1700);
  };

  return (
    <div className="auth-container">

      {/* 🔙 Botón para regresar */}
      <button className="back-btn" onClick={() => navigate("/")}>
        <BiArrowBack size={22} />
      </button>

      <div className="auth-box">
        <h2 className="auth-title">Crear Cuenta</h2>

        <form onSubmit={handleRegister}>
          <AuthInput
            label="Nombre completo"
            type="text"
            icon={<BiUser />}
            value={nombre}
            setValue={setNombre}
          />

          <AuthInput
            label="Correo"
            type="email"
            icon={<BiEnvelope />}
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

          <button className="auth-btn">Registrarme</button>
        </form>

        <p className="auth-link">
          ¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a>
        </p>
      </div>
    </div>
  );
}
