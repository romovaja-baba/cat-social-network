import { useMemo } from "react";
import { Dots } from "../Dots";

const range = (start: number, end: number) => {
    let length = end - start + 1;

    return Array.from({ length }, (_, index) => index + start);
};

export const usePagination = (totalCount:number, pageSize:number, siblingCount = 1, currentPage:number) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 5;

        // CASE 1

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        };

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        //CASE 2

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, Dots(), totalPageCount]
        };

        //CASE 3

        if (!shouldShowRightDots && shouldShowLeftDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);

            return [firstPageIndex, Dots(), ...rightRange];
        }

        //CASE 4

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, Dots(), ...middleRange, Dots(), lastPageIndex]
        }

    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};

