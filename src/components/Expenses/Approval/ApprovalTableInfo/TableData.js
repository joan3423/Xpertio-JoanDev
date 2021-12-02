import React, { useEffect, useState } from "react";
import { Card, Table, Col, Button, Row } from "react-bootstrap";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';
import TableRows from "./TableRows";

const TableData = ({
    expenseReportData,
}) => {
    const [loaded, setLoaded] = useState(false)
    const router = useRouter();
    useEffect(() => {
        if (router.isReady) {
            const dataExpenseFound = expenseReportData.filter(expenseData => expenseData.id === router.query.expenseId)
            if (dataExpenseFound.length === 1) {
                return setLoaded(true)
            } else if (dataExpenseFound.length === 0) {
                return router.push('/404');
            }
        }
    }, [router.isReady])
    if (!loaded) { return false }
    if (router.isReady) {
        return (
            <Card className="card-table rounded-0 shadow-none mb-3">
                <Card.Body className="rounded-0">
                    <div className="table-responsive rounded-0">
                        <Table className="table table-borderless card-text">
                            <tbody>
                                {expenseReportData.map((reportData) => {

                                    let expenseGeneralData
                                    let expenseBilling

                                    switch (reportData.type) {
                                        case "Factura":
                                            expenseGeneralData = [
                                                { name: "Email", data: reportData.email },
                                                { name: "Nit", data: reportData.nit },
                                                { name: "Razon social", data: reportData.razonsocial },
                                                { name: "Telefono", data: reportData.telefono },
                                                { name: "Dirección", data: reportData.direccion },
                                                { name: "Numero de la Factura", data: reportData.numerofactura },
                                                { name: "Codigo operativo", data: reportData.codigooperativo },
                                                { name: "Fecha de realización", data: reportData.fechafactura }
                                            ]
                                            expenseBilling = [
                                                { name: "subtotal", data: reportData.subtotal },
                                                { name: "IVA", data: reportData.iva },
                                                { name: "Total", data: reportData.totalbalance },
                                            ]
                                            break;
                                        case "Documentos soporte":
                                            expenseGeneralData = [
                                                { name: "Nit o cc", data: reportData.nit },
                                                { name: "Nombre", data: reportData.nombre },
                                                { name: "Telefono", data: reportData.telefono },
                                                { name: "Dirección", data: reportData.direccion },
                                                { name: "Fecha de realización", data: reportData.fechafactura },
                                                { name: "Codigo operativo", data: reportData.codigooperativo },
                                            ]
                                            expenseBilling = [
                                                { name: "Total", data: reportData.total },
                                            ]
                                            break;
                                        case "Tiquetes":
                                            expenseGeneralData = [
                                                { name: "Nit", data: reportData.nit },
                                                { name: "Nombre", data: reportData.nombre },
                                                { name: "Telefono", data: reportData.telefono },
                                                { name: "Dirección", data: reportData.direccion },
                                                { name: "Numero del ticket", data: reportData.numeroticket },
                                                { name: "Codigo operativo", data: reportData.codigooperativo },
                                            ]
                                            expenseBilling = [
                                                { name: "Total", data: reportData.total },
                                            ]
                                            break;
                                        default:
                                            break;
                                    }
                                    return reportData.id === router.query.expenseId && (
                                        <React.Fragment key={reportData.id}>
                                            <TableRows
                                                reportData={reportData}
                                                expenseGeneralData={expenseGeneralData}
                                                expenseBilling={expenseBilling}
                                            />
                                        </React.Fragment >
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
                <Card.Footer className="bg-white pt-0 pb-4">
                    <Row>
                        <Col className="text-center" xs={6}>
                            <Button>
                                Aprobar <FontAwesomeIcon className="svg-icon-md align-middle" icon={faCheckCircle} />
                            </Button>
                        </Col>
                        <Col className="text-center" xs={6}>
                            <Button>
                                Rechazar <FontAwesomeIcon className="svg-icon-md align-middle" icon={faTrash} />
                            </Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        )
    }
}

export default TableData;