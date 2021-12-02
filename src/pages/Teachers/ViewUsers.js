import React from 'react';
import { Container } from "react-bootstrap";
import ViewUsersContainer from '../../components/Teachers/users/ViewUsersContainer';
import UsersData from '../../data/users.json';

export async function getStaticProps() {
  return {
    props: {
      currentSidebar: "Teachers",
    },
  }
}

export default function ViewUsers() {
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <ViewUsersContainer UsersData={UsersData} />
    </Container>
  )
}