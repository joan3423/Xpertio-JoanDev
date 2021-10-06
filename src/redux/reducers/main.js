import * as I from '../types';

const main = (state = {
    modalState: false,
    
}, action) => {
    switch (action.type) {
        case I.SET_STATE:
            return {
                ...state,
                modalState: action.payload
            }
        case I.SET_PETICION:
            return {
                ...state,
                modalPeticion: action.payPeticion
            }
        default:
            return { ...state };
    }
}
export default main;