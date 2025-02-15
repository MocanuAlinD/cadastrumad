import React from "react";
import ServiciiCard from "@/components/ServiciiCard";
import { listaServicii } from "@/lib/listaServicii";

const Servicii = () => {
  return (
    <div className="w-full mb-12 relative gap-12">
      <div className="flex justify-center py-8 m-auto mx-auto max-w-[90%] md:max-w-[40rem] text-sm sm:text-xl border-b border-slate-400">
        &emsp;&emsp;Pe lângă serviciile de cadastru și intabulare, ne recomandă
        o vastă experiență în lucrările de șantier, unde atenția la detalii și
        precizia sunt esențiale. Vă invităm să descoperiți mai jos tipurile de
        lucrări pentru care ne puteți contacta și să colaborăm cu încredere!
      </div>

      {listaServicii.map((item, index) => (
        <ServiciiCard key={index} src={item.src} text={item.text} />
      ))}
    </div>
  );
};

export default Servicii;
