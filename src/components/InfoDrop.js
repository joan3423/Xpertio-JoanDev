import { Dropdown } from "react-bootstrap";
import {
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function InfoDrop({
    textInfo
}) {
    return (
        <Dropdown style={{ marginBottom: '0.5rem' }} className="ps-2" align="end">
            <Dropdown.Toggle className="p-0" variant="transparent">
                <FontAwesomeIcon icon={faInfoCircle} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="text-sm p-3">
                {textInfo}
            </Dropdown.Menu>
        </Dropdown>
    )
}