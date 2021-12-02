
import { AllowedTo } from "react-abac";
import { Container } from "react-bootstrap";
import { connect } from 'react-redux';

export async function getStaticProps() {
  return {
    props: {
      title: "Xpertio",
    },
  }
}
function Index(props) {
  const { permissions } = props
  console.log(permissions)
  return (
    <AllowedTo perform={permissions.EDIT_POST}>
      <Container fluid className="px-lg-4 px-xl-5">
        <div>Esto solo lo podra ver un Admin</div>
      </Container>
    </AllowedTo>
  )
}

const mapStateToProps = state => ({
  permissions: state.rolesreducer.permissions
})

export default connect(mapStateToProps)(Index);