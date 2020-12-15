import React, { useEffect } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

function SetHtml({ id, html }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'infogram_0_32792c3c-18db-477d-98f7-4813c8598a5d';
    script.title = 'line demo';
    script.src = 'https://e.infogram.com/js/dist/embed.js?vy1';
    script.type = 'text/javascript';
    script.async = true;
    document.getElementById('demo-embed').appendChild(script);
  });

  return (
    <Container as="section" id={id}>
      <div id="demo-embed" />
    </Container>
  );
}
export default SetHtml;
