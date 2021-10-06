import React from 'react';
import Link from "next/link"
import { Col, Card } from "react-bootstrap"
import LoginForm from "./LoginForm"

const FirstLoginSection = () => (
    <Col lg={6} className="px-lg-4">
        <Card>
            <Card.Header className="px-lg-5">
                <div className="card-heading text-primary text-center">Ingresa</div>
            </Card.Header>
            <Card.Body className="py-lg-3">
                <h3 className="mb-4 text-center">Inicia sesion con tu correo y contraseña</h3>
                <LoginForm />
            </Card.Body>
            <Card.Footer className="px-lg-5 py-lg-4">
                <div className="text-sm text-muted">
                    No tienes una cuenta?{" "}
                    <Link href="/Register/AddData">
                        <a>Registrate</a>
                    </Link>
                    .
                </div>
            </Card.Footer>
        </Card>
    </Col>
)
export default FirstLoginSection;