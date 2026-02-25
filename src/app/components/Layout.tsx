import { Outlet } from "react-router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#E8EEF4]">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
