import styles from "./About.module.css";
export default function About(params) {


  return (
    <>
      <div className={styles.fondoAbout}>
        <div className={`${styles.containerAbout} `}>

          <div className={styles.portalAbout}>
            <div className={styles.elementsAbout}>

              <div className={styles.perfilAbout} />
              <p className={styles.parrafoAbout}>
                A
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}