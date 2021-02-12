import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <Typography component="h1">{props.children}</Typography>;

        case 'h2':
          return <Typography component="h2">{props.children}</Typography>;

        case 'h3':
          return <Typography component="h3">{props.children}</Typography>;

        case 'h4':
          return <Typography component="h4">{props.children}</Typography>;

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>;

        default:
          return (
            <Typography component="p" variant="body1">
              {props.children}
            </Typography>
          );
      }
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
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
