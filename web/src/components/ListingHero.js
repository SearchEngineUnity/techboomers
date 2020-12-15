import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import BlockContent from './block-contents/SeuLPSerializer';

const StyledJumbo = styled(Jumbotron)`
  background-color: ${(props) => props.color};
  color: white;
  padding: 0px;
  margin-bottom: 4rem;
`;

const PreH1 = styled.h1`
  white-space: pre-wrap;
  text-decoration: underline;
  text-decoration-color: #0ba7b6;
`;

function ListingHero({ heroText, title, id, backgroundColor }) {
  return (
    <StyledJumbo fluid key={id} as="section" color={backgroundColor}>
      <Container>
        <Row>
          <Col className="mx-auto" xl={9} lg={8}>
            <PreH1>{title.replace(/\\n/g, '\n')}</PreH1>
            {heroText && <BlockContent blocks={heroText} />}
          </Col>
        </Row>
      </Container>
    </StyledJumbo>
  );
}
export default ListingHero;
