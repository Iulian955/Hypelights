import React, { useState } from "react";
import styles from "../Contact/Contact.module.scss";
import images from "./../../data/images";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { orderErrors, orderProps } from "../../utils/OrderInterfaces";
import { sendOrderConfirmation } from "../../services/emails";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Contact = () => {
  const containerStyle = {
    width: "500px",
    height: "500px"
  };

  const center = {
    lat: 44.51693,
    lng: 25.98136
  };

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC4ZVQIGCIWz18DdL-WhhuNuUkarN-MLIM"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [orderData, setOrderData] = useState<orderProps>({
    name: "",
    emailAddress: "",
    message: "",
    oras: "",
    judet: "",
    phoneNo: ""
  });

  const [errors, setErrors] = useState<Partial<orderErrors>>({});

  const validateField = (name: string, value: string | boolean) => {
    switch (name) {
      case "name":
        return value.toString().trim() ? "" : "Numele este obligatoriu.";
      case "emailAddress":
        return /\S+@\S+\.\S+/.test(value.toString()) ? "" : "Adresa de email este invalidă.";
      case "phoneNo":
        return /^\d+$/.test(value.toString()) ? "" : "Numărul de telefon este invalid.";
      case "judet":
        return value.toString().trim() ? "" : "Județul este obligatoriu.";
      case "oras":
        return value.toString().trim() ? "" : "Orașul este obligatoriu.";
      case "message":
        return value.toString().trim() ? "" : "Mesajul este obligatoriu.";
      case "consent":
        return value ? "" : "Trebuie să accepți procesarea datelor cu caracter personal.";
      default:
        return "";
    }
  };

  const navigate = useNavigate();

  const [consent, setConsent] = useState(false);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const consentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConsent(event.target.checked);
    setErrors((prev) => ({ ...prev, consent: validateField("consent", event.target.checked) }));
  };

  const handleSendClick = () => {
    const newErrors: Partial<orderErrors> = {};

    if (!orderData.name.trim()) newErrors.name = "Numele este obligatoriu.";
    if (!orderData.emailAddress.trim() || !/\S+@\S+\.\S+/.test(orderData.emailAddress))
      newErrors.emailAddress = "Adresa de email este invalidă.";
    if (!orderData.phoneNo.trim() || !/^\d+$/.test(orderData.phoneNo))
      newErrors.phoneNo = "Numărul de telefon este invalid.";
    if (!orderData.judet.trim()) newErrors.judet = "Județul este obligatoriu.";
    if (!orderData.oras.trim()) newErrors.oras = "Orașul este obligatoriu.";
    if (!orderData.message.trim()) newErrors.message = "Mesajul este obligatoriu.";
    if (!consent) newErrors.consent = "Trebuie să accepți procesarea datelor cu caracter personal.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      sendOrderConfirmation(orderData);
      window.location.href = `/thankyou`;
      console.log("Date trimise");
    }
  };

  return (
    <div className={styles.contactContainer}>
      <Helmet>
        <meta name="description" content="Contact" />
      </Helmet>
      <div className={styles.headTitle}>Contact</div>

      <div className={styles.firstSectionContact}>
        <div className={styles.contactMap}>
          {isLoaded ? (
            <GoogleMap
              mapContainerClassName={styles.containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <MarkerF position={center}></MarkerF>
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>

        <div className={styles.contactForm}>
          <div className={styles.contactInputs}>
            <input
              className={errors.name ? styles.redInput : ""}
              name="name"
              placeholder="Nume"
              value={orderData.name}
              onChange={inputHandler}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
            <input
              className={errors.emailAddress ? styles.redInput : ""}
              name="emailAddress"
              placeholder="Email"
              value={orderData.emailAddress}
              onChange={inputHandler}
            />
            {errors.emailAddress && <span className={styles.error}>{errors.emailAddress}</span>}
            <input
              className={errors.phoneNo ? styles.redInput : ""}
              name="phoneNo"
              placeholder="Telefon"
              value={orderData.phoneNo}
              onChange={inputHandler}
            />
            {errors.phoneNo && <span className={styles.error}>{errors.phoneNo}</span>}
            <input
              className={errors.judet ? styles.redInput : ""}
              name="judet"
              placeholder="Judet"
              value={orderData.judet}
              onChange={inputHandler}
            />
            {errors.judet && <span className={styles.error}>{errors.judet}</span>}
            <input
              className={errors.oras ? styles.redInput : ""}
              name="oras"
              placeholder="Oras"
              value={orderData.oras}
              onChange={inputHandler}
            />
            {errors.oras && <span className={styles.error}>{errors.oras}</span>}
            <textarea
              className={errors.message ? styles.redInput : ""}
              name="message"
              placeholder="Mesaj"
              value={orderData.message}
              onChange={inputHandler}
            />
            {errors.message && <span className={styles.error}>{errors.message}</span>}
            <div className={styles.formBox}>
              <div>
                <input type="checkbox" className={styles.formCheck} checked={consent} onChange={consentHandler} />
                <label>Accept procesarea datelor cu caracter personal</label>{" "}
              </div>
              {errors.consent && <span className={styles.error}>{errors.consent}</span>}
            </div>
          </div>
          <div className={styles.sendBtn}>
            <button onClick={handleSendClick}>Trimite mesajul</button>
          </div>
        </div>
      </div>

      <div className={styles.secondSectionContact}>
        <div className={styles.infos}>
          <div className={styles.contactInfo}>
            <div className={styles.infoPhoto}>
              <img src={images.contact.mailLogo} alt="mail" />
            </div>
            <div className={styles.infoTitle}>Email</div>
            <div className={styles.infoSubTitle}>gazonulverde@yahoo.com</div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.infoPhoto}>
              <img src={images.contact.location1} alt="location" />
            </div>
            <div className={styles.infoTitle}>Adresa</div>
            <div className={styles.infoSubTitle}>Strada Ronda nr. 25, Chitila, jud. Ilfov</div>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoPhoto}>
              <img src={images.contact.phone1} alt="phone" />
            </div>
            <div className={styles.infoTitle}>Telefon</div>
            <div className={styles.infoSubTitle}>0723.721.132</div>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoPhoto}>
              <img src={images.contact.date1} alt="date" />
            </div>
            <div className={styles.infoTitle}>Date fiscale</div>
            <div className={styles.infoSubTitle}>
              GAZONUL VERDE S.R.L. <br /> CUI: RO 39772006 <br /> Nr. Reg: J23/3944/2018
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
