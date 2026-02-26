import { useNavigate } from "react-router";
import { StudentsTable } from "../components/StudentsTable";
import { useAcademic } from "../store/AcademicContext";
import styles from "../../styles/pages.module.css";

export function Spreadsheet() {
  const navigate = useNavigate();
  const { setSelectedStudentId } = useAcademic();

  const openFirstStudent = () => {
    setSelectedStudentId("1");
    navigate("/alunos/1");
  };

  return (
    <section className={styles.page}>
      <h1>Planilha Completa</h1>

      <article className={styles.card}>
        <h2>Consolidado da Turma</h2>
        <p className={styles.caption}>Clique em uma linha para abrir o detalhe do aluno.</p>

        <StudentsTable type="full" />

        <div className={styles.actionsRow}>
          <button className={styles.secondaryBtn}>Exportar</button>
          <button className={styles.secondaryBtn} onClick={openFirstStudent}>
            Abrir primeiro aluno
          </button>
        </div>
      </article>
    </section>
  );
}