import React from "react";
import Image from "next/image";
import styles from "./underConstruction.module.css";

const UnderConstruction = () => {
  return (
    <div className={styles.container + " w-fit mx-auto relative h-full py-8"}>
      <Image
        src="/underConstruction.jpeg"
        width="1000"
        height="1000"
        alt="image"
        className={styles.image}
      />
      <h4 className="absolute top-1/2 -translate-y-1/2 left-0 my-auto w-full py-8">
        Mai avem de lucru la aceasta pagină <br />
        Ne vedem curând !
      </h4>
    </div>
  );
};

export default UnderConstruction;
