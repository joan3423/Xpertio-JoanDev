import React, { useCallback, useEffect, useState } from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import { Col, Row, Form, InputGroup, ProgressBar, Card, Button } from "react-bootstrap";
import InvoiceFields from "./fields/InvoiceFields";

const Step2Invoice = ({
    expenseReportData,
    setExpenseReportStep2,
    expenseReportBalance,
    handleBack,
    handleNext,
    steps,
    activeStep,
}) => {

    const monthBalance = expenseReportBalance

    const currenSubTotal = expenseReportData.subtotal || 0

    const currentIva = expenseReportData.iva || 0

    const [totalValue, setTotalValue] = useState(
        {
            totalForm: 0,
            porcentage: 100,
        }
    )

    useEffect(() => {
        const result = Math.floor(currenSubTotal * currentIva) / 100
        const intPorcentaje = Math.round(result);
        const newSubTotal = Number(currenSubTotal) + Number(intPorcentaje);
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

    const calculateTotal = useCallback((subtotal, iva) => {
        const result = Math.floor(subtotal * iva) / 100
        const intPorcentaje = Math.round(result);
        const newSubTotal = Number(subtotal) + Number(intPorcentaje);
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
        setExpenseReportStep2({ ...values, totalbalance: totalValue.totalForm })
        handleNext();
    }

    return (
        <Formik
            initialValues={{
                subtotal: expenseReportData.subtotal || '0',
                iva: expenseReportData.iva || '',
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
                        <InvoiceFields
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

export default Step2Invoice;