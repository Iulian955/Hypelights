import React, { useState } from "react";
import images from "../../data/images";
import styles from "./Homepage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import OurServices from "../../blocks/OurServices";
import CardsList from "../../components/PortfolioCompo/CardsList";
import InformationWrap from "../../components/MiniComponents/InformationWrap/InformationWrap";
import projectList from "./projectList.json";
import { HashLink as Link, NavHashLink } from "react-router-hash-link";

const Homepage = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [projectLink, setProjectLink] = useState(params.projectName ? params.projectName : null);
  const [activeFilter, setActiveFilter] = useState("");
  console.log("Project link is:", projectLink);

  const closeProject = () => {
    setProjectLink(null);
    navigate("/");
  };
  const handleSwitchProject = (projectName: string) => {
    setProjectLink(projectName);
  };
  return (
    <>
      {projectLink && (
        <div className={styles.backdropModal}>
          <div className="container my-5">
            <div className={styles.topModal}>
              <h1 className="project-title">{projectList[projectLink].title}</h1>
              <img onClick={closeProject} className={styles.closeStyle} src={images.closeIcon} />
            </div>
            <div className="project-container d-flex flex-column">
              {projectList[projectLink].images.map((item) => (
                <img className="mt-3" src={item} alt="photonic hero" />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={styles.landingFirst}>
        <div className={styles.elipse} />
        <div className={styles.heroText}>
          <div className={styles.pitchText}>
            <h2>{parse(`Propulseaza-ti`)}</h2>
            <h2>{parse(`afacerea `)}</h2>
            <h2 className={styles.little}>{parse(`la urmatorul `)}</h2>
            <h2 className={styles.little}>{parse(`nivel `)}</h2>
            <div className={styles.socialWrapper}>
              <a href="https://www.instagram.com/riona.romania/" target="_blank">
                <img src={images.socialIcons.instagram} />{" "}
              </a>
              <a href="https://www.facebook.com/profile.php?id=100086601934343" target="_blank">
                <img src={images.socialIcons.facebook} />
              </a>
            </div>
            <div className={styles.actionWrapper}>
              <NavHashLink className={styles.HashLinkStyle} to={"/pachete"}>
                <button className={styles.pricesButton}>{"Preturi"}</button>{" "}
              </NavHashLink>
              <NavHashLink className={styles.HashLinkStyle} to={"/contact"}>
                <button className={styles.callNow}>{"Contacteaza-ne acum"}</button>{" "}
              </NavHashLink>
            </div>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <img className={styles.heroImage} src={images.heroBoy} />
        </div>
      </div>

      <InformationWrap />

      <OurServices />
      <CardsList cards={Object.values(projectList)} projectUp={handleSwitchProject} />
    </>
  );
};

export default Homepage;
