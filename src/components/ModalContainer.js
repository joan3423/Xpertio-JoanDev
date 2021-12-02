import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Button, Modal } from "react-bootstrap"
import { connect } from "react-redux"
import { setModalOpen } from '../redux/actions/modal/ModalAction'


const ModalContainer = (props) => {
    const { cheifAction, modalState, setModalOpen, classNameVariant,
        ifHaveIcon, modalContent, ModalHeader, text } = props;
    return (
        <React.Fragment>
            <Button variant="white" className={classNameVariant} onClick={() => setModalOpen(cheifAction)}>
                <strong>{text}</strong>
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
                onHide={() => setModalOpen(false)}
            >
                <Modal.Header className="border-0 bg-gray-100 landing-gradient-gray-dark modal-header" closeButton>
                    <Modal.Title as="h5" className="text-white">
                        {ModalHeader}
                    </Modal.Title>
                </Modal.Header>
                {modalContent}
            </Modal>
        </React.Fragment>
    )
}
const mapStateToProps = state => ({
    modalState: state.modal.modalState
})
const mapDispatchToProps = {
    setModalOpen: setModalOpen
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
