import React from "react";
import styles from "./preturi.module.css";

const Preturi = () => {
  return (
    <div className={styles.topContainer + " mx-auto"}>
      <div className={styles.tableContainer}>
        <table className={styles.table + " table-auto my-8 mb-16"}>
          <tbody>
            <tr>
              <td className={ styles.important + " text-center font-bold text-lg sm:text-2xl"}>DE RETINUT !!!</td>
            </tr>
            <tr>
              <td colSpan={3} className={styles.notaSubsol + " px-2 leading-6 sm:leading-8"}>
                - Beneficiați de consultanță gratuită pentru toate tipurile de
                lucrări.
                <br />
                - Tarifele NU INCLUD taxele OCPI (unde se aplică taxe).
                <br />
                - Tarifele sunt informative și diferă în funcție de acte și
                complexitate.
                <br />- Tarifele afișate reprezintă valorile minimale și pot
                varia în funcție de specificul și complexitatea fiecărei
                lucrări. O estimare corectă va fi calculată după analiza tuturor
                detaliilor necesare pentru realizarea proiectului.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table + " table-auto"}>
          <thead>
            <tr>
              <th>Apartamente</th>
              <th>Tarif regim normal</th>
              <th>Tarif regim urgență</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cadastru garsoniera/apartament 2 camere</td>
              <td>650 lei</td>
              <td>750 lei</td>
            </tr>
            <tr>
              <td>Cadastru apartament 3-4 camere</td>
              <td>800 lei</td>
              <td>950 lei</td>
            </tr>
            <tr>
              <td>Apartamentare</td>
              <td>300 lei/UI</td>
              <td>400 lei/UI</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table + " table-auto"}>
          <thead>
            <tr>
              <th>Terenuri (cu/fără construcții)</th>
              <th>Tarif regim normal</th>
              <th>Tarif regim urgență</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cadastru teren</td>
              <td>1500 lei</td>
              <td>1700 lei</td>
            </tr>
            <tr>
              <td>Cadastru teren + casă</td>
              <td>1600 lei+3 lei/mp releveu</td>
              <td>1800 lei+3 lei/mp releveu</td>
            </tr>
            <tr>
              <td>Înscriere construcție nouă</td>
              <td>1000 lei + 3 lei/mp(optional)</td>
              <td>1200 lei + 3 lei/mp(optional)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table + " table-auto"}>
          <thead>
            <tr>
              <th>Dezmembrare/alipire</th>
              <th>Tarif regim normal</th>
              <th>Tarif regim urgență</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dezmembrare</td>
              <td>550 lei/lot</td>
              <td>650 lei/lot</td>
            </tr>
            <tr>
              <td>Apartamentare</td>
              <td>400 lei/UI</td>
              <td>500 lei/UI</td>
            </tr>
            <tr>
              <td>Alipire(comasare)</td>
              <td>300 lei/lot</td>
              <td>400 lei/lot</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table + " table-auto"}>
          <thead>
            <tr>
              <th>Rectificare/actualizare</th>
              <th>Tarif regim normal</th>
              <th>Tarif regim urgență</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Rectificare (modificarea limitei de proprietate sau a suprafeței
                terenului){" "}
              </td>
              <td>1000 lei</td>
              <td>1200 lei</td>
            </tr>
            <tr>
              <td>Actualizare informații tehnice</td>
              <td>1000 lei</td>
              <td>1200 lei</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table + " table-auto"}>
          <thead>
            <tr>
              <th>Consultare/informare</th>
              <th>Tarif regim normal</th>
              <th>Tarif regim urgență</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Extras de carte funciară pentru informare</td>
              <td>150 lei</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                Obținere copii documente pierdute (cadastru, încheiere de
                intabulare)
              </td>
              <td>150 lei</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table + " table-auto"}>
          <thead>
            <tr>
              <th>Topografie</th>
              <th>Tarif regim normal</th>
              <th>Tarif regim urgență</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plan situație/topografic</td>
              <td>600 lei</td>
              <td>750 lei</td>
            </tr>
            <tr>
              <td>Ridicare topografică</td>
              <td>600 lei</td>
              <td>750 lei</td>
            </tr>
            <tr>
              <td>Înțărușare teren intravilan</td>
              <td>400 lei</td>
              <td>600 lei</td>
            </tr>
            <tr>
              <td>Înțărușare teren extravilan</td>
              <td>450 lei</td>
              <td>650 lei</td>
            </tr>
            <tr>
              <td>Trasări axe construcții</td>
              <td>450 lei</td>
              <td>600 lei</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Preturi;
