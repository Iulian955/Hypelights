/* eslint-disable */
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import React, { useEffect, useState, lazy } from "react";
import ReactGA from "react-ga4";
import ReactRouter from "react-router";

import { getData } from "./data/productList";
import { AuthProvider } from "./components/context/AuthProvider";
import { getCookie } from "./components/CookieConsent/functions";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import Contact from "./components/Contact/Contact";
import Portofoliu from "./components/Portofoliu/Portofoliu";
import Blog from "./components/Blog/Blog";
import Products from "./components/Products/Products";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import SingleBlog from "./components/SingleBlog/SingleBlog";
// import CookieComponent from "./components/CookieComponent/CookieComponent";
import ProtectieDate from "./components/ProtectieDate/ProtectieDate";
import ContactUs from "./components/ContactUs/ContactUs";
import ThankYou from "./components/ThankYou/ThankYou";

// export const ProductsContext = React.createContext<any[]>([]);

// import { useScrollSense } from "./components/hooks/senseHook/useScrollSense";
// import { CookiesTagConsent, ProductsFromSessionStorage } from "./data/constants";
// const Loading = () => <div>LOADING</div>;

function App() {
  // const [letsCartHandler, CartHandler] = useState(0);
  // const [ssProducts, setSSproducts] = useState<any>();

  // useScrollSense(() => {
  //   ReactGA.event(`User scrolled to bottom on [${window.location.pathname}]`);
  // });

  // const getCookieConsent = () => {
  //   if (getCookie(CookiesTagConsent) === "userAccepted") return false;
  //   else return true;
  // };

  // useEffect(() => {
  //   if (ssProducts == null) {
  //     getData().then((finalData) => {
  //       sessionStorage.setItem(ProductsFromSessionStorage, JSON.stringify(finalData));
  //     });
  //   }
  // }, [ssProducts]);

  const handleConsentAccepted = () => {
    console.log("Consent accepted");
  };

  const handleRejectCookies = () => {
    console.log("Cookies rejected by user.");
  };

  return (
    <div className="App">
      {/* <CookieComponent onAccept={handleConsentAccepted} onReject={handleRejectCookies} /> */}
      <BrowserRouter basename="/">
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path={`/`} element={<Homepage />} />
            <Route path={`/servicii`} element={<ServicesPage />} />
            <Route path={`/contact`} element={<Contact />} />
            <Route path={`/contactUs`} element={<ContactUs />} />
            <Route path={`/portofoliu`} element={<Portofoliu />} />
            <Route path={`/blog`} element={<Blog />} />
            <Route path="/blog/:blogId" element={<SingleBlog />} />
            <Route path={`/products`} element={<Products />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path={`/protectieDate`} element={<ProtectieDate />} />
            <Route path={"/thankyou"} element={<ThankYou />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
