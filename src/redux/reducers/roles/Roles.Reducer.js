import {
    USER_LOGED
} from "../../actions/roles/RolesActions";

const rolesreducer = (
    roles = {
        ADMIN: "ADMIN",
        USER: "USER"
    },
    action,
    permissions = {
        EDIT_POST: [
            {
                module: "Ver Saldos"
            },
            {
                module: "Historial"
            },
            {
                module: "Aprobación"
            },
            {
                module: "Reporte de gastos"
            }
        ]
    },
    rules = {
        [roles.ADMIN]: {
            [permissions.EDIT_POST]: true
        },
        [roles.USER]: {
            [permissions.EDIT_POST]: false
        }
    },
    users = [
        {
            id: 1,
            roles: [roles.ADMIN]
        },
        {
            id: 2,
            roles: [roles.USER]
        }
    ],
    loged = {
        id: 1,
        roles: [roles.ADMIN]
    }
    ) => {

    switch (action.type) {
        case USER_LOGED:
            return {
                ...state,
                user: Object.assign({}, state.loged, {
                    ...action.userLoged
                })
            }
        default: return { roles, permissions, rules, users, loged };
    }
}

export default rolesreducer;