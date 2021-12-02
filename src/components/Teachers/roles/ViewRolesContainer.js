import React from 'react';
import { GlobalTable } from '../../GlobalTable';
import ModalContainer from '../../ModalContainer';
import RolesForm from './RolesForm';

const ViewRolesContainer = ({ RoleData }) => (
    <GlobalTable
        isCollapsible={true}
        dataTable={RoleData}
        buttonActivator={
            <ModalContainer
                text="Añadir usuario"
                classNameVariant="icon br-3 custom-btn border-0 w-50 hight-rounded"
                ModalHeader="Añadir un nuevo rol"
                modalContent={<RolesForm />}
            />
        }
        colsComponent={
            [
                {
                    Header: 'Roles',
                    accessor: 'role',
                    cellClass: 'list-item-heading w-40',
                    accordionComponent: {
                        Header: 'Permisos',
                        accessor: 'permits',
                    }
                }
            ]
        }

    />
)
export default ViewRolesContainer;