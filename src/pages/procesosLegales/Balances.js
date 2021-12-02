import React from 'react';
import { Container } from "react-bootstrap";
import { connect } from 'react-redux';
import BalancesContainer from '../../components/Expenses/Balances/BalancesContainer';

export async function getStaticProps() {
  return {
    props: {
      currentSidebar: "Reporte de gastos"
    },
  }
}

function Balances(props) {
  const {
    expenseReportData
  } = props
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <BalancesContainer
        expenseReportData={expenseReportData}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  expenseReportData: state.expenseReport.expenseReportCollection
})

export default connect(mapStateToProps)(Balances);