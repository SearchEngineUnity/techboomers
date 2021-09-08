import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sanityConfig from '../../../sanityConfig';
import { useWindowSize } from '../../hooks/useWindowSize';

const StyledGI = styled(GatsbyImage)`
  /* Color the border and text with theme.main */
  max-height: ${(props) => `${props.custommaxheight}px`};
`;

function Illustration({ illustration, table }) {
  const imageFluid = illustration?.asset;
  const windowSize = useWindowSize();
  const windowHeight = windowSize.height;
  const imageHeight = illustration?.asset?.metadata?.dimensions?.height;
  const customHeight = illustration?.height
    ? (illustration?.height / 100) * windowHeight
    : undefined;
  const maxHeight =
    customHeight && customHeight < Math.round(imageHeight) ? customHeight : imageHeight;
  const fluidProps = getGatsbyImageData(imageFluid, {}, sanityConfig);

  return (
    <Box component="figure" justifyContent="center" my={table ? 0 : '16px'} mx={table ? 0 : '40px'}>
      <StyledGI
        image={fluidProps}
        alt={illustration.alt}
        style={{ display: 'block' }}
        objectFit="contain"
        custommaxheight={maxHeight}
      />
      {illustration.caption && (
        <Typography component="figcaption" variant="body1">
          {illustration.caption}
        </Typography>
      )}
    </Box>
  );
}

export default Illustration;
