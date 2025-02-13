import React from 'react'
import styles from './acte.module.css'

const Acte = () => {

    const styleWrapper = "p-4 mt-0"


  return (
    <div className={styles.acteContainer + " mx-auto my-12"}>
        <h1 className={styles.title}>Acte necesare pentru:</h1>
        <div className={styleWrapper}>
            <h3 className={styles.h3Category}>Cadastru garsoniere/apartamente</h3>
            <ul className={styles.ul}>
                <li>Acte de proprietate</li>
                <li>Asigurare locuință</li>
                <li>Extras de carte funciară (după caz)</li>
                <li>Acte identitate CI/BI</li>
                <li>Certificat fiscal</li>
            </ul>
        </div>


        <div className={styleWrapper}>
            <h3 className={styles.h3Category}>Cadastru teren (fără construcție)</h3>
            <ul className={styles.ul}>
                <li>Acte de proprietate</li>
                <li>Acte identitate CI/BI</li>
                <li>Certificat fiscal</li>
            </ul>
        </div>




        <div className={styleWrapper}>
            <h3 className={styles.h3Category}>Cadastru teren (cu construcție)</h3>
            <ul className={styles.ul}>
                <li>Acte de proprietate</li>
                <li>Acte identitate CI/BI</li>
                <li>Asigurare locuință</li>
                <li>Certificat fiscal</li>
            </ul>
        </div>



        <div className={styleWrapper}>
            <h3 className={styles.h3Category}>Înscriere construcție (intabulare construcție nouă)</h3>
            <ul className={styles.ul}>
                <li>Acte de proprietate</li>
                <li>Autorizația de construire</li>
                <li>Recepția finală</li>
                <li>Certificatul de edificare</li>
                <li>Certificatul energetic</li>
                <li>Asigurare locuință</li>
                <li>Acte identitate CI/BI</li>
                <li>Certificat fiscal</li>
            </ul>
        </div>

        <div className={styleWrapper}>
            <h3 className={styles.h3Category}>Dezmembrare</h3>
            <ul className={styles.ul}>
                <li>Cadastru vechi</li>
                <li>Acte de proprietate</li>
                <li>Extras de carte funciară</li>
                <li>Acte identitate CI/BI</li>
                <li>Certificat de urbanism dacă se dezmembrează mai mult de 2 loturi</li>
            </ul>
        </div>

        <div className={styleWrapper}>
            <h3 className={styles.h3Category}>Alipire</h3>
            <ul className={styles.ul}>
                <li>Cadastru vechi la toate loturile</li>
                <li>Extras de carte funciară la toate loturile</li>
                <li>Acte identitate CI/BI</li>
                <li>Certificat de urbanism</li>
            </ul>
        </div>

        <div className={styleWrapper}>
            <h3 className={styles.h3Category}>Actualizare imobile cu/fără construcții (modificare suprafață/limite/coordonate)</h3>
            <ul className={styles.ul}>
                <li>Declarație notarială a proprietarului că e de acord cu modificarea suprafeței, limitelor sau coordonatelor.</li>
                <li>Asigurare locuință (dacă există locuință)</li>
                <li>Acte identitate CI/BI</li>
                <li>Extras de carte funciară la toate loturile</li>
            </ul>
        </div>

        <div className={styleWrapper}>
            <h3 className={styles.h3Category}>Actualizare apartamente</h3>
            <ul className={styles.ul}>
                <li>Autorizația pentru modificări interioare, pentru construire balcoane.</li>
                <li>Recepția finală</li>
                <li>Certificatul de edificare</li>
                <li>Certificatul fiscal</li>
                <li>Acte identitate CI/BI</li>
                <li>Asigurare locuință</li>
                <li>Certificatul energetic</li>
            </ul>
        </div>

        <div className={styleWrapper}>
            <h3 className={styles.h3Category}>Certificat energetic</h3>
            <ul className={styles.ul}>
                <li>Plan de situație nou sau cadastrul vechi, pentru locuințe mai mari de 50mp</li>
            </ul>
        </div>







    </div>
  )
}

export default Acte
