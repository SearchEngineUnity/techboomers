import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import styled from 'styled-components';
import Illustration from './Illustration';
import InlineImage from './InlineImage';

const NoIndentUl = styled.ul`
  list-style-type: disk;
  margin-left: 1.4rem;
  padding-left: 0;

  & > li {
    position: relative;
  }
`;

const NoIndentOl = styled.ol`
  list-style-type: decimal;
  margin-left: 1.4rem;
  padding-left: 0;

  & > li {
    position: relative;
  }
`;

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h2':
          return (
            <Typography gutterBottom variant="h2">
              {props.children}
            </Typography>
          );

        case 'h3':
          return (
            <Typography gutterBottom variant="h3">
              {props.children}
            </Typography>
          );

        case 'h4':
          return (
            <Typography gutterBottom variant="h4">
              {props.children}
            </Typography>
          );

        case 'h5':
          return (
            <Typography gutterBottom variant="h5">
              {props.children}
            </Typography>
          );

        case 'h6':
          return (
            <Typography gutterBottom variant="h6">
              {props.children}
            </Typography>
          );

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>;

        default:
          return props.children[0] ? (
            <Typography gutterBottom variant="body1">
              {props.children}
            </Typography>
          ) : (
            <br />
          );
      }
    },

    illustration({ node }) {
      return <Illustration illustration={node} />;
    },
  },
  marks: {
    hashId: ({ children }) => children,
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark.reference;
      const href = slug.current === '/' ? `/` : `/${slug.current}`;
      return <Link to={href}>{children}</Link>;
    },
    externalLink: ({ mark, children }) => {
      const { href } = mark;
      return (
        <Link to={href} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      );
    },
    inlineImage: ({ mark, children }) => {
      switch (mark._type) {
        case 'inlineImage':
          if (mark.asset) {
            return <InlineImage image={mark} alt={children[0]} />;
          }
          return null;

        default:
          return <p>doesn't work</p>; // eslint-disable-line
      }
    },
  },
  list: ({ children }) => {
    switch (children[0].props.node.listItem) {
      case 'bullet':
        return <NoIndentUl>{children}</NoIndentUl>;
      default:
        return <NoIndentOl>{children}</NoIndentOl>;
    }
  },
  listItem: ({ children }) => (
    <Typography variant="body1" component="li">
      {children}
    </Typography>
  ),
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
