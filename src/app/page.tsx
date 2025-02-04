// import Image from "next/image";
// import profilePic from "../../public/bgmain.jpeg";
import Card from "@/components/Card";
import cx from "clsx";
import styles from "./mainpage.module.css";

export default function Home() {
  const cadastruContent =
    "Cadastrul este necesar pentru identificarea și evidența proprietăților, stabilirea limitelor, vânzarea, cumpărarea sau ipotecarea imobilelor. Este esențial pentru obținerea autorizațiilor de construcție, accesarea creditelor și dezvoltarea infrastructurii, asigurând siguranță juridică proprietarilor.";

  const intarusareContent =
    "Intărușarea terenurilor este necesară pentru stabilirea exactă a limitelor unei proprietăți, evitarea disputelor cu vecinii și respectarea planurilor de construcție. Asigură o delimitare precisă a terenului, fiind esențială în cadastru, urbanism și tranzacții imobiliare.";

  const planSituatieContent =
    "Planul de situație în cadastru este necesar pentru obținerea autorizațiilor de construire, actualizarea documentațiilor cadastrale, întocmirea proiectelor de urbanism, stabilirea limitelor proprietății și realizarea tranzacțiilor imobiliare. Acesta oferă o reprezentare exactă a terenului și construcțiilor existente.";

  const dezContent =
    "Dezmembrarea și alipirea în cadastru sunt necesare pentru modificarea suprafeței terenurilor, fie prin împărțirea unei proprietăți în loturi mai mici, fie prin unirea mai multor loturi într-unul singur. Aceste operațiuni sunt esențiale în vânzări, moșteniri sau dezvoltări imobiliare.";

  const profileContent =
    "Profilele și curbele de nivel în topografie sunt necesare pentru reprezentarea reliefului unui teren, ajutând la proiectarea construcțiilor, drumurilor și rețelelor edilitare. Ele oferă informații precise despre diferențele de altitudine și pantele terenului, esențiale în planificare.";

  const model3DContent =
    "Măsurătorile 3D ale construcțiilor și terenurilor sunt utile pentru obținerea unor modele precise, necesare în proiectare, renovare, monitorizare și documentare. Acestea asigură detalii exacte despre forme, dimensiuni și deformări, fiind esențiale în construcții și cadastru.";

  const santierContent =
    "Trasările și măsurătorile de șantier sunt esențiale pentru asigurarea construcției conform proiectului. Acestea sunt necesare pentru alinierea exactă a fundațiilor, pereților, drumurilor și altor structuri, prevenind erorile costisitoare și asigurând o execuție precisă și eficientă a lucrărilor.";
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
            <h3 className="text-lg md:text-5xl font-extrabold text-center">
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

          <section>
            <h4
              className={cx(
                styles.cardsTitle,
                "underline underline-offset-4 text-center text-md sm:text-2xl mb-8 mt-12"
              )}
            >
              Vă stăm la dispoziție cu următoarele:
            </h4>
            <div className="flex flex-wrap justify-center pb-12">
              <Card title="Cadastru" content={cadastruContent} />
              <Card title="Dezmembrare/alipire" content={dezContent} />
              <Card title="Intărușare" content={intarusareContent} />
              <Card title="Plan de situație" content={planSituatieContent} />
              <Card
                title="Măsurători/trasări șantier"
                content={santierContent}
              />
              <Card title="Profile/curbe de nivel" content={profileContent} />
              <Card title="3D" content={model3DContent} />
            </div>
          </section>

          <section>
            <div
              className={
                styles.info +
                " flex flex-col items-center justify-evenly gap-4 py-12 md:min-h-[40rem]"
              }
            >
              <h3 className="text-lg md:text-5xl font-extrabold text-center">
                CONSULTANȚĂ GRATUITĂ
              </h3>
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
