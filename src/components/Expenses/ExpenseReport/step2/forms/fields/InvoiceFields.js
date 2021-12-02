import React from "react"
import { Field } from "formik";
import { Col, Row, Form, InputGroup, ProgressBar } from "react-bootstrap";

const InvoiceFields = ({
    values,
    totalValue,
    monthBalance,
    handleChange,
    calculateTotal
}) => (
    <>
        <div xxs={6} className="pe-3 ps-3 mt-3">
            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Field
                    id="floatingInput"
                    placeholder="Sub total"
                    className="form-control p-input"
                    name="subtotal"
                    type="number"
                    onChange={(e) => { handleChange(e); calculateTotal(e.target.value, values.iva); }}
                />
            </InputGroup>
        </div>
        <div xxs={6} className="pe-3 ps-3 mt-3">
            <div className="form-floating">
                <Field
                    id="floatingInput"
                    placeholder="IVA"
                    className="form-control"
                    name="iva"
                    as="select"
                    value={values.iva}
                    onChange={(e) => { handleChange(e); calculateTotal(values.subtotal, e.target.value) }}
                >
                    <option value="">Selecciona el iva aplicado</option>
                    <option value={5}>5%</option>
                    <option value={19}>19%</option>
                </Field>
                <Form.Label className="text-uppercase" htmlFor="razonsocial">
                    IVA
                </Form.Label>
            </div>
        </div>
        <div className="pe-3 ps-3 mt-3">
            <InputGroup className="mb-3">
                <InputGroup.Text className="background-primary border-input-info p-0" />
                <Field
                    className="form-control p-input bg-white"
                    type="text"
                    disabled
                    name="total"
                    value={`Total: ${totalValue.totalForm}`}
                />
            </InputGroup>
        </div>
        <div className="pe-3 ps-3 mt-3">
            <InputGroup className="mb-3">
                <InputGroup.Text className="background-primary border-input-info p-1" />
                <Field
                    className="form-control p-input"
                    onChange={(e) => { handleChange(e) }}
                    disabled
                    name="disabled2"
                    as="label"
                >
                    <Row className="mb-3">
                        <Col xs="auto">
                            <h3 className="text-muted text-sm mt-2">Tu saldo quedara asi:</h3>
                        </Col>
                        <Col className="text-end text-lg">
                            <h5 className="m-0">
                                ${monthBalance - totalValue.totalForm}
                            </h5>
                        </Col>
                    </Row>
                    <ProgressBar now={totalValue.porcentage} variant="xpertio" />
                </Field>
            </InputGroup>
        </div>
    </>
)

export default InvoiceFields;