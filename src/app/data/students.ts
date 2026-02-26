export type GradeRecord = {
  n1: number;
  n2: number;
  n3: number;
};

export type AttendanceStatus = "Presente" | "Ausente" | "Pendente";

export type Student = {
  id: string;
  matricula: string;
  nome: string;
  avatar: string;
  grades: GradeRecord;
  presencas: number;
  faltas: number;
  ultimaFrequencia: AttendanceStatus;
};

export const mockStudents: Student[] = [
  {
    id: "1",
    matricula: "2023001",
    nome: "Ana Beatriz Costa",
    avatar: "https://i.pravatar.cc/120?img=5",
    grades: { n1: 8.2, n2: 7.5, n3: 9.1 },
    presencas: 18,
    faltas: 2,
    ultimaFrequencia: "Presente",
  },
  {
    id: "2",
    matricula: "2023002",
    nome: "Carlos Henrique Lima",
    avatar: "https://i.pravatar.cc/120?img=12",
    grades: { n1: 6.3, n2: 7.1, n3: 5.8 },
    presencas: 14,
    faltas: 6,
    ultimaFrequencia: "Ausente",
  },
  {
    id: "3",
    matricula: "2023003",
    nome: "Mariana Souza Alves",
    avatar: "https://i.pravatar.cc/120?img=33",
    grades: { n1: 9.0, n2: 8.7, n3: 8.8 },
    presencas: 19,
    faltas: 1,
    ultimaFrequencia: "Presente",
  },
  {
    id: "4",
    matricula: "2023004",
    nome: "João Pedro Ribeiro",
    avatar: "https://i.pravatar.cc/120?img=45",
    grades: { n1: 4.9, n2: 6.2, n3: 5.4 },
    presencas: 12,
    faltas: 8,
    ultimaFrequencia: "Pendente",
  },
  {
    id: "5",
    matricula: "2023005",
    nome: "Fernanda Gomes Rocha",
    avatar: "https://i.pravatar.cc/120?img=47",
    grades: { n1: 7.8, n2: 8.0, n3: 7.5 },
    presencas: 17,
    faltas: 3,
    ultimaFrequencia: "Presente",
  },
];