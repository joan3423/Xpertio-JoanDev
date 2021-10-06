import React from 'react';
import ModalContainer from '../../../pageComponents/ReusablesComponents/ModalContainer';
import ReporteModal from '../../../pageComponents/LandingZone/ReporteGastos/ReporteModal';
import { GlobalTable } from '../../../pageComponents/ReusablesComponents/GlobalTable';
import UsersData from '../../../data/reporteGastos.json';
import { Button, Col, Container } from "react-bootstrap";

export async function getStaticProps() {
  return {
    props: {
      currentSidebar: "Reporte de gastos",
    },
  }
}

export default function ReporteGastos() {
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <GlobalTable
        dataTable={UsersData}
        buttonActivator={
          <ModalContainer
            classNameVariant="icon text-white border-0 bg-blue w-100 hight-rounded"
            ModalHeader="hola"
            classNameIcon="ms-4"
            text="Añadir"
            cheifAction="registrar material"
            ModalHeader="lol"
            ModalChildren={
              <ReporteModal
              />
            }
            ModalFooter={
              <div className="w-100 d-flex justify-content-center">
                xd
              </div>
            }
          />
        }
        colsComponent={
          [
            {
              Header: 'nombre',
              accessor: 'nombre',
              cellClass: 'list-item-heading w-40',

            },
            {
              Header: 'email',
              accessor: 'email',
              cellClass: 'text-muted  w-10',

            },
            {
              Header: 'telefono',
              accessor: 'telefono',
              cellClass: 'text-muted  w-40',

            },
          ]
        }
      />
    </Container>
  )
}