import React from "react";
import leftArrow from "../../../images/left-arrow.svg";
import rightArrow from "../../../images/right-arrow.svg";
import { usePagination } from "./usePagination";

import "../../../styles/Pagination.scss";

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
        <div className="pagination-area">
            <div className={currentPage === 1 ? "pagination-arrows disabled" : "pagination-arrows"}>
                <img src={leftArrow} onClick={() => onPrevious()} alt="" />
            </div>
            {paginationRange.map(range => {
                return (
                    <div
                        onClick={() => onPageChanged(range)}
                        key={range}
                        className={currentPage === range ? "pagination-page selected" : "pagination-page"}>
                        {range}
                    </div>
                )
            })}
            <div className={currentPage === lastPage ? "pagination-arrows disabled" : "pagination-arrows"}>
                <img src={rightArrow} onClick={() => onNext()} alt="" />
            </div>
        </div>
    )
};

export default React.memo(Pagination);