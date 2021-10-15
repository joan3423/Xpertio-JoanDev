import React from "react"
import { Card } from "react-bootstrap"

const History = () => (
    <Card className="card-table h-100">
        <Card.Header>
            <h5 className="card-heading">
                <strong>
                    Historial
                </strong>
            </h5>
        </Card.Header>
        <Card.Body style={{minHeight: '300px'}} className="min-max-access" />
    </Card>
)
export default History;