import { combineReducers } from "redux";
import modal from "./modal/ModalReducer";
import expenseReportReducer from './expense-report/ExpenseReportReducer';
import movementReducer from "./profile/movement/MovementReducer";
import rolesreducer from "./roles/Roles.Reducer";

const rootReducers = combineReducers({
    modal: modal,
    expenseReport: expenseReportReducer,
    movementReducer: movementReducer,
    rolesreducer: rolesreducer
})

export default rootReducers;