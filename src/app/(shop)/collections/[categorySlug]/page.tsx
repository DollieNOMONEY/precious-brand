"use client"
import React, { useState, useEffect } from 'react';
import ProductPreview from '@/components/ClothingPreview/ProductPreview';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pagination = ({ totalPages = 10, initialPage = 1 }) => {
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    if (initialPage >= 1 && initialPage <= totalPages) {
      setPage(initialPage);
    } else {
      setPage(1);
    }
  }, [initialPage, totalPages]);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;

    let startPage = Math.max(1, page - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push('...');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((p, index) => (
      <button
        key={index}
        onClick={() => typeof p === 'number' && goToPage(p)}
        disabled={p === '...'}
        className={`
          px-4 py-2 mx-1 rounded-md text-sm font-medium transition-all duration-200
          ${p === page
            ? 'bg-black text-white shadow-md'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-700'
          }
          ${p === '...' && 'cursor-default bg-transparent hover:bg-transparent text-gray-500'}
        `}
      >
        {p}
      </button>
    ));
  };

  return (
    <nav className="flex justify-center py-4 bg-white rounded-lg w-full md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto mt-8 p-2">
      <div className="flex flex-wrap justify-center items-center space-x-2 md:justify-center">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="p-2 mx-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="p-2 mx-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      </div>
    </nav>
  );
};

export default function CollectionPage() {
  const totalPages = 30;

  return (
    <div className="lg:flex flex-col items-center justify-center w-full uppercase">

      <div className='mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[120rem]'>

        <div className='mb-5'/>
        <h2 className="text-gray-700 mb-10 font-[outfit] text-3xl sm:text-4xl lg:text-5xl normal-case tracking-wide font-light">Collection Page</h2>
        <div className='grid grid-cols-2 xl:grid-cols-3 gap-1 lg:gap-2 w-full overflow-hidden mb-5'>
          {/* Render ProductPreview components */}
          {Array.from({ length: 30 }).map((_, index) => (
            <ProductPreview key={index} />
          ))}
        </div>

        {/* Integrated Pagination Component */}
        <Pagination totalPages={totalPages} />

        <div className='mb-15'/>
      </div>
    </div>
  )
}