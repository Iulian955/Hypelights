import React, { useEffect, useRef, useState } from "react";
import styles from "../Navbar/Navbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import logo from "../../media/assets/pics/logos/logo.svg";
import { Helmet } from "react-helmet";
import images from "../../data/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => window.location.pathname === path;

  return (
    <div className={styles.header}>
      <Helmet>
        <meta name="description" content="Navabr" />
      </Helmet>
      <div className={styles.headerContainer}>
        <HashLink className={styles.logoDiv} to="/">
          <img src={logo} alt="logo" />
        </HashLink>

        <nav className={isMenuOpen ? styles.responsiveNavbar : " "}>
          <ul>
            <li>
              <a href="/">Acasa</a>
            </li>
            <li>
              <a href="/products">Produse</a>
            </li>
            <li>
              <a href="/servicii">Servicii</a>
            </li>
            <li>
              <a href="/portofoliu">Portofoliu</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <div className={styles.contactNav}>
            <div className={styles.phoneNavbar1}>
              <img src={images.logos.phoneLogo} alt="phone" />
              <div>0723.721.132</div>
            </div>

            <div className={styles.mailNavbar1}>
              <img src={images.logos.letterLogo} alt="letter" />
              <div>gazonulverde@yahoo.com</div>
            </div>
          </div>
        </nav>

        <div className={styles.greenDiv}>
          <div className={styles.phoneNavbar}>
            <img src={images.logos.phoneLogo} alt="phone" />
            <div>0723.721.132</div>
          </div>

          <div className={styles.mailNavbar}>
            <img src={images.logos.letterLogo} alt="letter" />
            <div>gazonulverde@yahoo.com</div>
          </div>
        </div>

        {isMenuOpen ? (
          <FaTimes className={styles.hamburger} onClick={handleOnClick} />
        ) : (
          <FaBars className={styles.hamburger} onClick={handleOnClick} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
