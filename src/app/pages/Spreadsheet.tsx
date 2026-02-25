import { useState } from "react";
import { Search, Download, FileSpreadsheet } from "lucide-react";
import { studentsData } from "../data/students";

export function Spreadsheet() {
  const [searchTerm, setSearchTerm] = useState("");

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
            <h1 className="text-2xl text-gray-900 mb-2">Planilha Completa</h1>
            <p className="text-sm text-gray-600">Visualização completa de notas e frequências</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#4A7CD8] text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
              <Download className="w-4 h-4" />
              Atualizar Planilha Externa
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#7EC745] text-white rounded-lg hover:bg-green-600 transition-colors text-sm">
              <FileSpreadsheet className="w-4 h-4" />
              Exportar Planilha
            </button>
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

        {/* Complete Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-600 sticky left-0 bg-gray-50 z-10">Matrícula</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Nome</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">1ª Nota</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">2ª Nota</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">3ª Nota</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Média</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Nota Final</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Média Final</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Presenças</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Faltas</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Frequência %</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 sticky left-0 bg-white z-10">{student.matricula}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{student.nome}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${
                        student.nota1 === null ? 'text-gray-400' :
                        student.nota1 >= 7 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {student.nota1 !== null ? student.nota1.toFixed(1) : '-'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${
                        student.nota2 === null ? 'text-gray-400' :
                        student.nota2 >= 7 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {student.nota2 !== null ? student.nota2.toFixed(1) : '-'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${
                        student.nota3 === null ? 'text-gray-400' :
                        student.nota3 >= 7 ? 'text-green-600' : 
                        student.nota3 === 0 ? 'text-gray-400' : 'text-red-600'
                      }`}>
                        {student.nota3 !== null ? student.nota3.toFixed(1) : '-'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${
                        student.media === null ? 'text-gray-400' :
                        student.media >= 7 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {student.media !== null ? student.media.toFixed(1) : '-'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${
                        student.notaFinal === null || student.notaFinal === 0 ? 'text-gray-400' :
                        student.notaFinal >= 7 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {student.notaFinal !== null && student.notaFinal > 0 ? student.notaFinal.toFixed(1) : '-'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${
                        student.mediaFinal === null ? 'text-gray-400' :
                        student.mediaFinal >= 7 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {student.mediaFinal !== null ? student.mediaFinal.toFixed(1) : '-'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">{student.presencas}</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">{student.faltas}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm ${
                        student.frequenciaPercentual >= 75 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {student.frequenciaPercentual.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs ${
                        student.media !== null && student.media >= 7 && student.frequenciaPercentual >= 75
                          ? 'bg-green-100 text-green-700'
                          : student.media !== null && student.media < 7
                          ? 'bg-red-100 text-red-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {student.media !== null && student.media >= 7 && student.frequenciaPercentual >= 75
                          ? 'Aprovado'
                          : student.media !== null && student.media < 7
                          ? 'Reprovado'
                          : 'Pendente'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <p className="text-sm text-gray-600 mb-2">Total de Alunos</p>
            <p className="text-3xl text-gray-900">{studentsData.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <p className="text-sm text-gray-600 mb-2">Aprovados</p>
            <p className="text-3xl text-green-600">
              {studentsData.filter(s => s.media !== null && s.media >= 7 && s.frequenciaPercentual >= 75).length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <p className="text-sm text-gray-600 mb-2">Reprovados</p>
            <p className="text-3xl text-red-600">
              {studentsData.filter(s => s.media !== null && s.media < 7).length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <p className="text-sm text-gray-600 mb-2">Pendentes</p>
            <p className="text-3xl text-gray-600">
              {studentsData.filter(s => s.media === null).length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
