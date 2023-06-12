import React, { useState } from 'react';
import styles from './pageNation.module.scss';
import before from '../../assets/icons/before2svg.svg';
import next from '../../assets/icons/next.svg';
import { Link } from 'react-router-dom';

const PageNation = ({productsLength,category, pageLimit}) => {
  const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa numarası state'i
  const data = []; // Veri dizisi
const length = parseInt(productsLength / pageLimit)
// console.log(length);
for (let i = 1; i<= length ; i++) {
  const element = [i];
  data.push(element)
}
console.log(data.length);

  const handleNextPage = () => {
    if (currentPage <= data.length) {
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
      <div className={styles.page}>
        <ul>
          <li className={styles.before}>
            <a href="#" onClick={handlePrevPage}>
              <img src={before} alt="" />
            </a>
          </li>
          {data.map((item, index) => (
            <li key={index} className={currentPage === index + 1 ? styles.activePage : ''}>
              <a href={`/products/${category}/${index+1}`} >
                {index + 1}
              </a>
            </li>
          ))}
          <li className={styles.next}>
            <a href={`/products/${category}/${currentPage}`} onClick={handleNextPage}>
              <img src={next} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageNation;