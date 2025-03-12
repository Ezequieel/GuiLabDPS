"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Contador</h2>
      <p className={styles.counter}>{contador}</p>
      <div>
        <button className={styles.button} onClick={() => setContador(contador + 1)}>
          Incrementar
        </button>
        <button className={styles.button} onClick={() => setContador(contador - 1)}>
          Decrementar
        </button>
      </div>
    </main>
  );
}
