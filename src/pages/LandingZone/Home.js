import React, { useState } from "react"
import { Col, Container } from "react-bootstrap"
import QuickAccess from "../../pageComponents/LandingZone/home/QuickAccess"
import ModulesSelector from "../../pageComponents/LandingZone/home/ModulesSelector"
import QuickListData from "../../data/home.json"

export async function getStaticProps() {
    return {
        props: {
            title: "LandingHome",
            pageHolderClass: "page-holder pt-0 align-items-center background-opacity",
            hideHeader: false,
            hideFooter: true,
            hideSidebar: true,
            currentSidebar: "Reporte de gastos",
        },
    }
}
export default function Home() {
    const [allData, setAllData] = useState(QuickListData);
    return (
        <React.Fragment>
            <Col xl={6} md={12} xs={12} className="d-flex align-items-center max-z position-relative p-0 m-0 landing-gradient-gray-dark hight-rounded-right">
                <Container fluid className="px-lg-4 px-xl-5 w-100 p-4">
                    <QuickAccess
                        allData={allData}
                        setAllData={setAllData}
                        className="h-100"
                    />
                </Container>
            </Col>
            <Col xl={6} md={12} xs={12}>
                <Container fluid className="px-lg-4 px-xl-5 w-100 p-4">
                    <ModulesSelector
                        allData={allData}
                        setAllData={setAllData}
                    />
                </Container>
            </Col>
        </React.Fragment>
    )
}