import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Step2Invoice from "./forms/Step2Invoice";
import Step2SupportAndTickets from "./forms/Step2SupportAndTickets";

const Step2Container = ({
    expenseSelectorType,
    expenseReportData,
    expenseReportBalance,
    setTotalBalance,
    setExpenseReportStep2,
    handleBack,
    handleNext,
    steps,
    activeStep,
}) => {
    return (
        <Container className="p-0">
            <div>
                {expenseSelectorType === "Factura" &&
                    <Step2Invoice
                        expenseReportData={expenseReportData}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        steps={steps}
                        setExpenseReportStep2={setExpenseReportStep2}
                        setTotalBalance={setTotalBalance}
                        expenseReportBalance={expenseReportBalance}
                        activeStep={activeStep}
                    />
                }
                {expenseSelectorType === "Documentos soporte" &&
                    <Step2SupportAndTickets
                        expenseReportData={expenseReportData}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        steps={steps}
                        setExpenseReportStep2={setExpenseReportStep2}
                        setTotalBalance={setTotalBalance}
                        expenseReportBalance={expenseReportBalance}
                        activeStep={activeStep}
                    />
                }
                {expenseSelectorType === "Tiquetes" &&
                    <Step2SupportAndTickets
                        expenseReportData={expenseReportData}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        steps={steps}
                        setExpenseReportStep2={setExpenseReportStep2}
                        setTotalBalance={setTotalBalance}
                        expenseReportBalance={expenseReportBalance}
                        activeStep={activeStep}
                    />
                }
            </div>
        </Container>
    )
}

export default Step2Container;