export const EXPENSE_REPORT_SELECTOR_TYPE = 'EXPENSE_REPORT_SELECTOR_TYPE';
export const EXPENSE_REPORT_STEP1 = 'EXPENSE_REPORT_STEP1';
export const EXPENSE_REPORT_STEP2 = 'EXPENSE_REPORT_STEP2';
export const EXPENSE_REPORT_STEP3 = 'EXPENSE_REPORT_STEP3';
export const ADD_EXPENSE_REPORT = 'ADD_EXPENSE_REPORT';
export const CLEAN_EXPENSE_REPORT = 'CLEAN_EXPENSE_REPORT';
export const EXPENSE_REPORT_BALANCE = 'EXPENSE_REPORT_BALANCE';

export const setExpenseSelectorType = (expenseSelectorType) => {
    return {
        type: EXPENSE_REPORT_SELECTOR_TYPE,
        expenseSelectorType
    }
}

export const setExpenseReportStep1 = (expenseReportStep1Values) => {
    return {
        type: EXPENSE_REPORT_STEP1,
        expenseReportStep1Values
    }
}

export const setExpenseReportStep2 = (expenseReportStep2Values) => {
    return {
        type: EXPENSE_REPORT_STEP2,
        expenseReportStep2Values
    }
}

export const setExpenseReportStep3 = (expenseReportStep3Values) => {
    return {
        type: EXPENSE_REPORT_STEP3,
        expenseReportStep3Values
    }
}

export const addExpenseReport = (totalExpenseReport) => {
    return {
        type: ADD_EXPENSE_REPORT,
        totalExpenseReport
    }
}

export const cleanExpenseReport = (cleanReport) => {
    return {
        type: CLEAN_EXPENSE_REPORT,
        cleanReport
    }
}

export const setExpenseReportBalance = (expenseBalance) => {
    return {
        type: EXPENSE_REPORT_BALANCE,
        expenseBalance
    }
}
