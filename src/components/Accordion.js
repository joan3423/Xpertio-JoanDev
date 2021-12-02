import React  from 'react';
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccordionContainer = ({ AccordionBody, name, icon, eventKey, classNameVariant, classBodyVariant }) => {
    return (
        <Accordion>
            <Accordion.Item className={classNameVariant} eventKey={eventKey}>
                <Accordion.Header className="bg-transparent">
                    {name}
                    {icon && icon !== null || "" &&
                        <div className={`ms-2 icon text-white bg-${currentAccordion.color}`}>
                            <FontAwesomeIcon icon={currentAccordion.icon} />
                        </div>
                    }
                </Accordion.Header>
                <Accordion.Body style={{ maxHeight: '250px' }} className={`${classBodyVariant} overflow-auto`}>
                    {AccordionBody}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionContainer;