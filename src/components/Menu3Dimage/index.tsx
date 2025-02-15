"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./menu3dimage.module.css";
import { pozeLucrari } from "@/lib/poze";

const Menu3D = ({
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
    const finalWidth = (parentWidth ?? 0) > 1080 ? 54 : (parentWidth ?? 0) / 20;
    return finalWidth;
  }, []);

  useEffect(() => {
    setPageWidth(getParentWidth());
    window.addEventListener("resize", () => {
      setPageWidth(() => getParentWidth());
    });
    return () => {};
  }, [pageWidth, getParentWidth]);

  const _obj =
    pozeLucrari.length > 3
      ? pozeLucrari
      : [
          {
            src: "/globe.svg"
          },
          {
            src: "/globe.svg",
          },
          {
            src: "/globe.svg",
          },
          {
            src: "/globe.svg",
          },
          {
            src: "/globe.svg",
          },
          {
            src: "/globe.svg",
          },
          {
            src: "/globe.svg",
          },
          {
            src: "/globe.svg",
          },
          {
            src: "/globe.svg",
          },
          {
            src: "/globe.svg",
          },
          {
            src: "/globe.svg",
          },
          {
            src: "/globe.svg",
          },
        ];

  const ln = _obj.length;
  const _inclineAngle = inclineAngle ? inclineAngle + "deg" : "-5deg";
  const _rotationSpeed = rotationSpeed ? rotationSpeed + "s" : "100s";
  const rotateAngle = +(360 / ln).toFixed(2);
  const imageWidth = +(pageWidth * Math.sin(Math.PI / ln)).toFixed(2);
  const translateZ = +((pageWidth / 2) * Math.cos(Math.PI / ln)).toFixed(2);

  return (
    <div
      id="topContainer"
      className={styles.topContainer}
      style={
        {
          "--inclineAngle": _inclineAngle,
          "--objLen": ln,
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
                <Image
                  src={i.src}
                  width="300"
                  height="200"
                  className={styles.image}
                  alt="image"
                />
                <div className={styles.imageBackground}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu3D;
