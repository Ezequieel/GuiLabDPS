"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const credencialesCorrectas = {
    usuario: "admin",
    contrasena: "1234",
  };

  const manejarLogin = (e) => {
    e.preventDefault();

    if (usuario === credencialesCorrectas.usuario && contrasena === credencialesCorrectas.contrasena) {
      setMensaje(`¡Bienvenido, ${usuario}!`);
    } else {
      setMensaje("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Iniciar Sesión</h2>

      <form className={styles.form} onSubmit={manejarLogin}>
        <label className={styles.label}>
          Usuario:
          <input
            className={styles.input}
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </label>

        <label className={styles.label}>
          Contraseña:
          <input
            className={styles.input}
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Iniciar Sesión
        </button>
      </form>

      {mensaje && <p className={styles.mensaje}>{mensaje}</p>}
    </main>
  );
}
