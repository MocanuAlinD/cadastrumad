import Image from "next/image";
import React from "react";
import styles from "./galerie.module.css";

const ImageGalerie = ({ text,src }: {src?:string, text?: string }) => {
  return (
    <div className={styles.container}>
      <h4 className="w-full text-center text-xs md:text-sm font-light md:font-normal py-2 min-h-[3rem] text-[var(--primaryColor)]">
        &emsp;{text ? text : "Text goes here"}
      </h4>
      <div className={styles.imageContainer + " min-h-[12rem] md:h-[30rem]"}>
        <Image
          src={src ? src : "/globe.svg"}
          sizes="(max-width: 768px) 50vw"
          alt="Image"
          layout="fill"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ImageGalerie;
