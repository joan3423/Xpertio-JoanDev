import React from 'react'
import { Card, Col, Row, Button } from "react-bootstrap"
import {
    faDollyFlatbed,
    faReceipt
} from "@fortawesome/free-solid-svg-icons"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"
import Pill from "../../../../components/Pill"


const QuickAccordionContent = ({ setAllData, allData, setNewOptions }) => {
    const FastItemData = allData.Home.moduleState;
    const addAccordionStates = (key, name, icon, color) => {
        const newState = {
            ...allData,
            ...allData.Home.currentAccordion = {
                key: key,
                name: name,
                icon: icon,
                color: color
            }

        }
        setAllData(newState)
    }
    const setLink = (names) => {
        const newLinks = {
            ...allData,
            ...allData.Home.finallLink = {
                initialName: names,
                name: [],
                link: null
            }
        }
        setAllData(newLinks)
    }
    return (
        <React.Fragment>
            <section>
                <Row className="p-0 m-0">
                    {FastItemData.map((item, index) => {
                        let color
                        let icon
                        switch (item.name) {
                            case "logistica":
                                color = "green"
                                icon = faClipboard
                                break
                            case "Procesos Legales":
                                color = "blue"
                                icon = faDollyFlatbed
                                break
                            default:
                                color = "indigo"
                                icon = faReceipt
                        }
                        return (
                            <Col style={{ cursor: 'pointer' }} xl={12} onClick={() => {
                                addAccordionStates(item.id, item.name, icon, color);
                                setLink(item.name);
                                setNewOptions([item.id, null])
                            }} className="p-0 border-bottom shadow-none" key={index}>
                                <Card className="message px-2 py-0 bg-hover-gradient-primary rounded-0 shadow-none">
                                    <Pill className="bg-transparent shadow-none w-100 py-3 px-1" data={item} icon={icon} color={color} fullHeight />
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </section>
        </React.Fragment>
    )
}
export default QuickAccordionContent;