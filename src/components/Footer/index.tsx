import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import styles from "./footer.module.css";

const Footer = () => {
  const footerColumn = `${styles.footerColumn} + " w-[100%] h-fit md:max-w-[30rem] my-[2rem] py-8 flex flex-col items-center lg:items-start`;

  return (
    <div
      className={
        styles.footerContainer + " flex flex-col items-center justify-around"
      }
    >
      <h2 className={styles.title + " my-12"}>
        CADASTRU & INTABULARE
        <br />
        CONSTANȚA
      </h2>
      <div className="w-full flex flex-col items-center lg:items-start lg:flex-row justify-around">
        <div className={footerColumn}>
          <h3>Contact</h3>
          <div>
            <span>Telefon</span>
            &emsp;
            <a href="tel:0754765388">0754.765.388</a>
          </div>
          <div>
            <span>WhatsApp </span>
            &emsp;
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/+40754765388?text=Bună%20ziua!%20Sunt%20interesat%20de%20"
            >
              0754.765.388
            </a>
          </div>
          <div>
            <span>Email</span>
            &emsp;
            <a href="mailto:cadastru_mocanu@yahoo.com">
              cadastru_mocanu@yahoo.com
            </a>
          </div>
          <div>
            <span>Facebook</span>
            <span className="flex">
              <CiFacebook className="text-2xl text-[var(--blueLight)]" />
              <Link target="_blank" href="https://www.facebook.com/MocanuCadastruConstanta">
                /MocanuCadastruConstanta
              </Link>
            </span>
          </div>
          <div>
            <span>Program</span>
            <span> &emsp;Luni - Vineri 10 - 18</span>
          </div>
          <div>
            <span>NRC: </span>&emsp; F40/5030/2024
          </div>
          <div>
            <span>CUI: </span>&emsp; 50361818
          </div>
          <div>
            <span>PFA: </span>&emsp; Mocanu Alin-Daniel
          </div>
        </div>

        <div className={footerColumn}>
          <h3>Linkuri utile</h3>
            <Link
              href="/politica"
              className="text-[var(--blueLight)] hover:text-blue-700"
            >
              Politica de confidențialitate
            </Link>
            <p>Credits</p>
        </div>

        <div className={footerColumn}>
          <div className="flex flex-col gap-4">
            <Link href="https://anpc.ro/ce-este-sal">
              <Image
                src="/anpc-sal_01.jpg"
                width="200"
                height="0"
                alt="anpc-sal"
                className="rounded-2xl w-auto"
              />
            </Link>
            <Link href="https://ec.europa.eu/consumers/odr">
              <Image
                src="/anpc-sal_02.jpg"
                width="200"
                height="0"
                alt="anpc-sol"
                className="rounded-2xl w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="py-8 mb-4">© Mocanu Alin-Daniel | 2025</p>
    </div>
  );
};

export default Footer;
