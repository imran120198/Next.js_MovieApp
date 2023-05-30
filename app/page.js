`use client`;

import Homepage from "./Components/Homepage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Homepage />
    </main>
  );
}
