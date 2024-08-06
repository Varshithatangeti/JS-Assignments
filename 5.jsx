`//5.Implement a react component that displays a list of items with pagination`
import React, { useState } from 'react';
const PaginatedList = ({ itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <h1>Paginated List</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            disabled={currentPage === pageNumber}
            style={{ margin: '0 5px', padding: '5px 10px', cursor: 'pointer', backgroundColor: currentPage === pageNumber ? '#007bff' : '#fff', color: currentPage === pageNumber ? '#fff' : '#000', border: '1px solid #007bff', borderRadius: '5px' }}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginatedList;
