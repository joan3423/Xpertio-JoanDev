import { Container, Row } from "react-bootstrap"
import FirstLoginSection from "../components/Login/FirstLoginSection"
import SecondLoginSection from "../components/Login/SecondLoginSection"

export async function getStaticProps() {
  return {
    props: {
      title: "Login",
      pageHolderClass: "page-holder align-items-center py-4 bg-gray-100 vh-100",
      hideHeader: true,
      hideFooter: true,
      hideSidebar: true,
      currentSidebar: "None",
    },
  }
}
export default function login() {
  return (
    <div className="position-absolute background-gradient w-100 h-100">
      <div className="position-relative d-grid align-items-center overflow-auto h-100 w-100 m-0 pt-5 pb-5 pe-md-3 ps-md-3">
        <Container>
          <Row className="align-items-center">
            <FirstLoginSection />
            <SecondLoginSection />
          </Row>
        </Container>
      </div>
    </div>
  )
}
