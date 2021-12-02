import React from "react"
import { Field } from "formik";
import { Col, Row, Form, InputGroup, ProgressBar } from "react-bootstrap";

const SupportAndTicketsFields = ({
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
                    placeholder="Total"
                    className="form-control p-input"
                    name="total"
                    type="number"
                    value={values.total}
                    onChange={(e) => { handleChange(e); calculateTotal(e.target.value); }}
                />
            </InputGroup>
        </div>
        <div className="pe-3 ps-3 mt-3">
            <InputGroup className="mb-3">
                <InputGroup.Text className="background-primary border-input-info p-0" />
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
                                ${monthBalance - values.total}
                            </h5>
                        </Col>
                    </Row>
                    <ProgressBar now={totalValue.porcentage} className="p-0" variant="xpertio" />
                </Field>
            </InputGroup>
        </div>
    </>
)

export default SupportAndTicketsFields;