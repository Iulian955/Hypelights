import React, { useState, useEffect } from "react";
import styles from "../CookieComponent/CookieComponent.module.scss";
import { Helmet } from "react-helmet";

interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
}

const CookieComponent: React.FC<CookieConsentProps> = ({ onAccept, onReject }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "accepted" && consent !== "rejected") {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    onAccept();
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
    onReject();
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookiesWrapper}>
      <Helmet>
        <meta name="description" content="Cookie" />
      </Helmet>
      <div className={styles.cookiesContainer}>
        <div className={styles.textsCookie}>
          <div className={styles.mainTitle}>We value your privacy</div>
          <div className={styles.subTitle}>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
            traffic. By clicking “Accept cookies”, you consent to our use of cookies. <a href="/cookie">Read more </a>
          </div>
        </div>
        <div className={styles.btns}>
          <button onClick={handleAccept} className={styles.btnAccept}>
            Accept Cookies
          </button>
          <button onClick={handleReject} className={styles.btnReject}>
            Reject All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieComponent;
