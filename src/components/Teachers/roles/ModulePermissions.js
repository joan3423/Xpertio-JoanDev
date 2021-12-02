import { Field, Form as FormikForm, Formik } from "formik";
import { Form, Button, Modal } from "react-bootstrap";
import AccordionContainer from "../../Accordion";

const ModulePermissions = ({ values, data }) => (
    <>
        {data.permits.map((permit, index) => (
            <AccordionContainer
                classNameVariant="mt-4"
                name={permit.permit}
                AccordionBody={
                    <>
                        {values.map((permit, index) => (
                            <>
                                {permit.modulepermissions.map((currentpermit) => (
                                    <Field
                                        render={({ field }) => (
                                            <Form.Check
                                                {...field}
                                                label={currentpermit.label}
                                                type="checkbox"
                                                id="customCheck1"
                                                className="mb-4"
                                            />
                                        )}
                                    />
                                ))}
                            </>
                        ))}
                    </>
                }
            />
        ))}
    </>
)
export default ModulePermissions;