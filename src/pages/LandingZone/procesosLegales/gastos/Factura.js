import React, { useEffect, useState } from 'react';
import { Card, Container, FormGroup, Col } from "react-bootstrap";
import { Formik, Form as FormikForm, Field } from "formik"
import { Form, Button } from "react-bootstrap"
import Breadcrumbs from "../../../../components/PageHeader"
import PageHeader from "../../../../components/PageHeader"
import Dropzone from "../../../../components/PageHeader"
import Editor from "../../../../components/Editor"

export async function getStaticProps() {
    return {
        props: {
            currentSidebar: "Reporte de gastos",
        },
    }
}

export default function Factura() {
    const [value, setValue] = useState()
    const [dexcuento, setDescuento] = useState()
    const [final, setFinal] = useState()
    const Arrays = {
        documentType: [
            { value: 'materiales', label: 'materiales' },
            { value: 'traslados', label: 'traslados' },
        ],
        fecha: [
            { value: '24/06/2022', label: '24/06/2022' },
            { value: '24/06/2022', label: '24/06/2022' },
        ],
    };
    const setPriceValue = (e) => {
        setValue(e)
    }
    useEffect(() => {
        let theDescuento = value / 19
        setDescuento(theDescuento)
    }, [value])
    useEffect(() => {
        let finalll = value + dexcuento
        setFinal(finalll)
    }, [dexcuento])
    return (
        <Container fluid className="px-lg-4 px-xl-5">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500))
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                <FormikForm>
                    <h2 className="text-center">Formulario Principal</h2>
                    <div className="form-floating mb-3">
                        <FormGroup>
                            <select
                                name="documentType"
                                className="form-control p-3"
                            >
                                <option value="">Categoria</option>
                                {Arrays.documentType.map((opcion) => (
                                    <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                                ))}
                            </select>
                        </FormGroup>
                    </div>
                    <div className="form-floating mb-3">
                        <FormGroup>
                            <select
                                name="documentType"
                                className="form-control p-3"
                            >
                                <option value="">Fecha</option>
                                {Arrays.fecha.map((opcion) => (
                                    <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                                ))}
                            </select>
                        </FormGroup>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                            id="floatingInput"
                            name="floatingInput"
                            type="email"
                            placeholder="name@example.com"
                            className="form-control"
                        />
                        <Form.Label className="text-uppercase" htmlFor="floatingInput">
                            Codigo operativo
                        </Form.Label>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                            id="floatingPassword"
                            name="floatingPassword"
                            type="number"
                            placeholder="Password"
                            className="form-control"
                            onChange={(e) => setPriceValue(e.target.value)}
                        />
                        <Form.Label className="text-uppercase" htmlFor="floatingPassword">
                            Sub Total
                        </Form.Label>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                            id="floatingPassword"
                            name="floatingPassword"
                            type="number"
                            disabled
                            value="19%"
                            placeholder="19%"
                            className="form-control"
                        />
                        <Form.Label className="text-uppercase" htmlFor="floatingPassword">
                            IVA: 19%
                        </Form.Label>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                            id="floatingPassword"
                            name="floatingPassword"
                            type="number"
                            disabled
                            value="19%"
                            placeholder="19%"
                            className="form-control"
                        />
                        <Form.Label className="text-uppercase" htmlFor="floatingPassword">
                            TOTAL: {final}
                        </Form.Label>
                    </div>
                    <section>
                        <Card className="mb-4">
                            <Card.Header>
                                <h4 className="card-heading">
                                    Carga de archivos
                                </h4>
                            </Card.Header>
                            <Card.Body>
                                    <Col xl={8} className="mx-auto">
                                        <Dropzone />
                                    </Col>
                            </Card.Body>
                        </Card>
                    </section>
                    <section>
                        <Card className="mb-4">
                            <Card.Header>
                                <h4 className="card-heading">
                                    Descripcion
                                </h4>
                            </Card.Header>
                            <Card.Body>
                                    <Col xl={12} className="mx-auto">
                                        <Editor className="border" />
                                    </Col>
                            </Card.Body>
                        </Card>
                    </section>
                    <Button className="p-3 mb-4" style={{width: '200px'}} type="submit">
                        Enviar
                    </Button>
                </FormikForm>
            </Formik>
        </Container>
    )
}