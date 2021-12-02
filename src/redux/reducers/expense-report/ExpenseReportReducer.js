import {
    EXPENSE_REPORT_SELECTOR_TYPE,
    EXPENSE_REPORT_STEP1,
    EXPENSE_REPORT_STEP2,
    EXPENSE_REPORT_STEP3,
    ADD_EXPENSE_REPORT,
    CLEAN_EXPENSE_REPORT,
    EXPENSE_REPORT_BALANCE
} from "../../actions/expense-report/ExpenseReportActions";

const expenseReportReducer = (
    state = {
        balance: 500000,
        expenseReportCollection: [
            {
                id: "723987213987",
                type: "Factura",
                tipodocumento: "cc",
                nit: "213213",
                name: "armando", 
                email: "thisa@example.com",
                razonsocial: "cualquiera",
                telefono: "2233555",
                direccion: "carrera 2",
                numerofactura: "2122222",
                codigooperativo: "2-44565",
                fechafactura: "21/08/2022",
                subtotal: 21000,
                iva: 19,
                totalbalance: 23000,
                files: [],
                description: "cualquiera"
            },
            {
                id: "7239872139876",
                type: "Documentos soporte",
                tipodocumento: "cc",
                nit: "324234234",
                nombre: "Fernandes", 
                name: "Fernandes", 
                email: "thisa@example.com",
                razonsocial: "colombina",
                telefono: "2332344",
                direccion: "carrera 5",
                numerofactura: "2122222",
                codigooperativo: "2-5678",
                fechafactura: "22/08/2022",
                totalbalance: 230000,
                total: 21000,
                files: [],
                description: "cualquiera"
            },
            {
                id: "7239872139877",
                type: "Tiquetes",
                tipodocumento: "cc",
                nit: "77788",
                nombre: "sanchez", 
                name: "sanchez", 
                numeroticket: "299-001",
                email: "thisa@example.com",
                razonsocial: "poker",
                telefono: "12312323",
                direccion: "carrera 8",
                numerofactura: "2122222",
                codigooperativo: "2-999",
                fechafactura: "23/08/2022",
                totalbalance: 224000,
                total: 21000,
                files: [],
                description: "cualquiera"
            },
            {
                id: "7239872139878",
                type: "Factura",
                tipodocumento: "cc",
                nit: "445555",
                nombre: "pepito perez", 
                name: "pepito perez", 
                email: "thisa@example.com",
                razonsocial: "ASUS",
                telefono: "12312323",
                direccion: "carrera 1",
                numerofactura: "2122222",
                codigooperativo: "2-44534",
                fechafactura: "20/12/2021",
                subtotal: 46800,
                iva: 5,
                totalbalance: 49070,
                files: [],
                description: "cualquiera"
            },
            
        ],
        newExpenseReport: {},
        expenseSelectorType: ""
    }, action) => {

    switch (action.type) {
        case EXPENSE_REPORT_SELECTOR_TYPE:
            return {
                ...state,
                expenseSelectorType: action.expenseSelectorType
            }
        case EXPENSE_REPORT_STEP1:
            return {
                ...state,
                newExpenseReport: Object.assign({}, state.newExpenseReport, {
                    ...state.newExpenseReport,
                    ...action.expenseReportStep1Values
                })
            }
        case EXPENSE_REPORT_STEP2:
            return {
                ...state,
                newExpenseReport: Object.assign({}, state.newExpenseReport, {
                    ...state.newExpenseReport,
                    ...action.expenseReportStep2Values
                })
            }
        case EXPENSE_REPORT_STEP3:
            return {
                ...state,
                newExpenseReport: Object.assign({}, state.newExpenseReport, {
                    ...state.newExpenseReport,
                    ...action.expenseReportStep3Values
                })
            }
        case ADD_EXPENSE_REPORT: {
            return {
                ...state,
                expenseReportCollection: [
                    ...state.expenseReportCollection,
                    action.totalExpenseReport
                ]
            }
        }
        case CLEAN_EXPENSE_REPORT: {
            return {
                ...state,
                newExpenseReport: Object.assign({}, state.newExpenseReport, {
                })
            }
        }
        case EXPENSE_REPORT_BALANCE: {
            return {
                ...state,
                balance: action.expenseBalance
            }
        }
        default: return { ...state };
    }
}

export default expenseReportReducer;