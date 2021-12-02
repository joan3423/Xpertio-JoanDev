import React from "react";
import { Container } from "react-bootstrap";
import HomeContainer from "../../components/profile/home/HomeContainer";

export async function getStaticProps() {
    return {
      props: {
        currentSidebar: "Profile"
      },
    }
  }

export default function Home() {
    return(
        <Container fluid className="px-lg-4 px-xl-5 mb-5">
          <HomeContainer />
        </Container>
    )
}