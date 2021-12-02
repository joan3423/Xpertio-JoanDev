import React, { useCallback, useEffect, useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import { Card, Button } from "react-bootstrap";
import SupportAndTicketsFields from "./fields/SupportAndTicketsFields";

const Step2SupportAndTickets = ({
    expenseReportData,
    setExpenseReportStep2,
    expenseReportBalance,
    handleBack,
    handleNext,
    steps,
    activeStep,
}) => {

    const monthBalance = expenseReportBalance

    const currenSubTotal = expenseReportData.total || 0

    const [totalValue, setTotalValue] = useState(
        {
            totalForm: 0,
            porcentage: 100,
        }
    )

    useEffect(() => {
        const newSubTotal = Number(currenSubTotal)
        const newTotal = monthBalance - newSubTotal
        const newPorcentage = newTotal * 100
        const newPorcentageResult = newPorcentage / monthBalance
        const wholePercentage = Math.round(newPorcentageResult);

        if (newSubTotal > monthBalance) {
            setTotalValue({
                ...totalValue,
                porcentage: 0,
                totalForm: 0
            })
        } else {
            setTotalValue({
                ...totalValue,
                porcentage: wholePercentage,
                totalForm: newSubTotal
            })
        }
    }, [])

    const calculateTotal = useCallback((subtotal) => {
        const newSubTotal = Number(subtotal)
        const newTotal = monthBalance - newSubTotal
        const newPorcentage = newTotal * 100
        const newPorcentageResult = newPorcentage / monthBalance
        const wholePercentage = Math.round(newPorcentageResult);
        if (newSubTotal > monthBalance) {
            setTotalValue({
                ...totalValue,
                porcentage: 0,
                totalForm: 0
            })
        } else {
            setTotalValue({
                ...totalValue,
                porcentage: wholePercentage,
                totalForm: newSubTotal
            })
        }
    }, [setTotalValue])

    const handlesub = (values) => {
        setExpenseReportStep2(values)
        handleNext();
    }

    return (
        <Formik
            initialValues={{
                total: expenseReportData.total || '0'
            }}
            onSubmit={(values) => handlesub(values)}
        >
            {({ values,
                handleChange,
                setFieldValue,
                handleSubmit
            }) => {
                return (
                    <FormikForm className={`modal-content-edited`}>
                        <SupportAndTicketsFields
                            handleChange={handleChange}
                            setFieldValue={setFieldValue}
                            calculateTotal={calculateTotal}
                            values={values}
                            totalValue={totalValue}
                            monthBalance={monthBalance}
                        />
                        <Card.Footer className="p-0">
                            <div className="btn-component">
                                <Button variant="white" className="br-3 custom-btn border-0" type="button" onClick={() => handleBack} disabled={steps[0].key === activeStep.key}>
                                    <strong>Atrás</strong>
                                </Button>
                                <Button variant="white" className="br-3 custom-btn border-0" type="button" onClick={() => handleSubmit()}>
                                    <strong>{steps[steps.length - 1].key !== activeStep.key ? 'Siguiente' : 'Finalizar'}</strong>
                                </Button>
                            </div>
                        </Card.Footer>
                    </FormikForm>
                )
            }}
        </Formik>

    )
}

export default Step2SupportAndTickets;