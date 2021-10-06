import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import DatatablePagination from './Pagination';

function Table({ columns, allData, defaultPageSize = 5, buttonActivator }) {
    const [search, setSearch] = useState("");
    const [data, setAllData] = useState(allData)
    const [newData, setNewData] = useState("")
    useEffect(() => {
        const thefilter = allData.filter((itemsFiltered) => {
            const newArray = Object.values(itemsFiltered);
            if (search === "") {
                return itemsFiltered
            } 
            if (newArray[0] && newArray[0].toString().toLowerCase().includes(search.toLowerCase())
                || newArray[1] && newArray[1].toString().toLowerCase().includes(search.toLowerCase())
                || newArray[2] && newArray[2].toString().toLowerCase().includes(search.toLowerCase())
                || newArray[3] && newArray[3].toString().toLowerCase().includes(search.toLowerCase())) {
                return itemsFiltered
            }
            return false
        })
        console.log(thefilter)
        setAllData(thefilter)
    }, [search])
    const hasWindow = typeof window !== 'undefined';
    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    const {
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: defaultPageSize },
        },
        useSortBy,
        usePagination
    );


    return (
        <Card className="card-table">
            <table
                {...getTableProps()}
                className="r-table table"
            >
                <thead>
                    <tr className="progress-banner tl-radius-table tr-radius-table h-100">
                        <th colSpan="1" className="tl-radius-table">
                            {buttonActivator}
                        </th>
                        <th colSpan="2" className="tr-radius-table">
                            <div className="d-flex justify-content-end w-100">
                                <div className="search">
                                    <input
                                        name="searchKeyword"
                                        id="searchKeyword"
                                        placeholder="search"
                                        onChange={(event) => { setSearch(event.target.value) }}
                                    />
                                    <span
                                        className="search-icon"
                                    >
                                        <i className="simple-icon-magnifier" />
                                    </span>
                                </div>
                            </div>
                        </th>
                    </tr>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} className="progress-banner bl-radius-table br-radius-table h-100">
                            {headerGroup.headers.map((column, columnIndex) => (
                                <th
                                    key={`th_${columnIndex}`}
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        `${column.isSorted
                                            ? column.isSortedDesc
                                                ? 'sorted-desc'
                                                : 'sorted-asc'
                                            : ''
                                        }  
                                            ${columnIndex === 0
                                            ? 'bl-radius-table'
                                            : ''
                                        }
                                            ${columnIndex === headerGroup.headers.length - 1
                                            ? 'br-radius-table'
                                            : ''
                                        }
                                        ${columnIndex === 1 &&
                                        "d-none d-xs-table-cell"
                                        }
                                            ${columnIndex > 1 &&
                                        "d-none d-md-table-cell"
                                        }
                                            text-white h-100`
                                    }
                                >
                                    {column.render('Header')}
                                    <span />
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr onClick={() => (row.original.id)} {...row.getRowProps()} className="pointer-selector-normal">
                                {row.cells.map((cell, cellIndex) => {
                                    return (
                                        <td
                                            colSpan={`
                                        ${(windowDimensions > 510)
                                                    ? "1"
                                                    : "2"
                                                }
                                        `}
                                            colSpan={`
                                        2
                                        `}
                                            key={`td_${cellIndex}`}
                                            {...cell.getCellProps({
                                                className: `${cell.column.cellClass} `,
                                            })}

                                            className={`
                                        ${cellIndex === 1 &&
                                                "d-none d-xs-table-cell"
                                                }
                                        ${cellIndex > 1 &&
                                                "d-none d-md-table-cell"
                                                }
                                        `}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <DatatablePagination
                page={pageIndex}
                pages={pageCount}
                canPrevious={canPreviousPage}
                canNext={canNextPage}
                defaultPageSize={pageSize}
                onPageChange={(p) => gotoPage(p)}
                onPageSizeChange={(s) => setPageSize(s)}
                paginationMaxSize={pageCount}
            />

        </Card>
    );
}
export const GlobalTable = ({ dataTable, colsComponent, buttonActivator }) => {
    const cols = React.useMemo(
        () => colsComponent,
        []
    );
    return (
        <div className="mb-4">
            <Table columns={cols} allData={dataTable} buttonActivator={buttonActivator} />
        </div>
    );
};