import { User } from "lucide-react";

interface StudentCardProps {
  nome: string;
  matricula: string;
  foto: string;
  nota1?: number | null;
  nota2?: number | null;
  nota3?: number | null;
  media?: number | null;
  status?: 'Presente' | 'Ausente';
  onClick?: () => void;
}

export function StudentCard({ 
  nome, 
  matricula, 
  foto, 
  nota1, 
  nota2, 
  nota3, 
  media,
  status,
  onClick 
}: StudentCardProps) {
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-3">
          {foto ? (
            <img src={foto} alt={nome} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <User className="w-10 h-10 text-gray-500" />
            </div>
          )}
        </div>

        {/* Info */}
        <h3 className="text-base text-gray-900 mb-1">{nome}</h3>
        <p className="text-xs text-gray-500 mb-4">{matricula}</p>

        {/* Grades or Status */}
        {status !== undefined ? (
          <div className={`w-full py-2 px-4 rounded text-center text-sm ${
            status === 'Presente' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {status}
          </div>
        ) : (
          <>
            {/* Grade Pills */}
            <div className="w-full space-y-2 mb-3">
              {nota1 !== null && nota1 !== undefined && (
                <div className={`py-2 px-4 rounded text-center text-sm ${
                  nota1 >= 7 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {nota1.toFixed(1)}
                </div>
              )}
              {nota2 !== null && nota2 !== undefined && (
                <div className={`py-2 px-4 rounded text-center text-sm ${
                  nota2 >= 7 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {nota2.toFixed(1)}
                </div>
              )}
              {nota3 !== null && nota3 !== undefined && (
                <div className={`py-2 px-4 rounded text-center text-sm ${
                  nota3 >= 7 ? 'bg-green-100 text-green-700' : nota3 === 0 ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-700'
                }`}>
                  {nota3.toFixed(1)}
                </div>
              )}
            </div>

            {/* Average */}
            {media !== null && media !== undefined && (
              <div className="w-full text-center">
                <p className={`text-lg ${
                  media >= 7 ? 'text-green-600' : 'text-red-600'
                }`}>
                  Média {media.toFixed(1)}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
