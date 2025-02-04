"use client";
import React, {useState} from "react";
import { useRouter, usePathname } from "next/navigation";
import cx from "clsx"
import styles from "./radionav.module.css";

// TODO:
// Navigatia sa se faca blur cand dai scroll in jos (observer, ia de la model facut deja)
// stilizeaza misto butoanele si Logo

const Navigation = () => {
  const router = useRouter();
  const path = usePathname();

  const [open, setOpen] = useState(false)

  return (
    <div className={styles.topContainer + " px-2 md:px-16 flex items-center justify-around h-full w-full"}>
      <h1 className={cx(styles.titleLogo,"cursor-pointer")} onClick={() => router.push("/")}>Cadastru</h1>
      <button className='text-black lg:hidden flex underline underline-offset-4' onClick={() => setOpen(!open)}>Meniu</button>
      <div className={styles.navContainer} 
      style={{
        "--clip": open
          ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
      } as React.CSSProperties}
      >
        <label className={styles.label} htmlFor="op1">
          Acasă
        </label>
        <input
          id="op1"
          type="radio"
          name="options"
          value="option1"
          checked={path === "/"}
          onChange={() => (router.push("/"), setOpen(false))}
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
          onChange={() => (router.push("/servicii"), setOpen(false))}
        />

        <label className={styles.label} htmlFor="op3">
          Tarife & acte
        </label>
        <input
          id="op3"
          type="radio"
          name="options"
          value="option3"
          checked={path === "/tarife"}
          onChange={() => (router.push("/tarife"), setOpen(false))}
        />

        {/* <label className={styles.label} htmlFor="op4">Acte</label> */}
        {/* <input id="op4" type="radio" name="options" value="option4" checked={path === "/acte"} onChange={() => (router.push("/acte"), setOpen(false))} /> */}

        <label className={styles.label} htmlFor="op5">Informații</label>
        <input id="op5" type="radio" name="options" value="option5" checked={path === "/info"} onChange={() => (router.push("/info"), setOpen(false))} />

        <label className={styles.label} htmlFor="op6">Contact</label>
        <input id="op6" type="radio" name="options" value="option6" checked={path === "/contact"} onChange={() => (router.push("/contact"), setOpen(false))} />
      </div>
    </div>
  );
};

export default Navigation;
