import { NavLink } from "react-router";
import styles from "../../styles/sidebar.module.css";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/notas", label: "Lançamento de Notas" },
  { to: "/frequencia", label: "Registro de Frequência" },
  { to: "/planilha", label: "Planilha" },
];

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </aside>
  );
}