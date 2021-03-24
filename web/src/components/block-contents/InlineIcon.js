import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import styled from 'styled-components';
import sanityConfig from '../../../sanityConfig';

function InlineIcon({ image, alt }) {
  const imageFluid = image?.id;
  const fluidProps = getFluidGatsbyImage(imageFluid, {}, sanityConfig);

  return (
    <div style={{ width: '1rem', height: '1rem', display: 'inline-block' }}>
      <Img fluid={fluidProps} alt={alt} />
    </div>
    // <span>
    //   <img src={image.url} height="1rem" width="auto" alt={alt} />
    // </span>
  );
}

export default InlineIcon;
