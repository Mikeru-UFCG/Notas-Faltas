import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { StudentCarousel } from "../components/StudentCarousel";
import { StudentsTable } from "../components/StudentsTable";
import { SummaryCards } from "../components/SummaryCards";
import { averageGrade, useAcademic } from "../store/AcademicContext";
import styles from "../../styles/pages.module.css";

const NOTE_REGEX = /^(10(\.0)?|[0-9](\.[0-9])?)$/;

export function GradesEntry() {
  const navigate = useNavigate();
  const { selectedStudent, updateGrades, students, setSelectedStudentId } = useAcademic();

  const [form, setForm] = useState(selectedStudent.grades);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setForm(selectedStudent.grades);
    setError("");
  }, [selectedStudent]);

  const syncForm = (name: "n1" | "n2" | "n3", value: string) => {
    setForm((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const validate = () =>
    Object.values(form).every(
      (value) => NOTE_REGEX.test(value.toFixed(1)) && value >= 0 && value <= 10
    );

  const handleSave = () => {
    if (!validate()) {
      setError("Notas inválidas. Use valores de 0 a 10 com uma casa decimal.");
      return;
    }

    updateGrades(selectedStudent.id, form);
    navigate("/notas/sucesso");
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

  const mediaTurma =
    students.length > 0
      ? (
          students.reduce((acc, student) => acc + averageGrade(student), 0) /
          students.length
        ).toFixed(1)
      : "0.0";

  const mediaAtual = ((form.n1 + form.n2 + form.n3) / 3).toFixed(1);

  return (
    <section className={styles.page}>
      <h1>Lançamento de Notas</h1>

      <article className={styles.card}>
        <label className={styles.filterField} htmlFor="buscar-aluno-notas">
          Buscar aluno
          <input
            id="buscar-aluno-notas"
            type="search"
            placeholder="Digite nome ou matrícula"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </label>
      </article>

      <StudentCarousel />

      <article className={styles.card}>
        <h2>{selectedStudent.nome}</h2>
        <p className={styles.caption}>Matrícula: {selectedStudent.matricula}</p>

        <div className={styles.inputsGrid}>
          {(["n1", "n2", "n3"] as const).map((field, index) => (
            <label key={field}>
              {index + 1}ª Nota
              <input
                type="number"
                min={0}
                max={10}
                step={0.1}
                value={form[field]}
                onChange={(e) => syncForm(field, e.target.value)}
              />
            </label>
          ))}
        </div>

        <p className={styles.highlightNumber}>Média: {mediaAtual}</p>

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.primaryBtn} onClick={handleSave}>
          Salvar Nota
        </button>
      </article>

      <SummaryCards
        items={[
          { label: "Média da Turma", value: mediaTurma, tone: "primary" },
          {
            label: "Acima de 7",
            value: `${students.filter((s) => averageGrade(s) >= 7).length}`,
            tone: "success",
          },
          {
            label: "Abaixo de 6",
            value: `${students.filter((s) => averageGrade(s) < 6).length}`,
            tone: "error",
          },
        ]}
      />

      <article className={styles.card}>
        <h2>Planilha de Notas</h2>

        <StudentsTable type="grades" />

        <div className={styles.actionsRow}>
          <button className={styles.secondaryBtn}>Atualizar Planilha Externa</button>
          <button className={styles.secondaryBtn}>Exportar Planilha</button>
        </div>
      </article>
    </section>
  );
}