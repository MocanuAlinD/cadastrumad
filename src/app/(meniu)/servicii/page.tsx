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

      <ServiciiCard src="/cad/dispensar640zoom.png" text="Relevee" />
      <ServiciiCard src="/cad/axeCasa1080_01.png" text="Trasări axe construcții" />
      <ServiciiCard src="/cad/ciobanu1080.png" text="Ridicări topografice la drumuri." />
      <ServiciiCard src="/cad/bloc01.png" text="Măsurători 3D la clădiri" />
      <ServiciiCard src="/cad/bloc02.png" text="Măsurători 3D la clădiri" />
      <ServiciiCard src="/cad/klass01.png" text="Măsurători 3D la clădiri" />
      <ServiciiCard src="/cad/canal640.png" text="Modele 3D terenuri" />
      <ServiciiCard src="/cad/curbe1080.png" text="Curbe de nivel" />
      <ServiciiCard src="/cad/parc640.png" text="Ridicări topografice de detaliu" />
      <ServiciiCard src="/cad/pod3D.png" text="Măsurători 3D interioare" />
      {/* <ServiciiCard src="/cad/profil1080.png" text="Crearea profilelor în urma ridicărilor topografice." /> */}
      <ServiciiCard src="/cad/profil640.png" text="Profile" />
      <ServiciiCard src="/cad/scoala640.png" text="Planuri de situație" />
    </div>
  );
};

export default Servicii;
