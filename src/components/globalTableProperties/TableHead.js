import React from "react";

const TableHead = ({ headerGroups }) => (
    <>
        {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.headers.length} {...headerGroup.getHeaderGroupProps()} className="progress-banner h-100 thead-2">
                {headerGroup.headers.map((column, columnIndex) => {
                    let currentClass
                    if (column.isSorted) {
                        if (column.isSortedDesc) {
                            currentClass = 'sorted-desc'
                        } else {
                            currentClass = 'sorted-asc'
                        }
                    } else {
                        currentClass = ''
                    }
                    return (
                        <th
                            key={`th_${columnIndex}`}
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                            className={
                                `${currentClass}  
                                        ${columnIndex === 0 && 'br-ltop-1 '}
                                        ${columnIndex === headerGroup.headers.length - 1 && 'br-rtop-1 '}
                                        ${columnIndex === 1 && 'd-none-sm '}
                                        ${columnIndex > 1 && 'd-none-md '}
                                        text-white h-100
                                        dataTable-sorter
                                        p-4
                                        `
                            }
                        >
                            {column.render('Header')}
                            <span />
                        </th>
                    )
                })}
            </tr>
        ))}
    </>
)
export default TableHead;