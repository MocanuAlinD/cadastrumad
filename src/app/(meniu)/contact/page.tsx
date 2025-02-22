// import UnderConstruction from '@/components/UnderConstruction'
import React from 'react'
import styles from './contact.module.css'

const Contact = () => {

  const pStyle = ""
  return (
    <div className='w-full'>
      <div className={styles.wrapper}>
        <div className={styles.itemContainer}>
          <h3>Telefon</h3>
          <p>&emsp;&emsp;<a href="tel:0754765388">0754.765.388</a></p>
          <p className={pStyle}>&emsp;Ne găsiți la telefon zilnic de luni până vineri între orele 10.00 - 18.00. </p>
        </div>

        <div className={styles.itemContainer}>
          <h3>WhatsApp</h3>
          <p>&emsp;&emsp;<a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/+40754765388?text=Bună%20ziua!%20Sunt%20interesat%20de%20"
            >
              0754.765.388
            </a></p>
          <p className={pStyle}>&emsp;Dacă dorești să ne adresezi vreo întrebare, ori să aflii informații despre lucrarea ta sau să ne trimiți documente pentru a fi analizate, o poți face pe WhatsApp de luni până vineri între orele 08.00 - 19.00 și sâmbătă între orele 10.00 - 15.00.</p>
        </div>

        <div className={styles.itemContainer}>
          <h3>Email</h3>
          <p>&emsp;&emsp;<a href="mailto:cadastru_mocanu@yahoo.com">cadastru_mocanu@yahoo.com </a></p>
          <p className={pStyle}>&emsp;Pe adresa de email ne poți scrie oricând de luni până duminică dacă ai întrebări, nelămuriri, sau dorești să ne trimiți acte pentru a fi analizate.</p>
        </div>

        <div className={styles.itemContainer}>
          {/* <h3>Email</h3> */}
          <p className={pStyle}>În caz că nu răspundem la telefon sau pe whatsapp în orele stabilite, înseamnă că probabil suntem pe teren la măsurători. Cu siguranță vă sunăm înapoi de îndată ce suntem disponibili.</p>
        </div>

      </div>
      {/* <UnderConstruction /> */}
    </div>
  )
}

export default Contact