import React from "react";

const TableHead = ({ headerGroups, rowsLength, tableHeader }) => (
    <>
        {headerGroups.map((headerGroup) => (
            <React.Fragment key={headerGroup.headers.length}>
                {tableHeader &&
                    <tr className="h-100 thead-2  ">
                        <th colSpan={rowsLength} className="bg-dark br-ltop-3 br-rtop-3 text-white">
                            {tableHeader}
                        </th>
                    </tr>
                }
                <tr {...headerGroup.getHeaderGroupProps()} className="h-100 thead-2">
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
                                colSpan="1"
                                style={{ borderBottomColor: 'gray' }}
                                key={`th_${columnIndex}`}
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                className={
                                    `${currentClass}  
                                        ${columnIndex === 0 && 'br-ltop-1 sm-br-rtop-1'}
                                        ${columnIndex === headerGroup.headers.length - 1 && 'br-rtop-1 '}
                                        ${columnIndex === 1 && 'd-none-sm md-br-rtop-1'}
                                        ${columnIndex > 1 && 'd-none-md '}
                                        h-100
                                        dataTable-sorter
                                        text-center
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
            </React.Fragment>
        ))}
    </>
)
export default TableHead;