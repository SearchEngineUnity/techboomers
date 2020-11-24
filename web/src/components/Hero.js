import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import BlockContent from './block-contents/simpleSerializer';
// const StyledDiv = styled.div`
//   text-align: center;
// `;

function Hero({ id, title, media, subtitle }) {
  return (
    <Container as="section" id={id} className="page-section">
      <h1>{title}</h1>
      {media._type === 'illustration' && (
        <Row>
          <Col xs={12} md={8} lg={7} className="mx-auto">
            <img
              src={media.asset.url}
              alt={media.alt}
              loading="eager"
              width="100%"
              height="auto"
              style={{
                marginBottom: '0.5rem',
                aspectRatio: 'calc( attr(width) / attr(height) * 100%)',
              }}
            />
          </Col>
        </Row>
      )}
      {media._type === 'video' && <div>this is a video</div>}
      <BlockContent blocks={subtitle} />
    </Container>
  );
}
export default Hero;
