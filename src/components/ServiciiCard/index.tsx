import Image from "next/image";
import React from "react";
import styles from "./servicii.module.css";

const ServiciiCard = ({ src, text }: { src?: string; text?: string }) => {
  return (
    <div
      className={
        styles.container +
        " w-[90%] mx-auto mt-8 flex flex-col-reverse md:flex-row"
      }
    >
      <div className="w-[100%] mx-auto md:w-[65%] relative my-auto border-r border-b border-r-[#ffffff33] border-b-[#ffffff00] rounded-xl p-2">
        <Image
          src={src ? src : "/global.svg"}
          alt={text ? text : "Image"}
          width={1920}
          height={1080}
        />
      </div>
      <h4 className="w-full md:w-[35%] flex items-center text-xs md:text-base font-extralight md:font-normal pb-4 md:pb-0 md:ps-4">&emsp;{text ? text : "Text goes here"}</h4>
    </div>
  );
};

export default ServiciiCard;
