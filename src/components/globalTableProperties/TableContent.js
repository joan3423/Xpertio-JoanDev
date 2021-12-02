import React, { useEffect } from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';

const TableContent = ({
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    isCollapsible,
    clickableZone,
    clickFunction,
    tableClasses,
    tableHeader
}) => {

    let rowsLength = headerGroups.map((headers) => {
            return headers.headers.length
        })

    return (
        <>
            <table
                {...getTableProps()}
                className={` ${tableClasses ? tableClasses : "r-table table bg-white br-lbottom-5 br-rbottom-5 br-rtop-5 br-ltop-5 shadow-lg"}`}
            >
                <thead>
                    <TableHead
                    tableHeader={tableHeader}
                    rowsLength={rowsLength}
                        headerGroups={headerGroups}
                    />
                </thead>
                {console.log(headerGroups)}
                <tbody {...getTableBodyProps()}>
                    {page.length === 0
                        ?
                        <tr>
                            <th colSpan={rowsLength} className="p-5 text-center">
                                No se a encontrado ningun registro
                            </th>
                        </tr>
                        :
                        <TableBody
                            page={page}
                            prepareRow={prepareRow}
                            isCollapsible={isCollapsible}
                            clickableZone={clickableZone}
                            clickFunction={clickFunction}
                        />
                    }
                </tbody>
            </table>
        </>
    )
}
export default TableContent;