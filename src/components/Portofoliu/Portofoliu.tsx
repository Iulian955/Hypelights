import React, { useState } from "react";
import styles from "../Portofoliu/Portofoliu.module.scss";
import images from "./../../data/images";
import { Helmet } from "react-helmet";

const imagesByCategory = {
  "Sisteme de irigatii": [
    images.portofoliu.irig1,
    images.portofoliu.irig2,
    images.portofoliu.irig3,
    images.portofoliu.irig4,
    images.portofoliu.irig5,
    images.portofoliu.irig6,
    images.portofoliu.irig7,
    images.new.pz7
  ],
  Defrisare: [
    // images.portofoliu.defr1,
    images.portofoliu.defr2,
    images.portofoliu.defr3,
    images.portofoliu.defr4,
    images.portofoliu.defr5,
    images.portofoliu.defr6,
    images.portofoliu.defr7,
    images.portofoliu.defr8,
    // images.portofoliu.defr9,
    images.new.pz1,
    images.new.pz2,
    images.new.pz3,
    images.new.pz4,
    images.new.pz5,
    images.new.pz6,
    images.new.pz8,
    images.new.pz9
  ],
  "Spatii verzi": [
    images.portofoliu.verde1,
    images.portofoliu.verde2,
    images.portofoliu.verde3,
    images.portofoliu.verde4,
    images.portofoliu.verde5,
    images.portofoliu.verde6,
    images.portofoliu.verde7,
    images.portofoliu.verde8,
    images.portofoliu.verde9,
    images.portofoliu.verde10,
    images.new.pz10
  ]
};

const Portofoliu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toate");
  const categories = ["Toate", ...Object.keys(imagesByCategory)];

  const getFilteredImages = () => {
    if (selectedCategory === "Toate") {
      return Object.values(imagesByCategory).flat();
    }
    return imagesByCategory[selectedCategory];
  };

  const filteredImages = getFilteredImages();

  return (
    <div className={styles.portofoliuContainer}>
      <Helmet>
        <meta name="description" content="Portofoliu" />
      </Helmet>
      <div className={styles.headTitle}>Portofoliu</div>
      <div className={styles.portLinks}>
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${category === selectedCategory ? styles.activeCategory : ""}`}
          >
            {category}
          </div>
        ))}
      </div>
      <div className={styles.imageGallery}>
        {filteredImages.map((src, index) => (
          <img key={index} src={src} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Portofoliu;
