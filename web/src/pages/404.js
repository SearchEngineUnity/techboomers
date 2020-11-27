import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import Layout from '../containers/layout';
import SEO from '../components/Seo';

const PageNotFound = () => {
  return (
    <Layout>
      <SEO title="404 - Page not found" nofollow noindex />
      <Container>
        <div>404</div>
      </Container>
    </Layout>
  );
};

export default PageNotFound;
