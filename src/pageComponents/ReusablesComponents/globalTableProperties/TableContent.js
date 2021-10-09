import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import SearchTable from './Search';

const TableContent = ({
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    changePage,
    prepareRow,
    buttonActivator,
    setSearch,
}) => (
    <>
        <table
            {...getTableProps()}
            className="r-table table"
        >
            <thead>
                <tr className="progress-banner tl-radius-table tr-radius-table h-100 border-search-bottom">
                    <th className="tl-radius-table">
                        {buttonActivator}
                        <SearchTable classPropertie="d-none-smax"
                            setSearch={setSearch}
                            changePage={changePage}
                        />
                    </th>
                    <th colSpan="2" className="tr-radius-table d-none-sm">
                        <SearchTable
                            setSearch={setSearch}
                            changePage={changePage}
                        />
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
                                        ${columnIndex === 0 && 'bl-radius-table'}
                                        ${columnIndex === headerGroup.headers.length && 'br-radius-table'}
                                        ${columnIndex === 1 && 'd-none-sm '}
                                        ${columnIndex > 1 && 'd-none-md '}
                                        text-white h-100
                                        dataTable-sorter
                                        `
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
                        <tr onClick={() => (row.original.id)} {...row.getRowProps()} className="tr-pointer-selector">
                            {row.cells.map((cell, cellIndex) => {
                                let variant
                                let text
                                switch (cell.value) {
                                    case "cancelled":
                                        variant = "danger"
                                        text = "cancelado"
                                        break
                                    case "pending":
                                        variant = "warning"
                                        text = "pendiente"
                                        break
                                    case "accepted":
                                        variant = "success"
                                        text = "aceptado"
                                        break
                                    default:
                                        variant = "warning"
                                        text = "pendiente"
                                }
                                return (
                                    <React.Fragment key={`td_${cellIndex}`}>
                                        {cell.column.type === "button"
                                            ?
                                            <>
                                                <td
                                                    style={{ maxWidth: '200px' }}
                                                    {...cell.getCellProps({
                                                        className: `${cell.column.cellClass} `,
                                                    })}
                                                    className={`
                                                    ${cellIndex > 1 && 'd-none-md '}
                                                    ${cellIndex === 1 && 'd-none-sm '}
                                                    text-center align-middle
                                                    `}
                                                >
                                                    <Badge className="pe-5 ps-5 pt-3 pb-3" bg={variant + "-light"} text={variant}>
                                                        {text}
                                                    </Badge>
                                                </td>
                                            </>
                                            :
                                            <td
                                                key={`td_${cellIndex}`}
                                                style={{ maxWidth: '200px' }}
                                                {...cell.getCellProps({
                                                    className: `${cell.column.cellClass} `,
                                                })}
                                                className={`
                                                ${cellIndex > 1 && 'd-none-md '}
                                                ${cellIndex === 1 && 'd-none-sm '}
                                                align-middle text-center
                                                `}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        }
                                    </React.Fragment>
                                )
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
)
export default TableContent;