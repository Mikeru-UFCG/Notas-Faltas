import { useState } from "react";
import { useNavigate } from "react-router";
import { StudentCarousel } from "../components/StudentCarousel";
import { StudentsTable } from "../components/StudentsTable";
import { SummaryCards } from "../components/SummaryCards";
import { attendancePercent, useAcademic } from "../store/AcademicContext";
import styles from "../../styles/pages.module.css";

export function AttendanceRegistry() {
  const navigate = useNavigate();
  const { selectedStudent, students, markAttendance, setSelectedStudentId } = useAcademic();

  const [search, setSearch] = useState("");
  const [attendanceDate, setAttendanceDate] = useState(() => new Date().toISOString().slice(0, 10));

  const totalPresencas = students.reduce((acc, s) => acc + s.presencas, 0);
  const totalFaltas = students.reduce((acc, s) => acc + s.faltas, 0);
  const totalPendentes = students.filter((s) => s.ultimaFrequencia === "Pendente").length;

  const mediaPresenca =
    students.length > 0
      ? (students.reduce((acc, s) => acc + attendancePercent(s), 0) / students.length).toFixed(1)
      : "0.0";

  const handleRegister = (status: "Presente" | "Ausente") => {
    markAttendance(selectedStudent.id, status);
    navigate("/frequencia/sucesso");
  };

  const handleSearch = (value: string) => {
    setSearch(value);

    const term = value.toLowerCase().trim();
    if (!term) return;

    const matchedStudent = students.find(
      (student) => student.nome.toLowerCase().includes(term) || student.matricula.includes(term)
    );

    if (matchedStudent) {
      setSelectedStudentId(matchedStudent.id);
    }
  };

  const formattedAttendanceDate = new Date(attendanceDate).toLocaleDateString("pt-BR");

  return (
    <section className={styles.page}>
      <h1>Registro de Frequência</h1>

      <article className={styles.card}>
        <div className={styles.filtersRow}>
          <label className={styles.filterField} htmlFor="buscar-aluno-frequencia">
            Buscar aluno
            <input
              id="buscar-aluno-frequencia"
              type="search"
              placeholder="Digite nome ou matrícula"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </label>

          <label className={styles.filterField} htmlFor="data-aula">
            Data da aula
            <input
              id="data-aula"
              type="date"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
            />
          </label>
        </div>
      </article>

      <StudentCarousel />

      <article className={styles.card}>
        <h2>{selectedStudent.nome}</h2>

        <p className={styles.caption}>
          Status atual: {selectedStudent.ultimaFrequencia} • Aula em {formattedAttendanceDate}
        </p>

        <div className={styles.actionsRow}>
          <button className={styles.primaryBtn} onClick={() => handleRegister("Presente")}>
            Presente
          </button>
          <button className={styles.dangerBtn} onClick={() => handleRegister("Ausente")}>
            Ausente
          </button>
        </div>
      </article>

      <SummaryCards
        items={[
          { label: "Presenças", value: `${totalPresencas}`, tone: "success" },
          { label: "Ausências", value: `${totalFaltas}`, tone: "error" },
          { label: "Pendentes", value: `${totalPendentes}` },
          { label: "% de Presença", value: `${mediaPresenca}%`, tone: "primary" },
        ]}
      />

      <article className={styles.card}>
        <h2>Planilha de Frequência</h2>
        <StudentsTable type="attendance" />
      </article>
    </section>
  );
}