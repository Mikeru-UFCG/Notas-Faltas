import { Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 fixed top-0 left-0 right-0 z-50">
      <div className="h-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4A7CD8] rounded flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="3" width="5" height="5" fill="white" />
              <rect x="3" y="12" width="5" height="5" fill="white" />
              <rect x="12" y="3" width="5" height="5" fill="white" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg text-gray-900">SIGAA</h1>
            <p className="text-xs text-gray-500">Sistema Acadêmico Integrado</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1758685734463-98672a67dd1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwbWFufGVufDF8fHx8MTc3MjA1OTA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Prof. Dalton"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <p className="text-sm text-gray-900">Prof. Dalton</p>
              <p className="text-xs text-gray-500">Docente</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
