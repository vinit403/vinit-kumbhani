"use client";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>VK</span>
      </div>

      <nav className={styles.nav}>
  <a href="#" className={styles.navLink}>Home</a>
  <a href="#" className={styles.navLink}>About</a>
  <a href="#" className={styles.navLink}>Skills</a>
  <a href="#" className={styles.navLink}>Projects</a>
  <a href="#" className={styles.navLink}>Experience</a>
  <a href="#" className={styles.navLink}>Contact</a>
</nav>

      <button className={styles.cta}>
        Let's Talk
      </button>
    </header>
  );
}