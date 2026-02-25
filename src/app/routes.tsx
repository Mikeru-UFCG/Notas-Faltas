import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { GradesEntry } from "./pages/GradesEntry";
import { AttendanceRegistry } from "./pages/AttendanceRegistry";
import { Spreadsheet } from "./pages/Spreadsheet";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "lancamento-notas", Component: GradesEntry },
      { path: "registro-frequencia", Component: AttendanceRegistry },
      { path: "planilha", Component: Spreadsheet },
    ],
  },
]);
