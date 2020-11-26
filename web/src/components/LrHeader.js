import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

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
