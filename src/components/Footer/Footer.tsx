import React from "react";
import styles from "../Footer/Footer.module.scss";
import { faLinkedin, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "./../../data/images";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Helmet>
        <meta name="description" content="Footer" />
      </Helmet>
      <div className={styles.footerWrapper}>
        <div className={styles.sectionFooter}>
          <div className={styles.bigTitle}>Despre noi</div>
          <div className={styles.footerTexts}>
            Gazonul Verde este o companie infiintata din pasiunea de a crea spatii verzi frumoase si durabile.
          </div>
          {/* <div className={styles.footerSocials}>
            <div> Urmareste-ne pe </div>
            <a href="https://www.facebook.com/" className="facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" color="white" opacity={0.9} />
            </a>
          </div> */}
        </div>

        <div className={styles.sectionFooter}>
          <div className={styles.bigTitle}>Companie</div>
          <div className={styles.footerTexts}>
            <div>
              <a href="/servicii"> Servicii </a>
            </div>
            <div>
              {" "}
              <a href="/protectieDate">Protectia datelor </a>
            </div>
            <div>
              {" "}
              <a href="/contact"> Contact </a>
            </div>
          </div>
        </div>

        <div className={styles.sectionFooter}>
          <div className={styles.bigTitle}>Servicii</div>
          <div className={styles.footerTexts}>
            <div>
              <a href="/servicii#montaj"> Montaj rulou gazon </a>
            </div>
            <div>
              {" "}
              <a href="/servicii#irigat">Sistem de irigat </a>
            </div>
            <div>
              {" "}
              <a href="/servicii#insamantare">Pregatire insamantare si semanare </a>
            </div>
            <div>
              {" "}
              <a href="/servicii#verde"> Proiectarea spatiilor verzi </a>
            </div>
          </div>
        </div>
        <div className={styles.sectionFooter}>
          <div className={styles.bigTitle}>Date de contact</div>
          <div className={styles.footerTexts}>
            <div>
              <img src={images.logos.location} alt="/" />
              <div>Strada Ronda nr. 25, Chitila, jud. Ilfov</div>
            </div>
            <div>
              <img src={images.logos.phoneLogo} alt="#" />
              <div>0723.721.132</div>
            </div>
            <div>
              <img src={images.logos.letterLogo} alt="#" />
              <div>gazonulverde@yahoo.com</div>
            </div>
          </div>
        </div>

        <div className={styles.sectionFooter}>
          <div className={styles.bigTitle}>Certificari</div>
          <div className={styles.footerImg}>
            <img src={images.logos.iso2015} alt="iso" />
            <img src={images.logos.isoBlue} alt="iso" />
            <img src={images.logos.asfor} alt="iso" />
          </div>
        </div>
      </div>
      <div className={styles.footerName}>© 2024 Gazonul Verde S.R.L.</div>
    </div>
  );
};

export default Footer;
