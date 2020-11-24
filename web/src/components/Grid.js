import React from 'react';
import { Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Card from './Card1';
import { mapCardToProps } from '../lib/mapToProps';

const Title = styled.h2`
  color: #2664b0;
`;

function Grid({ id, title, subtitle, col, cards }) {
  return (
    <Container as="section" id={id} className="guide-section">
      <Title>{title}</Title>
      <p>{subtitle}</p>
      <Row>
        {cards.map((card) => {
          return (
            <div className={col} key={card._id} style={{ marginBottom: '30px' }}>
              <Card {...mapCardToProps(card)} />
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default Grid;
