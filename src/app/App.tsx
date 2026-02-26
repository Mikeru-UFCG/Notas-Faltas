import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AcademicProvider } from "./store/AcademicContext";

export default function App() {
  return (
    <AcademicProvider>
      <RouterProvider router={router} />
    </AcademicProvider>
  );
}