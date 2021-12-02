import React from 'react';
import { Container } from "react-bootstrap";

export async function getStaticProps() {
  return {
    props: {
      currentSidebar: "Logistica"
    },
  }
}

function LogisticExample() {
  return (
    <Container fluid className="px-lg-4 px-xl-5" />
  )
}

export default LogisticExample;