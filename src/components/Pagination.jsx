import React, { useState } from "react";
import { numbersPage } from "../helpers/handlePagination";
import "./styles/Pagination.css";

const Pagination = ({ setPage, location, RESIDENTS_PERPAGE, page }) => {
    const allPageNumbers = numbersPage(location, RESIDENTS_PERPAGE);

    const renderPageGroup = (pageNumbers, groupIndex) => (
        <ul className="pagination" key={groupIndex}>
            {pageNumbers.map((numberPage) => (
                <li
                    className={`pagination__li ${numberPage === page ? 'currentPage' : ''}`}
                    onClick={() => setPage(numberPage)}
                    key={`${groupIndex}-${numberPage}`}
                >
                    {numberPage}
                </li>
            ))}
        </ul>
    );

    const renderPagination = () => {
        const totalGroups = Math.ceil(allPageNumbers.length / 5);
    
        return Array.from({ length: totalGroups }, (_, index) => {
            const start = index * 5;
            const end = start + 5;
            return renderPageGroup(allPageNumbers.slice(start, end), index);
        });
    };

    return <div className="pagination-container">{renderPagination()}</div>;
};

export default Pagination;
