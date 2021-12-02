import { Field, Form as FormikForm, Formik } from "formik";
import { Form, Button, Modal } from "react-bootstrap";
import { ChoicesSelect } from "../../Choices";
import permitsData from '../../../data/availablePermits.json'
import ModulePermissions from "./ModulePermissions";
import InfoDrop from "../../InfoDrop";

const RolesForm = ({ classEdit }) => (
    <Formik
        initialValues={{
            role: "",
            permits: [],
        }}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500))
            alert(JSON.stringify(values, null, 2))
        }}
    >
        {({ values, handleChange }) => (

            <FormikForm className={`${classEdit} modal-content-edited`}>
                <Modal.Body className="h-100">
                    <div className="mb-3">
                        <Form.Label htmlFor="role">
                            Nombre del rol
                        </Form.Label>
                        <Field
                            id="email"
                            name="role"
                            onChange={handleChange}
                            type="text"
                            className="form-control p-3"
                        />
                    </div>
                    <div className="mb-3">
                        <div className="d-flex align-items-center header">
                            <Form.Label >Permisos</Form.Label>
                            <InfoDrop textInfo="El nombre de cada item se refiere al modulo al
                            que el usuario podra acceder con total normalidad" />
                        </div>
                        <ChoicesSelect
                            name="permits"
                            values={values}
                            propsChange={handleChange}
                            multiple
                            multipleText="Selecciona los permisos"
                            options={
                                {
                                    relation: "value",
                                    label: "label",
                                    childName: "permit",
                                    secondchild: "modulepermission",
                                    datas: permitsData,
                                }
                            }
                        />
                    </div>
                    {console.log(values)}
                    {values.permits.length > 0 &&
                        <>
                            <ModulePermissions values={permitsData} data={values} />
                        </>
                    }
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
export default RolesForm;