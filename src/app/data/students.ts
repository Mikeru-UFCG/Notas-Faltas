export interface Student {
  id: string;
  matricula: string;
  nome: string;
  foto: string;
  nota1: number | null;
  nota2: number | null;
  nota3: number | null;
  media: number | null;
  notaFinal: number | null;
  mediaFinal: number | null;
  presencas: number;
  faltas: number;
  frequenciaPercentual: number;
  status: 'Presente' | 'Ausente';
}

export const studentsData: Student[] = [
  {
    id: '1',
    matricula: '119210746',
    nome: 'Ana Silva',
    foto: 'https://images.unsplash.com/photo-1547817651-7fb0cc360536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHdvbWFufGVufDF8fHx8MTc3MjA1OTA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    nota1: 7.7,
    nota2: 5.9,
    nota3: 0.0,
    media: 4.5,
    notaFinal: 0.0,
    mediaFinal: 4.5,
    presencas: 44,
    faltas: 4,
    frequenciaPercentual: 91.7,
    status: 'Ausente',
  },
  {
    id: '2',
    matricula: '121756342',
    nome: 'Bruno Santos',
    foto: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MjA1OTA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    nota1: null,
    nota2: null,
    nota3: null,
    media: null,
    notaFinal: null,
    mediaFinal: null,
    presencas: 40,
    faltas: 8,
    frequenciaPercentual: 83.3,
    status: 'Ausente',
  },
  {
    id: '3',
    matricula: '122654987',
    nome: 'Cleiton Alves',
    foto: 'https://images.unsplash.com/photo-1639654655546-68bc1f21e9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk5NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    nota1: null,
    nota2: null,
    nota3: null,
    media: null,
    notaFinal: null,
    mediaFinal: null,
    presencas: 48,
    faltas: 0,
    frequenciaPercentual: 100,
    status: 'Presente',
  },
  {
    id: '4',
    matricula: '120345678',
    nome: 'Daniela Costa',
    foto: 'https://images.unsplash.com/photo-1726722064997-d8d55362c663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyMDQ3NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    nota1: 8.5,
    nota2: 9.0,
    nota3: 7.8,
    media: 8.4,
    notaFinal: null,
    mediaFinal: 8.4,
    presencas: 46,
    faltas: 2,
    frequenciaPercentual: 95.8,
    status: 'Presente',
  },
];
