import React from 'react';
import { GlobalTable } from '../../GlobalTable';
import ModalContainer from '../../ModalContainer';
import UsersForm from './UsersForm';

const ViewUsersContainer = ({ UsersData }) => (
    <GlobalTable
        dataTable={UsersData}
        buttonActivator={
            <ModalContainer
                text="Añadir usuario" 
                classNameVariant="icon br-3 custom-btn border-0 w-50 hight-rounded"
                ModalHeader="Añadir un nuevo usuario"
                modalContent={<UsersForm />}

            />
        }
        colsComponent={
            [
                {
                    Header: 'Nombre',
                    accessor: 'name',
                    cellClass: 'list-item-heading w-40',
                    type: "normal"

                },
                {
                    Header: 'Rol',
                    accessor: 'role',
                    cellClass: 'text-muted  w-100',
                    type: "normal"

                },
                {
                    Header: 'Correo',
                    accessor: 'email',
                    cellClass: 'text-muted  w-40',
                    type: "normal"
                }
            ]
        }
    />
)
export default ViewUsersContainer;