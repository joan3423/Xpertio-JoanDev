import React from 'react';
import { Container } from "react-bootstrap";
import { connect } from 'react-redux';
import ApprovalTableData from '../../components/Expenses/Approval/ApprovalTableInfo/TableData';

export async function getStaticProps() {
    return {
        props: {
            currentSidebar: "Reporte de gastos"
        },
    }
}

function ApprovalTableInfo(props) {
    const { 
        expenseReportData, 
        expenseId 
    } = props
    return (
        <Container fluid className="px-lg-4 px-xl-5 mb-5">
            <ApprovalTableData
                expenseReportData={expenseReportData}
                expenseId={expenseId}
            />
        </Container>
    )
}

const mapStateToProps = state => ({
    expenseReportData: state.expenseReport.expenseReportCollection,
    expenseId: state.expenseReport.id,
})

export default connect(mapStateToProps)(ApprovalTableInfo);