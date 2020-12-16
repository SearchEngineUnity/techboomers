import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import BlockContent from './block-contents/SeuLPSerializer';

const Background = styled.div`
  background-image: url(${(props) => props.image});
  background-size: contain;
  padding-top: 120px;
  padding-bottom: 120px;
  margin: auto;
`;
const StyledJumbo = styled(Jumbotron)`
  background-color: ${(props) => props.color};
  color: white;
  padding: 0px;
  margin-bottom: 4rem;
`;
const PreH1 = styled.h1`
  white-space: pre-wrap;
`;

function ListingHero({
  id,
  title,
  heroText,
  mediaType,
  video,
  image,
  imageAlt,
  imageURL,
  backgroundColor,
  mediaIsBg,
}) {
  return (
    <StyledJumbo fluid key={id} as="section" color={backgroundColor}>
      <Background image={imageURL}>
        <Container>
          <Row>
            <Col className="mx-auto" xl={9} lg={8}>
              <PreH1>{title.replace(/\\n/g, '\n')}</PreH1>
              {heroText && <BlockContent blocks={heroText} />}
            </Col>
          </Row>
        </Container>
      </Background>
    </StyledJumbo>
  );
}

ListingHero.defaultProps = {
  imageURL: '',
  backgroundColour: '#00ff00',
};

ListingHero.propsTypes = {
  imageURL: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default ListingHero;
