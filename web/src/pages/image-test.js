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

const NoPaddingCol = styled(Col)`
  border: 4px red solid;
  padding: 0;
`;

const ImageContainers = ({ data }) => {
  const { edges: images } = data.allSanityTestImage;
  console.log(images);
  return (
    <>
      <Container>
        <h2>This is width: 100%, height: auto</h2>
        <Row style={{ marginBottom: '30px' }}>
          {images.map(({ node }) => {
            console.log(node.image);
            return (
              <NoPaddingCol sm={12} md={4}>
                <Image
                  {...node.image}
                  css={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </NoPaddingCol>
            );
          })}
        </Row>
        <h2>This is width: 100%, height: auto, max height: 100px, object fit: cover</h2>
        <Row style={{ marginBottom: '30px' }}>
          {images.map(({ node }) => (
            <NoPaddingCol sm={12} md={4}>
              <Image
                {...node.image}
                css={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '100px',
                  objectFit: 'cover',
                }}
              />
            </NoPaddingCol>
          ))}
        </Row>
        <h2>This is width: 100%, height: 400px, object fit: cover</h2>
        <Row style={{ marginBottom: '30px' }}>
          {images.map(({ node }) => (
            <NoPaddingCol sm={12} md={4}>
              <Image
                {...node.image}
                css={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                }}
              />
            </NoPaddingCol>
          ))}
        </Row>
      </Container>
      <Container>
        <h2>This is what the orignal image looks like as background image</h2>
      </Container>
      <Container fluid style={{ padding: '0' }}>
        {images
          .filter((x) => x.node.title === 'Background')
          .map(({ node }) => {
            console.log(node);
            return (
              <Image
                {...node.image}
                css={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'cover',
                }}
              />
            );
          })}
      </Container>
      <Container>
        <h2>After using hotspot to better position the center of the image</h2>
      </Container>
      <Container fluid style={{ padding: '0' }}>
        {images
          .filter((x) => x.node.title === 'Background2')
          .map(({ node }) => {
            console.log(node);
            return (
              <Image
                {...node.image}
                css={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'cover',
                }}
              />
            );
          })}
      </Container>
      <Container>
        <h2>Using the same image in a vertical aspect</h2>
        <Row>
          <NoPaddingCol sm={12} md={4}>
            <h3>Original</h3>
            {images
              .filter((x) => x.node.title === 'Vertical')
              .map(({ node }) => {
                console.log(node);
                return (
                  <Image
                    {...node.image}
                    css={{
                      width: '100%',
                      height: '500px',
                      objectFit: 'cover',
                    }}
                  />
                );
              })}
          </NoPaddingCol>
          <NoPaddingCol sm={12} md={4}>
            <h3>Hotspot</h3>
            {images
              .filter((x) => x.node.title === 'Vertical2')
              .map(({ node }) => {
                console.log(node);
                return (
                  <Image
                    {...node.image}
                    css={{
                      width: '100%',
                      height: '500px',
                      objectFit: 'cover',
                    }}
                  />
                );
              })}
          </NoPaddingCol>
          <NoPaddingCol sm={12} md={4}>
            <h3>Hotspot and crop</h3>
            {images
              .filter((x) => x.node.title === 'Vertical3')
              .map(({ node }) => {
                console.log(node);
                return (
                  <Image
                    {...node.image}
                    css={{
                      width: '100%',
                      height: '500px',
                      objectFit: 'cover',
                    }}
                  />
                );
              })}
          </NoPaddingCol>
        </Row>
      </Container>
      <br />
      <br />
    </>
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
