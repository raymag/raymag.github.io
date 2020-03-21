import React from 'react';
import './styles.css';

export default function PageController({previousPage, nextPage, currentPage, pagesNumber}){
    return (
        <div className="pageController">
            <button onClick={previousPage} className="pageButton">&lt;</button>
            <span>{currentPage} of {pagesNumber}</span>
            <button onClick={nextPage} className="pageButton">&gt;</button>
        </div>
    )
}