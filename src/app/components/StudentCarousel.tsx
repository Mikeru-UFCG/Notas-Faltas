import { averageGrade, useAcademic } from "../store/AcademicContext";
import styles from "../../styles/carousel.module.css";

export function StudentCarousel() {
  const { students, selectedStudentId, setSelectedStudentId } = useAcademic();
  const currentIndex = students.findIndex((s) => s.id === selectedStudentId);

  const selectByOffset = (offset: number) => {
    const next = (currentIndex + offset + students.length) % students.length;
    setSelectedStudentId(students[next].id);
  };

  const cardIndex = [currentIndex - 1, currentIndex, currentIndex + 1].map(
    (index) => (index + students.length) % students.length,
  );

  return (
    <section className={styles.carousel}>
      <button onClick={() => selectByOffset(-1)} className={styles.nav} aria-label="Aluno anterior">
        ←
      </button>
      <div className={styles.track}>
        {cardIndex.map((index, position) => {
          const student = students[index];
          const state = position === 1 ? "center" : "side";
          return (
            <button
              key={`${student.id}-${position}`}
              onClick={() => setSelectedStudentId(student.id)}
              className={`${styles.card} ${styles[state]}`}
            >
              <img src={student.avatar} alt={student.nome} className={styles.avatar} />
              <strong>{student.nome}</strong>
              <span>{student.matricula}</span>
              <small>Média {averageGrade(student).toFixed(1)}</small>
            </button>
          );
        })}
      </div>
      <button onClick={() => selectByOffset(1)} className={styles.nav} aria-label="Próximo aluno">
        →
      </button>
    </section>
  );
}