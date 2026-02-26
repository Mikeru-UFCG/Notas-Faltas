import { Outlet } from "react-router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import styles from "../../styles/layout.module.css";

export function Layout() {
  return (
    <div className={styles.desktopFrame}>
      <Header />
      <Sidebar />
      <main className={styles.mainContent}>
        <div className={styles.gridContainer}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}