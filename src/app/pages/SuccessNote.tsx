import { Link } from "react-router";
import styles from "../../styles/pages.module.css";

export function SuccessNote() {
  return (
    <section className={styles.page}>
      <article className={styles.card}>
        <h1>Nota atualizada com sucesso</h1>
        <div className={styles.actionsRow}>
          <Link className={styles.primaryBtn} to="/notas">Voltar para Notas</Link>
          <Link className={styles.secondaryBtn} to="/">Ir para Dashboard</Link>
        </div>
      </article>
    </section>
  );
}