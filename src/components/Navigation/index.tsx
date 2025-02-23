import React from "react";
import Link from "next/link";
import styles from "./navigation.module.css";

// TODO:
// Navigatia sa se faca blur cand dai scroll in jos (observer, ia de la model facut deja)
// stilizeaza misto butoanele si Logo

const Navigation = () => {
  return (
    <div className={styles.topContainer + ' px-4 md:px-16'}>
      <h1 className={styles.titleLogo}>Cadastru</h1>
      <ul className={styles.navContainer + " hidden md:flex"}>
        <li className={styles.navItem}>
          <Link href="/">Acasă</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/servicii">Servicii</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/tarife">Tarife</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/acte">Acte</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/info">Informații</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
