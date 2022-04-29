/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Typography, Grid, Paper, Box } from '@material-ui/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import FluidImgBlock from '../components/blocks/FluidImgBlock';
import SvgImgBlock from '../components/SvgImage';

const ImageTest = ({ data }) => {
  const { id, url, gatsbyImageData } = data.allSanityImageAsset.edges[0].node;
  console.log(gatsbyImageData);
  const isGatsbyImage = true;
  return (
    <div style={{ width: '400px', height: '400px' }}>
      {isGatsbyImage ? (
        <GatsbyImage
          image={gatsbyImageData}
          objectFit="contain"
          style={{
            display: 'block',
          }}
        />
      ) : (
        <img
          src={url}
          style={{
            display: 'block',
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
          }}
        />
      )}
    </div>
  );
};

export default function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          allSanityImageAsset(filter: { extension: {}, filename: { eq: "car.svg" } }) {
            edges {
              node {
                id
                _createdAt
                _id
                _key
                _rawMetadata
                _rawSource(resolveReferences: { maxDepth: 10 })
                _rev
                _type
                _updatedAt
                altText
                assetId
                description
                extension
                filename
                filesize
                gatsbyImage
                gatsbyImageData
                height
                label
                mimeType
                path
                publicUrl
                title
                uploadId
                url
                width
              }
            }
          }
        }
      `}
      render={(data) => <ImageTest data={data} {...props} />}
    />
  );
}
