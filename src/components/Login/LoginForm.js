import { Button, Form } from "react-bootstrap";

const LoginForm = () => (
    <Form id="loginForm" action="/Home">
        <div className="form-floating mb-3">
            <Form.Control
                id="email"
                type="email"
                placeholder="name@example.com"
            />
            <Form.Label htmlFor="email">Correo</Form.Label>
        </div>
        <div className="form-floating mb-3">
            <Form.Control
                id="password"
                type="password"
                placeholder="Password"
            />
            <Form.Label htmlFor="password">Contraseña</Form.Label>
        </div>
        <Form.Check
            id="agree"
            type="checkbox"
            className="mb-3"
            label="Recuerdame"
        />
        <div className="w-100 d-flex justify-content-end">
            <Button className="mt-4" variant="primary" size="lg" type="submit">
                Ingresar
            </Button>
        </div>
    </Form>
)

export default LoginForm;