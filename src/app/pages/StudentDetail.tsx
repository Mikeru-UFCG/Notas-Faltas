import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { attendancePercent, averageGrade, useAcademic } from "../store/AcademicContext";
import styles from "../../styles/pages.module.css";

export function StudentDetail() {
  const { id } = useParams();
  const { students, setSelectedStudentId } = useAcademic();
  const navigate = useNavigate();

  const student = useMemo(() => students.find((item) => item.id === id), [students, id]);

  if (!student) return <section className={styles.page}><h1>Aluno não encontrado</h1></section>;

  return (
    <section className={styles.page}>
      <h1>Detalhe do Aluno</h1>
      <article className={styles.card}>
        <div className={styles.studentHeader}>
          <img src={student.avatar} alt={student.nome} className={styles.detailAvatar} />
          <div>
            <h2>{student.nome}</h2>
            <p className={styles.caption}>Matrícula: {student.matricula}</p>
            <p className={styles.caption}>Status: {averageGrade(student) >= 6 ? "Aprovado" : "Recuperação"}</p>
          </div>
        </div>

        <div className={styles.grid2}>
          <div>
            <h2>Histórico de Notas</h2>
            <p>1ª: {student.grades.n1.toFixed(1)}</p>
            <p>2ª: {student.grades.n2.toFixed(1)}</p>
            <p>3ª: {student.grades.n3.toFixed(1)}</p>
            <p className={styles.highlightNumber}>Média: {averageGrade(student).toFixed(1)}</p>
          </div>
          <div>
            <h2>Histórico de Frequência</h2>
            <p>Presenças: {student.presencas}</p>
            <p>Faltas: {student.faltas}</p>
            <p className={styles.highlightNumber}>% Presença: {attendancePercent(student).toFixed(1)}%</p>
          </div>
        </div>

        <button
          className={styles.primaryBtn}
          onClick={() => {
            setSelectedStudentId(student.id);
            navigate("/notas");
          }}
        >
          Editar notas no lançamento
        </button>
      </article>
    </section>
  );
}