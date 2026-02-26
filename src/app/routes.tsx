import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { GradesEntry } from "./pages/GradesEntry";
import { AttendanceRegistry } from "./pages/AttendanceRegistry";
import { Spreadsheet } from "./pages/Spreadsheet";
import { StudentDetail } from "./pages/StudentDetail";
import { SuccessNote } from "./pages/SuccessNote";
import { SuccessAttendance } from "./pages/SuccessAttendance";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "notas", Component: GradesEntry },
      { path: "alunos/:id", Component: StudentDetail },
      { path: "notas/sucesso", Component: SuccessNote },
      { path: "frequencia", Component: AttendanceRegistry },
      { path: "frequencia/sucesso", Component: SuccessAttendance },
      { path: "planilha", Component: Spreadsheet },
    ],
  },
]);
