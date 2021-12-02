import React from 'react';
import { Container } from "react-bootstrap";
import { connect } from 'react-redux';
import ApprovalContainer from '../../components/Expenses/Approval/ApprovalContainer';

export async function getStaticProps() {
  return {
    props: {
      currentSidebar: "Reporte de gastos"
    },
  }
}

function Approval(props) {
  const {
    expenseReportData
  } = props
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <ApprovalContainer
        expenseReportData={expenseReportData}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  expenseReportData: state.expenseReport.expenseReportCollection
})

export default connect(mapStateToProps)(Approval);