import { useNavigate } from "react-router";
import { attendancePercent, averageGrade, useAcademic } from "../store/AcademicContext";
import styles from "../../styles/table.module.css";

export function StudentsTable({ type }: { type: "grades" | "attendance" | "full" }) {
  const { students, selectedStudentId, setSelectedStudentId } = useAcademic();
  const navigate = useNavigate();

  const handleRowClick = (studentId: string) => {
    setSelectedStudentId(studentId);
    if (type === "full") navigate(`/alunos/${studentId}`);
  };

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Matrícula</th>
            <th>Nome</th>
            {(type === "grades" || type === "full") && <th>1ª</th>}
            {(type === "grades" || type === "full") && <th>2ª</th>}
            {(type === "grades" || type === "full") && <th>3ª</th>}
            {(type === "grades" || type === "full") && <th>Média</th>}
            {type === "grades" && <th>Nota Final</th>}
            {type === "grades" && <th>Média Final</th>}
            {(type === "attendance" || type === "full") && <th>Frequência</th>}
            {(type === "attendance" || type === "full") && <th>Total de Faltas</th>}
            {type === "full" && <th>Status</th>}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              onClick={() => handleRowClick(student.id)}
              className={selectedStudentId === student.id ? styles.selected : ""}
            >
              <td>{student.matricula}</td>
              <td>{student.nome}</td>
              {(type === "grades" || type === "full") && <td>{student.grades.n1.toFixed(1)}</td>}
              {(type === "grades" || type === "full") && <td>{student.grades.n2.toFixed(1)}</td>}
              {(type === "grades" || type === "full") && <td>{student.grades.n3.toFixed(1)}</td>}
              {(type === "grades" || type === "full") && <td>{averageGrade(student).toFixed(1)}</td>}
              {type === "grades" && <td>{averageGrade(student).toFixed(1)}</td>}
              {type === "grades" && <td>{averageGrade(student).toFixed(1)}</td>}
              {(type === "attendance" || type === "full") && <td>{attendancePercent(student).toFixed(1)}%</td>}
              {(type === "attendance" || type === "full") && <td>{student.faltas}</td>}
              {type === "full" && <td>{averageGrade(student) >= 6 ? "Aprovado" : "Recuperação"}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}