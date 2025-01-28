import React from "react";
import styles from "./navigation.module.css";

// TODO:
// Navigatia sa se faca blur cand dai scroll in jos (observer, ia de la model facut deja)
// stilizeaza misto butoanele si Logo

const Navigation = () => {
  return (
    <div className={styles.topContainer}>
      <h1 className={styles.titleLogo}>Cadastru</h1>
      <ul className={styles.navContainer + ' hidden sm:flex'}>
        <li className={styles.navItem}>Acasă</li>
        <li className={styles.navItem}>Servicii</li>
        <li className={styles.navItem}>Tarife</li>
        <li className={styles.navItem}>Informații</li>
        <li className={styles.navItem}>Contact</li>
      </ul>
    </div>
  );
};

export default Navigation;
