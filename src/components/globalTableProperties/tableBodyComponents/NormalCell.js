import React from "react";

const NormalCell = ({ cell, cellIndex }) => (
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
        {cell.render('Cell')}
    </td>
)
export default NormalCell;