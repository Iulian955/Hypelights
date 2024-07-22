import React from "react";
import styles from "./Homepage.module.scss";
import images from "../../data/images";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const handleChooseSpot = (spotId) => {
    navigate(`/calendar/${spotId}`);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.firstSection}>
        <div className={styles.mainTitle}>
          Grow your <br />
          business faster
        </div>

        <div className={styles.subTitle}>
          With our expertise and dedication, we'll help you navigate challenges, seize opportunities, and achieve your
          business goals.
        </div>

        <div className={styles.orangeBtn}>
          <button> Vezi locatii</button>
        </div>
      </div>

      <div className={styles.secondSection}>
        <div className={styles.orangeTitle}>45 Total Billboards... & growing!</div>
        <div className={styles.subOrangeTitle}>
          At Hypelights, we offer an extensive network of high-resolution LED billboards strategically located in key
          cities to maximize your brand’s exposure.
        </div>
      </div>

      <div className={styles.thirdSection}>
        <div className={styles.headerSection}>
          <div className={styles.thirdTitle}>Features locations</div>
          <div className={styles.seeLocations}>
            <span> Vezi toate locatiile</span>
            <FaArrowRightLong />
          </div>
        </div>

        <div className={styles.containerLocation}>
          <div className={styles.location}>
            <div className={styles.locationImg}>
              <img src={images.homepage.location1} alt="location1" />
            </div>

            <div className={styles.locationTitle}>Calea Dorobanti</div>
            <div className={styles.locationDescr}>Lorem ipsum dolor sit amet consectetur.</div>
            <div className={styles.locationInfo}>
              <div className={styles.secContainer}>
                <div className={styles.logo}>
                  <img src={images.homepage.s10} alt="10s" />
                </div>
                <div> 10 secunde</div>
              </div>

              <div className={styles.secContainer}>
                <div className={styles.logo}>
                  <img src={images.homepage.dimension} alt="dimension" />
                </div>
                <div>20 mp</div>
              </div>

              <div className={styles.secContainer}>
                <div className={styles.logo}>
                  <img src={images.homepage.lxL} alt="lxL" />
                </div>
                <div>4.61 x 3.46 m</div>
              </div>
            </div>

            <div className={styles.locationPrice}>
              120 RON/ <span>10sec</span>
            </div>

            <div className={styles.locationBtns}>
              <button className={styles.btnOrange}>Rezerva acum</button>
              <button className={styles.btnTransparent}>
                Detalii <FaArrowRightLong />
              </button>
            </div>
          </div>

          <div className={styles.location}>
            <div className={styles.locationImg}>
              <img src={images.homepage.location1} alt="location1" />
            </div>

            <div className={styles.locationTitle}>Calea Dorobanti</div>
            <div className={styles.locationDescr}>Lorem ipsum dolor sit amet consectetur.</div>
            <div className={styles.locationInfo}>
              <div className={styles.secContainer}>
                <div className={styles.logo}>
                  <img src={images.homepage.s10} alt="10s" />
                </div>
                <div> 10 secunde</div>
              </div>

              <div className={styles.secContainer}>
                <div className={styles.logo}>
                  <img src={images.homepage.dimension} alt="dimension" />
                </div>
                <div>20 mp</div>
              </div>

              <div className={styles.secContainer}>
                <div className={styles.logo}>
                  <img src={images.homepage.lxL} alt="lxL" />
                </div>
                <div>4.61 x 3.46 m</div>
              </div>
            </div>

            <div className={styles.locationPrice}>
              120 RON/ <span>10sec</span>
            </div>

            <div className={styles.locationBtns}>
              <button className={styles.btnOrange}>Rezerva acum</button>
              <button className={styles.btnTransparent}>
                Detalii <FaArrowRightLong />
              </button>
            </div>
          </div>

          <div className={styles.location}>
            <div className={styles.locationImg}>
              <img src={images.homepage.location1} alt="location1" />
            </div>

            <div className={styles.locationTitle}>Calea Dorobanti</div>
            <div className={styles.locationDescr}>Lorem ipsum dolor sit amet consectetur.</div>
            <div className={styles.locationInfo}>
              <div className={styles.secContainer}>
                <div className={styles.logo}>
                  <img src={images.homepage.s10} alt="10s" />
                </div>
                <div> 10 secunde</div>
              </div>

              <div className={styles.secContainer}>
                <div className={styles.logo}>
                  <img src={images.homepage.dimension} alt="dimension" />
                </div>
                <div>20 mp</div>
              </div>

              <div className={styles.secContainer}>
                <div className={styles.logo}>
                  <img src={images.homepage.lxL} alt="lxL" />
                </div>
                <div>4.61 x 3.46 m</div>
              </div>
            </div>

            <div className={styles.locationPrice}>
              120 RON/ <span>10sec</span>
            </div>

            <div className={styles.locationBtns}>
              <button className={styles.btnOrange}>Rezerva acum</button>
              <button className={styles.btnTransparent}>
                Detalii <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
