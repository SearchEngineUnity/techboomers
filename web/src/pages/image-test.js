import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';
import { navigate } from '@reach/router';
import PropTypes from 'prop-types';
import Image from 'gatsby-plugin-sanity-image';
import Img from 'gatsby-image';
import Layout from '../containers/layout';
import SEO from '../components/Seo';

const ImageContainers = ({ data }) => {
  console.log(data);

  const { edges: images } = data.allSanityTestImage;

  console.log(images);
  return (
    <Container>
      <h2>This is width: 100%, height: auto</h2>
      <Row style={{ marginBottom: '30px' }}>
        {images.map(({ node }) => {
          console.log(node.image);
          return (
            <Col sm={12} md={4}>
              <Image
                {...node.image}
                css={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Col>
          );
        })}
      </Row>
      <h2>This is width: 100%, height: auto, max height: 100px, object fit: cover</h2>
      <Row style={{ marginBottom: '30px' }}>
        {images.map(({ node }) => (
          <Col sm={12} md={4}>
            <Image
              {...node.image}
              css={{
                width: '100%',
                height: 'auto',
                maxHeight: '100px',
                objectFit: 'cover',
              }}
            />
          </Col>
        ))}
      </Row>
      <h2>This is width: 100%, height: 400px, object fit: cover</h2>
      <Row style={{ marginBottom: '30px' }}>
        {images.map(({ node }) => (
          <Col sm={12} md={4}>
            <Image
              {...node.image}
              css={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default function Imagelist(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityTestImage {
            edges {
              node {
                title
                image {
                  ...ImageWithPreview
                }
              }
            }
          }
        }
      `}
      render={(data) => <ImageContainers data={data} {...props} />}
    />
  );
}
