import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import BasicTable from './BasicTable';
import CtaBtn from './CtaBtn';
import Illustration from './Illustration';
import InlineImage from './InlineImage';
import InlineIcon from './InlineIcon';
import HighlightBox from './HightlightBox/HighlightBox';
import SmartTable from './SmartTable';

const StyledReactPlayer = styled(ReactPlayer)`
  margin-bottom: 1rem;
`;

const NoIndentUl = styled.ul`
  list-style-type: circle;
  margin-left: 1.4rem;
  padding-left: 0;
  margin-bottom: 0;

  & > li {
    position: relative;
  }
`;

const NoIndentOl = styled.ol`
  list-style-type: decimal;
  margin-left: 1.4rem;
  padding-left: 0;
  margin-bottom: 0;

  & > li {
    position: relative;
  }
`;

const PaddedLi = styled.li`
  margin-bottom: 1rem;
`;

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return (
            <Typography
              variant="h1"
              id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}
            >
              {props.children}
            </Typography>
          );

        case 'h2':
          return (
            <Typography
              variant="h2"
              id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}
            >
              {props.children}
            </Typography>
          );

        case 'h3':
          return (
            <Typography
              variant="h3"
              id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}
            >
              {props.children}
            </Typography>
          );

        case 'h4':
          return (
            <Typography
              variant="h4"
              id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}
            >
              {props.children}
            </Typography>
          );

        case 'h5':
          return (
            <Typography
              variant="h5"
              id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}
            >
              {props.children}
            </Typography>
          );

        case 'h6':
          return (
            <Typography
              variant="h6"
              id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}
            >
              {props.children}
            </Typography>
          );

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>;

        default:
          return props.children[0] ? (
            <Typography variant="body1">{props.children}</Typography>
          ) : (
            <br />
          );
      }
    },
    ctaButton({ node }) {
      return <CtaBtn btn={node} />;
    },
    illustration({ node }) {
      return <Illustration illustration={node} />;
    },
    basicTable({ node }) {
      return <BasicTable basicTable={node} />;
    },
    highlightBox({ node }) {
      return <HighlightBox box={node} />;
    },
    smartTable({ node }) {
      return <SmartTable smartTable={node} />;
    },
    instagram({ node }) {
      return <p>Work in progress</p>;
    },
    videoEmbed({ node }) {
      return <StyledReactPlayer url={node.url} width="100%" controls />;
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
        <Link to={href} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      );
    },
    jumpLink: ({ mark, children }) => {
      const { heading } = mark;
      return <Link to={`#${heading.toLowerCase().trim().replace(/ /g, '-')}`}>{children}</Link>;
    },
    inlineImage: ({ mark, children }) => {
      switch (mark._type) {
        case 'inlineImage':
          if (mark.asset) {
            return <InlineImage image={mark.asset} alt={children[0]} />;
          }
          return null;

        default:
          return <p>doesn't work</p>; // eslint-disable-line
      }
    },
    inlineIcon: ({ mark, children }) => {
      switch (mark._type) {
        case 'inlineIcon':
          if (mark.asset) {
            return <InlineIcon image={mark.asset} alt={children[0]} />;
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
  listItem: ({ children }) => <PaddedLi>{children}</PaddedLi>,
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
