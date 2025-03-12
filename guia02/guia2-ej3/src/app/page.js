"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const operar = (operacion) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || (isNaN(num2) && operacion !== "√")) {
      setResultado("Por favor, ingrese números válidos");
      return;
    }

    let resultadoOperacion;

    switch (operacion) {
      case "+":
        resultadoOperacion = num1 + num2;
        break;
      case "-":
        resultadoOperacion = num1 - num2;
        break;
      case "*":
        resultadoOperacion = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setResultado("Error: División por cero");
          return;
        }
        resultadoOperacion = num1 / num2;
        break;
      case "^":
        resultadoOperacion = Math.pow(num1, num2);
        break;
      case "√":
        if (num1 < 0) {
          setResultado("Error: No se puede calcular la raíz de un número negativo");
          return;
        }
        resultadoOperacion = Math.sqrt(num1);
        break;
      default:
        return;
    }

    setResultado(`Resultado: ${resultadoOperacion}`);
  };

  const resetear = () => {
    setNumero1("");
    setNumero2("");
    setResultado(null);
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </div>

        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input
            className={styles.inputnum}
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>

        <div>
          <button className={styles.button} onClick={() => operar("+")}>Sumar</button>
          <button className={styles.button} onClick={() => operar("-")}>Restar</button>
          <button className={styles.button} onClick={() => operar("*")}>Multiplicar</button>
          <button className={styles.button} onClick={() => operar("/")}>Dividir</button>
          <button className={styles.button} onClick={() => operar("^")}>Potencia</button>
          <button className={styles.button} onClick={() => operar("√")}>Raíz Cuadrada</button>
        </div>

        <button className={styles.button} onClick={resetear}>Borrar</button>

        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}
