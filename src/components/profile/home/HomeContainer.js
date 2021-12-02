import React from "react";
import { Button, Card, Col, ProgressBar, Row } from "react-bootstrap";
import { GlobalTable } from "../../GlobalTable";

export default function HomeContainer() {
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
        </Row>

    )
}