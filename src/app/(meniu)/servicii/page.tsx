import React from "react";
import ServiciiCard from "@/components/ServiciiCard";

const Servicii = () => {
  return (
    <div className="w-full mb-12 relative gap-12">
      <div className="flex justify-center py-8 m-auto mx-auto max-w-[90%] md:max-w-[40rem] text-sm sm:text-xl border-b border-slate-400">
        &emsp;&emsp;Pe lângă serviciile de cadastru și intabulare, ne recomandă
        o vastă experiență în lucrările de șantier, unde atenția la detalii și
        precizia sunt esențiale. Vă invităm să descoperiți mai jos tipurile de
        lucrări pentru care ne puteți contacta și să colaborăm cu încredere!
      </div>


      <ServiciiCard
        src="/cad/dispensar640zoom.png"
        text="Cadastru și intabulare garsoniere, apartamente, case, terenuri."
      />
      <ServiciiCard
        src="/cad/ciobanu1080.png"
        text="Ridicări topografice la drumuri."
      />
      <ServiciiCard
        src="/cad/bloc01.png"
        text="Măsurători 3D la clădiri pentru reabilitarea fațadelor, consolidarea structurii, eficientizarea energetică și restaurarea monumentelor istorice."
      />
      <ServiciiCard
        src="/cad/canal640.png"
        text="Măsurători și modele 3D ale terenurilor."
      />
      <ServiciiCard src="/cad/curbe1080.png" text="Curbe de nivel." />
      {/* <ServiciiCard src="/cad/cvartal640.png" text="Ridicări topografice de detaliu." /> */}
      {/* <ServiciiCard src="/cad/giratoriu640.png" text="Măsurătorile la intersecțiile rutiere sunt esențiale pentru fluidizarea traficului, proiectarea sensurilor giratorii, instalarea semafoarelor, optimizarea semnalizării, extinderea sau reconfigurarea benzilor și asigurarea siguranței pietonale. Aceste date contribuie la planificarea și îmbunătățirea infrastructurii urbane!" /> */}
      {/* <ServiciiCard src="/cad/klass01.png" text="klass01" /> */}
      {/* <ServiciiCard src="/cad/klass02.png" text="klass02" /> */}
      {/* <ServiciiCard src="/cad/magistrala640.png" text="magistrala1080" /> */}
      <ServiciiCard
        src="/cad/parc640.png"
        text="Ridicări topografice de detaliu."
      />
      <ServiciiCard
        src="/cad/pod3D.png"
        text="Măsurători 3D ale interioarelor pentru proiectare și optimizare, design interior, renovări și restaurări, recompartimentări, verificarea spațiilor pentru mobilier personalizat, crearea tururilor virtuale și documentarea exactă a construcțiilor pentru arhivare sau lucrări tehnice."
      />
      <ServiciiCard
        src="/cad/profil1080.png"
        text="Crearea profilelor în urma ridicărilor topografice."
      />
      <ServiciiCard
        src="/cad/scoala640.png"
        text="Măsurători pentru planurile de situație."
      />
      {/* <ServiciiCard src="/cad/scoalahasura1080.png" text="scoalahasura1080" /> */}
    </div>
  );
};

export default Servicii;
