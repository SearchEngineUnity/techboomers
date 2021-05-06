import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import styled from 'styled-components';
import VideoEmbed from './VideoEmbed';
import BasicTable from './BasicTable';
import CtaBtn from './CtaBtn';
import Illustration from './Illustration';
import InlineImage from './InlineImage';
import HighlightBox from './HightlightBox/HighlightBox';
import SmartTable from './SmartTable';
// import CopyLink from './CopyLink';

const NoIndentUl = styled.ul`
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

const StyledTypography = styled(Typography)`
  margin-top: 1.35em;
`;

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h3':
          return (
            <StyledTypography gutterBottom variant="h3">
              {props.children}
            </StyledTypography>
          );

        case 'h4':
          return (
            <StyledTypography gutterBottom variant="h4">
              {props.children}
            </StyledTypography>
          );

        case 'blockquote':
          return (
            <Box
              component="blockquote"
              fontSize="h3.fontSize"
              fontWeight={100}
              borderColor="primary.main"
              pl={4}
              py={1}
              borderLeft={4}
            >
              &#8220; {props.children} &#8221;
            </Box>
          );

        default:
          return props.children[0] ? (
            <Typography gutterBottom variant="body1">
              {props.children}
            </Typography>
          ) : null;
      }
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
    videoEmbed({ node }) {
      return <VideoEmbed url={node.url} />;
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
      const { idTag } = mark;
      return <Link to={`#${idTag}`}>{children}</Link>;
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
