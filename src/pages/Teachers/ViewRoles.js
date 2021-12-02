import React from 'react';
import { Container } from "react-bootstrap";
import ViewRolesContainer from '../../components/Teachers/roles/ViewRolesContainer';
import roleData from '../../data/rol.json';

export async function getStaticProps() {
  return {
    props: {
      currentSidebar: "Teachers",
    },
  }
}

export default function ViewRoles() {
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <ViewRolesContainer RoleData={roleData} />
    </Container>
  )
}