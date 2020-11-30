import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import sanityConfig from '../../../sanityConfig';

function Illustration({ illustration }) {
  const imageFluid = illustration?.asset?.id;
  const fluidProps = getFluidGatsbyImage(imageFluid, {}, sanityConfig);
  const imageFilename = illustration?.asset?.originalFilename || 'image';

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
