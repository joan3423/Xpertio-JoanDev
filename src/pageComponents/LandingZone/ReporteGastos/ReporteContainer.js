import React from 'react';
import ModalContainer from '../../../pageComponents/ReusablesComponents/ModalContainer';
import ReporteModal from '../../../pageComponents/LandingZone/ReporteGastos/ReporteModal';
import { GlobalTable } from '../../../pageComponents/ReusablesComponents/GlobalTable';

const ReporteContainer = ({ UsersData }) => (
    <GlobalTable
        dataTable={UsersData.generalData}
        buttonActivator={
            <ModalContainer
                classNameVariant="icon text-white border-0 bg-blue w-100 hight-rounded"
                ModalHeader="hola"
                classNameIcon="ms-4"
                text="Añadir"
                cheifAction="registrar material"
                ModalHeader="hola mundo"
                ModalChildren={
                    <ReporteModal
                    />
                }
                ModalFooter={
                    <div className="w-100 d-flex justify-content-center">
                        esto es un ejemplo
                    </div>
                }
            />
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
)
export default ReporteContainer;