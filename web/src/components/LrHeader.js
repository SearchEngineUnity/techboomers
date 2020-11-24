import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
// import styled from 'styled-components';

// const StyledContainer = styled(Container)`
//   background-color: #193753;
//   color: white;

//   @media (max-width: 991px) {
//     padding: 1.5rem;
//     width: auto;
//   }

//   @media screen and (max-width: 575px) {
//     padding 1.5rem;
//     width: auto;
//   }
// `;

// const StyledDiv = styled.div`
//   border: 1px solid white;
//   text-align: center;
//   padding: 0.75rem;

//   @media screen and (max-width: 575px) {
//     padding 0.5rem;

//   }
// `;

function LrHeader() {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col className="col-md-8 col-12">
          <a href="https://sunnyguides.ca">
            <img className="img-fluid" src="" alt="" />
          </a>
        </Col>
        <Col className="col-md-4 col-12">
          <div>Button goes here</div>
        </Col>
      </Row>
    </Container>
  );
}

export default LrHeader;
