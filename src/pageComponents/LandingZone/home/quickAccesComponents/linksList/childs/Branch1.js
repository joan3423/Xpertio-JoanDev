import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Pill from '../../../../../../components/Pill';

const Branch1 = ({ newOptions, thisitem, sections, check, 
    finalLink, setChecked, setNewOptions, setLink, color, icon }) => (
    <>
        {newOptions[0] === thisitem.id && newOptions[1] === null &&
            <Col style={{ cursor: 'pointer' }} xl={12} className="mt-3 p-0 shadow-none">
                <Card className={` ${check === sections.id && "gradient-fixed"} message px-2 py-0 bg-hover-gradient-primary rounded-1`}>
                    <div className="absolute-checkbox">
                        <input
                            checked={check === sections.id}
                            type="checkbox"
                            className="form-check-input mt-0"
                            aria-label="Checkbox for following text input"
                            onChange={() => { finalLink(sections.link, sections.name, sections.type); setChecked(sections.id) }}
                        />
                    </div>
                    <div onClick={() => {
                        sections.haveChildren === "yes"
                            ?
                            (setNewOptions([newOptions[0], sections.id]),
                                setChecked(false),
                                setLink(sections.linkName))
                            :
                            (setLink(null),
                            setChecked(sections.id),
                            finalLink(sections.link, sections.name, sections.type))
                    }} className="ms-4 pe-3 h-100 w-100">
                        <Pill className="bg-transparent shadow-none w-100 py-2 px-1" data={sections} icon={icon} color={color} fullHeight />
                    </div>
                </Card>
            </Col>
        }
    </>
)
export default Branch1;