import React from "react";
import { Button, Card, Col, ProgressBar, Row } from "react-bootstrap";
import { GlobalTable } from "../../GlobalTable";

export default function HomeContainer({ movementHistory }) {
    return (
        <Row className="m-0 p-0">
            <Col className="m-0 pe-4" xs={4}>
                <Card className="br-5">
                    <Card.Header className="p-3">
                        <div className="mb-2">Saldo mensual disponible:</div>
                        <h4 className="mb-4">$500.000</h4>
                        <ProgressBar now={95} variant="xpertio" />
                    </Card.Header>
                    <Card.Body>
                        <Button variant="white" className="border-0 w-100 br-3 custom-btn">
                            <strong>
                                Solicitar mas
                            </strong>
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="m-0 p-0" xs={8}>
                <Card className="br-5">
                    <Card.Header className="p-3 shadow-0 separator" >
                        <h4 className="m-0">Actividad</h4>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <GlobalTable
                            tableClasses="p-0 separator shadow-0"
                            classSearchPropertie="w-100 br-0 bg-light text-white pb-0 p-0"
                            dataTable={movementHistory}
                            colsComponent={
                                [
                                    {
                                        Header: 'Tipo',
                                        accessor: 'type',
                                        cellClass: 'list-item-heading w-40',
                                        type: "normal"
                                    },
                                    {
                                        Header: 'Costo',
                                        accessor: 'cost',
                                        cellClass: 'text-muted  w-100',
                                        type: "normal"

                                    },
                                    {
                                        Header: 'Estado',
                                        accessor: 'state',
                                        cellClass: 'text-muted  w-40',
                                        type: "button"
                                    }
                                ]
                            }
                        />
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}