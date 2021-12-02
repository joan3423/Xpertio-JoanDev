import React from "react";
import { Container } from "react-bootstrap";
import { connect } from 'react-redux';
import MovementsContainer from "../../components/profile/movement/MovementContainer";

export async function getStaticProps() {
    return {
      props: {
        currentSidebar: "Profile"
      },
    }
  }

function Movements(props) {
  const { movementHistory } = props
    return(
        <Container fluid className="px-lg-4 px-xl-5 mb-5">
          <MovementsContainer movementHistory={movementHistory} />
        </Container>
    )
}

const mapStateToProps = state => ({
  movementHistory: state.movementReducer.movementHistory
})

export default connect(mapStateToProps)(Movements);