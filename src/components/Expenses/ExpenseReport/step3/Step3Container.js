import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup"
import Step3Fields from "./Step3Fields";

const ValidationSchema = Yup.object().shape({
    description: Yup.string().required("Este campo es requerido")
        .min(2, "Este campo es requerido"),
    files: Yup.array().min(1, "Debe subir almenos 1 archivo").required(),
})

const Step3Container = ({
    setExpenseReportStep3,
    expenseReportData,
    handleBack,
    handleNext,
    steps,
    activeStep,
}) => {

    const [newDrop, setDrop] = useState([])

    const handlesub = (values) => {
        setExpenseReportStep3(values);
        handleNext();
    }
    return (
        <Container className="p-0">
            <Formik
                enableReinitialize
                validationSchema={ValidationSchema}
                initialValues={{
                    description: expenseReportData.description || '',
                    files: newDrop
                }}
                onSubmit={(values) => handlesub(values)}
            >
                {({ handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    errors,
                }) => (
                    <FormikForm className="modal-content-edited ">
                        <Step3Fields
                            expenseReportData={expenseReportData}
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            setDrop={setDrop}
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
                )}
            </Formik>
        </Container>
    )
}

export default Step3Container;