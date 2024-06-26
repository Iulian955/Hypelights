import React, { useEffect, useState } from "react";
import styles from "./ContactUs.module.scss";
import { orderProps, orderErrors } from ".././../utils/OrderInterfaces";
import { sendOrderConfirmation } from "./../../services/emails";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [orderData, setOrderData] = useState<orderProps>({
    name: "",
    emailAddress: "",
    message: "",
    oras: "",
    judet: "",
    phoneNo: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [errors, setErrors] = useState<Partial<orderErrors>>({});

  const navigate = useNavigate();

  const [consent, setConsent] = useState(false);

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
    <div className={styles.contactUsContainer}>
      <Helmet>
        <meta name="description" content="ContactUs" />
      </Helmet>
      <div className={styles.headTitle}>Contacteaza-ne</div>

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
  );
};

export default ContactUs;
