import React, { useState } from 'react'
import { Card, Form } from "react-bootstrap"
import AccordionContainer from '../../../ReusablesComponents/Accordion'
import QuickAccordionContent from './QuickAccordionContent'
import LinksForm from './linksList/LinksForm'

const QuickFormModal = ({ allData, setAllData }) => {
    const FastData = allData.Home
    const fastDataOptions = allData.Home.options
    const [newOptions, setNewOptions] = useState(fastDataOptions)
    return (
        <div>
            <div className="">
                <strong>{FastData.simpleText.quickData.name}</strong>
            </div>
            <Form id="loginForm">
                <Card.Body className="pt-2 px-0 pb-0">
                    <AccordionContainer
                        FastData={FastData}
                        AccordionHeader="hola"
                        AccordionBody={
                            <QuickAccordionContent
                                allData={allData}
                                setAllData={setAllData}
                                setNewOptions={setNewOptions}
                            />}
                    />
                </Card.Body>
                <React.Fragment>
                    {FastData.currentAccordion.key !== 0 &&
                        <LinksForm
                            currentAccordion={FastData.currentAccordion}
                            allData={allData}
                            setAllData={setAllData}
                            newOptions={newOptions}
                            setNewOptions={setNewOptions}
                        />
                    }
                </React.Fragment>
            </Form>
        </div>
    )
}

export default QuickFormModal;