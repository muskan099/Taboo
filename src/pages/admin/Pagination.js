import React from "react";

function Pagination({ nftPerPage, totalNft, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalNft / nftPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(nftPerPage);
  console.log(totalNft);
  console.log("page numbers", pageNumbers);
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <div className="page-link" onClick={() => paginate(number)}>
                {number}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
