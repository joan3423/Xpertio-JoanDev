import React from 'react'
import { Card, Col, Row } from "react-bootstrap"
import {
    faDollyFlatbed,
    faReceipt
} from "@fortawesome/free-solid-svg-icons"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import Link from "next/dist/client/link"
import Pill from "../Pill"

const ModulesSelector = ({ allData }) => (
    <section>
        <Row>
            {allData.Home.quickAccess.items.map((item, index) => {
                console.log(item.link)
                let icon
                switch (item.type) {
                    case "open-cases":
                        icon = faClipboard
                        break
                    case "work-orders":
                        icon = faDollyFlatbed
                        break
                    case "new-invoices":
                        color = "custom-btn"
                        icon = faReceipt
                        break
                    default:
                        icon = faReceipt
                }
                return (
                    <Col style={{ cursor: 'pointer' }} xl={6} md={6} className="mb-4" key={index}>
                        <Link href={item.link}>
                            <Card className="message px-1 py-1 bg-hover-gradient-primary modules-selector">
                                <Pill className="bg-transparent shadow-none w-100 py-1 px-1 flex-column justify-content-center " data={item} icon={icon} color="hover-btn custom-btn icon-color " fullHeight />
                            </Card>
                        </Link>
                    </Col>
                )
            })}
        </Row>
    </section>
)
export default ModulesSelector;