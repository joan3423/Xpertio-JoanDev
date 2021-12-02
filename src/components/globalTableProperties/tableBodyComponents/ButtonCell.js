import React from "react";
import { Badge } from "react-bootstrap";

const ButtonCell = ({ 
    cell, 
    cellIndex, 
    variant,
    text
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
            <Badge className="pe-5 ps-5 pt-3 pb-3" bg={variant + "-light"} text={variant}>
                {text}
            </Badge>
        </td>
    </>
)
export default ButtonCell;