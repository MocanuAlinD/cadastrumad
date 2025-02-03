import React from "react";
import ServiciiCard from "@/components/ServiciiCard";

const Servicii = () => {
  return (
    <div className="w-full">

    <div className='flex justify-center py-8 m-auto mx-auto max-w-[90%] sm:max-w-[40rem] text-sm sm:text-xl border-b border-slate-400'>&emsp;&emsp;Pe lângă serviciile de cadastru și intabulare, ne recomandă o vastă experiență în lucrările de șantier, unde atenția la detalii și precizia sunt esențiale. Vă invităm să descoperiți mai jos tipurile de lucrări pentru care ne puteți contacta și să colaborăm cu încredere!</div>

      <ServiciiCard
        src="/cad03/dispensar640zoom.png"
        text="Cadastrul și intabularea sunt necesare pentru a dovedi dreptul de proprietate asupra unei garsoniere sau unui apartament. Acestea sunt obligatorii pentru vânzare, ipotecare sau succesiune, asigurând recunoașterea legală a imobilului și protejându-te de eventuale litigii."
      />
      <ServiciiCard
        src="/cad03/ciobanu1080.png"
        text="Măsurătorile la drumuri în sate sau comune sunt esențiale pentru proiecte de infrastructură precum reabilitarea rețelelor electrice sau modernizarea drumurilor. Acestea se efectuează înaintea lucrărilor pentru a asigura precizia execuției și o planificare corectă, evitând erori și optimizând resursele."
      />
      <ServiciiCard
        src="/cad03/bloc01.png"
        text="Măsurătorile 3D la clădiri sunt necesare pentru reabilitarea fațadelor, consolidarea structurii, eficientizarea energetică și restaurarea monumentelor istorice. Acestea oferă o imagine detaliată și precisă a construcției, esențială pentru proiectare, execuție și evitarea erorilor în lucrările de renovare."
      />
      <ServiciiCard
        src="/cad03/canal640.png"
        text="Măsurătorile și modelele 3D ale terenurilor și taluzelor sunt necesare pentru prevenirea alunecărilor de teren, proiectarea infrastructurii rutiere, optimizarea excavațiilor și lucrările de consolidare. Acestea oferă date precise pentru analiza stabilității solului și siguranța construcțiilor din zonă."
      />
      <ServiciiCard
        src="/cad03/curbe1080.png"
        text="Curbele de nivel sunt esențiale în proiectarea construcțiilor, sistemelor de irigații, drumurilor și în prevenirea eroziunii solului. Acestea sunt necesare pentru a înțelege relieful terenului, asigurând o planificare corectă și o execuție eficientă a lucrărilor."
      />
      <ServiciiCard
        src="/cad03/cvartal640.png"
        text="Măsurătorile urbane sunt necesare pentru actualizarea planurilor cadastrale, proiectarea și reabilitarea infrastructurii, modernizarea rețelelor de utilități, amenajarea spațiilor verzi, gestionarea traficului și documentarea detaliată a zonelor pentru proiecte de dezvoltare urbană sau întreținere."
      />
      <ServiciiCard
        src="/cad03/giratoriu640.png"
        text="Măsurătorile la intersecțiile rutiere sunt esențiale pentru fluidizarea traficului, proiectarea sensurilor giratorii, instalarea semafoarelor, optimizarea semnalizării, extinderea sau reconfigurarea benzilor și asigurarea siguranței pietonale. Aceste date contribuie la planificarea și îmbunătățirea infrastructurii urbane!"
      />
      {/* <ServiciiCard src="/cad03/klass01.png" text="klass01" /> */}
      {/* <ServiciiCard src="/cad03/klass02.png" text="klass02" /> */}
      {/* <ServiciiCard src="/cad03/magistrala640.png" text="magistrala1080" /> */}
      <ServiciiCard src="/cad03/parc640.png" text="Măsurătorile în parcuri sunt necesare pentru amenajarea aleilor, spațiilor verzi și locurilor de joacă, instalarea mobilierului urban, iluminatului și sistemelor de irigații, reabilitarea zonelor degradate, delimitarea terenurilor și actualizarea hărților. Acestea asigură o dezvoltare armonioasă și funcțională a spațiilor publice!" />
      <ServiciiCard
        src="/cad03/pod3D.png"
        text="Măsurătorile 3D ale interioarelor sunt esențiale pentru proiectare și optimizare. Acestea sunt necesare în designul interior, renovări și restaurări, recompartimentări, verificarea spațiilor pentru mobilier personalizat, crearea tururilor virtuale și documentarea exactă a construcțiilor pentru arhivare sau lucrări tehnice."
      />
      <ServiciiCard
        src="/cad03/profil1080.png"
        text="Măsurătorile pentru crearea profilelor terenurilor și structurilor sunt esențiale pentru proiectare și execuție. Acestea sunt necesare pentru reabilitarea căilor ferate, modernizarea drumurilor, amenajarea rigolelor pentru scurgerea apei, stabilizarea versanților, extinderea rețelelor de utilități și modelarea terenului pentru construcții."
      />
      <ServiciiCard src="/cad03/scoala640.png" text="Măsurătorile pentru planurile de situație la clădiri și imobile sunt esențiale pentru diverse lucrări, asigurând precizie și conformitate cu normele. Acestea sunt necesare pentru obținerea autorizației de construire, intabulare, extinderea sau modificarea construcțiilor, vânzarea unui imobil sau stabilirea exactă a limitelor proprietății." />
      {/* <ServiciiCard src="/cad03/scoalahasura1080.png" text="scoalahasura1080" /> */}
    </div>
  );
};

export default Servicii;
