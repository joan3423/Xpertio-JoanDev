import React from "react";
import ButtonCell from "./tableBodyComponents/ButtonCell";
import NormalCell from "./tableBodyComponents/NormalCell";
import CollapsibleCell from "./tableBodyComponents/CollapsibleCell";
import ComponentCell from "./tableBodyComponents/ComponentCell";

const TableBody = ({ 
    page, 
    prepareRow, 
    isCollapsible, 
    clickableZone, 
    clickFunction 
}) => {
    return (
        <>
            {page.map((row, rowIndex) => {
                prepareRow(row);
                return (
                    <tr key={row.length} onClick={() => {clickableZone === true && clickFunction(row.original.id);}} {...row.getRowProps()}
                        className={`${isCollapsible === true ? "border-0" : "tr-pointer-selector"}`}>
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
                                <React.Fragment key={`td_${row.cells.length}_${cell.value}`}>
                                    {cell.column.type === "button" &&
                                        <ButtonCell
                                            cell={cell}
                                            cellIndex={cellIndex}
                                            variant={variant}
                                            text={text}
                                        />
                                    }
                                    {cell.column.type === "normal" &&
                                        <NormalCell
                                            cell={cell}
                                            cellIndex={cellIndex}
                                        />
                                    }
                                    {cell.column.type === "component" &&
                                        <ComponentCell 
                                            cell={cell}
                                            cellIndex={cellIndex}
                                        />
                                    }
                                    {isCollapsible && isCollapsible === true &&
                                        <CollapsibleCell
                                            cell={cell}
                                            cellIndex={cellIndex}
                                            page={page}
                                            row={row}
                                            rowIndex={rowIndex}
                                        />
                                    }
                                </React.Fragment>
                            )
                        })}
                    </tr>
                );
            })}
        </>
    )
}
export default TableBody;