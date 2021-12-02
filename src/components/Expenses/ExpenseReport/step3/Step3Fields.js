import React from "react";
import { Form, InputGroup, Col } from "react-bootstrap";
import Dropzone from "../../../PageHeader";
import Editor from "../../../Editor"

const Step3Field = ({
    expenseReportData,
    setDrop,
    values,
    handleChange,
    handleBlur,
    errors,
    touched
}) => (
    <>
        <InputGroup className="p-3">
            <InputGroup.Text className="background-primary border-input-info p-0" />
            <Form.Control
                className="form-control p-input"
                name="files"
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.files && !errors.files}
                isInvalid={!!errors.files}
                value={values.files}
                as="div"
            >
                <Col xs="auto">
                    <h3 className="text-muted text-sm mt-2">
                        Carga de archivos
                    </h3>
                </Col>
                <Dropzone
                    stepFileValues={expenseReportData.files}
                    setDrop={setDrop}
                    clickeableState={true}
                    textDefault="Añade los archivos requeridos"
                />
            </Form.Control>
            <Form.Control.Feedback type="invalid">
                {errors.files}
            </Form.Control.Feedback>
        </InputGroup>
        <InputGroup className="p-3">
            <InputGroup.Text className="background-primary border-input-info p-0" />
            <Form.Control
                className="form-control p-input"
                name="description"
                isValid={touched.description && !errors.description}
                isInvalid={!!errors.description}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                as="div"
            >
                <Col xs="auto">
                    <h3 className="text-muted text-sm mt-2">
                        Añade una descripción
                    </h3>
                </Col>
                <Editor
                    readOnly={false}
                    className="border"
                    formValue={values}
                    valueName="description"
                    text={values.description}
                />
            </Form.Control>
            <Form.Control.Feedback type="invalid">
                {errors.description}
            </Form.Control.Feedback>
        </InputGroup>
    </>
)

export default Step3Field;