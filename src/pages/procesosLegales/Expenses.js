import React from 'react';
import { Container } from "react-bootstrap";
import { connect } from 'react-redux';
import ExpensesContainer from '../../components/Expenses/ExpenseReport/ExpensesContainer';

export async function getStaticProps() {
  return {
    props: {
      currentSidebar: "Reporte de gastos"
    },
  }
}

function ReporteGastos(props) {
  const { 
    expenseReportData
  } = props
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <ExpensesContainer
        expenseReportData={expenseReportData}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  expenseReportData: state.expenseReport.expenseReportCollection
})

export default connect(mapStateToProps)(ReporteGastos);