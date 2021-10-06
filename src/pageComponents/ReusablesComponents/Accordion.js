import React from 'react';
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccordionContainer = ({ AccordionBody, FastData  }) => {
    const currentAccordion = FastData.currentAccordion
    return (
        <Accordion>
            <Accordion.Item eventKey={currentAccordion.key}>
                <Accordion.Header>
                    {currentAccordion.name}
                    {currentAccordion.icon !== null || "" &&
                        <div className={`ms-2 icon text-white bg-${currentAccordion.color}`}>
                            <FontAwesomeIcon icon={currentAccordion.icon} />
                        </div>
                    }
                </Accordion.Header>
                <Accordion.Body style={{ maxHeight: '250px' }} className="p-0 overflow-auto">
                    {AccordionBody}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionContainer;