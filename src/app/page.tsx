import Card from "@/components/Card";
import cx from "clsx";
import { cardsContents } from "@/lib/cardsContents";
import styles from "./mainpage.module.css";

export default function Home() {
  const h3Style = "text-lg md:text-5xl font-extrabold text-center text-[var(--primaryColor)]";
  const h3StyleDark = "text-lg md:text-5xl font-extrabold text-center text-[var(--secondaryColor)]";

  return (
    <div className="w-full">
      <main className="min-h-full flex flex-col">
        <div className="flex flex-col grow transform-3d">
          <section
            className={
              styles.imageContainer + " min-h-[10rem] sm:min-h-[20rem]"
            }
          >
            <div className={styles.text}>
              Servicii cadastru și intabulare Constanța
            </div>
          </section>

          <section
            className={
              styles.info +
              " flex flex-col items-center justify-evenly gap-4 py-12 md:min-h-[40rem]"
            }
          >
            <h3 className={h3StyleDark}>
              +2300 PROIECTE
              <br />
              +20 ANI EXPERIENȚĂ
            </h3>
            <p className=" max-w-[85%] md:max-w-[50%] leading-6 md:leading-8 text-sm md:text-xl font-normal">
              &emsp;&emsp; Cu o experiență de peste 20 de ani în domeniul
              cadastrului și topografiei și peste 2300 de proiecte finalizate cu
              succes, oferim servicii profesionale caracterizate prin
              seriozitate, promptitudine și atenție la detalii. Ne dedicăm
              fiecărui proiect, asigurând soluții precise și eficiente pentru
              nevoile dumneavoastră.
            </p>
          </section>

          <section className={styles.cardsSection}>
            {/* <h4
              className={cx(
                styles.cardsTitle,
                "text-center text-md sm:text-2xl mb-8 mt-12"
              )}
            >
              Vă stăm la dispoziție cu următoarele, și nu numai:
            </h4> */}
            <h3 className={cx(h3Style,"py-12")}>
              Îți suntem alături
            </h3>

            <div className="flex flex-wrap justify-center pb-12">
              {cardsContents.map((i, index) => (
                <Card key={index} title={i.title} content={i.content} />
              ))}
            </div>
          </section>

          <section>
            <div
              className={
                styles.info +
                " flex flex-col items-center justify-evenly gap-4 py-12 md:min-h-[40rem]"
              }
            >
              <h3 className={h3StyleDark}>CONSULTANȚĂ GRATUITĂ</h3>
              <p className=" max-w-[85%] md:max-w-[50%] leading-6 md:leading-8 text-sm md:text-xl font-normal">
                &emsp;&emsp;Beneficiezi de consultanță gratuită! Spune-ne cum te
                putem ajuta, iar noi îți oferim soluția potrivită. Pentru a
                economisi timp și drumuri inutile, ne poți trimite actele pe
                email sau WhatsApp. Le analizăm rapid, iar în cel mult 24 de ore
                îți oferim toate detaliile necesare: costuri, termene de
                execuție și orice mai este nevoie. După ce ai toate
                informațiile, stabilim împreună o dată convenabilă pentru
                începerea lucrării.
              </p>
              <p className="text-sm md:text-xl font-bold w-full text-center">
                &emsp;&emsp;Simplu, rapid și eficient!
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
