"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ConversorTemperatura() {
  const [temperatura, setTemperatura] = useState("");
  const [unidad, setUnidad] = useState("Celsius");
  const [resultado, setResultado] = useState("");

  const convertirTemperatura = () => {
    if (isNaN(temperatura) || temperatura === "") {
      setResultado("Ingrese un número válido.");
      return;
    }

    let resultadoConversion;
    if (unidad === "Celsius") {
      resultadoConversion = (parseFloat(temperatura) * 9) / 5 + 32;
      setResultado(`${temperatura}°C = ${resultadoConversion.toFixed(2)}°F`);
    } else {
      resultadoConversion = ((parseFloat(temperatura) - 32) * 5) / 9;
      setResultado(`${temperatura}°F = ${resultadoConversion.toFixed(2)}°C`);
    }
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Conversor de Temperatura</h2>

      <label className={styles.text}>
        Ingrese la temperatura:
        <input
          className={styles.input}
          type="number"
          value={temperatura}
          onChange={(e) => setTemperatura(e.target.value)}
        />
      </label>

      <label className={styles.text}>
        Seleccione la conversión:
        <select className={styles.select} value={unidad} onChange={(e) => setUnidad(e.target.value)}>
          <option value="Celsius">Celsius a Fahrenheit</option>
          <option value="Fahrenheit">Fahrenheit a Celsius</option>
        </select>
      </label>

      <button className={styles.button} onClick={convertirTemperatura}>
        Convertir
      </button>

      {resultado && <p className={styles.resultado}>{resultado}</p>}
    </main>
  );
}
