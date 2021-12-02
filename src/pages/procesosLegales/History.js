import React from 'react';
import { Container } from "react-bootstrap";
import { connect } from 'react-redux';
import HistoryContainer from '../../components/Expenses/History/HistoryContainer';

export async function getStaticProps() {
  return {
    props: {
      currentSidebar: "Reporte de gastos"
    },
  }
}

function History(props) {
  const {
    expenseReportData
  } = props
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <HistoryContainer
        expenseReportData={expenseReportData}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  expenseReportData: state.expenseReport.expenseReportCollection
})

export default connect(mapStateToProps)(History);