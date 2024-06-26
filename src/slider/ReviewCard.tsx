import styles from "./ReviewCard.module.scss";
import React from "react";

interface IProps {
  styler?: string;
  img: string;
}

const ReviewCard = ({ styler, img }: IProps) => {
  return (
    <div
      className={` ${styles.cardReview}   ${
        styler === "onFocus" ? styles.onFocus : styler === "hide" ? styles.hideThis : ""
      }  `}
    >
      <img src={img} alt="/" />
    </div>
  );
};
export default ReviewCard;
