"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./radionav.module.css";

// TODO:
// Navigatia sa se faca blur cand dai scroll in jos (observer, ia de la model facut deja)
// stilizeaza misto butoanele si Logo

const Navigation = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className={styles.topContainer + " px-4 md:px-16"}>
      <h1 className={styles.titleLogo}>Cadastru</h1>
      <button onClick={() => console.log(path)}>path</button>
      <div className={styles.navContainer + " hidden md:flex"}>
        <label className={styles.label} htmlFor="op1">
          Acasă
        </label>
        <input
          id="op1"
          type="radio"
          name="options"
          value="option1"
          checked={path === "/"}
          onChange={() => router.push("/")}
        />

        <label className={styles.label} htmlFor="op2">
          Servicii
        </label>
        <input
          id="op2"
          type="radio"
          name="options"
          value="option2"
          checked={path === "/servicii"}
          onChange={() => router.push("/servicii")}
        />

        <label className={styles.label} htmlFor="op3">
          Tarife
        </label>
        <input
          id="op3"
          type="radio"
          name="options"
          value="option3"
          checked={path === "/tarife"}
          onChange={() => router.push("/tarife")}
        />

        <label className={styles.label} htmlFor="op4">Acte</label>
        <input id="op4" type="radio" name="options" value="option4" checked={path === "/acte"} onChange={() => router.push("/acte")} />

        <label className={styles.label} htmlFor="op5">Informații</label>
        <input id="op5" type="radio" name="options" value="option5" checked={path === "/info"} onChange={() => router.push("/info")} />

        <label className={styles.label} htmlFor="op6">Contact</label>
        <input id="op6" type="radio" name="options" value="option6" checked={path === "/contact"} onChange={() => router.push("/contact")} />
      </div>
    </div>
  );
};

export default Navigation;
