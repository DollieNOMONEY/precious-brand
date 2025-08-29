"use client";
import React, { useState } from 'react';
import ProductPreview from '@/components/ClothingPreview/ProductPreview';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Dummy pagination component — you can wire it later
const Pagination = ({ totalPages = 5, initialPage = 1 }) => {
  const [page, setPage] = useState(initialPage);

  const goToPage = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) setPage(pageNum);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-10 space-x-2">
      <button
        onClick={() => goToPage(page - 1)}
        disabled={page === 1}
        className="p-2 bg-gray-200 rounded disabled:opacity-50"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {pages.map((num) => (
        <button
          key={num}
          onClick={() => goToPage(num)}
          className={`px-3 py-1 rounded font-[outfit] text-sm ${
            num === page
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => goToPage(page + 1)}
        disabled={page === totalPages}
        className="p-2 bg-gray-200 rounded disabled:opacity-50"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default function SearchPage() {
  const results = Array.from({ length: 24 }); // Replace with actual search data

  return (
    <div className="font-[outfit] text-gray-900 uppercase">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 2xl:max-w-[120rem] py-10">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide normal-case mb-8">
          Search Results
        </h2>

        {/* Optional: result count */}
        <p className="text-sm text-gray-500 mb-6 font-normal normal-case">
          Showing {results.length} items
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 mb-10">
          {results.map((_, index) => (
            <ProductPreview key={index} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination totalPages={5} />
      </div>
    </div>
  );
}
