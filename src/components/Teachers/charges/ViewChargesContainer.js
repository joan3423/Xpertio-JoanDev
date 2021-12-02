import React from 'react';
import { GlobalTable } from '../../GlobalTable';
import ModalContainer from '../../ModalContainer';
import ChargesForm from './ChargesForm';

const ViewChargesContainer = ({ chargeData }) => (
    <GlobalTable
        dataTable={chargeData}
        buttonActivator={
            <ModalContainer
                text="Añadir usuario" 
                classNameVariant="icon br-3 custom-btn border-0 w-50 hight-rounded"
                ModalHeader="Añadir un nuevo cargo"
                modalContent={<ChargesForm />}

            />
        }
        colsComponent={
            [
                {
                    Header: 'Nombre del cargo',
                    accessor: 'name',
                    cellClass: 'list-item-heading w-40',
                    type: "normal"

                },
                {
                    Header: 'Descripción',
                    accessor: 'description',
                    cellClass: 'text-muted  w-100',
                    type: "normal"

                }
            ]
        }
    />
)
export default ViewChargesContainer;