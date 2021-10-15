import React from 'react';
import { Container } from "react-bootstrap";

export async function getStaticProps() {
  return {
    props: {
      currentSidebar: "Reporte de gastos",
      currentLink: "Reporte de gastos",
    },
  }
}

export default function ReporteGastos() {
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      aca estaran los gastos
    </Container>
  )
}