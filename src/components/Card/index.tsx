import React from "react";
import styles from "./card.module.css";

const Card = ({title="Title", content="Content"}: {title?: string, content?: string}) => {
  return (
    <div className={styles.cardContainer + ' min-h-[10rem] sm:min-h-[15rem] overflow-hidden'}>
      <h3>{title}</h3>
      <p>
        {content.length < 310 ? content : content.substring(0, 300) + " ....."}
      </p>
      {/* <a className="my-4 self-end rounded px-2 py-1">
        Citeste mai departe
      </a> */}
    </div>
  );
};

export default Card;
