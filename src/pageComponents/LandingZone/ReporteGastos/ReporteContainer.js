import React from 'react';
import { GlobalTable } from '../../../components/GlobalTable';
import Link from 'next/dist/client/link';
import { Button } from 'react-bootstrap';
import ModalContainer from '../../../components/ModalContainer';

const ReporteContainer = ({ UsersData }) => (
    <>
    <ModalContainer 
    text="ejemplo"
    ModalChildren="hola"
    />
    <GlobalTable
        dataTable={UsersData.generalData}
        buttonActivator={
            <Link href="/LandingZone/procesosLegales/Gastos">
                <Button variant="primary" className="icon text-white border-0 bg-blue w-50 hight-rounded">
                    Registrar nuevo gasto
                </Button>
            </Link>
        }
        colsComponent={
            [
                {
                    Header: 'Reporte',
                    accessor: 'nombre',
                    cellClass: 'list-item-heading w-40',

                },
                {
                    Header: 'Tipo',
                    accessor: 'email',
                    cellClass: 'text-muted  w-100',

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
export default ReporteContainer;