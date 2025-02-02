import React from "react";
import styles from "./card.module.css";

const Card = ({
  title = "Title",
  content = "Content",
}: {
  title?: string;
  content?: string;
}) => {
  return (
    // <div className={ styles.topContainer + " min-h-[10rem] sm:min-h-[20rem] sm:px-8 sm:my-4" } >
    <div className={ styles.topContainer + " min-h-[10rem] sm:min-h-[20rem] m-2 sm:m-6" } >
      <div className={styles.cardContainer + " min-h-[10rem] sm:min-h-[20rem]"}>
        <h3>{title}</h3>
        {/* <p> {content.length < 310 ? content : content.substring(0, 300) + " ....."} </p> */}
        <p>&emsp;&emsp;{content}</p>
      </div>
    </div>
  );
};

export default Card;
