import React from "react";
import cx from "clsx";
import styles from "./intrebari.module.css";

const Intrebari = () => {
  return (
    <div className={cx(styles.container, "mx-auto my-4")}>
      <div className={styles.topWrapper}>
        <div className={cx(styles.wrapper, "")}>
          <h3>Când am nevoie de cadastru?</h3>
          <p>
            Cadastrul este necesar în mai multe situații, atât pentru
            apartamente, cât și pentru terenuri sau terenuri cu case. Este
            obligatoriu în cazul vânzării, succesiunii, partajului sau
            ipotecării unui imobil. De asemenea, este necesar pentru obținerea
            autorizației de construire, intabularea dreptului de proprietate sau
            în situația unor actualizări ale documentației cadastrale (de
            exemplu, modificări aduse construcțiilor sau terenului). Cadastrul
            asigură identificarea exactă a proprietății în registrele oficiale
            și oferă siguranță juridică asupra dreptului de proprietate.
          </p>
        </div>

        <div className={cx(styles.wrapper, "")}>
          <h3>Când se solicită certificatul energetic?</h3>
          <h4>
            Certificatul energetic este necesar în anumite situații legale și
            administrative legate de clădiri, cu scopul de a evalua și certifica
            performanța energetică a unei clădiri. Acesta este important atât
            pentru proprietarii de imobile, cât și pentru cumpărători, chiriași
            sau dezvoltatori. Iată când se cere certificatul energetic:
          </h4>
          <ul>
            <li>
              <span>Vânzarea unei clădiri:</span> La vânzarea unei clădiri sau
              apartament, legea impune ca proprietarul să prezinte certificatul
              energetic cumpărătorului. Acesta ajută cumpărătorii să înțeleagă
              eficiența energetică a imobilului și să ia decizii informate în
              ceea ce privește costurile de întreținere.
            </li>
            <li>
              <span>Închirierea unui imobil:</span> Certificatul energetic este
              obligatoriu și în cazul închirierii unui imobil. Proprietarul
              trebuie să-l furnizeze chiriașului pentru a-l informa asupra
              consumului de energie al clădirii și asupra costurilor aferente
              utilităților.
            </li>
            <li>
              <span>Renovarea clădirilor:</span> Dacă se fac lucrări de renovare
              sau modernizare a unei clădiri care vizează îmbunătățirea
              performanței energetice (cum ar fi izolarea termică, schimbarea
              feroneriilor sau modernizarea sistemelor de încălzire), va fi
              necesar să se obțină un nou certificat energetic care să reflecte
              îmbunătățirile aduse.
            </li>
            <li>
              <span>Construcția unui imobil nou:</span> Pentru clădirile noi, la
              finalizarea construcției și înainte de predarea acestora, este
              obligatoriu să se obțină un certificat energetic care să ateste
              performanța energetică a imobilului.
            </li>
            <li>
              <span>Evaluări periodice pentru clădirile publice:</span> Anumite
              clădiri publice sau de interes general trebuie să obțină
              certificatul energetic periodic, în conformitate cu reglementările
              naționale sau europene, pentru a demonstra că sunt eficiente din
              punct de vedere energetic și respectă normele de mediu.
            </li>
            <li>
              <span>Solicitarea de fonduri sau stimulente financiare:</span> În
              anumite cazuri, pentru a accesa fonduri guvernamentale sau
              stimulente financiare pentru renovări energetice, proprietarii pot
              fi obligați să obțină un certificat energetic care să dovedească
              nevoia de îmbunătățiri în ceea ce privește performanța energetică.
            </li>
          </ul>
          <p>
            Certificatul energetic este emis de un auditor energetic autorizat
            și are o valabilitate de 10 ani, dar acesta poate fi reînnoit în
            cazul unor modificări importante ale clădirii sau ale sistemelor
            sale energetice. De asemenea, certificatul include informații despre
            clasa energetică a clădirii (de la A, pentru cele mai eficiente,
            până la G, pentru cele mai puțin eficiente) și recomandări pentru
            îmbunătățirea performanței energetice.
          </p>
        </div>

        <div className={cx(styles.wrapper, "")}>
          <h3>Când se solicită certificatul de urbanism?</h3>
          <h4>
            Certificatul de urbanism este un document oficial emis de
            autoritățile locale (de obicei primăria), care oferă informații
            esențiale despre reglementările urbanistice aplicabile unui teren
            sau unei zone. Se solicită în diverse situații, în special atunci
            când urmează să se deruleze activități legate de construcții,
            modificări ale terenurilor sau alte proiecte de dezvoltare. Iată
            principalele momente când este necesar să se solicite certificatul
            de urbanism:
          </h4>
          <ul>
            <li>
              <span>Înainte de obținerea autorizației de construire:</span>{" "}
              Certificatul de urbanism este primul document necesar atunci când
              vrei să construiești o clădire nouă, să extinzi una existentă sau
              să faci modificări semnificative la o construcție. Acesta oferă
              informațiile necesare pentru a înțelege dacă proiectul respectă
              reglementările urbanistice locale și ce condiții trebuie
              îndeplinite înainte de a obține autorizația de construire.
            </li>
            <li>
              <span>
                În cazul schimbării destinației unui teren sau al unei clădiri:
              </span>
              Dacă vrei să schimbi destinația unui teren (de exemplu, din teren
              agricol în teren pentru construcții) sau a unei clădiri (de
              exemplu, din locuință în spațiu comercial), este necesar să obții
              un certificat de urbanism pentru a verifica dacă schimbarea este
              permisă conform planului urbanistic local.
            </li>
            <li>
              <span>
                Înainte de a iniția un proiect de împărțire a terenului:
              </span>{" "}
              Dacă intenționezi să împarți un teren în mai multe loturi (în
              scopul vânzării sau dezvoltării), certificatul de urbanism este
              necesar pentru a verifica reglementările referitoare la suprafața
              minimă a loturilor, accesul la drumuri publice și alte condiții.
            </li>
            <li>
              <span>
                În cazul proiectelor de restaurare, reabilitare sau demolare:
              </span>
              Atunci când vrei să efectuezi lucrări de reabilitare sau
              restaurare a unei clădiri existente sau să demolezi o construcție,
              certificatul de urbanism este necesar pentru a verifica dacă sunt
              respectate reglementările privind conservarea patrimoniului sau
              altele specifice zonei.
            </li>
            <li>
              <span>
                Înainte de dezvoltarea unor proiecte de infrastructură (drumuri,
                utilități etc.):
              </span>{" "}
              Certificatul de urbanism este necesar și în cazul proiectelor de
              infrastructură care implică lucrări de extindere a rețelelor de
              utilități, drumuri sau alte structuri publice.
            </li>
            <li>
              <span>În cazul obținerii unor autorizații speciale:</span> Dacă
              proiectul tău presupune activități care necesită autorizații
              speciale (de exemplu, activități care afectează mediul sau zone
              protejate), certificatul de urbanism va oferi informațiile
              relevante referitoare la reglementările suplimentare care trebuie
              respectate.
            </li>
          </ul>
          <p>
            Certificatul de urbanism nu reprezintă un drept de a construi sau
            modifica efectiv terenul sau construcția, ci doar un document
            informativ, care arată ce condiții legale și tehnice sunt aplicabile
            proiectului tău. De obicei, acesta are o valabilitate de 12 luni,
            iar în unele cazuri, poate fi necesar să fie actualizat dacă trece
            un timp mai îndelungat până când se începe proiectul.
          </p>
        </div>

        <div className={cx(styles.wrapper, "")}>
          <h3>Când am nevoie de relevee la o construcție sau un apartament?</h3>
          <h4>
            Releveele sunt necesare în mai multe situații pentru o construcție
            sau un apartament, printre care:
          </h4>
          <ul>
            <li>
              Întocmirea documentației cadastrale pentru prima înscriere sau
              actualizarea cadastrului în cazul unor modificări aduse
              imobilului.
            </li>
            <li>
              Obținerea autorizației de construire pentru extinderi, modificări
              interioare, recompartimentări sau consolidări.
            </li>
            <li>
              Lucrări de renovare sau reabilitare care necesită documentație
              tehnică exactă.
            </li>
            <li>
              Vânzare, partaj sau succesiune când este necesară o reprezentare
              clară a imobilului.
            </li>
            <li>
              Închirierea sau evaluarea imobilului, mai ales pentru spații
              comerciale sau clădiri istorice.
            </li>
          </ul>
          <p>
            Releveul oferă o imagine exactă a construcției, cu dimensiuni,
            compartimentări și alte detalii esențiale pentru orice intervenție
            asupra imobilului.
          </p>
        </div>

        <div className={cx(styles.wrapper, "")}>
          <h3>Când am nevoie de un plan de situație?</h3>
          <h4>
            Un plan de situație este necesar în mai multe situații, printre
            care:
          </h4>
          <ul>
            <li>
              <span>Obținerea autorizației de construire</span> - este un document
              obligatoriu pentru orice construcție nouă, extindere, modificare
              sau demolare.
            </li>
            <li>
              <span>Actualizarea documentației cadastrale</span> - pentru înscrierea în
              cartea funciară a unei construcții noi sau a modificărilor aduse
              unui imobil.
            </li>
            <li>
              <span>Împărțirea sau alipirea terenurilor</span> - în cazul dezmembrărilor,
              lotizărilor sau unificărilor de parcele.
            </li>
            <li>
              <span>Reabilitarea infrastructurii</span> - pentru proiecte de modernizare a
              drumurilor, rețelelor de utilități sau spațiilor publice.
            </li>
            <li>
              <span>Stabilirea limitelor proprietății</span> - atunci când există litigii sau
              incertitudini privind granițele unui teren.
            </li>
          </ul>
          <p>
            Planul de situație oferă o reprezentare clară a imobilului și a
            împrejurimilor, fiind esențial în procesele administrative și
            tehnice.
          </p>
        </div>

        <div className={cx(styles.wrapper, "")}>
          <h3>
            Când sunt necesare trasări ale axelor construcțiilor sau a limitelor
            terenurilor?
          </h3>
          <h4>
            Trasările axelor construcțiilor și limitelor terenurilor sunt
            necesare în mai multe situații esențiale, printre care:
          </h4>
          <ul>
            <li>
              <span>Începerea unei construcții</span> - pentru a poziționa corect fundația și
              structura conform proiectului aprobat.
            </li>
            <li>
              <span>Delimitarea precisă a unui teren</span> - în cazul lotizărilor,
              vânzărilor sau clarificării granițelor proprietății.
            </li>
            <li>
              <span>Lucrări de infrastructură</span> - pentru drumuri, rețele de utilități,
              poduri sau alte construcții civile.
            </li>
            <li>
              <span>Reabilitări sau extinderi</span> - pentru construcții existente care
              necesită modificări structurale.
            </li>
            <li>
              <span>Prevenirea litigiilor</span> - pentru a evita suprapunerile sau
              conflictele privind limitele de proprietate.
            </li>
          </ul>
          <p>
            Aceste trasări asigură respectarea exactă a proiectului și evitarea
            erorilor costisitoare în execuția lucrărilor.
          </p>
        </div>

        <div className={cx(styles.wrapper, "")}>
          <h3>Când am nevoie de măsurători 3D la construcții?</h3>
          <h4>
            Măsurătorile 3D la construcții sunt necesare în mai multe situații
            esențiale, printre care:
          </h4>
          <ul>
            <li>
              <span>Reabilitarea fațadelor</span> - pentru a obține un model precis al
              clădirii înainte de renovare.
            </li>
            <li>
              <span>Expertize tehnice și consolidări</span> - pentru evaluarea stării
              structurale și identificarea eventualelor probleme.
            </li>
            <li>
              <span>Monitorizarea deformărilor</span> - în cazul clădirilor vechi sau
              afectate de factori externi (cutremure, tasări).
            </li>
            <li>
              <span>Scanarea pentru proiectare BIM</span> - pentru realizarea unui model
              digital detaliat al construcției.
            </li>
            <li>
              <span>Documentarea patrimoniului</span> - în cazul clădirilor istorice ce
              necesită restaurare.
            </li>
            <li>
              <span>As-built surveys</span> - pentru verificarea conformității lucrărilor
              finalizate față de proiectul inițial.
            </li>
          </ul>
          <p>
            Aceste măsurători asigură precizie ridicată, reduc erorile și
            facilitează gestionarea eficientă a proiectelor.
          </p>
        </div>

        <div className={cx(styles.wrapper, "")}>
          <h3>Când este necesar crearea unui model 3D al terenului?</h3>
          <h4>
            Crearea modelelor 3D ale terenurilor este necesară în diverse
            situații, printre care:
          </h4>
          <ul>
            <li>
              <span>Monitorizarea alunecărilor de teren</span> - pentru analiza riscurilor și
              implementarea măsurilor de stabilizare.
            </li>
            <li>
              <span>Proiectarea infrastructurii</span> - în cazul construcției de drumuri,
              căi ferate, poduri sau rețele edilitare.
            </li>
            <li>
              <span>Lucrări de excavare și terasamente</span> - pentru calculul volumelor de
              pământ necesare excavațiilor sau umpluturilor.
            </li>
            <li>
              <span>Amenajări peisagistice și urbanism</span> - pentru proiectarea spațiilor
              verzi, parcurilor și dezvoltărilor imobiliare.
            </li>
            <li>
              <span>Monitorizarea carierelor și exploatărilor miniere</span> - pentru
              gestionarea eficientă a resurselor și evaluarea impactului asupra
              mediului.
            </li>
          </ul>
        </div>

        <div className={cx(styles.wrapper, "")}>
          <h3>Când este necesar crearea unui plan cu curbe de nivel?</h3>
          <h4>
            Crearea curbelor de nivel este necesară în mai multe domenii, în
            special în geografie, inginerie și planificare urbană. Iată câteva
            situații comune în care se folosesc:
          </h4>
          <ul>
            <li>
              <span>Studiul terenurilor:</span> Curbele de nivel sunt folosite pentru a
              reprezenta pantele și forma terenului într-o zonă dată, fiind
              esențiale în crearea hărților topografice. Acestea ajută la
              înțelegerea reliefului și a schimbărilor de altitudine pe o zonă
              geografică.
            </li>
            <li>
              <span>Proiecte de construcții:</span> În construirea drumurilor, clădirilor sau
              infrastructurii, curbele de nivel sunt utilizate pentru a analiza
              pantele și pentru a planifica în mod corect sistemele de drenaj și
              canalizare, prevenind inundațiile și asigurând stabilitatea
              construcțiilor.
            </li>
            <li>
              <span>Studiile hidrologice:</span> Curbele de nivel sunt folosite pentru a
              evalua fluxul de apă pe o zonă de teren, pentru a anticipa
              drenajul și posibilele zone de inundație, fiind utile în
              gestionarea resurselor de apă și în prevenirea dezastrelor
              naturale.
            </li>
            <li>
              <span>Agricultură și gestionarea solurilor:</span> Acestea sunt folosite pentru
              a înțelege terenurile agricole și pentru a ajuta la gestionarea
              eficientă a apei și a terenurilor în scopuri agricole, prevenind
              eroziunea solului.
            </li>
            <li>
              <span>Geologie:</span> În studii geologice, curbele de nivel sunt utilizate
              pentru a reprezenta structuri geologice și pentru a analiza
              procesele naturale, cum ar fi erupțiile vulcanice sau mișcările
              tectonice.
            </li>
            <li>
              <span>Turism și recreere:</span> În hărțile de drumeție sau peisaj, curbele de
              nivel ajută la înțelegerea dificultății traseelor și la
              planificarea excursiilor în teren accidentat.
            </li>
          </ul>
          <p>
            Crearea curbelor de nivel ajută în majoritatea cazurilor la analiza
            și înțelegerea terenului, facilitând luarea unor decizii corecte în
            diverse proiecte de infrastructură și dezvoltare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intrebari;
