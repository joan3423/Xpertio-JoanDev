import React from 'react';
import StepsHorizontal from '../../StepsHorizontal';
import Step1Container from './step1/Step1Container';
import Step2Container from './step2/Step2Container';
import Step3Container from './step3/Step3Container';
import Step4Container from './step4/Step4Container';

export default function ExpensesSteps({
    expenseReportData,
    expenseSelectorType,
    expenseReportBalance,
    setExpenseSelectorType,
    setExpenseStepState,
    setExpenseReportStep1,
    setExpenseReportStep2,
    setExpenseReportStep3,
    addExpenseReport,
    cleanExpenseReport,
    setExpenseReportBalance
}) {
    const propsList = {
        expenseReportData,
        expenseSelectorType,
        expenseReportBalance
    }
    return (
        <StepsHorizontal
            backLink="/procesosLegales/Expenses"
            /* props is an attribute where you can put the properties that need to be synchronous */
            props={propsList}
            infos={
                [
                    {
                        key: '1', label: "Ingresa los datos correspondientes", isDone: true, component:
                            <Step1Container
                                setExpenseSelectorType={setExpenseSelectorType}
                                setExpenseReportStep1={setExpenseReportStep1}
                                cleanExpenseReport={cleanExpenseReport}
                            />
                    },
                    {
                        key: '2', label: "Agrega el valor y el iva aplicado", isDone: false, component:
                            <Step2Container
                                setExpenseReportStep2={setExpenseReportStep2}
                            />
                    },
                    {
                        key: '3', label: "Ingrea los archivos requeridos y añade un comentario", isDone: false, component:
                            <Step3Container
                                setExpenseReportStep3={setExpenseReportStep3}
                            />
                    },
                    {
                        key: '4', label: "Valida la informacion", isDone: false, component:
                            <Step4Container
                                setStepState={setExpenseStepState}
                                addExpenseReport={addExpenseReport}
                                cleanExpenseReport={cleanExpenseReport}
                                setExpenseSelectorType={setExpenseSelectorType}
                                setExpenseReportBalance={setExpenseReportBalance}
                            />
                    },
                ]
            }
        />
    )
}