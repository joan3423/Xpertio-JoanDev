import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { Button, Card } from "react-bootstrap";
import * as Yup from "yup";
import InvoiceFields from "./fields/InvoiceFields";

const ValidationSchema = Yup.object().shape({
    email: Yup.string().required("Este campo es obligatorio").email("ingresa un email valido"),
    nit: Yup.string().required("Este campo es obligatorio"),
    razonsocial: Yup.string().required("Este campo es obligatorio"),
    telefono: Yup.string().required("Este campo es obligatorio"),
    direccion: Yup.string().required("Este campo es obligatorio"),
    numerofactura: Yup.string().required("Este campo es obligatorio"),
    fechafactura: Yup.string().required("Este campo es obligatorio"),
    categoria: Yup.string().required("Este campo es obligatorio"),
})

const Step1Invoice = ({
    expenseReportData,
    setExpenseReportStep1,
    handleBack,
    handleNext,
    steps,
    activeStep,
}) => {

    const handlesub = (values) => {
        setExpenseReportStep1(values)
        handleNext();
    }
    return (
        <Formik
            initialValues={{
                email: expenseReportData.email || '',
                nit: expenseReportData.nit || '',
                razonsocial: expenseReportData.razonsocial || '',
                telefono: expenseReportData.telefono || '',
                direccion: expenseReportData.direccion || '',
                numerofactura: expenseReportData.numerofactura || '',
                codigooperativo: expenseReportData.codigooperativo || '',
                fechafactura: expenseReportData.fechafactura || '',
                categoria: expenseReportData.categoria || '',
            }}
            onSubmit={(values) => handlesub(values)}
            validationSchema={ValidationSchema}
        >
            {({ handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                errors }) => (

                <FormikForm className={`modal-content-edited`}>
                    <InvoiceFields
                        values={values}
                        errors={errors}
                        touched={touched}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
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
    )
}

export default Step1Invoice;