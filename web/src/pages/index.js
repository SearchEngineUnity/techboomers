import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import Layout from '../containers/layout';
import SEO from '../components/Seo';
import InfogramEmbed from '../components/InfogramEmbed';
import VismeEmbed from '../components/VismeEmbed';

const Home = () => {
  return (
    // <Layout>
    <>
      <SEO title="home page" nofollow noindex />
      <Container>
        <div>Home page</div>
        <InfogramEmbed />
        <VismeEmbed />
      </Container>
    </>
    // </Layout>
  );
};

export default Home;
