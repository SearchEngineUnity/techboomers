import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import styled from 'styled-components';
import VideoEmbed from './VideoEmbed';
import BasicTable from './BasicTable';
import CtaBtn from './CtaBtn';
import Illustration from './Illustration';
import InlineImage from './InlineImage';
import HighlightBox from './HightlightBox/HighlightBox';
import SmartTable from './SmartTable';
import CopyLink from './CopyLink';

const NoIndentUl = styled.ul`
  list-style-type: circle;
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
            <Typography
              variant="h2"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
              <CopyLink
                id={
                  props.node.markDefs.length !== 0
                    ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                    : undefined
                }
              />
            </Typography>
          );

        case 'h3':
          return (
            <Typography
              variant="h3"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </Typography>
          );

        case 'h4':
          return (
            <Typography
              variant="h4"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </Typography>
          );

        case 'h5':
          return (
            <Typography
              variant="h5"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </Typography>
          );

        case 'h6':
          return (
            <Typography
              variant="h6"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
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
      return <VideoEmbed url={node.url} />;
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
