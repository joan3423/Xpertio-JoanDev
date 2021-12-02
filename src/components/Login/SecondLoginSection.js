import React from 'react';
import { Col } from "react-bootstrap"
import Image from "../CustomImage"

const SecondLoginSection = () => (
    <Col
        lg={6}
        xl={5}
        className="ms-xl-auto px-lg-4 text-center text-primary"
    >
        <div className="mb-4">
            <div style={{ transform: "rotate(10deg)" }}>
                <Image
                    src="/img/drawkit-illustration.svg"
                    alt="..."
                    width={475}
                    height={356}
                    className="img-fluid"
                />
            </div>
        </div>
        <h1 className="mb-4">
            X P E R T I O
        </h1>
        <p className="lead text-muted">
            Administra mejor los productos que tu empresa
            contenga y tambien los de tus clientes
        </p>
    </Col>
)
export default SecondLoginSection;