import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Hyperlink = styled.a`
  &:link,
  &:visited {
    font-weight: bold;
    color: #2664b0;
  }
`;

const GatsbyLink = styled(Link)`
  &:link,
  &:visited {
    font-weight: bold;
    color: #2664b0;
  }
`;

const serializers = {
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark.reference;
      const href = slug.current === '/' ? `/` : `/${slug.current}`;

      return <GatsbyLink to={href}>{children}</GatsbyLink>;
    },
    externalLink: ({ mark, children }) => {
      const { href } = mark;
      return (
        <Hyperlink href={href} target="_blank" rel="noopener noopener noreferrer">
          {children}
        </Hyperlink>
      );
    },
    inlineImage: ({ mark, children }) => {
      return <img src={mark.asset.url} alt={children} loading="lazy" />;
    },
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
