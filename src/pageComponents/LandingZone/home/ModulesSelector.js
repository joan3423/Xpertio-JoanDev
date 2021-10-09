import React from 'react'
import { Card, Col, Row } from "react-bootstrap"
import {
    faDollyFlatbed,
    faReceipt
} from "@fortawesome/free-solid-svg-icons"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import Link from "next/dist/client/link"
import Pill from "../../../components/Pill"

const ModulesSelector = ({ allData }) => (
    <section>
        <Row>
            {allData.Home.quickAccess.items.map((item, index) => {
                console.log(item.link)
                let color
                let icon
                switch (item.type) {
                    case "open-cases":
                        color = "green"
                        icon = faClipboard
                        break
                    case "work-orders":
                        color = "blue"
                        icon = faDollyFlatbed
                        break
                    case "new-invoices":
                        color = "red"
                        icon = faReceipt
                        break
                    default:
                        color = "indigo"
                        icon = faReceipt
                }
                return (
                    <Col style={{ cursor: 'pointer' }} xl={6} md={6} className="mb-4" key={index}>
                        <Link href={item.link}>
                            <Card className="message px-1 py-3 bg-hover-gradient-primary">

                                <Pill className="bg-transparent shadow-none w-100 py-3 px-1" data={item} icon={icon} color={color} fullHeight />

                            </Card>
                        </Link>
                    </Col>
                )
            })}
        </Row>
    </section>
)
export default ModulesSelector;