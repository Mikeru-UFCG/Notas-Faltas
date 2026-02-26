import { createContext, useContext, useMemo, useState } from "react";
import { mockStudents, type AttendanceStatus, type Student } from "../data/students";

type AcademicContextType = {
  students: Student[];
  selectedStudentId: string;
  selectedStudent: Student;
  setSelectedStudentId: (id: string) => void;
  updateGrades: (studentId: string, grades: Student["grades"]) => void;
  markAttendance: (studentId: string, status: Exclude<AttendanceStatus, "Pendente">) => void;
};

const AcademicContext = createContext<AcademicContextType | null>(null);

export const averageGrade = (student: Student) => {
  const { n1, n2, n3 } = student.grades;
  return Number(((n1 + n2 + n3) / 3).toFixed(1));
};

export const attendancePercent = (student: Student) => {
  const total = student.presencas + student.faltas;
  if (!total) return 0;
  return Number(((student.presencas / total) * 100).toFixed(1));
};

export function AcademicProvider({ children }: { children: React.ReactNode }) {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [selectedStudentId, setSelectedStudentId] = useState(mockStudents[0].id);

  const selectedStudent = useMemo(
    () => students.find((student) => student.id === selectedStudentId) ?? students[0],
    [students, selectedStudentId],
  );

  const updateGrades = (studentId: string, grades: Student["grades"]) => {
    setStudents((prev) =>
      prev.map((student) => (student.id === studentId ? { ...student, grades } : student)),
    );
  };

  const markAttendance = (
    studentId: string,
    status: Exclude<AttendanceStatus, "Pendente">,
  ) => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id !== studentId) return student;
        return {
          ...student,
          ultimaFrequencia: status,
          presencas: status === "Presente" ? student.presencas + 1 : student.presencas,
          faltas: status === "Ausente" ? student.faltas + 1 : student.faltas,
        };
      }),
    );
  };

  return (
    <AcademicContext.Provider
      value={{
        students,
        selectedStudentId,
        selectedStudent,
        setSelectedStudentId,
        updateGrades,
        markAttendance,
      }}
    >
      {children}
    </AcademicContext.Provider>
  );
}

export function useAcademic() {
  const context = useContext(AcademicContext);
  if (!context) throw new Error("useAcademic deve ser usado dentro de AcademicProvider");
  return context;
}