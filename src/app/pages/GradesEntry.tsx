import { useState } from "react";
import { Search, Download, FileSpreadsheet, ChevronLeft, ChevronRight, X, User, CheckCircle } from "lucide-react";
import { studentsData, Student } from "../data/students";

export function GradesEntry() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(studentsData[0]);
  const [editingGrades, setEditingGrades] = useState({
    nota1: studentsData[0].nota1 !== null ? studentsData[0].nota1.toString() : "",
    nota2: studentsData[0].nota2 !== null ? studentsData[0].nota2.toString() : "",
    nota3: studentsData[0].nota3 !== null ? studentsData[0].nota3.toString() : "",
    notaFinal: studentsData[0].notaFinal !== null ? studentsData[0].notaFinal.toString() : "",
  });

  const filteredStudents = studentsData.filter(
    (student) =>
      student.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.matricula.includes(searchTerm)
  );

  const cardsPerPage = 3;
  const totalPages = Math.ceil(filteredStudents.length / cardsPerPage);
  const visibleCards = filteredStudents.slice(
    currentCardIndex * cardsPerPage,
    (currentCardIndex + 1) * cardsPerPage
  );

  const handleStudentSelect = (student: Student) => {
    setSelectedStudent(student);
    setEditingGrades({
      nota1: student.nota1 !== null ? student.nota1.toString() : "",
      nota2: student.nota2 !== null ? student.nota2.toString() : "",
      nota3: student.nota3 !== null ? student.nota3.toString() : "",
      notaFinal: student.notaFinal !== null ? student.notaFinal.toString() : "",
    });
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="p-8 pt-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl text-gray-900 mb-2">Lançamento de Notas</h1>
            <p className="text-sm text-gray-600">Selecione um aluno para editar suas notas</p>
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Left Column - Selected Student Card */}
          <div className="col-span-4">
            {selectedStudent && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                {/* Student Avatar and Info */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-3">
                    {selectedStudent.foto ? (
                      <img src={selectedStudent.foto} alt={selectedStudent.nome} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <User className="w-12 h-12 text-gray-500" />
                      </div>
                    )}
                  </div>
                  <h2 className="text-lg text-gray-900 mb-1">{selectedStudent.nome}</h2>
                  <p className="text-sm text-gray-500">{selectedStudent.matricula}</p>
                </div>

                {/* Current Grades Display */}
                <div className="space-y-3 mb-6">
                  <div className={`py-3 px-4 rounded-lg text-center ${
                    selectedStudent.nota1 !== null && selectedStudent.nota1 >= 7 
                      ? 'bg-[#7EC745] text-white' 
                      : selectedStudent.nota1 !== null 
                      ? 'bg-[#E74C3C] text-white' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <span className="text-2xl block">
                      {selectedStudent.nota1 !== null ? selectedStudent.nota1.toFixed(1) : '-'}
                    </span>
                    <span className="text-xs block mt-1">1ª Nota</span>
                  </div>

                  <div className={`py-3 px-4 rounded-lg text-center ${
                    selectedStudent.nota2 !== null && selectedStudent.nota2 >= 7 
                      ? 'bg-[#7EC745] text-white' 
                      : selectedStudent.nota2 !== null 
                      ? 'bg-[#E74C3C] text-white' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <span className="text-2xl block">
                      {selectedStudent.nota2 !== null ? selectedStudent.nota2.toFixed(1) : '-'}
                    </span>
                    <span className="text-xs block mt-1">2ª Nota</span>
                  </div>

                  <div className={`py-3 px-4 rounded-lg text-center ${
                    selectedStudent.nota3 !== null && selectedStudent.nota3 >= 7 
                      ? 'bg-[#7EC745] text-white' 
                      : selectedStudent.nota3 !== null && selectedStudent.nota3 > 0
                      ? 'bg-[#E74C3C] text-white' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <span className="text-2xl block">
                      {selectedStudent.nota3 !== null ? selectedStudent.nota3.toFixed(1) : '-'}
                    </span>
                    <span className="text-xs block mt-1">3ª Nota</span>
                  </div>

                  <div className={`py-3 px-4 rounded-lg text-center ${
                    selectedStudent.notaFinal !== null && selectedStudent.notaFinal > 0 && selectedStudent.notaFinal >= 7 
                      ? 'bg-[#7EC745] text-white' 
                      : selectedStudent.notaFinal !== null && selectedStudent.notaFinal > 0
                      ? 'bg-[#E74C3C] text-white' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <span className="text-2xl block">
                      {selectedStudent.notaFinal !== null && selectedStudent.notaFinal > 0 ? selectedStudent.notaFinal.toFixed(1) : '0.0'}
                    </span>
                    <span className="text-xs block mt-1">Nota Final</span>
                  </div>
                </div>

                {/* Average Display */}
                <div className={`py-4 px-4 rounded-lg text-center ${
                  selectedStudent.media !== null && selectedStudent.media >= 7 
                    ? 'bg-green-50 border-2 border-green-500' 
                    : selectedStudent.media !== null 
                    ? 'bg-red-50 border-2 border-red-500' 
                    : 'bg-gray-50 border-2 border-gray-300'
                }`}>
                  <span className="text-xs text-gray-600 block mb-1">Média</span>
                  <span className={`text-3xl block ${
                    selectedStudent.media !== null && selectedStudent.media >= 7 
                      ? 'text-[#7EC745]' 
                      : selectedStudent.media !== null 
                      ? 'text-[#E74C3C]' 
                      : 'text-gray-500'
                  }`}>
                    {selectedStudent.media !== null ? selectedStudent.media.toFixed(1) : '-'}
                  </span>
                </div>
              </div>
            )}

            {/* Summary Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-6">
              <h3 className="text-base text-gray-900 mb-4">Resumo de Avaliações</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-1">Total de Lançadas</p>
                  <p className="text-xl text-gray-900">{studentsData.filter(s => s.media !== null).length}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-1">Média Geral</p>
                  <p className="text-xl text-gray-900">
                    {(studentsData.filter(s => s.media !== null).reduce((sum, s) => sum + (s.media || 0), 0) / studentsData.filter(s => s.media !== null).length || 0).toFixed(1)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-1">Pendentes</p>
                  <p className="text-xl text-red-600">{studentsData.filter(s => s.media === null).length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Carousel and Edit Section */}
          <div className="col-span-8">
            {/* Student Cards Carousel */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base text-gray-900">Selecione um Aluno</h3>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handlePreviousCard}
                    disabled={currentCardIndex === 0}
                    className={`p-2 rounded-lg transition-colors ${
                      currentCardIndex === 0 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-sm text-gray-600">
                    {currentCardIndex + 1} de {totalPages}
                  </span>
                  <button 
                    onClick={handleNextCard}
                    disabled={currentCardIndex >= totalPages - 1}
                    className={`p-2 rounded-lg transition-colors ${
                      currentCardIndex >= totalPages - 1 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Carousel Cards */}
              <div className="grid grid-cols-3 gap-4">
                {visibleCards.map((student) => (
                  <button
                    key={student.id}
                    onClick={() => handleStudentSelect(student)}
                    className={`bg-gray-50 rounded-lg p-4 transition-all hover:shadow-md ${
                      selectedStudent?.id === student.id 
                        ? 'ring-2 ring-blue-500 bg-blue-50' 
                        : 'border border-gray-200'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mb-2">
                        {student.foto ? (
                          <img src={student.foto} alt={student.nome} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-300">
                            <User className="w-8 h-8 text-gray-500" />
                          </div>
                        )}
                      </div>
                      <h4 className="text-sm text-gray-900 text-center mb-1">{student.nome}</h4>
                      <p className="text-xs text-gray-500 mb-3">{student.matricula}</p>
                      
                      {/* Status Badge */}
                      {student.media !== null ? (
                        <div className={`w-full py-1 px-2 rounded text-xs text-center ${
                          student.media >= 7 
                            ? 'bg-[#7EC745] text-white' 
                            : 'bg-[#E74C3C] text-white'
                        }`}>
                          {student.media >= 7 ? 'Aprovado' : 'Reprovado'}
                        </div>
                      ) : (
                        <div className="w-full py-1 px-2 rounded text-xs text-center bg-gray-200 text-gray-600">
                          Pendente
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Grade Editing Section */}
            {selectedStudent && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-base text-gray-900 mb-4">Editar Notas - {selectedStudent.nome}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">1ª Nota</label>
                    <input
                      type="number"
                      value={editingGrades.nota1}
                      onChange={(e) => setEditingGrades({ ...editingGrades, nota1: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      step="0.1"
                      min="0"
                      max="10"
                      placeholder="0.0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">2ª Nota</label>
                    <input
                      type="number"
                      value={editingGrades.nota2}
                      onChange={(e) => setEditingGrades({ ...editingGrades, nota2: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      step="0.1"
                      min="0"
                      max="10"
                      placeholder="0.0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">3ª Nota</label>
                    <input
                      type="number"
                      value={editingGrades.nota3}
                      onChange={(e) => setEditingGrades({ ...editingGrades, nota3: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      step="0.1"
                      min="0"
                      max="10"
                      placeholder="0.0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Nota Final</label>
                    <input
                      type="number"
                      value={editingGrades.notaFinal}
                      onChange={(e) => setEditingGrades({ ...editingGrades, notaFinal: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      step="0.1"
                      min="0"
                      max="10"
                      placeholder="0.0"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-[#7EC745] text-white rounded-lg hover:bg-green-600 transition-colors text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Salvar Notas
                  </button>
                  <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                    Limpar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Grades Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-base text-gray-900">Planilha de Lançamento</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#4A7CD8] text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
              <Download className="w-4 h-4" />
              Exportar Planilha
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Matrícula</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-600">Nome</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">1ª</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">2ª</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">3ª</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Média</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Nota Final</th>
                  <th className="px-6 py-3 text-center text-xs text-gray-600">Média Final</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredStudents.map((student) => (
                  <tr 
                    key={student.id} 
                    className={`hover:bg-gray-50 cursor-pointer ${
                      selectedStudent?.id === student.id ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => handleStudentSelect(student)}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">{student.matricula}</td>
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