import React from 'react';
import { Container } from "react-bootstrap";
import ViewChargesContainer from '../../components/Teachers/charges/ViewChargesContainer';
import chargeData from '../../data/charge.json';

export async function getStaticProps() {
  return {
    props: {
      currentSidebar: "Teachers",
    },
  }
}

export default function ViewCharges() {
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <ViewChargesContainer chargeData={chargeData} />
    </Container>
  )
}