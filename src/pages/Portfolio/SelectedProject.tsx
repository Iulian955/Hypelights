import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import slide1 from "../ProjectImages/slide1.png";
import slide2 from "../ProjectImages/slide2.png";
import slide3 from "../ProjectImages/slide3.png";
import slide4 from "../ProjectImages/slide4.png";
import slide5 from "../ProjectImages/slide5.png";
import slide6 from "../ProjectImages/slide6.png";
import slide7 from "../ProjectImages/slide7.png";
import slide8 from "../ProjectImages/slide8.png";
import Carousel from "react-grid-carousel";
import { fakedata } from "../data/fake-data";
import Loader from "../Components/Loader";
import { CardType } from "../../components/PortfolioCompo/typings";
export default function SelectedProject({ projectObject }: CardType) {
  const { projectid } = useParams();
  const fetchFakeData = async () => {
    return Promise.resolve(fakedata);
  };

  const reponsiveBreakponts = [
    {
      breakpoint: 991,
      cols: 2,
      rows: 1,
      gap: 20
    }
  ];

  const { isLoading, error, data } = useQuery("fakedata", fetchFakeData);
  const cardsList = data && JSON.parse(data);
  console.log(projectid);
  interface Props {
    Image: string;
    id: string;
    title: string;
  }

  const filtreredCards = data && cardsList.filter((card: Props) => card.title !== projectid);

  return (
    <div className="container my-5">
      <h1 className="project-title">Branding Photonic</h1>
      <div className="project-container d-flex flex-column">
        <img className="mt-5" src={slide1} alt="photonic hero" />
        <img className="mt-5" src={slide2} alt="photonic section 2" />
        <img className="mt-5" src={slide3} alt="photonic section 3" />
        <img className="mt-5" src={slide4} alt="photonic section 4" />
        <img className="mt-5" src={slide5} alt="photonic section 5" />
        <img className="mt-5" src={slide6} alt="photonic section 6" />
        <img className="mt-5" src={slide7} alt="photonic section 7" />
        <img className="mt-5" src={slide8} alt="photonic section 8" />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <Carousel responsiveLayout={reponsiveBreakponts} cols={3} rows={1} gap={10} loop>
          {filtreredCards.map((card: Props) => (
            <Carousel.Item key={card.id}>
              <Link to={`/projects/${card.title}`}>
                <img src={card.Image} alt={card.title} className="w-100 h-100 rounded-2" />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}
