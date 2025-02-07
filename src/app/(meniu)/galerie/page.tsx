import React from "react";
import ImageGalerie from "@/components/ImageGalerie";
// import styles from "./galerie.module.css"
import { pozeLucrari } from "@/lib/poze";

const Galerie = () => {
  return (
    <div className="w-full flex flex-wrap justify-center">
      {pozeLucrari.map((i,index) => <ImageGalerie key={index} src={i.src} text={i.text} />)}
    </div>
  );
};

export default Galerie;
