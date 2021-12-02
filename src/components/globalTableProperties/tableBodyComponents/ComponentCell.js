import React from "react";

const ComponentCell = ({ 
    cell, 
    cellIndex, 
}) => (
    <>
        <td
            style={{ maxWidth: '200px', minWidth: '200px' }}
            {...cell.getCellProps({
                className: `${cell.column.cellClass} `,
            })}
            className={`
            ${cellIndex > 1 && 'd-none-md'}
            ${cellIndex === 1 && 'd-none-sm'}
            text-center align-middle
            `}
        >
            {React.cloneElement(cell.column.component)}
        </td>
    </>
)
export default ComponentCell;