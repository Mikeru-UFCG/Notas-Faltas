interface MetricCardProps {
  title: string;
  value: string | number;
  color: "blue" | "green" | "red" | "gray";
  subtitle?: string;
}

export function MetricCard({ title, value, color, subtitle }: MetricCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-green-50 text-green-700",
    red: "bg-red-50 text-red-700",
    gray: "bg-gray-50 text-gray-700",
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h3 className="text-sm text-gray-600 mb-2">{title}</h3>
      <div className={`text-3xl mb-1 ${colorClasses[color]}`}>
        {value}
      </div>
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
    </div>
  );
}
