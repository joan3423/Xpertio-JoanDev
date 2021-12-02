import React from "react";
import { Col, Form } from "react-bootstrap";

export default function FormControlField({
    controlType,
    controlSize,
    controlIsRequired,
    controlName,
    controlPlaceholder,
    controlChange,
    controlBlur,
    controlvalues,
    controlTouched,
    controlErrors,
    controlOptions,
    className
}) {
    return controlType === "select"
        ? (
            <Col xs={controlSize} className={className}>
                <div className="form-floating">
                    <Form.Control
                        placeholder=" "
                        className="form-control"
                        name={controlName}
                        as="select"
                        onChange={controlChange}
                        onBlur={controlBlur}
                        value={controlvalues[controlName]}
                        isValid={controlTouched[controlName] && !controlErrors[controlName]}
                        isInvalid={!!controlErrors[controlName]}
                    >
                        <option value="">Selecciona un tipo</option>
                        {controlOptions.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}

                    </Form.Control>
                    <Form.Label className="mb-3" htmlFor="categoria">
                        {controlPlaceholder}{controlIsRequired === true && " *"}
                    </Form.Label>
                    <Form.Control.Feedback type="invalid">
                        {controlErrors[controlName]}
                    </Form.Control.Feedback>
                </div>
            </Col>
        ) : (
            <Col xs={controlSize} className={className}>
                <div className="form-floating">
                    <Form.Control
                        placeholder=" "
                        onChange={controlChange}
                        onBlur={controlBlur}
                        value={controlvalues[controlName]}
                        isValid={controlTouched[controlName] && !controlErrors[controlName]}
                        isInvalid={!!controlErrors[controlName]}
                        className="form-control"
                        name={controlName}
                        type={controlType}
                    />
                    <Form.Label htmlFor="numerofactura">
                        {controlPlaceholder}{controlIsRequired === true && " *"}
                    </Form.Label>
                    <Form.Control.Feedback type="invalid">
                        {controlErrors[controlName]}
                    </Form.Control.Feedback>
                </div>
            </Col>
        )
}