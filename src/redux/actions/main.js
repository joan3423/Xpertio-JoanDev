import * as I from '../types';

export const setState = (modalState) => ({
    type: I.SET_STATE,
    payload: modalState
})
export const setPeticion = (modalPeticion) => ({
    type: I.SET_PETICION,
    payPeticion: modalPeticion
})
