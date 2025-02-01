// import Image from "next/image";
// import profilePic from "../../public/bgmain.jpeg";
import Card from "@/components/Card";
import styles from "./mainpage.module.css";

export default function Home() {
  const cadastruContent =
    "Cadastrul este necesar pentru identificarea și evidența proprietăților, stabilirea limitelor, vânzarea, cumpărarea sau ipotecarea imobilelor. Este esențial pentru obținerea autorizațiilor de construcție, accesarea creditelor și dezvoltarea infrastructurii, asigurând siguranță juridică proprietarilor.";

  const intarusareContent = "Intărușarea terenurilor este necesară pentru stabilirea exactă a limitelor unei proprietăți, evitarea disputelor cu vecinii și respectarea planurilor de construcție. Asigură o delimitare precisă a terenului, fiind esențială în cadastru, urbanism și tranzacții imobiliare.";

  const planSituatieContent =
    "Planul de situație în topografie este necesar pentru reprezentarea detaliată a terenului, construcțiilor și elementelor naturale, fiind esențial în proiectare, urbanism și cadastru. Asigură precizie în execuția lucrărilor și respectarea limitelor proprietății.";

  const dezContent =
    "Dezmembrarea și alipirea în cadastru sunt necesare pentru modificarea suprafeței terenurilor, fie prin împărțirea unei proprietăți în loturi mai mici, fie prin unirea mai multor loturi într-unul singur. Aceste operațiuni sunt esențiale în vânzări, moșteniri sau dezvoltări imobiliare.";

  const profileContent =
    "Profilele și curbele de nivel în topografie sunt necesare pentru reprezentarea reliefului unui teren, ajutând la proiectarea construcțiilor, drumurilor și rețelelor edilitare. Ele oferă informații precise despre diferențele de altitudine și pantele terenului, esențiale în planificare.";

  const model3DContent =
    "Măsurătorile 3D ale construcțiilor și terenurilor sunt utile pentru obținerea unor modele precise, necesare în proiectare, renovare, monitorizare și documentare. Acestea asigură detalii exacte despre forme, dimensiuni și deformări, fiind esențiale în construcții și cadastru.";
  return (
    <div className="w-full">
      <main className="min-h-full flex flex-col">
        <div className="card flex flex-col grow transform-3d">
          <div
            className={
              styles.imageContainer + " min-h-[10rem] sm:min-h-[20rem]"
            }
          >
            <div className={styles.text}>
              Servicii cadastru si intabulare Constanta
            </div>
          </div>
          <h4 className="underline underline-offset-4 text-center pt-4 text-sm sm:text-2xl">
            Vă stăm la dispoziție cu următoarele:
          </h4>
          <div className="flex flex-wrap justify-center py-8">
            <Card title="Cadastru" content={cadastruContent} />
            <Card title="Intărușare" content={intarusareContent} />
            <Card title="Plan de situație" content={planSituatieContent} />
            <Card title="Dezmembrare/alipire" content={dezContent} />
            <Card title="Profile/curbe de nivel" content={profileContent} />
            <Card title="Modele 3D" content={model3DContent} />
          </div>
          <a className="bg-slate-400 w-fit mx-auto my-4">
            Vezi toate serviciile
          </a>
        </div>
      </main>
    </div>
  );
}
