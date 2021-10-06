import React, { useState } from 'react'
import { Card, Row, Button } from "react-bootstrap"
import LogisticalBranch from './childs/BranchContainer'

const LogisticaLinkContainer = ({ allData, setAllData, currentAccordion, newOptions, setNewOptions }) => {
    const [check, setCheck] = useState(false)
    const fastData = allData.Home.moduleState
    const fastLink = allData.Home.finallLink
    const setLink = (name1) => {
        const newLinks = {
            ...allData,
            ...allData.Home.finallLink = {
                initialName: fastLink.initialName,
                name: [
                    name1
                ],
                link: fastLink.link
            }
        }
        setAllData(newLinks)
    }
    const updateLink = (name) => {
        const newLinks = {
            ...allData,
            ...allData.Home.finallLink = {
                linkName: fastLink.linkName,
                initialName: fastLink.initialName,
                name: [name],
                link: fastLink.link
            }
        }
        setAllData(newLinks)
    }
    const finalLink = (linkCheck, linkName, linkType) => {
        const newLinks = {
            ...allData,
            ...allData.Home.finallLink = {
                linkName: linkName,
                initialName: fastLink.initialName,
                name: fastLink.name,
                link: linkCheck,
                type: linkType
            }
        }
        setAllData(newLinks)
    }
    const setChecked = (id) => {
        if (id === check) {
            setCheck(false)
        } else {
            setCheck(id)
        }
    }
    return (
        <Card.Body className="mt-4 bordered background-opacity px-3">
            <section>
                <div className="d-flex">
                    <a
                        style={{ cursor: 'pointer' }}
                        onClick={() => { updateLink("", fastLink.link); setNewOptions([newOptions[0], null]); setChecked(false)}}
                        className="me-2">
                        {fastLink.initialName}
                    </a>
                    {fastLink.name[0] &&
                        <div
                            className="me-2">
                            {' | '}{fastLink.name[0]}
                        </div>
                    }
                </div>
                <Row className="p-0 m-0">
                    <LogisticalBranch
                        fastData={fastData}
                        currentAccordion={currentAccordion}
                        newOptions={newOptions}
                        check={check}
                        setLink={setLink}
                        finalLink={finalLink}
                        setChecked={setChecked}
                        setNewOptions={setNewOptions}
                    />
                </Row>
            </section>
        </Card.Body>
    )
}

export default LogisticaLinkContainer;