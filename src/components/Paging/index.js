/* eslint-disable react/prop-types */
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paging = ({ perPage, length, paginate, className }) => {
  const pageNumbers = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(length / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className={className} aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      {
        pageNumbers.map(number => (
        <PaginationItem onClick={() => paginate(number)} key={number}>
          <PaginationLink href="#">
            {number}
          </PaginationLink>
        </PaginationItem>
        ))
      }
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>
  );
}

export default Paging;