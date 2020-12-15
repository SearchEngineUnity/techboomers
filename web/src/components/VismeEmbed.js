import React, { useEffect } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

function SetHtml({ id, html }) {
  useEffect(() => {
    const script = document.createElement('script');
    // script.id = 'infogram_0_32792c3c-18db-477d-98f7-4813c8598a5d';
    // script.title = 'line demo';
    script.src = 'https://my.visme.co/visme-embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.getElementById('demo-embed').appendChild(script);
  });

  return (
    <Container as="section" id={id}>
      <div
        id="demo-embed"
        dangerouslySetInnerHTML={{
          __html: `<div class="visme_d" data-url="ojn393d4-test-mind-map" data-w="800" data-h="1035" data-domain="my"></div>`,
        }}
      />
    </Container>
  );
}
export default SetHtml;
