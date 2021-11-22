import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import VideoEmbed from './VideoEmbed';
import BasicTable from './BasicTable';
import Illustration from './Illustration';
import HighlightBox from './HightlightBox/HighlightBox';
import SmartTable from './SmartTable';
import JumpLink from '../link/JumpLink';
import ExternalLink from '../link/LinkExternal';
import InternalGlobal from '../link/LinkInternalGlobal';
import InternalLocal from '../link/LinkInternalLocal';
import ButtonExternal from '../buttons/ButtonExternal';
import ButtonInternalGlobal from '../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../buttons/ButtonInternalLocal';
import ButtonJumpLink from '../buttons/ButtonJumpLink';
import { mapMuiBtnToProps } from '../../lib/mapToProps';

const StyledTypography = styled(Typography)`
  margin-top: 1.35em;
`;

const serializers = {
  // This is to render the whole block of content without the <div> tag as wrapping container (https://github.com/sanity-io/block-content-to-react)
  container: (props) => <>{props.children}</>,
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h2':
          return (
            <StyledTypography
              gutterBottom
              variant="h2"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </StyledTypography>
          );

        case 'h3':
          return (
            <StyledTypography
              gutterBottom
              variant="h3"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </StyledTypography>
          );

        case 'h4':
          return (
            <StyledTypography
              gutterBottom
              variant="h4"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </StyledTypography>
          );

        case 'h5':
          return (
            <StyledTypography
              gutterBottom
              variant="h5"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </StyledTypography>
          );

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
      return <VideoEmbed url={node.url} ratio={node.ratio} />;
    },
    btnBlockMui({ node }) {
      switch (node.link[0]._type) {
        case 'jumpLink':
          return <ButtonJumpLink {...mapMuiBtnToProps(node)} />;
        case 'internalLocal':
          return <ButtonInternalLocal {...mapMuiBtnToProps(node)} />;
        case 'internalGlobal':
          return <ButtonInternalGlobal {...mapMuiBtnToProps(node)} />;
        case 'externalLink':
          return <ButtonExternal {...mapMuiBtnToProps(node)} />;
        default:
          return <p>under development</p>;
      }
    },
  },
  marks: {
    internalLocal: ({ mark, children }) => {
      const { slug = {} } = mark.reference;
      const { newTab, hashId, parameter } = mark;
      const baseSlug = slug.current === '/' ? `/` : `/${slug.current}`;
      const href = `${baseSlug}${hashId ? `#${hashId}` : ''}${parameter ? `?${parameter}` : ''}`;
      return (
        <InternalLocal href={href} newTab={newTab} className="pt-link">
          {children}
        </InternalLocal>
      );
    },
    internalGlobal: ({ mark, children }) => {
      const { href, newTab } = mark;
      return (
        <InternalGlobal href={href} newTab={newTab} className="pt-link">
          {children}
        </InternalGlobal>
      );
    },
    externalLink: ({ mark, children }) => {
      const { href, noreferrer, newTab } = mark;
      return (
        <ExternalLink href={href} noreferrer={noreferrer} newTab={newTab} className="pt-link">
          {children}
        </ExternalLink>
      );
    },
    jumpLink: ({ mark, children }) => {
      const { hashId } = mark;
      return (
        <JumpLink hash={hashId} className="pt-link">
          {children}
        </JumpLink>
      );
    },
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
