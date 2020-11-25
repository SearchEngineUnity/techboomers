import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import sanityConfig from '../../../sanityConfig';

function Illustration({ illustration }) {
  const imageFluid =
    illustration?.image?.asset?.id || 'image-ba93a9e77b70952257bc194613928b6374960f11-220x124-png';
  const fluidProps = getFluidGatsbyImage(imageFluid, {}, sanityConfig);
  const imageFilename = illustration?.image?.asset?.originalFilename || 'image';

  return (
    <div style={{ marginBottom: '16px' }}>
      <figure className="text-center">
        <Img fluid={fluidProps} alt={illustration.alt} title={imageFilename} />
        {illustration.caption && <figcaption>{illustration.caption}</figcaption>}
      </figure>
    </div>
  );
}

export default Illustration;
