import React from 'react';
import { Container } from "react-bootstrap";
import { connect } from 'react-redux';
import ExpensesSteps from '../../components/Expenses/ExpenseReport/ExpensesSteps';
import { 
  setExpenseSelectorType,
  setExpenseReportStep1,
  setExpenseReportStep2,
  setExpenseReportStep3,
  addExpenseReport,
  cleanExpenseReport,
  setExpenseReportBalance
} from '../../redux/actions/expense-report/ExpenseReportActions'

export async function getStaticProps() {
  return {
    props: {
      currentSidebar: "Reporte de gastos"
    },
  }
}

function ReporteGastos(props) {

  const {
    expenseReportData,
    expenseSelectorType,
    expenseReportBalance,
    setExpenseSelectorType,
    setExpenseReportStep1,
    setExpenseReportStep2,
    setExpenseReportStep3,
    addExpenseReport,
    cleanExpenseReport,
    setExpenseReportBalance
  } = props
  
  return (
    <Container fluid className="px-lg-4 px-xl-5 mb-5">
      <ExpensesSteps
        expenseReportData={expenseReportData}
        expenseSelectorType={expenseSelectorType}
        expenseReportBalance={expenseReportBalance}
        setExpenseSelectorType={setExpenseSelectorType}
        setExpenseReportStep1={setExpenseReportStep1}
        setExpenseReportStep2={setExpenseReportStep2}
        setExpenseReportStep3={setExpenseReportStep3}
        addExpenseReport={addExpenseReport}
        cleanExpenseReport={cleanExpenseReport}
        setExpenseReportBalance={setExpenseReportBalance}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  expenseReportData: state.expenseReport.newExpenseReport,
  expenseSelectorType: state.expenseReport.expenseSelectorType,
  expenseReportBalance: state.expenseReport.balance,
})
const mapDispatchToProps = {
  setExpenseSelectorType: setExpenseSelectorType,
  setExpenseReportStep1: setExpenseReportStep1,
  setExpenseReportStep2: setExpenseReportStep1,
  setExpenseReportStep3: setExpenseReportStep1,
  addExpenseReport: addExpenseReport,
  cleanExpenseReport: cleanExpenseReport,
  setExpenseReportBalance: setExpenseReportBalance
}
export default connect(mapStateToProps, mapDispatchToProps)(ReporteGastos);