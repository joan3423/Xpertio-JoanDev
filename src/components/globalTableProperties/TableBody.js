import React from "react";
import ButtonCell from "./tableBodyComponents/ButtonCell";
import NormalCell from "./tableBodyComponents/NormalCell";

const TableBody = ({ page, prepareRow }) => (
    <>
        {page.map((row) => {
            prepareRow(row);
            return (
                <tr key={row.length} onClick={() => (row.original.id)} {...row.getRowProps()} className="tr-pointer-selector">
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
                                {cell.column.type === "button"
                                    ?
                                    <ButtonCell
                                        cell={cell}
                                        cellIndex={cellIndex}
                                        variant={variant}
                                        text={text}
                                    />
                                    :
                                    <NormalCell
                                        cell={cell}
                                        cellIndex={cellIndex}
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
export default TableBody;