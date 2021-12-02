import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { Button, Card } from "react-bootstrap";
import * as Yup from "yup";
import SupportDocumentsFields from "./fields/SupportDocumentFields";

const ValidationSchema = Yup.object().shape({
    nit: Yup.string().required("Este campo es obligatorio"),
    nombre: Yup.string().required("Este campo es obligatorio"),
    telefono: Yup.string().required("Este campo es obligatorio"),
    direccion: Yup.string().required("Este campo es obligatorio"),
    fechafactura: Yup.string().required("Este campo es obligatorio"),
})

const Step1SupportDocuments = ({
    expenseReportData,
    setExpenseReportStep1,
    handleBack,
    handleNext,
    steps,
    activeStep,
}) => {

    const handlesub = (values) => {
        handleNext();
        setExpenseReportStep1(values)
    }

    return (
        <Formik
            initialValues={{
                nit: expenseReportData.nit || '',
                nombre: expenseReportData.nombre || '',
                telefono: expenseReportData.telefono || '',
                direccion: expenseReportData.direccion || '',
                fechafactura: expenseReportData.fechafactura || '',
                codigooperativo: expenseReportData.codigooperativo || '',
            }}
            onSubmit={(values) => handlesub(values)}
            validationSchema={ValidationSchema}
        >
            {({ handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                errors, }) => (

                <FormikForm className={`modal-content-edited`}>
                    <SupportDocumentsFields
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

export default Step1SupportDocuments;