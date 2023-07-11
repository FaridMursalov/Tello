import React, { useEffect, useState } from "react";
import styles from "./pageNation.module.scss";
import before from "../../assets/icons/before2svg.svg";
import next from "../../assets/icons/next.svg";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const PageNation = ({
  productsLength,
  category,
  pageLimit,
  currentPage,
  setCurrentPage,
}) => {
  const length = Math.ceil(productsLength / pageLimit);
  const navigate = useNavigate();



  const handleNextPage = () => {
    console.log('sgdhgdh')
    if (currentPage < length) {
      setCurrentPage(currentPage + 1);
    }
  };


  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {length !== 1 && (
        <div className={styles.page}>
          <ul>
            <li className={styles.before}>
              <span onClick={handlePrevPage}>
                <img src={before} alt="" />
              </span>
            </li>
            {[...new Array(length)].map((item, index) => (
              <li
              onClick={()=>setCurrentPage(index+1)  }
                key={index}
                className={currentPage === index + 1 ? styles.activePage : ""}
              >
                <span  >{index + 1}</span>
              </li>
            ))}
            <li className={styles.next}>
              <span
                onClick={handleNextPage}
              >
                <img src={next} alt="" />
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PageNation;
