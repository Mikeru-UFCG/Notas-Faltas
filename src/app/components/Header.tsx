import styles from "../../styles/header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>SIGAA</div>
      <div className={styles.actions}>
        <button className={styles.notification}>🔔</button>
        <div className={styles.profile}>
          <img src="https://i.pravatar.cc/80?img=68" alt="Prof. Dalton" />
          <span>Prof. Dalton</span>
        </div>
      </div>
    </header>
  );
}
