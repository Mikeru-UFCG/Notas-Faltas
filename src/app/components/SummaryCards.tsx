import styles from "../../styles/summarycards.module.css";

export type SummaryCardItem = { label: string; value: string; tone?: "primary" | "success" | "error" };

export function SummaryCards({ items }: { items: SummaryCardItem[] }) {
  return (
    <div className={styles.wrap}>
      {items.map((item) => (
        <article key={item.label} className={`${styles.card} ${styles[item.tone ?? "primary"]}`}>
          <p className={styles.label}>{item.label}</p>
          <strong className={styles.value}>{item.value}</strong>
        </article>
      ))}
    </div>
  );
}