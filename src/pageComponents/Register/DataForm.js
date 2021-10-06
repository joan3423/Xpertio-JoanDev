import { Card, Form, Button } from "react-bootstrap"

const DataForm = ({ preventcharge, Link }) => (
    <Form id="loginForm" onSubmit={(e) => preventcharge(e)}>
        <Card.Body className="py-lg-3">
            <h3 className="mb-4 text-center">Ingresa los datos correspondientes</h3>
            <div className="form-floating mb-3">
                <Form.Control
                    id="nombreEmpresa"
                    type="text"
                    placeholder="Xpertio"
                />
                <Form.Label htmlFor="email">Nombre de la empresa</Form.Label>
            </div>
            <div className="form-floating mb-3">
                <Form.Control
                    id="razonSocial"
                    type="text"
                    placeholder="Ejemplo"
                />
                <Form.Label htmlFor="password">Razon social</Form.Label>
            </div>
            <div className="form-floating mb-3">
                <Form.Control
                    id="userEmail"
                    type="email"
                    placeholder="example@gmail.com"
                />
                <Form.Label htmlFor="email">Correo electronico</Form.Label>
            </div>
            <div className="w-100 d-flex justify-content-end">
                <Link href="/Register/AddPhone">
                    <Button className="mt-4" variant="primary" size="lg" type="submit">
                        Siguiente
                    </Button>
                </Link>
            </div>
        </Card.Body>
    </Form>
)

export default DataForm;