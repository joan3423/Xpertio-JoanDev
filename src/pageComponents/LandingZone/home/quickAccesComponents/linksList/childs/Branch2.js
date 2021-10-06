import React from 'react';
import { Card, Col } from 'react-bootstrap';
import {
    faList,
    faSave
} from "@fortawesome/free-solid-svg-icons"
import Pill from '../../../../../../components/Pill';

const Branch2 = ({ newOptions, sections, check, finalLink, setChecked, setNewOptions, setLink }) => (
    <>
        {newOptions[1] === sections.id &&
            <>
                {sections.functionalities.map((functionalItems) => {
                    let funcColor
                    let funcIcon
                    switch (functionalItems.type) {
                        case "module":
                            funcColor = "blue"
                            funcIcon = faList
                            break
                        case "action":
                            funcColor = "green"
                            funcIcon = faSave
                            break
                        default:
                            funcColor = "green"
                            funcIcon = faSave
                    }
                    return (
                        <Col style={{ cursor: 'pointer' }} xl={12} className="mt-3 p-0 shadow-none" key={functionalItems.linkName}>
                            <Card className={` ${check === functionalItems.id && "gradient-fixed"} message px-2 py-0 bg-hover-gradient-primary rounded-1`}>
                                <div className="absolute-checkbox">
                                    <input
                                        checked={check === functionalItems.id}
                                        type="checkbox"
                                        className="form-check-input mt-0"
                                        aria-label="Checkbox for following text input"
                                        onChange={() => { finalLink(functionalItems.link, functionalItems.name, functionalItems.type); setChecked(functionalItems.id); }}
                                    />
                                </div>
                                <div onClick={() => {
                                    setNewOptions([newOptions[0], sections.id]);
                                    setChecked(functionalItems.id);
                                    finalLink(functionalItems.link, functionalItems.name, functionalItems.type);
                                }}
                                    className="ms-4 pe-3 h-100 w-100">
                                    <Pill className="bg-transparent shadow-none w-100 py-2 px-1" data={functionalItems} icon={funcIcon} color={funcColor} fullHeight />
                                </div>
                            </Card>
                        </Col>
                    )
                })}
            </>
        }
    </>
)
export default Branch2;