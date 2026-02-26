import { Link } from "react-router";
import { SummaryCards } from "../components/SummaryCards";
import { attendancePercent, averageGrade, useAcademic } from "../store/AcademicContext";
import styles from "../../styles/pages.module.css";

export function Dashboard() {
  const { students } = useAcademic();

  const mediaGeral =
    students.length > 0
      ? (
          students.reduce((acc, student) => acc + averageGrade(student), 0) /
          students.length
        ).toFixed(1)
      : "0.0";

  const presencas = students.reduce((acc, student) => acc + student.presencas, 0);

  const totalPresenca =
    students.length > 0
      ? (
          students.reduce((acc, student) => acc + attendancePercent(student), 0) /
          students.length
        ).toFixed(1)
      : "0.0";

  return (
    <section className={styles.page}>
      <h1>Dashboard Acadêmico</h1>

      <SummaryCards
        items={[
          { label: "Média Geral", value: mediaGeral, tone: "primary" },
          { label: "Notas Lançadas", value: `${students.length * 3}`, tone: "success" },
          { label: "Pendências", value: "2", tone: "error" },
          { label: "Total de Presenças", value: `${presencas} (${totalPresenca}%)`, tone: "success" },
        ]}
      />

      <div className={styles.grid2}>
        <article className={styles.card}>
          <h2>Alunos</h2>

          <ul className={styles.miniList}>
            {students.map((student) => (
              <li key={student.id}>
                <img src={student.avatar} alt={student.nome} />
                <div>
                  <strong>{student.nome}</strong>
                  <span>{student.matricula}</span>
                </div>
                <small>Média {averageGrade(student).toFixed(1)}</small>
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.card}>
          <h2>Ações rápidas</h2>

          <div className={styles.actionsColumn}>
            <Link to="/notas" className={styles.actionBtn}>
              Ir para Notas
            </Link>
            <Link to="/frequencia" className={styles.actionBtn}>
              Ir para Frequência
            </Link>
            <Link to="/planilha" className={styles.actionBtn}>
              Abrir Planilha
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}