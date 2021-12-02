import React, { useEffect } from "react"
import { Card, Button } from "react-bootstrap"
import { connect } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import Step4Table from "./Step4table";

const Step4container = ({
    expenseReportData,
    expenseSelectorType,
    expenseReportBalance,
    addExpenseReport,
    cleanExpenseReport,
    setExpenseSelectorType,
    setExpenseReportBalance,
    handleBack,
    handleNext,
    steps,
    activeStep,

}) => {

    const id = uuidv4();
    const date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const actualdate = year + "/" + month + "/" + day + " " + "a las" + " " + hr + ":" + min + ":" + sec;

    let expenseGeneralData
    let expenseBilling

    switch (expenseSelectorType) {
        case "Factura":
            expenseGeneralData = [
                { name: "Email", data: expenseReportData.email },
                { name: "Nit", data: expenseReportData.nit },
                { name: "Razon social", data: expenseReportData.razonsocial },
                { name: "Telefono", data: expenseReportData.telefono },
                { name: "Dirección", data: expenseReportData.direccion },
                { name: "Numero de la Factura", data: expenseReportData.numerofactura },
                { name: "Codigo operativo", data: expenseReportData.codigooperativo },
                { name: "Fecha de realización", data: expenseReportData.fechafactura }
            ]
            expenseBilling = [
                { name: "subtotal", data: expenseReportData.subtotal },
                { name: "IVA", data: expenseReportData.iva },
                { name: "Total", data: expenseReportData.totalbalance },
            ]
            break;
        case "Documentos soporte":
            expenseGeneralData = [
                { name: "Nit o cc", data: expenseReportData.nit },
                { name: "Nombre", data: expenseReportData.nombre },
                { name: "Telefono", data: expenseReportData.telefono },
                { name: "Dirección", data: expenseReportData.direccion },
                { name: "Fecha de realización", data: expenseReportData.fechafactura },
                { name: "Codigo operativo", data: expenseReportData.codigooperativo },
            ]
            expenseBilling = [
                { name: "Total", data: expenseReportData.total },
            ]
            break;
        case "Tiquetes":
            expenseGeneralData = [
                { name: "Nit", data: expenseReportData.nit },
                { name: "Nombre", data: expenseReportData.nombre },
                { name: "Telefono", data: expenseReportData.telefono },
                { name: "Dirección", data: expenseReportData.direccion },
                { name: "Numero del ticket", data: expenseReportData.numeroticket },
                { name: "Codigo operativo", data: expenseReportData.codigooperativo },
            ]
            expenseBilling = [
                { name: "Total", data: expenseReportData.total },
            ]
            break;
        default:
            break;
    }
    console.log(expenseSelectorType)
    return (
        <Card className="card-table rounded-0 shadow-none">
            <Card.Body className="rounded-0">
                <div className="table-responsive rounded-0 my-3">
                    <Step4Table
                        expenseReportData={expenseReportData}
                        expenseGeneralData={expenseGeneralData}
                        expenseBilling={expenseBilling}
                    />
                </div>
            </Card.Body>
            <Card.Footer className="p-0 rounded-0">
                <div className="btn-component">
                    <Button variant="white" className="br-3 custom-btn border-0" type="button" onClick={() => handleBack()} disabled={steps[0].key === activeStep.key}><strong>Atrás</strong></Button>
                    <Button variant="white" className="br-3 custom-btn border-0" type="button" onClick={() => {
                        addExpenseReport({ id: id, type: expenseSelectorType, ...expenseReportData, created: actualdate, state: "pending" });
                        cleanExpenseReport();
                        setExpenseSelectorType("Selecciona un tipo")
                        setExpenseReportBalance(expenseReportData.totalbalance ? expenseReportBalance - expenseReportData.totalbalance : expenseReportBalance - expenseReportData.total)
                        handleNext();
                    }}><strong>{steps[steps.length - 1].key !== activeStep.key ? 'Siguiente' : 'Finalizar'}</strong></Button>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default Step4container;