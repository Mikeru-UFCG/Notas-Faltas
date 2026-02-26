import { Link } from "react-router";
import styles from "../../styles/pages.module.css";

export function SuccessAttendance() {
  return (
    <section className={styles.page}>
      <article className={styles.card}>
        <h1>Frequência registrada com sucesso</h1>
        <div className={styles.actionsRow}>
          <Link className={styles.primaryBtn} to="/frequencia">Voltar para Frequência</Link>
          <Link className={styles.secondaryBtn} to="/">Ir para Dashboard</Link>
        </div>
      </article>
    </section>
  );
}