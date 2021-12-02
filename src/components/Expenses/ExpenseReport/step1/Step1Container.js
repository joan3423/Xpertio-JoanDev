import React from "react";
import { Container, Form } from "react-bootstrap";
import Step1Invoice from "./forms/Step1Invoice";
import Step1SupportDocuments from "./forms/Step1SupportDocuments";
import Step1Tickets from "./forms/Step1Tickets";

const Step1Container = ({
    expenseReportData,
    expenseSelectorType,
    setExpenseSelectorType,
    setExpenseReportStep1,
    cleanExpenseReport,
    handleBack,
    handleNext,
    steps,
    activeStep,
}) => {
    return (
        <Container className="p-0">
            <div className="pe-3 ps-3 pt-3">
                <div className="form-floating mb-3">
                    <select defaultValue={`${expenseSelectorType || "Selecciona un tipo"}`} onChange={(e) => {setExpenseSelectorType(e.target.value); cleanExpenseReport();}} name="charge" as="select" className="form-select">
                        <option disabled hidden defaultValue={`${expenseSelectorType || "Selecciona un tipo"}`}>{`${expenseSelectorType || "Selecciona un tipo"}`}</option>
                        <option value="Factura">Factura</option>
                        <option value="Documentos soporte">Documentos soporte</option>
                        <option value="Tiquetes">Tiquetes</option>
                    </select>
                    <Form.Label htmlFor="email">
                        Cargo
                    </Form.Label>
                </div>
            </div>
            <div>
                {expenseSelectorType === "Factura" &&
                    <Step1Invoice
                        expenseReportData={expenseReportData}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        setExpenseReportStep1={setExpenseReportStep1}
                        steps={steps}
                        activeStep={activeStep}
                    />
                }
                {expenseSelectorType === "Documentos soporte" &&
                    <Step1SupportDocuments
                        expenseReportData={expenseReportData}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        setExpenseReportStep1={setExpenseReportStep1}
                        steps={steps}
                        activeStep={activeStep}
                    />
                }
                {expenseSelectorType === "Tiquetes" &&
                    <Step1Tickets
                        expenseReportData={expenseReportData}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        setExpenseReportStep1={setExpenseReportStep1}
                        steps={steps}
                        activeStep={activeStep}
                    />
                }
            </div>
        </Container>
    )
}
export default Step1Container;