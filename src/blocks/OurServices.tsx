import React, { useState } from "react";
import styles from "./OurServices.module.scss";
import GalleryComponent from "./../components/PhotoGallery/GalleryComponent";
import { NavHashLink } from "react-router-hash-link";

const OurServices = () => {
  const goToTop = (_) => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={styles.servicesBlock}>
      <div className={styles.card}>
        <div className={styles.interiorPadder}>
          <div className={styles.inner}>
            <h2 className={styles.toptitle}>Alege optiunea</h2>
            <h2 className={styles.title}>Bussiness-uri mici</h2>
          </div>
          <div className={styles.action}>
            <NavHashLink className={styles.HashLinkStyle} to={"/pachete"}>
              <button onClick={goToTop} className={styles.pricesButton}>
                {"Get started"}
              </button>
            </NavHashLink>
          </div>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/daniancaro-23015.appspot.com/o/ProiecteRiona%2FHomepage%2FourServices%2Fcladirestanga.png?alt=media&token=144253c7-e86b-497c-a86e-218e7fe0d7a9" />
      </div>

      <div className={styles.card}>
        <div className={styles.interiorPadder}>
          <div className={styles.inner}>
            <h2 className={styles.toptitle}>Alege optiunea</h2>
            <h2 className={styles.title}>Companii</h2>
          </div>
          <div className={styles.action}>
            <NavHashLink className={styles.HashLinkStyle} to={"/pachete"}>
              <button onClick={goToTop} className={styles.pricesButton}>
                {"Get started"}
              </button>
            </NavHashLink>
          </div>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/daniancaro-23015.appspot.com/o/ProiecteRiona%2FHomepage%2FourServices%2Fcladire.png?alt=media&token=5362ed3c-158d-4fb7-9e08-b0d4a4a74cfc" />
      </div>

      <div className={styles.card}>
        <div className={styles.interiorPadder}>
          <div className={styles.inner}>
            <h2 className={styles.toptitle}>Alege optiunea</h2>
            <h2 className={styles.title}>Corporatii</h2>
          </div>
          <div className={styles.action}>
            <NavHashLink className={styles.HashLinkStyle} to={"/pachete"}>
              <button onClick={goToTop} className={styles.pricesButton}>
                {"Get started"}
              </button>
            </NavHashLink>
          </div>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/daniancaro-23015.appspot.com/o/ProiecteRiona%2FHomepage%2FourServices%2Fcladiredreapta.png?alt=media&token=4a27cc3c-3143-4f5c-b3fc-a91744978043" />
      </div>

      {/* <GalleryComponent /> */}
      {/* <div className={styles.cardBlock}>
        <h2>Bussines-uri mici</h2>
        <span>Alege din pachetele noastre care ti se potriveste</span>
        <button> Get started</button>
        <img className={styles.arrowStyle} src={images.arrowRiona} />
        <img className={styles.building} src={images.mic} />
      </div> */}
    </div>
  );
};
export default OurServices;
