import React from "react";
import styles from "./Pagination.module.css";
import leftArrow from "../../images/left-arrow.svg";
import rightArrow from "../../images/right-arrow.svg";

import { usePagination } from "./usePagination";

const Pagination = ({ onPageChanged, totalCount, siblingCount = 1, currentPage, pageSize }) => {

    const paginationRange = usePagination(
        totalCount || 0,
        pageSize || 0,
        siblingCount || 1,
        currentPage || 1
    );
    
    if (currentPage === 0 || paginationRange.length < 2) return null;

    const onNext = () => { onPageChanged(currentPage + 1); }
    const onPrevious = () => { onPageChanged(currentPage - 1); }
    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <div className={styles.pages}>
            <span className={currentPage === 1 ? styles.disabled : styles.arrowsContainer}>
                <img className={styles.arrows} src={leftArrow} onClick={() => onPrevious()} alt=""/>
            </span>
            {paginationRange.map(range => {
                return (
                    <span
                        onClick={() => onPageChanged(range)}
                        className={currentPage === range && styles.selectedPage}>
                        {range}
                    </span>
                )
            })}
            <span className={currentPage === lastPage ? styles.disabled: styles.arrowsContainer}>
                <img className={styles.arrows} src={rightArrow} onClick={() => onNext()}  alt=""/>
            </span>
        </div>
    )


};

export default Pagination;