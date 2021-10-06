import React from 'react'
import {
    faList,
    faSave
} from "@fortawesome/free-solid-svg-icons"
import Branch1 from './Branch1'
import Branch2 from './Branch2'

const LogisticalBranch = ({ setLink, setNewOptions,
    newOptions, fastData, finalLink, check, setChecked }) => (
    <div>
        {fastData.map((thisitem, moduleIndex) => {
            return (
                <div key={moduleIndex}>
                    {thisitem.items.map((sections, index) => {
                        let color
                        let icon
                        switch (sections.type) {
                            case "link":
                                color = "blue"
                                icon = faList
                                break
                            case "action":
                                color = "green"
                                icon = faSave
                                break
                            default:
                                color = "indigo"
                                icon = faSave
                        }
                        return (
                            <div key={index}>
                                <Branch1
                                    newOptions={newOptions}
                                    thisitem={thisitem}
                                    sections={sections}
                                    check={check}
                                    finalLink={finalLink}
                                    setChecked={setChecked}
                                    setNewOptions={setNewOptions}
                                    setLink={setLink}
                                    color={color}
                                    icon={icon}
                                />
                                <Branch2
                                    newOptions={newOptions}
                                    sections={sections}
                                    check={check}
                                    finalLink={finalLink}
                                    setChecked={setChecked}
                                    setNewOptions={setNewOptions}
                                    setLink={setLink}
                                />
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
)
export default LogisticalBranch;