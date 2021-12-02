import {
    MODAL_OPEN
} from "../../actions/modal/ModalAction";

const expenseReportReducer = (
    state = {
        modalState: false,
    }, action) => {

    switch (action.type) {
        case MODAL_OPEN:
            return {
                ...state,
                modalState: action.modalOpen
            }
        default: return { ...state };
    }
}

export default expenseReportReducer;