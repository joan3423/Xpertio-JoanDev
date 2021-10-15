import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Button, Modal } from "react-bootstrap"
import { connect } from "react-redux"
import { setState } from '../redux/actions/main'


const ModalContainer = (props) => {
    const { cheifAction, modalState, setState, classNameVariant, 
        ifHaveIcon, ModalHeader, ModalChildren, ModalFooter } = props;
    return (
        <React.Fragment>
            <Button variant="primary" className={classNameVariant} onClick={() => setState(cheifAction)}>
                {props.text}
                {ifHaveIcon &&
                    <FontAwesomeIcon icon={ifHaveIcon} />
                }
            </Button>
            <Modal
                dialogClassName="right-modal"
                contentClassName="right-modal"
                animation={true}
                scrollable={true}
                show={modalState === cheifAction}
                onHide={() => setState(false)}
            >
                <Modal.Header className="border-0 bg-gray-100 landing-gradient-gray-dark modal-header" closeButton>
                    <Modal.Title as="h6" className="text-uppercase text-white">
                        {ModalHeader}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {ModalChildren}
                </Modal.Body>
                <Modal.Footer>
                    {ModalFooter}
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}
const mapStateToProps = state => ({
    modalState: state.main.modalState
})
const mapDispatchToProps = {
    setState: setState
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
