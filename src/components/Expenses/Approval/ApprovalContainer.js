import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { GlobalTable } from '../../GlobalTable';

const ApprovalContainer = ({ expenseReportData }) => {
    const router = useRouter();
    const redirect = (expenseId) => {
        router.push({
            pathname: '/procesosLegales/ApprovalTableInfo',
            query: { expenseId: expenseId },
        });
    }
    return (
        <>
            <GlobalTable
                clickableZone={true}
                clickFunction={redirect}
                tableHeader="Pendientes de aprobación"
                dataTable={expenseReportData}
                colsComponent={
                    [
                        {
                            Header: 'Tipo de documento',
                            accessor: 'tipodocumento',
                            cellClass: 'list-item-heading w-40',
                            type: "normal"
                        },
                        {
                            Header: 'Fecha',
                            accessor: 'fechafactura',
                            cellClass: 'list-item-heading w-40',
                            type: "normal"
                        },
                        {
                            Header: 'Nombre del usuario',
                            accessor: 'name',
                            cellClass: 'list-item-heading w-40',
                            type: "normal"
                        },
                        {
                            Header: 'Saldo a aprobar',
                            accessor: 'totalbalance',
                            cellClass: 'list-item-heading w-40',
                            type: "normal"
                        },
                        {
                            Header: 'Estado',
                            accessor: 'state',
                            cellClass: 'list-item-heading w-40',
                            type: "button"
                        }
                    ]
                }
            />
        </>
    )
}
export default ApprovalContainer;