import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';

const TableContent = ({
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
}) => (
    <>
        <table
            {...getTableProps()}
            className="r-table table bg-white br-lbottom-1 br-rbottom-1 br-rtop-1 br-ltop-1 shadow-lg"
        >
            <thead>
                <TableHead 
                    headerGroups={headerGroups}
                />
            </thead>

            <tbody {...getTableBodyProps()} className="">
                <TableBody 
                    page={page}
                    prepareRow={prepareRow}
                />
            </tbody>
        </table>
    </>
)
export default TableContent;