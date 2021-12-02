import { Field, Form as FormikForm, Formik } from "formik";
import { Form, Button, Modal } from "react-bootstrap";
import { ChoicesSelect } from "../../Choices";
import rolData from '../../../data/rol.json';


const UsersForm = ({ classEdit }) => (
    <Formik
        initialValues={{
            email: "",
            password: "",
            charge: "",
            role: [],
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
                        <Form.Label  htmlFor="email">
                            Nombre del usuario
                        </Form.Label>
                        <Field
                            id="email"
                            name="name"
                            type="text"
                            placeholder="Nombre completo"
                            className="form-control p-3"
                        />
                    </div>
                    <div className="mb-3">
                        <Form.Label  htmlFor="email">
                            Numero de documento
                        </Form.Label>
                        <Field
                            id="password"
                            name="document"
                            type="number"
                            placeholder="Numero"
                            className="form-control p-3"
                        />
                    </div>
                    <div className="mb-3">
                        <Form.Label  htmlFor="email">
                            Cargo
                        </Form.Label>
                        <Field name="charge" as="select" className="form-select p-3">
                            <option>option 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                            <option>option 4</option>
                        </Field>
                    </div>
                    <div className="mb-3">
                        <Form.Label>Rol</Form.Label>
                        <ChoicesSelect
                            name="role"
                            values={values}
                            options={
                                {
                                    relation: "role",
                                    label: "role",
                                    datas: rolData,
                                }
                            }
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer-edited position-absolute d-flex align-items-center justify-content-center">
                    <div className="w-50">
                        <Button className="w-100 br-3 custom-btn border-0" variant="white" type="submit">
                            <strong>Añadir</strong>
                        </Button>
                    </div>
                </Modal.Footer>
            </FormikForm>
            
        )}
    </Formik>
)
export default UsersForm;