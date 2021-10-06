/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  Pagination
} from 'react-bootstrap';

const DataTablePagination = ({
  page,
  pages,
  canPrevious,
  canNext,
  defaultPageSize,
  onPageChange,
  onPageSizeChange,
  paginationMaxSize,
}) => {
  const [pageState, setPageState] = useState(page);

  useEffect(() => {
    setPageState(page);
  }, [page]);
  const getSafePage = (_page) => {
    let p = _page;
    if (Number.isNaN(_page)) {
      p = page;
    }
    return Math.min(Math.max(p, 0), pages - 1);
  };

  const changePage = (_page) => {
    const p = getSafePage(_page);

    if (p !== pageState) {
      setPageState(p);
      onPageChange(p);
    }
  };

  const pageClick = (pageIndex) => {
    changePage(pageIndex);
  };

  const renderPages = () => {
    const totalPages = pages;
    let endPage = pages;
    const currentPage = pageState;
    let startPage = 0;
    const maxSize = paginationMaxSize;

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
    const pageButtons = [];
    for (let i = startPage; i < endPage; i += 1) {
      const active = currentPage === i;
      pageButtons.push(
          <Pagination.Next key={i} active={active} onClick={() => pageClick(i)}>{i + 1}</Pagination.Next>
      );
    }
    return pageButtons;
  };

  return (
    <>
      <div className="text-center progress-banner br-radius-table h-100 
      bl-radius-table tr-radius-table tl-radius-table">
        <Pagination
          className="d-flex justify-content-center"
          size="sm"
          aria-label="Page navigation example"
        >
          <Pagination.Prev
            className="prev"
            style={{fontSize: "40px"}}
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
        </Pagination>
      </div>
    </>
  );
};
export default DataTablePagination;
