import { useState } from "react"
import { Card, Form, Dropdown, InputGroup } from "react-bootstrap"
import CodeConfirmation from "./codeConfirmation"
import LoadingButton from "../../../components/LoadingButton";

const AddPhoneForm = ({ countryCode, SetCountryCode }) => {

    const [show, setShow] = useState(false)
    const noCharge = (e) => {
        e.preventDefault()
    }

    return (
        <Form id="loginForm" onSubmit={noCharge}>
            <Card.Body className="py-lg-3">
                <h3 className="mb-4 text-center">Ingresa tu numero de celular</h3>
                <InputGroup className="form-floating mb-3">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            {countryCode}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onSelect={() => SetCountryCode("+57")}>+57 Colombia</Dropdown.Item>
                            <Dropdown.Item onSelect={() => SetCountryCode("+1")}>+1 Canada</Dropdown.Item>
                            <Dropdown.Item onSelect={() => SetCountryCode("+1")}>+1 Estados Unidos</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        id="phone"
                        type="number"
                        className="form-control p-3"
                        placeholder="Numero de celular"
                    />
                </InputGroup>
                {show === false &&
                    <div className="w-100 d-flex justify-content-end">
                        <LoadingButton
                            currentFunction={() => setShow(true)}
                            label="Enviar codigo"
                            type="expand-right"
                            className="mb-1 me-1"
                        />
                    </div>
                }
                {show !== false &&
                    <CodeConfirmation />
                }
            </Card.Body>
        </Form>
    )
}

export default AddPhoneForm;