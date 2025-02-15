"use client";
import React, { useState, useEffect, useCallback } from "react";
import { cardsContents } from "@/lib/cardsContents";
import styles from "./menu3d.module.css";

const Menu3Dimage = ({
  inclineAngle,
  rotationSpeed,
}: {
  inclineAngle?: number;
  rotationSpeed?: number;
}) => {
  const [pageWidth, setPageWidth] = useState(20);

  const getParentWidth = useCallback(() => {
    const parentWidth: number | undefined =
      document.getElementById("topContainer")?.offsetWidth;
    // const finalWidth = (parentWidth ?? 0) > 1080 ? 54 : (parentWidth ?? 0) / 20;
    const finalWidth = (parentWidth ?? 0) > 768 ? 54 : (parentWidth ?? 0) / 10;
    // const finalWidth = (parentWidth ?? 0) > 1080 ? 54 : 30;
    // const finalWidth = 30
    // console.log(finalWidth);
    setPageWidth(finalWidth)
    return finalWidth;
  }, []);

  useEffect(() => {
    // setPageWidth(getParentWidth());
    getParentWidth()
    window.addEventListener("resize", () => {
      setPageWidth(() => getParentWidth());
    });
    return () => {};
  }, [pageWidth, getParentWidth]);

  const _obj =
    cardsContents.length > 3
      ? cardsContents
      : [
          {
            title: "Cadastru",
            content:
              "Cadastrul este necesar pentru identificarea și evidența proprietăților, stabilirea limitelor, vânzarea, cumpărarea sau ipotecarea imobilelor. Este esențial pentru obținerea autorizațiilor de construcție, accesarea creditelor și dezvoltarea infrastructurii, asigurând siguranță juridică proprietarilor.",
          },
          {
            title: "Dezmembrare/alipire",
            content:
              "Dezmembrarea și alipirea în cadastru sunt necesare pentru modificarea suprafeței terenurilor, fie prin împărțirea unei proprietăți în loturi mai mici, fie prin unirea mai multor loturi într-unul singur. Aceste operațiuni sunt esențiale în vânzări, moșteniri sau dezvoltări imobiliare.",
          },
          {
            title: "Intărușare",
            content:
              "Intărușarea terenurilor este necesară pentru stabilirea exactă a limitelor unei proprietăți, evitarea disputelor cu vecinii și respectarea planurilor de construcție. Asigură o delimitare precisă a terenului, fiind esențială în cadastru, urbanism și tranzacții imobiliare.",
          },
          {
            title: "Plan de situație",
            content:
              "Planul de situație în cadastru este necesar pentru obținerea autorizațiilor de construire, actualizarea documentațiilor cadastrale, întocmirea proiectelor de urbanism, stabilirea limitelor proprietății și realizarea tranzacțiilor imobiliare. Acesta oferă o reprezentare exactă a terenului și construcțiilor existente.",
          },
          {
            title: "Măsurători/trasări șantier",
            content:
              "Trasările și măsurătorile de șantier sunt esențiale pentru asigurarea construcției conform proiectului. Acestea sunt necesare pentru alinierea exactă a fundațiilor, pereților, drumurilor și altor structuri, prevenind erorile costisitoare și asigurând o execuție precisă și eficientă a lucrărilor.",
          },
          {
            title: "Profile/curbe de nivel",
            content:
              "Profilele și curbele de nivel în topografie sunt necesare pentru reprezentarea reliefului unui teren, ajutând la proiectarea construcțiilor, drumurilor și rețelelor edilitare. Ele oferă informații precise despre diferențele de altitudine și pantele terenului, esențiale în planificare.",
          },
          {
            title: "3D",
            content:
              "Măsurătorile 3D ale construcțiilor și terenurilor sunt utile pentru obținerea unor modele precise, necesare în proiectare, renovare, monitorizare și documentare. Acestea asigură detalii exacte despre forme, dimensiuni și deformări, fiind esențiale în construcții și cadastru.",
          },
        ];

  const objectLength = _obj.length;
  const _inclineAngle = inclineAngle ? inclineAngle + "deg" : "-3.5deg";
  const _rotationSpeed = rotationSpeed ? rotationSpeed + "s" : "100s";
  const rotateAngle = +(360 / objectLength).toFixed(2);
  const imageWidth = +(pageWidth / 0.965 * Math.sin(Math.PI / objectLength)).toFixed(2);
  const translateZ = +((pageWidth / 2) * Math.cos(Math.PI / objectLength) ).toFixed(2);

  return (
    <div
      id="topContainer"
      className={styles.topContainer}
      style={
        {
          "--inclineAngle": _inclineAngle,
          "--objLen": objectLength,
          "--rotationSpeed": _rotationSpeed,
          "--pageWidth": pageWidth,
          "--translateZ": translateZ,
          "--imageWidth": imageWidth + "rem",
        } as React.CSSProperties
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.imagesContainer}>
          {_obj.map((i, index) => {
            return (
              <div
                key={index}
                className={styles.singleImageContainer}
                style={
                  {
                    "--i": rotateAngle * index + "deg",
                  } as React.CSSProperties
                }
              >
                <div key={index} className={styles.cardContainer}>
                  <h3 className={styles.title}>{i.title}</h3>
                  <p className={styles.content}>{i.content}</p>
                </div>

                <div className={styles.imageBackground}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu3Dimage;
