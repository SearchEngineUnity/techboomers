import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import Layout from '../containers/altLayout';
import SEO from '../components/Seo';
import sunny from '../images/SY-submit-thankyou-image.svg';

const Hyperlink = styled.a`
  &:link,
  &:visited {
    font-weight: bold;
    color: #2664b0;
  }

  &:hover,
  &:focus,
  &:active {
    color: #fcce09;
  }
`;

const GatsbyLink = styled(Link)`
  &:link,
  &:visited {
    font-weight: bold;
    color: #2664b0;
  }

  &:hover,
  &:focus,
  &:active {
    color: #fcce09;
  }
`;

const ThankYouPage = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 60000);
  });

  return (
    <Layout>
      <SEO title="Thank you for contacting us" nofollow noindex />
      <Container>
        <Row>
          <Col xl="6" lg="8" md="10" sm="12" className="mx-auto">
            <h1>Thank You For Getting in Touch with Us!</h1>
            <p>
              Thank you for taking time to discover Sunny Guides and sending us a message! We’ll be
              in touch soon.
            </p>
            <Row>
              <Col xs="7" sm="7" md="7" lg="5" xl="6" className="mx-auto">
                <img src={sunny} alt="Sunny has receive your mail" />
              </Col>
            </Row>
            <p style={{ fontWeight: 'bold' }}>
              Interested in learning more Internet tips and tricks, or discovering awesome new sites
              and apps?
            </p>
            <p>
              We offer more than 100 website and app courses absolutely free on our{' '}
              <Hyperlink href="https://techboomers.com" target="_blank" rel="noopener noreferrer">
                Techboomers site
              </Hyperlink>
              . It’s a free educational site that teaches you how to do just about everything online
              using your favourite websites, apps, devices, and more!
            </p>
            <p>
              Plus, don’t miss exploring our{' '}
              <Hyperlink
                href="https://www.youtube.com/channel/UCdtwPYK_0LG3ll1Op0iAMkQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Techboomers YouTube
              </Hyperlink>{' '}
              channel that offers even more helpful tutorials with step-by-step videos that 350,000+
              subscribers have come to love and rely on.
            </p>
            <p>Have a sunny day!</p>
            <br />
            <p style={{ fontWeight: 'bold' }}>
              &gt; <GatsbyLink to="/">Return to home page</GatsbyLink>
            </p>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </Layout>
  );
};

export default ThankYouPage;
