import { useState } from "react";
import { Search, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { StudentCard } from "../components/StudentCard";
import { studentsData } from "../data/students";

export function AttendanceRegistry() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("Set");
  const [selectedYear, setSelectedYear] = useState("2025");

  const filteredStudents = studentsData.filter(
    (student) =>
      student.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.matricula.includes(searchTerm)
  );

  return (
    <div className="p-8 pt-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl text-gray-900 mb-2">Registro de Frequência</h1>
            <p className="text-sm text-gray-600">Marque presenças e faltas dos alunos</p>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-gray-600" />
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Jan</option>
              <option>Fev</option>
              <option>Mar</option>
              <option>Abr</option>
              <option>Mai</option>
              <option>Jun</option>
              <option>Jul</option>
              <option>Ago</option>
              <option>Set</option>
              <option>Out</option>
              <option>Nov</option>
              <option>Dez</option>
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar aluno por nome ou matrícula..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Student Cards with Status */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg text-gray-900">Alunos</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <span className="text-sm text-gray-600">Página 1 de 4 -</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                nome={student.nome}
                matricula={student.matricula}
                foto={student.foto}
                status={student.status}
              />
            ))}
          </div>
        </div>

        {/* Attendance Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
          <h3 className="text-base text-gray-900 mb-4">Resumo de Frequências</h3>
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Presenças</p>
              <p className="text-2xl text-green-600">
                {studentsData.reduce((sum, s) => sum + s.presencas, 0)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Ausências</p>
              <p className="text-2xl text-red-600">
                {studentsData.reduce((sum, s) => sum + s.faltas, 0)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Pendentes</p>
              <p className="text-2xl text-gray-600">0</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">% de Presença</p>
              <p className="text-2xl text-gray-900">
                {(studentsData.reduce((sum, s) => sum + s.frequenciaPercentual, 0) / studentsData.length).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-base text-gray-900">Planilha de Frequência</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-[#4A7CD8] text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                Atualizar Planilha Externa
              </button>
              <button className="px-4 py-2 bg-[#7EC745] text-white rounded-lg hover:bg-green-600 transition-colors text-sm">
                Exportar Planilha
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Matrícula</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Nome</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Frequência</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Total de Faltas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{student.matricula}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{student.nome}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-4">
                        <div className={`flex-1 h-8 rounded ${
                          student.status === 'Presente' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        } flex items-center justify-center text-sm max-w-xs`}>
                          {student.status}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">{student.faltas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
