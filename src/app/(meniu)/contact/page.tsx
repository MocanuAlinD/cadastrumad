// import UnderConstruction from '@/components/UnderConstruction'
import React from 'react'
import { FcPhone } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneSlash } from "react-icons/fa6";
import styles from './contact.module.css'

const Contact = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.itemContainer}>
          <h3><FcPhone /></h3>
          <h4><a href="tel:0754765388">0754.765.388</a></h4>
          <p className={styles.program}>&emsp;LUNI - VINERI, 10.00 - 18.00</p>
          <p className={styles.text}>&emsp;Suntem disponibili zilnic pentru întrebări, clarificări sau informații.</p>
        </div>

        <div className={styles.itemContainer}>
          <h3><FaWhatsapp className='text-[#25D366]' /></h3>
          <h4><a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/+40754765388?text=Bună%20ziua!%20Sunt%20interesat%20de%20"
            >
              0754.765.388
            </a></h4>
            <p className={styles.program}>&emsp;LUNI - VINERI, 10.00 - 18.00</p>
          <p className={styles.text}>&emsp;Pentru o comunicare rapidă și eficientă, ne poți contacta direct pe WhatsApp! Aici poți trimite documentele pentru analiză, solicita informații despre serviciile noastre, întreba despre statusul lucrării tale sau clarifica orice nelămurire.</p>
        </div>

        <div className={styles.itemContainer}>
          <h3><AiOutlineMail className='text-[#720e9e]' /></h3>
          <h4><a href="mailto:cadastru_mocanu@yahoo.com">cadastru_mocanu@yahoo.com </a></h4>
          <p className={styles.program}>&emsp;24/7</p>
          <p className={styles.text}>&emsp;Ne poți contacta și prin e-mail pentru orice întrebare sau solicitare! Aici poți trimite documentele necesare pentru analiză, solicita informații despre serviciile noastre sau verifica statusul lucrării tale.</p>
        </div>

        <div className={styles.itemContainer}>
          <h3 className='pb-4'><FaPhoneSlash className="text-[#009688]" /></h3>
          <p className={styles.text}>&emsp;În caz că nu răspundem la telefon sau pe WhatsApp în orele de program, probabil suntem foarte ocupați. Cu siguranță vă contactăm de îndată ce suntem disponibili.</p>
        </div>

      </div>
      {/* <UnderConstruction /> */}
    </div>
  )
}

export default Contact