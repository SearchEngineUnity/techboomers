import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { Typography } from '@material-ui/core';

const serializers = {
  types: {
    block(props) {
      const { children } = props;
      return (
        <Typography component="p" variant="h3" gutterBottom>
          {children}
        </Typography>
      );
    },
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark.reference;
      const href = slug.current === '/' ? `/` : `/${slug.current}`;

      return <Link to={href}>{children}</Link>;
    },
    externalLink: ({ mark, children }) => {
      const { href } = mark;
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
    jumpLink: ({ mark, children }) => {
      const { idTag } = mark;
      return <Link to={`#${idTag}`}>{children}</Link>;
    },
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
