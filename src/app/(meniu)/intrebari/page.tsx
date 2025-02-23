import React from "react";
import cx from "clsx"
import styles from './intrebari.module.css'

const Intrebari = () => {
  return (
    <div className={cx(styles.container,"mx-auto my-4")}>
      <div className={styles.topWrapper}>
        <div className={cx(styles.wrapper,"")}>
          <h3>Cand am nevoie de cadastru?</h3>
          <p>Cadastrul este necesar în mai multe situații, atât pentru apartamente, cât și pentru terenuri sau terenuri cu case. Este obligatoriu în cazul vânzării, succesiunii, partajului sau ipotecării unui imobil. De asemenea, este necesar pentru obținerea autorizației de construire, intabularea dreptului de proprietate sau în situația unor actualizări ale documentației cadastrale (de exemplu, modificări aduse construcțiilor sau terenului). Cadastrul asigură identificarea exactă a proprietății în registrele oficiale și oferă siguranță juridică asupra dreptului de proprietate.</p>
        </div>

        <div className={cx(styles.wrapper,"")}>
          <h3>Cand sunt necesare releveele la o constructie sau apartamente?</h3>
          <h4>Releveele sunt necesare în mai multe situații pentru o construcție sau un apartament, printre care:</h4>
          <ul>
            <li>Întocmirea documentației cadastrale pentru prima înscriere sau actualizarea cadastrului în cazul unor modificări aduse imobilului.</li>
            <li>Obținerea autorizației de construire pentru extinderi, modificări interioare, recompartimentări sau consolidări.</li>
            <li>Lucrări de renovare sau reabilitare care necesită documentație tehnică exactă.</li>
            <li>Vânzare, partaj sau succesiune când este necesară o reprezentare clară a imobilului.</li>
            <li>Închirierea sau evaluarea imobilului, mai ales pentru spații comerciale sau clădiri istorice.</li>
          </ul>
          <p>Releveul oferă o imagine exactă a construcției, cu dimensiuni, compartimentări și alte detalii esențiale pentru orice intervenție asupra imobilului.</p>
        </div>

        <div className={cx(styles.wrapper,"")}>
          <h3>Cand am nevoie de un plan de situatie?</h3>
          <h4>Un plan de situație este necesar în mai multe situații, printre care:</h4>
          <ul>
            <li>Obținerea autorizației de construire - este un document obligatoriu pentru orice construcție nouă, extindere, modificare sau demolare.</li>
            <li>Actualizarea documentației cadastrale - pentru înscrierea în cartea funciară a unei construcții noi sau a modificărilor aduse unui imobil.</li>
            <li>Împărțirea sau alipirea terenurilor - în cazul dezmembrărilor, lotizărilor sau unificărilor de parcele.</li>
            <li>Reabilitarea infrastructurii - pentru proiecte de modernizare a drumurilor, rețelelor de utilități sau spațiilor publice.</li>
            <li>Stabilirea limitelor proprietății - atunci când există litigii sau incertitudini privind granițele unui teren.</li>
          </ul>
          <p>Planul de situație oferă o reprezentare clară a imobilului și a împrejurimilor, fiind esențial în procesele administrative și tehnice.</p>
        </div>

        <div className={cx(styles.wrapper,"")}>
          <h3>Cand sunt necesare trasari ale axelor constructiilor sau a limitelor terenurilor?</h3>
          <h4>Trasările axelor construcțiilor și limitelor terenurilor sunt necesare în mai multe situații esențiale, printre care:</h4>
          <ul>
            <li>Începerea unei construcții - pentru a poziționa corect fundația și structura conform proiectului aprobat.</li>
            <li>Delimitarea precisă a unui teren - în cazul lotizărilor, vânzărilor sau clarificării granițelor proprietății.</li>
            <li>Lucrări de infrastructură - pentru drumuri, rețele de utilități, poduri sau alte construcții civile.</li>
            <li>Reabilitări sau extinderi - pentru construcții existente care necesită modificări structurale.</li>
            <li>Prevenirea litigiilor - pentru a evita suprapunerile sau conflictele privind limitele de proprietate.</li>
          </ul>
          <p>Aceste trasări asigură respectarea exactă a proiectului și evitarea erorilor costisitoare în execuția lucrărilor.</p>
        </div>

        <div className={cx(styles.wrapper,"")}>
          <h3>Cand am nevoie de masuratori 3D la constructii?</h3>
          <h4>Măsurătorile 3D la construcții sunt necesare în mai multe situații esențiale, printre care:</h4>
          <ul>
            <li>Reabilitarea fațadelor - pentru a obține un model precis al clădirii înainte de renovare.</li>
            <li>Expertize tehnice și consolidări - pentru evaluarea stării structurale și identificarea eventualelor probleme.</li>
            <li>Monitorizarea deformărilor - în cazul clădirilor vechi sau afectate de factori externi (cutremure, tasări).</li>
            <li>Scanarea pentru proiectare BIM - pentru realizarea unui model digital detaliat al construcției.</li>
            <li>Documentarea patrimoniului - în cazul clădirilor istorice ce necesită restaurare.</li>
            <li>As-built surveys - pentru verificarea conformității lucrărilor finalizate față de proiectul inițial.</li>
          </ul>
          <p>Aceste măsurători asigură precizie ridicată, reduc erorile și facilitează gestionarea eficientă a proiectelor.</p>
        </div>

        <div className={cx(styles.wrapper,"")}>
          <h3>Cand este necesar crearea unui model 3D al terenului?</h3>
          <h4>Crearea modelelor 3D ale terenurilor este necesară în diverse situații, printre care:</h4>
          <ul>
            <li>Monitorizarea alunecărilor de teren - pentru analiza riscurilor și implementarea măsurilor de stabilizare.</li>
            <li>Proiectarea infrastructurii - în cazul construcției de drumuri, căi ferate, poduri sau rețele edilitare.</li>
            <li>Lucrări de excavare și terasamente - pentru calculul volumelor de pământ necesare excavațiilor sau umpluturilor.</li>
            <li>Amenajări peisagistice și urbanism - pentru proiectarea spațiilor verzi, parcurilor și dezvoltărilor imobiliare.</li>
            <li>Monitorizarea carierelor și exploatărilor miniere - pentru gestionarea eficientă a resurselor și evaluarea impactului asupra mediului.</li>
          </ul>
        </div>

        <div className={cx(styles.wrapper,"")}>
          <h3>Cand este necesar crearea unui plan cu curbe de nivel?</h3>
          <h4>Crearea curbelor de nivel este necesară în mai multe domenii, în special în geografie, inginerie și planificare urbană. Iată câteva situații comune în care se folosesc:</h4>
          <ul>
            <li>Studiul terenurilor: Curbele de nivel sunt folosite pentru a reprezenta pantele și forma terenului într-o zonă dată, fiind esențiale în crearea hărților topografice. Acestea ajută la înțelegerea reliefului și a schimbărilor de altitudine pe o zonă geografică.</li>
            <li>Proiecte de construcții: În construirea drumurilor, clădirilor sau infrastructurii, curbele de nivel sunt utilizate pentru a analiza pantele și pentru a planifica în mod corect sistemele de drenaj și canalizare, prevenind inundațiile și asigurând stabilitatea construcțiilor.</li>
            <li>Studiile hidrologice: Curbele de nivel sunt folosite pentru a evalua fluxul de apă pe o zonă de teren, pentru a anticipa drenajul și posibilele zone de inundație, fiind utile în gestionarea resurselor de apă și în prevenirea dezastrelor naturale.</li>
            <li>Agricultură și gestionarea solurilor: Acestea sunt folosite pentru a înțelege terenurile agricole și pentru a ajuta la gestionarea eficientă a apei și a terenurilor în scopuri agricole, prevenind eroziunea solului.</li>
            <li>Geologie: În studii geologice, curbele de nivel sunt utilizate pentru a reprezenta structuri geologice și pentru a analiza procesele naturale, cum ar fi erupțiile vulcanice sau mișcările tectonice.</li>
            <li>Turism și recreere: În hărțile de drumeție sau peisaj, curbele de nivel ajută la înțelegerea dificultății traseelor și la planificarea excursiilor în teren accidentat.</li>
          </ul>
          <p>Crearea curbelor de nivel ajută în majoritatea cazurilor la analiza și înțelegerea terenului, facilitând luarea unor decizii corecte în diverse proiecte de infrastructură și dezvoltare.</p>
        </div>

        <div className={cx(styles.wrapper,"")}>
          <h3>Cand este necesar crearea unui plan cu curbe de nivel?</h3>
          <h4>Crearea curbelor de nivel este necesară în mai multe domenii, în special în geografie, inginerie și planificare urbană. Iată câteva situații comune în care se folosesc:</h4>
        </div>
      </div>
    </div>
  );
};

export default Intrebari;
