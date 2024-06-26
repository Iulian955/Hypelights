import React, { useState } from "react";
import { useQuery } from "react-query";
import { Container } from "react-bootstrap";
import ButtonsList from "./../../components/PortfolioCompo/ButtonsList";
import CardsList from "./../../components/PortfolioCompo/CardsList";
import Loader from "./../../components/PortfolioCompo/Loader";
import { fakedata } from "./../../components/PortfolioCompo/data/fake-data";
import styles from "./PortfolioArea.module.scss";

const PortfolioArea = () => {
  const fetchFakeData = async () => {
    return Promise.resolve(fakedata);
  };

  // const { isLoading, error, data } = useQuery("fakedata", fetchFakeData);
  const cardsList = fakedata && JSON.parse(fakedata);
  const [activeFilter, setActiveFilter] = useState("");

  const buttonsList = [
    "Design Logo",
    "Service Design",
    "Branding",
    "Designe Product",
    "UX Design",
    "UI Design",
    "Web Design"
  ];

  const handleClick = (text: string) => {
    activeFilter === text ? setActiveFilter("") : setActiveFilter(text);
  };

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.padder}></div>
      <Container fluid="xxl" className={" mx-auto"} style={{ maxWidth: "1600px" }}>
        {/* <ButtonsList buttons={buttonsList} handleClick={handleClick} active={activeFilter} /> */}
        {/* {isLoading ? <Loader /> :  */}
        <CardsList cards={cardsList} filter={activeFilter} />
      </Container>
    </div>
  );
};

export default PortfolioArea;
