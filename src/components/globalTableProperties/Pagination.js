/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  Pagination
} from 'react-bootstrap';

const DataTablePagination = ({
  page,
  pages,
  pageState,
  setPageState,
  canPrevious,
  canNext,
  changePage,
  paginationMaxSize,
}) => {
  
  const [endNumber, setendNumber] = useState(5)
  const [maxNumber, setMaxNumber] = useState(6)
  const [startNumber, setStartNumber] = useState(0)

  useEffect(() => {
    setPageState(page);
  }, [page]);

  let pageButtons = [];
  const totalPages = pages;
  let endPage = pages;
  const currentPage = pageState;
  let startPage = 0;
  const maxSize = paginationMaxSize;

  const pageClick = (pageIndex) => {
    changePage(pageIndex);
  };

  const renderPages = () => {
    if (maxSize) {
      if (endPage > maxSize) {
        startPage = Math.max(currentPage + 1 - Math.floor(maxSize / 2), 1);
        endPage = startPage + maxSize - 1;
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
        startPage -= 1;
      }
    }
    for (let i = startNumber; i < endNumber; i += 1) {
      const a = i + 1;
      while (a <= endPage) {
        const active = currentPage === i;
        if (pageState > endNumber - 1) {
          setStartNumber(startNumber + 5)
          setendNumber(endNumber + 5)
          setMaxNumber(maxNumber + 5)
          changePage(page)
          pageButtons = pageButtons.splice(0, pageButtons.length);
        } else if (pageState < startNumber) {
          setStartNumber(startNumber - 5)
          setendNumber(endNumber - 5)
          setMaxNumber(maxNumber - 5)
          changePage(page)
          pageButtons = pageButtons.splice(0, pageButtons.length);
        }
        pageButtons.push(
          <Pagination.Next key={i} active={active} onClick={() => pageClick(i)}>
            {i + 1}
          </Pagination.Next>
        );
        break;
      }

    }
    return pageButtons;
  };

  return (
    <>
      <div className="text-center h-100 table-pagination">
        <Pagination
          className="d-flex justify-content-center"
          size="sm"
          aria-label="Page navigation example"
        >
          <Pagination.First
            onClick={() => {
              if (!canPrevious) return;
              changePage(0);
            }}
          />
          <Pagination.Prev
            className="prev"
            style={{ fontSize: "40px" }}
            onClick={() => {
              if (!canPrevious) return;
              changePage(page - 1);
            }}
            disabled={!canPrevious}
          />

          {renderPages()}
          <Pagination.Next
            className="next"
            onClick={() => {
              if (!canNext) return;
              changePage(page + 1);
            }}
            disabled={!canNext}
          />
          <Pagination.Last
            onClick={() => {
              if (!canNext) return;
              changePage(endPage);
            }}
          />
        </Pagination>
      </div>
    </>
  );
};
export default DataTablePagination;
