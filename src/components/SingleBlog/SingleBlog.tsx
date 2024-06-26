import React, { useEffect } from "react";
import styles from "../SingleBlog/SingleBlog.module.scss";
import images from "./../../data/images";
import { useLocation, useParams } from "react-router-dom";
import { blogPosts } from "../Blog/Blog";
import { LuCalendarDays } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";

const SingleBlog = () => {
  const { blogId } = useParams();
  const blog = blogPosts.find((blog) => blog.id.toString() === blogId);

  return (
    <div className={styles.portofoliuContainer}>
      <Helmet>
        <meta name="description" content="SingleBlog" />
      </Helmet>
      {blog && (
        <div className={styles.blogSection}>
          <div className={styles.headTitle}>
            <div className={styles.headTitleBlog}>{blog.title}</div>
            <div className={styles.greenBtn}>
              <button>{blog.category}</button>
            </div>
            <div className={styles.infos}>
              <div className={styles.userContainer}>
                <img src={images.homepage.iconWhite} alt="icon" />
                <div>{blog.author}</div>
              </div>
              <div className={styles.dataContainer}>
                <div>
                  <LuCalendarDays />
                </div>
                <div>{blog.date}</div>
              </div>
            </div>
          </div>

          <div className={styles.blogImages}>
            <div className={styles.bigImg}>
              <img src={blog.imageUrl} alt="img" />
            </div>
            {/* <div className={styles.smallImg}>
              <img src={blog.imageUrl2} alt="img" />
              <img src={blog.imageUrl3} alt="img" />
              <img src={blog.imageUrl4} alt="img" />
            </div> */}
          </div>

          <div className={styles.blogDescription}>{blog.moreDescription}</div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
