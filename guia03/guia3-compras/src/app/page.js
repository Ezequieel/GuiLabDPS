import styles from "./page.module.css";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <h1>Gestión de Compras</h1>
          <p>Administra tu lista de compras de manera eficiente</p>
          <Form />
        </div>
      </div>
    </main>
  );
}
