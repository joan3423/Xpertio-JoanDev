import { Field, Form as FormikForm, Formik } from "formik";
import { Form, Button, Modal } from "react-bootstrap";

const ChargesForm = ({ classEdit }) => (
    <Formik
        initialValues={{
            name: "",
            description: "",
        }}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500))
            alert(JSON.stringify(values, null, 2))
        }}
    >
        {({ values }) => (

            <FormikForm className={`${classEdit} modal-content-edited`}>
                <Modal.Body className="h-100">
                    <div className="mb-3">
                        <Form.Label  htmlFor="role">
                            Nombre del cargo
                        </Form.Label>
                        <Field
                            id="email"
                            name="name"
                            type="text"
                            className="form-control p-3"
                        />
                    </div>
                    <div className="mb-3">
                        <Form.Label  htmlFor="role">
                            Descripción
                        </Form.Label>
                        <Field
                            className="form-control p-input"
                            name="description"
                            component="textarea"
                            placeholder={`Añade una breve descripción del cargo`}
                            rows="4"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer-edited position-absolute d-flex align-items-center justify-content-center">
                    <div className="w-50">
                        <Button className="w-100 br-3 custom-btn border-0" variant="white" type="submit">
                            Añadir
                        </Button>
                    </div>
                </Modal.Footer>
            </FormikForm>
        )}
    </Formik>
)
export default ChargesForm;