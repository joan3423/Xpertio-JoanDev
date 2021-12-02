import React from "react";
import { Row } from "react-bootstrap";
import FormControlField from "../../../../../FormControlField";

const TicketsFields = ({
    values,
    handleChange,
    handleBlur,
    errors,
    touched
}) => {
    const TicketsArrayFields = [
        {
            type: "number",
            name: "nit",
            required: true,
            placeholder: "Nit",
            size: 6,
            className: "pb-3 me-0 ms-0 pe-3 ps-0 pt-0 mt-0"
        },
        {
            type: "text",
            name: "nombre",
            required: true,
            placeholder: "Nombre",
            size: 6,
            className: "pb-3 me-0 ms-0 pe-0 ps-0 pt-0 mt-0"
        },
        {
            type: "number",
            name: "telefono",
            required: true,
            placeholder: "Telefono",
            size: 6,
            className: "pb-3 me-0 ms-0 pe-3 ps-0 pt-0 mt-0"
        },
        {
            type: "text",
            name: "direccion",
            required: true,
            placeholder: "Dirección",
            size: 6,
            className: "pb-3 me-0 ms-0 pe-0 ps-0 pt-0 mt-0"
        },
        {
            type: "number",
            name: "numeroticket",
            required: true,
            placeholder: "Numero de ticket",
            size: 6,
            className: "pb-3 me-0 ms-0 pe-3 ps-0 pt-0 mt-0"
        },
        {
            type: "number",
            name: "codigooperativo",
            required: false,
            placeholder: "Codigo operativo",
            size: 6,
            className: "pb-3 me-0 ms-0 pe-0 ps-0 pt-0 mt-0"
        }
    ]
    return (
        <Row className="mt-3 me-0 ms-0 mt-0 pe-3 ps-3">
            {TicketsArrayFields.map((fieldData, index) => (
                <React.Fragment key={index}>
                    <FormControlField
                        controlType={fieldData.type}
                        controlSize={fieldData.size}
                        controlIsRequired={fieldData.required}
                        controlName={fieldData.name}
                        controlPlaceholder={fieldData.placeholder}
                        controlChange={handleChange}
                        controlBlur={handleBlur}
                        controlvalues={values}
                        controlTouched={touched}
                        controlErrors={errors}
                        className={fieldData.className}
                        controlOptions={fieldData.options && fieldData.options}
                    />
                </React.Fragment>
            ))}
        </Row>
    )
}

export default TicketsFields;
