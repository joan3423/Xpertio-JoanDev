
import { Container } from "react-bootstrap";

export async function getStaticProps() {
  return {
    props: {
      title: "Xpertio",
    },
  }
}
export default function Index() {
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <div>hola</div>
    </Container>
  )
}
