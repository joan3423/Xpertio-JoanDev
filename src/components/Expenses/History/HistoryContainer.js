import React from 'react';
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { GlobalTable } from '../../GlobalTable';

const HistoryContainer = ({ expenseReportData }) => {
    return (
        <>
            <GlobalTable
                clickableZone={false}
                tableHeader="Historial de aprobación"
                dataTable={expenseReportData}
                colsComponent={
                    [
                        {
                            Header: 'Fecha de aprobación',
                            accessor: 'fechafactura',
                            cellClass: 'list-item-heading w-40',
                            type: "normal"
                        },
                        {
                            Header: 'Tipo de documento',
                            accessor: 'tipodocumento',
                            cellClass: 'list-item-heading w-40',
                            type: "normal"
                        },
                        {
                            Header: 'Nombre de la empresa',
                            accessor: 'razonsocial',
                            cellClass: 'list-item-heading w-40',
                            type: "normal"
                        },
                        {
                            Header: 'Valor aprobado',
                            accessor: 'totalbalance',
                            cellClass: 'list-item-heading w-40',
                            type: "normal"
                        },
                        {
                            Header: 'Descargar',
                            accessor: 'state',
                            cellClass: 'list-item-heading w-40',
                            component:
                                <Button className="p-3">
                                    <h4 className="m-0 p-0 align-middle ">
                                        <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faDownload} />
                                    </h4>
                                </Button>,
                            type: "component"
                        }
                    ]
                }
            />
        </>
    )
}
export default HistoryContainer;