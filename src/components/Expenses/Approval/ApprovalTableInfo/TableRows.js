import React from "react"
import { Card, Table } from "react-bootstrap"
import Dropzone from "../../../PageHeader";
import Editor from "../../../Editor"

const TableRows = ({
    reportData,
    expenseGeneralData,
    expenseBilling,
}) => (
    <Table className="table table-borderless card-text">
        <tbody>
            <tr>
                <td colSpan="2" className="p-0">
                    <Card.Header className="rounded-0 p-3">
                        <h5 className="text-muted mt-2">Informacion General</h5>
                    </Card.Header>
                </td>
            </tr>
            {expenseGeneralData.map((generalData) => (
                <tr className="text-muted">
                    <th className="fw-normal">{generalData.name}</th>
                    <th className="text-end">
                        {generalData.data}
                    </th>
                </tr>
            ))}
            <tr>
                <td colSpan="2" className="p-0">
                    <Card.Header className="rounded-0 p-3">
                        <h5 className="text-muted mt-2">Facturación</h5>
                    </Card.Header>
                </td>
            </tr>
            {expenseBilling.map((billing) => (
                <tr className="text-muted">
                    <th className="fw-normal">{billing.name}</th>
                    <th className="text-end">
                        {billing.data}
                    </th>
                </tr>
            ))}
            <tr>
                <td colSpan="2" className="p-0">
                    <Card.Header className="rounded-0 p-3">
                        <h5 className="text-muted mt-2">Archivos y descripción</h5>
                    </Card.Header>
                </td>
            </tr>
            <tr className="text-muted">
                <th className="fw-normal">Archivos</th>
            </tr>
            <tr>
                <td colSpan="2" className="pt-0 pb-0">
                    <Dropzone
                        className="p-0"
                        stepFileValues={reportData.files}
                        textDefault="No se a añadido ningun archivo"
                        clickeableState={false}
                    />
                </td>
            </tr>
            <tr className="text-muted">
                <th className="fw-normal">Descripción</th>
            </tr>
            <tr className="text-muted ">
                <td colSpan="2" className="fw-normal pt-0 pb-4">
                    <Editor readOnly={true} className="border" text={reportData.description} />
                </td>
            </tr>
        </tbody>
    </Table>
)

export default TableRows;