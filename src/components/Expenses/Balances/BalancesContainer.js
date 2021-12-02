import React from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import { GlobalTable } from '../../GlobalTable';

const BalancesContainer = ({ expenseReportData }) => {
    return (
        <>
            <GlobalTable
                tableHeader="Lista de saldos"
                clickableZone={false}
                dataTable={expenseReportData}
                colsComponent={
                    [
                        {
                            Header: 'Info del usuario',
                            accessor: 'name',
                            cellClass: 'list-item-heading w-40',
                            component:
                                <>
                                    <Row className="mb-3">
                                        <Col xs="6" className="text-start">
                                            <h3 className="text-muted text-sm mt-2">Usuario:</h3>
                                        </Col>
                                        <Col xs="6" className="text-end">
                                            <h3 className="text-muted text-sm mt-2">Luis pedraza</h3>
                                        </Col>
                                        <Col xs="auto">
                                            <h3 className="text-muted text-sm mt-2">Saldo disponible:</h3>
                                        </Col>
                                        <Col className="text-end text-lg">
                                            <h5 className="m-0">
                                                $487.600
                                            </h5>
                                        </Col>
                                    </Row>
                                    <ProgressBar now={78} variant="xpertio" />
                                </>,
                            type: "component"
                        },
                    ]
                }
            />
        </>
    )
}
export default BalancesContainer;