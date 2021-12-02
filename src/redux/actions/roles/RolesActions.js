export const USER_LOGED = 'USER_LOGED';

export const setUserLoged = (userLoged) => {
    return {
        type: USER_LOGED,
        userLoged
    }
}