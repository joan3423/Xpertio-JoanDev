import React from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"
import { faListOl, faMinusCircle } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/dist/client/link"
import { setState } from '../../../../redux/actions/main'

const QuickBody = (props) => {
    const { allData, deleteModuleLink, setState } = props
    return (
        <>
            {allData.Home.quickAccessList.map((data, index) => {
                return (
                    <div key={index}>
                        {allData.Home.moduleState.length > 0
                            ?
                            <div
                                className="d-flex justify-content-between align-items-center align-items-sm-start align-items-sm-center mb-4 flex-sm-row"
                                key={index}
                            >
                                <div className="left d-flex align-items-center">
                                    <Button onClick={() => deleteModuleLink(data.id)} className={`icon text-white border-0 me-4 bg-red`}>
                                        <FontAwesomeIcon icon={faMinusCircle} />
                                    </Button>
                                    <div className="text">
                                        <h6 className="mb-0 d-flex align-items-center">
                                            <span>{data.name}</span>
                                        </h6>
                                    </div>
                                </div>
                                {data.type === "link" &&
                                    <Link href={data.link}>
                                        <Button className="icon text-white border-0 bg-blue w-25 hight-rounded min-button">
                                            {allData.Home.simpleText.buttonList.link} <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                                        </Button>
                                    </Link>
                                }
                                {data.type === "action" &&
                                    <Link href={data.link}>
                                        <Button onClick={() => setState(data.name)} className="icon text-white border-0 bg-blue w-25 hight-rounded min-button">
                                            {allData.Home.simpleText.buttonList.action} <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                                        </Button>
                                    </Link>
                                }
                            </div>
                            :
                            <div className="card-heading w-100 text-center mb-4">
                                <strong>
                                    {allData.Home.simpleText.quickData.name}
                                </strong>
                            </div>
                        }

                    </div>
                )

            })
            }
        </>

    )
}
const mapDispatchToProps = {
    setState: setState
}
export default connect(null, mapDispatchToProps)(QuickBody);