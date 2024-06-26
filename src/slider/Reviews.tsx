import ReactGA from "react-ga4";
import ReviewCard from "./ReviewCard";
import DragItem from "./DragItem/DragItem";
import styles from "./Reviews.module.scss";
import React, { useState } from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";

const photos: string[] = [img1, img2, img3, img1, img2];

const Reviews = () => {
  const [CardIndex, setCardIndex] = useState(2);
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCoord({ x: e.screenX, y: e.screenY });
  };

  let limitLoop = 4;
  const tapHandler = (indexIncrement: number) => {
    setCardIndex(indexIncrement);
  };
  const sliderHandler = (data: number) => {
    if (data !== 0) {
      if (data > 50) {
        internNotifyHandler(1);
      }
      if (data < 50) {
        internNotifyHandler(-1);
      }
    } else {
      if (window.screen.width > 992)
        if (coord.x > window.screen.width / 2) internNotifyHandler(1);
        else internNotifyHandler(-1);
    }
  };
  const internNotifyHandler = (value: number) => {
    ReactGA.event("User scrolled in reviews");

    if (window.screen.availWidth < 428) {
      if (CardIndex + value >= limitLoop + 1 || CardIndex + value === -1) return;
    } else {
      if (CardIndex + value >= limitLoop || CardIndex + value === 0) return;
    }

    setCardIndex(CardIndex + value);
  };

  return (
    <>
      <div className={styles.reviewContainer} onMouseMove={handleMouseMove}>
        <div className={styles.headerContainer}></div>
        <div className={styles.reviewSection}>
          <DragItem sliderActiveCoords={sliderHandler} />
          <div className={styles.reviewWall}>
            <div
              className={`${styles.sliderSpace} ${
                CardIndex === 0
                  ? styles.zeroSlide
                  : CardIndex === 1
                  ? styles.oneSlide
                  : CardIndex === 2
                  ? styles.twoSlide
                  : CardIndex === 3
                  ? styles.threeSlide
                  : CardIndex === 4
                  ? styles.forthSlide
                  : ""
              }`}
            >
              <div className={styles.interiorPadder}>
                <ReviewCard styler={CardIndex === 0 ? "onFocus" : CardIndex >= 2 ? "hide" : ""} img={img1} />
                <ReviewCard styler={CardIndex === 1 ? "onFocus" : CardIndex >= 3 ? "hide" : ""} img={img2} />
                <ReviewCard styler={CardIndex === 2 ? "onFocus" : CardIndex >= 4 ? "hide" : ""} img={img3} />
                <ReviewCard
                  styler={CardIndex === 3 ? "onFocus" : CardIndex >= 5 || CardIndex <= 1 ? "hide" : ""}
                  img={img1}
                />
                <ReviewCard
                  styler={CardIndex === 4 ? "onFocus" : CardIndex === 2 || CardIndex <= 2 ? "hide" : ""}
                  img={img2}
                />
              </div>
            </div>
          </div>
          <div className={styles.actionPanel}>
            <img
              onClick={() => {
                tapHandler(0);
              }}
              className={`${styles.inactive} ${styles.mobileOnly}`}
            />
            <img
              onClick={() => {
                tapHandler(1);
              }}
              className={styles.inactive}
            />
            <img
              onClick={() => {
                tapHandler(2);
              }}
              className={styles.active}
            />
            <img
              onClick={() => {
                tapHandler(3);
              }}
              className={styles.inactive}
            />
            <img
              onClick={() => {
                tapHandler(4);
              }}
              className={`${styles.inactive} ${styles.mobileOnly}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
