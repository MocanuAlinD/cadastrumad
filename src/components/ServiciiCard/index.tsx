import Image from "next/image";
import React from "react";
import styles from "./serviciiCard.module.css";

const ServiciiCard = ({ src, text }: { src?: string; text?: string }) => {
  return (
    <div
      className={
        styles.container +
        " w-[90%] mx-auto mt-8 flex flex-col-reverse md:flex-row"
      }
    >
      <div className="w-[100%] mx-auto md:w-[80%] relative my-auto rounded-xl p-2 min-h-[12rem] md:min-h-[25rem]">
        <Image
          src={src ? src : "/global.svg"}
          alt={text ? text : "Image"}
          layout="fill"
          className={styles.image}
        />
      </div>
      <h4 className="w-full md:w-[35%] flex items-center text-xs md:text-base font-extralight md:font-normal pb-4 md:pb-0 md:ps-4 text-[var(--primaryColor)]">&emsp;{text ? text : "Text goes here"}</h4>
    </div>
  );
};

export default ServiciiCard;
