import { MetricCard } from "../components/MetricCard";
import { studentsData } from "../data/students";

export function Dashboard() {
  // Calculate metrics
  const totalStudents = studentsData.length;
  const studentsWithGrades = studentsData.filter(s => s.media !== null).length;
  const averageGrade = studentsData
    .filter(s => s.media !== null)
    .reduce((sum, s) => sum + (s.media || 0), 0) / studentsWithGrades || 0;
  const pendingGrades = totalStudents - studentsWithGrades;
  const totalPresences = studentsData.reduce((sum, s) => sum + s.presencas, 0);

  return (
    <div className="p-8 pt-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl text-gray-900 mb-2">Dashboard</h1>
          <p className="text-sm text-gray-600">Visão geral do desempenho da turma</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-3">
            <MetricCard
              title="Média Geral"
              value={averageGrade.toFixed(1)}
              color={averageGrade >= 7 ? "green" : "red"}
              subtitle={`${studentsWithGrades} de ${totalStudents} alunos`}
            />
          </div>
          <div className="col-span-3">
            <MetricCard
              title="Notas Lançadas"
              value={`${studentsWithGrades}/${totalStudents}`}
              color="blue"
            />
          </div>
          <div className="col-span-3">
            <MetricCard
              title="Pendências"
              value={pendingGrades}
              color={pendingGrades > 0 ? "red" : "green"}
              subtitle="Notas a lançar"
            />
          </div>
          <div className="col-span-3">
            <MetricCard
              title="Total de Presenças"
              value={totalPresences}
              color="green"
            />
          </div>
        </div>

        {/* Students Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg text-gray-900 mb-4">Resumo da Turma</h2>
          <div className="space-y-4">
            {studentsData.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src={student.foto}
                    alt={student.nome}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-900">{student.nome}</p>
                    <p className="text-xs text-gray-500">{student.matricula}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Média</p>
                    <p className={`text-sm ${
                      student.media === null ? 'text-gray-400' : 
                      student.media >= 7 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {student.media !== null ? student.media.toFixed(1) : '-'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Frequência</p>
                    <p className={`text-sm ${
                      student.frequenciaPercentual >= 75 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {student.frequenciaPercentual.toFixed(1)}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Faltas</p>
                    <p className="text-sm text-gray-900">{student.faltas}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
