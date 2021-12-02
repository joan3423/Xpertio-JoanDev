import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { GlobalTable } from '../../GlobalTable';

const ExpensesContainer = ({ expenseReportData }) => {
    const router = useRouter();
    const redirect = (expenseId) => {
        router.push({
            pathname: '/procesosLegales/ExpensesTableInfo',
            query: { expenseId: expenseId },
        });
    }
    return (
        <>
            <div className="rounded-0 general-balance">
                    <div style={{ maxWidth: "300px" }} className="p-2 balance-card bg-dark w-100">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <span className="text-white">
                                Saldo disponible:
                            </span>
                            <h4 className="m-0 text-white"> $500.000 </h4>
                        </div>
                    </div>
            </div>
            <div style={{ position: "absolute", right: 0, top: "100px", width: "300px", height: "40px" }} className="text-center p-0 bg-dark text-white cursor-pointer">
                <Link href="/profile/Movements">
                    <div className="p-2 w-100 d-flex align-items-center justify-content-end pe-3 h-100">
                        <strong className="m-0"> ver mis movimientos</strong>
                        <h4 className="m-0 p-0 align-middle "><FontAwesomeIcon className="ps-2" icon={faArrowRight} /></h4>
                    </div>
                </Link>
            </div>

            <GlobalTable
                classNameVariant="pt-5"
                tableHeader="Gastos Realizados"
                clickableZone={true}
                clickFunction={redirect}
                dataTable={expenseReportData}
                buttonActivator={
                    <Link generalData={expenseReportData} href="/procesosLegales/ExpensesSteps">
                        <Button variant="white" className="icon border-0 w-50 br-3 custom-btn">
                            <strong>Registrar nuevo gasto</strong>
                        </Button>
                    </Link>
                }
                colsComponent={
                    [
                        {
                            Header: 'Tipo de documento',
                            accessor: 'tipodocumento',
                            cellClass: 'list-item-heading w-40',
                            type: "normal"
                        },
                        {
                            Header: 'Nit',
                            accessor: 'nit',
                            cellClass: 'text-muted  w-100',
                            type: "normal"

                        },
                        {
                            Header: 'Estado',
                            accessor: 'state',
                            cellClass: 'text-muted  w-40',
                            type: "button"
                        }
                    ]
                }
            />
        </>
    )
}
export default ExpensesContainer;