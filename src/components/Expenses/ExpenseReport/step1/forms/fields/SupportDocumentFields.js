import React from "react";
import { Row } from "react-bootstrap";
import Datepicker from "../../../../../Datepicker";
import FormControlField from "../../../../../FormControlField";

const SupportDocumentsFields = ({ 
    values,
    handleChange,
    handleBlur,
    errors,
    touched
 }) => {
    const InvoiceArrayFields = [
        {
            type: "number",
            name: "nit",
            required: true,
            placeholder: "Nit o CC",
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
            type: "component",
            component:
                <Datepicker                 
                    currentValue={values}
                    errors={errors}
                    touched={touched}
                    size={6}
                    defaultValue="10/20/2017"
                    className="pe-3 ps-0 me-0 ms-0 pt-0 mt-0 pb-3"
                    fieldName="fechafactura"
                    fieldPlaceholder="Fecha de la factura"
                    autohide={true}
                />
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
            {InvoiceArrayFields.map((fieldData, index) => (
                <React.Fragment key={index}>
                    {fieldData.type === "component" ?
                        <>
                            {fieldData.component}
                        </>
                        :
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
                    }
                </React.Fragment>
            ))}
        </Row>
    )
}

export default SupportDocumentsFields;
