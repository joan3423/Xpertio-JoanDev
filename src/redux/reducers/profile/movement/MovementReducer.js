
const movementReducer = (
    state = {
        balance: 500000,
        movementHistory: [
            {
                id: "723987213987",
                type: "Transacción",
                cost: "$195.000",
                state: "aprobado"
            },
            {
                id: "723987213987",
                type: "Transacción",
                cost: "$198.000",
                state: "aprobado"
            }
        ],
        newExpenseReport: {},
        expenseSelectorType: ""
    }, action) => {

    switch (action.type) {
        default: return { ...state };
    }
}

export default movementReducer;