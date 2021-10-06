import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import DataForm from "../../pageComponents/Register/DataForm";

export async function getStaticProps() {
    return {
        props: {
            title: "AddData",
            pageHolderClass: "page-holder align-items-center py-4 bg-gray-100 vh-100",
            hideHeader: true,
            hideFooter: true,
            hideSidebar: true,
            currentSidebar: "None",
        },
    }
}
export default function AddPhone() {

    const preventcharge = (e) => {
        e.preventDefault()
    }

    return (
        <div className="position-absolute background-gradient w-100 h-100">
            <div className="position-relative d-grid align-items-center overflow-auto h-100 w-100 m-0 pt-5 pb-5 pe-md-3 ps-md-3">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col lg={6} className="px-lg-4">
                            <Card>
                                <Card.Header className="px-lg-5">
                                    <h1 className="card-heading text-center text-primary">
                                        <strong>Registrate</strong>
                                    </h1>
                                </Card.Header>
                                <DataForm
                                    preventcharge={preventcharge}
                                    Link={Link}
                                />
                                <Card.Footer className="px-lg-5 py-lg-4">
                                    <div className="text-sm text-muted">
                                        Ya tienes una cuenta?{" "}
                                        <Link href="/Login">
                                            <a>Ingresa</a>
                                        </Link>
                                        .
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}