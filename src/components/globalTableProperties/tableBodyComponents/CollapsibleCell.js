import React from "react";
import Accordion from '../../Accordion';

const CollapsibleCell = ({
    cell,
    cellIndex,
    page,
    row,
    rowIndex,
}) => {
    const accordionTitle = cell.column.accordionComponent.Header
    const accordionAccessor = row.original[cell.column.accordionComponent.accessor]
    return (
        <>
            <td
                style={{ maxWidth: '200px', minWidth: '200px' }}
                {...cell.getCellProps({
                    className: `${cell.column.cellClass} `,
                })}
                className={`
            ${cellIndex > 1 && 'd-none-md'}
            ${cellIndex === 1 && 'd-none-sm'}
            text-center align-middle p-0
            `}
            >
                <Accordion
                    name={cell.render('Cell')}
                    eventKey={1}
                    classBodyVariant="p-0"
                    AccordionBody={
                        <table className="r-table table mb-0">
                            <thead>
                                <tr className="progress-banner custom-btn h-100 thead-2">
                                    <th className="dataTable-sorter">
                                        {accordionTitle}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="p-0">
                                {accordionAccessor.map((permits, index) => (
                                    <tr key={index} className="tr-pointer-selector">
                                        <td className={`${index === accordionAccessor.length - 1 && "border-bottom-0"}`}>
                                            <div style={{textAlign: 'left'}} className="w-100">
                                                {permits.permit}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                    classNameVariant={`
                    ${page.length - 1 === rowIndex
                            ?
                            'bg-transparent br-rbottom-1 br-lbottom-1 br-rbottom-1 br-ltop-0 br-rtop-0'
                            :
                            'br-lbottom-0 br-rbottom-0 br-ltop-0 br-rtop-0'
                        }
            `}
                />
            </td>
        </>
    )
}
export default CollapsibleCell;