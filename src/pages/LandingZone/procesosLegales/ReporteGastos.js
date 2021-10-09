import React from 'react';
import { Container } from "react-bootstrap";
import ReporteContainer from '../../../pageComponents/LandingZone/ReporteGastos/ReporteContainer';
import UsersData from '../../../data/reporteGastos.json';

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
      <ReporteContainer UsersData={UsersData} />
    </Container>
  )
}