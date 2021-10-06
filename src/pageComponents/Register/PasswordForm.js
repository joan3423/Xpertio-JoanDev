import { Card, Form, Button } from "react-bootstrap"

const PasswordForm = ({ preventcharge, Link }) => (
    <Form id="loginForm" onSubmit={(e) => preventcharge(e)}>
        <Card.Body className="py-lg-3">
            <h3 className="mb-4 text-center">Registra tu contraseña</h3>
            <div className="form-floating mb-3">
                <Form.Control
                    id="nombreEmpresa"
                    type="password"
                    placeholder="Xpertio"
                />
                <Form.Label htmlFor="email">Nueva contraseña</Form.Label>
            </div>
            <div className="form-floating mb-3">
                <Form.Control
                    id="razonSocial"
                    type="password"
                    placeholder="Ejemplo"
                />
                <Form.Label htmlFor="password">Confirma la contraseña</Form.Label>
            </div>
            <div className="w-100 d-flex justify-content-end">
                <Link href="/Login">
                    <Button className="mt-4" variant="primary" size="lg" type="submit">
                        Finalizar
                    </Button>
                </Link>
            </div>
        </Card.Body>
    </Form>
)

export default PasswordForm;