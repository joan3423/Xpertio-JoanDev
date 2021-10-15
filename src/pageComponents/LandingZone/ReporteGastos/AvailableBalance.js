import React from 'react';
import { Card, Col, Row } from "react-bootstrap"
import {
    faDollarSign,
} from "@fortawesome/free-solid-svg-icons"
import Link from "next/dist/client/link"
import Pill from "../../../components/Pill"

const AvailableBalance = () => {
    <section>
        <Row>
            <Col style={{ cursor: 'pointer' }} xl={6} md={6} className="mb-4" key={index}>
                <Link href={item.link}>
                    <Card className="message px-1 py-3 bg-hover-gradient-primary">
                        <Pill className="bg-transparent shadow-none w-100 py-3 px-1" data={item} icon={faDollarSign} color={yellow} fullHeight />
                    </Card>
                </Link>
            </Col>
        </Row>
    </section>
}
export default AvailableBalance;