import React from "react";
import styles from "./politica.module.css";

const Politica = () => {
  const pStyle = "text-sm md:text-lg";
  const h4Style = "text-md md:text-2xl my-4";

  return (
    <div className={styles.container + " mx-auto w-full"}>
      <div className={styles.wrapper + " mx-auto"}>
        <h3>Politica de Confidențialitate</h3>
        <div className={styles.row}>
          <h4 className={h4Style}>1. Respectarea legislației</h4>
          <p className={pStyle}>
            &emsp;Website-ul nostru funcționează în conformitate cu legislația
            aplicabilă privind protecția datelor cu caracter personal, inclusiv
            Regulamentul General privind Protecția Datelor (GDPR - Regulamentul
            UE 2016/679) și orice alte reglementări naționale relevante.
            Deoarece nu colectăm date personale, nu este necesară prelucrarea
            sau stocarea acestora.
          </p>
        </div>
        <div className={styles.row}>
          <h4 className={h4Style}>2. Tipuri de date colectate</h4>
          <p className={pStyle}>
            &emsp;Nu colectăm, nu solicităm și nu stocăm nicio informație
            personală a utilizatorilor. Website-ul nostru este conceput strict
            pentru a oferi informații despre serviciile noastre în domeniul
            cadastrului și topografiei.
          </p>
        </div>
        <div className={styles.row}>
          <h4 className={h4Style}>3. Cookie-uri și tehnologii similare</h4>
          <p className={pStyle}>
            &emsp;Website-ul nostru nu utilizează cookie-uri pentru urmărirea
            activității utilizatorilor. Dacă în viitor vom folosi astfel de
            tehnologii, acest lucru va fi menționat clar în această pagină, iar
            utilizatorii vor avea opțiunea de a accepta sau respinge utilizarea
            lor.
          </p>
        </div>
        <div className={styles.row}>
          <h4 className={h4Style}>4. Link-uri către alte website-uri</h4>
          <p className={pStyle}>
            &emsp;Website-ul nostru poate conține link-uri către alte pagini web
            ale unor terțe părți. Nu ne asumăm responsabilitatea pentru
            conținutul sau politicile de confidențialitate ale acestor
            website-uri. Vă recomandăm să citiți politica de confidențialitate a
            fiecărui site pe care îl vizitați.
          </p>
        </div>
        <div className={styles.row}>
          <h4 className={h4Style}>
            5. Modificări ale politicii de confidențialitate
          </h4>
          <p className={pStyle}>
            &emsp;Ne rezervăm dreptul de a modifica această politică de
            confidențialitate oricând, pentru a reflecta eventualele schimbări
            în legislație sau în funcționalitatea site-ului. Orice actualizare
            va fi publicată pe această pagină, iar utilizarea continuă a
            site-ului nostru va fi considerată acceptare a noilor termeni.
          </p>
        </div>
        <div className={styles.row}>
          <h4 className={h4Style}>6. Contact</h4>
          <p className={pStyle}>
            &emsp;Pentru orice întrebare legată de politica noastră de
            confidențialitate, ne puteți contacta la secțiunea
            &quot;Contact&quot; din meniul principal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Politica;
