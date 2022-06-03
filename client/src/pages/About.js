import React from "react";
import Container from "react-bootstrap/esm/Container";

function About() {
  return (
    <Container fluid>
      <Container className="mx-auto mt-5">
        <h1>CraigsBay</h1>
        <br></br>
        <h4>
          <strong>The</strong> Online Raffle Platform
        </h4>
        <hr></hr>
        <p>CraigsBay is an online donation based raffle platform. </p>
        <p>
          Users can post listings, enter raffles and win exciting and
          interesting items reducing waste by keeping things in circulation!{" "}
        </p>
      </Container>
    </Container>
  );
}

export default About;
