import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "../Homepage/Homepage.module.scss";
import images from "./../../data/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuCalendarDays } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { blogPosts } from "../Blog/Blog";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const Homepage = () => {
  const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
      style={{
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        right: "25px",
        transform: "translate(0, -50%)",
        zIndex: 1
      }}
      onClick={onClick}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 15L10 10L4 5" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
      style={{
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        left: "25px",
        transform: "translate(0, -50%)",
        zIndex: 2
      }}
      onClick={onClick}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L9 10L15 15" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: styles.myCarousel,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "white",
          border: "2px solid black",
          margin: "0 5px",
          marginTop: "23px"
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div>
        <ul style={{ display: "flex", justifyContent: "center" }}>{dots.slice(0, 3)}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const imagesProjects = {
    all: [
      images.homepage.defris2,
      images.homepage.defris3,
      images.homepage.defris4,
      images.homepage.iri1,
      images.homepage.iri2,
      images.homepage.iri3,
      images.homepage.iri4,
      images.homepage.iri5,
      images.homepage.sv1,
      images.homepage.sv2,
      images.homepage.sv3,
      images.homepage.sv4,
      images.new.pz1,
      images.new.pz2,
      images.new.pz3,
      images.new.pz4,
      images.new.pz5,
      images.new.pz6
    ],
    irrigation: [
      images.homepage.iri1,
      images.homepage.iri2,
      images.homepage.iri3,
      images.homepage.iri4,
      images.homepage.iri5
    ],
    deforestation: [
      images.homepage.defris2,
      images.homepage.defris3,
      images.homepage.defris4,
      images.new.pz1,
      images.new.pz2,
      images.new.pz3,
      images.new.pz4,
      images.new.pz5,
      images.new.pz6
    ],
    greenSpaces: [images.homepage.sv1, images.homepage.sv2, images.homepage.sv3, images.homepage.sv4]
  };

  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const getLinkClass = (category) => {
    return `${styles.link} ${activeCategory === category ? styles.activeLink : ""}`;
  };

  const navigate = useNavigate();

  const handleProductClick = (blogId) => {
    window.location.href = `/blog/${blogId}`;
  };

  return (
    <div className={styles.homepageContainer}>
      <Helmet>
        <meta name="description" content="HomePage" />
      </Helmet>
      <div className={styles.firstSection}>
        <div className={styles.texts}>
          <div className={styles.mainTitle}>Gazonul Verde</div>
          <div className={styles.subTitle}>
            Din pasiune pentru gazon si spatii verzi. Suntem o echipa de profesionisti in domeniul spatiilor verzi.
          </div>
          <div className={styles.homeBtn}>
            <button onClick={() => (window.location.href = "/contactUs")}>Contacteaza-ne</button>{" "}
          </div>
        </div>

        <div className={styles.newSection}>
          <div className={styles.containerSystem}>
            <div className={styles.systems}>
              <img src={images.homepage.frunza} alt="logo" />
              <div className={styles.systemTitle}>14.000+ metri patrati</div>
              <div className={styles.systemSubTitle}>de gazon însămânțat</div>
            </div>
            <div className={styles.systems}>
              <img src={images.homepage.sisteme} alt="logo" />
              <div className={styles.systemTitle}>150+ sisteme</div>
              <div className={styles.systemSubTitle}>de irigații realizate</div>
            </div>
            <div className={styles.systems}>
              <img src={images.homepage.proiecte} alt="logo" />
              <div className={styles.systemTitle}>200+ de proiecte</div>
              <div className={styles.systemSubTitle}>și servicii de mentenanță</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.mainTexts}>
          <div className={styles.secondSectionMainTitle}>Serviciile noastre</div>
          <div className={styles.secondSectionSubTitle}>
            Oferim o varietate de servicii ce tin de amenajarea spatiilor versi si pana la defrisarea si
            curatarea terenurilor. Alege mereu sa lucrezi cu profesionisti.
          </div>
        </div>

        <div className={styles.servicesContainer}>
          <div className={styles.service} onClick={() => (window.location.href = `/servicii/#irigat`)}>
            <img src={images.new.pz12} alt="service" />
            <div className={styles.serviceTitle}>Montaj sisteme de irigații</div>
          </div>
          <div className={styles.service} onClick={() => (window.location.href = `/servicii/#montaj`)}>
            <img src={images.homepage.service6} alt="service" />
            <div className={styles.serviceTitle}>Montaj rulouri gazon</div>
          </div>
          <div className={styles.service} onClick={() => (window.location.href = `/servicii/#defrisare`)}>
            <img src={images.new.pz13} alt="service" />
            <div className={styles.serviceTitle}>
              Defrișare și curățare teren <br /> Ierbicizare teren contra ambroziei
            </div>
          </div>
          <div className={styles.service} onClick={() => (window.location.href = `/servicii/#insamantare`)}>
            <img src={images.new.pz14} alt="service" />
            <div className={styles.serviceTitle}>Pregătire însămânțare și semănare gazon</div>
          </div>
          <div className={styles.service} onClick={() => (window.location.href = `/servicii/#verde`)}>
            <img src={images.homepage.service5} alt="service" />
            <div className={styles.serviceTitle}>Întreținere grădini și spații verzi</div>
          </div>
          <div className={styles.service} onClick={() => (window.location.href = `/servicii/#verde`)}>
            <img src={images.new.pz11} alt="service" />
            <div className={styles.serviceTitle}>Proiectare a spațiilor  verzi</div>
          </div>
        </div>
      </div>
      <div className={styles.thirdSection}>
        <div className={styles.mainTexts}>
          <div className={styles.secondSectionMainTitle}>De ce sa ne alegi pe noi</div>
          <div className={styles.secondSectionSubTitle}>
            Experienta dovedita in timp de peste 8 ani ne recomanda. Am dus cu succes la capat numeroase proiecte de
            irigatii, amenajare spatii verzi si defrisare.
          </div>
        </div>

        <div className={styles.irigatii}>
          <div className={styles.sisIrigatii}>
            <img src={images.homepage.expert2} alt="expert" />
            <div className={styles.irigatiiTitle}>Experti in gazon </div>
            <div className={styles.iritgatiiSubTitle}>Gazonul este specialitatea noastra dovedita in timp</div>
          </div>
          <div className={styles.sisIrigatii}>
            <img src={images.homepage.irigatii2} alt="irigatii" />
            <div className={styles.irigatiiTitle}>Sisteme de irigatii </div>
            <div className={styles.iritgatiiSubTitle}>Peste 150 de proiecte de sisteme de irigatii implementate</div>
          </div>
          <div className={styles.sisIrigatii}>
            <img src={images.homepage.utilaje2} alt="utilaje" />
            <div className={styles.irigatiiTitle}>Utilaje profesionale </div>
            <div className={styles.iritgatiiSubTitle}>Folosim utilaje de ultima generatie in proiectele noastre.</div>
          </div>
        </div>
      </div>

      <div className={styles.forthSection}>
        <div className={styles.mainTexts}>
          <div className={styles.secondSectionMainTitle}>Proiecte recente</div>
          <div className={styles.secondSectionSubTitle}>
            Va prezentam o mica parte din modul nostru de lucru si din proiectele noastre.
          </div>
        </div>
        <div className={styles.links}>
          <div className={getLinkClass("all")} onClick={() => handleCategoryClick("all")}>
            Toate
          </div>
          <div className={getLinkClass("irrigation")} onClick={() => handleCategoryClick("irrigation")}>
            Sisteme de irigatii
          </div>
          <div className={getLinkClass("deforestation")} onClick={() => handleCategoryClick("deforestation")}>
            Defrisare
          </div>
          <div className={getLinkClass("greenSpaces")} onClick={() => handleCategoryClick("greenSpaces")}>
            Spatii verzi
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {imagesProjects[activeCategory].map((image, index) => (
              <div key={index} className={styles.carouselImg}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className={styles.fifthSection}>
        <div className={styles.mainTexts}>
          <div className={styles.secondSectionMainTitle}>Articole recente</div>
          <div className={styles.secondSectionSubTitle}>
            Explorati articolele noastre pe diverse subiecte ce tin de gazon, defrisari, amenajare spatii verzi
            si multe altele.
          </div>
        </div>

        <div className={styles.articles}>
          {blogPosts.slice(-3).map((post) => (
            <div key={post.id} className={styles.wrapperArt}>
              <div>
                <img className={styles.artImg} src={post.imageUrl} alt="/" />
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.infos}>
                  <div className={styles.userContainer}>
                    <img src={images.homepage.icon} alt="icon" />
                    <div>{post.author}</div>
                  </div>
                  <div className={styles.dataContainer}>
                    <div>
                      <LuCalendarDays />
                    </div>
                    <div>{post.date}</div>
                  </div>
                </div>
                <div className={styles.greenBtn}>
                  <button>{post.category}</button>
                </div>
              </div>
              <div className={styles.textsContainer}>
                <div className={styles.artMainTitle}>{post.title}</div>
                <div className={styles.artSubTitle}>{post.subTitle}</div>
                <div className={styles.artBtn}>
                  <button onClick={() => handleProductClick(post.id)}>
                    Citeste mai mult
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
