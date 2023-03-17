import React from "react";
import leftArrow from "../../../images/left-arrow.svg";
import rightArrow from "../../../images/right-arrow.svg";
import { usePagination } from "./usePagination";

import "../../../styles/Pagination.scss";

interface Props {
    onPageChanged: (arg: number) => void,
    totalCount: number,
    siblingCount: number,
    currentPage: number,
    pageSize: number
}

const Pagination = ({ onPageChanged, totalCount, siblingCount, currentPage, pageSize }: Props) => {

    let paginationRange = usePagination(
        totalCount || 1,
        pageSize || 1,
        siblingCount || 1,
        currentPage || 1
    );

    paginationRange = paginationRange!;

    if (currentPage === 0 || paginationRange.length < 2) return null;

    const onNext = () => { onPageChanged(currentPage + 1); }
    const onPrevious = () => { onPageChanged(currentPage - 1); }
    const onNumberClick = (page: number) => { onPageChanged(page) }
    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <div className="pagination-area">
            <div className={currentPage === 1 ? "pagination-arrows disabled" : "pagination-arrows"}>
                <img src={leftArrow} onClick={() => onPrevious()} alt="" />
            </div>
            {paginationRange.map((page, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => {
                            if (typeof page === "number") onNumberClick(page)
                        }}
                        className={currentPage === page ? "pagination-page selected" : "pagination-page"}>
                        {page}
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